'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'

export function PERAnalysis() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="grid grid-cols-[1fr,300px] gap-4">
        <Card className="p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center justify-center h-[200px] flex-col">
            <div className="h-16 w-32 bg-muted rounded animate-pulse mb-2" />
            <div className="h-4 w-40 bg-muted rounded animate-pulse" />
          </div>
        </Card>

        <Card className="p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="h-6 w-24 bg-muted rounded animate-pulse mb-2" />
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded animate-pulse w-full" />
            <div className="h-4 bg-muted rounded animate-pulse w-[95%]" />
            <div className="h-4 bg-muted rounded animate-pulse w-[90%]" />
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-[1fr,300px] gap-4">
      <Card className="p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center justify-center h-[200px] flex-col">
          <span className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500/90 to-[#FF5733]/90">15x</span>
          <span className="text-sm text-muted-foreground mt-2">Price-to-Earnings Ratio</span>
        </div>
      </Card>

      <Card className="p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <h3 className="font-semibold mb-2">Resumen</h3>
        <p className="text-sm text-muted-foreground">
          The company's PER of 15x indicates a moderate valuation compared to the sector average of 18x. This suggests the stock might be slightly undervalued, potentially offering a good entry point for investors. The lower multiple could indicate either higher growth prospects or lower risk compared to industry peers.
        </p>
      </Card>
    </div>
  )
}