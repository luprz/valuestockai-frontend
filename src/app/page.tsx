import { SearchInput } from "@/components/ui/search-input";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 sm:p-20">
      <main className="w-full max-w-3xl flex flex-col items-center gap-4">
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500/90 to-[#FF5733]/90">ValueStockAI</h1>
        <SearchInput />
        <p className="text-xs text-muted-foreground text-center max-w-2xl">
          Disclaimer: This content does not constitute investment advice; any financial decision should be based on your own analysis and consultation with qualified professionals, considering that all investments involve risks and that past performance does not guarantee future results.
        </p>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 py-6 text-center text-sm text-muted-foreground border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <span className="font-medium">Developed by <a href="https://www.moonshot.partners/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><strong>Moonshot Partners</strong></a></span>
      </footer>
    </div>
  );
}
