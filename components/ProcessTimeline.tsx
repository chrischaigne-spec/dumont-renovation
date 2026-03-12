'use client'

import { Phone, ClipboardCheck, FileText, Hammer, Key } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

const steps = [
  {
    icon: Phone,
    title: 'Premier contact',
    description: 'Échangeons sur votre projet par téléphone ou en rendez-vous. Gratuit et sans engagement.',
  },
  {
    icon: ClipboardCheck,
    title: 'Visite technique',
    description: 'Nous nous déplaçons chez vous pour étudier la faisabilité et prendre les mesures.',
  },
  {
    icon: FileText,
    title: 'Devis détaillé',
    description: 'Un chiffrage précis, poste par poste, avec un planning prévisionnel clair.',
  },
  {
    icon: Hammer,
    title: 'Travaux',
    description: 'Notre équipe intervient. Un chef de chantier vous tient informé chaque semaine.',
  },
  {
    icon: Key,
    title: 'Livraison',
    description: 'Réception du chantier ensemble, point par point. Vous ne payez le solde qu\'à votre satisfaction.',
  },
]

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Comment ça se passe"
          subtitle="Un processus clair, de votre premier appel à la remise des clés."
        />

        {/* Desktop horizontal */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-12 left-[10%] right-[10%] h-[2px] bg-border">
              <motion.div
                className="h-full bg-primary origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />
            </div>

            <div className="grid grid-cols-5 gap-6">
              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="text-center"
                  >
                    {/* Circle with icon */}
                    <div className="relative mx-auto mb-6">
                      <div className="w-24 h-24 bg-white border-2 border-border rounded-full flex items-center justify-center mx-auto relative z-10 group hover:border-primary transition-colors duration-500">
                        <Icon size={28} className="text-text-light group-hover:text-primary transition-colors duration-500" />
                      </div>
                      {/* Step number */}
                      <div className="absolute -top-1 -right-1 w-7 h-7 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center z-20">
                        {i + 1}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-dark mb-2">{step.title}</h3>
                    <p className="text-sm text-text-light leading-relaxed">{step.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="lg:hidden">
          <div className="relative pl-12">
            {/* Vertical line */}
            <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-border">
              <motion.div
                className="w-full bg-primary origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />
            </div>

            <div className="space-y-10">
              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative"
                  >
                    {/* Node */}
                    <div className="absolute -left-12 top-0 w-10 h-10 bg-white border-2 border-primary rounded-full flex items-center justify-center z-10">
                      <span className="text-primary font-bold text-sm">{i + 1}</span>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Icon size={20} className="text-primary" />
                        <h3 className="text-lg font-bold text-dark">{step.title}</h3>
                      </div>
                      <p className="text-text-light leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
