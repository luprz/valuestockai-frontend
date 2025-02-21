'use client'

type ChatBoxProps = {
  query: string
}

export function ChatBox({ query }: ChatBoxProps) {
  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] rounded-lg border border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
      <div className="p-4 border-b border-border/40">
        <h2 className="font-semibold">Ask me about the company</h2>
      </div>
      
      <div className="flex-1 p-4 overflow-auto">
        {/* Chat messages will appear here */}
        <div className="text-sm text-muted-foreground text-center">
          Type your question below to learn more about {query}
        </div>
      </div>

      <div className="p-4">
        <div className="relative w-full h-14 text-lg px-4 pr-12 bg-transparent text-foreground placeholder:text-muted-foreground rounded-2xl border-2 [border-image:linear-gradient(to_right,#ec4899,#FF5733)_1] focus:outline-none focus:ring-2 focus:ring-pink-500/20 shadow-[0_4px_8px_rgba(236,72,153,0.05),0_4px_8px_rgba(255,87,51,0.05)]">
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full h-14 text-lg px-4 pr-12 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#FF5733]/70 hover:text-[#FF5733] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </div>
      </div>
    </div>
  )
}