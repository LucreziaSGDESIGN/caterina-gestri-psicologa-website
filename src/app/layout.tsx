import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://caterinageстri.it'

export const metadata: Metadata = {
  title: 'Caterina Gestri - Psicologa Psicoterapeuta Specializzata in EMDR | Prato (Toscana)',
  description: 'Caterina Gestri - Psicologa Psicoterapeuta specializzata in EMDR, trauma, dissociazione e ansia. Esercita a Prato (Toscana) e online. Iscritta Ordine Psicologi della Toscana.',
  keywords: 'psicologa Prato, psicoterapeuta Toscana, EMDR, trauma, dissociazione, Caterina Gestri, terapia online, ansia, depressione, terapeuta Prato, psicoterapia Toscana',
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: baseUrl,
    title: 'Caterina Gestri - Psicologa Specializzata in EMDR e Trauma',
    description: 'Specializzata in EMDR per trauma, dissociazione e disturbi d\'ansia. Disponibile a Prato (Toscana) e online.',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': baseUrl,
  name: 'Caterina Gestri - Psicologa Psicoterapeuta',
  description: 'Psicologa-Psicoterapeuta specializzata in EMDR per il trattamento del trauma e dissociazione',
  telephone: '+39-338-111-0142',
  email: 'gestricaterina@gmail.com',
  image: `${baseUrl}/images/caterina-gestri.png`,
  url: baseUrl,
  priceRange: '$$',
  areaServed: [
    {
      '@type': 'City',
      name: 'Prato',
      containedIn: {
        '@type': 'State',
        name: 'Toscana',
        containedIn: {
          '@type': 'Country',
          name: 'IT',
        },
      },
    },
    {
      '@type': 'VirtualLocation',
      name: 'Online',
      url: baseUrl,
    },
  ],
  knowsAbout: [
    'EMDR (Eye Movement Desensitization and Reprocessing)',
    'Psicoterapia Cognitivo-Comportamentale',
    'Emotionally Focused Therapy',
    'Schema Therapy',
    'Trauma e PTSD',
    'Dissociazione',
    'Ansia',
    'Depressione',
    'Psicologia Clinica',
  ],
  specialization: [
    'EMDR Practitioner',
    'EMDR Supervisore',
    'Trattamento del Trauma',
    'Psicotraumatologia',
    'Dissociazione',
  ],
  medicalSpecialty: [
    'Psychiatry',
    'Clinical Psychology',
    'Psychotherapy',
  ],
  sameAs: [
    'https://www.linkedin.com/in/caterina-gestri-430ab567/',
  ],
  serviceType: 'Psychiatry, Psychotherapy, Psychology',
  businessType: 'Therapist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-white text-neutral-900">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
