import { motion } from 'framer-motion'

const reveal = {
  hidden: { y: '110%' },
  show: (i = 0) => ({
    y: '0%',
    transition: { duration: 0.9, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden noise"
      aria-labelledby="hero-title"
    >
      {/* Meta strip — mono chrome */}
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="flex items-center justify-between font-mono text-[11px] uppercase tracking-hair text-bone/60"
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" aria-hidden="true" />
            <span>Pouring now &middot; Batch 247</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <span>40.2206&deg; N &nbsp;/&nbsp; 74.0121&deg; W</span>
            <span>Wind ENE 12kt</span>
            <span>58&deg;F &middot; Overcast</span>
          </div>
        </motion.div>

        <div className="mt-8 md:mt-14 grid grid-cols-12 gap-y-6">
          {/* Eyebrow kicker */}
          <div className="col-span-12 md:col-span-3 md:pt-6">
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="eyebrow"
            >
              <span className="inline-block w-6 h-px align-middle bg-teal mr-3" />
              Independent &middot; Asbury Park, NJ
            </motion.div>
            <p className="mt-4 text-bone/70 text-sm leading-relaxed max-w-[28ch]">
              Small-batch beer brewed six blocks from the Atlantic. Cans pulled straight
              from the line, pints poured the same afternoon.
            </p>
          </div>

          {/* Giant wordmark headline, broken across lines, bleeds right */}
          <h1
            id="hero-title"
            className="col-span-12 md:col-span-9 font-display text-mega text-bone relative"
          >
            <span className="sr-only">Salt, Static, and a Fresh Pour.</span>
            <HeroLine i={0} trailing={<Tick>SALT</Tick>}>
              <MaskWord word="SALT" i={0} />,
            </HeroLine>
            <HeroLine i={1}>
              <MaskWord word="STATIC" i={1} />
              <span className="text-teal align-super text-[0.32em] font-mono tracking-hair ml-2 md:ml-4">
                &amp;
              </span>
            </HeroLine>
            <HeroLine i={2} trailing={<Tick>FRESH</Tick>}>
              <span className="italic font-serif text-[0.72em] font-light text-bone/90 pr-4">a&nbsp;</span>
              <MaskWord word="FRESH" i={2} />
            </HeroLine>
            <HeroLine i={3}>
              <MaskWord word="POUR." i={3} className="text-teal" />
            </HeroLine>
          </h1>
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-12 md:mt-16 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8"
        >
          <a
            href="#lineup"
            className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-teal text-ink font-mono text-[12px] uppercase tracking-hair hover:bg-teal-300 transition-colors"
          >
            <span>See the Lineup</span>
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
          <a
            href="#visit"
            className="inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-hair text-bone/85 hover:text-teal link-underline"
          >
            <span className="opacity-60">&#9675;</span> Find the Taproom
          </a>
          <div className="sm:ml-auto font-mono text-[11px] tracking-hair text-bone/40">
            Scroll &darr;
          </div>
        </motion.div>
      </div>

      {/* Decorative coordinate rule */}
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 mt-20">
        <div className="rule" />
      </div>
    </section>
  )
}

function MaskWord({ word, i = 0, className = '' }) {
  return (
    <span className="inline-block overflow-hidden align-baseline pb-[0.06em]">
      <motion.span
        variants={reveal}
        initial="hidden"
        animate="show"
        custom={i}
        className={`inline-block ${className}`}
      >
        {word}
      </motion.span>
    </span>
  )
}

function HeroLine({ children, i, trailing }) {
  return (
    <span className="block relative">
      {children}
      {trailing && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
          className="hidden lg:inline-block absolute right-0 top-0 translate-y-2 text-teal/70 font-mono text-[10px] tracking-hair"
        >
          {trailing}
        </motion.span>
      )}
    </span>
  )
}

function Tick({ children }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="inline-block w-3 h-px bg-teal/70" />
      {children}
    </span>
  )
}
