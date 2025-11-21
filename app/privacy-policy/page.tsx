import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Politika Privatnosti | kladionicehr",
  description:
    "Pročitajte našu politiku privatnosti kako biste razumjeli kako prikupljamo, koristimo i štitimo vaše osobne podatke.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <SiteHeader />

      <div className="flex-1">
        <div className="max-w-3xl mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Politika Privatnosti</h1>
          <p className="text-sm text-gray-500 mb-12">Posljednje ažuriranje: Siječanj 2025</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Informacije Koje Prikupljamo</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Platforma kladionicehr.com prikuplja informacije kako bi pružila najbolje usluge usporedbe sportskih
                kladionica u Hrvatskoj:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
                <li>Kontakt informacije kada se pretplatite na newsletter</li>
                <li>Sportske preferencije za personalizaciju sadržaja</li>
                <li>Podatke o pregledavanju za poboljšanje iskustva</li>
                <li>Informacije o lokaciji za usklađenost s hrvatskim zakonima</li>
                <li>Provjeru dobi (obavezno 18+ godina)</li>
                <li>Tehničke podatke o vašem uređaju i pregledniku</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Kako Koristimo Vaše Podatke</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
                <li>Pružanje točnih usporedbi licenciranih kladionica u Hrvatskoj</li>
                <li>Personaliziranje preporuka na temelju vaših omiljenih sportova</li>
                <li>Slanje obavijesti o najboljim kvotama i promocijama</li>
                <li>Osiguranje usklađenosti s hrvatskom regulativom</li>
                <li>Promicanje odgovornog klađenja</li>
                <li>Zaštitu od prijevara i zlouporabe platforme</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Kolačići i Tehnologije Praćenja</h2>
              <p className="text-gray-700 leading-relaxed">
                Koristimo kolačiće i druge tehnologije praćenja. Možete uputiti svoj preglednik da odbije sve kolačiće
                ili da naznači kada se šalje kolačić. Detaljnije informacije možete pronaći u našoj{" "}
                <a href="/cookie-policy" className="text-blue-600 hover:underline">
                  Politici Kolačića
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Dijeljenje Informacija</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Vaše osobne podatke tretiramo s povjerljivošću. Možemo podijeliti ograničene informacije s:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
                <li>Licenciranim kladionicama u Hrvatskoj kada zatražite informacije</li>
                <li>Pružateljima tehničkih usluga</li>
                <li>Regulatornim tijelima kada je zakonski obvezno</li>
                <li>Organizacijama za odgovorno klađenje</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
                Nikada ne prodajemo vaše osobne podatke trećim stranama.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Sigurnost Podataka</h2>
              <p className="text-gray-700 leading-relaxed mb-3">Implementirali smo rigorozne sigurnosne mjere:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
                <li>SSL enkripcija za sve prijenose podataka</li>
                <li>Sigurni serveri smješteni u Europskoj uniji</li>
                <li>Ograničen pristup podacima samo ovlaštenom osoblju</li>
                <li>Redovite sigurnosne provjere i usklađenost s GDPR-om</li>
                <li>Sustavi za detekciju prijevara</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Vaša Prava</h2>
              <p className="text-gray-700 leading-relaxed mb-3">Prema GDPR-u imate sljedeća prava:</p>
              <ul className="space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <span className="font-semibold text-gray-900">Pravo pristupa</span> - Kopija vaših osobnih podataka
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Pravo na ispravak</span> - Ispravak netočnih informacija
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Pravo na brisanje</span> - "Pravo na zaborav"
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Pravo na prenosivost</span> - Prijenos podataka drugoj
                  usluzi
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Pravo na prigovor</span> - Usprotivljenje obradi
                  podataka
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Zadržavanje Podataka</h2>
              <p className="text-gray-700 leading-relaxed">
                Čuvamo vaše osobne podatke samo onoliko dugo koliko je potrebno za ispunjenje svrha opisanih u ovoj
                politici ili kako zahtijeva zakon. Newsletter podaci se čuvaju dok ne otkažete pretplatu, a podaci o
                pregledavanju se automatski brišu nakon 24 mjeseca.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Kontakt</h2>
              <p className="text-gray-700 leading-relaxed">
                Za pitanja o privatnosti ili zaštiti podataka:
                <br />
                <br />
                <span className="font-semibold">Email:</span> privatnost@kladionicehr.com
                <br />
                <span className="font-semibold">Službenik za zaštitu podataka:</span> dpo@kladionicehr.com
              </p>
            </section>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
