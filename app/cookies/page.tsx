import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Politika Kolačića | najboljekladenje",
  description: "Politika kolačića za najboljekladenje.com",
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <div className="flex-1">
        <div className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">Politika Kolačića</h1>
            <p className="text-xl text-muted-foreground">Ažurirano: Siječanj 2025</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto py-12 px-4">
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Što Su Kolačići?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kolačići su male tekstualne datoteke koje web stranica pohranjuje na vašem uređaju. Koriste se za
                poboljšanje funkcionalnosti stranice i pružanje boljeg korisničkog iskustva.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Vrste Kolačića Koje Koristimo</h2>

              <div className="space-y-4">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-lg text-foreground mb-2">Nužni Kolačići</h3>
                  <p className="text-muted-foreground text-sm">
                    Ovi kolačići su neophodni za ispravno funkcioniranje web stranice i ne mogu se onemogućiti.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-lg text-foreground mb-2">Analitički Kolačići</h3>
                  <p className="text-muted-foreground text-sm">
                    Pomažu nam razumjeti kako posjetitelji koriste našu stranicu kako bismo mogli poboljšati korisničko
                    iskustvo.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-lg text-foreground mb-2">Marketinški Kolačići</h3>
                  <p className="text-muted-foreground text-sm">
                    Koriste se za praćenje vaših preferencija i prikazivanje relevantnog sadržaja i oglasa.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Kako Upravljati Kolačićima</h2>
              <p className="text-muted-foreground leading-relaxed">
                Možete kontrolirati i/ili obrisati kolačiće kako želite kroz postavke vašeg preglednika. Imajte na umu
                da onemogućavanje određenih kolačića može utjecati na funkcionalnost stranice.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Kontakt</h2>
              <p className="text-muted-foreground leading-relaxed">
                Za pitanja o našoj politici kolačića, kontaktirajte nas na:{" "}
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
