"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX, ChevronDown } from "lucide-react"

export function Hero() {
  const [isMuted, setIsMuted] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.muted = true
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
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
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/mgtech.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
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
    </section>
  )
}
