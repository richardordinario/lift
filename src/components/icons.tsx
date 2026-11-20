import type { ReactNode } from "react"

/**
 * Line icons copied path-for-path from the design source. All share a 24px
 * viewBox, round caps and joins, and `currentColor`.
 */
const ICONS = {
  arrow: { strokeWidth: 2, body: <path d="M5 12h14M13 6l6 6-6 6" /> },
  check: { strokeWidth: 2.2, body: <path d="M20 6L9 17l-5-5" /> },
  plus: { strokeWidth: 2, body: <path d="M12 5v14M5 12h14" /> },
  menu: { strokeWidth: 2, body: <path d="M4 7h16M4 12h16M4 17h16" /> },
  close: { strokeWidth: 2, body: <path d="M6 6l12 12M18 6L6 18" /> },
  book: {
    strokeWidth: 1.8,
    body: (
      <>
        <path d="M2 5h7a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H2z" />
        <path d="M22 5h-7a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h8z" />
      </>
    ),
  },
  headset: {
    strokeWidth: 1.8,
    body: (
      <>
        <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
        <rect x="2.5" y="14" width="4" height="6" rx="1.5" />
        <rect x="17.5" y="14" width="4" height="6" rx="1.5" />
        <path d="M19.5 20a2.5 2.5 0 0 1-2.5 2h-3" />
      </>
    ),
  },
  sparkles: {
    strokeWidth: 1.8,
    body: (
      <>
        <path d="M12 3l1.8 4.7 4.7 1.8-4.7 1.8L12 16l-1.8-4.7-4.7-1.8 4.7-1.8z" />
        <path d="M19 15l.8 2.2 2.2.8-2.2.8L19 21l-.8-2.2-2.2-.8 2.2-.8z" />
      </>
    ),
  },
  layers: {
    strokeWidth: 1.8,
    body: (
      <>
        <path d="M12 3l9 5-9 5-9-5z" />
        <path d="M3 13l9 5 9-5" />
      </>
    ),
  },
  people: {
    strokeWidth: 1.8,
    body: (
      <>
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
        <path d="M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4-6" />
      </>
    ),
  },
  shield: {
    strokeWidth: 1.8,
    body: (
      <>
        <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  target: {
    strokeWidth: 1.8,
    body: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
  },
  heart: {
    strokeWidth: 1.8,
    body: (
      <path d="M12 20s-7.5-4.6-7.5-10A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7.5 3c0 5.4-7.5 10-7.5 10z" />
    ),
  },
  building: {
    strokeWidth: 1.8,
    body: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="1.5" />
        <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
      </>
    ),
  },
  institution: {
    strokeWidth: 1.8,
    body: (
      <>
        <path d="M3 10l9-6 9 6" />
        <path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18" />
      </>
    ),
  },
  mail: {
    strokeWidth: 1.8,
    body: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
  },
  phone: {
    strokeWidth: 1.8,
    body: (
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    ),
  },
  pin: {
    strokeWidth: 1.8,
    body: (
      <>
        <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  },
  clock: {
    strokeWidth: 1.8,
    body: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
  image: {
    strokeWidth: 1.8,
    body: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="2" />
        <path d="M21 16l-5-5-9 9" />
      </>
    ),
  },
  link: {
    strokeWidth: 1.8,
    body: (
      <>
        <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" />
        <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
      </>
    ),
  },
} satisfies Record<string, { strokeWidth: number; body: ReactNode }>

export type IconName = keyof typeof ICONS

type IconProps = {
  name: IconName
  /** Rendered width and height in px. */
  size?: number
  /** Overrides the icon's default stroke width. */
  strokeWidth?: number
}

export function Icon({ name, size = 24, strokeWidth }: IconProps) {
  const icon = ICONS[name]
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth ?? icon.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icon.body}
    </svg>
  )
}

/** Trailing arrow used in buttons and text links. */
export function ArrowIcon() {
  return <Icon name="arrow" size={18} />
}

export function PauseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="6.5" y="5" width="4" height="14" rx="1" />
      <rect x="13.5" y="5" width="4" height="14" rx="1" />
    </svg>
  )
}

export function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5.5v13l11-6.5z" />
    </svg>
  )
}

type CubesMotifProps = {
  width: number
  height: number
  /** Stroke colour of the two cubes; the arrow is always LIFT blue. */
  cubeStroke: string
}

/** Ascending cubes with an upward arrow: the decorative brand motif. */
export function CubesMotif({ width, height, cubeStroke }: CubesMotifProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 170"
      fill="none"
      strokeWidth="2.5"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <g stroke={cubeStroke}>
        <path d="M14 112l36-18 36 18-36 18z" />
        <path d="M14 112v32l36 18v-32M86 112v32l-36 18" />
      </g>
      <g stroke={cubeStroke}>
        <path d="M70 72l36-18 36 18-36 18z" />
        <path d="M70 72v32l36 18v-32M142 72v32l-36 18" />
      </g>
      <g stroke="#1A47A8">
        <path d="M172 132V18M152 38l20-20 20 20" />
      </g>
    </svg>
  )
}
