import { Link } from "react-router"

import { ArrowIcon, Icon, type IconName } from "@/components/icons"
import { CtaBand, PhotoPlaceholder } from "@/components/site/blocks"
import { HeroMedia } from "@/components/site/HeroMedia"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardFooter } from "@/components/ui/card"
import { programPath, programs } from "@/data/programs"
import { JV_SIGNATURE } from "@/data/site"

const pillars: { icon: IconName; green?: boolean; title: string; body: string }[] = [
  {
    icon: "layers",
    title: "Applied learning",
    body: "Exercises and outputs connected to education and work.",
  },
  {
    icon: "people",
    title: "Human guidance",
    body: "Instructor facilitation and feedback where the format provides it.",
  },
  {
    icon: "shield",
    green: true,
    title: "Responsible AI",
    body: "Attention to privacy, accuracy, ethics and independent judgment.",
  },
]

export function HomePage() {
  return (
    <>
      <title>LIFT | Technology Training Institute Philippines</title>

      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Learning Institute for Future Technologies</span>
            <h1 className="h1">Future-ready skills start here.</h1>
            <p className="lead">
              LIFT is a Technology Training Institute helping teachers, BPO talent, youth and
              young professionals learn and apply artificial intelligence. Through practical
              training and guided learning experiences, we help people move from curiosity to
              confidence.
            </p>
            <div className="actions">
              <Button asChild>
                <Link to="/programs">
                  Explore Our AI Programs <ArrowIcon />
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link to="/institutions">Train Your Team</Link>
              </Button>
            </div>
            <p className="jv">
              <Icon name="link" size={20} />
              {JV_SIGNATURE}
            </p>
          </div>
          <HeroMedia />
        </div>
      </section>

      <section className="sec sec-tint" aria-labelledby="programs-h">
        <div className="wrap">
          <div className="sec-head-row">
            <div className="sec-head">
              <span className="eyebrow">Current AI programs</span>
              <h2 className="h2" id="programs-h">
                AI learning for the people shaping tomorrow.
              </h2>
              <p className="lead">
                Wherever you are in your learning or career journey, LIFT helps you develop
                useful AI skills with responsible practice and real-world applications.
              </p>
            </div>
            <Button asChild variant="ghost">
              <Link to="/programs">Explore Programs</Link>
            </Button>
          </div>
          <div className="grid3">
            {programs.map((program) => (
              <Card asChild hover key={program.slug}>
                <article>
                  <div className="flex items-center justify-between gap-3">
                    <div className="icon">
                      <Icon name={program.icon} />
                    </div>
                    <Badge variant="tag-dot">Current program</Badge>
                  </div>
                  <h3 className="h3 text-[22px]">{program.title}</h3>
                  <p>{program.home.summary}</p>
                  <p className="meta">
                    <strong>For:</strong> {program.home.audience}
                  </p>
                  <CardFooter>
                    <Link className="link" to={programPath(program)}>
                      {program.home.cta} <ArrowIcon />
                    </Link>
                  </CardFooter>
                </article>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="approach-h">
        <div className="wrap split-40">
          <div className="stack gap-5">
            <span className="eyebrow">Our approach</span>
            <h2 className="h2" id="approach-h">
              Learn by doing. Grow by applying.
            </h2>
            <p>
              Technology skills become valuable when you can use them. LIFT’s learning approach
              emphasizes guided exercises, relevant examples, reflection and practical outputs.
              Participants are encouraged to understand what AI can do, recognize its limits and
              practice using it responsibly in their own contexts.
            </p>
          </div>
          <div className="pillars grid-cols-[minmax(0,1fr)] border-t-0">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className={
                  index === pillars.length - 1
                    ? "pillar flex-row gap-5 border-t border-b border-t-lift-line border-b-lift-line px-0 py-7"
                    : "pillar flex-row gap-5 border-t border-t-lift-line px-0 py-7"
                }
              >
                <div className={pillar.green ? "icon icon-green" : "icon"}>
                  <Icon name={pillar.icon} />
                </div>
                <div className="stack gap-1.5">
                  <h3 className="h3">{pillar.title}</h3>
                  <p>{pillar.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-line" aria-labelledby="partner-h">
        <div className="wrap split">
          <PhotoPlaceholder
            wide
            label="Photo to supply: St. Mutien College campus training environment"
          />
          <div className="stack gap-5 self-center">
            <span className="eyebrow">Partnership</span>
            <h2 className="h2" id="partner-h">
              Built through education and industry collaboration.
            </h2>
            <p>
              LIFT brings together St. Mutien College’s academic environment and PCI Tech Center
              Inc.’s technology training and industry project experience. This joint foundation
              helps LIFT design learning that is accessible to individuals and relevant to
              institutions.
            </p>
            <div>
              <Link className="link" to="/about">
                Learn About LIFT <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-tint" aria-labelledby="impact-h">
        <div className="wrap split-40">
          <div className="stack gap-5">
            <span className="eyebrow">Impact</span>
            <h2 className="h2" id="impact-h">
              Early work. Practical results.
            </h2>
            <p>
              LIFT has delivered hands-on technology training, including a 40-hour Game Design
              and Development cohort in 2025. In March 2026, LIFT also joined BCYF and DTI
              Region VII in virtual AI and cybersecurity learning activities for education and
              business audiences. These experiences inform our approach to creating practical,
              audience-centered programs.
            </p>
            <div>
              <Link className="link" to="/impact">
                See Our Impact <ArrowIcon />
              </Link>
            </div>
          </div>
          <div className="grid2">
            <Card>
              <Badge>2025 · Pilot cohort</Badge>
              <p className="stat-v" data-count="40" data-suffix=" hrs">
                40 hrs
              </p>
              <p>Game Design and Development, across ten instructor-led sessions.</p>
              <p className="meta">
                <strong>4.7 / 5</strong> overall evaluation
              </p>
            </Card>
            <Card>
              <Badge>March 2026 · Virtual</Badge>
              <p className="stat-v" data-count="130">
                130
              </p>
              <p>Registrations for AI and cybersecurity sessions with BCYF and DTI Region VII.</p>
              <p className="meta">
                <strong>4.63–4.79 / 5</strong> satisfaction
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="inst-h">
        <div className="wrap">
          <CtaBand
            titleId="inst-h"
            title="Looking to train a school, team or community?"
            description="We can discuss cohort-based learning for educational institutions, BPO organizations, companies, foundations and workforce-development initiatives. Tell us your audience and training goals, and let’s explore a suitable approach."
          >
            <Button asChild variant="green">
              <Link to="/institutions">
                Request a Training Proposal <ArrowIcon />
              </Link>
            </Button>
          </CtaBand>
        </div>
      </section>

      <section className="sec sec-line" aria-labelledby="final-h">
        <div className="wrap flex flex-col items-center gap-5 text-center">
          <h2 className="h2 max-w-[760px]" id="final-h">
            Ready to learn what AI can help you do?
          </h2>
          <p className="lead">
            Explore a current training pathway or connect with LIFT to find the next available
            cohort.
          </p>
          <div className="actions justify-center pt-2">
            <Button asChild>
              <Link to="/programs">Explore Programs</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/contact">Contact LIFT</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
