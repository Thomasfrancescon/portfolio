import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative flex h-[70vh] items-center justify-center overflow-hidden">
      <div className="container z-10 px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Thomas F.
        </h1>
        <h2 className="mb-6 text-2xl font-medium text-muted-foreground sm:text-3xl">
          Développeur Web Créatif
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          Je transforme des idées en expériences numériques élégantes et fonctionnelles, avec une
          passion pour l&apos;innovation et l&apos;attention aux détails.
        </p>
        <Button asChild size="lg" className="rounded-full">
          <Link href="/portfolio">
            Découvrir mon travail <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
