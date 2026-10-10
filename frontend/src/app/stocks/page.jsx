"use client";

import { useState } from "react";
import StockCard from "../../components/StockCard";
import { stocks } from "../../data/mockStocks";
import { Search } from "lucide-react";

export default function StocksPage() {
  const [search, setSearch] = useState("");

  const filteredStocks = stocks.filter(
    (stock) =>
      stock.symbol.toLowerCase().includes(search.toLowerCase()) ||
      stock.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className=" min-h-screen bg-[#061329] text-white">

      <main className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="text-4xl font-bold">CSE Stocks</h1>

        <p className="mt-2 text-slate-400">
          Search and explore available stocks.
        </p>

        <div className="relative mt-8 max-w-xl">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search company or symbol..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-[#0b1d3a] py-3 pl-12 pr-4 text-white outline-none focus:border-[#00e6b8]"
          />
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {filteredStocks.map((stock) => (
            <StockCard key={stock.symbol} stock={stock} />
          ))}
        </div>
      </main>
    </div>
  );
}