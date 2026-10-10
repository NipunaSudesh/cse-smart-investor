import React from 'react'

export default function MarketStats() {
  return (
     <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-800 bg-[#0b1d3a] p-5">
            <p className="text-sm text-slate-400">Market Index</p>
            <h2 className="mt-2 text-2xl font-bold">21,450.32</h2>
            <p className="mt-2 text-[#00e6b8]">+1.24%</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-[#0b1d3a] p-5">
            <p className="text-sm text-slate-400">Market Volume</p>
            <h2 className="mt-2 text-2xl font-bold">Rs. 2.4B</h2>
            <p className="mt-2 text-slate-400">Today</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-[#0b1d3a] p-5">
            <p className="text-sm text-slate-400">Stocks Tracked</p>
            <h2 className="mt-2 text-2xl font-bold">300+</h2>
            <p className="mt-2 text-slate-400">CSE Companies</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-[#0b1d3a] p-5">
            <p className="text-sm text-slate-400">Market Status</p>
            <h2 className="mt-2 text-2xl font-bold text-[#00e6b8]">
              Open
            </h2>
            <p className="mt-2 text-slate-400">CSE Market</p>
          </div>
        </section>
  )
}
