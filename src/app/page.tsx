import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Psicologa Psicoterapeuta Toscana - Caterina Gestri',
  description: 'Specialista in psicoterapia cognitivo-comportamentale, EMDR, EFT e Schema Therapy. Servizi psicologici per ansia, depressione, trauma e relazioni.',
}

const services = [
  {
    title: 'Psicoterapia Cognitivo-Comportamentale',
    description: 'Approccio evidence-based per ansia, depressione, fobie e disturbi ossessivi. Particolarmente efficace per ansia generalizzata e panico.',
    href: '/servizi/psicoterapeuta-cbt',
    icon: '🧠',
  },
  {
    title: 'EMDR',
    description: 'Tecnica specializzata nel trattamento del trauma e PTSD. Sviluppata su base scientifica, riconosciuta internazionalmente.',
    href: '/servizi/psicoterapeuta-emdr',
    icon: '⚡',
  },
  {
    title: 'Emotionally Focused Therapy (EFT)',
    description: 'Terapia di coppia che aiuta le coppie a riconnettersi emotivamente e superare conflitti relazionali.',
    href: '/servizi/psicoterapeuta-eft',
    icon: '💑',
  },
  {
    title: 'Schema Therapy',
    description: 'Approccio integrato per disturbi di personalità e pattern comportamentali disfunzionali radicati.',
    href: '/servizi/schema-therapy',
    icon: '🔄',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section - Optimized */}
      <section className="py-16 md:py-24 flex items-center bg-gradient-to-br from-primary-50 via-white to-accent-50 px-4">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4 leading-tight">
              Psicoterapia Professionale in Toscana
            </h1>
            <p className="text-base md:text-lg text-neutral-600 mb-6 max-w-lg">
              Mi occupo di <strong>ansia, depressione, trauma e relazioni</strong> utilizzando le tecniche più efficaci della psicoterapia moderna.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contatti" className="button-primary">
                Prendi un Appuntamento
              </Link>
              <Link href="/chi-sono" className="button-secondary">
                Scopri di più
              </Link>
            </div>
            <div className="mt-8 pt-6 border-t border-neutral-200">
              <p className="text-xs md:text-sm text-neutral-500 mb-3">Credenziali professionali:</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 bg-white border border-neutral-200 rounded text-xs md:text-sm text-neutral-700">
                  ✓ Ordine Psicologi Toscana
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-white border border-neutral-200 rounded text-xs md:text-sm text-neutral-700">
                  ✓ AIAMC
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-white border border-neutral-200 rounded text-xs md:text-sm text-neutral-700">
                  ✓ EABCT
                </span>
              </div>
            </div>
          </div>

          <div className="relative h-80 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl" />
            <Image
              src="https://images.unsplash.com/photo-1494759807633-c3bab6d88e45?w=600&h=600&fit=crop"
              alt="Caterina Gestri - Psicologa Psicoterapeuta"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section - Optimized */}
      <section className="py-14 md:py-18 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-header">Servizi e Specializzazioni</h2>
            <p className="section-subheader text-sm md:text-base">
              Approcci terapeutici comprovati scientificamente per affrontare le tue difficoltà
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service) => (
              <Link key={service.href} href={service.href}>
                <div className="p-8 border border-neutral-200 rounded-lg hover:border-primary-300 hover:shadow-lg transition h-full bg-neutral-50 hover:bg-white">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{service.title}</h3>
                  <p className="text-neutral-600 mb-4">{service.description}</p>
                  <span className="text-primary-600 font-semibold text-sm">Scopri di più →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview - Optimized */}
      <section className="py-14 md:py-18 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="section-header">Chi Sono</h2>
              <p className="text-neutral-600 mb-3 text-base md:text-lg">
                Sono una psicologa-psicoterapeuta specializzata in psicoterapia cognitivo-comportamentale, con formazioni avanzate in EMDR, EFT e Schema Therapy.
              </p>
              <p className="text-neutral-600 mb-6 text-base md:text-lg">
                Lavoro con adolescenti, adulti e famiglie, affrontando disturbi d'ansia, depressione, trauma, difficoltà relazionali e problematiche di autostima.
              </p>
              <Link href="/chi-sono" className="button-primary">
                Leggi la mia storia
              </Link>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg p-6 md:p-8 h-80 md:h-96" />
          </div>
        </div>
      </section>

      {/* Blog Preview - Optimized */}
      <section className="py-14 md:py-18 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-header">Articoli Recenti</h2>
            <p className="section-subheader text-sm md:text-base">
              Scopri approfondimenti sulla psicoterapia, il benessere emotivo e come affrontare le difficoltà comuni
            </p>
          </div>
          <div className="text-center">
            <Link href="/blog" className="button-primary">
              Accedi al Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA - Optimized */}
      <section className="py-14 md:py-18 px-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto per Iniziare?</h2>
          <p className="text-base md:text-lg text-primary-100 mb-6 md:mb-8 max-w-2xl mx-auto">
            Contattami per una consulenza iniziale. Sono disponibile per appuntamenti online e presso gli studi di Arezzo, Lucca, Pisa e Firenze.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <a href="tel:+393381110142" className="button-primary bg-white text-primary-600 hover:bg-neutral-100">
              📞 Chiama Ora
            </a>
            <a href="mailto:gestricaterina@gmail.com" className="button-primary bg-primary-800 hover:bg-primary-900">
              📧 Invia Email
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
