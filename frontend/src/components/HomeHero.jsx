import React from 'react'

export default function HomeHero() {
  return (
            <section>
          <p className="font-medium text-text-green-light dark:text-text-green-dark">
            COLOMBO STOCK EXCHANGE
          </p>

          <h1 className="mt-1 text-4xl font-bold md:text-5xl">
            Smart Stock
            <span className="brand-gradient">
              {" "}Analysis
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            Explore CSE stocks, technical indicators, financial information
            and market insights in one place.
          </p>
        </section>
  )
}
