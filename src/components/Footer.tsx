import Link from "next/link"

const footerLinks = [
  {
    title: "Company",
    items: [
      { label: "About", href: "#hero" },
      { label: "Services", href: "#services" },
      { label: "Solutions", href: "#solutions" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Insights", href: "#insights" },
      { label: "Contact", href: "#contact" },
    ],
  },
]

export function Footer() {
  return (
    <div className="w-full">
      <footer
        className="border-t bg-card/60 min-h-screen flex items-start pt-40"
        style={{ borderColor: 'rgba(255,255,255,0.12)' }}
      >
        <div className="footer_wrap flex w-full h-full">
          <div className="left_foot flex-1 flex flex-col justify-center px-10 lg:px-40 gap-8" style={{ fontFamily: 'Poppins, var(--font-montserrat), sans-serif' }}>
            <a
              href="#solutions"
              className="group relative inline-block overflow-hidden leading-tight text-4xl sm:text-5xl font-extrabold tracking-[0.04em] text-white/85"
            >
              <span className="block translate-y-0 transition-transform duration-500 group-hover:-translate-y-full">SOLUTIONS</span>
              <span className="absolute left-0 top-full block translate-y-1 opacity-0 transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-100 text-[#3EF2C7]">SOLUTIONS</span>
            </a>
            <a
              href="#expertise"
              className="group relative inline-block overflow-hidden leading-tight text-4xl sm:text-5xl font-extrabold tracking-[0.04em] text-white/85"
            >
              <span className="inline-block translate-y-0 transition-transform duration-500 group-hover:-translate-y-full bg-amber-300 text-black px-[0.1em]">EXPERTISE</span>
              <span className="absolute left-0 top-full inline-block translate-y-1 opacity-0 transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-100 text-black bg-amber-300 px-[0.1em]">EXPERTISE</span>
            </a>
            <a
              href="#what-we-do"
              className="group relative inline-block overflow-hidden leading-tight text-4xl sm:text-5xl font-extrabold tracking-[0.04em] text-white/85"
            >
              <span className="block translate-y-0 transition-transform duration-500 group-hover:-translate-y-full">WHAT WE DO</span>
              <span className="absolute left-0 top-full block translate-y-1 opacity-0 transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-100 text-[#00D4FF]">WHAT WE DO</span>
            </a>
            <a
              href="#contact"
              className="group relative inline-block overflow-hidden leading-tight text-4xl sm:text-5xl font-extrabold tracking-[0.04em] text-white/85"
            >
              <span className="inline-block translate-y-0 transition-transform duration-500 group-hover:-translate-y-full bg-[#f05bff] text-black px-[0.1em]">CONTACT</span>
              <span className="absolute left-0 top-full inline-block translate-y-1 opacity-0 transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-100 text-black bg-[#f05bff] px-[0.1em]">CONTACT</span>
            </a>
          </div>
          <div className="right_foot flex-1 flex flex-col justify-center pl-0 pr-6 lg:pl-0 lg:pr-24 gap-10" style={{ fontFamily: 'Poppins, var(--font-montserrat), sans-serif' }}>
            <p className="text-xs tracking-[0.18em] uppercase text-white/70">STAY UP TO DATE</p>
            <p className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Would you like to receive up-to-date information about MGTech?
            </p>
            <div className="w-full border border-[#f05bff] bg-transparent flex items-center justify-between px-4 py-3 text-white/80 text-sm">
              <span>Email address</span>
              <span className="text-[#f05bff] text-base">→</span>
            </div>
            <div className="flex items-center gap-3 text-white/70 text-sm">
              <span className="border border-white/30 px-3 py-2">FB</span>
              <span className="border border-white/30 px-3 py-2">IG</span>
              <span className="border border-white/30 px-3 py-2">X</span>
              <span className="border border-white/30 px-3 py-2">YT</span>
              <span className="border border-white/30 px-3 py-2">IN</span>
            </div>
          </div>
        </div>
      </footer>
      <div className="copy-right w-full text-[11px] uppercase tracking-[0.16em] text-white/60 px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between bg-black/40">
        <span>Copyright © 2026 MGTech. All rights reserved.</span>
        <span className="flex gap-4 mt-2 sm:mt-0">
          <a href="#privacy" className="hover:text-white transition">Privacy Policy</a>
          <a href="#terms" className="hover:text-white transition">Terms & Conditions</a>
        </span>
      </div>
    </div>
  )
}
