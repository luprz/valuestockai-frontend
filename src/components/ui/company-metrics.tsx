'use client'

import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'

export function CompanyMetrics() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="h-7 w-24 bg-muted/60 rounded mb-2 animate-pulse" />
            <div className="h-9 w-16 bg-muted/60 rounded animate-pulse" />
          </Card>
        ))}
      </div>
    )
  }

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