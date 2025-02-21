import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 sm:p-20">
      <main className="w-full max-w-3xl flex flex-col items-center gap-4">
        <h1 className="text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-[#FF5733]">ValueStockAI</h1>
        <Card className="w-full p-0 overflow-hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-[0_8px_32px_-8px_rgba(236,72,153,0.25),0_8px_32px_-8px_rgba(255,87,51,0.25)]">
          <div className="relative">
            <input
              type="text"
              placeholder="Which company do you want to analyze?"
              className="w-full h-14 text-lg px-4 pr-12 bg-transparent text-foreground placeholder:text-muted-foreground rounded-2xl border-2 [border-image:linear-gradient(to_right,#ec4899,#FF5733)_1] focus:outline-none focus:ring-2 focus:ring-pink-500/30 shadow-[0_4px_12px_rgba(236,72,153,0.1),0_4px_12px_rgba(255,87,51,0.1)]"
            />
            <Search className="h-6 w-6 absolute right-4 top-1/2 -translate-y-1/2 text-[#FF5733]/70" />
          </div>
        </Card>
        <p className="text-xs text-muted-foreground text-center max-w-2xl">
          Disclaimer: This content does not constitute investment advice; any financial decision should be based on your own analysis and consultation with qualified professionals, considering that all investments involve risks and that past performance does not guarantee future results.
        </p>
      </main>
    </div>
  );
}
