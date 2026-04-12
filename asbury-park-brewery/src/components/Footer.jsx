import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (email.includes('@')) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <footer className="relative pt-20 md:pt-28 pb-10 border-t border-bone/10">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        {/* Oversized footer wordmark */}
        <div className="relative mb-16 md:mb-24 overflow-hidden">
          <div
            aria-hidden="true"
            className="font-display text-[clamp(4rem,18vw,14rem)] leading-[0.82] tracking-tight text-bone/90 whitespace-nowrap"
          >
            ASBURY <span className="text-teal">/</span> PARK <span className="text-teal">/</span> BREWERY
          </div>
          <div className="mt-2 font-mono text-[11px] uppercase tracking-hair text-bone/45">
            INDEPENDENT &middot; EST. 2016 &middot; NJ
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Newsletter */}
          <div className="col-span-12 md:col-span-5">
            <div className="eyebrow mb-4">New from the brewhouse</div>
            <h3 className="font-display text-3xl md:text-5xl text-bone leading-[0.95] text-balance">
              Four-can releases, taproom exclusives, cask nights.
            </h3>
            <form onSubmit={onSubmit} className="mt-6 flex border border-bone/20 focus-within:border-teal transition-colors">
              <label htmlFor="newsletter" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@something-salty.com"
                className="flex-1 bg-transparent px-4 py-3 font-mono text-sm text-bone placeholder:text-bone/35 focus:outline-none"
              />
              <button
                type="submit"
                className="px-5 font-mono text-[11px] uppercase tracking-hair bg-teal text-ink hover:bg-teal-300 transition-colors"
              >
                Subscribe &rarr;
              </button>
            </form>
            {submitted && (
              <p className="mt-3 font-mono text-[11px] uppercase tracking-hair text-teal" role="status">
                &#9830; On the list. We&rsquo;ll be in touch.
              </p>
            )}
            <p className="mt-4 font-mono text-[10px] uppercase tracking-hair text-bone/40">
              Placeholder form &middot; no data is sent
            </p>
          </div>

          {/* Sitemap */}
          <div className="col-span-6 md:col-span-2 md:col-start-8">
            <div className="eyebrow mb-4">Drink</div>
            <ul className="space-y-3 font-mono text-[12px] uppercase tracking-hair text-bone/80">
              <li><a className="link-underline hover:text-teal" href="#lineup">Lineup</a></li>
              <li><a className="link-underline hover:text-teal" href="#">Releases</a></li>
              <li><a className="link-underline hover:text-teal" href="#">Find near you</a></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="eyebrow mb-4">Visit</div>
            <ul className="space-y-3 font-mono text-[12px] uppercase tracking-hair text-bone/80">
              <li><a className="link-underline hover:text-teal" href="#visit">Taproom</a></li>
              <li><a className="link-underline hover:text-teal" href="#events">Events</a></li>
              <li><a className="link-underline hover:text-teal" href="#">Private hire</a></li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-2">
            <div className="eyebrow mb-4">Follow</div>
            <ul className="space-y-3 font-mono text-[12px] uppercase tracking-hair text-bone/80">
              <li><a className="link-underline hover:text-teal" href="#">Instagram</a></li>
              <li><a className="link-underline hover:text-teal" href="#">Untappd</a></li>
              <li><a className="link-underline hover:text-teal" href="#">Newsletter</a></li>
            </ul>
          </div>
        </div>

        {/* Legal / concept disclaimer */}
        <div className="mt-20 pt-6 border-t border-bone/10 grid grid-cols-12 gap-4 font-mono text-[10px] uppercase tracking-hair text-bone/50">
          <div className="col-span-12 md:col-span-6">
            &copy; 2026 &middot; Unsolicited Spec Concept &middot; Not affiliated with Asbury Park Brewery.
            All copy, beer names, and addresses on this page are invented for design
            purposes. Final brand assets would be client-supplied.
          </div>
          <div className="col-span-6 md:col-span-3 md:col-start-8">
            <div>BUILD v0.1.0</div>
            <div>COMMIT 247a-salt</div>
          </div>
          <div className="col-span-6 md:col-span-3 md:text-right">
            <a className="link-underline hover:text-teal" href="#">Accessibility</a>
            &nbsp;&middot;&nbsp;
            <a className="link-underline hover:text-teal" href="#">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
