import Link from 'next/link'
import { ArrowRight, Home, Building, Maximize, ArrowUpFromLine, Bath, CookingPot } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const iconMap: Record<string, React.ElementType> = {
  Home,
  Building,
  Maximize,
  ArrowUpFromLine,
  Bath,
  CookingPot,
}

export default function ServiceCard({
  title,
  shortDesc,
  icon,
  href,
  delay = 0,
}: {
  title: string
  shortDesc: string
  icon: string
  href: string
  delay?: number
}) {
  const Icon = iconMap[icon] || Home

  return (
    <ScrollReveal delay={delay}>
      <div className="relative bg-white border border-border rounded-xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group h-full flex flex-col overflow-hidden">
        {/* Top border fill on hover */}
        <div className="absolute top-0 left-0 right-0 h-[3px]">
          <div className="h-full bg-primary rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </div>

        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-105 transition-all duration-500">
          <Icon size={28} className="text-primary group-hover:text-white transition-colors duration-500" />
        </div>
        <h3 className="text-xl font-bold text-dark mb-3">{title}</h3>
        <p className="text-text-light leading-relaxed mb-6 flex-1">{shortDesc}</p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link"
        >
          En savoir plus
          <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </ScrollReveal>
  )
}
