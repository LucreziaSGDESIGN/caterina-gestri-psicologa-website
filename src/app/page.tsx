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
      {/* Hero Section - Design Focused */}
      <section className="relative w-full h-96 md:h-[500px] lg:h-[600px] flex items-center overflow-hidden">
        {/* Background Image - Full Width */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1494759807633-c3bab6d88e45?w=1400&h=600&fit=crop"
            alt="Caterina Gestri - Psicologa Psicoterapeuta"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/0" />
        </div>

        {/* Content - Left side overlay */}
        <div className="relative z-10 max-w-6xl w-full mx-auto px-4 md:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Psicoterapia che ascolta, comprende, trasforma
            </h1>
            <div className="flex flex-col gap-6">
              <div className="bg-white/10 backdrop-blur px-6 py-4 rounded-lg border border-white/20">
                <p className="text-lg text-white/95 font-medium">
                  📞 <a href="tel:+393381110142" className="hover:text-white transition">+39 338 111 0142</a>
                </p>
                <p className="text-lg text-white/95 font-medium mt-2">
                  📧 <a href="mailto:gestricaterina@gmail.com" className="hover:text-white transition">gestricaterina@gmail.com</a>
                </p>
              </div>
              <Link href="/chi-sono" className="button-primary inline-block">
                Scopri chi sono
              </Link>
            </div>
          </div>
        </div>

        {/* Location badge - bottom right */}
        <div className="absolute bottom-6 right-6 z-10 bg-white/95 backdrop-blur px-6 py-3 rounded-full">
          <p className="text-sm font-semibold text-neutral-900">📍 Prato • 💻 Online</p>
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
