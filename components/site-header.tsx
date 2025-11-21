"use client"

import Link from "next/link"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background border-b border-border">
      <div className="container mx-auto flex items-center justify-center h-16 px-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Image src="/favicon.ico" alt="najboljekladenje logo" width={32} height={32} />
          </div>
          <span className="font-serif text-2xl uppercase font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
            najboljekladenje
          </span>
          {/* </CHANGE> */}
        </Link>
      </div>
    </header>
  )
}
