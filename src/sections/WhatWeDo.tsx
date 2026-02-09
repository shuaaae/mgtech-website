"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

// Page content data
const pagesData = [
  {
    id: 0,
    headline: "DIGITAL",
    highlightedWord: "EXCELLENCE",
    paragraph1: "From strategy to execution, MGTech delivers reliable and scalable IT solutions designed to support modern businesses and optimize operations.",
    paragraph2: "Our expertise spans system development, infrastructure management, cloud solutions, and emerging technologies for future-ready implementations.",
    buttonText: "OUR SERVICES",
    image: "/1.jpg",
    previewHeadline: "ICONIC",
    previewHighlight: "DESTINATIONS"
  },
  {
    id: 1,
    headline: "ICONIC",
    highlightedWord: "DESTINATIONS",
    paragraph1: "Discover extraordinary places where innovation meets excellence. Our curated destinations represent the pinnacle of digital transformation.",
    paragraph2: "We provide leasing lifecycle support, with negotiators, contract drafters, accountants and collectors to take care of every step.",
    buttonText: "EXPLORE",
    image: "/2.png",
    previewHeadline: "SMART",
    previewHighlight: "SOLUTIONS"
  },
  {
    id: 2,
    headline: "SMART",
    highlightedWord: "SOLUTIONS",
    paragraph1: "Innovative technology solutions that drive business growth and operational excellence across all industries and sectors.",
    paragraph2: "Our facility management team ensures your facility is safe, clean and secure with comprehensive support services.",
    buttonText: "DISCOVER",
    image: "/3.png",
    previewHeadline: "DIGITAL",
    previewHighlight: "EXCELLENCE"
  }
]

export function WhatWeDo() {
  const [isInView, setIsInView] = useState(false)
  const [hasRevealed, setHasRevealed] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState(0) // -1 for prev, 1 for next

  // Premium easing curve
  const premiumEase: [number, number, number, number] = [0.77, 0, 0.175, 1]
  const animationDuration = 1.1

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('what-we-do')
      if (!section) return
      
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Check if section is in viewport
      const inView = rect.top < windowHeight && rect.bottom > 0
      
      // Check if we're scrolling from above
      const scrollingFromAbove = rect.top > 0 && rect.top < windowHeight
      
      if (inView && !hasRevealed && scrollingFromAbove) {
        setIsInView(true)
        setHasRevealed(true)
      } else if (!inView && rect.top > windowHeight) {
        // Reset when scrolling above the section
        setIsInView(false)
        setHasRevealed(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state immediately
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasRevealed])

  // Check initial visibility on mount
  useEffect(() => {
    const section = document.getElementById('what-we-do')
    if (!section) return
    
    const rect = section.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const inView = rect.top < windowHeight && rect.bottom > 0
    
    if (inView) {
      setIsInView(true)
      setHasRevealed(true)
    }
  }, [])

  const handlePrevClick = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(-1)
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : 2))
    setTimeout(() => setIsAnimating(false), animationDuration * 1000)
  }

  const handleNextClick = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(1)
    setCurrentPage((prev) => (prev < 2 ? prev + 1 : 0))
    setTimeout(() => setIsAnimating(false), animationDuration * 1000)
  }

  // Get current and next page data
  const currentPageData = pagesData[currentPage]
  const nextPageIndex = (currentPage + 1) % 3
  const prevPageIndex = currentPage > 0 ? currentPage - 1 : 2
  const nextPageData = pagesData[nextPageIndex]

  // Slide animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
    }),
    center: {
      x: 0,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
    }),
  }

  return (
    <section
      id="what-we-do"
      className="w-screen bg-black py-20 md:py-32 lg:py-40 overflow-hidden"
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      <div className="w-full pl-7 md:pl-12 pr-6 md:pr-8 lg:pr-12">
        <div className="grid grid-cols-1 md:grid-cols-[0.4fr_1.1fr] gap-0 md:gap-0 lg:gap-0">
          {/* First Column - Section Label Only */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-start pt-0"
          >
            <div className="flex items-center gap-4">
              <div className="w-3 h-6 bg-[#00D4FF]"></div>
              <p className="text-lg md:text-xl font-semibold uppercase tracking-[0.1em]" style={{ fontFamily: 'var(--font-montserrat)' }}>WHAT WE DO</p>
            </div>
          </motion.div>

          {/* Combined Column 2 & 3 - Content and Image as One Unit */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-[0.3fr_0.8fr] gap-0 md:gap-0 lg:gap-0">
              {/* Second Column - Headlines */}
              <div className="flex flex-col justify-start pt-0 -ml-24 md:-ml-36 lg:-ml-40 relative">
                {/* Carousel Progress Bar */}
                <div className="flex items-center mb-19" style={{ paddingTop: '0em', marginTop: '0.8em', position: 'relative' }}>
                  {/* Progress Line */}
                  <div className="h-0.5 bg-white/20 rounded-full overflow-hidden" style={{ position: 'absolute', left: '0', right: '-80%', width: 'auto' }}>
                    <motion.div 
                      className="h-full bg-[#00D4FF] rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: `${(currentPage + 1) * 33.33}%` }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                  </div>
                  {/* Page Dots */}
                  <div className="flex items-center gap-3" style={{ position: 'absolute', right: '-99%' }}>
                    {[0, 1, 2].map((dot) => (
                      <motion.div
                        key={dot}
                        className="w-2 h-2 rounded-full cursor-pointer"
                        style={{ 
                          backgroundColor: currentPage === dot ? '#00D4FF' : 'rgba(255, 255, 255, 0.3)',
                          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                        }}
                        whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
                        whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                        onClick={() => setCurrentPage(dot)}
                      />
                    ))}
                  </div>
                </div>

                {/* Arrow Buttons */}
                <div className="flex items-center justify-start mb-4" style={{ marginBottom: '5em' }}>
                  <motion.button
                    onClick={handlePrevClick}
                    whileHover={{ scale: 1.15, x: -2, transition: { duration: 0.2, ease: "easeOut" } }}
                    whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                    className="flex items-center justify-center text-[#00D4FF] hover:text-[#00D4FF]/80 transition-all duration-300"
                  >
                    <svg className="w-10 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 19l-7-7m0 0l7-7m-7 7h22" />
                    </svg>
                  </motion.button>
                  <div className="w-8"></div>
                  <motion.button
                    onClick={handleNextClick}
                    whileHover={{ scale: 1.15, x: 2, transition: { duration: 0.2, ease: "easeOut" } }}
                    whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                    className="flex items-center justify-center text-[#00D4FF] hover:text-[#00D4FF]/80 transition-all duration-300"
                  >
                    <svg className="w-10 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 5l7 7m0 0l-7 7m7-7H2" />
                    </svg>
                  </motion.button>
                </div>

                {/* Content Container with Morph Animation */}
                <div className="relative overflow-hidden" style={{ minHeight: '400px' }}>
                  <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                      key={currentPage}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "tween", duration: animationDuration, ease: premiumEase },
                      }}
                      className="w-full relative"
                    >
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight mb-3" style={{ fontFamily: 'var(--font-montserrat)', lineHeight: '0.7' }}>
                        {currentPageData.headline}
                        <span className="font-semibold bg-[#00D4FF] text-black" style={{ paddingTop: '0.2em', paddingBottom: '0.2em', marginTop: '0.2em', marginBottom: '0.0em', lineHeight: '0.6', fontFamily: 'var(--font-montserrat)', display: 'block', marginLeft: '-0.0em', boxSizing: 'border-box', width: 'fit-content', padding: '0.1em 0.0em' }}>{currentPageData.highlightedWord}</span>
                      </h1>
                      
                      {/* Text content */}
                      <div className="space-y-4 text-white/90 text-sm leading-relaxed mt-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
                        <p>{currentPageData.paragraph1}</p>
                        <p>{currentPageData.paragraph2}</p>
                      </div>

                      {/* CTA Button */}
                      <motion.button 
                        whileHover={{ x: 8 }}
                        transition={{ duration: 0.2 }}
                        className="mt-39 flex items-center gap-3 bg-[#00D4FF] text-black px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] self-start"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                      >
                        {currentPageData.buttonText}
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Third Column - Image */}
              <div className="flex flex-col justify-start pt-24 max-w-[90%] -ml-24 md:-ml-32 lg:-ml-40 relative">
                <div className="relative w-[55%] h-[625px] mx-auto overflow-hidden bg-black">
                  {/* Initial reveal mask - only shows on first load */}
                  <motion.div
                    initial={{ x: '0%' }}
                    animate={{ x: isInView ? '100%' : '0%' }}
                    transition={{ 
                      duration: 1.2, 
                      ease: [0.77, 0, 0.175, 1]
                    }}
                    className="absolute inset-0 bg-black z-30"
                    style={{ pointerEvents: 'none' }}
                  />
                  {/* Image with morph animation - moves with content */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                      <motion.div
                        key={`image-${currentPage}`}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          x: { type: "tween", duration: animationDuration, ease: premiumEase },
                        }}
                        className="absolute inset-0"
                      >
                        <motion.div
                          initial={{ opacity: 1, x: 0 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ 
                            opacity: 0.8, 
                            x: direction > 0 ? '-100%' : '100%',
                            transition: {
                              x: { type: "tween", duration: animationDuration, ease: premiumEase },
                              opacity: { type: "tween", duration: animationDuration * 0.8, ease: premiumEase }
                            }
                          }}
                          className="w-full h-full"
                        >
                          <Image
                            src={currentPageData.image}
                            alt={currentPageData.headline}
                            width={800}
                            height={600}
                            className="w-full h-full object-cover"
                            style={{
                              objectPosition: 'center center',
                              objectFit: 'cover'
                            }}
                          />
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Preview Section - Next Page Content (Morph Animation) */}
                <div className="absolute top-0 left-full -ml-40 mt-96 space-y-4 overflow-hidden" style={{ fontFamily: 'var(--font-montserrat)', width: '400px' }}>
                  <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div 
                      key={`preview-${currentPage}`}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "tween", duration: animationDuration, ease: premiumEase },
                      }}
                      className="space-y-4 relative"
                      style={{ opacity: 0.6 }}
                    >
                      <h2 className="text-2xl md:text-3xl font-bold text-white/50 uppercase tracking-[0.05em]">
                        {nextPageData.headline}
                        <span className="font-semibold bg-[#00D4FF]/60 text-black/80" style={{ paddingTop: '0.3em', paddingBottom: '0.3em', marginTop: '0.1em', marginBottom: '0.0em', lineHeight: '0.6', fontFamily: 'var(--font-montserrat)', display: 'block', marginLeft: '0em', boxSizing: 'border-box', width: 'fit-content', padding: '0.15em 0.1em' }}>{nextPageData.highlightedWord}</span>
                      </h2>
                      <p className="text-white/40 text-sm leading-relaxed mb-33" style={{ width: '400px' }}>
                        {nextPageData.paragraph1} {nextPageData.paragraph2}
                      </p>
                      <motion.button 
                        whileHover={{ x: 8, opacity: 1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2 bg-[#00D4FF]/60 text-black/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] self-start"
                      >
                        {nextPageData.buttonText}
                        <ArrowRight className="w-3 h-3" />
                      </motion.button>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
