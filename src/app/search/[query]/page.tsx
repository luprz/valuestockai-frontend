'use client'

import { use } from 'react'
import { Navbar } from '@/components/ui/navbar'
import { ChatBox } from '@/components/ui/chat-box'
import { AboutCompany } from '@/components/ui/about-company'

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
        </div>

        {/* Right side - Chat section */}
        <ChatBox query={query} />
      </div>
    </div>
  )
}