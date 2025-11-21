import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "O Nama | najboljekladenje",
  description: "Upoznajte naš tim stručnjaka i našu misiju pružanja najboljih analiza i recenzija kladionica.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <div className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance text-foreground">
              O Najboljekladenje
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Vaš pouzdani partner u svijetu sportskog klađenja
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto py-12 px-4">
          <div className="space-y-12">
            {/* Mission Section */}
            <section>
              <h2 className="font-serif text-3xl font-bold mb-4 text-foreground">Naša Misija</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Na platformi <strong>najboljekladenje.com</strong>, naša misija je pružiti ljubiteljima sportskog
                klađenja sveobuhvatne, nepristrane i stručne recenzije najboljih kladionica. Vjerujemo u potpunu
                transparentnost, iskrenost i promociju odgovornog klađenja kao temelja zdrave industrije.
              </p>
            </section>

            {/* Team Section */}
            <section className="bg-card rounded-lg p-8 border border-border">
              <h2 className="font-serif text-3xl font-bold mb-4 text-foreground">Tko Smo Mi?</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Naš tim čine iskusni analitičari sportskog klađenja, stručnjaci iz industrije i posvećeni istraživači
                koji detaljno testiraju i evaluiraju svaku kladionicu.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                S godinama kombiniranog iskustva, posjedujemo znanje i ekspertizu potrebnu da vam pružimo pouzdane i
                provjerene preporuke.
              </p>
            </section>

            {/* Evaluation Process */}
            <section>
              <h2 className="font-serif text-3xl font-bold mb-4 text-foreground">Kako Ocjenjujemo</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Svaka kladionica prolazi kroz temeljitu evaluaciju. Ocjenjujemo sigurnost, kvalitetu koeficijenata,
                korisničku podršku, metode plaćanja i cjelokupno iskustvo.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Sigurnost i Licenciranje",
                  "Kvaliteta Koeficijenata",
                  "Korisnička Podrška",
                  "Brzina Isplata",
                  "Mobilno Iskustvo",
                  "Bonus Uvjeti",
                ].map((item) => (
                  <div key={item} className="bg-muted/50 rounded-lg p-4 border border-border">
                    <p className="font-semibold text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Responsible Gambling */}
            <section className="bg-primary text-primary-foreground rounded-lg p-8">
              <h2 className="font-serif text-3xl font-bold mb-4">Odgovorno Klađenje</h2>
              <p className="leading-relaxed text-lg mb-4">
                Predani smo promociji odgovornog klađenja. Sve kladionice koje preporučujemo su licencirane i
                regulirane.
              </p>
              <p className="leading-relaxed text-lg">
                Ohrabrujemo sve posjetitelje da se klade odgovorno, postave granice i potraže pomoć ako je potrebno.
                Klađenje treba biti zabava, a ne problem.
              </p>
            </section>

            {/* Contact Section */}
            <section className="text-center">
              <h2 className="font-serif text-3xl font-bold mb-4 text-foreground">Kontakt</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Imate pitanja ili prijedloge? Kontaktirajte nas:
              </p>
              <a
                href="mailto:kontakt@najboljekladenje.com"
                className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-3 rounded-lg transition-colors"
              >
                kontakt@najboljekladenje.com
              </a>
            </section>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
