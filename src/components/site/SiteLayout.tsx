import { useLayoutEffect, useRef } from "react"
import { Outlet, useLocation, useNavigationType } from "react-router"

import { SiteFooter } from "@/components/site/SiteFooter"
import { SiteHeader } from "@/components/site/SiteHeader"
import { useSiteMotion } from "@/hooks/use-site-motion"

function SitePage() {
  const rootRef = useRef<HTMLDivElement>(null)
  const navigationType = useNavigationType()
  const { hash } = useLocation()

  // A new page starts at the top (or at its anchor), as a full page load would.
  // Back and forward navigation keeps the browser's restored position.
  useLayoutEffect(() => {
    if (navigationType === "POP") return
    const target = hash.length > 1 ? document.getElementById(hash.slice(1)) : null
    if (target) {
      target.scrollIntoView({ behavior: "instant" })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    }
    // Runs once per page: SitePage remounts on every route change.
    // oxlint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useSiteMotion(rootRef)

  return (
    <div className="site" ref={rootRef}>
      <div className="progress" aria-hidden="true" />
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}

/**
 * Remounts the whole page on each route change so the page-enter fade, the
 * motion setup and the mobile menu state all reset, matching the multi-page
 * source design.
 */
export function SiteLayout() {
  const { pathname } = useLocation()
  return <SitePage key={pathname} />
}
