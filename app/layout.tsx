import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Dumont Rénovation — Rénovation intérieure & extérieure | Brignais',
    template: '%s | Dumont Rénovation',
  },
  description: 'Entreprise de rénovation intérieure et extérieure dans l\'Ouest Lyonnais. 15 ans d\'expérience, 200+ chantiers, certifié RGE. Devis gratuit.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
