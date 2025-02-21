'use client'

import { Card } from '@/components/ui/card'
import { Line } from 'react-chartjs-2'
import { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

export function StockEvolution() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1800)

    return () => clearTimeout(timer)
  }, [])

  const years = ['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029']
  const historicalData = [100, 120, 110, 140]
  const projectedData = [140, 160, 180, 195, 205, 220]

  const data = {
    labels: years,
    datasets: [
      {
        label: 'Stock Price Evolution',
        data: [...historicalData, ...projectedData],
        borderColor: '#FF5733',
        backgroundColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
          if (!chartArea) return;
          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, 'rgba(255, 87, 51, 0)');
          gradient.addColorStop(0.5, 'rgba(255, 87, 51, 0.1)');
          gradient.addColorStop(1, 'rgba(236, 72, 153, 0.2)');
          return gradient;
        },
        fill: true,
        tension: 0.4,
        segment: {
          borderDash: (ctx: any) => ctx.p0.parsed.x >= 3 ? [6, 6] : undefined,
        }
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: 'rgba(255, 87, 51, 0.1)'
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 87, 51, 0.1)'
        }
      }
    }
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-[1fr,300px] gap-4">
        <Card className="p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="h-[300px] w-full animate-pulse bg-muted rounded-lg" />
        </Card>
        <Card className="p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="h-4 w-24 bg-muted rounded animate-pulse mb-4" />
          <div className="space-y-2">
            <div className="h-3 bg-muted rounded animate-pulse" />
            <div className="h-3 bg-muted rounded animate-pulse" />
            <div className="h-3 bg-muted rounded animate-pulse" />
            <div className="h-3 bg-muted rounded animate-pulse w-3/4" />
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-[1fr,300px] gap-4">
      <Card className="p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Line data={data} options={options} />
      </Card>
      <Card className="p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <h3 className="font-semibold mb-2">Summary</h3>
        <p className="text-sm text-muted-foreground">
          The stock shows a positive trend from 2020 to 2023, with some fluctuation in 2022. The projected values indicate continued growth through 2029, with an estimated increase of over 100% from the initial value. The growth rate appears to moderate in later years, suggesting a more stable, mature phase of company development.
        </p>
      </Card>
    </div>
  )
}