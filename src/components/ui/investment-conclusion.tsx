'use client'

import { Card } from '@/components/ui/card'

export function InvestmentConclusion() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Main Analysis */}
      <Card className="p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <h3 className="font-semibold mb-4">Investment Analysis</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Overall Conclusion</h4>
            <p className="text-sm text-muted-foreground">
              Based on our comprehensive analysis of financial metrics, market position, and growth trajectory,
              this company demonstrates strong fundamentals and positive growth potential. The company shows
              healthy revenue growth, stable profit margins, and effective management of resources.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Investment Feasibility</h4>
            <div className="flex items-center gap-2 mb-2">
              <div className="px-3 py-1 bg-green-500/10 text-green-500 text-sm font-medium rounded-full">
                Recommended
              </div>
              <div className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-sm font-medium rounded-full">
                Medium Risk
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Investment in this company is considered feasible due to its strong market position,
              sustainable competitive advantages, and clear growth strategy. The risk-reward ratio appears
              favorable for medium to long-term investment horizons.
            </p>
          </div>
        </div>
      </Card>

      {/* Investment Strategy */}
      <Card className="p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <h3 className="font-semibold mb-2">Investment Strategy</h3>
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium mb-1">Recommended Approach</h4>
            <p className="text-sm text-muted-foreground">
              Gradual position building through dollar-cost averaging over 6-12 months.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-1">Portfolio Allocation</h4>
            <p className="text-sm text-muted-foreground">
              Suggested 5-8% of investment portfolio depending on risk tolerance.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-1">Investment Horizon</h4>
            <p className="text-sm text-muted-foreground">
              3-5 years minimum holding period recommended.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}