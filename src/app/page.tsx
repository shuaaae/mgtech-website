import { CTA } from "@/sections/CTA"
import { Hero } from "@/sections/Hero"
import { Services } from "@/sections/Services"
import { Solutions } from "@/sections/Solutions"
import { Expertise } from "@/sections/Expertise"
import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-transparent w-screen">

        <Hero />
        <Services />
        <Solutions />
        <Expertise />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
