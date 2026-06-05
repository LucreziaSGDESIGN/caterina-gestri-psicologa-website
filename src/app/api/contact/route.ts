import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(5),
  message: z.string().min(20),
  privacy: z.boolean(),
})

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json()

    // Validate the data
    const validatedData = contactSchema.parse(body)

    // TODO: In production, integrate with SendGrid or another email service
    // For now, we'll log the submission and return success
    console.log('Contact form submission:', validatedData)

    // TODO: Send email to gestricaterina@gmail.com with the form data
    // Example with SendGrid:
    // await sgMail.send({
    //   to: 'gestricaterina@gmail.com',
    //   from: 'noreply@caterinageстri.it',
    //   subject: `Nuovo messaggio da contatti: ${validatedData.subject}`,
    //   html: `
    //     <h2>Nuovo messaggio dal sito</h2>
    //     <p><strong>Nome:</strong> ${validatedData.name}</p>
    //     <p><strong>Email:</strong> ${validatedData.email}</p>
    //     <p><strong>Telefono:</strong> ${validatedData.phone || 'Non fornito'}</p>
    //     <p><strong>Oggetto:</strong> ${validatedData.subject}</p>
    //     <hr />
    //     <p><strong>Messaggio:</strong></p>
    //     <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
    //   `,
    // })

    // Also send confirmation to the user
    // await sgMail.send({
    //   to: validatedData.email,
    //   from: 'noreply@caterinageстri.it',
    //   subject: 'Confermato: ho ricevuto il tuo messaggio',
    //   html: `
    //     <h2>Ciao ${validatedData.name},</h2>
    //     <p>Ho ricevuto il tuo messaggio e ti contatterò al più presto.</p>
    //     <p>Cordiali saluti,</p>
    //     <p>Caterina Gestri</p>
    //   `,
    // })

    return NextResponse.json(
      { message: 'Messaggio inviato con successo' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Dati invalidi', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Si è verificato un errore durante l\'invio del messaggio' },
      { status: 500 }
    )
  }
}
