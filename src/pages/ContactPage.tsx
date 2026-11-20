import type { FormEvent } from "react"
import { Link } from "react-router"

import { ArrowIcon, Icon, type IconName } from "@/components/icons"
import { Field, FormSubmit, FormSuccess, Optional, PageHero } from "@/components/site/blocks"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { Textarea } from "@/components/ui/textarea"
import { CONTACT_EMAIL, faqs } from "@/data/site"
import { useInquiryForm } from "@/hooks/use-inquiry-form"

/** Contact details that are still awaiting confirmation. */
const pendingDetails: { icon: IconName; label: string; value: string }[] = [
  { icon: "phone", label: "Telephone", value: "[Confirm telephone]" },
  {
    icon: "pin",
    label: "Training site",
    value: "[Confirm exact STM campus address in Dau, Mabalacat, Pampanga]",
  },
  { icon: "clock", label: "Office hours", value: "[Confirm office hours]" },
]

const interestOptions = ["Teachers", "BPOs", "Youth", "Institutional Training", "Other"]

function InquiryForm({
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
        <Label htmlFor="name">Full name</Label>
        <Input id="name" name="name" type="text" required autoComplete="name" />
      </Field>
      <Field>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required autoComplete="email" />
      </Field>
      <Field>
        <Label htmlFor="mobile">
          Mobile <Optional />
        </Label>
        <Input id="mobile" name="mobile" type="tel" autoComplete="tel" />
      </Field>
      <Field>
        <Label htmlFor="interest">Interest</Label>
        <NativeSelect id="interest" name="interest" required>
          <NativeSelectOption value="">Select…</NativeSelectOption>
          {interestOptions.map((option) => (
            <NativeSelectOption key={option}>{option}</NativeSelectOption>
          ))}
        </NativeSelect>
      </Field>
      <Field full>
        <Label htmlFor="org">
          Organization <Optional />
        </Label>
        <Input id="org" name="org" type="text" autoComplete="organization" />
      </Field>
      <Field full>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" required />
      </Field>
      <label className="consent field full">
        <input type="checkbox" name="consent" required />I acknowledge the Privacy Notice and consent to LIFT
        using my information to respond to this inquiry.
      </label>
      <FormSubmit label="Send Inquiry" sending={sending} failed={failed} />
    </form>
  )
}

export function ContactPage() {
  const { sent, sending, failed, handleSubmit, reset } = useInquiryForm("inquiry")

  return (
    <>
      <title>Contact LIFT | Training Inquiries</title>

      <PageHero
        eyebrow="Contact"
        title="Let’s build your next learning opportunity."
        lead="Whether you are exploring an AI training program, planning a school cohort or developing workforce skills for a team, LIFT would be glad to hear from you. Send an inquiry and the appropriate program representative can follow up."
      />

      <section className="sec-sm" aria-label="Inquiry types">
        <div className="wrap grid2">
          <Card asChild hover>
            <a className="no-underline" href="#inquiry">
              <div className="icon">
                <Icon name="people" />
              </div>
              <h2 className="h3 text-[22px]">Learner inquiry</h2>
              <p>Ask about current programs, format, intake, fees and eligibility.</p>
              <span className="link card-foot">
                Send a learner inquiry <ArrowIcon />
              </span>
            </a>
          </Card>
          <Card asChild hover>
            <Link className="no-underline" to="/institutions">
              <div className="icon icon-green">
                <Icon name="building" />
              </div>
              <h2 className="h3 text-[22px]">Institutional inquiry</h2>
              <p>Share your group’s needs and request a discussion or training proposal.</p>
              <span className="link card-foot">
                Request a proposal <ArrowIcon />
              </span>
            </Link>
          </Card>
        </div>
      </section>

      <section className="sec sec-tint" id="inquiry" aria-labelledby="form-h">
        <div className="wrap split-40">
          <div className="stack gap-7">
            <div className="stack">
              <span className="eyebrow">Get in touch</span>
              <h2 className="h2" id="form-h">
                Send an inquiry
              </h2>
            </div>
            <div>
              <div className="crow">
                <div className="icon">
                  <Icon name="mail" size={22} />
                </div>
                <div>
                  <p className="lbl">Official email</p>
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </div>
              </div>
              {pendingDetails.map((detail) => (
                <div className="crow" key={detail.label}>
                  <div className="icon">
                    <Icon name={detail.icon} size={22} />
                  </div>
                  <div className="stack gap-1.5">
                    <p className="lbl">{detail.label}</p>
                    <Badge variant="tbc">{detail.value}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="form-card">
            {sent ? (
              <FormSuccess resetLabel="Send another inquiry" onReset={reset} />
            ) : (
              <InquiryForm onSubmit={handleSubmit} sending={sending} failed={failed} />
            )}
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="faq-h">
        <div className="wrap split-40">
          <div className="stack">
            <span className="eyebrow">FAQ</span>
            <h2 className="h2" id="faq-h">
              Frequently asked questions
            </h2>
          </div>
          <Accordion type="multiple">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  )
}
