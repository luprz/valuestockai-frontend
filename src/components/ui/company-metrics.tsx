'use client'

import { Card } from '@/components/ui/card'

export function CompanyMetrics() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card className="p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <h3 className="text-lg font-semibold mb-2">Growth</h3>
        <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-[#FF5733]">9/10</div>
      </Card>

      <Card className="p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <h3 className="text-lg font-semibold mb-2">Financial Health</h3>
        <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-[#FF5733]">8/10</div>
      </Card>

      <Card className="p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <h3 className="text-lg font-semibold mb-2">Profitability</h3>
        <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-[#FF5733]">8.5/10</div>
      </Card>
    </div>
  )
}