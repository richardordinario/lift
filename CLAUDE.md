# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```
npm run dev       # Vite dev server
npm run build     # type-check (tsc -b) then production build to dist/
npm run lint      # oxlint
npm run preview   # serve the production build
npx shadcn@latest add <component>   # add a shadcn/ui component
```

There is no test suite. The directory is not a git repository.

The parent directory is an Obsidian vault with its own `CLAUDE.md` (`../../CLAUDE.md`); its rules (never delete, move to `Archive/` instead; check for existing notes first) apply here too.

## What this is

The public website for LIFT (Learning Institute for Future Technologies), a technology training institute formed as a joint venture of PCI Tech Center Inc. and St. Mutien College. It is a client-side React 19 + Vite + Tailwind CSS 4 + shadcn/ui (Radix) single-page app with nine routes, migrated from a Claude Design canvas. Both forms post to one Vercel serverless function, `api/inquiry.ts`, which emails the submission to lift@pcitech.com.ph through the Resend API.

## Source of truth

1. `docs/claude-design/` is the approved design: the nine canvas artboards (`*.dc.html`), the shared stylesheet (`site.css`) and the original 4500px logos. The live canvas is https://claude.ai/artifact/D7jNXcojTPkN11PUA3Lu2F. The React app must stay visually identical to it; change the design there first, not ad hoc in components.
2. `docs/lift_website_content_and_brand_guide.md` governs copy, sitemap, SEO metadata and what may be published.
3. `docs/academic_forward_modernism/DESIGN.md` and the five `docs/<page>/code.html` mockups are an older exploration. The canvas superseded them (different font, colours, radii and several invented claims); do not port anything from them.

The canvas departs from the brand guide in two places that are still open: it uses Google Sans throughout (the guide says Montserrat, Poppins and Lato) and `#1A47A8` for blue (the guide says `#2457D5`, provisionally).

## Architecture

- **Styling lives in one ported stylesheet.** `src/styles/lift.css` is the canvas stylesheet with rule order preserved, imported into the `components` cascade layer from `src/index.css`. Semantic class names (`.btn`, `.card`, `.sec`, `.hero-grid`, `.split-40` and so on) carry the design. Tailwind utilities are used only where the source had inline styles, and they win over the layer just as inline styles did. Use arbitrary px values such as `text-[22px]` for font sizes, because named sizes like `text-lg` also set line-height.
- **shadcn/ui components are thin wrappers** in `src/components/ui/` that emit those classes (`Button` variants map to `.btn-primary`, `.btn-ghost`, `.btn-green`, `.btn-outline-light`; `Badge` to `.tag`, `.notice`, `.tbc`). Stock shadcn styling is deliberately removed. A newly added shadcn component arrives with default styling and must be restyled the same way. The source's `.dark` class is renamed `.on-dark` because shadcn reserves `.dark`.
- **Preflight parity.** The canvas ran on browser defaults. The top of `lift.css` and the `a` rules in `index.css` restore the defaults Tailwind's preflight removes (inline SVGs, input line-height, option padding, link colour).
- **Each route change remounts the whole page.** `SiteLayout` keys `SitePage` on the pathname so the page-enter fade, motion setup and mobile-menu state reset as they did on the multi-page source.
- **Motion is selector-driven**, in `src/hooks/use-site-motion.ts` (GSAP, ScrollTrigger, Lenis). It finds elements by class (`REVEAL_SELECTOR`, `.ph-cubes`, `.cta-cubes`, `.hero-media`, `.progress`, `[data-count]`), so renaming those classes silently drops animation. It is skipped entirely under `prefers-reduced-motion`.
- **Program pages are data-driven.** `src/data/programs.ts` feeds the three `/programs/:slug` pages, the home and programs cards, the footer and the proposal form. `src/data/site.ts` holds navigation, FAQs and the contact email.
- **Forms.** `useInquiryForm` posts `{ form, fields }` to `/api/inquiry`. The server validates against a per-form field list keyed by the inputs' `name` attributes, so adding or renaming a form field means updating `FORMS` in `api/inquiry.ts` too. `RESEND_API_KEY` and `RESEND_FROM` come from environment variables (see `.env.example`); the sender domain must be verified in Resend. `npm run dev` does not serve `/api`; use `npx vercel dev` to exercise the forms locally.
- **Icons** in `src/components/icons.tsx` are the canvas's own SVG paths; lucide is not installed.
- **Hero video**: transparent WebM, with an MP4 swapped in for Safari and iOS, which cannot play WebM alpha.

Deployment targets Vercel. `vercel.json` sets the Vite build, rewrites every path to `index.html` (routing uses `BrowserRouter`) and caches the hashed files under `/assets` as immutable. `.vercelignore` keeps `docs/` out of uploads. Node is pinned to 22.x in `package.json`.

## Content rules that constrain any implementation

- The guide marks copy with three statuses: PUBLISHABLE COPY, APPROVAL REQUIRED, and INTERNAL BUILD NOTE. Bracketed placeholders such as `[Confirm approved hours]` or `[CONFIRM]` mean the fact is not approved. Never fill them in or infer blank fields; keep them unpublished or show "Enquire for details".
- Unconfirmed and therefore unpublishable: fees, schedules, durations, delivery modes, certificate wording, phone number, campus postal address, office hours. The only confirmed contact is `lift@pcitech.com.ph`.
- Do not claim accreditation, CPD units, recognized certification, guaranteed employment or similar. Do not invent testimonials, affiliations or partner logos.
- Only three programs are current: AI Education for Teachers, for BPOs, and for Youth and Young Professionals. Game development, cybersecurity, IoT and immersive tech appear only as past work or future areas, never as enrollment pages.
- "Learn new technology. Apply it with confidence." is proposed campaign language, not an official tagline.
- Required partnership signature: "A Joint Venture of PCI Tech Center Inc. and St. Mutien College." The legal name of the PCI entity is still pending confirmation.
- Never set white text on LIFT Green `#7CC144` (2.19:1). Use Deep Navy `#0D1C60` on green and on Citrus Yellow; white on LIFT Blue `#2457D5`.
- Blue is `#1A47A8` in the canvas and hard-coded throughout `lift.css`; the brand guide lists `#2457D5` and `#2354CA`. Confirm before changing.
- Do not redraw or typeset the logo, and do not place it on gradients or add shadows. The official vector files have not been supplied yet.
- Impact figures must be quoted exactly as in section 11.1 of the guide, including the caveat that 144 session attendances are not unique participants.

## Not built yet

Per the guide: rate limiting or a CAPTCHA on the forms (only a honeypot exists), meta descriptions, Open Graph tags and sitemap (section 13), analytics events (section 14.3), a Privacy Notice page (the footer link points at `#privacy`), and real photography in place of the "Photo to supply" placeholders. Section 16 lists the open approvals by owner.
