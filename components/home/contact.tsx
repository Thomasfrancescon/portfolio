"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import emailjs from "emailjs-com"

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.currentTarget as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      .then(
        result => {
          console.log("Email envoyé : ", result.text)
          setSuccess(true)
        },
        error => {
          console.log("Erreur : ", error.text)
        }
      )
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <section className="relative flex items-center justify-center bg-muted py-16 relative items-center justify-center overflow-hidden">
      <div className="container text-center item-center">
        <h2 className="mb-4 text-2xl font-bold">Intéressé par une collaboration?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
          Je suis ouvert aux opportunités de projets et de collaborations. Nhésitez pas à me
          contacter.
        </p>
        <form className="flex flex-col space-y-4 max-w-md mx-auto" onSubmit={sendEmail}>
          <Input type="text" name="name" placeholder="Votre nom" required />
          <Input type="email" name="email" placeholder="Votre email" required />
          <Textarea name="message" placeholder="Votre message" rows={4} required />
          <Button
            type="submit"
            className="bg-blue-500 text-white w-40 max-w-md mx-auto"
            disabled={loading}
          >
            {loading ? "Envoi..." : "Envoyer"}
          </Button>
        </form>
        {success && <p className="mt-4 text-green-500">Email envoyé avec succès !</p>}
      </div>
    </section>
  )
}
