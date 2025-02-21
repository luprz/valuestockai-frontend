'use client'

import { use } from 'react'
import { Navbar } from '@/components/ui/navbar'
import { ChatBox } from '@/components/ui/chat-box'
import { AboutCompany } from '@/components/ui/about-company'
import { StockEvolution } from '@/components/ui/stock-evolution'
import { FairValueCalculation } from '@/components/ui/fair-value-calculation'
import { CompanyMetrics } from '@/components/ui/company-metrics'
import { RevenueEvolution } from '@/components/ui/revenue-evolution'
import { CostEvolution } from '@/components/ui/cost-evolution'
import { CompanyNews } from '@/components/ui/company-news'
import { InvestmentConclusion } from '@/components/ui/investment-conclusion'
import { PERAnalysis } from '@/components/ui/per-analysis'
import { SectorAnalysis } from '@/components/ui/sector-analysis'
import { DebtAnalysis } from '@/components/ui/debt-analysis'
import { CompetitiveAdvantages } from '@/components/ui/competitive-advantages'

export default function SearchPage({
  params,
}: {
  params: { query: string }
}) {
  // @ts-ignore
  // eslint-disable-next-line
  const { query } = use(params)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-6 grid grid-cols-[1fr,400px] gap-6">
        {/* Left side - Cards section */}
        <div className="space-y-4">
          <AboutCompany />
          <StockEvolution />
          <FairValueCalculation />
          <CompanyMetrics />
          <PERAnalysis />
          <SectorAnalysis />
          <CompetitiveAdvantages />
          <RevenueEvolution />
          <CostEvolution />
          <DebtAnalysis />
          <CompanyNews />
          <InvestmentConclusion />
        </div>

        {/* Right side - Chat section */}
        <div className="sticky top-4 h-[calc(100vh-2rem)] overflow-hidden">
          <ChatBox query={query} />
        </div>
      </div>
    </div>
  )
}