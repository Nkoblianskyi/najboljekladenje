"use client"
import { X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { firstListSites } from "@/data/betting-sites"
import { useEffect } from "react"

interface TopOffersModalProps {
  isOpen: boolean
  onClose: () => void
}

declare global {
  interface Window {
    updateLinkParams?: () => void
  }
}

export function TopOffersModal({ isOpen, onClose }: TopOffersModalProps) {
  useEffect(() => {
    if (isOpen && typeof window.updateLinkParams === "function") {
      window.updateLinkParams!()
    }
  }, [isOpen])

  if (!isOpen) return null

  const topSite = firstListSites[0]

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md bg-white rounded-xl overflow-hidden shadow-2xl">
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:bg-white/20 z-10 w-9 h-9 p-0 rounded-full"
        >
          <X className="w-5 h-5" />
        </Button>

        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 py-4 text-center">
          <h2 className="text-2xl font-bold text-white">Najbolji Izbor</h2>
        </div>

        <div className="bg-gray-50 p-6 text-center border-b border-gray-200">
          <img
            src={topSite.logo || "/placeholder.svg"}
            alt={topSite.name}
            className="h-20 w-auto object-contain mx-auto"
          />
        </div>

        <div className="p-6">
          <div className="mb-6 text-center">
            <p className="font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide">Ponuda Dobrodošlice</p>
            <div className="text-3xl font-bold text-gray-900 mb-1">{topSite.bonus}</div>
          </div>

          <div className="mb-6 text-center">
            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => {
                  const starRating = topSite.rating / 2
                  const fillPercentage = Math.max(0, Math.min(100, (starRating - i) * 100))

                  return (
                    <div key={i} className="relative">
                      <Star className="w-5 h-5 text-gray-300" />
                      <div className="absolute inset-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </div>
                    </div>
                  )
                })}
              </div>
              <span className="text-xl font-bold text-gray-900">{topSite.rating}</span>
            </div>
            <p className="text-sm text-gray-500">{topSite.reviews.toLocaleString()} recenzija</p>
          </div>

          <Button
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg w-full mb-4 text-lg shadow-md"
            onClick={() => window.open(topSite.url, "_blank")}
          >
            Preuzmi Bonus
          </Button>

          <div className="text-center text-xs text-gray-400 border-t border-gray-200 pt-4">
            18+ • Bezpečna gra • HUPIS
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopOffersModal
