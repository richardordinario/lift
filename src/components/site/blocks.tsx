import type { ReactNode } from "react"
import { cn } from "cn"

import { ArrowIcon, CubesMotif, Icon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { CONTACT_EMAIL } from "@/data/site"

/** Grey placeholder for a photograph that has not been supplied yet. */
export function PhotoPlaceholder({ label, wide = false }: { label: string; wide?: boolean }) {
  return (
    <figure className={wide ? "ph ph-wide" : "ph"}>
      <div className="ph-cubes">
        <CubesMotif width={120} height={102} cubeStroke="#FFFFFF" />
      </div>
      <figcaption className="ph-label">
        <Icon name="image" size={18} />
        {label}
      </figcaption>
    </figure>
  )
}

/** Simple page header used on About, Programs, Impact and Contact. */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string
  title: string
  lead: string
  children?: ReactNode
}) {
  return (
    <section className="phero">
      <div className="wrap phero-in">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="h1">{title}</h1>
        <p className="lead">{lead}</p>
        {children}
      </div>
    </section>
  )
}

/** Navy call-to-action band with the cube motif in its corner. */
export function CtaBand({
  titleId,
  title,
  description,
  descriptionClassName = "max-w-[620px]",
  children,
}: {
  titleId: string
  title: string
  description?: string
  descriptionClassName?: string
  /** Action buttons. */
  children: ReactNode
}) {
  return (
    <div className="cta on-dark">
      <div className="cta-cubes">
        <CubesMotif width={220} height={187} cubeStroke="#7CC144" />
      </div>
      <div className="stack relative gap-[18px]">
        <h2 className="h2" id={titleId}>
          {title}
        </h2>
        {description && <p className={descriptionClassName}>{description}</p>}
      </div>
      <div className="actions relative">{children}</div>
    </div>
  )
}

/** Confirmation shown in place of a form after it has been submitted. */
export function FormSuccess({
  resetLabel,
  onReset,
}: {
  resetLabel: string
  onReset: () => void
}) {
  return (
    <div className="success" role="status">
      <div className="success-ic">
        <Icon name="check" size={28} strokeWidth={2.4} />
      </div>
      <h3 className="h3 text-[24px]">Thank you for reaching out to LIFT.</h3>
      <p>
        Your inquiry has been received. Our team will review your message and contact you using
        the information provided.
      </p>
      <Button variant="ghost" type="button" onClick={onReset}>
        {resetLabel}
      </Button>
    </div>
  )
}

/** One labelled form control. `full` spans both columns of the form grid. */
export function Field({
  full = false,
  className,
  children,
}: {
  full?: boolean
  className?: string
  children: ReactNode
}) {
  return <div className={cn("field", full && "full", className)}>{children}</div>
}

export function Optional() {
  return <span className="opt">(optional)</span>
}

/**
 * Closing rows shared by both forms: the spam honeypot, the error message and
 * the submit button.
 */
export function FormSubmit({
  label,
  sending,
  failed,
}: {
  label: string
  sending: boolean
  failed: boolean
}) {
  return (
    <>
      {/* Hidden from people; bots that fill it in are dropped by the server. */}
      <div className="hp" aria-hidden="true">
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {failed && (
        <p className="form-error" role="alert">
          We couldn’t send your message. Please try again, or email us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      )}
      <Field full>
        <Button type="submit" className="self-start" disabled={sending}>
          {sending ? "Sending…" : label} <ArrowIcon />
        </Button>
      </Field>
    </>
  )
}
