'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

const projectTypes = [
  'Rénovation intérieure',
  'Rénovation extérieure',
  'Extension / Surélévation',
  'Aménagement combles',
  'Salle de bain',
  'Cuisine',
  'Autre',
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send size={24} className="text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-dark mb-2">Message envoyé !</h3>
        <p className="text-text-light">
          Nous vous recontactons dans les 24h pour discuter de votre projet.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">
            Nom complet
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            placeholder="Jean Dupont"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            placeholder="jean@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-2">
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            placeholder="06 12 34 56 78"
          />
        </div>
        <div>
          <label htmlFor="project" className="block text-sm font-semibold text-dark mb-2">
            Type de projet
          </label>
          <select
            id="project"
            required
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors bg-white"
          >
            <option value="">Sélectionnez...</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">
          Décrivez votre projet
        </label>
        <textarea
          id="message"
          rows={5}
          required
          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors resize-none"
          placeholder="Surface, type de travaux, budget estimé, délais souhaités..."
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
      >
        <Send size={18} />
        Envoyer ma demande
      </button>
    </form>
  )
}
