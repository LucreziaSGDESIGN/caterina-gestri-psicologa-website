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
      'Sessioni settimanali o bi-settimanali',
      'Durata variabile (6-20+ sessioni)',
      'Tecniche evidence-based',
      'Focus su risultati concreti',
      'Monitoraggio del progresso',
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

const processo = [
  {
    number: '1',
    title: 'Primo Contatto',
    description: 'Ti contatto per organizzare una consulenza iniziale. Possiamo parlare per telefono o via email.',
  },
  {
    number: '2',
    title: 'Consulenza Iniziale',
    description: 'Incontriamo di persona o online. Ascolto il tuo problema, valutiamo insieme e decidiamo il percorso.',
  },
  {
    number: '3',
    title: 'Definizione del Percorso',
    description: 'Stabilizziamo gli obiettivi, la frequenza delle sedute e le tecniche più adatte al tuo caso.',
  },
  {
    number: '4',
    title: 'Psicoterapia',
    description: 'Avviamo il percorso terapeutico. Monitoreremo regolarmente il progresso verso i tuoi obiettivi.',
  },
  {
    number: '5',
    title: 'Chiusura e Follow-up',
    description: 'Concludiamo il percorso quando gli obiettivi sono raggiunti. Disponibile per follow-up se necessario.',
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

      {/* Process Section */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-header text-center mb-16">Come Funziona il Percorso</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
            {processo.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-lg p-6 border border-neutral-200 h-full flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-neutral-600">{step.description}</p>
                </div>
                {idx < processo.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <svg className="w-6 h-6 text-primary-200" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Tariffe</h2>
            <p className="text-neutral-600 mb-4">
              Le tariffe variano in base al tipo di servizio e alla durata delle sessioni. Offro flessibilità nel pagamento e posso discutere di opzioni personalizzate.
            </p>
            <p className="text-neutral-600">
              Contattami per ricevere informazioni dettagliate sulle tariffe applicate.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Riservatezza</h2>
            <p className="text-neutral-600 mb-4">
              La riservatezza è un principio fondamentale della mia pratica. Tutti i dati personali sono protetti secondo le normative sulla privacy e la legge sulla protezione dei dati.
            </p>
            <p className="text-neutral-600">
              Leggi la <Link href="/privacy" className="text-primary-600 hover:text-primary-700 font-semibold">Privacy Policy</Link> per maggiori dettagli.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto per Iniziare?</h2>
          <p className="text-lg text-primary-100 mb-8">
            Contattami per una consulenza iniziale. La prima sessione è l'occasione per conoscerci e valutare insieme il percorso più adatto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+393381110142" className="inline-flex items-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-neutral-100 transition">
              📞 Chiama Ora
            </a>
            <a href="mailto:gestricaterina@gmail.com" className="inline-flex items-center px-8 py-3 bg-primary-800 text-white font-semibold rounded-lg hover:bg-primary-900 transition">
              📧 Invia Email
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
