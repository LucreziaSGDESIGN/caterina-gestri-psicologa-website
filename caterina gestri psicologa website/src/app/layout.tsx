import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://caterinageстri.it'

export const metadata: Metadata = {
  title: 'Caterina Gestri - Psicologa Psicoterapeuta Toscana',
  description: 'Psicologa-Psicoterapeuta specializzata in psicoterapia cognitivo-comportamentale, EMDR, EFT e Schema Therapy. Servizi a Arezzo, Lucca, Pisa, Firenze.',
  keywords: 'psicologa, psicoterapeuta, Toscana, CBT, EMDR, EFT, ansia, depressione, trauma',
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: baseUrl,
    title: 'Caterina Gestri - Psicologa Psicoterapeuta',
    description: 'Psicoterapia cognitivo-comportamentale, EMDR, EFT, Schema Therapy. Libera professionista in Toscana.',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': baseUrl,
  name: 'Caterina Gestri - Psicologa Psicoterapeuta',
  description: 'Psicologa-Psicoterapeuta specializzata in psicoterapia cognitivo-comportamentale, EMDR, EFT e Schema Therapy',
  telephone: '+39-338-111-0142',
  email: 'gestricaterina@gmail.com',
  areaServed: [
    {
      '@type': 'City',
      name: 'Arezzo',
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
      '@type': 'City',
      name: 'Lucca',
      containedIn: {
        '@type': 'State',
        name: 'Toscana',
      },
    },
    {
      '@type': 'City',
      name: 'Pisa',
      containedIn: {
        '@type': 'State',
        name: 'Toscana',
      },
    },
    {
      '@type': 'City',
      name: 'Firenze',
      containedIn: {
        '@type': 'State',
        name: 'Toscana',
      },
    },
  ],
  knowsAbout: [
    'Psicoterapia Cognitivo-Comportamentale',
    'EMDR',
    'Emotionally Focused Therapy',
    'Schema Therapy',
    'Psicologia Clinica',
  ],
  sameAs: [
    'https://www.linkedin.com/in/caterina-gestri-430ab567/',
  ],
  serviceType: 'Psichiatry, Psychotherapy',
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
