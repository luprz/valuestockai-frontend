'use client'

import { Card } from './card'
import { ScrollArea } from './scroll-area'

export function CostEvolution() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Cost Evolution</h2>
      <div className="grid grid-cols-[1fr,300px] gap-6">
        <div className="relative h-[300px] flex items-end gap-2">
          {/* Historical Cost Bars */}
          <div className="h-[48%] w-12 bg-gradient-to-t from-gray-500/90 to-gray-400/90 rounded-t-md" title="2020: $80M">
            <div className="text-xs text-center mt-2">2020</div>
          </div>
          <div className="h-[51%] w-12 bg-gradient-to-t from-gray-500/90 to-gray-400/90 rounded-t-md" title="2021: $85M">
            <div className="text-xs text-center mt-2">2021</div>
          </div>
          <div className="h-[57%] w-12 bg-gradient-to-t from-gray-500/90 to-gray-400/90 rounded-t-md" title="2022: $95M">
            <div className="text-xs text-center mt-2">2022</div>
          </div>
          <div className="h-[66%] w-12 bg-gradient-to-t from-gray-500/90 to-gray-400/90 rounded-t-md" title="2023: $110M">
            <div className="text-xs text-center mt-2">2023</div>
          </div>
          <div className="h-[66%] w-12 bg-gradient-to-t from-gray-500/90 to-gray-400/90 rounded-t-md" title="2024: $110M">
            <div className="text-xs text-center mt-2">2024</div>
          </div>
          
          {/* Projected Cost Bars */}
          <div className="h-[72%] w-12 border-2 border-gray-500/90 rounded-t-md" title="2025 (Projected): $120M">
            <div className="text-xs text-center mt-2">2025</div>
          </div>
          <div className="h-[78%] w-12 border-2 border-gray-500/90 rounded-t-md" title="2026 (Projected): $130M">
            <div className="text-xs text-center mt-2">2026</div>
          </div>
          <div className="h-[84%] w-12 border-2 border-gray-500/90 rounded-t-md" title="2027 (Projected): $140M">
            <div className="text-xs text-center mt-2">2027</div>
          </div>
          <div className="h-[90%] w-12 border-2 border-gray-500/90 rounded-t-md" title="2028 (Projected): $150M">
            <div className="text-xs text-center mt-2">2028</div>
          </div>
          <div className="h-[96%] w-12 border-2 border-gray-500/90 rounded-t-md" title="2029 (Projected): $160M">
            <div className="text-xs text-center mt-2">2029</div>
          </div>
        </div>
        
        <ScrollArea className="h-[300px]">
          <div className="space-y-4 pr-4">
            <h3 className="font-semibold">Cost Analysis</h3>
            <p className="text-sm text-muted-foreground">
              The company's cost structure shows a steady increase from 2020 to 2023, with annual costs rising from $80M to $110M, representing a compound annual growth rate (CAGR) of approximately 11.2%.
            </p>
            <p className="text-sm text-muted-foreground">
              Projections indicate continued cost increases through 2029, with costs expected to reach $160M, suggesting a CAGR of about 6.4% from 2024 onwards.
            </p>
            <p className="text-sm text-muted-foreground">
              The controlled rate of cost increase, despite business expansion, indicates effective cost management and the realization of economies of scale.
            </p>
          </div>
        </ScrollArea>
      </div>
    </Card>
  )
}