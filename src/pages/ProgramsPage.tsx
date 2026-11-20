import { Link } from "react-router"

import { ArrowIcon, Icon } from "@/components/icons"
import { PageHero } from "@/components/site/blocks"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { programPath, programs } from "@/data/programs"

export function ProgramsPage() {
  return (
    <>
      <title>AI Education Programs | LIFT</title>

      <PageHero
        eyebrow="Programs"
        title="AI education built around your next step."
        lead="Find the learning path that matches your role, goals and starting point. LIFT currently offers three AI education pathways designed for teaching, BPO work, and early career development."
      />

      <section className="sec" aria-label="Current AI education pathways">
        <div className="wrap stack gap-5">
          {programs.map((program, index) => (
            <Card asChild hover key={program.slug}>
              <article className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-7 p-9 max-[860px]:grid-cols-[minmax(0,1fr)] max-[860px]:items-start">
                <div className="icon size-16">
                  <Icon name={program.icon} size={28} />
                </div>
                <div className="stack gap-2.5">
                  <div className="actions gap-2.5">
                    <Badge>Pathway {String(index + 1).padStart(2, "0")}</Badge>
                    <Badge variant="tag-dot">Current program</Badge>
                  </div>
                  <h2 className="h3 text-[24px]">{program.title}</h2>
                  <p>{program.index.summary}</p>
                  <p className="small">
                    <strong className="font-medium text-lift-navy">For:</strong>{" "}
                    {program.index.audience}
                  </p>
                </div>
                <Button asChild>
                  <Link to={programPath(program)}>
                    {program.index.cta} <ArrowIcon />
                  </Link>
                </Button>
              </article>
            </Card>
          ))}
        </div>
      </section>

      <section className="sec pt-0" aria-labelledby="group-h">
        <div className="wrap">
          <Card className="flex-row flex-wrap items-center justify-between gap-7 border-lift-tint bg-lift-tint p-10">
            <div className="flex max-w-[720px] items-start gap-5">
              <div className="icon">
                <Icon name="building" />
              </div>
              <div className="stack gap-2">
                <h2 className="h3 text-[22px]" id="group-h">
                  Need to train a class, school, team or organization?
                </h2>
                <p>LIFT can discuss a group delivery format tailored to your audience.</p>
              </div>
            </div>
            <Button asChild>
              <Link to="/institutions">Request a Group Training Proposal</Link>
            </Button>
          </Card>
        </div>
      </section>

      <section className="sec sec-line" aria-labelledby="pipeline-h">
        <div className="wrap split-40">
          <div className="stack">
            <span className="eyebrow">Beyond AI</span>
            <h2 className="h3 text-[24px]" id="pipeline-h">
              Broader expertise in emerging technologies
            </h2>
          </div>
          <div className="stack">
            <p>
              Game development, cybersecurity, IoT and immersive technologies remain part of
              LIFT’s expertise and pipeline. These areas are shown as past work or future areas
              and are not currently open for enrollment.
            </p>
            <div>
              <Link className="link" to="/impact">
                See past work <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
