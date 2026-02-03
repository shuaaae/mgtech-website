"use client"

import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Controls scroll speed (lower = faster)
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      infinite: false,
    })

    lenisRef.current = lenis

    // Connect Lenis to requestAnimationFrame loop
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Clean up on unmount
    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
