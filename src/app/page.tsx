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
      {/* Hero Section - Centered & Professional */}
      <section className="py-20 md:py-32 flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 px-4">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
            Psicoterapia Professionale
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Mi occupo di <strong>ansia, depressione, trauma e relazioni</strong> utilizzando le tecniche più efficaci della psicoterapia moderna.
          </p>

          {/* Direct Contact Info */}
          <div className="bg-white rounded-2xl border border-primary-200 p-8 mb-12 shadow-md">
            <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-6">📍 Disponibilità</p>
            <p className="text-lg text-neutral-700 mb-8 font-medium">Prato • Online</p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl">📞</span>
                <div className="text-left">
                  <p className="text-xs text-neutral-500 uppercase tracking-wide font-semibold mb-1">Telefono</p>
                  <a href="tel:+393381110142" className="text-xl md:text-2xl font-bold text-primary-600 hover:text-primary-700 transition">
                    +39 338 111 0142
                  </a>
                </div>
              </div>

              <div className="hidden sm:block w-px bg-neutral-200"></div>

              <div className="flex items-start gap-4">
                <span className="text-3xl">📧</span>
                <div className="text-left">
                  <p className="text-xs text-neutral-500 uppercase tracking-wide font-semibold mb-1">Email</p>
                  <a href="mailto:gestricaterina@gmail.com" className="text-lg md:text-xl font-bold text-primary-600 hover:text-primary-700 transition break-all">
                    gestricaterina@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-200 pt-6">
              <p className="text-sm text-neutral-600 mb-4">Rispondi rapidamente a messaggi e chiamate</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/chi-sono" className="button-primary">
                  Chi Sono
                </Link>
                <Link href="/servizi" className="button-secondary">
                  Servizi
                </Link>
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div>
            <p className="text-xs md:text-sm text-neutral-500 mb-4 uppercase tracking-wide font-semibold">Credenziali professionali</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="inline-flex items-center px-4 py-2 bg-white border border-neutral-200 rounded-lg text-sm text-neutral-700">
                ✓ Ordine Psicologi Toscana
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-white border border-neutral-200 rounded-lg text-sm text-neutral-700">
                ✓ AIAMC
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-white border border-neutral-200 rounded-lg text-sm text-neutral-700">
                ✓ EABCT
              </span>
            </div>
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
                Su di me
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
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto per Iniziare?</h2>
          <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Contattami per una consulenza iniziale. Sono disponibile per appuntamenti <strong>a Prato</strong> e <strong>online</strong>.
          </p>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <p className="text-primary-100 text-sm uppercase tracking-wide mb-6 font-semibold">Contattami direttamente</p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <a href="tel:+393381110142" className="flex items-center gap-3 hover:opacity-80 transition">
                <span className="text-3xl">📞</span>
                <div className="text-left">
                  <p className="text-xs text-primary-200 uppercase tracking-wide">Telefono</p>
                  <p className="text-2xl font-bold text-white">+39 338 111 0142</p>
                </div>
              </a>

              <div className="hidden sm:block w-px bg-white bg-opacity-20"></div>

              <a href="mailto:gestricaterina@gmail.com" className="flex items-center gap-3 hover:opacity-80 transition">
                <span className="text-3xl">📧</span>
                <div className="text-left">
                  <p className="text-xs text-primary-200 uppercase tracking-wide">Email</p>
                  <p className="text-xl font-bold text-white break-all">gestricaterina@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
