import { motion } from 'framer-motion'
import { events } from '../data/site'

export default function Events() {
  return (
    <section id="events" className="relative py-20 md:py-32 bg-ink-800" aria-labelledby="events-title">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16">
          <div>
            <div className="eyebrow mb-4">
              <span className="inline-block w-6 h-px align-middle bg-teal mr-3" />
              04 / Events
            </div>
            <h2
              id="events-title"
              className="font-display text-jumbo text-bone leading-[0.86] text-balance"
            >
              What&rsquo;s next on the <span className="text-teal">calendar</span>.
            </h2>
          </div>
          <a
            href="#"
            className="self-start md:self-end font-mono text-[12px] uppercase tracking-hair text-bone/85 hover:text-teal link-underline"
          >
            Full schedule &rarr;
          </a>
        </div>

        <ul className="divide-y divide-bone/10 border-y border-bone/10">
          {events.map((e, i) => (
            <motion.li
              key={e.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group"
            >
              <a
                href="#"
                className="grid grid-cols-12 gap-4 md:gap-6 items-start py-8 md:py-10 transition-colors hover:bg-ink/40 -mx-4 md:-mx-6 px-4 md:px-6"
              >
                <div className="col-span-3 md:col-span-2">
                  <div className="font-display text-6xl md:text-8xl leading-none text-bone group-hover:text-teal transition-colors">
                    {e.date.d}
                  </div>
                  <div className="font-mono text-[11px] tracking-hair text-bone/50 mt-2">
                    {e.date.m} &middot; 2026
                  </div>
                </div>

                <div className="col-span-9 md:col-span-8">
                  <div className="font-mono text-[10px] uppercase tracking-hair text-teal">
                    {e.tag}
                  </div>
                  <h3
                    className="mt-2 font-display text-3xl md:text-5xl text-bone leading-[0.95] text-balance"
                    dangerouslySetInnerHTML={{ __html: e.title }}
                  />
                  <p className="mt-3 font-serif text-bone/75 text-base md:text-lg leading-relaxed max-w-[56ch]">
                    {e.copy}
                  </p>
                </div>

                <div className="hidden md:flex col-span-2 justify-end items-start pt-4">
                  <span className="font-mono text-[11px] tracking-hair text-bone/60 group-hover:text-teal transition-colors inline-flex items-center gap-2">
                    RSVP
                    <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                  </span>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
