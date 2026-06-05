import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

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
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-neutral-900 mb-8">Informazioni di Contatto</h2>

            <div className="space-y-8">
              {/* Telefono */}
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                  <span className="text-2xl">📞</span> Telefono
                </h3>
                <a
                  href="tel:+393381110142"
                  className="text-primary-600 hover:text-primary-700 font-semibold text-lg"
                >
                  +39 338 111 0142
                </a>
                <p className="text-sm text-neutral-600 mt-2">
                  Disponibile per consulenze e fissazione appuntamenti
                </p>
              </div>

              {/* Email */}
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                  <span className="text-2xl">📧</span> Email
                </h3>
                <a
                  href="mailto:gestricaterina@gmail.com"
                  className="text-primary-600 hover:text-primary-700 font-semibold break-all"
                >
                  gestricaterina@gmail.com
                </a>
                <p className="text-sm text-neutral-600 mt-2">
                  Ti rispondo entro 24 ore
                </p>
              </div>

              {/* Sedi */}
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                  <span className="text-2xl">📍</span> Sedi
                </h3>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">→</span>
                    <span><strong>Prato</strong> - Centro Città</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">→</span>
                    <span><strong>Online</strong> - Via videochiamata</span>
                  </li>
                </ul>
              </div>

              {/* Credenziali */}
              <div className="pt-8 border-t border-neutral-200">
                <h3 className="font-semibold text-neutral-900 mb-3">Credenziali Professionali</h3>
                <ul className="text-xs text-neutral-600 space-y-2">
                  <li>✓ Ordine Psicologi della Toscana n.4947</li>
                  <li>✓ AIAMC - Associazione Italiana di Analisi e Modificazione del Comportamento</li>
                  <li>✓ EABCT - European Association for Behavioural and Cognitive Therapies</li>
                  <li>✓ EMDR Italia</li>
                  <li>✓ ICEEFT - Socio Fondatore</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-neutral-50 rounded-lg p-8 border border-neutral-200">
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">Inviami un Messaggio</h2>
              <p className="text-neutral-600 mb-8">
                Compila il modulo qui sotto e ti ricontatterò al più presto.
              </p>
              <ContactForm />
            </div>

            {/* Additional Info */}
            <div className="mt-12 grid grid-cols-1 gap-6">
              <div className="bg-white border border-neutral-200 rounded-lg p-6">
                <h3 className="font-bold text-neutral-900 mb-2">Prima Consulenza</h3>
                <p className="text-sm text-neutral-600">
                  La prima consulenza è l'occasione per conoscersi, valutare il problema e definire insieme un percorso terapeutico personalizzato.
                </p>
              </div>
              <div className="bg-white border border-neutral-200 rounded-lg p-6">
                <h3 className="font-bold text-neutral-900 mb-2">Riservatezza Garantita</h3>
                <p className="text-sm text-neutral-600">
                  Tutti i dati e le informazioni che condividi sono protetti secondo le normative sulla privacy. La riservatezza è un principio fondamentale della mia pratica.
                </p>
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
                La durata è molto variabile e dipende dalla natura del problema e dagli obiettivi. Alcuni percorsi possono durare 6-8 sedute, altri più mesi. Durante la consulenza iniziale, definiamo insieme una stima personalizzata.
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
