'use client'

import { Card } from './card'
import { ScrollArea } from './scroll-area'

export function DebtAnalysis() {
  return (
    <div className="grid grid-cols-[1fr,1fr] gap-4">
      {/* Debt Analysis */}
      <Card className="p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <h3 className="font-semibold mb-4">Debt Analysis</h3>
        <ScrollArea className="h-[200px]">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              The company maintains a balanced debt structure with the following key metrics:
              
              • Total Debt: $500M
              • Debt-to-Equity Ratio: 0.8
              • Interest Coverage Ratio: 5.2x
              • Current Portion of Debt: $50M
              
              The debt profile shows:
              • 60% Long-term bonds
              • 25% Bank loans
              • 15% Other debt instruments
              
              The company's debt management strategy appears sustainable with strong coverage ratios and a well-distributed maturity profile.
            </p>
          </div>
        </ScrollArea>
      </Card>

      {/* Summary */}
      <Card className="p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <h3 className="font-semibold mb-2">Summary</h3>
        <p className="text-sm text-muted-foreground">
          The company's debt levels are well-managed with a conservative leverage profile. The strong interest coverage ratio and balanced maturity schedule indicate a healthy financial position with manageable debt service obligations.
        </p>
      </Card>
    </div>
  )
}