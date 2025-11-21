"use client"

import Image from "next/image"

interface HeroSectionProps {
  onTopOffersClick: () => void
  onAdvertiserInfoClick: () => void
  onAgeRestrictionClick: () => void
}

export function HeroSection({ onTopOffersClick, onAdvertiserInfoClick, onAgeRestrictionClick }: HeroSectionProps) {
  const currentDate = new Date()
  const formattedDate = `${currentDate.toLocaleString("hr-HR", { month: "long" })} ${currentDate.getFullYear()}`

  return (
    <section className="relative py-4 md:py-0 max-h-[250px] md:max-h-none overflow-hidden md:overflow-visible">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center space-y-2 md:space-y-6 py-2 md:py-6">
          <div className="inline-block bg-primary/10 px-3 py-0.5 md:px-4 md:py-1 rounded-full text-xs md:text-sm font-semibold text-secondary">
            Ažurirano {formattedDate}
          </div>

          <h1
            className="font-serif text-2xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight"
            style={{
              background:
                "linear-gradient(to bottom, #FF0000 0%, #FF0000 33%, #FFFFFF 33%, #FFFFFF 66%, #0000FF 66%, #0000FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Stručne Recenzije Najboljih Kladionica
          </h1>

          <p className="text-sm md:text-xl max-w-2xl mx-auto leading-snug md:leading-relaxed text-secondary-foreground">
            Detaljne analize, usporedbe koeficijenata i ekskluzivni bonusi. Vaš vodič kroz svijet sportskog klađenja.
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-6 pt-2 md:pt-4">
            <div className="flex items-center gap-1.5 md:gap-2 px-2 py-1 md:px-4 md:py-2">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="text-xs md:text-sm font-medium text-white">Bezpečna Gra</span>
            </div>

            <div className="flex items-center gap-1.5 md:gap-2 px-2 py-1 md:px-4 md:py-2">
              <Image src="/flag.png" alt="verified" width={16} height={16} />
              <span className="text-xs md:text-sm font-medium text-white">Licencija</span>
            </div>

            <div className="flex items-center gap-1.5 md:gap-2 px-2 py-1 md:px-4 md:py-2">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-xs md:text-sm font-medium text-white">Oficijelni Proizvod</span>
            </div>
          </div>

          <p className="text-[10px] md:text-xs pt-1 md:pt-4 text-accent-foreground">
            Odgovorno klađenje. 18+.{" "}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onAdvertiserInfoClick()
              }}
              className="hover:underline font-medium transition-colors duration-300 cursor-pointer text-accent"
            >
              Informacije o oglašivaču
            </button>{" "}
            |{" "}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onAgeRestrictionClick()
              }}
              className="hover:underline font-medium transition-colors duration-300 cursor-pointer text-accent"
            >
              Uvjeti i odredbe
            </button>
          </p>
        </div>
      </div>
    </section>
  )
}
