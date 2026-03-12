import type { Metadata } from 'next'
import { Home, Building, Maximize, ArrowUpFromLine, Bath, CookingPot, CheckCircle } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import ScrollReveal from '@/components/ScrollReveal'
import CTA from '@/components/CTA'
import { services } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Rénovation intérieure, extérieure, extension, combles, salle de bain, cuisine. Découvrez nos prestations de rénovation dans l\'Ouest Lyonnais.',
}

const iconMap: Record<string, React.ElementType> = {
  Home,
  Building,
  Maximize,
  ArrowUpFromLine,
  Bath,
  CookingPot,
}

const imageMap: Record<string, string> = {
  'renovation-interieure': '/images/service-renovation-interieure.webp',
  'renovation-exterieure': '/images/service-renovation-exterieure.webp',
  'extension': '/images/service-extension.webp',
  'combles': '/images/service-combles.webp',
  'salle-de-bain': '/images/service-salle-de-bain.webp',
  'cuisine': '/images/service-cuisine.webp',
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Nos services"
        subtitle="Six domaines d'expertise pour couvrir l'ensemble de vos besoins en rénovation."
        badge="Tous corps de métier"
      />

      {/* Services */}
      {services.map((service, i) => {
        const Icon = iconMap[service.icon] || Home
        const isEven = i % 2 === 0

        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 ${isEven ? 'bg-white' : 'bg-cream grain'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Text */}
                <ScrollReveal className={!isEven ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-dark">{service.title}</h2>
                  </div>
                  <p className="text-lg text-text-light leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.prestations.map((prestation) => (
                      <li key={prestation} className="flex items-center gap-3 text-text">
                        <CheckCircle size={18} className="text-primary shrink-0" />
                        {prestation}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/25"
                  >
                    Discutons de votre projet
                  </a>
                </ScrollReveal>

                {/* Photo service */}
                <ScrollReveal delay={0.2} className={!isEven ? 'lg:order-1' : ''}>
                  <div className="rounded-xl overflow-hidden h-80 lg:h-96">
                    <img
                      src={imageMap[service.id]}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        )
      })}

      <CTA />
    </>
  )
}
