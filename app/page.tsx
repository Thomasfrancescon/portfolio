import Hero from "@/components/home/hero"
import Preview from "@/components/home/preview"
import Contact from "@/components/home/contact"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Section Previews */}
      <Preview />

      {/* Contact CTA */}
      <Contact />
    </div>
  )
}
