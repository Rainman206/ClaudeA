import { motion } from 'framer-motion'
import { visit } from '../data/site'

export default function Visit() {
  return (
    <section id="visit" className="relative py-20 md:py-32 bg-ink-800" aria-labelledby="visit-title">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Left: copy + hours */}
          <div className="col-span-12 lg:col-span-5">
            <div className="eyebrow mb-4">
              <span className="inline-block w-6 h-px align-middle bg-teal mr-3" />
              02 / Visit
            </div>
            <h2
              id="visit-title"
              className="font-display text-jumbo text-bone leading-[0.86] text-balance"
            >
              Walk in. <span className="italic font-serif font-light text-bone/80">Sit a while.</span>
            </h2>

            <address className="not-italic mt-8 font-mono text-sm text-bone/80 leading-relaxed">
              {visit.addressLines.map((l) => (
                <div key={l}>{l}</div>
              ))}
              <div className="mt-3 text-bone/60">
                {visit.phone}
                <br />
                {visit.email}
              </div>
            </address>

            <dl className="mt-10 divide-y divide-bone/10 border-y border-bone/10">
              {visit.hours.map((h) => (
                <div
                  key={h.d}
                  className="grid grid-cols-[90px_1fr_auto] items-center py-3 font-mono text-[12px] uppercase tracking-hair"
                >
                  <dt className="text-bone/60">{h.d}</dt>
                  <dd className={h.t === 'Closed' ? 'text-bone/40' : 'text-bone'}>{h.t}</dd>
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      h.t === 'Closed' ? 'bg-bone/20' : 'bg-teal'
                    }`}
                    aria-hidden="true"
                  />
                </div>
              ))}
            </dl>

            <a
              href="#"
              className="mt-10 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-hair text-bone hover:text-teal link-underline"
            >
              <span className="opacity-70">&rarr;</span> Get directions
            </a>
          </div>

          {/* Right: map placeholder */}
          <div className="col-span-12 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[420px] md:h-[560px] border border-bone/10 coord-grid overflow-hidden noise"
              aria-label="Map placeholder — concept redesign uses a rendered coordinate grid in lieu of a real map"
              role="img"
            >
              {/* Diagonal streets */}
              <svg
                className="absolute inset-0 w-full h-full text-bone/25"
                viewBox="0 0 800 600"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <line x1="-20" y1="440" x2="820" y2="180" stroke="currentColor" strokeWidth="1" />
                <line x1="-20" y1="300" x2="820" y2="60" stroke="currentColor" strokeWidth="1" />
                <line x1="-20" y1="580" x2="820" y2="320" stroke="currentColor" strokeWidth="1" />
                <line x1="120" y1="-20" x2="360" y2="620" stroke="currentColor" strokeWidth="1" />
                <line x1="320" y1="-20" x2="560" y2="620" stroke="currentColor" strokeWidth="1" />
                <line x1="520" y1="-20" x2="760" y2="620" stroke="currentColor" strokeWidth="1" />
                {/* Coastline */}
                <path
                  d="M 620 -20 Q 700 200 640 360 Q 580 520 760 620"
                  stroke="#2BE4C6"
                  strokeOpacity="0.65"
                  strokeWidth="1.2"
                  fill="none"
                />
                <path
                  d="M 640 -20 Q 720 220 680 380 Q 620 540 800 620"
                  stroke="#2BE4C6"
                  strokeOpacity="0.18"
                  strokeWidth="24"
                  fill="none"
                />
              </svg>

              {/* Pin */}
              <div
                className="absolute"
                style={{ left: '36%', top: '52%' }}
                aria-hidden="true"
              >
                <div className="relative">
                  <div className="absolute -inset-8 rounded-full bg-teal/10 animate-pulse" />
                  <div className="absolute -inset-3 rounded-full border border-teal/60" />
                  <div className="h-3 w-3 rounded-full bg-teal shadow-neon" />
                </div>
              </div>

              <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-hair text-bone/60">
                MAP / PLACEHOLDER &middot; NOT TO SCALE
              </div>
              <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-hair text-bone/60">
                {visit.coords.lat}&deg; N &nbsp; {visit.coords.lng}&deg; W
              </div>
              <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-hair text-teal">
                &#9830; THE TAPROOM
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
