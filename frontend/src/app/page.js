
import HomeHero from "../components/HomeHero";
import MarketStats from "../components/MarketStats";
import PopularStocks from "../components/PopularStocks";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#061329] dark:text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <HomeHero />
        <MarketStats />
        <PopularStocks />
      </div>
    </main>
  );
}
