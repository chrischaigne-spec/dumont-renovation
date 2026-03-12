'use client'

import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const rotatingWords = [
  'cuisine',
  'salle de bain',
  'façade',
  'combles',
  'intérieur',
]

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Full-bleed photo background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-renovation.webp"
          alt="Rénovation intérieure — salon cuisine moderne"
          className="absolute inset-0 w-full h-full object-cover object-[80%_center]"
        />
        {/* Single continuous gradient: opaque left → transparent right */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(26,31,46,0.97) 0%, rgba(26,31,46,0.92) 30%, rgba(26,31,46,0.6) 55%, rgba(26,31,46,0.15) 75%, transparent 100%)',
          }}
        />
        {/* Top edge darken for header readability */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#1a1f2e]/60 to-transparent" />
        {/* Bottom edge darken */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1a1f2e]/40 to-transparent" />
      </div>

      {/* Content — left side only */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/[0.08] backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-gray-300 text-sm font-medium">
                Depuis 2009 à Brignais — {'>'}200 chantiers livrés
              </span>
            </div>
          </motion.div>

          {/* Titre principal avec mot rotatif */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-white leading-[1.1] mb-4">
              Nous rénovons votre
            </h1>
            <div className="h-[52px] sm:h-[62px] lg:h-[72px] xl:h-[80px] text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold mb-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="block text-primary"
                >
                  {rotatingWords[wordIndex]}
                  <motion.span
                    className="inline-block w-[3px] h-[0.8em] bg-primary ml-2 align-middle"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                  />
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed"
          >
            Du projet à la livraison, un seul interlocuteur. {' '}
            <span className="text-white/80">
              12 collaborateurs, tous les corps de métier, zéro sous-traitance.
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-all text-lg shadow-lg shadow-primary/25"
            >
              Demander un devis gratuit
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/realisations"
              className="group inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 hover:border-white/30 text-white font-semibold px-8 py-4 rounded-lg transition-all text-lg"
            >
              Voir nos réalisations
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-16 flex flex-wrap gap-6 sm:gap-10"
          >
            {[
              { value: 'RGE', label: 'Certifié' },
              { value: 'Qualibat', label: 'Qualifié' },
              { value: '4.8★', label: 'Google' },
            ].map((badge) => (
              <div key={badge.value} className="flex items-center gap-2">
                <span className="text-primary font-bold text-sm">{badge.value}</span>
                <span className="text-gray-400 text-sm">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
