import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Chi Sono - Caterina Gestri',
  description: 'Caterina Gestri è una psicologa-psicoterapeuta specializzata in CBT, EMDR, EFT e Schema Therapy. Iscritta Ordine Psicologi Toscana n.4947',
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
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
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

            {/* Contact Box */}
            <div className="bg-accent-50 p-8 rounded-lg border border-accent-200 mt-8">
              <h2 className="text-xl font-bold text-neutral-900 mb-6">Come Contattarmi</h2>
              <p className="text-neutral-600 mb-6">
                Se desideri iniziare un percorso di psicoterapia, contattami per una consulenza iniziale.
              </p>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-neutral-600 mb-2 font-semibold">TELEFONO (per prendere appuntamento)</p>
                  <p className="text-2xl font-bold text-neutral-900">+39 338 111 0142</p>
                  <p className="text-xs text-neutral-600 mt-2">Contattami via telefono per fissare una consulenza</p>
                </div>
                <div className="border-t border-accent-200 pt-4">
                  <p className="text-sm text-neutral-600 mb-2 font-semibold">EMAIL</p>
                  <p className="text-lg text-neutral-900 break-all">gestricaterina@gmail.com</p>
                  <p className="text-xs text-neutral-600 mt-2">Per informazioni generali puoi scrivere una email</p>
                </div>
              </div>
            </div>

            {/* Main Text */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">La Mia Formazione</h2>
                <p className="text-neutral-600 mb-4">
                  Ho completato la laurea magistrale in Psicologia Clinica e della Salute con una tesi di ricerca focalizzata sulla psicoterapia cognitivo-comportamentale. Successivamente ho ottenuto l'abilitazione alla professione di psicologa e psicoterapeuta.
                </p>
                <p className="text-neutral-600 mb-4">
                  La mia formazione continua mi ha portato ad approfondire diverse tecniche psicoterapeutiche riconosciute internazionalmente come evidence-based, incluse:
                </p>
                <ul className="space-y-2 text-neutral-600 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span><strong>EMDR (Eye Movement Desensitization and Reprocessing)</strong> - specializzazione nel trattamento del trauma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span><strong>EFT (Emotionally Focused Therapy)</strong> - terapia focalizzata sulle emozioni per le coppie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span><strong>Schema Therapy</strong> - integrazione di diversi approcci terapeutici</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span><strong>Valutazione Neuropsicologica</strong> - per lo studio delle funzioni cognitive</span>
                  </li>
                </ul>
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
                    <h3 className="font-bold text-primary-600 mb-2">Trauma e PTSD</h3>
                    <p className="text-sm text-neutral-600">Trauma psicologico, disturbo da stress post-traumatico, traumi sviluppali</p>
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
    </>
  )
}
