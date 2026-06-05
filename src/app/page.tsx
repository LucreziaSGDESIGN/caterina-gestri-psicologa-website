import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Caterina Gestri - Psicologa Specializzata in EMDR | Prato Toscana',
  description: 'Psicologa Psicoterapeuta specializzata in EMDR per trauma, dissociazione e ansia. Consulenze a Prato (Toscana) e online. Trattamenti evidence-based con risultati comprovati.',
  keywords: 'psicologa Toscana, EMDR trauma, terapeuta Prato, psicoterapia online, terapia dissociazione, ansia depressione, Caterina Gestri',
  openGraph: {
    title: 'Caterina Gestri - Psicologa Specializzata in EMDR',
    description: 'Psicoterapia specializzata in EMDR per trauma, dissociazione, ansia e depressione. Prato (Toscana) e online.',
    type: 'website',
  },
}

const services = [
  {
    title: 'EMDR',
    description: 'Psicotraumatologia: Approccio specializzato nel trattamento del trauma e PTSD. Riconosciuto internazionalmente come trattamento evidence-based per le esperienze traumatiche.',
    href: '/servizi/psicoterapeuta-emdr',
    icon: '⚡',
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
            src="/images/Safety Feeling Image.png"
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
            <Link href="/chi-sono" className="button-primary inline-block">
              Scopri chi sono
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section - Optimized */}
      <section className="py-14 md:py-18 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-header">La Mia Specializzazione</h2>
            <p className="section-subheader text-sm md:text-base">
              EMDR Psicotraumatologia - Approccio evidence-based per il trattamento del trauma
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
                Lavoro con adolescenti, adulti e famiglie, affrontando disturbi d'ansia, depressione, trauma complesso, dissociazione, difficoltà relazionali e problematiche di autostima.
              </p>
              <Link href="/chi-sono" className="button-primary">
                Su di me
              </Link>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/caterina-gestri.png"
                alt="Caterina Gestri - Psicologa Psicoterapeuta"
                fill
                className="object-cover"
              />
            </div>
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

      {/* How We Work Together - Empathy Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 italic text-neutral-600">
            <p className="text-lg mb-2">"Il cuore del bambino è il cuore autentico."</p>
            <p className="text-sm text-neutral-500">— Li Zhi</p>
          </div>
          <h2 className="section-header mb-8">Come Lavoriamo Insieme</h2>
          <div className="space-y-6 text-neutral-700 text-lg leading-relaxed">
            <p>
              La psicoterapia è un percorso unico e profondamente personale, diverso per ogni individuo. Per questo motivo, offro un approccio personalizzato, costruito sulle esigenze, sulla storia e sugli obiettivi di ciascuna persona, affinché possa sentirsi accolta e supportata nel proprio cammino di crescita e cambiamento.
            </p>
            <p>
              Ti accompagnerò nell'esplorazione della tua storia, delle tue relazioni e delle difficoltà che stai affrontando, creando uno spazio sicuro in cui poter riflettere e comprendere più a fondo i tuoi vissuti. Insieme potremo osservare schemi di pensiero, emozioni e comportamenti che forse non rispondono più ai tuoi bisogni attuali, aprendo la strada a nuove possibilità di scelta e di benessere.
            </p>
            <p>
              Attraverso la relazione terapeutica, ti offrirò sostegno e guida nello sviluppo di una maggiore consapevolezza di te stesso, aiutandoti a costruire prospettive più funzionali e modalità di relazione più autentiche e in sintonia con la tua identità.
            </p>
            <p>
              La psicoterapia non riguarda soltanto la risoluzione di un problema specifico: è anche un'opportunità per conoscere meglio se stessi, sviluppare una maggiore consapevolezza emotiva e costruire una vita più equilibrata, autentica e significativa.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA - Optimized */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto per Iniziare?</h2>
          <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Contattami per una consulenza iniziale. Sono disponibile per appuntamenti <strong>a Prato (Toscana)</strong> e <strong>online</strong>.
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
