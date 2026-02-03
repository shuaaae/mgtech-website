"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="w-screen bg-black py-20 md:py-32 lg:py-40"
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      <div className="w-full pl-7 md:pl-12 pr-6 md:pr-8 lg:pr-12">
        <div className="grid grid-cols-1 md:grid-cols-[0.4fr_0.3fr_0.8fr] gap-0 md:gap-0 lg:gap-0">
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
              <p className="text-lg md:text-xl font-semibold uppercase tracking-[0.1em]" style={{ fontFamily: 'var(--font-montserrat)' }}>WHAT WE DO</p>
            </div>
          </motion.div>

          {/* Second Column - Headlines */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-start pt-16 -ml-24 md:-ml-36 lg:-ml-40"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight mb-3" style={{ fontFamily: 'var(--font-montserrat)', lineHeight: '0.7' }}>
              BUILDING
              <span className="bg-[#3EF2C7] text-black px-2 py-0 inline-block font-semibold" style={{ paddingTop: '0.2em', paddingBottom: '0.2em', marginTop: '0.2em', marginBottom: '0.0em', lineHeight: '0.6', fontFamily: 'var(--font-montserrat)', display: 'block', marginLeft: '-0.2em' }}> DIGITAL SOLUTIONS</span>
            </h1>
            
            {/* Moved text content here */}
            <div className="space-y-4 text-white/90 text-base leading-relaxed mt-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
              <p>
                From strategy to execution, MGTech delivers reliable and scalable IT solutions designed to support modern businesses. We help organizations optimize operations, improve efficiency, and adapt to evolving digital demands.
              </p>
              
              <p> 
                Our expertise spans system development, infrastructure management, cloud solutions, cybersecurity, and emerging technologies. By combining technical excellence with practical implementation, we ensure solutions that are secure, future-ready, and built to scale.
              </p>
            </div>
          </motion.div>

          {/* Third Column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-start pt-28 max-w-[90%] -ml-16 md:-ml-24 lg:-ml-32"
          >
            <div className="relative w-[70%] overflow-hidden rounded-lg mx-auto">
              <Image
                src="/1.jpg"
                alt="Digital Solutions"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                style={{
                  objectPosition: 'center center',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* CTA Button */}
            <motion.button 
              whileHover={{ x: 8 }}
              transition={{ duration: 0.2 }}
              className="mt-12 flex items-center gap-3 bg-[#3EF2C7] text-black px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] self-start"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              OUR SERVICES
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
