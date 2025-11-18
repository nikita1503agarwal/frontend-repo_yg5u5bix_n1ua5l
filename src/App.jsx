import Header from './components/Header'
import Hero from './components/Hero'
import BackgroundFX from './components/BackgroundFX'

function App() {
  return (
    <div className="relative min-h-screen text-[#F8FAFC]">
      {/* Global animated background (disabled on blog post page; here enabled) */}
      <BackgroundFX />

      {/* Content wrapper to keep above background */}
      <div className="relative z-10">
        <Header />
        <Hero />

        {/* Placeholder sections anchors for nav targets */}
        <section id="services" className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="mt-2 text-[#E2E8F0]">AI strategy, cloud, automation and product engineering tailored for growth.</p>
        </section>
        <section id="solutions" className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-3xl font-bold">Solutions</h2>
          <p className="mt-2 text-[#E2E8F0]">From PoC to production—secure, scalable and measurable outcomes.</p>
        </section>
        <section id="blog" className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-3xl font-bold">Insights</h2>
          <p className="mt-2 text-[#E2E8F0]">Latest thoughts on AI, platforms and engineering excellence.</p>
        </section>
        <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="mt-2 text-[#E2E8F0]">Tell us about your goals—let’s build the future together.</p>
        </section>
      </div>
    </div>
  )
}

export default App
