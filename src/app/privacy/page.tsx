import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Caterina Gestri',
  description: 'Informativa sulla privacy e protezione dei dati personali',
}

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-header">Privacy Policy</h1>
          <p className="text-xl text-neutral-600">
            Informativa sulla privacy e protezione dei dati personali secondo il GDPR
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
              Caterina Gestri (di seguito "Titolare") tratta i dati personali in conformità al Regolamento (UE) 2016/679 (GDPR) e alla legislazione italiana sulla protezione dei dati personali. Questa informativa descrive come e perché vengono raccolti, utilizzati e protetti i tuoi dati.
            </p>
          </div>

          {/* 1. Titolare del Trattamento */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Titolare del Trattamento</h2>
            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
              <p className="text-neutral-700 mb-2"><strong>Nome:</strong> Caterina Gestri</p>
              <p className="text-neutral-700 mb-2"><strong>Ordine Psicologi della Toscana:</strong> n.4947</p>
              <p className="text-neutral-700 mb-2"><strong>Email:</strong> gestricaterina@gmail.com</p>
              <p className="text-neutral-700"><strong>Telefono:</strong> +39 338 111 0142</p>
            </div>
          </div>

          {/* 2. Dati Trattati */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Dati Personali Trattati</h2>
            <p className="text-neutral-600 mb-4">
              Nel corso della nostra relazione professionale e attraverso il sito web, trattiamo i seguenti dati:
            </p>
            <ul className="space-y-2 text-neutral-600">
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span><strong>Dati Identificativi:</strong> Nome, cognome, indirizzo, telefono, email</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span><strong>Dati Clinici/Sanitari:</strong> Informazioni sulla tua salute mentale, storia clinica, diagnosi e trattamenti (raccolti solo durante il percorso terapeutico)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span><strong>Dati di Comunicazione:</strong> Messaggi, email, note durante le sedute</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span><strong>Dati Tecnici:</strong> Indirizzo IP, tipo di browser, cronologia di navigazione (solo tramite cookie)</span>
              </li>
            </ul>
          </div>

          {/* 3. Base Giuridica */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Base Giuridica del Trattamento</h2>
            <p className="text-neutral-600 mb-4">
              I tuoi dati vengono trattati sulla base delle seguenti basi giuridiche:
            </p>
            <ul className="space-y-2 text-neutral-600">
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span><strong>Esecuzione del contratto:</strong> Dati necessari per erogare il servizio psicoterapeutico</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span><strong>Adempimento obblighi legali:</strong> Conservazione della documentazione clinica secondo norme professionali</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span><strong>Consenso esplicito:</strong> Per il trattamento di dati particolari e marketing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span><strong>Interesse legittimo:</strong> Per migliorare il servizio e comunicazioni amministrative</span>
              </li>
            </ul>
          </div>

          {/* 4. Finalità */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Finalità del Trattamento</h2>
            <p className="text-neutral-600 mb-4">
              I dati vengono trattati per le seguenti finalità:
            </p>
            <ul className="space-y-3 text-neutral-600">
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Erogazione dei servizi di psicoterapia</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Gestione degli appuntamenti e comunicazioni relative</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Mantenimento della documentazione clinica</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Comunicazioni amministrative e fatturazione</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Rispetto di obblighi legali e deontologici</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Analisi anonimizzate per migliorare i servizi</span>
              </li>
            </ul>
          </div>

          {/* 5. Destinatari */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Destinatari dei Dati</h2>
            <p className="text-neutral-600 mb-4">
              I tuoi dati possono essere condivisi con:
            </p>
            <ul className="space-y-3 text-neutral-600">
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span><strong>Professionisti sanitari:</strong> Solo se necessario per il tuo percorso terapeutico e con tuo consenso</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span><strong>Autorità competenti:</strong> Se richiesto dalla legge</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span><strong>Fornitori di servizi:</strong> Piattaforme di videochiamata, email, cloud storage (con contratti DPA)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span><strong>Non condividiamo i dati:</strong> Con terze parti per marketing senza tuo consenso</span>
              </li>
            </ul>
          </div>

          {/* 6. Conservazione */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Periodo di Conservazione</h2>
            <p className="text-neutral-600 mb-4">
              I dati vengono conservati secondo le seguenti modalità:
            </p>
            <ul className="space-y-2 text-neutral-600">
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span><strong>Dati clinici:</strong> 10 anni dal termine del trattamento (per obbligo di legge)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span><strong>Dati di contatto:</strong> Fino al completamento della relazione, poi cancellati a richiesta</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span><strong>Dati tecnici del sito:</strong> 90 giorni (cookie di navigazione)</span>
              </li>
            </ul>
          </div>

          {/* 7. Diritti dell'Interessato */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. I Tuoi Diritti</h2>
            <p className="text-neutral-600 mb-4">
              Ai sensi del GDPR, hai il diritto di:
            </p>
            <ul className="space-y-2 text-neutral-600">
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span><strong>Accesso:</strong> Richiedere una copia dei tuoi dati personali</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span><strong>Rettifica:</strong> Correggere dati inesatti</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span><strong>Cancellazione:</strong> Richiedere l'eliminazione (diritto all'oblio)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span><strong>Limitazione:</strong> Limitare il trattamento dei dati</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span><strong>Portabilità:</strong> Ricevere i tuoi dati in formato strutturato</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span><strong>Opposizione:</strong> Opporsi al trattamento per finalità specifiche</span>
              </li>
            </ul>
            <p className="text-neutral-600 mt-6">
              Per esercitare questi diritti, contattaci a: <a href="mailto:gestricaterina@gmail.com" className="text-primary-600 hover:text-primary-700 font-semibold">gestricaterina@gmail.com</a>
            </p>
          </div>

          {/* 8. Sicurezza */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Sicurezza dei Dati</h2>
            <p className="text-neutral-600 mb-4">
              Utilizziamo misure di sicurezza appropriate per proteggere i tuoi dati:
            </p>
            <ul className="space-y-2 text-neutral-600">
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Crittografia dei dati in transito (HTTPS)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Accesso limitato ai dati (autorizzazione personale)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Riservatezza delle comunicazioni terapeutiche</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Backup sicuri dei dati clinici</span>
              </li>
            </ul>
          </div>

          {/* 9. Contatti */}
          <div className="bg-accent-50 p-8 rounded-lg border border-accent-200">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Per Domande sulla Privacy</h2>
            <p className="text-neutral-600 mb-6">
              Se hai domande sulla privacy o desideri esercitare i tuoi diritti:
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
