import { Link } from "react-router"

import { Icon } from "@/components/icons"
import { CtaBand, PageHero, PhotoPlaceholder } from "@/components/site/blocks"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { JV_SIGNATURE } from "@/data/site"

const values = ["Innovation", "Integrity", "Collaboration", "Excellence", "Sustainability"]

export function AboutPage() {
  return (
    <>
      <title>About LIFT | Technology Training Institute</title>

      <PageHero
        eyebrow="About LIFT"
        title="Technology education grounded in practical learning."
        lead="The Learning Institute for Future Technologies (LIFT) is a Technology Training Institute formed through the joint venture of PCI Tech Center Inc. and St. Mutien College. We connect emerging technologies with the needs of learners, teachers, professionals and organizations."
      >
        <div className="actions">
          <Button asChild>
            <Link to="/programs">Explore Our Programs</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/institutions">Partner With LIFT</Link>
          </Button>
        </div>
      </PageHero>

      <section className="sec" aria-labelledby="story-h">
        <div className="wrap split">
          <PhotoPlaceholder label="Photo to supply: LIFT learners in an authentic hands-on session" />
          <div className="stack gap-10">
            <div className="stack">
              <span className="eyebrow">Our story</span>
              <h2 className="h2 text-[32px]" id="story-h">
                Established in 2025.
              </h2>
              <p>
                LIFT was established in 2025 to make future-oriented technology education more
                accessible and useful. Starting from a campus-based training environment and an
                applied technology curriculum, LIFT has developed hands-on learning experiences
                and collaborative programs that connect academic learning with practical skills.
              </p>
            </div>
            <div className="stack">
              <h3 className="h3">Our purpose</h3>
              <p>
                We help people understand, use and adapt to technologies that are changing the
                way we teach, work and create. Our present focus is artificial intelligence
                education for three communities: educators, the BPO workforce, and youth and
                young professionals.
              </p>
            </div>
            <div className="stack">
              <h3 className="h3">How we work</h3>
              <p>
                We believe strong technology education includes more than demonstrations.
                Effective learning makes room for practice, discussion, mistakes, feedback and
                useful outputs. We design toward real situations while keeping ethical and
                responsible use at the center of the learning experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-tint" aria-labelledby="vm-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Direction</span>
            <h2 className="h2" id="vm-h">
              Vision, mission and values.
            </h2>
          </div>
          <div className="grid2">
            <Card className="p-10">
              <div className="icon">
                <Icon name="target" />
              </div>
              <h3 className="h3">Vision</h3>
              <p className="text-[19px] text-lift-navy">
                To become a leading hub of learning and innovation in technology education,
                producing future-ready professionals who contribute to progress and
                transformation.
              </p>
            </Card>
            <Card className="p-10">
              <div className="icon icon-green">
                <Icon name="heart" />
              </div>
              <h3 className="h3">Mission</h3>
              <p className="text-[19px] text-lift-navy">
                To empower learners through advanced, technology-based education that cultivates
                innovation, critical thinking and professional excellence.
              </p>
            </Card>
          </div>
          <div className="stack mt-12 gap-5">
            <h3 className="h3">Core values</h3>
            <div className="values">
              {values.map((value) => (
                <span className="value" key={value}>
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="jv-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">The joint venture</span>
            <h2 className="h2" id="jv-h">
              {JV_SIGNATURE}
            </h2>
            <p className="lead">
              Together, they provide the foundation for a training institute designed to help
              learners navigate new technologies with practical competence.
            </p>
          </div>
          <div className="grid2">
            <Card>
              <Badge>Industry partner</Badge>
              <h3 className="h3 text-[22px]">PCI Tech Center Inc.</h3>
              <p>
                Contributes technology training, curriculum development and industry-facing
                experience.
              </p>
            </Card>
            <Card>
              <Badge>Academic partner</Badge>
              <h3 className="h3 text-[22px]">St. Mutien College</h3>
              <p>
                Contributes an academic setting, educational communities and institutional
                coordination.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="sec pt-0" aria-labelledby="about-cta-h">
        <div className="wrap">
          <CtaBand
            titleId="about-cta-h"
            title="Build practical technology skills with LIFT."
            description="Find a current AI pathway for yourself, or talk to us about a program for your institution."
            descriptionClassName="max-w-[600px]"
          >
            <Button asChild variant="green">
              <Link to="/programs">Explore Our Programs</Link>
            </Button>
            <Button asChild variant="outline-light">
              <Link to="/institutions">Discuss an Institutional Partnership</Link>
            </Button>
          </CtaBand>
        </div>
      </section>
    </>
  )
}
