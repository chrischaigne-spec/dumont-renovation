import ScrollReveal from './ScrollReveal'

export default function SectionTitle({
  title,
  subtitle,
  center = true,
}: {
  title: string
  subtitle?: string
  center?: boolean
}) {
  return (
    <ScrollReveal className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-text-light max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className={`w-16 h-1 bg-primary rounded-full mt-6 ${center ? 'mx-auto' : ''}`} />
    </ScrollReveal>
  )
}
