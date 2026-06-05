import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - Caterina Gestri',
  description: 'Informativa sull\'utilizzo dei cookie sul sito',
}

export default function CookiePolicy() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-header">Cookie Policy</h1>
          <p className="text-xl text-neutral-600">
            Informativa sull'utilizzo dei cookie sul nostro sito
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Intro */}
          <div>
            <p className="text-neutral-600 mb-4">
              Ultimo aggiornamento: Giugno 2026
            </p>
            <p className="text-neutral-600">
              Questo sito web di Caterina Gestri utilizza i cookie per migliorare l'esperienza di navigazione. I cookie sono piccoli file di testo memorizzati sul tuo dispositivo che aiutano il sito a ricordarti e a funzionare correttamente.
            </p>
          </div>

          {/* 1. Cosa sono i Cookie */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Cosa Sono i Cookie?</h2>
            <p className="text-neutral-600 mb-4">
              I cookie sono piccoli file di testo memorizzati sul tuo browser o dispositivo. Vengono utilizzati per:
            </p>
            <ul className="space-y-2 text-neutral-600">
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Ricordare le tue preferenze di navigazione</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Analizzare come utilizzi il sito (analytics anonimizzate)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Migliorare le prestazioni del sito</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Fornire una migliore esperienza utente</span>
              </li>
            </ul>
          </div>

          {/* 2. Tipi di Cookie */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Tipi di Cookie Utilizzati</h2>
            <p className="text-neutral-600 mb-6">
              Sul nostro sito utilizziamo i seguenti tipi di cookie:
            </p>

            <div className="space-y-6">
              {/* Essenziali */}
              <div className="p-6 border border-neutral-200 rounded-lg bg-neutral-50">
                <h3 className="text-lg font-bold text-neutral-900 mb-3">Cookie Essenziali (Necessari)</h3>
                <p className="text-neutral-600 mb-3">
                  Sono strettamente necessari per il funzionamento del sito e non richiedono consenso.
                </p>
                <ul className="space-y-2 text-neutral-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span><strong>Sessione:</strong> Mantengono la tua sessione attiva</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span><strong>Sicurezza:</strong> Proteggono il sito da attacchi</span>
                  </li>
                </ul>
              </div>

              {/* Analitici */}
              <div className="p-6 border border-neutral-200 rounded-lg bg-neutral-50">
                <h3 className="text-lg font-bold text-neutral-900 mb-3">Cookie Analitici</h3>
                <p className="text-neutral-600 mb-3">
                  Ci aiutano a capire come i visitatori utilizzano il sito. Richiedono il tuo consenso.
                </p>
                <ul className="space-y-2 text-neutral-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span><strong>Google Analytics:</strong> Statistiche di navigazione anonimizzate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span><strong>Durata:</strong> Solitamente 2 anni</span>
                  </li>
                </ul>
              </div>

              {/* Preferenze */}
              <div className="p-6 border border-neutral-200 rounded-lg bg-neutral-50">
                <h3 className="text-lg font-bold text-neutral-900 mb-3">Cookie di Preferenza</h3>
                <p className="text-neutral-600 mb-3">
                  Memorizzano le tue scelte e preferenze di navigazione.
                </p>
                <ul className="space-y-2 text-neutral-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Modalità scura/chiara (se implementata)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Lingua preferita</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. Cookie di Terze Parti */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Cookie di Terze Parti</h2>
            <p className="text-neutral-600 mb-4">
              Il sito può contenere elementi di terze parti (come video, mappe, plug-in) che possono impostare i propri cookie. Non controlliamo direttamente questi cookie. I provider di terze parti includono:
            </p>
            <ul className="space-y-2 text-neutral-600">
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span><strong>Google Analytics:</strong> Per l'analisi del traffico</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span><strong>Piattaforme di comunicazione:</strong> Per i bottoni di contatto</span>
              </li>
            </ul>
          </div>

          {/* 4. Come Gestire i Cookie */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Come Gestire i Cookie</h2>
            <p className="text-neutral-600 mb-4">
              Puoi controllare e gestire i cookie tramite le impostazioni del tuo browser:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Google Chrome</h3>
                <p className="text-sm text-neutral-600">Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Firefox</h3>
                <p className="text-sm text-neutral-600">Impostazioni → Privacy e sicurezza → Cookie e dati dei siti</p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Safari</h3>
                <p className="text-sm text-neutral-600">Preferenze → Privacy → Gestisci dati siti web</p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Edge</h3>
                <p className="text-sm text-neutral-600">Impostazioni → Privacy, ricerca e servizi → Cookie e altri dati dei siti</p>
              </div>
            </div>

            <p className="text-neutral-600 mt-6 text-sm">
              <strong>Nota:</strong> Se disabiliti i cookie essenziali, alcune funzionalità del sito potrebbero non funzionare correttamente.
            </p>
          </div>

          {/* 5. Cookie Non Traccianti */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Rispetto del Do Not Track</h2>
            <p className="text-neutral-600">
              Il nostro sito rispetta le preferenze Do Not Track (DNT) del tuo browser. Se hai abilitato DNT, non utilizzeremo cookie di tracciamento o analytics personalizzati.
            </p>
          </div>

          {/* 6. Consenso */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Consenso e Consenso Esplicito</h2>
            <p className="text-neutral-600 mb-4">
              La tua privacy è importante per noi. Cuando visiti il sito per la prima volta:
            </p>
            <ul className="space-y-2 text-neutral-600">
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Ti chiediamo il consenso per i cookie non essenziali</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Puoi accettare tutti i cookie o personalizzare le tue preferenze</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Puoi cambiare le tue preferenze in qualsiasi momento</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Il tuo consenso viene memorizzato e rispettato</span>
              </li>
            </ul>
          </div>

          {/* 7. Sicurezza */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Sicurezza dei Cookie</h2>
            <p className="text-neutral-600 mb-4">
              I cookie non contengono dati sensibili come:
            </p>
            <ul className="space-y-2 text-neutral-600">
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Password o credenziali</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Numeri di carte di credito</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Dati clinici o informazioni mediche</span>
              </li>
            </ul>
          </div>

          {/* 8. Contatti */}
          <div className="bg-accent-50 p-8 rounded-lg border border-accent-200">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Per Domande sui Cookie</h2>
            <p className="text-neutral-600 mb-6">
              Se hai domande sulla nostra política sui cookie:
            </p>
            <div className="space-y-2 text-neutral-700">
              <p><strong>Email:</strong> <a href="mailto:gestricaterina@gmail.com" className="text-primary-600 hover:text-primary-700">gestricaterina@gmail.com</a></p>
              <p><strong>Telefono:</strong> <a href="tel:+393381110142" className="text-primary-600 hover:text-primary-700">+39 338 111 0142</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
