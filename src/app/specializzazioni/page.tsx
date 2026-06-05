import { Metadata } from 'next'
import { SPECIALIZATIONS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Specializzazioni in EMDR e Trauma | Caterina Gestri',
  description: 'Specializzazioni psicoterapeutiche: EMDR, CBT, EFT, Schema Therapy per trauma, ansia, depressione e dissociazione. Prato (Toscana) e online.',
  keywords: 'EMDR Prato, specializzazioni psicoterapia, trauma therapy Toscana, CBT, EFT, Schema Therapy, psicologa specializzata',
  openGraph: {
    title: 'Specializzazioni Terapeutiche - EMDR Focus',
    description: 'Approcci evidence-based specializzati in EMDR, CBT, EFT e Schema Therapy',
    type: 'website',
  },
}

export default function Specializzazioni() {
  const specializations = [
    {
      title: 'CBT - Cognitive Behavioral Therapy',
      shortName: 'Psicoterapia Cognitivo-Comportamentale',
      description: 'La CBT è uno dei principali approcci evidence-based per il trattamento di disturbi d\'ansia, depressione e disturbi comportamentali. Si basa sull\'idea che i nostri pensieri, emozioni e comportamenti sono interconnessi.',
      benefits: [
        'Efficace per ansia, depressione e disturbi d\'ansia',
        'Basata su evidenze scientifiche',
        'Fornisce strumenti pratici e utilizzabili',
        'Risultati durevoli nel tempo',
        'Approccio strutturato e collaborativo',
      ],
      ideal: 'Ideale per chi desidera affrontare i problemi con uno strumento strutturato e pratico, basato su evidenze scientifiche.',
    },
    {
      title: 'EMDR - Eye Movement Desensitization and Reprocessing',
      shortName: 'Desensibilizzazione e Rielaborazione del Trauma',
      description: 'L\'EMDR è una metodologia rivoluzionaria per il trattamento del trauma psicologico. Attraverso stimolazioni bilaterali (movimenti oculari) aiuta il cervello a rielaborare i ricordi traumatici.',
      benefits: [
        'Efficace per il trauma e PTSD',
        'Riduzione rapida dei sintomi traumatici',
        'Non richiede di raccontare dettagliatamente il trauma',
        'Effetti duraturi',
        'Approccio bottom-up che coinvolge il sistema nervoso',
      ],
      ideal: 'Ideale per chi ha vissuto esperienze traumatiche e desidera superarle in modo rapido ed efficace.',
    },
    {
      title: 'EFT - Emotionally Focused Therapy',
      shortName: 'Terapia Focalizzata sulle Emozioni per le Coppie',
      description: 'L\'EFT è un approccio psicoterapeutico specificamente disegnato per le coppie. Si concentra sulla comprensione dei cicli relazionali negativi e sulla creazione di maggiore intimità emozionale.',
      benefits: [
        'Migliora la comunicazione di coppia',
        'Aumenta l\'intimità emozionale',
        'Rompe i cicli relazionali negativi',
        'Approccio evidence-based per le coppie',
        'Crea legami di attaccamento sicuro',
      ],
      ideal: 'Ideale per le coppie che desiderano approfondire la loro connessione emotiva e risolvere conflitti relazionali.',
    },
    {
      title: 'Schema Therapy',
      shortName: 'Terapia degli Schemi',
      description: 'La Schema Therapy integra elementi della psicoterapia cognitivo-comportamentale, della terapia gestalt, della teoria dell\'attaccamento e della psicodinamica. È particolarmente efficace per pattern problematici radicati.',
      benefits: [
        'Integra molteplici approcci terapeutici',
        'Efficace per pattern comportamentali radicati',
        'Affronta le radici emotive dei problemi',
        'Sviluppa modi di affrontamento sani',
        'Favorisce la consapevolezza dei pattern',
      ],
      ideal: 'Ideale per chi ha pattern comportamentali e relazionali che si ripetono e desidera comprenderne le origini profonde.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-header">Le Mie Specializzazioni</h1>
          <p className="text-xl text-neutral-600">
            Scopri gli approcci terapeutici evidence-based che utilizzo per accompagnarti verso il benessere
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Intro */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Perché Specializzazioni Multiple?</h2>
            <p className="text-neutral-600 mb-4">
              Ogni persona è unica e ogni difficoltà richiede un approccio personalizzato. Grazie alla mia formazione in diverse metodologie evidence-based, posso adattare il percorso terapeutico alle tue esigenze specifiche.
            </p>
            <p className="text-neutral-600">
              La mia competenza multidisciplinare mi consente di scegliere la tecnica più efficace per il tuo caso, combinando approcci quando appropriato per massimizzare i risultati.
            </p>
          </div>

          {/* Specializations Grid */}
          <div className="space-y-12">
            {specializations.map((spec, index) => (
              <div key={index} className="border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{spec.title}</h3>
                  <p className="text-primary-100">{spec.shortName}</p>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  {/* Description */}
                  <div>
                    <p className="text-neutral-700 leading-relaxed">
                      {spec.description}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-3">Benefici Principali</h4>
                    <ul className="space-y-2">
                      {spec.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-neutral-700">
                          <span className="text-accent-600 font-bold mt-1">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Integration Section */}
          <div className="bg-gradient-to-r from-accent-50 to-primary-50 p-8 rounded-lg border border-accent-200">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Integrazione e Personalizzazione</h2>
            <p className="text-neutral-700 mb-4">
              Non utilizzo un approccio "taglia unica". Durante la fase iniziale di valutazione, identifichiamo insieme quale metodologia (o quali metodologie combinate) sarà più efficace per i tuoi bisogni specifici.
            </p>
            <p className="text-neutral-700">
              Lavoro con i seguenti presupposti:
            </p>
            <ul className="mt-4 space-y-2 text-neutral-700">
              <li className="flex items-start gap-3">
                <span className="text-accent-600 font-bold">→</span>
                <span><strong>La tua unicità:</strong> Ogni persona merita un percorso personalizzato</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-600 font-bold">→</span>
                <span><strong>Evidenze scientifiche:</strong> Utilizzo solo approcci supportati dalla ricerca</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-600 font-bold">→</span>
                <span><strong>La tua voce:</strong> Sei al centro del processo decisionale del trattamento</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-600 font-bold">→</span>
                <span><strong>Risultati misurabili:</strong> Monitoriamo il progresso e adattiamo quando necessario</span>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </>
  )
}
