import { useEffect, type RefObject } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"

gsap.registerPlugin(ScrollTrigger)

/** Blocks that fade up as they scroll into view. */
const REVEAL_SELECTOR =
  ".sec-head, .sec-head-row > a, .sec-head-row > .notice, .card, .pillar, .mod, .fact, .crow, .faq-item, .cta, .split > *, .split-40 > *, .values, main .ph"

/**
 * Page motion, ported from the design source: Lenis smooth scrolling, hero
 * entrance, scroll reveals, parallax on the cube motifs and hero media, the
 * top progress bar, count-up statistics and smooth in-page anchor scrolling.
 *
 * Does nothing when the visitor prefers reduced motion.
 */
function initMotion(root: HTMLElement) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

  const scroller = document.scrollingElement ?? document.documentElement
  if (scroller.scrollHeight <= window.innerHeight + 80) return

  const lenis = new Lenis({ duration: 1.05, smoothWheel: true })
  lenis.on("scroll", ScrollTrigger.update)
  const tick = (time: number) => lenis.raf(time * 1000)
  gsap.ticker.add(tick)
  gsap.ticker.lagSmoothing(0)

  const ctx = gsap.context(() => {
    // Hero entrance
    gsap.from(
      "main > section:first-child .hero-copy > *, main > section:first-child .phero-in > *, main > section:first-child .crumb",
      { y: 22, opacity: 0, duration: 0.8, ease: "power3.out", stagger: 0.07, delay: 0.1 },
    )
    gsap.from("main > section:first-child .hero-media, main > section:first-child .ph", {
      y: 30,
      opacity: 0,
      scale: 0.98,
      duration: 1,
      ease: "power3.out",
      delay: 0.25,
    })

    // Scroll reveals: outermost matching blocks below the first section
    let items = Array.from(root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)).filter(
      (el) => !el.closest("main > section:first-child"),
    )
    items = items.filter((el) => !items.some((other) => other !== el && other.contains(el)))
    gsap.set(items, { opacity: 0, y: 28 })
    ScrollTrigger.batch(items, {
      start: "top 90%",
      once: true,
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          overwrite: true,
        }),
    })

    // Parallax
    root.querySelectorAll<HTMLElement>(".ph-cubes, .cta-cubes").forEach((el) => {
      gsap.to(el, {
        yPercent: -16,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    })
    const heroMedia = root.querySelector<HTMLElement>(".hero-media")
    if (heroMedia) {
      gsap.to(heroMedia, {
        yPercent: 5,
        scale: 0.97,
        ease: "none",
        scrollTrigger: { trigger: heroMedia, start: "top 20%", end: "bottom top", scrub: true },
      })
    }

    // Reading progress bar
    gsap.to(".progress", {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { start: 0, end: "max", scrub: 0.2 },
    })

    // Count-up statistics
    root.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
      const raw = el.dataset.count ?? "0"
      const end = parseFloat(raw)
      const decimals = (raw.split(".")[1] ?? "").length
      const suffix = el.dataset.suffix ?? ""
      const counter = { value: 0 }
      gsap.to(counter, {
        value: end,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
        onUpdate: () => {
          el.textContent = counter.value.toFixed(decimals) + suffix
        },
      })
    })
  }, root)

  // Smooth scrolling for in-page anchors
  const onClick = (event: MouseEvent) => {
    const anchor = (event.target as Element | null)?.closest?.('a[href^="#"]')
    const href = anchor?.getAttribute("href")
    if (!href || href.length < 2) return
    const target = document.querySelector<HTMLElement>(href)
    if (!target) return
    event.preventDefault()
    lenis.scrollTo(target, { offset: -24 })
  }
  document.addEventListener("click", onClick)

  return () => {
    document.removeEventListener("click", onClick)
    ctx.revert()
    gsap.ticker.remove(tick)
    lenis.destroy()
  }
}

export function useSiteMotion(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    let cleanup: (() => void) | undefined
    // Short delay so layout has settled before positions are measured.
    const timer = window.setTimeout(() => {
      cleanup = initMotion(root)
    }, 80)

    return () => {
      window.clearTimeout(timer)
      cleanup?.()
    }
  }, [rootRef])
}
