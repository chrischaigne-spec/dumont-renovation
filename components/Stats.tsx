'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from './AnimatedCounter'

const stats = [
  { value: 15, suffix: ' ans', label: "d'expérience", countable: true },
  { value: 200, suffix: '+', label: 'chantiers réalisés', countable: true },
  { display: 'RGE', label: 'certifié', countable: false },
  { value: 4.8, suffix: '/5', label: 'avis Google', countable: false, display: '4.8/5' },
]

export default function Stats() {
  return (
    <section className="relative bg-dark py-20 overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stats-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stats-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center relative"
            >
              {/* Divider (not on first) */}
              {i > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10" />
              )}
              <p className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                {stat.countable ? (
                  <AnimatedCounter value={stat.value!} suffix={stat.suffix} />
                ) : (
                  stat.display || stat.value
                )}
              </p>
              <p className="text-gray-400 text-sm sm:text-base font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
