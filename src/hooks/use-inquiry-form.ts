import { useState, type FormEvent } from "react"

type Status = "idle" | "sending" | "sent" | "error"

/**
 * Posts a form's fields to `/api/inquiry`, which emails them to LIFT.
 * `form` selects the field list the server validates against (api/inquiry.ts).
 */
export function useInquiryForm(form: "inquiry" | "proposal") {
  const [status, setStatus] = useState<Status>("idle")

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === "sending") return

    const fields = Object.fromEntries(new FormData(event.currentTarget))
    setStatus("sending")
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form, fields }),
      })
      setStatus(response.ok ? "sent" : "error")
    } catch {
      setStatus("error")
    }
  }

  return {
    sent: status === "sent",
    sending: status === "sending",
    failed: status === "error",
    handleSubmit,
    reset: () => setStatus("idle"),
  }
}
