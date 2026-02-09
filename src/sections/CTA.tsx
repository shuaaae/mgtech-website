"use client"

import { motion } from "framer-motion"

export function CTA() {
  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-black text-white flex items-center justify-center px-6 py-20"
      style={{ fontFamily: 'var(--font-montserrat)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-4xl w-full flex flex-col items-center text-center gap-8 -mt-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-xs sm:text-sm uppercase tracking-[0.18em] text-white/70"
        >
          Ready to talk
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="space-y-0"
        >
          <p className="text-7xl sm:text-8xl md:text-9xl font-semibold leading-tight -mb-4">
            LET'S
          </p>
          <div className="inline-flex items-center">
            <span
              className="text-7xl sm:text-8xl md:text-9xl font-semibold bg-[#f05bff] text-black px-1 leading-none inline-block"
              style={{ lineHeight: '0.82' }}
            >
              CONNECT
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-x0 sm:text-1xl md:text-2xl text-white/80 max-w-4xl leading-tight space-y-1"
        >
          <span className="block">It all starts with a conversation.</span>
          <span className="block">Tell us about your plans we'll help make them happen.</span>
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 px-6 sm:px-8 py-3 text-sm font-semibold uppercase tracking-[0.12em] bg-[#f05bff] text-black hover:translate-y-[-2px] transition-transform duration-200"
        >
          Contact Us
        </motion.button>
      </motion.div>
    </section>
  )
}

