'use client'

import { Card } from './card'
import { ScrollArea } from './scroll-area'

export function RevenueEvolution() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Revenue Evolution</h2>
      <div className="grid grid-cols-[1fr,300px] gap-6">
        <div className="relative h-[300px] flex items-end gap-2">
          {/* Historical Revenue Bars */}
          <div className="h-[30%] w-12 bg-gradient-to-t from-pink-500/90 to-[#FF5733]/90 rounded-t-md" title="2020: $30M">
            <div className="text-xs text-center mt-2">2020</div>
          </div>
          <div className="h-[40%] w-12 bg-gradient-to-t from-pink-500/90 to-[#FF5733]/90 rounded-t-md" title="2021: $40M">
            <div className="text-xs text-center mt-2">2021</div>
          </div>
          <div className="h-[45%] w-12 bg-gradient-to-t from-pink-500/90 to-[#FF5733]/90 rounded-t-md" title="2022: $45M">
            <div className="text-xs text-center mt-2">2022</div>
          </div>
          <div className="h-[60%] w-12 bg-gradient-to-t from-pink-500/90 to-[#FF5733]/90 rounded-t-md" title="2023: $60M">
            <div className="text-xs text-center mt-2">2023</div>
          </div>
          <div className="h-[80%] w-12 bg-gradient-to-t from-pink-500/90 to-[#FF5733]/90 rounded-t-md" title="2024: $80M">
            <div className="text-xs text-center mt-2">2024</div>
          </div>
          
          {/* Projected Revenue Bars */}
          <div className="h-[85%] w-12 border-2 border-[#FF5733]/90 rounded-t-md" title="2025 (Projected): $85M">
            <div className="text-xs text-center mt-2">2025</div>
          </div>
          <div className="h-[90%] w-12 border-2 border-[#FF5733]/90 rounded-t-md" title="2026 (Projected): $90M">
            <div className="text-xs text-center mt-2">2026</div>
          </div>
          <div className="h-[95%] w-12 border-2 border-[#FF5733]/90 rounded-t-md" title="2027 (Projected): $95M">
            <div className="text-xs text-center mt-2">2027</div>
          </div>
          <div className="h-full w-12 border-2 border-[#FF5733]/90 rounded-t-md" title="2028 (Projected): $100M">
            <div className="text-xs text-center mt-2">2028</div>
          </div>
          <div className="h-[98%] w-12 border-2 border-[#FF5733]/90 rounded-t-md" title="2029 (Projected): $98M">
            <div className="text-xs text-center mt-2">2029</div>
          </div>
        </div>
        
        <ScrollArea className="h-[300px]">
          <div className="space-y-4 pr-4">
            <h3 className="font-semibold">Revenue Analysis</h3>
            <p className="text-sm text-muted-foreground">
              The company has shown consistent revenue growth from 2020 to 2024, with annual revenue increasing from $30M to $80M, representing a compound annual growth rate (CAGR) of approximately 28%.
            </p>
            <p className="text-sm text-muted-foreground">
              Projections indicate continued growth through 2028, albeit at a more moderate pace. The forecast suggests revenue will reach $100M by 2028, implying a CAGR of about 4.5% from 2024 onwards.
            </p>
            <p className="text-sm text-muted-foreground">
              A slight decline is projected for 2029, with revenue expected to decrease to $98M, possibly due to market maturity or increased competition in the sector.
            </p>
          </div>
        </ScrollArea>
      </div>
    </Card>
  )
}