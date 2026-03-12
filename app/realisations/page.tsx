'use client'

import { useState } from 'react'
import { MapPin, Ruler, Calendar } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHeader from '@/components/PageHeader'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import CTA from '@/components/CTA'
import { projects, projectCategories } from '@/lib/data'

const projectImages: Record<number, { before: string; after: string }> = {
  1: { before: '/images/real-brignais-avant.webp', after: '/images/real-brignais-apres.webp' },
  2: { before: '/images/real-chaponost-avant.webp', after: '/images/real-chaponost-apres.webp' },
  3: { before: '/images/real-oullins-avant.webp', after: '/images/real-oullins-apres.webp' },
  4: { before: '/images/real-saintefoy-avant.webp', after: '/images/real-saintefoy-apres.webp' },
  5: { before: '/images/real-tassin-avant.webp', after: '/images/real-tassin-apres.webp' },
  6: { before: '/images/real-francheville-avant.webp', after: '/images/real-francheville-apres.webp' },
}

export default function RealisationsPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <>
      <PageHeader
        title="Nos réalisations"
        subtitle="Glissez sur chaque projet pour découvrir la transformation avant / après."
        badge="200+ chantiers livrés"
      />

      {/* Filters + Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`relative px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeFilter === cat.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-gray-100 text-text hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatePresence mode="wait">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <BeforeAfterSlider
                    height={380}
                    beforeImage={projectImages[project.id]?.before}
                    afterImage={projectImages[project.id]?.after}
                  />
                  <div className="mt-5">
                    <h3 className="text-xl font-bold text-dark mb-2">{project.title}</h3>
                    <p className="text-text-light text-sm mb-3 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-text-light">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-primary" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Ruler size={14} className="text-primary" />
                        {project.surface}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-primary" />
                        {project.duration}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-text-light py-12">
              Aucune réalisation dans cette catégorie pour le moment.
            </p>
          )}
        </div>
      </section>

      <CTA
        title="Vous avez un projet similaire ?"
        subtitle="Chaque chantier est unique. Parlons du vôtre."
      />
    </>
  )
}
