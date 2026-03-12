import type { Metadata } from 'next'
import { Users, Award, Shield, Clock, MapPin } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import SectionTitle from '@/components/SectionTitle'
import ScrollReveal from '@/components/ScrollReveal'
import CTA from '@/components/CTA'
import { company, certifications } from '@/lib/data'

export const metadata: Metadata = {
  title: 'À propos',
  description: `Découvrez Dumont Rénovation : ${company.employees} collaborateurs, certifié RGE et Qualibat, au service de votre habitat depuis ${company.founded}.`,
}

const values = [
  {
    icon: Award,
    title: 'Qualité',
    description: 'Nous sélectionnons les meilleurs matériaux et travaillons dans les règles de l\'art. Chaque détail compte.',
  },
  {
    icon: Shield,
    title: 'Transparence',
    description: 'Devis détaillé, suivi de chantier régulier, aucun coût caché. Vous savez exactement où vous en êtes.',
  },
  {
    icon: Clock,
    title: 'Respect des délais',
    description: 'Nous planifions chaque chantier avec rigueur. Les délais annoncés sont les délais tenus.',
  },
]

const zones = [
  'Brignais', 'Chaponost', 'Oullins', 'Sainte-Foy-l\'Argentière',
  'Tassin-la-Demi-Lune', 'Francheville', 'Craponne', 'Vaugneray',
  'Écully', 'Saint-Genis-Laval', 'Pierre-Bénite', 'Irigny',
]

export default function AProposPage() {
  return (
    <>
      <PageHeader
        title="À propos"
        subtitle={`Une entreprise familiale, ancrée dans l'Ouest Lyonnais depuis ${new Date().getFullYear() - company.founded} ans.`}
        badge="Depuis 2009"
      />

      {/* Histoire */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-dark mb-6">Notre histoire</h2>
              <div className="space-y-4 text-text-light text-lg leading-relaxed">
                <p>
                  Depuis {company.founded}, Dumont Rénovation accompagne les particuliers et les professionnels
                  dans leurs projets de rénovation. Fondée par {company.owner}, l&apos;entreprise est née
                  d&apos;une conviction simple : la rénovation d&apos;un habitat mérite le même soin et la même
                  exigence qu&apos;une construction neuve.
                </p>
                <p>
                  Aujourd&apos;hui, notre équipe de {company.employees} collaborateurs — maçons, plaquistes,
                  électriciens, plombiers, peintres — intervient sur tous les types de chantiers,
                  de la salle de bain à la rénovation complète.
                </p>
                <p>
                  Notre force : un interlocuteur unique qui coordonne l&apos;ensemble des corps de métier.
                  Pas de sous-traitance en cascade, pas de mauvaises surprises. Juste du travail bien fait.
                </p>
              </div>
            </ScrollReveal>

            {/* Photo équipe */}
            <ScrollReveal delay={0.2}>
              <div className="rounded-xl overflow-hidden h-96">
                <img
                  src="/images/equipe-dumont.webp"
                  alt="L'équipe Dumont Rénovation au complet"
                  className="w-full h-full object-cover object-[center_30%]"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-cream grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nos valeurs"
            subtitle="Ce qui guide notre travail au quotidien."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <ScrollReveal key={value.title} delay={i * 0.1}>
                  <div className="bg-white rounded-xl p-8 border border-border h-full hover:shadow-lg transition-shadow duration-500 group overflow-hidden relative">
                    <div className="absolute top-0 left-0 right-0 h-[3px]">
                      <div className="h-full bg-primary rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </div>
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-105 transition-all duration-500">
                      <Icon size={28} className="text-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-3">{value.title}</h3>
                    <p className="text-text-light leading-relaxed">{value.description}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Certifications & garanties"
            subtitle="Des qualifications reconnues pour votre tranquillité."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert.name} delay={i * 0.1}>
                <div className="text-center p-8 border border-border rounded-xl hover:shadow-lg transition-shadow duration-500">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-xl">{cert.name}</span>
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-2">{cert.name}</h3>
                  <p className="text-text-light">{cert.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-20 bg-cream grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Zone d'intervention"
            subtitle="Nous intervenons dans l'Ouest Lyonnais et l'agglomération."
          />
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {zones.map((zone) => (
                <div
                  key={zone}
                  className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg border border-border text-sm hover:border-primary/30 transition-colors"
                >
                  <MapPin size={14} className="text-primary shrink-0" />
                  <span className="text-text">{zone}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-text-light text-sm mt-6">
              Et toutes les communes environnantes — contactez-nous pour vérifier.
            </p>
          </div>
        </div>
      </section>

      <CTA
        title="Envie de rejoindre nos clients satisfaits ?"
        subtitle="Parlez-nous de votre projet, nous vous répondons sous 24h."
      />
    </>
  )
}
