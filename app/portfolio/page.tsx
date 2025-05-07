"use client"

import { useState } from "react"
import Image from "next/image"
import {
  ExternalLink,
  Code,
  X,
  ChevronLeft,
  ChevronRight,
  Laptop,
  Smartphone,
  Palette,
  Server,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Données des projets (à remplacer par vos propres projets)
const projects = [
  {
    id: 1,
    title: "Site E-commerce",
    description: "Une plateforme de vente en ligne avec panier d'achat et paiement sécurisé.",
    shortDescription: "Plateforme e-commerce complète avec système de paiement.",
    category: "Web",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    link: "https://example.com",
    github: "https://github.com/username/project",
    icon: <Laptop className="h-5 w-5" />,
  },
  {
    id: 2,
    title: "Application Mobile",
    description:
      "Application de suivi de fitness avec statistiques personnalisées et plans d'entraînement.",
    shortDescription: "App mobile de suivi fitness avec statistiques personnalisées.",
    category: "Mobile",
    technologies: ["React Native", "Firebase", "Redux"],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    link: "https://example.com",
    github: "https://github.com/username/project",
    icon: <Smartphone className="h-5 w-5" />,
  },
  {
    id: 3,
    title: "Design UI/UX",
    description:
      "Refonte complète de l'interface utilisateur d'une application de gestion de tâches.",
    shortDescription: "Refonte UI/UX d'une application de gestion de tâches.",
    category: "Design",
    technologies: ["Figma", "Adobe XD", "Photoshop"],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    link: "https://example.com",
    github: null,
    icon: <Palette className="h-5 w-5" />,
  },
  {
    id: 4,
    title: "API RESTful",
    description: "Développement d'une API complète pour une application de réservation en ligne.",
    shortDescription: "API RESTful pour application de réservation.",
    category: "Backend",
    technologies: ["Express", "PostgreSQL", "JWT", "Docker"],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    link: "https://example.com",
    github: "https://github.com/username/project",
    icon: <Server className="h-5 w-5" />,
  },
  {
    id: 5,
    title: "Portfolio Personnel",
    description:
      "Conception et développement de mon portfolio personnel avec Next.js et Tailwind CSS.",
    shortDescription: "Portfolio personnel avec Next.js et Tailwind CSS.",
    category: "Web",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    link: "https://example.com",
    github: "https://github.com/username/project",
    icon: <Laptop className="h-5 w-5" />,
  },
  {
    id: 6,
    title: "Dashboard Analytics",
    description: "Tableau de bord interactif pour visualiser et analyser des données commerciales.",
    shortDescription: "Dashboard interactif pour l'analyse de données.",
    category: "Web",
    technologies: ["React", "D3.js", "Firebase", "Material UI"],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    link: "https://example.com",
    github: "https://github.com/username/project",
    icon: <Laptop className="h-5 w-5" />,
  },
]

// Projets mis en avant pour le carrousel
const featuredProjects = projects.slice(0, 3)

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)

  // Ouvrir la modal avec les détails du projet
  const openProjectDetails = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  // Fermer la modal
  const closeProjectDetails = () => {
    setSelectedProject(null)
  }

  // Navigation dans le carrousel de la galerie
  const nextCarouselSlide = () => {
    setCurrentCarouselIndex(prev => (prev === featuredProjects.length - 1 ? 0 : prev + 1))
  }

  const prevCarouselSlide = () => {
    setCurrentCarouselIndex(prev => (prev === 0 ? featuredProjects.length - 1 : prev - 1))
  }

  // Navigation dans les images du projet dans la modal
  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(prev => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(prev => (prev === 0 ? selectedProject.images.length - 1 : prev - 1))
    }
  }

  return (
    <div className="p-12">
      <h1 className="mb-6 text-4xl font-bold">Mon Portfolio</h1>
      <p className="mb-12 text-lg text-muted-foreground">
        Découvrez une sélection de mes projets récents dans le développement web, mobile et le
        design.
      </p>

      {/* Carrousel de projets mis en avant */}
      <div className="relative mb-16 overflow-hidden rounded-xl bg-muted/50 p-6">
        <h2 className="mb-6 text-2xl font-semibold">Projets à la une</h2>
        <div className="relative h-[400px] overflow-hidden rounded-lg">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                index === currentCarouselIndex
                  ? "translate-x-0 opacity-100"
                  : index < currentCarouselIndex
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0"
              }`}
            >
              <div className="relative h-full w-full">
                <Image
                  src={project.images[0] || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
                  <p className="mb-4 max-w-md">{project.shortDescription}</p>
                  <Button onClick={() => openProjectDetails(project)} variant="secondary">
                    Voir les détails
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {/* Boutons de navigation du carrousel */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={prevCarouselSlide}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Précédent</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={nextCarouselSlide}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Suivant</span>
          </Button>

          {/* Indicateurs du carrousel */}
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentCarouselIndex ? "bg-primary" : "bg-white/50"
                }`}
                onClick={() => setCurrentCarouselIndex(index)}
              >
                <span className="sr-only">Slide {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filtres par catégorie */}
      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">Tous</TabsTrigger>
          <TabsTrigger value="Web">Web</TabsTrigger>
          <TabsTrigger value="Mobile">Mobile</TabsTrigger>
          <TabsTrigger value="Design">Design</TabsTrigger>
          <TabsTrigger value="Backend">Backend</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} onDetails={openProjectDetails} />
            ))}
          </div>
        </TabsContent>

        {["Web", "Mobile", "Design", "Backend"].map(category => (
          <TabsContent key={category} value={category} className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter(project => project.category === category)
                .map(project => (
                  <ProjectCard key={project.id} project={project} onDetails={openProjectDetails} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Modal de détails du projet */}
      <Dialog open={!!selectedProject} onOpenChange={open => !open && closeProjectDetails()}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              {selectedProject?.icon}
              {selectedProject?.title}
            </DialogTitle>
            <DialogDescription>{selectedProject?.description}</DialogDescription>
          </DialogHeader>

          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Fermer</span>
          </DialogClose>

          {selectedProject && (
            <div className="space-y-6">
              {/* Galerie d'images */}
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                />

                {/* Navigation des images */}
                {selectedProject.images.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-5 w-5" />
                      <span className="sr-only">Image précédente</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-5 w-5" />
                      <span className="sr-only">Image suivante</span>
                    </Button>

                    {/* Indicateurs */}
                    <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          className={`h-2 w-2 rounded-full ${
                            index === currentImageIndex ? "bg-primary" : "bg-white/50"
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        >
                          <span className="sr-only">Image {index + 1}</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Technologies utilisées */}
              <div>
                <h3 className="mb-2 text-lg font-medium">Technologies utilisées</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map(tech => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Liens */}
              <div className="flex gap-4">
                {selectedProject.link && (
                  <Button asChild>
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Voir le projet
                    </a>
                  </Button>
                )}
                {selectedProject.github && (
                  <Button variant="outline" asChild>
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Code className="h-4 w-4" />
                      Voir le code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

// Composant de carte de projet
function ProjectCard({
  project,
  onDetails,
}: {
  project: (typeof projects)[0]
  onDetails: (project: (typeof projects)[0]) => void
}) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.images[0] || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2">
          {project.icon}
          <CardTitle>{project.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-2 text-muted-foreground">{project.shortDescription}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" onClick={() => onDetails(project)}>
          Voir les détails
        </Button>
        <div className="flex gap-1">
          {project.technologies.slice(0, 2).map(tech => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 2 && (
            <Badge variant="secondary" className="text-xs">
              +{project.technologies.length - 2}
            </Badge>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
