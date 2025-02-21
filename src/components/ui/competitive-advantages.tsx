'use client'

import { Card } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'

export function CompetitiveAdvantages() {
  return (
    <div className="grid grid-cols-[1fr,300px] gap-4">
      {/* Main Competitive Advantages */}
      <Card className="p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <h3 className="font-semibold mb-4">Competitive Advantages</h3>
        <ScrollArea className="h-[200px]">
          <div className="space-y-4">
            <div className="border-b border-border/40 pb-3">
              <h4 className="font-medium text-sm">Strong Brand Recognition</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Established market presence and trusted reputation among consumers and business partners.
              </p>
            </div>
            <div className="border-b border-border/40 pb-3">
              <h4 className="font-medium text-sm">Technological Innovation</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Continuous investment in R&D, resulting in industry-leading products and solutions.
              </p>
            </div>
            <div className="border-b border-border/40 pb-3">
              <h4 className="font-medium text-sm">Global Distribution Network</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Extensive distribution channels enabling efficient market reach and customer service.
              </p>
            </div>
            <div className="pb-3">
              <h4 className="font-medium text-sm">Economies of Scale</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Operational efficiency and cost advantages due to large-scale production and distribution.
              </p>
            </div>
          </div>
        </ScrollArea>
      </Card>

      {/* Impact Analysis */}
      <Card className="p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <h3 className="font-semibold mb-2">Market Impact</h3>
        <p className="text-sm text-muted-foreground">
          These competitive advantages position the company as a market leader, enabling sustained growth and profitability. The combination of brand strength, innovation, and operational efficiency creates significant barriers to entry for competitors.
        </p>
      </Card>
    </div>
  )
}