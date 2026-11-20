import type { FormEvent } from "react"

import { ArrowIcon, Icon, type IconName } from "@/components/icons"
import { Field, FormSubmit, FormSuccess, Optional, PhotoPlaceholder } from "@/components/site/blocks"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { Textarea } from "@/components/ui/textarea"
import { programs } from "@/data/programs"
import { useInquiryForm } from "@/hooks/use-inquiry-form"
import { CONTACT_EMAIL } from "@/data/site"

const audiences: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "book",
    title: "Schools, colleges and universities",
    body: "Faculty development and student enrichment cohorts.",
  },
  {
    icon: "headset",
    title: "BPOs, shared service centers and businesses",
    body: "AI literacy and workforce-skills programs.",
  },
  {
    icon: "heart",
    title: "Foundations, CSR programs and development initiatives",
    body: "Sponsored upskilling and broader access to learning.",
  },
  {
    icon: "institution",
    title: "Public-sector institutions and local communities",
    body: "Scoped education and skills-building activities.",
  },
]

const steps = [
  { title: "Tell us your needs", body: "First, tell us the audience and outcome you need." },
  {
    title: "Shape the approach",
    body: "Next, we discuss a suitable format, scope, resource plan and assessment approach.",
  },
  {
    title: "Review the proposal",
    body: "We then prepare a proposal for your review and approval.",
  },
]

const audienceOptions = [
  "Teachers and school leaders",
  "BPO / shared services teams",
  "Students and young professionals",
  "Community beneficiaries",
  "Mixed audience",
]

const deliveryOptions = ["Onsite", "Live online", "Blended", "Open to recommendation"]

function ProposalForm({
  onSubmit,
  sending,
  failed,
}: {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  sending: boolean
  failed: boolean
}) {
  return (
    <form className="form" onSubmit={onSubmit}>
      <Field>
        <Label htmlFor="org">Organization</Label>
        <Input id="org" name="org" type="text" required autoComplete="organization" />
      </Field>
      <Field>
        <Label htmlFor="person">Contact person</Label>
        <Input id="person" name="person" type="text" required autoComplete="name" />
      </Field>
      <Field>
        <Label htmlFor="email">Work email</Label>
        <Input id="email" name="email" type="email" required autoComplete="email" />
      </Field>
      <Field>
        <Label htmlFor="mobile">Mobile</Label>
        <Input id="mobile" name="mobile" type="tel" required autoComplete="tel" />
      </Field>
      <Field>
        <Label htmlFor="audience">Type of audience</Label>
        <NativeSelect id="audience" name="audience" required>
          <NativeSelectOption value="">Select…</NativeSelectOption>
          {audienceOptions.map((option) => (
            <NativeSelectOption key={option}>{option}</NativeSelectOption>
          ))}
        </NativeSelect>
      </Field>
      <Field>
        <Label htmlFor="count">Approximate participants</Label>
        <Input id="count" name="count" type="number" required />
      </Field>
      <Field>
        <Label htmlFor="program">Preferred program</Label>
        <NativeSelect id="program" name="program" required>
          <NativeSelectOption value="">Select…</NativeSelectOption>
          {programs.map((program) => (
            <NativeSelectOption key={program.slug}>{program.title}</NativeSelectOption>
          ))}
          <NativeSelectOption>Not sure yet</NativeSelectOption>
        </NativeSelect>
      </Field>
      <Field>
        <Label htmlFor="when">
          Preferred date or quarter <Optional />
        </Label>
        <Input id="when" name="when" type="text" />
      </Field>
      <Field full>
        <Label htmlFor="objective">Training objective</Label>
        <Textarea id="objective" name="objective" required />
      </Field>
      <Field>
        <Label htmlFor="delivery">Delivery preference</Label>
        <NativeSelect id="delivery" name="delivery" required>
          <NativeSelectOption value="">Select…</NativeSelectOption>
          {deliveryOptions.map((option) => (
            <NativeSelectOption key={option}>{option}</NativeSelectOption>
          ))}
        </NativeSelect>
      </Field>
      <Field>
        <Label htmlFor="location">
          Location <Optional />
        </Label>
        <Input id="location" name="location" type="text" />
      </Field>
      <Field full>
        <Label htmlFor="details">
          Additional details <Optional />
        </Label>
        <Textarea id="details" name="details" />
      </Field>
      <label className="consent field full">
        <input type="checkbox" name="consent" required />I agree that LIFT may use the information provided to
        respond to this request, in line with the Privacy Notice.
      </label>
      <FormSubmit label="Request a Training Proposal" sending={sending} failed={failed} />
    </form>
  )
}

export function InstitutionsPage() {
  const { sent, sending, failed, handleSubmit, reset } = useInquiryForm("proposal")

  return (
    <>
      <title>Institutional AI Training | LIFT</title>

      <section className="hero border-b border-b-lift-line pb-24">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">For Institutions</span>
            <h1 className="h1">Practical technology training for your people.</h1>
            <p className="lead">
              From educators and young learners to BPO teams and community beneficiaries, LIFT
              can discuss training programs shaped around the people you serve. We combine
              emerging-technology content with facilitated learning and applied activities.
            </p>
            <div className="actions">
              <Button asChild>
                <a href="#proposal">
                  Request a Training Proposal <ArrowIcon />
                </a>
              </Button>
            </div>
          </div>
          <PhotoPlaceholder label="Photo to supply: facilitated cohort session for a partner institution" />
        </div>
      </section>

      <section className="sec" aria-labelledby="who-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Who we work with</span>
            <h2 className="h2" id="who-h">
              Programs for the communities you serve.
            </h2>
          </div>
          <div className="grid4">
            {audiences.map((audience) => (
              <Card key={audience.title}>
                <div className="icon">
                  <Icon name={audience.icon} />
                </div>
                <h3 className="h3">{audience.title}</h3>
                <p>{audience.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-tint" aria-labelledby="how-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Working with LIFT</span>
            <h2 className="h2" id="how-h">
              A clear path from need to proposal.
            </h2>
          </div>
          <div className="pillars">
            {steps.map((step, index) => (
              <div className="pillar" key={step.title}>
                <span className="pillar-n">STEP {String(index + 1).padStart(2, "0")}</span>
                <h3 className="h3">{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
          <p className="small mt-10">
            Actual schedules, pricing and deliverables depend on an agreed scope.
          </p>
        </div>
      </section>

      <section className="sec" id="proposal" aria-labelledby="form-h">
        <div className="wrap split-40">
          <div className="stack gap-5">
            <span className="eyebrow">Proposal request</span>
            <h2 className="h2" id="form-h">
              Build the next learning opportunity with us.
            </h2>
            <p>
              Share a few details about your group. A LIFT representative will follow up to
              discuss scope and next steps.
            </p>
            <div className="crow mt-2 border-t border-t-lift-line pt-5">
              <div className="icon">
                <Icon name="mail" size={22} />
              </div>
              <div>
                <p className="small">Prefer email?</p>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </div>
            </div>
          </div>
          <div className="form-card">
            {sent ? (
              <FormSuccess resetLabel="Send another request" onReset={reset} />
            ) : (
              <ProposalForm onSubmit={handleSubmit} sending={sending} failed={failed} />
            )}
          </div>
        </div>
      </section>
    </>
  )
}
