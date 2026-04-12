import { motion } from 'framer-motion'

export default function Story() {
  return (
    <section id="story" className="relative py-24 md:py-36" aria-labelledby="story-title">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-4">
            <div className="eyebrow mb-4">
              <span className="inline-block w-6 h-px align-middle bg-teal mr-3" />
              03 / Story
            </div>
            <h2
              id="story-title"
              className="font-display text-jumbo text-bone leading-[0.86] text-balance"
            >
              Brewed six <span className="italic font-serif font-light">blocks</span> from the ocean.
            </h2>

            <motion.figure
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-12 border-l-2 border-teal pl-6"
            >
              <blockquote className="font-serif text-xl md:text-2xl text-bone/90 leading-snug italic text-pretty">
                &ldquo;We wanted a brewery that tasted like the town in November &mdash;
                not July. Concrete, salt, a little static on the AM dial.&rdquo;
              </blockquote>
              <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-hair text-bone/55">
                &mdash; from the brewhouse, invented for this concept
              </figcaption>
            </motion.figure>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-6 font-serif text-bone/85 text-lg md:text-xl leading-relaxed text-pretty">
            <p className="first-letter:font-display first-letter:float-left first-letter:text-[5.5rem] first-letter:leading-[0.85] first-letter:mr-3 first-letter:mt-1 first-letter:text-teal">
              We opened the brewhouse in a leaky machine shop off Kingsley Street in the
              winter of 2016, with three fermenters, a borrowed forklift, and a very specific
              idea about what a Jersey Shore beer should taste like &mdash; which is to say,
              not like a sunset.
            </p>
            <p>
              The town already had a sound, a boardwalk, a summer rush, and a quiet, stubborn
              off-season where the neon hums over empty arcades. We figured the beer should
              have room for all of it. So we brewed a lager that didn&rsquo;t apologize, a
              stout that remembered the winter, and an IPA you could drink while sanding
              primer off a 1978 Fiat.
            </p>
            <p>
              Eight years on, the footprint is bigger and the taproom is louder, but the
              list still rotates on instinct. The water still comes through Neptune. Every
              can goes out the door with a batch number, a brewer&rsquo;s signature, and a
              date you could walk the ocean to.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-bone/10 pt-8 font-mono text-[11px] uppercase tracking-hair text-bone/60">
              <Stat n="47" l="Batches shipped" />
              <Stat n="6" l="Blocks from the ocean" />
              <Stat n="∞" l="Seagull interruptions" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ n, l }) {
  return (
    <div>
      <div className="font-display text-5xl md:text-6xl text-bone leading-none">{n}</div>
      <div className="mt-2">{l}</div>
    </div>
  )
}
