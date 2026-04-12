import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { beers, beerStyles } from '../data/beers'
import BeerCan from './BeerCan'

export default function BeerLineup() {
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(() => {
    if (filter === 'All') return beers
    return beers.filter((b) => b.style.toLowerCase().includes(filter.toLowerCase()))
  }, [filter])

  return (
    <section id="lineup" className="relative py-20 md:py-32" aria-labelledby="lineup-title">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid grid-cols-12 gap-6 items-end mb-10 md:mb-16">
          <div className="col-span-12 md:col-span-5">
            <div className="eyebrow mb-4">
              <span className="inline-block w-6 h-px align-middle bg-teal mr-3" />
              01 / The Lineup
            </div>
            <h2
              id="lineup-title"
              className="font-display text-jumbo text-bone leading-[0.86] text-balance"
            >
              Six cans, <span className="text-teal">pulled fresh</span> from the line.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <p className="font-serif text-lg md:text-xl text-bone/75 leading-relaxed text-pretty">
              The list rotates with the season and the mood of whoever&rsquo;s on the brewhouse
              floor. These are running now &mdash; while they last, then something new next week.
            </p>
          </div>
        </div>

        {/* Filter bar */}
        <div
          className="flex flex-wrap gap-2 md:gap-3 border-y border-bone/10 py-4 mb-10 md:mb-14"
          role="tablist"
          aria-label="Filter beer by style"
        >
          {beerStyles.map((s) => {
            const active = filter === s
            return (
              <button
                key={s}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(s)}
                className={`font-mono text-[11px] uppercase tracking-hair px-3 py-2 border transition-colors ${
                  active
                    ? 'border-teal text-ink bg-teal'
                    : 'border-bone/15 text-bone/80 hover:border-teal hover:text-teal'
                }`}
              >
                {s}
              </button>
            )
          })}
          <span className="ml-auto font-mono text-[11px] uppercase tracking-hair text-bone/45 self-center">
            {filtered.length} / {beers.length} pouring
          </span>
        </div>

        {/* Grid — asymmetric: every 4th card pushes down */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 md:gap-x-6 gap-y-14">
          <AnimatePresence mode="popLayout">
            {filtered.map((b, i) => (
              <motion.article
                key={b.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.6, delay: (i % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative lg:col-span-2 ${
                  i % 2 === 1 ? 'lg:mt-12' : ''
                } ${i % 3 === 2 ? 'lg:mt-20' : ''}`}
              >
                <div className="relative will-change-transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:-rotate-[0.8deg]">
                  <BeerCan beer={b} />
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-hair text-teal">
                      {b.style} &middot; {b.ibu} IBU
                    </div>
                    <h3 className="mt-2 font-display text-2xl md:text-3xl text-bone leading-[0.9]">
                      {b.name}
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-display text-3xl md:text-4xl leading-none text-bone">
                      {b.abv.toFixed(1)}
                      <span className="text-teal text-lg align-top ml-0.5">%</span>
                    </div>
                    <div className="font-mono text-[10px] tracking-hair text-bone/50 mt-1">
                      ABV
                    </div>
                  </div>
                </div>

                <p className="mt-3 font-serif italic text-bone/75 leading-snug text-sm md:text-base">
                  &ldquo;{b.notes}&rdquo;
                </p>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
