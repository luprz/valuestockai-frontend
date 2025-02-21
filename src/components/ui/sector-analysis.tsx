'use client'

import { Card } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'

export function SectorAnalysis() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Sector Analysis */}
      <Card className="p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <h3 className="font-semibold mb-4">Sector analysis</h3>
        <ScrollArea className="h-[200px]">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              The company operates in a highly competitive technology sector characterized by rapid innovation and significant market opportunities. Key industry trends include:
              
              • Growing demand for cloud computing services
              • Increasing focus on artificial intelligence and machine learning
              • Rising importance of cybersecurity solutions
              • Expanding digital transformation initiatives across industries
              
              Major competitors include established tech giants and innovative startups, with competition primarily based on:
              
              • Technology capabilities and innovation
              • Product features and functionality
              • Price and value proposition
              • Market presence and brand recognition
            </p>
          </div>
        </ScrollArea>
      </Card>

      {/* Competition Overview */}
      <Card className="p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <h3 className="font-semibold mb-2">Competition</h3>
        <p className="text-sm text-muted-foreground">
          The company maintains a strong competitive position through differentiated technology offerings and strategic market positioning. Key advantages include innovative product development, strong customer relationships, and efficient operational execution.
        </p>
      </Card>
    </div>
  )
}