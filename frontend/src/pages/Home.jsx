import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { stocksApi } from '../services/api';
import StockCard from '../components/ui/StockCard';

export default function Home() {
  const [query, setQuery] = useState('');
  const [stocks, setStocks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    stocksApi.search(query).then((res) => setStocks(res.data.data));
  }, [query]);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Search CSE stocks</h1>
        <p className="text-sm text-slate-500">Look up a symbol or company name to view price history and signals.</p>
      </div>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search stocks (e.g. JKH)"
        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
      />

      <div className="space-y-2">
        {stocks.map((s) => (
          <StockCard
            key={s._id}
            symbol={s.symbol}
            companyName={s.companyName}
            price={s.lastPrice || 0}
            changePercent={s.changePercent || 0}
            onClick={() => navigate(`/stocks/${s.symbol}`)}
          />
        ))}
        {stocks.length === 0 && <p className="text-sm text-slate-400">No stocks found.</p>}
      </div>
    </div>
  );
}