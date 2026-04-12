import { motion } from 'framer-motion'
import { nav } from '../data/site'

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-ink/70 border-b border-bone/10"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group" aria-label="Asbury Park Brewery, home">
          <LogoMark />
          <span className="font-mono text-[11px] tracking-hair text-bone/70 hidden sm:inline">
            AP / BREWERY &middot; EST.&nbsp;&lsquo;16
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-9">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="font-mono text-[11px] uppercase tracking-hair text-bone/80 hover:text-teal link-underline"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#visit"
          className="group font-mono text-[11px] uppercase tracking-hair px-4 py-2 border border-bone/25 hover:border-teal hover:text-teal transition-colors"
        >
          <span className="opacity-70 mr-2">&rarr;</span>Visit Taproom
        </a>
      </div>
    </motion.header>
  )
}

function LogoMark() {
  return (
    <svg width="34" height="34" viewBox="0 0 40 40" aria-hidden="true" className="text-teal group-hover:animate-flicker">
      <circle cx="20" cy="20" r="18.5" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M10 26 L20 10 L30 26" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M14.5 22 H25.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="20" cy="20" r="1.6" fill="currentColor" />
    </svg>
  )
}
