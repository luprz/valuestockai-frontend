"use client"

import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function SearchInput({ initialQuery = "" }: { initialQuery?: string }) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [error, setError] = useState<string | null>(null);

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query.trim()) {
      e.preventDefault();
       try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/stock/search`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            searchText: query.trim()
          })
        });
        
        const data = await response.json();
        if (data && data.symbol) {
          router.push(`/search/${encodeURIComponent(data.symbol)}`);
        } else {
          setError('No se encontró ningún símbolo para esta búsqueda');
        }
      } catch (error) {
        setError('Error al buscar la acción. Por favor, inténtelo de nuevo.');
        console.error('Error searching for stock:', error);
      }
    } else {
      setError(null);
    }
  };

  return (
    <Card className="w-full p-0 overflow-hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-[0_8px_32px_-8px_rgba(236,72,153,0.25),0_8px_32px_-8px_rgba(255,87,51,0.25)]">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onInput={(e) => setQuery(e.currentTarget.value)}
          onKeyDown={handleKeyDown}
          placeholder="Which company do you want to analyze?"
          className="w-full h-14 text-lg px-4 pr-12 bg-transparent text-foreground placeholder:text-muted-foreground rounded-2xl border-2 [border-image:linear-gradient(to_right,#ec4899,#FF5733)_1] focus:outline-none focus:ring-2 focus:ring-pink-500/30 shadow-[0_4px_12px_rgba(236,72,153,0.1),0_4px_12px_rgba(255,87,51,0.1)]"
        />
        <Search className="h-6 w-6 absolute right-4 top-1/2 -translate-y-1/2 text-[#FF5733]/70" />
      </div>
      {error && (
        <div className="px-4 py-2 text-sm text-red-500">
          {error}
        </div>
      )}
    </Card>
  );
}