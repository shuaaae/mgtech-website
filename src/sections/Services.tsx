"use client"

import { motion } from "framer-motion"

export function Services() {
  return (
    <section
      id="services"
      className="relative min-h-screen flex items-center justify-end overflow-hidden bg-black pr-12 md:pr-20 lg:pr-32"
      style={{ fontFamily: 'Ethnocentric' }}
    >
      <div className="relative z-10 flex flex-col items-end">
        <motion.h1 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl md:text-9xl lg:text-10xl font-bold text-white tracking-wider"
          style={{ fontFamily: 'Ethnocentric' }}
        >
          TECHNOLOGY.
        </motion.h1>
        <motion.h1 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-wider"
          style={{ fontFamily: 'Ethnocentric' }}
        >
          THAT <span className="bg-amber-300 text-black inline-block font-bold" style={{ paddingLeft: '0.1em', paddingRight: '0.1em', paddingTop: '0.2em', paddingBottom: '-0.05em', lineHeight: '0.7', verticalAlign: 'baseline' }}>WORKS.</span>
        </motion.h1>
      </div>
    </section>
  )
}
