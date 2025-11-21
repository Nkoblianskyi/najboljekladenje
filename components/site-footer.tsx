import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info - Larger Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/favicon.ico" alt="najboljekladenje logo" width={32} height={32} />
              <h3 className="font-serif text-lg font-bold text-foreground uppercase">najboljekladenje</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Vaš stručni vodič kroz svijet sportskog klađenja. Nepristrane recenzije i detaljne analize.
            </p>

          </div>

          {/* Navigation - Two Columns */}
          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            {/* Column 1 */}
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm">Stranice</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Početna
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    O Nama
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                    Politika Privatnosti
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                    Politika Kolačića
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm">Odgovorno Klađenje</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>18+ Samo za punoljetne</li>
                <li>Igrajte odgovorno</li>
                <li>Licencirane kladionice</li>
                <li>Zaštita igrača</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Partner Logos Section */}
        <div className="border-t border-border pt-8">
          <p className="text-muted-foreground text-xs text-center leading-relaxed">
            Ova stranica sadrži partnerske linkove. Možemo primiti naknadu kada kliknete na linkove kladionica koje
            recenziramo. Sve informacije pružene su isključivo u informativne svrhe. Klađenje može biti zavisnost.
            Molimo igrajte odgovorno.
          </p>
        </div>
      </div>

      <div className="border-t border-journal-border pt-8 pb-8 flex flex-col items-center">
        <h4 className="font-serif text-base font-bold text-journal-black mb-6">
          Organizacije za pomoć kod ovisnosti o kockanju
        </h4>
        <div className="flex flex-wrap items-center gap-6 md:gap-8">

          <Link
            href="https://www.gambleaware.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <div className="relative w-[90px] h-[36px] md:w-[110px] md:h-[44px] p-2 rounded bg-gray-50 hover:bg-gray-100">
              <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain" />
            </div>
          </Link>

          <Link
            href="https://www.gamcare.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <div className="relative w-[90px] h-[36px] md:w-[110px] md:h-[44px] p-2 rounded bg-gray-50 hover:bg-gray-100">
              <Image src="/gamecare-new.svg" alt="GamCare" fill className="object-contain" />
            </div>
          </Link>



          <Link
            href="https://www.gamstop.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <div className="relative w-[90px] h-[36px] md:w-[110px] md:h-[44px] p-2 rounded bg-gray-50 hover:bg-gray-100">
              <Image src="/gamstop.svg" alt="GamStop" fill className="object-contain" />
            </div>
          </Link>

          <Link
            href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <div className="relative w-[90px] h-[36px] md:w-[110px] md:h-[44px] p-2 rounded bg-gray-50 hover:bg-gray-100">
              <Image src="/pbsvi.svg" alt="PBSVI" fill className="object-contain" />
            </div>
          </Link>


          <Link
            href="https://www.hupis.hr/klok"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <div className="relative w-[90px] h-[36px] md:w-[110px] md:h-[44px] p-2 rounded bg-gray-50 hover:bg-gray-100">
              <Image src="/hupis.png" alt="Hupis" fill className="object-contain" />
            </div>
          </Link>
        </div>
      </div>
      <div className="text-xs text-muted-foreground space-y-1 flex flex-row justify-center items-center gap-2 mt-4">
        <p>© 2025 najboljekladenje.com - Sva prava pridržana</p>
      </div>
    </footer>
  )
}
