import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[linear-gradient(135deg,#4F46E5_0%,#0EA5E9_50%,#A855F7_100%)]" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left copy */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#F8FAFC] font-extrabold tracking-tight leading-[1.05] text-[46px] sm:text-[56px] md:text-[64px] lg:text-[78px]"
          >
            Transforming Businesses with <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#FF6B6B,#A855F7)]">AI-First</span> IT Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-[#E2E8F0] text-lg max-w-xl"
          >
            CodeGummies delivers cutting-edge software, cloud infrastructure, automation, and AI innovation to scale your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#get-started"
              className="px-6 py-3 rounded-lg text-white bg-[#4F46E5] hover:brightness-110 transition shadow-[0_0_18px_rgba(79,70,229,0.35)]"
            >
              Start Your Project
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg text-[#F8FAFC] border border-white/50 bg-white/10 hover:bg-white/15 transition"
            >
              Talk to an Expert
            </a>
          </motion.div>
        </div>

        {/* Right 3D visual */}
        <div className="relative h-[420px] sm:h-[500px] md:h-[560px] lg:h-[620px]">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />

          {/* Soft floating particles */}
          <motion.div
            className="pointer-events-none absolute -left-10 top-10 w-40 h-40 rounded-full bg-[#A855F7]/30 blur-3xl"
            animate={{ y: [0, -12, 0], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="pointer-events-none absolute -right-6 bottom-10 w-48 h-48 rounded-full bg-[#0EA5E9]/30 blur-3xl"
            animate={{ y: [0, 10, 0], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </section>
  )
}
