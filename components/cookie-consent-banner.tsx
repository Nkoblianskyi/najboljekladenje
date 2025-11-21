"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookieConsent")
    if (!hasConsented) {
      setShowBanner(false)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t-2 border-primary shadow-lg z-50 p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1 text-foreground">Obavijest o Kolačićima</h3>
          <p className="text-sm text-muted-foreground">
            Koristimo kolačiće za poboljšanje vašeg iskustva pregledavanja i analizu prometa. Klikom na "Prihvati"
            pristajete na našu upotrebu kolačića.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 justify-center md:justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={declineCookies}
            className="text-sm px-4 py-2 h-auto bg-transparent"
          >
            Odbij
          </Button>
          <Button
            onClick={acceptCookies}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm px-4 py-2 h-auto"
          >
            Prihvati
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setShowBanner(false)} className="md:hidden p-1 h-auto">
            <X className="h-4 w-4" />
          </Button>
        </div>
        {/* </CHANGE> */}
      </div>
    </div>
  )
}
