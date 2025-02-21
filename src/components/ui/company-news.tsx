'use client'

import { Card } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'

export function CompanyNews() {
  // Mock data - Replace with actual API data
  const news = [
    {
      id: 1,
      title: 'Company Announces Record Q4 Earnings',
      date: '2024-02-15',
      source: 'Financial Times'
    },
    {
      id: 2,
      title: 'New Product Launch Exceeds Expectations',
      date: '2024-02-14',
      source: 'Reuters'
    },
    {
      id: 3,
      title: 'Strategic Partnership Announcement',
      date: '2024-02-13',
      source: 'Bloomberg'
    }
  ]

  return (
    <div className="grid grid-cols-[1fr,300px] gap-4">
      {/* News List */}
      <Card className="p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <h3 className="font-semibold mb-4">Last news about company</h3>
        <ScrollArea className="h-[200px]">
          <div className="space-y-4">
            {news.map((item) => (
              <div key={item.id} className="border-b border-border/40 last:border-0 pb-3 last:pb-0">
                <h4 className="font-medium text-sm">{item.title}</h4>
                <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                  <span>{item.source}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </Card>

      {/* Sentiment Analysis */}
      <Card className="p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <h3 className="font-semibold mb-2">Resumen</h3>
        <p className="text-sm text-muted-foreground">
          The general perception in media and social networks is positive. Investors and analysts highlight the solid financial performance, product innovation, and strategic partnerships as key factors. Negative mentions are minimal and mainly related to general industry concerns.
        </p>
      </Card>
    </div>
  )
}