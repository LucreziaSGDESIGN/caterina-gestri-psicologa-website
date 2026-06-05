'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Il nome deve avere almeno 2 caratteri'),
  email: z.string().email('Inserisci un indirizzo email valido'),
  phone: z.string().min(10, 'Inserisci un numero di telefono valido').optional().or(z.literal('')),
  subject: z.string().min(5, 'L\'oggetto deve avere almeno 5 caratteri'),
  message: z.string().min(20, 'Il messaggio deve avere almeno 20 caratteri'),
  privacy: z.boolean().refine((val) => val === true, 'Devi accettare la privacy policy'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitError, setSubmitError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitMessage('')
    setSubmitError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitMessage('Grazie! Ho ricevuto il tuo messaggio. Ti contatterò al più presto.')
        reset()
      } else {
        setSubmitError('Si è verificato un errore durante l\'invio del messaggio. Per favore, prova di nuovo o contattami direttamente.')
      }
    } catch (error) {
      setSubmitError('Si è verificato un errore. Per favore, contattami telefonicamente: +39 338 111 0142')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-neutral-900 mb-2">
          Nome Completo *
        </label>
        <input
          {...register('name')}
          type="text"
          id="name"
          placeholder="Il tuo nome"
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
        />
        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 mb-2">
          Indirizzo Email *
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          placeholder="tua.email@example.com"
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
        />
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-neutral-900 mb-2">
          Numero di Telefono
        </label>
        <input
          {...register('phone')}
          type="tel"
          id="phone"
          placeholder="+39 338 123 4567"
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
        />
        {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-neutral-900 mb-2">
          Oggetto *
        </label>
        <input
          {...register('subject')}
          type="text"
          id="subject"
          placeholder="Es. Richiesta di consulenza"
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
        />
        {errors.subject && <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-neutral-900 mb-2">
          Messaggio *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={6}
          placeholder="Raccontami come posso aiutarti..."
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 resize-none"
        />
        {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
      </div>

      {/* Privacy Checkbox */}
      <div className="flex items-start gap-3">
        <input
          {...register('privacy')}
          type="checkbox"
          id="privacy"
          className="mt-1 w-5 h-5 border-neutral-300 rounded text-primary-600 focus:ring-primary-600 cursor-pointer"
        />
        <label htmlFor="privacy" className="text-sm text-neutral-600 cursor-pointer">
          Accetto la <a href="/privacy" className="text-primary-600 hover:text-primary-700 font-semibold">Privacy Policy</a> e autorizzo il trattamento dei miei dati personali per contattarmi. *
        </label>
      </div>
      {errors.privacy && <p className="text-red-600 text-sm">{errors.privacy.message}</p>}

      {/* Success Message */}
      {submitMessage && (
        <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
          {submitMessage}
        </div>
      )}

      {/* Error Message */}
      {submitError && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
          {submitError}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full button-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
      </button>

      <p className="text-xs text-neutral-500 text-center">
        * Campi obbligatori
      </p>
    </form>
  )
}
