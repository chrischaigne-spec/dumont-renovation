import { MapPin, Calendar, Ruler } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

export default function ProjectCard({
  title,
  location,
  surface,
  duration,
  description,
  delay = 0,
}: {
  title: string
  location: string
  surface: string
  duration: string
  description: string
  delay?: number
}) {
  return (
    <ScrollReveal delay={delay}>
      <div className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow group">
        {/* Image placeholder avant/après */}
        <div className="relative h-64 bg-gray-200">
          <div className="absolute inset-0 flex">
            {/* Avant */}
            <div className="w-1/2 bg-gray-300 flex items-center justify-center border-r-2 border-white">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-gray-600 text-xs font-bold">AV</span>
                </div>
                <span className="text-xs font-semibold text-gray-500 uppercase">Avant</span>
              </div>
            </div>
            {/* Après */}
            <div className="w-1/2 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-primary text-xs font-bold">AP</span>
                </div>
                <span className="text-xs font-semibold text-primary uppercase">Après</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-dark mb-2">{title}</h3>
          <p className="text-sm text-text-light mb-4 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-4 text-sm text-text-light">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-primary" />
              {location}
            </span>
            <span className="flex items-center gap-1.5">
              <Ruler size={14} className="text-primary" />
              {surface}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-primary" />
              {duration}
            </span>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}
