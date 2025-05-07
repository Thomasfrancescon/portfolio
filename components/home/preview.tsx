import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Preview() {
  return (
    <section className="relative items-center justify-center overflow-hidden p-20">
      <h2 className="mb-12 text-center text-3xl font-bold">Explorez mon univers</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {/* About Preview Card */}
        <Card className="overflow-hidden transition-all hover:shadow-lg">
          <div className="relative h-70">
            <Image src="/developpement-web.png" alt="À propos" fill className="object-" />
          </div>
          <CardHeader>
            <CardTitle>À propos</CardTitle>
            <CardDescription>Découvrez mon parcours et mes compétences</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Apprenez-en plus sur mon parcours, mes compétences techniques et ma vision du
              développement web.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline">
              <Link href="/a-propos">
                En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Portfolio Preview Card */}
        <Card className="overflow-hidden transition-all hover:shadow-lg">
          <div className="relative h-70">
            <Image src="/projet.jpg" alt="Portfolio" fill className="object-cover" />
          </div>
          <CardHeader>
            <CardTitle>Portfolio</CardTitle>
            <CardDescription>Explorez mes projets et réalisations</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Découvrez une sélection de mes projets les plus récents et les technologies que
              jutilise.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline">
              <Link href="/portfolio">
                Voir les projets <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
