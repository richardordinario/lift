import { Link } from "react-router"

import logo from "@/assets/lift-logo-footer.png"
import { programPath, programs } from "@/data/programs"
import { CONTACT_EMAIL, JV_SIGNATURE, primaryNav } from "@/data/site"

export function SiteFooter() {
  return (
    <footer className="ftr on-dark">
      <div className="wrap">
        <div className="ftr-grid">
          <div className="ftr-brand">
            <img src={logo} alt="LIFT" width="100" height="100" />
            <p className="ftr-name">LIFT — Learning Institute for Future Technologies</p>
            <p>Practical technology training for learners, educators and organizations.</p>
            <p className="ftr-jv">{JV_SIGNATURE}</p>
          </div>
          <div>
            <h2 className="ftr-h">Explore</h2>
            <ul className="ftr-links">
              {primaryNav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="ftr-h">Programs</h2>
            <ul className="ftr-links">
              {programs.map((program) => (
                <li key={program.slug}>
                  <Link to={programPath(program)}>{program.shortTitle}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="ftr-h">Contact</h2>
            <ul className="ftr-links">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </li>
              <li>
                <Link to="/contact">Send an inquiry</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="ftr-bottom">
          <span>© 2026 LIFT. [Approved legal footer text]</span>
          <a href="#privacy">Privacy Notice</a>
        </div>
      </div>
    </footer>
  )
}
