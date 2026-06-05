import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'EMDR Terapia del Trauma - Caterina Gestri | Prato (Toscana)',
  description:
    'EMDR (Eye Movement Desensitization and Reprocessing) - Specializzata nel trattamento del trauma, PTSD e dissociazione. Metodo scientificamente provato. Prato (Toscana) e online.',
  keywords: 'EMDR, terapia del trauma, PTSD, EMDR Prato, trauma terapia, dissociazione, psicoterapeuta specializzata, Eye Movement Desensitization',
  openGraph: {
    title: 'EMDR - Terapia del Trauma | Caterina Gestri',
    description:
      'Trattamento specializzato per trauma, PTSD e dissociazione con metodo EMDR riconosciuto internazionalmente.',
    type: 'website',
  },
}

export default function EMDRPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="border-b border-gray-200 px-4 py-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-sm text-gray-600">
          <Link href="/servizi" className="hover:text-gray-900">
            Servizi
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">EMDR - Eye Movement Desensitization and Reprocessing</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            EMDR
            <br />
            <span className="text-blue-600">Eye Movement Desensitization and Reprocessing</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            L'EMDR è un approccio specializzato riconosciuto a livello internazionale per il trattamento del trauma e
            dei disturbi stress-correlati. Uno dei trattamenti più efficaci per superare esperienze traumatiche.
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl">
            Mediante movimenti oculari bilaterali, l'EMDR facilita l'elaborazione del trauma e la riduzione dei
            sintomi legati a esperienze dolorose passate.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Cos'è l'EMDR?</h2>
              <p className="text-gray-700 mb-4">
                L'EMDR è un approccio che utilizza tecniche specializzate, combinando movimenti oculari bilaterali con il ricordo del trauma per facilitare l'elaborazione naturale del cervello. Riconosciuto dall'OMS e da principali associazioni internazionali come trattamento di prima linea per il PTSD.
              </p>
              <p className="text-gray-700">
                Il metodo è basato sulla scoperta scientifica che i movimenti oculari bilaterali durante la rievocazione di memorie traumatiche facilitano l'elaborazione e l'integrazione di queste esperienze nel cervello.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Vantaggi dell'EMDR</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Efficacia provata scientificamente',
                  'Risultati significativi',
                  'Non richiede descrizione dettagliata del trauma',
                  'Riduce i sintomi post-traumatici',
                  'Ideale per traumi complessi',
                  'Migliora la qualità della vita',
                  'Riconosciuto internazionalmente',
                  'Basso rischio di effetti collaterali',
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-orange-500 text-xl mr-3">●</span>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
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

            <Card variant="default" className="p-6 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Altre specializzazioni</h3>
              <div className="space-y-3">
                <Link href="/servizi/psicoterapeuta-cbt" className="block text-orange-600 hover:text-orange-700 font-medium text-sm">
                  → CBT (Terapia Cognitivo-Comportamentale)
                </Link>
                <Link href="/servizi/psicoterapeuta-eft" className="block text-orange-600 hover:text-orange-700 font-medium text-sm">
                  → EFT (Terapia di Coppia)
                </Link>
                <Link href="/servizi/psicoterapeuta-schema-therapy" className="block text-orange-600 hover:text-orange-700 font-medium text-sm">
                  → Schema Therapy
                </Link>
              </div>
            </Card>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Domande Frequenti</h2>
          <div className="space-y-6">
            {[
              {
                q: 'I movimenti oculari fanno male?',
                a: 'No, sono completamente sicuri e indolori. Sono simili a quelli che fanno naturalmente gli occhi.',
              },
              {
                q: 'Mi farà rivivere il trauma?',
                a: 'No, non devi raccontare tutto. Ti aiuterò a processare il trauma in modo sicuro.',
              },
              {
                q: 'Devo raccontare i dettagli del trauma?',
                a: 'No. L\'EMDR non richiede di rivivere o descrivere dettagliatamente il trauma. Questo la rende particolarmente adatta a chi ha difficoltà a parlare dell\'evento.',
              },
              {
                q: 'L\'EMDR funziona per tutti?',
                a: 'L\'EMDR è molto efficace, ma l\'efficacia può variare a seconda della gravità del trauma e dei fattori personali. In consulenza valuteremo se è l\'approccio più adatto per te.',
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Superare il Trauma</h2>
          <p className="text-xl text-gray-600 mb-8">
            Consulenza gratuita per valutare come posso aiutarti con il metodo EMDR
          </p>
          <Link href="/contatti">
            <Button size="lg">Richiedi Consulenza</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
