import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Copy, MessageSquare, RefreshCw, Send, Wand2 } from "lucide-react"

export default function MessagesPage() {
  return (
    <div className="flex min-h-screen bg-[#F3F2EF]">
      <DashboardSidebar />
      <div className="flex-1 p-6 md:p-8">
        <header className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight">Générateur de messages</h1>
          <p className="text-muted-foreground">
            Créez des messages personnalisés et efficaces pour vos contacts LinkedIn
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Créer un nouveau message</CardTitle>
              <CardDescription>
                Sélectionnez le type de message et fournissez des informations sur le destinataire
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="message-type" className="text-sm font-medium">
                  Type de message
                </label>
                <Select defaultValue="connection">
                  <SelectTrigger id="message-type">
                    <SelectValue placeholder="Sélectionnez un type de message" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="connection">Demande de connexion</SelectItem>
                    <SelectItem value="followup">Message de suivi</SelectItem>
                    <SelectItem value="application">Candidature</SelectItem>
                    <SelectItem value="introduction">Demande d'introduction</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="recipient-info" className="text-sm font-medium">
                  Informations sur le destinataire
                </label>
                <Textarea
                  id="recipient-info"
                  placeholder="Nom, poste, entreprise, ou URL LinkedIn du destinataire"
                  className="min-h-[100px]"
                />
                <p className="text-xs text-muted-foreground">
                  Plus vous fournissez d'informations, plus le message sera personnalisé.
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Ton du message</label>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" className="rounded-full">
                    Formel
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full bg-primary/10">
                    Professionnel
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Décontracté
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Enthousiaste
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Objectif principal</label>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" className="rounded-full bg-primary/10">
                    Networking
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Opportunité d'emploi
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Collaboration
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Conseil
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full gap-2">
                <Wand2 className="h-4 w-4" />
                Générer un message
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Message généré</CardTitle>
              <CardDescription>Votre message personnalisé prêt à être envoyé</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-lg p-4 min-h-[250px] text-sm">
                <p>Bonjour [Prénom],</p>
                <br />
                <p>
                  J'ai remarqué votre profil LinkedIn et je suis impressionné(e) par votre parcours dans le domaine du
                  [secteur]. Votre expérience chez [entreprise] et vos compétences en [compétence] correspondent
                  parfaitement à mes intérêts professionnels.
                </p>
                <br />
                <p>
                  Je serais ravi(e) de vous ajouter à mon réseau pour échanger sur les tendances du secteur et
                  potentiellement explorer des opportunités de collaboration.
                </p>
                <br />
                <p>Cordialement,</p>
                <p>[Votre nom]</p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <div className="flex gap-2 w-full">
                <Button variant="outline" className="flex-1 gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Régénérer
                </Button>
                <Button variant="outline" className="flex-1 gap-2">
                  <Copy className="h-4 w-4" />
                  Copier
                </Button>
              </div>
              <Button className="w-full gap-2">
                <Send className="h-4 w-4" />
                Envoyer sur LinkedIn
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Historique des messages</CardTitle>
              <CardDescription>Vos messages récemment générés</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList className="mb-4">
                  <TabsTrigger value="all">Tous</TabsTrigger>
                  <TabsTrigger value="connection">Connexion</TabsTrigger>
                  <TabsTrigger value="followup">Suivi</TabsTrigger>
                  <TabsTrigger value="application">Candidature</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="space-y-4">
                  {[
                    {
                      recipient: "Alexandre Martin",
                      company: "TechVision",
                      type: "Connexion",
                      date: "Aujourd'hui",
                      status: "Envoyé",
                    },
                    {
                      recipient: "Sophie Dubois",
                      company: "InnoSoft",
                      type: "Suivi",
                      date: "Hier",
                      status: "Répondu",
                    },
                    {
                      recipient: "Thomas Bernard",
                      company: "DataTech",
                      type: "Candidature",
                      date: "Il y a 3 jours",
                      status: "Envoyé",
                    },
                  ].map((message, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{message.recipient}</p>
                          <span className="text-xs text-muted-foreground">{message.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="bg-muted px-1.5 py-0.5 rounded text-xs">{message.type}</span>
                          <span>{message.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {message.status === "Répondu" ? (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Répondu</span>
                        ) : (
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Envoyé</span>
                        )}
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Copy className="h-4 w-4" />
                          <span className="sr-only">Copier</span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Voir tous les messages
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
