'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white border-b border-neutral-200">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg text-primary-600 hover:text-primary-700">
          Caterina Gestri
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/chi-sono" className="text-neutral-700 hover:text-primary-600 transition">
            Chi sono
          </Link>
          <Link href="/servizi" className="text-neutral-700 hover:text-primary-600 transition">
            Servizi
          </Link>
          <Link href="/specializzazioni" className="text-neutral-700 hover:text-primary-600 transition">
            Specializzazioni
          </Link>
          <Link href="/blog" className="text-neutral-700 hover:text-primary-600 transition">
            Blog
          </Link>
          <Link href="/contatti" className="button-primary">
            Contatti
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-neutral-50 px-4 py-4 flex flex-col gap-4">
          <Link href="/chi-sono" className="text-neutral-700 hover:text-primary-600">
            Chi sono
          </Link>
          <Link href="/servizi" className="text-neutral-700 hover:text-primary-600">
            Servizi
          </Link>
          <Link href="/specializzazioni" className="text-neutral-700 hover:text-primary-600">
            Specializzazioni
          </Link>
          <Link href="/blog" className="text-neutral-700 hover:text-primary-600">
            Blog
          </Link>
          <Link href="/contatti" className="button-primary w-full text-center">
            Contatti
          </Link>
        </div>
      )}
    </header>
  )
}
