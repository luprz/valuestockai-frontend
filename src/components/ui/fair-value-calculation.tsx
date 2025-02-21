'use client'

import { Card } from '@/components/ui/card'

export function FairValueCalculation() {
  return (
    <Card className="p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-[0_8px_32px_-8px_rgba(236,72,153,0.25),0_8px_32px_-8px_rgba(255,87,51,0.25)]">
      <div className="grid grid-cols-[1fr,auto] gap-4 items-start">
        <div>
          <h2 className="text-lg font-semibold mb-2">Fair value calculation</h2>
          <p className="text-sm text-muted-foreground">
            Based on our analysis of the company's financial statements, growth prospects, and market conditions, we estimate that the stock is currently undervalued. The calculated fair price suggests a potential upside of approximately 15% from current market levels. This valuation considers the company's strong cash flow generation, sustainable competitive advantages, and projected earnings growth.
          </p>
        </div>
        <div className="text-right">
          <div className="text-sm text-muted-foreground mb-1">Fair price</div>
          <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-700">$113.10</div>
          <div className="text-sm text-muted-foreground">USD</div>
        </div>
      </div>
    </Card>
  )
}