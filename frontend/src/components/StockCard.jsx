
import Link from "next/link";
import { ArrowDown, ArrowUp } from "lucide-react";
import Image from "next/image";

export default function StockCard({ stock }) {
  const positive = stock.change >= 0;

  return (
    <Link
      href={`/stocks/${encodeURIComponent(stock.symbol)}`}
      className="block rounded-xl border border-slate-200 bg-white p-5 transition hover:border-emerald-400 dark:border-slate-800 dark:bg-dark-card dark:hover:border-light-green"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/sampath-bank--big.svg"
            alt="Sampath Bank"
            width={64}
            height={64}
            className="rounded-full border border-slate-200 bg-slate-50 p-2 dark:border-slate-800 dark:bg-surface"
          />

          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {stock.name}
            </h3>

            <p className=" text-sm text-slate-500 dark:text-slate-400">
              {stock.symbol}
            </p>
          </div>
        </div>

        {positive ? (
          <ArrowUp className="text-buy" size={20} />
        ) : (
          <ArrowDown className="text-sell" size={20} />
        )}
      </div>

      {/* Stock Details - Mobile */}
      <div className="mt-5 flex items-end justify-between ">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">
              {stock.price.toFixed(2)}
              <span className="pl-2 text-sm font-serif">LKR</span>
            </p>

            <p
              className={`mt-1 text-sm font-medium ${
                positive ? "text-emerald-600 dark:text-[#00e6b8]" : "text-red-600 dark:text-red-400"
              }`}
            >
              {positive ? "+" : ""}
              {stock.change} ({stock.changePercent}%)
            </p>
          </div>

          <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
            At close on Oct 9, 14:29 GMT+5:30
          </p>
        </div>

        {/* Volume */}
        <div className="text-right text-sm text-slate-500 dark:text-slate-400">
          <p>Volume</p>
          <p className="mt-1 font-medium text-slate-900 dark:text-white">
            {stock.volume}
          </p>
        </div>
      </div>
    </Link>
  );
}
