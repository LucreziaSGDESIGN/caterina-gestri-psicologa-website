import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Servizi Psicoterapeutici - Caterina Gestri',
  description: 'Servizi di psicoterapia: consulenza psicologica, valutazione, psicoterapia individuale, di coppia e terapia del trauma.',
}

const services = [
  {
    title: 'Consulenza Psicologica',
    description: 'Incontro iniziale per valutare le difficoltà, esplorare le cause e definire insieme un percorso personalizzato.',
    features: [
      'Valutazione del problema',
      'Analisi della situazione attuale',
      'Definizione degli obiettivi',
      'Proposta di intervento',
      'Senza impegno per proseguire',
    ],
  },
  {
    title: 'Psicoterapia Individuale',
    description: 'Percorso terapeutico personalizzato per affrontare difficoltà personali, emotive e relazionali.',
    features: [
      'Percorso personalizzato secondo le tue esigenze',
      'Tecniche evidence-based',
      'Focus su risultati concreti',
      'Monitoraggio del progresso',
      'Approccio flessibile e adattivo',
    ],
  },
  {
    title: 'Terapia di Coppia',
    description: 'Percorso terapeutico per coppie che desiderano migliorare la comunicazione e la relazione emotiva.',
    features: [
      'Approccio EFT (Emotionally Focused Therapy)',
      'Miglioramento della comunicazione',
      'Riconessione emotiva',
      'Risoluzione dei conflitti',
      'Percorsi personalizzati',
    ],
  },
  {
    title: 'Terapia del Trauma',
    description: 'Specializzazione nel trattamento del trauma e PTSD utilizzando EMDR e tecniche evidence-based.',
    features: [
      'Tecnica EMDR',
      'Trattamento del PTSD',
      'Traumi semplici e complessi',
      'Efficacia dimostrata',
      'Rapida risoluzione dei sintomi',
    ],
  },
  {
    title: 'Valutazione Neuropsicologica',
    description: 'Assessment delle funzioni cognitive e comportamentali per diagnosi e consulenza.',
    features: [
      'Test neuropsicologici',
      'Valutazione cognitiva',
      'Rapporto dettagliato',
      'Raccomandazioni cliniche',
      'Follow-up personalizzato',
    ],
  },
  {
    title: 'Supporto Psicologico Online',
    description: 'Sessioni terapeutiche via videochiamata per chi preferisce ricevere da casa.',
    features: [
      'Piattaforma sicura e riservata',
      'Flessibilità di orario',
      'Stessa qualità della terapia in presenza',
      'Disponibile da qualsiasi luogo',
      'Accessibilità facilitata',
    ],
  },
]

export default function Servizi() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="section-header">Servizi Psicoterapeutici</h1>
          <p className="section-subheader">
            Offro una gamma completa di servizi psicoterapeutici utilizzando approcci evidence-based e personalizzati per ogni persona.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white border border-neutral-200 rounded-lg p-8 hover:shadow-lg hover:border-primary-300 transition h-full flex flex-col">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-600 mb-6 flex-grow">{service.description}</p>
                <ul className="space-y-2 text-sm text-neutral-600 pt-6 border-t border-neutral-200">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-2">
                      <span className="text-primary-600 font-bold flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Riservatezza e Confidenzialità</h2>
          <p className="text-neutral-600 mb-4 max-w-2xl mx-auto">
            La riservatezza è un principio fondamentale della mia pratica. Tutti i dati personali sono protetti secondo le normative sulla privacy e la legge sulla protezione dei dati.
          </p>
          <p className="text-neutral-600">
            Leggi la <Link href="/privacy" className="text-primary-600 hover:text-primary-700 font-semibold">Privacy Policy</Link> per maggiori dettagli.
          </p>
        </div>
      </section>

    </>
  )
}
