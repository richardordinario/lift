import { useRef, useState } from "react"

import heroMp4 from "@/assets/hero-animation.mp4"
import heroWebm from "@/assets/hero-animation.webm"
import heroPoster from "@/assets/hero-poster.png"
import { PauseIcon, PlayIcon } from "@/components/icons"

/**
 * Safari and every iOS browser cannot play WebM with an alpha channel, so they
 * get the MP4 instead of the transparent WebM.
 */
function lacksAlphaWebm() {
  const ua = navigator.userAgent || ""
  return (
    (/AppleWebKit/i.test(ua) && !/(Chrome|Chromium|Edg|OPR)\//i.test(ua)) ||
    /CriOS|FxiOS|EdgiOS/i.test(ua)
  )
}

/** Transparent looping animation beside the home page headline. */
export function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [src] = useState(() => (lacksAlphaWebm() ? heroMp4 : heroWebm))
  const [reduceMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )
  const [paused, setPaused] = useState(reduceMotion)

  const toggle = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      void video.play()
      setPaused(false)
    } else {
      video.pause()
      setPaused(true)
    }
  }

  return (
    <figure className="hero-media">
      <video
        ref={videoRef}
        className="hero-video"
        src={src}
        poster={heroPoster}
        width="960"
        height="720"
        autoPlay={!reduceMotion}
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Animation: three ascending green columns labelled AI for Teachers, AI for BPOs and AI for Youth, with an upward arrow."
      />
      <button
        className="vid-btn"
        type="button"
        aria-label={paused ? "Play animation" : "Pause animation"}
        onClick={toggle}
      >
        {paused ? <PlayIcon /> : <PauseIcon />}
      </button>
    </figure>
  )
}
