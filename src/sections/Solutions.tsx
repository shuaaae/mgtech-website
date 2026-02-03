"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Solutions() {
  return (
    <section
      id="solutions"
      className="w-screen bg-black py-20 md:py-32 lg:py-40"
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      <div className="w-full pl-7 md:pl-12 pr-6 md:pr-8 lg:pr-12">
        <div className="grid grid-cols-1 md:grid-cols-[0.4fr_0.7fr_0.8fr] gap-0 md:gap-0 lg:gap-0">
          {/* First Column - Section Label Only */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-start pt-0"
          >
            <div className="flex items-center gap-4">
              <div className="w-3 h-6 bg-[#3EF2C7]"></div>
              <p className="text-lg md:text-xl font-semibold uppercase tracking-[0.1em]" style={{ fontFamily: 'var(--font-montserrat)' }}>WHO WE ARE</p>
            </div>
          </motion.div>

          {/* Second Column - Headlines */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-start pt-12 -ml-8 md:-ml-12 lg:-ml-16"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>
              REDEFINING
              <span className="bg-[#3EF2C7] text-black px-0 py-0 inline-block font-semibold" style={{ paddingTop: '0.0em', paddingBottom: '0.0em', marginTop: '0.0em', marginBottom: '0.0em', lineHeight: '0.8', fontFamily: 'var(--font-montserrat)' }}> DIGITAL SERVICES</span>
            </h1>
          </motion.div>

          {/* Third Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-start pt-28 max-w-[90%] -ml-16 md:-ml-24 lg:-ml-32"
          >
            {/* Paragraphs */}
            <div className="space-y-6 text-white/90 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-montserrat)' }}>
              <p>
                MGTech is a modern technology startup building reliable, high-impact digital solutions for organizations shaping the future. We work at the intersection of innovation, governance, and enterprise systems, helping institutions move faster, smarter, and with confidence.
              </p>
              
              <p>
                Though young in formation, MGTech is trusted by public leaders, policymakers, and institutions seeking innovative approaches to service delivery, digital transformation, and operational efficiency. Our work supports initiatives where technology must perform, scale, and earn trust.
              </p>
              
              <p>
                We collaborate closely with decision-makers, technical teams, and stakeholders to design systems that are secure, sustainable, and built for real-world impact. For us, innovation is not about disruption alone — it's about responsibility, reliability, and results.
              </p>
              
              <p className="font-light italic">
                At MGTech, progress begins with trust — and innovation follows.
              </p>
            </div>

            {/* CTA Button */}
            <motion.button 
              whileHover={{ x: 8 }}
              transition={{ duration: 0.2 }}
              className="mt-12 flex items-center gap-3 bg-[#3EF2C7] text-black px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] self-start"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              WHO WE ARE
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
