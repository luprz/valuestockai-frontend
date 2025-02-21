'use client'

interface AboutCompanyProps {
  companyName?: string
  companyInfo?: string
  stockSymbol?: string
  stockPrice?: number
  logo?: string
}

export function AboutCompany({ companyName = "NVIDIA Corporation", companyInfo = "NVIDIA is a technology company based in Santa Clara, California. They are world leaders in artificial intelligence computing, specializing in GPUs, AI, and deep learning.", stockSymbol = "NVDA", stockPrice = 98.35, logo = "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/01-nvidia-logo-vert-500x200-2c50-d@2x.png" }: AboutCompanyProps) {
  return (
    <div className="p-4 rounded-lg border border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="w-24 h-24 flex-shrink-0 rounded-lg border border-border/40 bg-muted flex items-center justify-center">
          {logo ? (
            <img src={logo} alt={`${companyName} logo`} className="w-16 h-16 object-contain" />
          ) : (
            <span className="text-2xl font-semibold text-muted-foreground">Logo</span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2">
            <h3 className="font-semibold text-lg">{companyName}</h3>
            <span className="text-sm text-muted-foreground">{stockSymbol}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2 w-[60%]">
            {companyInfo}
          </p>
        </div>

        <div className="flex-shrink-0 text-right flex items-center h-full">
          <div className="flex flex-col items-end gap-1">
            <div className="text-sm text-muted-foreground">Price per share</div>
            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-2 justify-end">
                <div className="text-4xl font-semibold">
                  {stockPrice ? `$${stockPrice.toFixed(2)}` : '--'}
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