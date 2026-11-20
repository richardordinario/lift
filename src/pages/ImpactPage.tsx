import { Link } from "react-router"

import { ArrowIcon } from "@/components/icons"
import { CtaBand, PageHero, PhotoPlaceholder } from "@/components/site/blocks"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

type Stat = { value: string; label: string; count?: boolean }

type CaseStudy = {
  tag: string
  title: string
  body: string
  photoLabel: string
  stats: Stat[]
  note?: string
}

/** Figures are quoted exactly from the cohort and event reports. */
const caseStudies: CaseStudy[] = [
  {
    tag: "Pilot cohort · 2025",
    title: "Game Design and Development Pilot",
    body: "Ten instructor-led sessions totaling 40 hours introduced learners to game development using Unity, Blender and C#. Participants produced prototype games including Digital Museum and Educational Maze.",
    photoLabel: "Photo to supply: participant prototype game (with permission)",
    stats: [
      { value: "40", label: "Instructional hours", count: true },
      { value: "10", label: "Instructor-led sessions", count: true },
      { value: "4.7/5", label: "Overall evaluation" },
    ],
  },
  {
    tag: "Virtual sessions · March 2026",
    title: "AI and Cybersecurity Virtual Sessions",
    body: "LIFT participated with BCYF and DTI Region VII in virtual learning activities for education and business audiences.",
    photoLabel: "Photo to supply: virtual session screenshot (with partner approval)",
    stats: [
      { value: "130", label: "Registrations", count: true },
      { value: "144", label: "Session attendances", count: true },
      { value: "4.63–4.79", label: "Satisfaction, out of 5" },
    ],
    note: "Recorded across three sessions. Session attendance does not indicate unique participants.",
  },
]

export function ImpactPage() {
  return (
    <>
      <title>Training Impact and Projects | LIFT</title>

      <PageHero
        eyebrow="Impact"
        title="Learning becomes meaningful when people apply it."
        lead="LIFT’s journey includes hands-on technology cohorts and collaborative learning initiatives. We share verified results, practical outputs and program stories to show how participants encounter and apply new technologies."
      />

      <section className="sec" aria-label="Case studies">
        <div className="wrap grid2 items-stretch">
          {caseStudies.map((study) => (
            <Card asChild key={study.title}>
              <article className="gap-0 overflow-hidden p-0">
                <div className="px-5 pt-5">
                  <PhotoPlaceholder wide label={study.photoLabel} />
                </div>
                <div className="stack gap-[18px] p-8">
                  <div className="actions gap-2.5">
                    <Badge>{study.tag}</Badge>
                  </div>
                  <h2 className="h3 text-[24px]">{study.title}</h2>
                  <p>{study.body}</p>
                  <div className="stats">
                    {study.stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="stat-v" data-count={stat.count ? stat.value : undefined}>
                          {stat.value}
                        </p>
                        <p className="stat-k">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  {study.note && <p className="small text-lift-ink">{study.note}</p>}
                </div>
              </article>
            </Card>
          ))}
        </div>
      </section>

      <section className="sec pt-0" aria-labelledby="impact-cta-h">
        <div className="wrap">
          <CtaBand
            titleId="impact-cta-h"
            title="Interested in collaborating on a practical training program?"
          >
            <Button asChild variant="green">
              <Link to="/institutions">
                Partner With LIFT <ArrowIcon />
              </Link>
            </Button>
          </CtaBand>
        </div>
      </section>
    </>
  )
}
