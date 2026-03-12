'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { navigation, company } from '@/lib/data'

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.08)]'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo with compact on scroll */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className={`font-bold text-dark tracking-tight transition-all duration-500 ${
                scrolled ? 'text-xl' : 'text-2xl'
              }`}>DUMONT</span>
              <span className={`bg-primary mx-2 rounded-full transition-all duration-500 ${
                scrolled ? 'w-0.5 h-5' : 'w-1 h-8'
              }`} />
              <span className={`font-normal text-dark tracking-tight transition-all duration-500 ${
                scrolled ? 'text-xl' : 'text-2xl'
              }`}>RÉNOVATION</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-[15px] font-medium transition-colors hover:text-primary group"
              >
                <span className={pathname === item.href ? 'text-primary' : 'text-text'}>
                  {item.name}
                </span>
                {/* Active/hover underline */}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-primary rounded-full transition-all duration-300 ${
                  pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              <Phone size={16} />
              <span>Devis gratuit</span>
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-dark"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navigation.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`py-3 px-4 rounded-lg text-base font-medium transition-colors block ${
                      pathname === item.href
                        ? 'text-primary bg-cream'
                        : 'text-text hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navigation.length * 0.05 }}
              >
                <Link
                  href="/contact"
                  className="mt-2 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-5 py-3 rounded-lg transition-colors"
                >
                  <Phone size={16} />
                  Devis gratuit
                </Link>
              </motion.div>
              <a
                href={`tel:${company.phone.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-2 text-text-light py-3 text-sm"
              >
                <Phone size={14} />
                {company.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
