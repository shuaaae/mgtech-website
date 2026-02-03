"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function CTA() {
  return (
    <section id="contact" className="py-16 sm:py-20 min-h-screen flex items-center">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-border/60 bg-gradient-to-br from-foreground to-foreground/90 px-8 py-10 sm:px-12 sm:py-14"
        >
          <div className="flex flex-col gap-6 text-background sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-background/70">
                Let’s build together
              </p>
              <h3 className="text-2xl font-semibold sm:text-3xl">Bring resilience and clarity to your roadmap.</h3>
              <p className="max-w-xl text-background/80">
                We partner with technology leaders to deliver secure, observable, and performant platforms.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="mailto:hello@mgtech.com"
                className="rounded-full bg-background px-4 py-2 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:shadow-sm"
              >
                Email MGTech
              </Link>
              <Link
                href="#services"
                className="rounded-full border border-background/40 px-4 py-2 text-sm font-semibold text-background transition hover:-translate-y-0.5 hover:bg-background/10"
              >
                View services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
