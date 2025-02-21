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
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="px-4 lg:px-6 py-6 grid lg:grid-cols-[1fr,380px] md:grid-cols-[1fr,340px] grid-cols-1 gap-4 lg:gap-6">
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

          <div className="sticky top-4 h-[calc(100vh-2rem)] overflow-hidden">
            <ChatBox query={query} />
          </div>
        </div>
      </div>
    </div>
  )
}