export const company = {
  name: 'Dumont Rénovation',
  tagline: 'Votre habitat, notre savoir-faire',
  address: '24 rue des Artisans, 69530 Brignais',
  phone: '04 78 46 32 10',
  email: 'contact@dumont-renovation.fr',
  founded: 2009,
  owner: 'Philippe Dumont',
  employees: 12,
  zone: 'Ouest Lyonnais et agglomération',
}

export const stats = [
  { value: '15', label: "ans d'expérience" },
  { value: '200+', label: 'chantiers réalisés' },
  { value: 'RGE', label: 'certifié' },
  { value: '4.8/5', label: 'avis Google' },
]

export const services = [
  {
    id: 'renovation-interieure',
    title: 'Rénovation intérieure complète',
    shortDesc: 'Transformation totale de vos espaces de vie : sols, murs, plafonds, électricité, plomberie.',
    description: "Nous prenons en charge la rénovation intérieure de A à Z. De la démolition aux finitions, notre équipe coordonne l'ensemble des corps de métier pour transformer votre intérieur selon vos envies. Chaque projet est étudié sur-mesure pour s'adapter à votre mode de vie et à votre budget.",
    prestations: [
      'Démolition et préparation',
      'Plâtrerie et cloisons',
      'Revêtements sols et murs',
      'Électricité et plomberie',
      'Peinture et finitions',
    ],
    icon: 'Home',
  },
  {
    id: 'renovation-exterieure',
    title: 'Rénovation extérieure & façades',
    shortDesc: 'Ravalement, isolation par l\'extérieur, toiture : redonnez une seconde jeunesse à votre maison.',
    description: "L'extérieur de votre maison est la première chose que l'on voit. Nous réalisons le ravalement de façade, l'isolation thermique par l'extérieur (ITE) et la réfection de toiture. Des travaux qui valorisent votre bien tout en réduisant vos factures d'énergie.",
    prestations: [
      'Ravalement de façade',
      'Isolation thermique par l\'extérieur',
      'Réfection de toiture',
      'Zinguerie et gouttières',
      'Traitement de charpente',
    ],
    icon: 'Building',
  },
  {
    id: 'extension',
    title: 'Extension & surélévation',
    shortDesc: 'Gagnez de la surface sans déménager grâce à une extension bois, béton ou mixte.',
    description: "Besoin de plus d'espace ? Plutôt que de déménager, agrandissez. Nous concevons et réalisons des extensions en bois, béton ou ossature mixte qui s'intègrent naturellement à votre habitation. Chaque extension est pensée pour maximiser la lumière et l'espace.",
    prestations: [
      'Extension ossature bois',
      'Extension béton traditionnel',
      'Surélévation de toiture',
      'Véranda et pergola',
      'Démarches administratives',
    ],
    icon: 'Maximize',
  },
  {
    id: 'combles',
    title: 'Aménagement de combles',
    shortDesc: 'Transformez vos combles perdus en pièce de vie lumineuse et bien isolée.',
    description: "Vos combles représentent un potentiel souvent inexploité. Nous les transformons en chambre, bureau ou salle de jeux avec une isolation performante, des fenêtres de toit et des rangements sur-mesure. Un investissement rentable qui augmente la valeur de votre bien.",
    prestations: [
      'Étude de faisabilité',
      'Isolation thermique et phonique',
      'Fenêtres de toit Velux',
      'Création de salle d\'eau',
      'Rangements sur-mesure',
    ],
    icon: 'ArrowUpFromLine',
  },
  {
    id: 'salle-de-bain',
    title: 'Rénovation salle de bain',
    shortDesc: 'Créez une salle de bain fonctionnelle et moderne, adaptée à vos besoins.',
    description: "La salle de bain est une pièce technique qui nécessite un savoir-faire spécifique. Plomberie, étanchéité, carrelage, électricité : nous gérons l'ensemble du chantier. Du choix des matériaux à la pose, nous vous accompagnons pour créer un espace qui vous ressemble.",
    prestations: [
      'Dépose et évacuation',
      'Plomberie et étanchéité',
      'Carrelage sol et murs',
      'Douche italienne',
      'Meuble vasque et rangements',
    ],
    icon: 'Bath',
  },
  {
    id: 'cuisine',
    title: 'Rénovation cuisine',
    shortDesc: 'Une cuisine repensée pour le quotidien : ergonomique, moderne et conviviale.',
    description: "La cuisine est le cœur de la maison. Nous la rénovons intégralement : démolition des cloisons pour ouvrir l'espace, refonte de l'électricité et de la plomberie, pose du nouveau mobilier. Résultat : une cuisine pratique au quotidien et agréable à vivre.",
    prestations: [
      'Ouverture de cloisons (IPN)',
      'Électricité aux normes',
      'Plomberie et évacuations',
      'Pose de la cuisine',
      'Crédence et plan de travail',
    ],
    icon: 'CookingPot',
  },
]

export const projects = [
  {
    id: 1,
    title: 'Rénovation complète maison de village',
    location: 'Brignais',
    surface: '120 m²',
    duration: '4 mois',
    category: 'interieur',
    description: 'Transformation intégrale d\'une maison de village des années 60 : redistribution des pièces, mise aux normes électriques, isolation, et finitions contemporaines.',
  },
  {
    id: 2,
    title: 'Extension bois contemporaine',
    location: 'Chaponost',
    surface: '35 m²',
    duration: '3 mois',
    category: 'extension',
    description: 'Extension en ossature bois avec grandes baies vitrées pour agrandir le séjour et créer une suite parentale lumineuse.',
  },
  {
    id: 3,
    title: 'Rénovation façade + isolation',
    location: 'Oullins',
    surface: '180 m²',
    duration: '2 mois',
    category: 'exterieur',
    description: 'Ravalement complet avec isolation thermique par l\'extérieur (ITE). Passage de classe énergétique E à B.',
  },
  {
    id: 4,
    title: 'Aménagement combles en suite parentale',
    location: 'Sainte-Foy-l\'Argentière',
    surface: '45 m²',
    duration: '6 semaines',
    category: 'interieur',
    description: 'Combles perdus transformés en suite parentale avec salle d\'eau, dressing et deux fenêtres de toit.',
  },
  {
    id: 5,
    title: 'Cuisine ouverte sur séjour',
    location: 'Tassin-la-Demi-Lune',
    surface: '25 m²',
    duration: '3 semaines',
    category: 'interieur',
    description: 'Ouverture de la cuisine sur le séjour avec pose d\'un IPN, nouvelle cuisine équipée et îlot central.',
  },
  {
    id: 6,
    title: 'Salle de bain PMR accessible',
    location: 'Francheville',
    surface: '12 m²',
    duration: '2 semaines',
    category: 'interieur',
    description: 'Adaptation d\'une salle de bain pour personne à mobilité réduite : douche italienne de plain-pied, barres d\'appui, vasque accessible.',
  },
]

export const testimonials = [
  {
    name: 'Marc & Sophie D.',
    location: 'Brignais',
    text: 'Rénovation complète de notre maison — du sol au plafond. Travail soigné, équipe ponctuelle, zéro mauvaise surprise sur la facture.',
    rating: 5,
    image: '/images/temoignage-marc-sophie.webp',
  },
  {
    name: 'Jean-Pierre M.',
    location: 'Chaponost',
    text: "Extension de 30m² réalisée en 3 mois, dans le budget annoncé. Philippe et son équipe sont des pros. Communication claire du début à la fin.",
    rating: 5,
    image: '/images/temoignage-jean-pierre.webp',
  },
  {
    name: 'Catherine L.',
    location: 'Oullins',
    text: "Salle de bain refaite à neuf en deux semaines. Le résultat est magnifique et la douche italienne est un vrai bonheur au quotidien.",
    rating: 5,
    image: '/images/temoignage-catherine.webp',
  },
]

export const certifications = [
  { name: 'RGE', description: 'Reconnu Garant de l\'Environnement' },
  { name: 'Qualibat', description: 'Qualification professionnelle du bâtiment' },
  { name: 'Décennale', description: 'Garantie décennale AXA' },
]

export const projectCategories = [
  { id: 'all', label: 'Tous' },
  { id: 'interieur', label: 'Intérieur' },
  { id: 'exterieur', label: 'Extérieur' },
  { id: 'extension', label: 'Extension' },
]

export const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Réalisations', href: '/realisations' },
  { name: 'À propos', href: '/a-propos' },
  { name: 'Contact', href: '/contact' },
]
