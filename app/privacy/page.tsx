import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Politika Privatnosti | najboljekladenje",
  description: "Politika privatnosti za najboljekladenje.com",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <div className="flex-1">
        <div className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">Politika Privatnosti</h1>
            <p className="text-xl text-muted-foreground">Ažurirano: Siječanj 2025</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto py-12 px-4">
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Uvod</h2>
              <p className="text-muted-foreground leading-relaxed">
                Dobrodošli na najboljekladenje.com. Ova politika privatnosti objašnjava kako prikupljamo, koristimo i
                štitimo vaše osobne podatke kada posjetite našu web stranicu.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Podaci Koje Prikupljamo</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Prikupljamo sljedeće vrste podataka:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Informacije o pregledavanju (IP adresa, tip preglednika, vrijeme posjete)</li>
                <li>Kolačići i slične tehnologije za analitiku</li>
                <li>Informacije koje nam dobrovoljno pružite kroz kontakt formulare</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Kako Koristimo Podatke</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vaše podatke koristimo za poboljšanje korisničkog iskustva, analizu prometa na stranici i pružanje
                relevantnog sadržaja. Ne prodajemo vaše osobne podatke trećim stranama.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Vaša Prava</h2>
              <p className="text-muted-foreground leading-relaxed">
                Imate pravo pristupa, ispravka ili brisanja vaših osobnih podataka. Za ostvarivanje ovih prava,
                kontaktirajte nas na kontakt@najboljekladenje.com.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Kontakt</h2>
              <p className="text-muted-foreground leading-relaxed">
                Za pitanja o ovoj politici privatnosti, kontaktirajte nas na:{" "}
                <a href="mailto:kontakt@najboljekladenje.com" className="text-primary hover:underline">
                  kontakt@najboljekladenje.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
