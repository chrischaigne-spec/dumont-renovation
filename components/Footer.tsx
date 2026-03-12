import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react'
import { company, navigation, certifications } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-dark text-white relative overflow-hidden">
      {/* Subtle top accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-dots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="12" cy="12" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-dots)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Top — Logo + tagline */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-14 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center mb-3">
              <span className="text-2xl font-bold tracking-tight">DUMONT</span>
              <span className="w-1 h-7 bg-primary mx-2 rounded-full" />
              <span className="text-2xl font-normal tracking-tight">RÉNOVATION</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">{company.tagline}. Entreprise de rénovation dans l&apos;Ouest Lyonnais depuis {company.founded}.</p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            Demander un devis
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Coordonnées */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-primary mt-0.5 shrink-0" />
                {company.address}
              </li>
              <li>
                <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Phone size={15} className="text-primary shrink-0" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Mail size={15} className="text-primary shrink-0" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={15} className="text-primary shrink-0" />
                Lun – Ven : 8h – 18h
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5">Navigation</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5">Services</h3>
            <ul className="space-y-3">
              {['Rénovation intérieure', 'Rénovation extérieure', 'Extension', 'Combles', 'Salle de bain', 'Cuisine'].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-sm text-gray-300 hover:text-primary transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-center gap-3 bg-white/[0.03] rounded-lg p-3 border border-white/5">
                  <span className="bg-primary/20 text-primary text-xs font-bold px-2.5 py-1 rounded shrink-0">
                    {cert.name}
                  </span>
                  <span className="text-xs text-gray-400">{cert.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Dumont Rénovation — Tous droits réservés
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-gray-600 hover:text-gray-400 transition-colors cursor-pointer">
              Mentions légales
            </span>
            <span className="text-xs text-gray-600 hover:text-gray-400 transition-colors cursor-pointer">
              Politique de confidentialité
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
