import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4">Caterina Gestri</h3>
            <p className="text-neutral-400 text-sm">
              Psicologa-Psicoterapeuta specializzata in psicoterapia cognitivo-comportamentale, EMDR, EFT e Schema Therapy.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigazione</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/chi-sono" className="text-neutral-400 hover:text-white transition">
                  Chi sono
                </Link>
              </li>
              <li>
                <Link href="/servizi" className="text-neutral-400 hover:text-white transition">
                  Servizi
                </Link>
              </li>
              <li>
                <Link href="/specializzazioni" className="text-neutral-400 hover:text-white transition">
                  Specializzazioni
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-neutral-400 hover:text-white transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contatti</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+393381110142" className="text-neutral-400 hover:text-white transition">
                  +39 338 111 0142
                </a>
              </li>
              <li>
                <a href="mailto:gestricaterina@gmail.com" className="text-neutral-400 hover:text-white transition">
                  gestricaterina@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Info Legali</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-neutral-400 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-neutral-400 hover:text-white transition">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Credentials */}
        <div className="border-t border-neutral-800 pt-8 mb-8">
          <p className="text-neutral-400 text-sm mb-4">
            Iscritta all'Ordine Psicologi della Toscana n.4947
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-neutral-500">
            <span>Socio AIAMC</span>
            <span>Socio EABCT</span>
            <span>Socio EMDR Italia</span>
            <span>Socio Fondatore ICEEFT</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-400 text-sm">
          <p>&copy; {currentYear} Caterina Gestri. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}
