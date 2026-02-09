"use client"

import Image from "next/image"
import { Menu, Search, X } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useSearch } from "@/contexts/SearchContext"

const navItems = [
  { label: "Solutions", href: "#solutions" },
  { label: "Expertise", href: "#expertise" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { isSearchOpen, openSearch, closeSearch } = useSearch()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[72px] transition-all duration-300 ease-in-out ${
        isSearchOpen 
          ? "bg-transparent" 
          : scrolled 
            ? "bg-black" 
            : "bg-transparent"
      }`}
      style={{
        ...(isSearchOpen && {
          // No additional styles needed for transparent navbar
        })
      }}
    >
      <div className="flex h-full w-full items-center justify-between pl-7 pr-6 md:pl-12 md:pr-10">
        <Link
          href="#"
          className="flex items-center gap-0 text-lg font-semibold tracking-tight text-white -translate-y-0.5 mt-3"
        >
          <Image
            src="/mgtechlogo.png"
            alt="MGTech"
            width={194}
            height={54}
            className="h-auto w-[155px]"
            priority
          />
        </Link>

        <div className="ml-auto flex items-center gap-10">
          <nav
            className="hidden items-center gap-15 text-sm font-extrabold uppercase tracking-[0.00em] text-white/85 md:flex leading-relaxed"
            style={{ fontFamily: 'Poppins, var(--font-montserrat), sans-serif' }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative inline-block overflow-hidden leading-relaxed"
              >
                <span className={`block translate-y-0 transition-transform duration-500 group-hover:-translate-y-full ${item.label === "Insights" ? "group-hover:text-[#00D4FF]" : item.label === "Contact" ? "group-hover:text-[#f05bff]" : item.label === "Solutions" ? "group-hover:text-[#3EF2C7]" : "group-hover:text-amber-300"}`}>
                  {item.label}
                </span>
                <span className={`absolute left-0 top-full block translate-y-1 opacity-0 transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-100 ${item.label === "Insights" ? "text-[#00D4FF]" : item.label === "Contact" ? "text-[#f05bff]" : item.label === "Solutions" ? "text-[#3EF2C7]" : "text-amber-300"}`}>
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label={isSearchOpen ? "Close search" : "Search"}
            className="hidden md:inline-flex items-center justify-center p-2 text-white transition hover:text-white"
            onClick={() => isSearchOpen ? closeSearch() : openSearch()}
          >
            {isSearchOpen ? (
              <motion.div
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-8 w-9" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Search className="h-8 w-9" />
              </motion.div>
            )}
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/30 p-2 text-white md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setOpen((s) => !s)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-black/80 backdrop-blur px-6 pb-4 pt-2 md:hidden"
        >
          <div className="flex flex-col gap-3 text-sm text-white/80">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-1 transition-colors hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="rounded-full bg-white/90 px-4 py-2 text-center text-sm font-semibold text-foreground"
              onClick={() => setOpen(false)}
            >
              Talk to us
            </Link>
          </div>
        </motion.div>
      )}

    </header>
  )
}
