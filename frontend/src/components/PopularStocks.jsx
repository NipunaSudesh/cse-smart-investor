import React from 'react'
import StockCard from './StockCard'
import { stocks } from "../data/mockStocks";

export default function PopularStocks() {
  return (
      <section className="mt-12">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Popular Stocks</h2>
              <p className="mt-1 text-slate-400">
                Track selected CSE companies
              </p>
            </div>

            <a
              href="/stocks"
              className="text-sm text-[#00e6b8] hover:underline"
            >
              View all →
            </a>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {stocks.map((stock) => (
              <StockCard key={stock.symbol} stock={stock} />
            ))}
          </div>
        </section>
  )
}
