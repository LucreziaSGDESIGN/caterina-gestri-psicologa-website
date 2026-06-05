import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'EFT - Emotionally Focused Therapy per Coppie | Caterina Gestri',
  description:
    'Specializzata in EFT per migliorare la relazione di coppia. Metodo efficace per intimità emotiva, comunicazione e riconciliazione.',
  openGraph: {
    title: 'EFT - Terapia Focalizzata sulle Emozioni',
    description:
      'Terapia di coppia specializzata per migliorare la connessione emotiva e risolvere conflitti relazionali.',
    type: 'website',
  },
}

export default function EFTPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="border-b border-gray-200 px-4 py-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-sm text-gray-600">
          <Link href="/servizi" className="hover:text-gray-900">
            Servizi
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">EFT - Emotionally Focused Therapy</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            EFT
            <br />
            <span className="text-blue-600">Emotionally Focused Therapy</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            L'EFT è una forma di terapia di coppia basata sull'attaccamento emotivo e sulla creazione di una
            connessione emotiva profonda tra i partner.
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl">
            Attraverso l'EFT, le coppie imparano a comprendere i propri modelli di interazione, a comunicare
            autenticamente e a ricostruire l'intimità emotiva della loro relazione.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="md:col-span-2 space-y-12">
            {/* Cos'è l'EFT */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Cos'è l'EFT?</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                L'EFT (Emotionally Focused Therapy) è un approccio psicoterapeutico brevettato sviluppato da Sue
                Johnson, specializzato nel trattamento dei conflitti relazionali e nei problemi di coppia.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                L'EFT si basa sulla teoria dell'attaccamento, riconoscendo che le relazioni romantiche sono
                fondamentali per il benessere emotivo e che i conflitti di coppia spesso riflettono bisogni emotivi
                insoddisfatti.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nel percorso EFT, imparate a identificare i vostri cicli negativi di interazione, a comunicare i vostri
                bisogni emotivi e a ricostruire la sicurezza e l'intimità nella relazione.
              </p>
            </div>



            {/* Risultati */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cosa cambia con l'EFT</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Comprensione dei bisogni emotivi',
                  'Comunicazione più consapevole e autentica',
                  'Rottura dei cicli negativi',
                  'Ricondizione dell\'intimità emotiva',
                  'Maggiore sicurezza relazionale',
                  'Risoluzione del tradimento',
                  'Connessione più profonda',
                  'Sessualità consapevole',
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-orange-500 text-xl mr-3">●</span>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Efficacia */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Efficacia dell'EFT</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-gray-700 mb-3">
                  L'EFT è uno degli approcci di terapia di coppia più studiati e ricercati:
                </p>
                <ul className="space-y-2">
                  {[
                    '70-80% delle coppie raggiunge una significativa miglioramento',
                    'Il 50-60% raggiunge una completa riconciliazione',
                    'I benefici si mantengono nel tempo (follow-up di 2 anni)',
                    'Riconosciuto come evidenza-based therapy da APA',
                  ].map((fact, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-blue-600 mr-2">●</span>
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="space-y-6">

            {/* Certificazione */}
            <Card variant="default" className="p-6 bg-orange-50 border border-orange-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Certificazione EFT</h3>
              <p className="text-sm text-gray-700 mb-4">
                Sono terapeuta EFT certificata con formazione specializzata secondo gli standard ICEEFT (International
                Centre for Excellence in Emotionally Focused Therapy). Sono inoltre Socio Fondatore dell'ICEEFT.
              </p>
              <a
                href="https://iceeft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700 font-medium text-sm"
              >
                → ICEEFT International
              </a>
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
                <Link href="/servizi/psicoterapeuta-schema-therapy" className="block text-orange-600 hover:text-orange-700 font-medium text-sm">
                  → Schema Therapy
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
                q: 'Cosa succede se la mia partner/il mio partner non vuole venire?',
                a: 'Idealmente l\'EFT funziona meglio con entrambi i partner presenti. Tuttavia, posso offrire "terapia individuale nel contesto della coppia" dove lavoriamo su come cambiare il ciclo della relazione.',
              },
              {
                q: 'Possiamo farci del male durante la terapia?',
                a: 'No. L\'EFT crea un ambiente sicuro dove i conflitti vengono processati in modo produttivo. Non incoraggiamo i litigi, ma piuttosto la comprensione emotiva.',
              },
              {
                q: 'L\'EFT funziona se abbiamo tradimento o infedeltà?',
                a: 'Sì, l\'EFT è molto efficace nel recupero dopo tradimento. Aiuta entrambi i partner a elaborare il dolore e a ricostruire la fiducia.',
              },
              {
                q: 'Possiamo fare EFT online?',
                a: 'Sì, l\'EFT online è efficace. Sebbene la presenza fisica sia ideale, molte coppie beneficiano della comodità di farla da casa.',
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">La vostra relazione merita attenzione</h2>
          <p className="text-xl text-gray-600 mb-8">
            Con l'EFT, molte coppie riscopre amore, intimità e connessione. Contattami per una consulenza iniziale.
          </p>
          <Link href="/contatti">
            <Button size="lg">Richiedi una Consulenza EFT</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
