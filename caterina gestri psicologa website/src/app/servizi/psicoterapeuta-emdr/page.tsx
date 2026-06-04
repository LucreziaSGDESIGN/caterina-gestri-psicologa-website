import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'EMDR - Eye Movement Desensitization and Reprocessing | Caterina Gestri',
  description:
    'Specializzata in EMDR per il trattamento del trauma e disturbi stress-correlati. Metodo scientificamente provato per superare esperienze traumatiche.',
  openGraph: {
    title: 'EMDR - Terapia del Trauma',
    description:
      'Trattamento specializzato per trauma, PTSD e disturbi stress-correlati mediante il metodo EMDR.',
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
            L'EMDR è un metodo psicoterapeutico riconosciuto a livello internazionale per il trattamento del trauma e
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
                L'EMDR è una psicoterapia che combina movimenti oculari bilaterali con il ricordo del trauma per facilitare l'elaborazione naturale del cervello. Riconosciuta dall'OMS e da principali associazioni internazionali come trattamento di prima linea per il PTSD.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Indicazioni</h2>
              <div className="space-y-3">
                {[
                  'Disturbo da stress post-traumatico (PTSD)',
                  'Trauma psicologico da esperienze dolorose',
                  'Attacchi di panico',
                  'Fobie specifiche',
                  'Lutto complicato',
                  'Ansia correlata a eventi traumatici',
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-orange-500 font-bold mr-3 mt-1">✓</span>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Come funziona</h2>
              <div className="space-y-4">
                {[
                  { phase: 'Fase 1: Anamnesi', desc: 'Valutazione della storia traumatica e preparazione alla terapia.' },
                  { phase: 'Fase 2: Preparazione', desc: 'Insegnamento di tecniche di stabilizzazione e autocontrollo.' },
                  { phase: 'Fase 3: Assessment', desc: 'Identificazione dell\'immagine, credenze e sensazioni associate al trauma.' },
                  { phase: 'Fase 4: Desensibilizzazione', desc: 'Movimenti oculari durante il ricordo del trauma per ridurre l\'ansia.' },
                  { phase: 'Fase 5: Installazione', desc: 'Rinforzo di credenze positive alternative.' },
                  { phase: 'Fase 6: Chiusura', desc: 'Consolidamento dei progressi e pianificazione del follow-up.' },
                ].map((item, index) => (
                  <Card key={index} variant="outline" className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{item.phase}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Vantaggi</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Efficacia provata scientificamente',
                  'Risultati rapidi',
                  'Non richiede descrizione dettagliata del trauma',
                  'Riduce i sintomi post-traumatici',
                  'Ideale per traumi complessi',
                  'Migliora la qualità della vita',
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
            <Card variant="elevated" className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Informazioni</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-gray-600 font-medium">Durata seduta</p>
                  <p className="text-gray-900 font-semibold">60-90 minuti</p>
                </div>
                <div>
                  <p className="text-gray-600 font-medium">Numero sedute</p>
                  <p className="text-gray-900 font-semibold">Variabile</p>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="p-6 bg-gradient-to-b from-orange-50 to-white border border-orange-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Contattami</h3>
              <p className="text-gray-700 text-sm mb-4">Specialista in trattamento del trauma.</p>
              <div className="space-y-2">
                <Link href="/contatti">
                  <Button className="w-full">Richiedi appuntamento</Button>
                </Link>
                <a href="tel:+393381110142" className="block text-center text-sm text-blue-600 hover:text-blue-700 font-semibold">
                  +39 338 111 0142
                </a>
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
                q: 'Quante sedute servono?',
                a: 'Dipende dalla natura e dalla complessità del trauma. Generalmente dai 4-12 sedute, ma alcuni traumi richiedono più tempo.',
              },
              {
                q: 'Mi farà rivivere il trauma?',
                a: 'No, non devi raccontare tutto. Ti aiuterò a processare il trauma in modo sicuro.',
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
          <p className="text-xl text-gray-600 mb-8">Consulenza gratuita per valutare come posso aiutarti</p>
          <Link href="/contatti">
            <Button size="lg">Richiedi Consulenza</Button>
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="md:col-span-2 space-y-12">
            {/* Cosa è EMDR */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Cos'è l'EMDR?</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                EMDR (Eye Movement Desensitization and Reprocessing) è un approccio psicoterapeutico che integra
                elementi di diverse terapie con l'uso di stimolazione bilaterale (solitamente movimenti oculari).
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Questo metodo è basato sulla scoperta scientifica che i movimenti oculari bilaterali durante la
                rievocazione di memorie traumatiche facilitano l'elaborazione e l'integrazione di queste esperienze
                nel cervello.
              </p>
              <p className="text-gray-700 leading-relaxed">
                L'EMDR è riconosciuto dall'Organizzazione Mondiale della Sanità (OMS) come trattamento efficace per il
                disturbo da stress post-traumatico (PTSD) e altri disturbi trauma-correlati.
              </p>
            </div>

            {/* Per chi è indicata */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Per chi è indicata?</h2>
              <div className="space-y-3">
                {[
                  'Disturbo da stress post-traumatico (PTSD)',
                  'Trauma complesso da esperienze multiple',
                  'Abuso emotivo, fisico o sessuale',
                  'Incidenti gravi o esperienze di pericolo di vita',
                  'Lutto e dolore non elaborato',
                  'Attacchi di panico legati a trauma',
                  'Ansia e fobie causate da eventi traumatici',
                  'Flashback e incubi ricorrenti',
                  'Senso di colpa e vergogna post-traumatica',
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-orange-500 font-bold mr-3 mt-1">✓</span>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Come funziona */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Le fasi dell'EMDR</h2>
              <div className="space-y-4">
                {[
                  {
                    phase: 'Fase 1 e 2: Storia e preparazione',
                    desc: 'Raccolta della storia personale, stabilizzazione e insegnamento di tecniche di coping.',
                  },
                  {
                    phase: 'Fase 3: Valutazione',
                    desc: 'Identificazione del ricordo traumatico target, delle immagini associate, delle credenze negative e delle emozioni.',
                  },
                  {
                    phase: 'Fase 4: Desensibilizzazione',
                    desc: 'Rievocazione del ricordo traumatico con stimolazione bilaterale (movimenti oculari) per ridurre la carica emotiva.',
                  },
                  {
                    phase: 'Fase 5: Installazione',
                    desc: 'Rafforzamento di credenze positive associate al ricordo elaborato.',
                  },
                  {
                    phase: 'Fase 6: Valutazione del corpo',
                    desc: 'Verifica dell\'assenza di tensioni fisiche residue associate al trauma.',
                  },
                  {
                    phase: 'Fase 7 e 8: Chiusura e rivalutazione',
                    desc: 'Conclusione della seduta e monitoraggio dei progressi nel tempo.',
                  },
                ].map((item, index) => (
                  <Card key={index} variant="outline" className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{item.phase}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Efficacia */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Efficacia scientificamente provata</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
                <p className="text-gray-700">
                  L'EMDR è stato riconosciuto come trattamento di prima scelta per il PTSD da:
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    'Organizzazione Mondiale della Sanità (OMS)',
                    'National Institute of Mental Health (NIMH)',
                    'American Psychiatric Association',
                    'International Society for EMDR Therapists',
                  ].map((org, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-blue-600 mr-2">●</span>
                      {org}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-gray-700">
                Gli studi dimostrano che il 90% dei pazienti con PTSD monotraumatico non presenta più i sintomi della
                diagnosi dopo 6 sedute di EMDR.
              </p>
            </div>

            {/* Vantaggi */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">I vantaggi dell'EMDR</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Trattamento rapido ed efficace',
                  'Riduce i sintomi del trauma',
                  'Non richiede di parlare dettagliatamente del trauma',
                  'Facilita l\'elaborazione emotiva profonda',
                  'Basso rischio di effetti collaterali',
                  'Riconosciuto a livello internazionale',
                  'Migliora il benessere complessivo',
                  'Previene la rievocazione spontanea del trauma',
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
            {/* Info Card */}
            <Card variant="elevated" className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Informazioni Rapide</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-gray-600 font-medium">Durata delle sedute</p>
                  <p className="text-gray-900 font-semibold">50-90 minuti</p>
                </div>
                <div>
                  <p className="text-gray-600 font-medium">Frequenza consigliata</p>
                  <p className="text-gray-900 font-semibold">Settimanale o bisettimanale</p>
                </div>
                <div>
                  <p className="text-gray-600 font-medium">Durata media del trattamento</p>
                  <p className="text-gray-900 font-semibold">6-12 sedute</p>
                </div>
                <div>
                  <p className="text-gray-600 font-medium">Modalità</p>
                  <p className="text-gray-900 font-semibold">In studio (preferibile)</p>
                </div>
              </div>
            </Card>

            {/* Certificazioni */}
            <Card variant="default" className="p-6 bg-orange-50 border border-orange-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Certificazione EMDR</h3>
              <p className="text-sm text-gray-700 mb-4">
                Sono terapeuta EMDR certificata con formazione completa e continuo aggiornamento secondo gli standard
                internazionali EABCT.
              </p>
              <a
                href="https://www.emdr-italia.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700 font-medium text-sm"
              >
                → Associazione EMDR Italia
              </a>
            </Card>

            {/* CTA Card */}
            <Card variant="elevated" className="p-6 bg-gradient-to-b from-orange-50 to-white border border-orange-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Desideri guarire dal trauma?</h3>
              <p className="text-gray-700 text-sm mb-6">
                Contattami per una consulenza specializzata in EMDR e scopri come posso aiutarti.
              </p>
              <div className="space-y-3">
                <Link href="/contatti">
                  <Button className="w-full">Contattami</Button>
                </Link>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <span>Oppure chiama:</span>
                  <a href="tel:+393381110142" className="font-semibold text-blue-600 hover:text-blue-700">
                    +39 338 111 0142
                  </a>
                </div>
              </div>
            </Card>

            {/* Altre specializzazioni */}
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

      {/* FAQ Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Domande Frequenti sull'EMDR</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Come funzionano i movimenti oculari?',
                a: 'I movimenti oculari bilaterali stimolano entrambi gli emisferi cerebrali, facilitando l\'elaborazione della memoria traumatica. Questo processo è simile a quello che accade naturalmente durante il sonno REM, quando il cervello elabora le esperienze del giorno.',
              },
              {
                q: 'Devo raccontare i dettagli del trauma?',
                a: 'No. L\'EMDR non richiede di rivivere o descrivere dettagliatamente il trauma. Questo la rende particolarmente adatta a chi ha difficoltà a parlare dell\'evento.',
              },
              {
                q: 'Quanto rapidamente vedrò i risultati?',
                a: 'Molte persone notano miglioramenti significativi già dopo le prime 2-3 sedute. Per traumi più complessi, il trattamento può richiedere 8-12 sedute.',
              },
              {
                q: 'L\'EMDR funziona per tutti?',
                a: 'L\'EMDR è molto efficace, ma l\'efficacia può variare a seconda della gravità del trauma e dei fattori personali. In consulenza valuteremo se è l\'approccio più adatto per te.',
              },
              {
                q: 'Posso fare EMDR online?',
                a: 'Sebbene l\'EMDR sia preferibilmente svolto in studio, sono disponibile per consultazioni preliminari online. Le sedute di trattamento vero e proprio vengono solitamente effettuate in presenza.',
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Inizia il tuo percorso di guarigione</h2>
          <p className="text-xl text-gray-600 mb-8">
            Con l'EMDR, il superamento del trauma è possibile. Contattami per una prima consulenza gratuita.
          </p>
          <Link href="/contatti">
            <Button size="lg">Richiedi una Consulenza EMDR</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
