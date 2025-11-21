import { Shield, TrendingUp, Smartphone, CreditCard, Star, CheckCircle } from "lucide-react"

const rankingCriteria = [
  {
    id: 1,
    title: "Licenca i Regulacija",
    description:
      "Provjeravamo da li svaka kladionica posjeduje važeću licencu Ministarstva financija RH te slijedi sve propise o odgovornom klađenju i zaštiti igrača.",
    icon: Shield,
  },
  {
    id: 2,
    title: "Kvaliteta Koeficijenata",
    description:
      "Analiziramo visinu koeficijenata za najpopularnije sportove i događaje. Bolje kvote znače veći potencijalni dobitak za vas.",
    icon: TrendingUp,
  },
  {
    id: 3,
    title: "Mobilna Aplikacija",
    description:
      "Testiramo funkcionalnost mobilnih aplikacija i web stranica. Moderna kladionica mora raditi besprijekorno na svim uređajima.",
    icon: Smartphone,
  },
  {
    id: 4,
    title: "Načini Plaćanja",
    description:
      "Procjenjujemo dostupnost platnih metoda kao što su kartice, bankovni transferi i e-novčanici, te brzinu isplate dobitaka.",
    icon: CreditCard,
  },
  {
    id: 5,
    title: "Korisnička Podrška",
    description:
      "Kvalitetna podrška dostupna na hrvatskom jeziku putem live chata, emaila ili telefona je ključna za pozitivno iskustvo.",
    icon: Star,
  },
  {
    id: 6,
    title: "Bonus Uvjeti",
    description:
      "Pažljivo čitamo sve uvjete bonusa kako bismo osigurali da su pošteni, ostvarivi i transparentni bez skrivenih klauzula.",
    icon: CheckCircle,
  },
]

export default function HowWeRank() {
  return (
    <section className="py-12 md:py-16 bg-white max-w-[1000px] w-full px-8 mx-auto">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Naša Metodologija Ocjenjivanja
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Svaka kladionica koju preporučujemo prolazi kroz rigorozan proces testiranja i evaluacije. Naš tim
              stručnjaka analizira sve aspekte korisničkog iskustva kako bismo osigurali da dobijete najpouzdanije
              informacije za donošenje odluka.
            </p>

            {/* Criteria Grid */}
            <div className="grid md:grid-cols-2 gap-6 my-8">
              {rankingCriteria.map((criterion) => {
                const Icon = criterion.icon
                return (
                  <div key={criterion.id} className="bg-card p-6 rounded-lg border border-border">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground mb-2">{criterion.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{criterion.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
              Dubinska Analiza Koeficijenata
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Visina koeficijenata direktno utječe na vaš potencijalni dobitak. Analiziramo koeficijente za popularne
              lige i događaje, uspoređujemo ih s tržišnim prosjecima i identificiramo kladionice koje konzistentno nude
              najbolje vrijednosti. Pratimo promjene koeficijenata i margine kladionica kako bismo osigurali da naše
              preporuke ostanu aktualne.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground mt-8 mb-4">
              Testiranje Korisničke Podrške
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Kvalitetna korisnička služba ključna je za pozitivno iskustvo. Kontaktiramo podršku putem svih dostupnih
              kanala – live chat, email, telefon – s realnim upitima i problemima. Mjerimo vrijeme odgovora,
              profesionalnost osoblja i kvalitetu rješenja. Kladionice koje nude 24/7 podršku s educi ranim i ljubaznim
              timom dobivaju najviše ocjene.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground mt-8 mb-4">
              Provjera Brzine Isplata
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Nema ništa frustrirajuće od dugog čekanja na isplatu dobitaka. Testiramo sve metode isplate koje
              kladionica nudi, pratimo vremenske okvire obrade i provjeravamo transparentnost procesa. Najbolje
              kladionice procesuiraju isplate u roku od 24-48 sati za e-novčanike i kartice, s jasnom komunikacijom o
              statusu transakcije.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
