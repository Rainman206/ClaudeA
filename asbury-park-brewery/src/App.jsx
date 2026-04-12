import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import BeerLineup from './components/BeerLineup'
import Visit from './components/Visit'
import Story from './components/Story'
import Events from './components/Events'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#lineup"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-teal focus:text-ink focus:px-3 focus:py-2 focus:font-mono focus:text-[11px] focus:uppercase focus:tracking-hair"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <BeerLineup />
        <Visit />
        <Story />
        <Events />
      </main>
      <Footer />
    </>
  )
}
