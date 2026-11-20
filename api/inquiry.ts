/**
 * Vercel serverless function: emails a website form submission to LIFT
 * through the Resend API (https://resend.com/docs/api-reference/emails/send-email).
 *
 * Required environment variables:
 *   RESEND_API_KEY  API key from the Resend dashboard.
 *   RESEND_FROM     Sender, on a domain verified in Resend,
 *                   e.g. "LIFT Website <website@pcitech.com.ph>".
 * Optional: INQUIRY_TO (default lift@pcitech.com.ph).
 */

const RESEND_ENDPOINT = "https://api.resend.com/emails"

const DEFAULT_RECIPIENT = "lift@pcitech.com.ph"

type FieldSpec = { label: string; required?: boolean; multiline?: boolean }

type FormSpec = {
  title: string
  /** Field whose value is appended to the email subject. */
  subjectField: string
  fields: Record<string, FieldSpec>
}

/** Field names match the `name` attributes of the forms in src/pages. */
const FORMS: Record<string, FormSpec> = {
  inquiry: {
    title: "Website inquiry",
    subjectField: "interest",
    fields: {
      name: { label: "Full name", required: true },
      email: { label: "Email", required: true },
      mobile: { label: "Mobile" },
      interest: { label: "Interest", required: true },
      org: { label: "Organization" },
      message: { label: "Message", required: true, multiline: true },
    },
  },
  proposal: {
    title: "Training proposal request",
    subjectField: "org",
    fields: {
      org: { label: "Organization", required: true },
      person: { label: "Contact person", required: true },
      email: { label: "Work email", required: true },
      mobile: { label: "Mobile", required: true },
      audience: { label: "Type of audience", required: true },
      count: { label: "Approximate participants", required: true },
      program: { label: "Preferred program", required: true },
      when: { label: "Preferred date or quarter" },
      objective: { label: "Training objective", required: true, multiline: true },
      delivery: { label: "Delivery preference", required: true },
      location: { label: "Location" },
      details: { label: "Additional details", multiline: true },
    },
  },
}

const MAX_LINE = 200
const MAX_TEXT = 5000
const MAX_BODY_BYTES = 20_000
const EMAIL_PATTERN = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/

function json(status: number, body: { ok: boolean; error?: string }) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  })
}

function clean(value: unknown, multiline: boolean) {
  if (typeof value !== "string") return ""
  const text = multiline
    ? value.replace(/\r\n?/g, "\n").slice(0, MAX_TEXT)
    : value.replace(/[\r\n]+/g, " ").slice(0, MAX_LINE)
  return text.trim()
}

export async function POST(request: Request) {
  const raw = await request.text()
  if (raw.length > MAX_BODY_BYTES) return json(413, { ok: false, error: "Submission too large." })

  let payload: { form?: unknown; fields?: Record<string, unknown> }
  try {
    payload = JSON.parse(raw)
  } catch {
    return json(400, { ok: false, error: "Invalid request." })
  }

  const spec = typeof payload.form === "string" ? FORMS[payload.form] : undefined
  const input = payload.fields
  if (!spec || !input || typeof input !== "object") {
    return json(400, { ok: false, error: "Invalid request." })
  }

  // Honeypot: real visitors never see or fill this field. Pretend it worked.
  if (clean(input.website, false)) return json(200, { ok: true })

  if (!input.consent) return json(400, { ok: false, error: "Consent is required." })

  const lines: string[] = []
  const values: Record<string, string> = {}
  for (const [name, field] of Object.entries(spec.fields)) {
    const value = clean(input[name], field.multiline ?? false)
    if (field.required && !value) {
      return json(400, { ok: false, error: `${field.label} is required.` })
    }
    values[name] = value
    if (value) lines.push(field.multiline ? `${field.label}:\n${value}` : `${field.label}: ${value}`)
  }

  if (!EMAIL_PATTERN.test(values.email)) {
    return json(400, { ok: false, error: "Enter a valid email address." })
  }

  const { RESEND_API_KEY, RESEND_FROM } = process.env
  if (!RESEND_API_KEY || !RESEND_FROM) {
    console.error("Inquiry email is not configured: set RESEND_API_KEY and RESEND_FROM.")
    return json(500, { ok: false, error: "Email is not configured." })
  }

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: [process.env.INQUIRY_TO || DEFAULT_RECIPIENT],
        reply_to: values.email,
        subject: `${spec.title}: ${values[spec.subjectField]}`,
        text: `${spec.title} from the LIFT website\n\n${lines.join("\n\n")}\n\nThe sender agreed to the privacy consent statement on the form.\nReply to this email to respond to them directly.\n`,
      }),
    })
    if (!response.ok) {
      console.error("Resend rejected the inquiry email:", response.status, await response.text())
      return json(502, { ok: false, error: "The message could not be sent." })
    }
  } catch (error) {
    console.error("Inquiry email failed to send:", error)
    return json(502, { ok: false, error: "The message could not be sent." })
  }

  return json(200, { ok: true })
}
