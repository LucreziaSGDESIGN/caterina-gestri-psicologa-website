import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Psicoterapia CBT - Cognitive Behavioral Therapy | Caterina Gestri',
  description:
    'Scopri la Psicoterapia Cognitivo-Comportamentale (CBT). Efficace per ansia, depressione, fobie e disturbi emotivi. Approccio scientifico e provato.',
  openGraph: {
    title: 'Psicoterapia CBT - Cognitive Behavioral Therapy',
    description:
      'Trattamento scientifico per ansia, depressione e disturbi emotivi mediante la modificazione di pensieri e comportamenti.',
    type: 'website',
  },
}

export default function CBTPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="border-b border-gray-200 px-4 py-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-sm text-gray-600">
          <Link href="/servizi" className="hover:text-gray-900">
            Servizi
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">CBT - Terapia Cognitivo-Comportamentale</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Psicoterapia CBT
            <br />
            <span className="text-blue-600">Cognitive Behavioral Therapy</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            La Terapia Cognitivo-Comportamentale è un approccio psicoterapeutico scientifico e provato, fondato sul
            riconoscimento che i nostri pensieri, emozioni e comportamenti sono strettamente interconnessi.
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl">
            Modificando i modelli di pensiero disfunzionali e i comportamenti non adattivi, è possibile ottenere
            cambiamenti significativi nel benessere emotivo e nella qualità della vita.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="md:col-span-2 space-y-12">
            {/* Cos'è la CBT */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Cos'è la CBT?</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                La Terapia Cognitivo-Comportamentale (CBT) è un approccio psicoterapeutico basato su solide evidenze
                scientifiche. Si fonda sul principio che i nostri pensieri automatici influenzano direttamente le
                nostre emozioni e i nostri comportamenti.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Attraverso la CBT, impari a riconoscere i pensieri disfunzionali, a valutarli criticamente e a
                sostituirli con pensieri più realistici e utili. Contemporaneamente, lavoriamo sui comportamenti
                per creare nuovi modelli che supportano il tuo benessere.
              </p>
            </div>

            {/* Per chi è indicata */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Per chi è indicata?</h2>
              <div className="space-y-3">
                {[
                  'Disturbi d\'ansia (ansia generalizzata, attacchi di panico)',
                  'Depressione e disturbi dell\'umore',
                  'Fobie specifiche e agorafobia',
                  'Disturbi ossessivo-compulsivi (OCD)',
                  'Disturbi del sonno e insonnia',
                  'Bassa autostima e insicurezza',
                  'Gestione dello stress e burn-out',
                  'Problemi relazionali e comunicativi',
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Come funziona il processo terapeutico</h2>
              <div className="space-y-4">
                {[
                  {
                    phase: 'Fase 1: Assessment',
                    desc: 'Comprensione approfondita della problematica, della storia personale e degli obiettivi terapeutici.',
                  },
                  {
                    phase: 'Fase 2: Psicoeducazione',
                    desc: 'Spiegazione del modello cognitivo e di come i tuoi pensieri, emozioni e comportamenti sono interconnessi.',
                  },
                  {
                    phase: 'Fase 3: Identificazione dei pensieri disfunzionali',
                    desc: 'Apprendimento a riconoscere i pattern di pensiero automatico che mantengono il disagio.',
                  },
                  {
                    phase: 'Fase 4: Ristrutturazione cognitiva',
                    desc: 'Tecniche pratiche per sfidare e modificare i pensieri disfunzionali con pensieri più realistici.',
                  },
                  {
                    phase: 'Fase 5: Interventi comportamentali',
                    desc: 'Esercizi pratico-concreti per modificare i comportamenti non adattivi e creare nuove abitudini.',
                  },
                  {
                    phase: 'Fase 6: Consolidamento e prevenzione',
                    desc: 'Sviluppo di competenze per mantenere i progressi e prevenire ricadute.',
                  },
                ].map((item, index) => (
                  <Card key={index} variant="outline" className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{item.phase}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Vantaggi */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">I vantaggi della CBT</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Approccio scientifico e provato',
                  'Risultati visibili e misurabili',
                  'Breve durata (generalmente 8-20 sedute)',
                  'Competenze pratiche e trasferibili',
                  'Automonitoraggio e auto-aiuto',
                  'Ridotto rischio di ricadute',
                  'Applicabile a molteplici problematiche',
                  'Collaborazione attiva paziente-terapeuta',
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
                  <p className="text-gray-900 font-semibold">50 minuti</p>
                </div>
                <div>
                  <p className="text-gray-600 font-medium">Frequenza consigliata</p>
                  <p className="text-gray-900 font-semibold">Settimanale</p>
                </div>
                <div>
                  <p className="text-gray-600 font-medium">Durata media del trattamento</p>
                  <p className="text-gray-900 font-semibold">8-20 sedute</p>
                </div>
                <div>
                  <p className="text-gray-600 font-medium">Modalità</p>
                  <p className="text-gray-900 font-semibold">In studio o online</p>
                </div>
              </div>
            </Card>

            {/* CTA Card */}
            <Card variant="elevated" className="p-6 bg-gradient-to-b from-orange-50 to-white border border-orange-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Pronto a iniziare?</h3>
              <p className="text-gray-700 text-sm mb-6">
                Contattami per una consulenza gratuita e scopri come la CBT può aiutarti.
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

            {/* Specializzazioni */}
            <Card variant="default" className="p-6 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Altre specializzazioni</h3>
              <div className="space-y-3">
                <Link href="/servizi/psicoterapeuta-emdr" className="block text-orange-600 hover:text-orange-700 font-medium text-sm">
                  → EMDR (Trauma)
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Domande Frequenti</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Quanto tempo serve per vedere i risultati?',
                a: 'Molte persone notano miglioramenti significativi già dopo 4-6 sedute. I cambiamenti più duraturi richiedono generalmente 8-15 sedute.',
              },
              {
                q: 'La CBT è efficace per tutti i problemi?',
                a: 'La CBT è stata scientificamente provata per molte problematiche, soprattutto ansia e depressione. Non è la scelta giusta per tutti i casi, ma in fase di consulenza valuteremo insieme l\'approccio più adatto.',
              },
              {
                q: 'Devo fare i compiti tra una seduta e l\'altra?',
                a: 'Sì, i compiti assegnati sono una parte importante della terapia. Servono a mettere in pratica quello che hai imparato e a accelerare i progressi.',
              },
              {
                q: 'Posso fare CBT online?',
                a: 'Assolutamente sì. La CBT online è altrettanto efficace della CBT in studio. Offro entrambe le modalità in base alle tue preferenze.',
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Inizia il tuo percorso di cambiamento</h2>
          <p className="text-xl text-gray-600 mb-8">
            Una consulenza iniziale gratuita per comprendere come posso aiutarti
          </p>
          <Link href="/contatti">
            <Button size="lg">Richiedi una Consulenza</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
