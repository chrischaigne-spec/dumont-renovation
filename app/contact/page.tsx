import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import ContactForm from '@/components/ContactForm'
import ScrollReveal from '@/components/ScrollReveal'
import { company } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez Dumont Rénovation pour un devis gratuit. Réponse sous 24h. Brignais, Ouest Lyonnais.',
}

const infos = [
  {
    icon: MapPin,
    label: 'Adresse',
    value: company.address,
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: company.phone,
    href: `tel:${company.phone.replace(/\s/g, '')}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: Clock,
    label: 'Horaires',
    value: 'Lundi – Vendredi : 8h – 18h',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contactez-nous"
        subtitle="Un projet en tête ? Demandez votre devis gratuit, nous vous répondons sous 24h."
        badge="Réponse sous 24h"
      />

      {/* Form + Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <ScrollReveal className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-dark mb-8">Décrivez votre projet</h2>
              <ContactForm />
            </ScrollReveal>

            {/* Infos */}
            <ScrollReveal delay={0.2}>
              <h2 className="text-2xl font-bold text-dark mb-8">Nos coordonnées</h2>
              <div className="space-y-6">
                {infos.map((info) => {
                  const Icon = info.icon
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-text-light mb-1">{info.label}</p>
                        <p className="font-medium text-dark">{info.value}</p>
                      </div>
                    </div>
                  )

                  if ('href' in info && info.href) {
                    return (
                      <a key={info.label} href={info.href} className="block hover:opacity-80 transition-opacity">
                        {content}
                      </a>
                    )
                  }

                  return <div key={info.label}>{content}</div>
                })}
              </div>

              {/* Zone */}
              <div className="mt-10 p-6 bg-cream rounded-xl grain">
                <h3 className="font-bold text-dark mb-2">Zone d&apos;intervention</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {company.zone} : Brignais, Chaponost, Oullins, Tassin, Francheville,
                  Craponne, Vaugneray, Écully, et communes environnantes.
                </p>
              </div>

              {/* Garantie */}
              <div className="mt-6 p-6 bg-primary/5 rounded-xl border border-primary/10">
                <h3 className="font-bold text-dark mb-2">Devis gratuit & sans engagement</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Nous nous déplaçons gratuitement pour étudier votre projet et vous remettre
                  un devis détaillé sous 48h.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
