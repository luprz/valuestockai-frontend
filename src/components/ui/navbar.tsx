'use client'

import Link from 'next/link'
import { Card } from './card'
import { SearchInput } from './search-input'
import { useSearchParams } from 'next/navigation'

export function Navbar() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''

  return (
    <Card className="sticky top-0 z-50 p-0 rounded-none bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center flex-shrink-0">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500/90 to-[#FF5733]/90">
            ValueStockAI
          </h1>
        </Link>
        <div className="flex-grow max-w-xl">
          <SearchInput initialQuery={query} />
        </div>
        <div className="flex-shrink-0 w-[150px]"></div>
      </div>
    </Card>
  )
}