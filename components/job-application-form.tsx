"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"
import { Loader2, Upload } from "lucide-react"

interface JobApplicationFormProps {
  jobId: string
}

export function JobApplicationForm({ jobId }: JobApplicationFormProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [coverLetter, setCoverLetter] = useState("")
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [useLinkedInProfile, setUseLinkedInProfile] = useState(true)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simuler un appel API
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Dans une application réelle, vous enverriez les données à votre API
      // const formData = new FormData()
      // formData.append("jobId", jobId)
      // formData.append("coverLetter", coverLetter)
      // if (resumeFile) formData.append("resume", resumeFile)
      // formData.append("useLinkedInProfile", String(useLinkedInProfile))
      // await fetch("/api/job-applications", { method: "POST", body: formData })

      toast({
        title: "Candidature envoyée",
        description: "Votre candidature a été envoyée avec succès.",
        variant: "default",
      })

      // Réinitialiser le formulaire
      setCoverLetter("")
      setResumeFile(null)
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de votre candidature.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle className="text-lg">Postuler à cette offre</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="use-linkedin"
                checked={useLinkedInProfile}
                onCheckedChange={(checked) => setUseLinkedInProfile(checked as boolean)}
              />
              <Label htmlFor="use-linkedin" className="text-sm">
                Utiliser mon profil LinkedIn
              </Label>
            </div>
            <p className="text-xs text-muted-foreground">
              Nous utiliserons les informations de votre profil LinkedIn pour compléter votre candidature.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cover-letter">Lettre de motivation</Label>
            <Textarea
              id="cover-letter"
              placeholder="Expliquez pourquoi vous êtes intéressé par ce poste..."
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              className="min-h-[120px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="resume">CV (optionnel)</Label>
            <div className="flex items-center gap-2">
              <Input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setResumeFile(e.target.files[0])
                  }
                }}
              />
              <Button
                type="button"
                variant="outline"
                className="w-full justify-start gap-2"
                onClick={() => document.getElementById("resume")?.click()}
              >
                <Upload className="h-4 w-4" />
                {resumeFile ? resumeFile.name : "Télécharger votre CV"}
              </Button>
              {resumeFile && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => setResumeFile(null)}
                  className="h-8 w-8"
                >
                  <span className="sr-only">Supprimer</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </Button>
              )}
            </div>
            <p className="text-xs text-muted-foreground">Formats acceptés: PDF, DOC, DOCX. Taille maximale: 5 MB.</p>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Envoi en cours...
              </>
            ) : (
              "Envoyer ma candidature"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
