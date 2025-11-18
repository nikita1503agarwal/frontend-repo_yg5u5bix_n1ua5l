import { useState } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-white/10 bg-[rgba(15,23,42,0.55)] backdrop-blur-[12px]">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-[#4F46E5] to-[#A855F7] bg-clip-text text-transparent">
              CodeGummies
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-[#E2E8F0] hover:text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#0EA5E9] transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <button className="px-4 py-2 text-sm text-[#E2E8F0] border border-white/30 rounded-lg hover:bg-white/5 transition">Log in</button>
              <motion.a
                whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(168,85,247,0.45)' }}
                whileTap={{ scale: 0.98 }}
                href="#get-started"
                className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-[linear-gradient(90deg,#4F46E5,#A855F7)] shadow-[0_0_12px_rgba(168,85,247,0.35)]"
              >
                Get Started
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-[#E2E8F0] p-2 rounded hover:bg-white/10"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Mobile panel */}
          {open && (
            <div className="md:hidden pt-4 pb-2 space-y-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="block px-3 py-2 rounded text-[#E2E8F0] hover:bg-white/10">
                  {item.label}
                </a>
              ))}
              <div className="flex gap-3 pt-2">
                <button className="flex-1 px-4 py-2 text-sm text-[#E2E8F0] border border-white/30 rounded-lg hover:bg-white/5 transition">Log in</button>
                <a href="#get-started" className="flex-1 px-4 py-2 text-sm font-semibold text-white rounded-lg bg-[linear-gradient(90deg,#4F46E5,#A855F7)] shadow-[0_0_12px_rgba(168,85,247,0.35)] text-center">Get Started</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
