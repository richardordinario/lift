import { useState } from "react"
import { Link, NavLink } from "react-router"

import logo from "@/assets/lift-logo.png"
import { Icon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { primaryNav } from "@/data/site"

function NavLinks() {
  return primaryNav.map((item) => (
    <NavLink
      key={item.to}
      to={item.to}
      className={({ isActive }) => (isActive ? "nl on" : "nl")}
    >
      {item.label}
    </NavLink>
  ))
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <Link
          className="logo"
          to="/"
          aria-label="LIFT, Learning Institute for Future Technologies: home"
        >
          <img src={logo} alt="LIFT" width="100" height="100" />
        </Link>
        <nav className="nav" aria-label="Primary">
          <NavLinks />
          <Button asChild className="ml-3.5">
            <Link to="/contact">Enquire Now</Link>
          </Button>
        </nav>
        <button
          className="menu-btn"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? "close" : "menu"} size={22} />
        </button>
      </div>
      {menuOpen && (
        <nav className="mnav" aria-label="Mobile">
          <NavLinks />
          <Button asChild block>
            <Link to="/contact">Enquire Now</Link>
          </Button>
        </nav>
      )}
    </header>
  )
}
