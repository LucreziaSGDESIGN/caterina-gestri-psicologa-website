import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://caterinageстri.it'

export const metadata: Metadata = {
  title: 'Caterina Gestri - Psicologa Psicoterapeuta Prato (Toscana)',
  description: 'Psicologa-Psicoterapeuta specializzata in psicoterapia cognitivo-comportamentale, EMDR, EFT e Schema Therapy. Consulenze a Prato (Toscana) e online.',
  keywords: 'psicologa, psicoterapeuta, Prato, Toscana, CBT, EMDR, EFT, ansia, depressione, trauma, online',
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: baseUrl,
    title: 'Caterina Gestri - Psicologa Psicoterapeuta',
    description: 'Psicoterapia cognitivo-comportamentale, EMDR, EFT, Schema Therapy. Disponibile a Prato (Toscana) e online.',
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
