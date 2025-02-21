'use client'

import { use } from 'react'
import { Navbar } from '@/components/ui/navbar'
import { ChatBox } from '@/components/ui/chat-box'

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Example cards - Replace with actual data */}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="p-4 rounded-lg border border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
              >
                <h3 className="font-semibold mb-2">Company {i}</h3>
                <p className="text-sm text-muted-foreground">Company information will be displayed here</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Chat section */}
        <ChatBox query={query} />
      </div>
    </div>
  )
}