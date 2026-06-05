import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Schema Therapy - Integrazione di Approcci Terapeutici | Caterina Gestri',
  description:
    'Schema Therapy integra CBT, psicodinamica e teoria dell\'attaccamento. Efficace per disturbi di personalità e patterns profondamente radicati.',
  openGraph: {
    title: 'Schema Therapy',
    description:
      'Approccio integrativo che combina diverse metodologie terapeutiche per problematiche complesse e persistenti.',
    type: 'website',
  },
}

export default function SchemaTherapyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="border-b border-gray-200 px-4 py-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-sm text-gray-600">
          <Link href="/servizi" className="hover:text-gray-900">
            Servizi
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Schema Therapy</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Schema Therapy
            <br />
            <span className="text-blue-600">Un Approccio Integrativo e Innovativo</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            La Schema Therapy integra elementi della terapia cognitivo-comportamentale, della psicodinamica e della
            teoria dell'attaccamento per affrontare problematiche profonde e durature.
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl">
            Questo approccio è particolarmente efficace per i disturbi di personalità e per i pattern emozionali e
            comportamentali profondamente radicati che non rispondono alle terapie tradizionali.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="md:col-span-2 space-y-12">
            {/* Cosa è Schema Therapy */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Cos'è la Schema Therapy?</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                La Schema Therapy è un approccio psicoterapeutico innovativo sviluppato da Jeffrey Young, che combina
                elementi delle principali scuole di psicoterapia.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                La Schema Therapy si concentra sui "schema" - pattern emotivi, cognitivi e comportamentali
                profondamente radicati che si sviluppano dall'infanzia e che guidano il nostro modo di percepire e
                interagire con il mondo.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Attraverso la Schema Therapy, impariamo a identificare questi pattern, a comprendere come si sono
                formati e, soprattutto, a cambiarli in modo duraturo.
              </p>
            </div>

            {/* Cosa sono gli schema */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Cosa sono gli Schema?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Gli schema sono pattern autodisruptive che incluono:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    title: 'Credenze Negative',
                    desc: 'Convinzioni profonde su sé stessi e sul mondo ("non sono abbastanza bravo")',
                  },
                  {
                    title: 'Emozioni Dolorose',
                    desc: 'Paura, rabbia, tristezza croniche radicate nel passato',
                  },
                  {
                    title: 'Ricordi Traumatici',
                    desc: 'Esperienze infantili difficili che continuano a influenzare il presente',
                  },
                  {
                    title: 'Comportamenti Disfunzionali',
                    desc: 'Strategie di coping che mantengono lo schema nel tempo',
                  },
                ].map((item, index) => (
                  <Card key={index} variant="outline" className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-700">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>


            {/* Come funziona */}

            {/* Modalità operative */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Modalità operative della Schema Therapy</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Cognitive',
                    desc: 'Discussione e sfida dei pensieri schematici',
                  },
                  {
                    title: 'Experiential',
                    desc: 'Immaginazione guidata e lavoro emotivo intenso',
                  },
                  {
                    title: 'Behavioral',
                    desc: 'Esercizi pratici e nuovi modi di agire',
                  },
                  {
                    title: 'Relazionale',
                    desc: 'Utilizzo della relazione terapeutica come guarigione',
                  },
                ].map((item, index) => (
                  <Card key={index} variant="default" className="p-6 bg-blue-50 border border-blue-200">
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Vantaggi */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">I vantaggi della Schema Therapy</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Affronta problematiche profonde e radicate',
                  'Combinazione di diverse approcci terapeutici',
                  'Molto efficace per disturbi di personalità',
                  'Lavoro diretto sulle cause, non solo sui sintomi',
                  'Comprensione profonda dei pattern personali',
                  'Cambiamenti duraturi e significativi',
                  'Migliora la qualità della vita complessiva',
                  'Integrazione della consapevolezza emotiva',
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-orange-500 text-xl mr-3">●</span>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="space-y-6">

            {/* Specializzazione */}
            <Card variant="default" className="p-6 bg-orange-50 border border-orange-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Specializzazione</h3>
              <p className="text-sm text-gray-700 mb-4">
                Sono terapeuta specializzata in Schema Therapy con formazione approfondita e continuo aggiornamento
                secondo gli standard internazionali.
              </p>
              <p className="text-sm text-gray-700">
                La Schema Therapy è particolarmente efficace per le problematiche che non rispondono ai trattamenti
                convenzionali.
              </p>
            </Card>

            {/* CTA Card */}
            <Card variant="elevated" className="p-6 bg-gradient-to-b from-orange-50 to-white border border-orange-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Come puoi contattarmi</h3>
              <div className="space-y-4">
                <a href="tel:+393381110142" className="block text-center py-3 px-4 bg-white rounded-lg hover:bg-gray-50 transition border border-orange-200">
                  <p className="text-sm text-gray-600 mb-1">Telefono</p>
                  <p className="font-semibold text-gray-900">+39 338 111 0142</p>
                </a>
                <a href="mailto:gestricaterina@gmail.com" className="block text-center py-3 px-4 bg-white rounded-lg hover:bg-gray-50 transition border border-orange-200">
                  <p className="text-sm text-gray-600 mb-1">Email</p>
                  <p className="font-semibold text-gray-900 break-all text-sm">gestricaterina@gmail.com</p>
                </a>
              </div>
            </Card>

            {/* Altre specializzazioni */}
            <Card variant="default" className="p-6 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Altre specializzazioni</h3>
              <div className="space-y-3">
                <Link href="/servizi/psicoterapeuta-cbt" className="block text-orange-600 hover:text-orange-700 font-medium text-sm">
                  → CBT (Terapia Cognitivo-Comportamentale)
                </Link>
                <Link href="/servizi/psicoterapeuta-emdr" className="block text-orange-600 hover:text-orange-700 font-medium text-sm">
                  → EMDR (Trauma)
                </Link>
                <Link href="/servizi/psicoterapeuta-eft" className="block text-orange-600 hover:text-orange-700 font-medium text-sm">
                  → EFT (Terapia di Coppia)
                </Link>
              </div>
            </Card>
          </aside>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Domande Frequenti</h2>
          <div className="space-y-6">
            {[
              {
                q: 'La Schema Therapy è la stessa della CBT?',
                a: 'No. Mentre la Schema Therapy incorpora elementi della CBT, va molto più a fondo nel lavoro con i pattern radicati nell\'infanzia e utilizza tecniche esperienziali e relazionali che la CBT tradizionale non sempre include.',
              },
              {
                q: 'La Schema Therapy è dolorosa?',
                a: 'La Schema Therapy a volte implica affrontare emozioni difficili, ma è fatta in modo sicuro e controllato. Il terapeuta supporta sempre il paziente nel processo di guarigione.',
              },
              {
                q: 'Come distinguo se ho bisogno di Schema Therapy piuttosto che di CBT o EMDR?',
                a: 'Se i tuoi problemi sono profondamente radicati, persistenti nonostante altri trattamenti, o coinvolgono pattern relazionali ricorrenti, la Schema Therapy potrebbe essere la scelta giusta. In consulenza valuteremo insieme.',
              },
              {
                q: 'Posso fare Schema Therapy online?',
                a: 'Sì, anche se il contatto in studio è preferibile per il lavoro esperienziale intenso, la Schema Therapy online è comunque molto efficace.',
              },
            ].map((item, index) => (
              <Card key={index} variant="outline" className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trasforma i pattern profondamente radicati</h2>
          <p className="text-xl text-gray-600 mb-8">
            La Schema Therapy offre guarigione profonda per problematiche che persistono. Contattami per una
            consulenza personalizzata.
          </p>
          <Link href="/contatti">
            <Button size="lg">Richiedi una Consulenza</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
