import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import Stats from '@/components/Stats'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import TestimonialCard from '@/components/TestimonialCard'
import SectionTitle from '@/components/SectionTitle'
import ScrollReveal from '@/components/ScrollReveal'
import ProcessTimeline from '@/components/ProcessTimeline'
import CTA from '@/components/CTA'
import { services, projects, testimonials } from '@/lib/data'
import Link from 'next/link'
import { ArrowRight, MapPin, Ruler, Calendar } from 'lucide-react'

export default function Home() {
  const featuredServices = services.slice(0, 3)
  const featuredProjects = projects.slice(0, 3)

  return (
    <>
      <Hero />

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nos domaines d'expertise"
            subtitle="De la rénovation complète à l'extension, nous maîtrisons tous les corps de métier."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, i) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                shortDesc={service.shortDesc}
                icon={service.icon}
                href="/services"
                delay={i * 0.1}
              />
            ))}
          </div>
          <ScrollReveal className="text-center mt-12">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Voir tous nos services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Réalisations avec slider avant/après */}
      <section className="py-24 bg-cream grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nos dernières réalisations"
            subtitle="Glissez pour découvrir la transformation. Chaque projet raconte une histoire."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {featuredProjects.slice(0, 2).map((project, i) => (
              <div key={project.id}>
                <BeforeAfterSlider
                  height={350}
                  beforeImage={i === 0 ? '/images/real-brignais-avant.webp' : i === 1 ? '/images/real-chaponost-avant.webp' : undefined}
                  afterImage={i === 0 ? '/images/real-brignais-apres.webp' : i === 1 ? '/images/real-chaponost-apres.webp' : undefined}
                />
                <div className="mt-5">
                  <h3 className="text-lg font-bold text-dark mb-2">{project.title}</h3>
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
              </div>
            ))}
          </div>
          <ScrollReveal className="text-center mt-12">
            <Link
              href="/realisations"
              className="group inline-flex items-center gap-3 bg-white border border-border hover:border-primary text-dark font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-lg"
            >
              Toutes nos réalisations
              <ArrowRight size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Process */}
      <ProcessTimeline />

      {/* Témoignages */}
      <section className="py-24 bg-cream grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Ils nous font confiance"
            subtitle="La satisfaction de nos clients est notre meilleure carte de visite."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard
                key={testimonial.name}
                name={testimonial.name}
                location={testimonial.location}
                text={testimonial.text}
                rating={testimonial.rating}
                image={testimonial.image}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </>
  )
}
