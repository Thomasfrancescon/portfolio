import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Briefcase, GraduationCap, Code, Palette, Database, Server } from "lucide-react"

export default function AboutPage() {
  // Compétences avec niveaux
  const skills = [
    { name: "HTML/CSS", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 85, category: "Frontend" },
    { name: "React", level: 80, category: "Frontend" },
    { name: "Next.js", level: 75, category: "Frontend" },
    { name: "Node.js", level: 70, category: "Backend" },
    { name: "Express", level: 65, category: "Backend" },
    { name: "MongoDB", level: 60, category: "Backend" },
    { name: "SQL", level: 55, category: "Backend" },
    { name: "UI/UX Design", level: 70, category: "Design" },
    { name: "Figma", level: 65, category: "Design" },
  ]

  // Parcours (timeline)
  const timeline = [
    {
      year: "2025 - Présent",
      title: "Étudiant en développement web",
      description: "Formation intensive en développement web full-stack",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      year: "2024 - 2025",
      title: "Stage en développement frontend",
      description: "Création d'interfaces utilisateur et modélisation de data avec Next.js et d3js",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      year: "2023 - 2024",
      title: "Formation développeur web à l'ETNA",
      description: "Apprentissage des bases de la programmation, des algorithmes et du web",
      icon: <GraduationCap className="h-5 w-5" />,
    },
  ]

  return (
    <div className="container py-12">
      {/* Section d'en-tête */}
      <div className="mb-12 flex flex-col items-center gap-8 md:flex-row">
        <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg">
          <Image src="/pp.jpg" alt="Thomas F." fill className="object-cover" priority />
        </div>
        <div className="text-center md:text-left">
          <h1 className="mb-2 text-4xl font-bold">Thomas F.</h1>
          <h2 className="mb-4 text-2xl font-medium text-muted-foreground">
            Développeur Web Full-Stack
          </h2>
          <p className="max-w-lg text-lg">
            Passionné par la création d&apos;expériences web innovantes et intuitives, je combine
            créativité et expertise technique pour donner vie à des projets ambitieux.
          </p>
        </div>
      </div>

      {/* Section biographie */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>À propos de moi</CardTitle>
          <CardDescription>Mon parcours et mes aspirations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Bonjour ! Je suis Thomas, développeur web passionné par les technologies modernes et
            l&apos;expérience utilisateur. Mon parcours a débuté il y a quelques années lorsque
            j&apos;ai découvert le monde fascinant du développement web.
          </p>
          <p>
            Aujourd&apos;hui, je me spécialise dans la création d&apos;applications web performantes
            et esthétiques, en utilisant les frameworks et outils les plus récents. J&apos;accorde
            une attention particulière à l&apos;accessibilité et à l&apos;optimisation des
            performances pour offrir la meilleure expérience possible aux utilisateurs.
          </p>
          <p>
            Mon objectif est de continuer à développer mes compétences et de contribuer à des
            projets innovants qui répondent aux besoins réels des utilisateurs. J&apos;aime relever
            de nouveaux défis.
          </p>
        </CardContent>
      </Card>

      {/* Section compétences */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Mes compétences</CardTitle>
          <CardDescription>Technologies et outils que je maîtrise</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-8 flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="flex items-center gap-1 bg-primary/5 px-3 py-1 text-sm"
            >
              <Code className="h-4 w-4" /> Frontend
            </Badge>
            <Badge
              variant="outline"
              className="flex items-center gap-1 bg-primary/5 px-3 py-1 text-sm"
            >
              <Server className="h-4 w-4" /> Backend
            </Badge>
            <Badge
              variant="outline"
              className="flex items-center gap-1 bg-primary/5 px-3 py-1 text-sm"
            >
              <Database className="h-4 w-4" /> Bases de données
            </Badge>
            <Badge
              variant="outline"
              className="flex items-center gap-1 bg-primary/5 px-3 py-1 text-sm"
            >
              <Palette className="h-4 w-4" /> Design
            </Badge>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Mon parcours</CardTitle>
          <CardDescription>Études et expériences professionnelles</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-1/2 before:bg-border md:ml-5">
            {timeline.map((item, index) => (
              <div key={index} className="relative flex flex-col gap-2 md:flex-row md:gap-6">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-background shadow-md shadow-primary/5 ring-1 ring-border md:ml-0">
                  {item.icon}
                </div>
                <div className="ml-12 md:ml-0">
                  <div className="font-semibold">{item.year}</div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
