/**
 * Application constants and configuration
 */

export const SITE_CONFIG = {
  name: 'Caterina Gestri - Psicologa',
  description: 'Psicologa e Psicoterapeuta specializzata in CBT, EMDR, EFT e Schema Therapy',
  url: 'https://caterinageстri.it', // Update with actual domain
  language: 'it-IT',
  author: 'Caterina Gestri',
}

export const CONTACT_INFO = {
  phone: '+39 338 111 0142',
  phoneRaw: '+393381110142',
  email: 'gestricaterina@gmail.com',
  hours: {
    weekdays: '9:00 - 20:00',
    saturday: 'Su appuntamento',
    sunday: 'Chiuso',
  },
}

export const LOCATIONS = [
  { city: 'Arezzo', type: 'Centro Città' },
  { city: 'Lucca', type: 'Su appuntamento' },
  { city: 'Pisa', type: 'Su appuntamento' },
  { city: 'Firenze', type: 'Su appuntamento' },
  { city: 'Online', type: 'Via videochiamata' },
]

export const CREDENTIALS = {
  ordineNumber: '4947',
  ordineName: 'Ordine Psicologi della Toscana',
  associations: [
    'AIAMC - Associazione Italiana di Analisi e Modificazione del Comportamento',
    'EABCT - European Association for Behavioural and Cognitive Therapies',
    'EMDR Italia',
    'ICEEFT - International Centre for Excellence in Emotionally Focused Therapy (Socio Fondatore)',
  ],
}

export const SPECIALIZATIONS = [
  {
    title: 'CBT - Cognitive Behavioral Therapy',
    description: 'Psicoterapia cognitivo-comportamentale',
  },
  {
    title: 'EMDR - Eye Movement Desensitization and Reprocessing',
    description: 'Specializzazione nel trattamento del trauma',
  },
  {
    title: 'EFT - Emotionally Focused Therapy',
    description: 'Terapia focalizzata sulle emozioni per le coppie',
  },
  {
    title: 'Schema Therapy',
    description: 'Integrazione di diversi approcci terapeutici',
  },
]

export const NAVIGATION = [
  { label: 'Chi Sono', href: '/chi-sono' },
  { label: 'Servizi', href: '/servizi' },
  { label: 'Specializzazioni', href: '/chi-sono#specializzazioni' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contatti', href: '/contatti' },
]

export const SOCIAL_LINKS = {
  // Add social links as needed
  // instagram: 'https://instagram.com/...',
  // linkedin: 'https://linkedin.com/in/...',
}
