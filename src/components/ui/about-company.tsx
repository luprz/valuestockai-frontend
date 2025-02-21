'use client'

import { useEffect, useState } from 'react'

interface CompanyData {
  name: string
  description: string
  symbol: string
  price: number
  logo: string
}

interface AboutCompanyProps {
  searchText: string
}

export function AboutCompany({ searchText }: AboutCompanyProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [companyData, setCompanyData] = useState<CompanyData | null>(null)

  useEffect(() => {
    let isMounted = true

    const fetchCompanyData = async () => {
      if (!searchText) return
      
      setIsLoading(true)
      try {
        const response = await fetch('http://localhost:4000/stock/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ searchText }),
        })
        const data = await response.json()
        if (isMounted) {
          setCompanyData(data)
          setTimeout(() => {
            if (isMounted) {
              setIsLoading(false)
            }
          }, 300) // Add a small delay for smoother transition
        }
      } catch (error) {
        console.error('Error fetching company data:', error)
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    fetchCompanyData()

    return () => {
      isMounted = false
    }
  }, [searchText])

  if (isLoading) {
    return (
      <div className="p-4 rounded-lg border border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-24 h-24 flex-shrink-0 rounded-lg border border-border/40 bg-muted animate-pulse" />

          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2">
              <div className="h-6 w-32 bg-muted rounded animate-pulse" />
              <div className="h-4 w-16 bg-muted rounded animate-pulse" />
            </div>
            <div className="h-16 w-[60%] bg-muted rounded mt-2 animate-pulse" />
          </div>

          <div className="flex-shrink-0 text-right flex items-center h-full">
            <div className="flex flex-col items-end gap-1">
              <div className="h-4 w-24 bg-muted rounded animate-pulse" />
              <div className="flex flex-col items-end gap-1">
                <div className="h-10 w-32 bg-muted rounded animate-pulse" />
                <div className="h-3 w-24 bg-muted rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!companyData) {
    return null
  }

  return (
    <div className="p-4 rounded-lg border border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="w-24 h-24 flex-shrink-0 rounded-lg border border-border/40 bg-muted flex items-center justify-center">
          {companyData.logo ? (
            <img src={companyData.logo} alt={`${companyData.name} logo`} className="w-16 h-16 object-contain" />
          ) : (
            <span className="text-2xl font-semibold text-muted-foreground">Logo</span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2">
            <h3 className="font-semibold text-lg">{companyData.name}</h3>
            <span className="text-sm text-muted-foreground">{companyData.symbol}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2 w-[60%]">
            {companyData.description}
          </p>
        </div>

        <div className="flex-shrink-0 text-right flex items-center h-full">
          <div className="flex flex-col items-end gap-1">
            <div className="text-sm text-muted-foreground">Price per share</div>
            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-2 justify-end">
                <div className="text-4xl font-semibold">
                  {companyData.price ? `$${companyData.price.toFixed(2)}` : '--'}
                </div>
                <div className="text-sm text-muted-foreground">USD</div>
              </div>
              <div className="text-xs text-muted-foreground">Last updated price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}