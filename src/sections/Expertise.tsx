"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Expertise() {
  return (
    <section className="w-screen bg-black py-32 lg:py-40 min-h-screen">
      <div className="w-full px-8 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 relative max-w-[100rem] mx-auto">

          {/* Vertical dividers */}
          <div className="hidden md:block absolute left-0 top-0 h-full w-px bg-white/0" />
          <div className="hidden md:block absolute left-1/3 top-0 h-full w-px bg-white/0" />
          <div className="hidden md:block absolute left-2/3 top-0 h-full w-px bg-white/0" />
          <div className="hidden md:block absolute right-0 top-0 h-full w-px bg-white/0" />

          {/* COLUMN */}
          {[
            {
              title: "PRINCIPLES",
              text: [
                "We believe technology should be practical, reliable, and built with purpose. At MGTech, every solution is designed to solve real problems, scale with growth, and deliver measurable impact for businesses and communities.",
              ],
            },
            {
              title: "STORY",
              text: [
                "Founded with a passion for innovation, MGTech was created to bridge the gap between complex technology and real-world needs, growing into a trusted technology partner delivering digital solutions across multiple industries.",
              ],
            },
            {
              title: "LEADERSHIP",
              text: [
                "MGTech is led by forward-thinking technologists and problem solvers who value clarity, integrity, and continuous improvement, focusing on building strong teams, embracing innovation, and delivering results that matter.",
              ],
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-col justify-between px-12 lg:px-20 py-12 min-h-[90vh] border-l border-r border-white/10"
            >
              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: i * 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
                style={{ paddingTop: '100px' }}
              >
                <p className="text-5xl font-bold text-white mb-2">OUR</p>
                <span className="inline-block bg-[#3EF2C7] text-black text-5xl font-bold px-2">
                  {item.title}
                </span>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.3 + 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="mt-0 space-y-4 text-white/90 text-lg leading-relaxed font-semibold" style={{ fontFamily: '"Druk Condensed", sans-serif', marginTop: '-190px' }}
              >
                {item.text.map((t, idx) => (
                  <p key={idx}>{t}</p>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.button
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.3 + 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
                className="mt-8 self-start bg-[#3EF2C7] text-black px-6 py-3 text-sm font-semibold uppercase tracking-widest flex items-center gap-3"
              >
                READ MORE
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
