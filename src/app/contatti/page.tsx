import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contatti - Caterina Gestri',
  description: 'Contatta Caterina Gestri per una consulenza psicologica. Telefono: 338 111 0142 | Email: gestricaterina@gmail.com',
}

export default function Contatti() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-header">Contatti</h1>
          <p className="section-subheader">
            Contattami per fissare una consulenza iniziale o per ricevere più informazioni sui miei servizi.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-header mb-4">Come Contattarmi</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Contattami direttamente tramite telefono o email per fissare una consulenza o ricevere informazioni sui miei servizi.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Telefono */}
            <div className="text-center">
              <div className="text-5xl mb-6">📞</div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Telefono</h3>
              <a
                href="tel:+393381110142"
                className="text-primary-600 hover:text-primary-700 font-semibold text-xl mb-4 block"
              >
                +39 338 111 0142
              </a>
              <p className="text-neutral-600">
                Disponibile per consulenze e fissazione appuntamenti
              </p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="text-5xl mb-6">📧</div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Email</h3>
              <a
                href="mailto:gestricaterina@gmail.com"
                className="text-primary-600 hover:text-primary-700 font-semibold text-lg mb-4 block break-all"
              >
                gestricaterina@gmail.com
              </a>
              <p className="text-neutral-600">
                Ti rispondo entro 24 ore
              </p>
            </div>
          </div>

          {/* Locations and Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sedi */}
            <div className="bg-neutral-50 rounded-lg p-8 border border-neutral-200">
              <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
                <span className="text-3xl">📍</span> Dove Ricevo
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 font-bold text-lg">→</span>
                  <div>
                    <p className="font-semibold text-neutral-900">Prato</p>
                    <p className="text-sm text-neutral-600">Centro Città</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 font-bold text-lg">→</span>
                  <div>
                    <p className="font-semibold text-neutral-900">Online</p>
                    <p className="text-sm text-neutral-600">Via videochiamata</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Riservatezza */}
            <div className="bg-neutral-50 rounded-lg p-8 border border-neutral-200">
              <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
                <span className="text-3xl">🔒</span> Riservatezza
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Tutti i dati e le informazioni che condividi sono protetti secondo le normative sulla privacy. La riservatezza è un principio fondamentale della mia pratica professionale.
              </p>
            </div>
          </div>

          {/* Credenziali */}
          <div className="mt-12 bg-white border border-neutral-200 rounded-lg p-8">
            <h3 className="text-lg font-bold text-neutral-900 mb-6">Credenziali Professionali</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-primary-600 font-bold">✓</span>
                <span className="text-neutral-700">Ordine Psicologi della Toscana n.4947</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary-600 font-bold">✓</span>
                <span className="text-neutral-700">AIAMC - Associazione Italiana di Analisi e Modificazione del Comportamento</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary-600 font-bold">✓</span>
                <span className="text-neutral-700">EABCT - European Association for Behavioural and Cognitive Therapies</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary-600 font-bold">✓</span>
                <span className="text-neutral-700">EMDR Italia</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary-600 font-bold">✓</span>
                <span className="text-neutral-700">ICEEFT - Socio Fondatore</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-header text-center mb-12">Domande Frequenti</h2>
          <div className="space-y-6">
            <details className="group border border-neutral-200 rounded-lg p-6 cursor-pointer hover:border-primary-300 transition">
              <summary className="font-bold text-neutral-900 flex items-center justify-between">
                <span>Quanto costa una seduta?</span>
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-neutral-600 mt-4">
                Le tariffe variano in base al tipo di servizio. Per ricevere informazioni specifiche sulle tariffe applicate, contattami direttamente per una discussione personalizzata.
              </p>
            </details>

            <details className="group border border-neutral-200 rounded-lg p-6 cursor-pointer hover:border-primary-300 transition">
              <summary className="font-bold text-neutral-900 flex items-center justify-between">
                <span>Come funziona la terapia online?</span>
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-neutral-600 mt-4">
                La terapia online avviene via videochiamata utilizzando una piattaforma sicura e riservata. È altrettanto efficace della terapia in presenza, con il vantaggio di poter ricevere comodamente da casa.
              </p>
            </details>

            <details className="group border border-neutral-200 rounded-lg p-6 cursor-pointer hover:border-primary-300 transition">
              <summary className="font-bold text-neutral-900 flex items-center justify-between">
                <span>Quanto dura un percorso terapeutico?</span>
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-neutral-600 mt-4">
                La durata dipende da ciò di cui hai bisogno e da quello che io, come terapeuta, ritengo più adatto al tuo caso specifico. Ogni percorso è personalizzato e può variare significativamente da persona a persona.
              </p>
            </details>

            <details className="group border border-neutral-200 rounded-lg p-6 cursor-pointer hover:border-primary-300 transition">
              <summary className="font-bold text-neutral-900 flex items-center justify-between">
                <span>Offrite servizi anche per coppie?</span>
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-neutral-600 mt-4">
                Sì, offro terapia di coppia specializzata utilizzando l'approccio EFT (Emotionally Focused Therapy). È particolarmente efficace per migliorare la comunicazione e la connessione emotiva.
              </p>
            </details>

            <details className="group border border-neutral-200 rounded-lg p-6 cursor-pointer hover:border-primary-300 transition">
              <summary className="font-bold text-neutral-900 flex items-center justify-between">
                <span>Come garantite la riservatezza?</span>
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-neutral-600 mt-4">
                La riservatezza è tutelata dal segreto professionale e dalle normative sulla privacy. Tutti i dati sono protetti e non vengono mai condivisi con terzi senza consenso esplicito.
              </p>
            </details>

            <details className="group border border-neutral-200 rounded-lg p-6 cursor-pointer hover:border-primary-300 transition">
              <summary className="font-bold text-neutral-900 flex items-center justify-between">
                <span>Quali specializzazioni utilizzate?</span>
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-neutral-600 mt-4">
                Utilizzo approcci evidence-based come psicoterapia cognitivo-comportamentale, EMDR per il trauma, EFT per le coppie e Schema Therapy. Scelgo l'approccio più adatto al tuo caso specifico.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  )
}
