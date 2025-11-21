"use client"

import { useState, useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { InfoSection } from "@/components/info-section"
import HowWeRank from "@/components/how-we-rank"
import { AgeRestrictionModal } from "@/components/age-restriction-modal"
import { AdvertiserInfoModal } from "@/components/advertiser-info-modal"
import TopOffersModal from "@/components/top-offers-modal"
import { FirstBettingSitesList } from "@/components/first-betting-sites-list"
import { OurChoiceSection } from "@/components/our-choice-section"

export default function Home() {
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false)
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)
  const [isTopOffersModalOpen, setIsTopOffersModalOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTopOffersModalOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen flex flex-col relative">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url(/croatian-football-stadium-atmosphere-with-red-and-.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <SiteHeader />

        <HeroSection
          onTopOffersClick={() => setIsTopOffersModalOpen(true)}
          onAdvertiserInfoClick={() => setIsAdvertiserModalOpen(true)}
          onAgeRestrictionClick={() => setIsAgeModalOpen(true)}
        />

        <FirstBettingSitesList />

        <InfoSection />
        <HowWeRank />
        <OurChoiceSection />

        <TopOffersModal isOpen={isTopOffersModalOpen} onClose={() => setIsTopOffersModalOpen(false)} />
        <AgeRestrictionModal isOpen={isAgeModalOpen} onClose={() => setIsAgeModalOpen(false)} />
        <AdvertiserInfoModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
        <SiteFooter />
      </div>
      {/* </CHANGE> */}
    </main>
  )
}
