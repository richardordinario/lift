import { Link, Navigate, useParams } from "react-router"

import { ArrowIcon, Icon } from "@/components/icons"
import { CtaBand, PhotoPlaceholder } from "@/components/site/blocks"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { programPath, programs } from "@/data/programs"

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="checks">
      {items.map((item) => (
        <li key={item}>
          <Icon name="check" size={20} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function ProgramDetailPage() {
  const { slug } = useParams()
  const program = programs.find((candidate) => candidate.slug === slug)

  if (!program) return <Navigate to="/programs" replace />

  const otherPrograms = programs.filter((candidate) => candidate !== program)

  return (
    <>
      <title>{program.pageTitle}</title>

      <section className="hero border-b border-b-lift-line pt-12">
        <div className="wrap stack gap-10">
          <nav className="crumb" aria-label="Breadcrumb">
            <Link to="/programs">Programs</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{program.title}</span>
          </nav>
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="actions gap-2.5">
                <Badge variant="tag-dot">Current LIFT Program</Badge>
              </div>
              <h1 className="h1 text-[clamp(36px,4.4vw,54px)]">{program.hero.title}</h1>
              <p className="lead">{program.hero.lead}</p>
              <div className="actions">
                <Button asChild>
                  <Link to="/contact">
                    {program.hero.primaryCta} <ArrowIcon />
                  </Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link to="/institutions">{program.hero.secondaryCta}</Link>
                </Button>
              </div>
            </div>
            <PhotoPlaceholder label={program.hero.photoLabel} />
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="who-h">
        <div className="wrap split">
          <div className="stack gap-6">
            <span className="eyebrow">Who this program is for</span>
            <h2 className="h2 text-[32px]" id="who-h">
              Designed for
            </h2>
            <CheckList items={program.audience} />
          </div>
          <div className="stack gap-6">
            <Badge variant="notice">Approval required</Badge>
            <h2 className="h2 text-[32px]">Potential learning outcomes</h2>
            <CheckList items={program.outcomes} />
          </div>
        </div>
      </section>

      <section className="sec sec-tint" aria-labelledby="mods-h">
        <div className="wrap">
          <div className="sec-head-row">
            <div className="sec-head">
              <span className="eyebrow">Suggested content blocks</span>
              <h2 className="h2" id="mods-h">
                What you’ll explore
              </h2>
            </div>
            <Badge variant="notice">Confirm against approved syllabus</Badge>
          </div>
          <div className="mods">
            {program.modules.map((module, index) => (
              <div className="mod" key={module.title}>
                <span className="mod-n">{String(index + 1).padStart(2, "0")}</span>
                <span className="mod-t">{module.title}</span>
                <span className="mod-d">{module.focus}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="fmt-h">
        <div className="wrap">
          <div className="sec-head-row">
            <div className="sec-head">
              <span className="eyebrow">Format and credentials</span>
              <h2 className="h2" id="fmt-h">
                Program details
              </h2>
            </div>
            <Badge variant="notice">Pending program-owner approval</Badge>
          </div>
          <div className="facts">
            {program.facts.map((fact) => (
              <div className="fact" key={fact.label}>
                <span className="fact-k">{fact.label}</span>
                <Badge variant="tbc">{fact.value}</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec pt-0" aria-labelledby="close-h">
        <div className="wrap">
          <CtaBand titleId="close-h" title={program.close.title} description={program.close.body}>
            <Button asChild variant="green">
              <Link to="/contact">
                {program.hero.primaryCta} <ArrowIcon />
              </Link>
            </Button>
          </CtaBand>
        </div>
      </section>

      <section className="sec sec-line" aria-labelledby="more-h">
        <div className="wrap">
          <div className="sec-head-row mb-8">
            <h2 className="h3 text-[22px]" id="more-h">
              Other current pathways
            </h2>
            <Link className="link" to="/programs">
              All programs <ArrowIcon />
            </Link>
          </div>
          <div className="grid2">
            {otherPrograms.map((other) => (
              <Card asChild hover key={other.slug}>
                <Link
                  className="flex-row items-center gap-[18px] p-6 no-underline"
                  to={programPath(other)}
                >
                  <div className="icon">
                    <Icon name={other.icon} size={22} />
                  </div>
                  <span className="h3 flex-1 text-[18px]">{other.title}</span>
                  <ArrowIcon />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
