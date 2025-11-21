"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { firstListSites, type BettingSite } from "@/data/betting-sites"

export function FirstBettingSitesList() {
  const [sites, setSites] = useState<BettingSite[]>([])

  useEffect(() => {
    setSites(firstListSites)
  }, [])

  const renderStars = (rating: number, className = "w-4 h-4") => {
    const starRating = rating / 2

    return Array.from({ length: 5 }, (_, i) => {
      const starValue = i + 1
      const fillPercentage = Math.max(0, Math.min(100, (starRating - i) * 100))

      if (fillPercentage >= 100) {
        return <Star key={i} className={`${className} fill-yellow-400 text-yellow-400`} />
      } else if (fillPercentage > 0) {
        return (
          <div key={i} className={`relative ${className}`}>
            <Star className={`${className} text-gray-300 absolute`} />
            <div className="overflow-hidden absolute" style={{ width: `${fillPercentage}%` }}>
              <Star className={`${className} fill-yellow-400 text-yellow-400`} />
            </div>
          </div>
        )
      } else {
        return <Star key={i} className={`${className} text-gray-300`} />
      }
    })
  }

  const getBadgeConfig = (index: number) => {
    const badges = [
      {
        text: "Najbolji Izbor",
        bgClass: "bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400",
        textClass: "text-black",
      },
      {
        text: "Ekskluzivna Ponuda",
        bgClass: "bg-gradient-to-r from-green-600 to-green-700",
        textClass: "text-white",
      },
      {
        text: "Visoko Ocijenjeno",
        bgClass: "bg-gradient-to-r from-blue-600 to-blue-700",
        textClass: "text-white",
      },
      {
        text: "Preporučeno",
        bgClass: "bg-gradient-to-r from-orange-500 to-orange-600",
        textClass: "text-white",
      },
    ]
    return badges[index] || null
  }

  return (
    <section id="first-rankings" className="py-8 md:py-12 w-full">
      <div className="w-full max-w-[1080px] mx-auto">
        <div className="px-4 sm:px-6">
          <div className="space-y-4 sm:space-y-6">
            {sites.map((site, index) => {
              const badgeConfig = getBadgeConfig(index)

              return (
                <Card
                  key={site.id}
                  className={`overflow-hidden transition-all duration-300 hover:shadow-lg border-2 ${
                    index === 0 ? "border-yellow-400 shadow-md" : "border-border hover:border-primary/50"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {index < 4 && badgeConfig && (
                    <div className={`w-full py-2.5 ${badgeConfig.bgClass} shadow-sm`}>
                      <div className="flex items-center justify-center">
                        <span className={`font-bold text-sm tracking-wide ${badgeConfig.textClass}`}>
                          {badgeConfig.text}
                        </span>
                      </div>
                    </div>
                  )}

                  <Link href={site.url} target="_blank" rel="noopener noreferrer" className="block">
                    <CardContent className="p-0 h-full">
                      <div className="flex flex-col md:hidden">
                        <div className="grid grid-cols-2">
                          <div className="bg-gray-100 p-4 flex flex-col items-center justify-center space-y-3 py-4 px-4">
                            <div className="p-3 rounded-lg shadow-md bg-black border border-gray-200">
                              <Image
                                src={site.logo || "/placeholder.svg"}
                                alt={site.name}
                                width={160}
                                height={100}
                                className="h-12 max-w-full object-contain"
                              />
                            </div>

                            <div className="text-center">
                              <div className="text-xs text-gray-400 mb-1">{site.reviews} recenzija</div>
                              <div className="flex items-center justify-center gap-1">
                                {renderStars(site.rating, "w-3 h-3")}
                                <div className="ml-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                                  <span className="text-sm font-bold text-gray-800">{site.rating.toFixed(1)}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-4 flex flex-col items-center justify-center space-y-3">
                            <div className="text-center">
                              <div className="text-yellow-600 mb-1 font-bold text-lg">Bonus Dobrodošlice</div>
                              <div className="text-xl font-bold text-gray-800 mb-1">{site.bonus}</div>
                              {site.dopBonus && <div className="text-gray-800 font-bold text-sm">{site.dopBonus}</div>}
                            </div>

                            <Button
                              className={`px-6 py-2 rounded-lg font-semibold ${
                                index === 0
                                  ? "bg-yellow-400 hover:bg-yellow-500 text-black"
                                  : "bg-green-600 hover:bg-green-700 text-white"
                              }`}
                            >
                              PREUZMI BONUS
                            </Button>

                            <div className="text-sm font-bold text-gray-700">{site.name}</div>
                          </div>
                        </div>
                      </div>

                      <div className="hidden md:flex flex-col">
                        <div className="flex items-center h-full">
                          <div className="bg-white p-8 h-full flex items-center border-r border-gray-200">
                            <div className="bg-black p-4 rounded-lg shadow-md mx-6 border border-gray-200">
                              <Image
                                src={site.logo || "/placeholder.svg"}
                                alt={site.name}
                                width={180}
                                height={100}
                                className="h-24 max-w-full object-contain"
                              />
                            </div>
                          </div>

                          <div className="flex-1 p-6 bg-white text-center">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <div className="mb-2 font-bold text-lg text-muted-foreground">Bonus Dobrodošlice</div>
                                <div className="font-bold text-gray-800 mb-1 text-xl">{site.bonus}</div>
                                {site.dopBonus && (
                                  <div className="text-gray-800 font-bold text-lg">{site.dopBonus}</div>
                                )}
                              </div>

                              <div className="text-center mx-8 flex flex-col items-center gap-2">
                                <span className="font-extrabold text-3xl text-foreground">
                                  {site.rating.toFixed(1)}
                                </span>
                                <div className="text-xs text-gray-400">{site.reviews} recenzija</div>
                                <div className="flex items-center gap-1">{renderStars(site.rating, "w-4 h-4")}</div>
                              </div>

                              <div className="flex flex-col items-center gap-2">
                                <Button
                                  className={`px-8 py-6 rounded-lg font-semibold text-lg ${
                                    index === 0
                                      ? "bg-yellow-400 hover:bg-yellow-500 text-black"
                                      : "bg-green-600 hover:bg-green-700 text-white"
                                  }`}
                                >
                                  PREUZMI BONUS
                                </Button>

                                <div className="text-lg font-bold text-gray-700">{site.name}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="w-full bg-gray-100 py-2 text-center text-xs text-gray-600 border-t border-gray-200">
                          18+ • Bezpečna gra • HUPIS
                        </div>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
