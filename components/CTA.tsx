'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

export default function CTA({
  title = 'Votre projet mérite un accompagnement sur-mesure',
  subtitle = 'Contactez-nous pour un devis gratuit et sans engagement. Nous vous répondons sous 24h.',
  buttonText = 'Demander un devis gratuit',
  buttonHref = '/contact',
}: {
  title?: string
  subtitle?: string
  buttonText?: string
  buttonHref?: string
}) {
  return (
    <section className="relative py-24 bg-cream overflow-hidden grain">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/[0.03] rounded-full blur-[80px]" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary/[0.03] rounded-full blur-[60px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-6">{title}</h2>
          <p className="text-lg text-text-light mb-10 max-w-2xl mx-auto">{subtitle}</p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link
              href={buttonHref}
              className="group inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-semibold px-10 py-5 rounded-xl transition-all text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
            >
              {buttonText}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
