"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX, ChevronDown, ChevronUp } from "lucide-react"

export function Hero() {
  const [isMuted, setIsMuted] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const sendPlayerCommand = (func: string, args: unknown[] = []) => {
    const iframe = iframeRef.current
    if (!iframe?.contentWindow) return

    iframe.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func,
        args,
      }),
      "*"
    )
  }

  const toggleMute = () => {
    if (isMuted) {
      sendPlayerCommand("unMute")
    } else {
      sendPlayerCommand("mute")
    }
    setIsMuted(!isMuted)
  }

  const scrollToTop = () => {
    const heroSection = document.getElementById("hero")
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" })
      return
    }

    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120)
    }
    
    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          ref={iframeRef}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] w-[177.78vh] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube-nocookie.com/embed/4fn_XnbUt_o?autoplay=1&mute=1&controls=0&loop=1&playlist=4fn_XnbUt_o&playsinline=1&rel=0&enablejsapi=1&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1"
          title="MG Tech showcase video"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          tabIndex={-1}
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />
      
      <button
        onClick={toggleMute}
        className="absolute bottom-8 left-7 md:left-12 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all hover:bg-white/30"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX className="h-6 w-6 text-white" />
        ) : (
          <Volume2 className="h-6 w-6 text-white" />
        )}
      </button>

      <div className={`absolute bottom-8 right-7 md:right-12 z-10 transition-all duration-300 ${
        scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100 animate-bounce'
      }`}>
        <ChevronDown className="h-10 w-10 text-white/80" />
        <ChevronDown className="h-10 w-10 text-white/80 -mt-8" />
      </div>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-7 md:right-12 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all hover:bg-white/30 ${
          scrolled ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6 text-white" />
      </button>
    </section>
  )
}
