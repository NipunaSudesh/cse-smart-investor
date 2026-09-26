'use client';

const SIGNAL_STYLES = {
  POSITIVE_SETUP: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  WATCH: 'bg-amber-50 text-amber-700 border-amber-200',
  NEUTRAL: 'bg-slate-100 text-slate-600 border-slate-200',
  CAUTION: 'bg-rose-50 text-rose-700 border-rose-200'
};

export default function StockCard({ symbol, companyName, price, changePercent, signal, score, onClick }) {
  const isUp = changePercent >= 0;

  return (
    <button
      onClick={onClick}
      className="w-full text-left flex items-center justify-between gap-4 px-4 py-3 rounded-lg border border-slate-200 bg-white hover:border-slate-300 transition-colors " 
    >
      <div>
        <p className="font-semibold text-slate-900">{symbol}</p>
        <p className="text-sm text-slate-500 truncate max-w-[16rem]">{companyName}</p>
      </div>

      <div className="text-right">
        <p className="font-medium text-slate-900">Rs. {price?.toFixed(2)}</p>
        <p className={isUp ? 'text-sm text-emerald-600' : 'text-sm text-rose-600'}>
          {isUp ? '+' : ''}
          {changePercent?.toFixed(2)}%
        </p>
      </div>

      {signal && (
        <span className={`text-xs font-medium px-2 py-1 rounded-full border whitespace-nowrap ${SIGNAL_STYLES[signal] || SIGNAL_STYLES.NEUTRAL}`}>
          {signal.replace('_', ' ')} {score != null ? `· ${score}` : ''}
        </span>
      )}
    </button>
  );
}