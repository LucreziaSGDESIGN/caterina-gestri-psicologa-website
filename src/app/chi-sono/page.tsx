import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Chi è Caterina Gestri | Psicologa Psicoterapeuta Toscana - EMDR',
  description: 'Caterina Gestri - Psicologa Psicoterapeuta specializzata in EMDR, trauma e dissociazione. Esercita a Prato (Toscana) e online. Iscritta Ordine Psicologi della Toscana.',
  keywords: 'Caterina Gestri, psicologa Prato, psicoterapeuta Toscana, EMDR, trauma, dissociazione, terapeuta Prato',
  openGraph: {
    title: 'Caterina Gestri - Psicologa Psicoterapeuta',
    description: 'Specializzata in EMDR per il trattamento del trauma e dissociazione. Disponibile a Prato (Toscana) e online.',
    type: 'profile',
  },
}

export default function ChiSono() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-header">Chi Sono</h1>
          <p className="text-xl text-neutral-600">
            Credo che ogni persona possieda le risorse necessarie per affrontare il cambiamento e ritrovare il proprio benessere. Come psicologa e psicoterapeuta, accompagno i miei pazienti in un percorso di consapevolezza, crescita e trasformazione, offrendo uno spazio sicuro in cui sentirsi ascoltati, accolti e compresi.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="sticky top-8">
                <div className="relative h-80 mb-8 rounded-lg overflow-hidden">
                  <Image
                    src="/images/caterina-gestri.png"
                    alt="Caterina Gestri - Psicologa Psicoterapeuta"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-white border border-neutral-200 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4 text-neutral-900">Credenziali</h3>
                  <ul className="space-y-3 text-sm text-neutral-700">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">✓</span>
                      <span><strong>Ordine Psicologi della Toscana</strong> n.4947</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">✓</span>
                      <span><strong>AIAMC</strong> - Associazione Italiana di Analisi e Modificazione del Comportamento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">✓</span>
                      <span><strong>EABCT</strong> - European Association for Behavioural and Cognitive Therapies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">✓</span>
                      <span><strong>EMDR Italia</strong> - International Society for the Study of Trauma and Dissociation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">✓</span>
                      <span><strong>ICEEFT</strong> - International Centre for Excellence in Emotionally Focused Therapy (Socio Fondatore)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Text */}
            <div className="md:col-span-3 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">La Mia Formazione</h2>
                <p className="text-neutral-600 mb-4">
                  Ho completato la laurea magistrale in Psicologia Clinica e della Salute con una tesi di ricerca focalizzata sulla psicoterapia cognitivo-comportamentale. Successivamente ho ottenuto l'abilitazione alla professione di psicologa e psicoterapeuta.
                </p>
                <p className="text-neutral-600 mb-4">
                  Ho sviluppato una formazione avanzata specializzata in:
                </p>
                <ul className="space-y-2 text-neutral-600 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span><strong>EMDR Practitioner</strong> - accreditamento specializzato nel trattamento del trauma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span><strong>EMDR Supervisore</strong> - formazione avanzata per la supervisione clinica</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">EMDR: Riconoscimento Internazionale</h2>
                <p className="text-neutral-600 mb-4">
                  L'EMDR è un approccio che utilizza tecniche specializzate nel trattamento del trauma, riconosciuto scientificamente a livello internazionale. Nel 2011, l'Amministrazione per l'Abuso di Sostanze e Servizi di Sanità Mentale degli Stati Uniti (SAMHSA) ha riconosciuto questo approccio tra i trattamenti più empiricamente validati ed efficaci nel trattamento dell'ansia, della depressione e del PTSD.
                </p>
                <p className="text-neutral-600 mb-4">
                  Dal 2013, è incluso nelle raccomandazioni dell'OMS come approccio di elezione per il trattamento del Disturbo da Stress Post-Traumatico (PTSD) nei bambini, adolescenti e adulti. Questo riconoscimento è basato su circa 24 studi clinici randomizzati che documentano l'efficacia nel trattamento del trauma.
                </p>
                <p className="text-neutral-600">
                  L'applicazione corretta di questo approccio richiede rigore e formazione continua per garantire i migliori risultati terapeutici.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Il Mio Approccio</h2>
                <p className="text-neutral-600 mb-4">
                  Ogni persona porta con sé una storia, esperienze e bisogni unici. Per questo motivo, costruisco percorsi terapeutici personalizzati, adattando il lavoro clinico agli obiettivi e alle caratteristiche di ciascun individuo.
                </p>
                <p className="text-neutral-600 mb-4">
                  Il mio approccio integra accoglienza e rigore professionale, attraverso metodologie supportate dall'evidenza scientifica. Insieme lavoreremo per comprendere ciò che genera sofferenza, valorizzare le tue risorse e promuovere cambiamenti concreti e duraturi.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Specializzazioni e Problematiche che Tratto</h2>
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-4 border border-neutral-200 rounded-lg">
                    <h3 className="font-bold text-primary-600 mb-2">Disturbi d'Ansia</h3>
                    <p className="text-sm text-neutral-600">Ansia generalizzata, attacchi di panico, fobie, disturbo ossessivo-compulsivo</p>
                  </div>
                  <div className="p-4 border border-neutral-200 rounded-lg">
                    <h3 className="font-bold text-primary-600 mb-2">Depressione e Umore</h3>
                    <p className="text-sm text-neutral-600">Depressione maggiore, distimia, disturbo bipolare II</p>
                  </div>
                  <div className="p-4 border border-neutral-200 rounded-lg">
                    <h3 className="font-bold text-primary-600 mb-2">Trauma, PTSD e Dissociazione</h3>
                    <p className="text-sm text-neutral-600">Trauma psicologico, PTSD, traumi complessi, dissociazione, traumi sviluppali</p>
                  </div>
                  <div className="p-4 border border-neutral-200 rounded-lg">
                    <h3 className="font-bold text-primary-600 mb-2">Difficoltà Relazionali</h3>
                    <p className="text-sm text-neutral-600">Conflitti di coppia, comunicazione, intimità, tradimento</p>
                  </div>
                  <div className="p-4 border border-neutral-200 rounded-lg">
                    <h3 className="font-bold text-primary-600 mb-2">Autostima e Autoefficacia</h3>
                    <p className="text-sm text-neutral-600">Bassa autostima, impotenza appresa, blocchi personali</p>
                  </div>
                  <div className="p-4 border border-neutral-200 rounded-lg">
                    <h3 className="font-bold text-primary-600 mb-2">Pattern Comportamentali</h3>
                    <p className="text-sm text-neutral-600">Dipendenze comportamentali, procrastinazione, perfezionismo</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Dove Ricevo</h2>
                <p className="text-neutral-600 mb-4">
                  Offro sedute <strong>in presenza</strong> presso studio professionale e <strong>online via videochiamata</strong> con la massima riservatezza e professionalità.
                </p>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">📍</span>
                    <span><strong>Prato (Toscana)</strong> - Centro Città</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">💻</span>
                    <span><strong>Online</strong> - Disponibile da qualsiasi luogo</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Come Contattarmi - Full Width Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-accent-50 to-primary-50 border-t border-accent-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Come Contattarmi</h2>
          <p className="text-lg text-neutral-700 mb-12">
            Se desideri iniziare un percorso di psicoterapia, contattami per una consulenza iniziale.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Phone */}
            <div className="bg-white p-8 rounded-lg border border-accent-300 shadow-sm">
              <p className="text-sm font-semibold text-neutral-600 uppercase tracking-wide mb-4">Telefono</p>
              <p className="text-4xl font-bold text-neutral-900 mb-3 whitespace-nowrap">+39 338 111 0142</p>
              <p className="text-neutral-600">Contattami via telefono per fissare una consulenza</p>
            </div>

            {/* Email */}
            <div className="bg-white p-8 rounded-lg border border-accent-300 shadow-sm">
              <p className="text-sm font-semibold text-neutral-600 uppercase tracking-wide mb-4">Email</p>
              <p className="text-2xl font-bold text-neutral-900 mb-3">gestricaterina@gmail.com</p>
              <p className="text-neutral-600">Per informazioni generali puoi scrivere una email</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
