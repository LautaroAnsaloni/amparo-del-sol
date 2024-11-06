'use server'

import { z } from 'zod'

const formSchema = z.object({
  nombre: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Debe ser un email válido.",
  }),
  celular: z.string().regex(/^\+?[0-9]{10,14}$/, {
    message: "Debe ser un número de celular válido.",
  }),
  mensaje: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
})

export async function enviarFormulario(data: z.infer<typeof formSchema>) {
  const result = formSchema.safeParse(data)

  if (!result.success) {
    return {
      success: false,
      message: 'Falló la validación del formulario.',
      errors: result.error.flatten().fieldErrors,
    }
  }

  // Aquí iría la lógica para enviar el correo electrónico o guardar en la base de datos
  // Por ejemplo, podrías usar una API de envío de correos como SendGrid o Mailgun
  
  // Simulamos un retraso para demostrar el estado de carga
  await new Promise(resolve => setTimeout(resolve, 2000))

  // Simulamos una respuesta exitosa
  return {
    success: true,
    message: 'Formulario enviado con éxito.',
  }
}