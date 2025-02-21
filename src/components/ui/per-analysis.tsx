'use client'

import { Card } from '@/components/ui/card'

export function PERAnalysis() {
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