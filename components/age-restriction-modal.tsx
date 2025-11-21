"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface AgeRestrictionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AgeRestrictionModal({ isOpen, onClose }: AgeRestrictionModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-sm bg-white">
        <DialogHeader>
          <DialogTitle className="text-center text-lg font-semibold text-gray-900">Dobna granica - 18+</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-center">
          <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
            <span className="text-2xl font-bold text-red-600">18+</span>
          </div>

          <div className="space-y-3">
            <p className="text-base font-semibold text-gray-800">
              Online klađenje dopušteno je samo osobama starijim od 18 godina
            </p>
            <p className="text-sm text-gray-600">
              Pristupom ovoj stranici i korištenjem naših usluga potvrđujete da imate navršenih 18 godina ili više.
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-3 rounded">
            <p className="text-xs text-gray-700 font-medium">
              ⚠️ Klađenje može izazvati ovisnost. Kladite se odgovorno i tražite pomoć ako imate problema s kontrolom
              klađenja.
            </p>
          </div>

          <div className="text-xs text-gray-500 border-t pt-3 space-y-1">
            <p className="font-medium">Za pomoć i podršku:</p>
            <p>📞 Besplatna linija: 0800-1234</p>
            <p>🌐 odgovorno-kladenje.hr</p>
          </div>

          <Button onClick={onClose} className="w-full bg-blue-600 hover:bg-blue-700">
            Potvrđujem da imam 18+ godina
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
