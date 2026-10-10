import { stocks } from "../../../data/mockStocks";

export default async function StockDetails({ params }) {
  const { symbol } = await params;

  const stock = stocks.find(
    (item) => item.symbol === decodeURIComponent(symbol)
  );

  if (!stock) {
    return (
      <div className="min-h-screen bg-[#061329] text-white">

        <main className="mx-auto max-w-7xl px-6 py-20">
          <h1 className="text-3xl font-bold">Stock not found</h1>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#061329] text-white">


      <main className="mx-auto max-w-7xl px-6 py-10">
        <div>
          <p className="text-[#00e6b8]">{stock.symbol}</p>

          <h1 className="mt-2 text-4xl font-bold">{stock.name}</h1>

          <div className="mt-6 flex items-end gap-4">
            <span className="text-4xl font-bold">
              Rs. {stock.price.toFixed(2)}
            </span>

            <span
              className={
                stock.change >= 0 ? "text-[#00e6b8]" : "text-red-400"
              }
            >
              {stock.change >= 0 ? "+" : ""}
              {stock.changePercent}%
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <Metric title="RSI" value={stock.rsi} />
          <Metric title="SMA 20" value={`Rs. ${stock.sma20}`} />
          <Metric title="SMA 50" value={`Rs. ${stock.sma50}`} />
          <Metric title="P/E Ratio" value={stock.pe} />
          <Metric title="EPS" value={`Rs. ${stock.eps}`} />
          <Metric title="Volume" value={stock.volume} />
        </div>

        <div className="mt-8 rounded-xl border border-slate-800 bg-[#0b1d3a] p-6">
          <h2 className="text-xl font-bold">AI Analysis</h2>

          <p className="mt-4 leading-7 text-slate-400">
            This section will later display an AI-generated explanation based
            on the technical and fundamental data.
          </p>
        </div>
      </main>
    </div>
  );
}

function Metric({ title, value }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-[#0b1d3a] p-5">
      <p className="text-sm text-slate-400">{title}</p>
      <p className="mt-2 text-2xl font-bold">{value}</p>
    </div>
  );
}