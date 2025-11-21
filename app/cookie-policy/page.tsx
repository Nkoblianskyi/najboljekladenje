import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Politika Kolačića | kladionicehr",
  description: "Saznajte kako koristimo kolačiće na stranici kladionicehr.com.",
}

export default function CookiePage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <SiteHeader />

      <div className="flex-1">
        <div className="max-w-3xl mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Politika Kolačića</h1>
          <p className="text-sm text-gray-500 mb-12">Posljednje ažuriranje: Siječanj 2025</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Što su Kolačići?</h2>
              <p className="text-gray-700 leading-relaxed">
                Kolačići su male tekstualne datoteke koje se pohranjuju na vaš uređaj kada posjetite našu web stranicu
                kladionicehr.com. Ove datoteke omogućuju nam da vas prepoznamo i poboljšamo vaše iskustvo pregledavanja,
                pružajući personalizirane funkcionalnosti i osiguravajući da naša stranica radi učinkovito za sve vaše
                aktivnosti povezane s pregledom kladionica.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Kako Koristimo Kolačiće</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Na stranici kladionicehr.com koristimo kolačiće za sljedeće svrhe:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
                <li>Održavanje vaše sesije aktivnom i sigurnom tijekom pregledavanja</li>
                <li>Pamćenje vaših preferencija i omiljenih sportova</li>
                <li>Analizu performansi stranice i poboljšanje naših usluga</li>
                <li>Personaliziranje ponuda i promocija relevantnih za vas</li>
                <li>Osiguranje usklađenosti s hrvatskim regulativama za igre na sreću</li>
                <li>Prevenciju prijevara i promicanje odgovornog klađenja</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Vrste Kolačića</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Nužni Kolačići</p>
                  <p className="leading-relaxed">
                    Neophodni za osnovno funkcioniranje stranice, uključujući sigurnosne funkcionalnosti i obaveznu
                    provjeru dobi (18+) za pristup sadržaju o klađenju.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Kolačići Performansi</p>
                  <p className="leading-relaxed">
                    Pomažu nam razumjeti kako koristite stranicu i koji su sportovi najpopularniji među posjetiteljima.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Funkcionalni Kolačići</p>
                  <p className="leading-relaxed">
                    Pamte vaše osobne preferencije, poput omiljenih timova i jezičnih postavki.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Marketinški Kolačići</p>
                  <p className="leading-relaxed">
                    Koriste se za prikazivanje personaliziranih ponuda od licenciranih kladionica u Hrvatskoj.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Upravljanje Kolačićima</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Možete upravljati ili onemogućiti kolačiće putem postavki vašeg web preglednika. Međutim, onemogućavanje
                određenih kolačića može utjecati na funkcionalnost stranice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Kolačići Treće Strane</h2>
              <p className="text-gray-700 leading-relaxed">
                Naša stranica može sadržavati kolačiće od partnerskih kladionica koje su licencirane i regulirane prema
                hrvatskim zakonima o igrama na sreću. Svi partneri strogo poštuju hrvatsko zakonodavstvo o online
                klađenju.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Kontakt</h2>
              <p className="text-gray-700 leading-relaxed">
                Za pitanja o našoj Politici Kolačića kontaktirajte nas:
                <br />
                <span className="font-semibold">Email:</span> info@kladionicehr.com
              </p>
            </section>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
