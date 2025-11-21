import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CookieConsentProvider } from "@/context/cookie-consent-context"
import CookieConsentBanner from "@/components/cookie-consent-banner"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Najbolje Kladenje - Stručne Recenzije Najboljih Kladionica",
  description:
    "Otkrijte najbolje kladionice s detaljnim recenzijama, analizama koeficijenata i ekskluzivnim bonusima. Vaš vodič kroz svijet sportskog klađenja.",
  keywords: [
  "sportsko klađenje Hrvatska",
  "kladionice Hrvatska",
  "online klađenje Hrvatska",
  "najbolje kladionice",
  "nogometno klađenje Hrvatska",
  "tenis klađenje",
  "košarka klađenje",
  "bonusi za klađenje",
  "klađenje uživo",
  "legalne kladionice Hrvatska",
  "betting sites Croatia",
  "online sportsko klađenje",
  "Formula 1 klađenje",
  "MMA klađenje",
  "hokej klađenje",
  "pikado klađenje",
  "bilijar klađenje",
  "top kladionice Hrvatska",
  "rang lista kladionica",
  "sigurno klađenje Hrvatska",
  "odgovorno klađenje",
  "najbolje kladionice Hrvatska",
  "sportsko klađenje savjeti",
  "klađenje aplikacije Hrvatska",
  "mobilno klađenje",
  "eSports klađenje",
  "virtualni sportovi klađenje",
  "klađenje na nogometne lige",
  "klađenje na teniske turnire",
  "klađenje na košarkaške utakmice",
  "ekskluzivni bonusi za nove korisnike",
  "promocije kladionica",
  "isplate dobitaka klađenje",
  "korisnička podrška kladionica",
  "zakonski okvir klađenja Hrvatska",
  "porezi na dobitke od klađenja",
  "kladionica",
  "sportska kladionica",
  "online kladionica",
  "klađenje uživo",
  "online klađenje",
  "kladionica uzivo",
  "online casino Hrvatska",
  "najbolji online casino",
  "casino bonusi",
  "casino igre Hrvatska",
  "casino Croatia",
  "online casino games",
  "casino bonuses"
]

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <CookieConsentProvider>
            {children}
            <CookieConsentBanner />
          </CookieConsentProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
