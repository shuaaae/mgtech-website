"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

function hasScrollableParent(target: EventTarget | null) {
  let node = target as HTMLElement | null

  while (node && node !== document.body) {
    const style = window.getComputedStyle(node)
    const overflowY = style.overflowY
    const canScroll =
      (overflowY === "auto" || overflowY === "scroll") &&
      node.scrollHeight > node.clientHeight

    if (canScroll) return true
    node = node.parentElement
  }

  return false
}

const SECTIONS = [
  { id: "hero", label: "Hero" },
  { id: "services", label: "Services" },
  { id: "solutions", label: "Solutions" },
  { id: "expertise", label: "Expertise" },
  { id: "what-we-do", label: "What We Do" },
  { id: "contact", label: "Contact" },
  { id: "footer", label: "Footer" },
] as const

const SCROLL_LOCK_MS = 1000

const roadMapContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.08, staggerDirection: -1 },
  },
}

const roadMapItem = {
  hidden: { x: 48, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
  exit: {
    x: 48,
    opacity: 0,
    transition: { duration: 0.4, ease: "easeIn" as const },
  },
}

export function SectionSnapScroll() {
  const pathname = usePathname()
  const isLockedRef = useRef(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const showRoadMap = activeIndex >= 1

  useEffect(() => {
    const getSections = () =>
      Array.from(document.querySelectorAll<HTMLElement>("main section, footer"))

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 8) return
      if (isLockedRef.current) {
        event.preventDefault()
        return
      }
      if (hasScrollableParent(event.target)) return

      const sections = getSections()
      if (sections.length === 0) return

      const y = window.scrollY + 8
      let currentIndex = 0

      for (let i = 0; i < sections.length; i += 1) {
        if (sections[i].offsetTop <= y) currentIndex = i
      }

      const direction = event.deltaY > 0 ? 1 : -1
      const nextIndex = Math.min(
        sections.length - 1,
        Math.max(0, currentIndex + direction)
      )

      if (nextIndex === currentIndex) return

      event.preventDefault()
      isLockedRef.current = true
      window.scrollTo({ top: sections[nextIndex].offsetTop, behavior: "smooth" })

      window.setTimeout(() => {
        isLockedRef.current = false
      }, SCROLL_LOCK_MS)
    }

    window.addEventListener("wheel", onWheel, { passive: false })
    return () => window.removeEventListener("wheel", onWheel)
  }, [])

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section, footer")
    )
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const index = sections.indexOf(entry.target as HTMLElement)
          if (index !== -1) setActiveIndex(index)
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  if (pathname === '/meet-the-mgs') return null

  const scrollToSection = (index: number) => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section, footer")
    )
    const el = sections[index]
    if (!el) return
    isLockedRef.current = true
    el.scrollIntoView({ behavior: "smooth" })
    setActiveIndex(index)
    window.setTimeout(() => {
      isLockedRef.current = false
    }, SCROLL_LOCK_MS)
  }

  return (
    <aside
      className="fixed right-0 top-0 z-50 flex h-screen w-[180px] flex-col items-end justify-center py-8 pr-4 pl-2 pointer-events-none"
      aria-label="Section navigation"
    >
      <AnimatePresence mode="wait">
        {showRoadMap && (
          <motion.div
            key="roadmap"
            className="-mt-[75px] flex flex-col items-end gap-0 pointer-events-auto"
            variants={roadMapContainer}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {/* Logo first: slides in from right */}
            <motion.div
              variants={roadMapItem}
              className="flex shrink-0 items-center justify-end overflow-hidden pr-0"
              style={{ width: 64, height: 160, marginRight: -25 }}
            >
              <Image
                src="/mgtechlogo.png"
                alt="MGTech"
                width={160}
                height={64}
                className="object-contain object-right"
                style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
              />
            </motion.div>
            <nav className="-mt-1 flex flex-col items-end gap-3" role="navigation">
              {SECTIONS.map((section, index) => {
                const isActive = activeIndex === index
                return (
                  <motion.div key={section.id} variants={roadMapItem}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(index)}
                      className="group flex w-full cursor-pointer items-center justify-end gap-2 rounded-md py-0.5 pr-0.5 text-right transition-colors"
                      aria-current={isActive ? "true" : undefined}
                      aria-label={`Go to ${section.label}`}
                    >
                      <span
                        className={`text-[8px] font-medium tracking-wide transition-colors ${
                          isActive
                            ? "text-[#e879f9]"
                            : "text-white/60 group-hover:text-white/80"
                        }`}
                        style={{ fontFamily: "Ethnocentric, sans-serif" }}
                      >
                        {section.label}
                      </span>
                      <span
                        className={`flex h-1.5 w-1.5 shrink-0 rounded-full border border-[#e879f9] transition-colors ${
                          isActive
                            ? "border-[#e879f9] bg-[#e879f9]"
                            : "border-[#e879f9] bg-transparent group-hover:bg-[#e879f9]/30"
                        }`}
                        aria-hidden
                      />
                    </button>
                  </motion.div>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  )
}
