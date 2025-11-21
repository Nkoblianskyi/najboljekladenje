"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-gray-900">O nama i oglašavanju</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
            <p className="text-sm text-gray-700">
              <strong>kladionicehr.com</strong> je neovisna platforma za usporedbu kladionica u Hrvatskoj. Naša misija
              je pomoći vam pronaći najbolje opcije za online klađenje.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-800">Kako zarađujemo:</h3>
            <p className="text-sm text-gray-600">
              Zarađujemo proviziju kada se registrirate kod naših partnerskih kladionica putem naših linkova. To nam
              omogućava da održavamo besplatan servis i kontinuirano poboljšavamo našu platformu.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-800">Naša obećanja:</h3>
            <p className="text-sm text-gray-600">
              ✓ Surađujemo samo s licenciranim operaterima
              <br />✓ Naše ocjene i recenzije ostaju potpuno neovisne
              <br />✓ Promičemo odgovorno klađenje i zaštitu igrača
              <br />✓ Sve informacije su transparentne i provjerene
            </p>
          </div>

          <div className="bg-gray-50 p-3 rounded border border-gray-200">
            <p className="text-xs text-gray-600 font-medium">
              Klađenje nosi rizik. Kladite se odgovorno i samo ono što si možete priuštiti izgubiti. Za pomoć posjetite{" "}
              <span className="text-blue-600">odgovorno-kladenje.hr</span>
            </p>
          </div>

          <Button onClick={onClose} className="w-full bg-blue-600 hover:bg-blue-700">
            Razumio/la sam
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
