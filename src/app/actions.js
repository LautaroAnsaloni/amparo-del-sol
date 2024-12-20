"use server";
import { z } from 'zod'; // Cambiado a 'zod' como módulo
import nodemailer from 'nodemailer'; // Usar 'import' en lugar de 'require'
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
});
const port = process.env.NEXT_PUBLIC_SMTP_PORT || "587";
export async function enviarFormulario(data) {
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return {
      success: false,
      message: "Falló la validación del formulario.",
      errors: result.error.flatten().fieldErrors,
    };
  }
  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_SMTP_HOST,
    port: parseInt(port, 10), 
    secure: port === "465", 
    auth: {
      user: process.env.NEXT_PUBLIC_SMTP_USER,
      pass: process.env.NEXT_PUBLIC_SMTP_PASS,
    },
  });
  try {
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_SMTP_USER,
      to: process.env.NEXT_PUBLIC_SMTP_USER, // Ajusta esta dirección según sea necesario
      subject: "Consulta desde el formulario de contacto",
      text: `Nombre: ${data.nombre}\nEmail: ${data.email}\nCelular: ${data.celular}\nMensaje: ${data.mensaje}`,
    });
    return {
      success: true,
      message: "Formulario enviado con éxito.",
    };
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return {
      success: false,
      message: "Error al enviar el formulario.",
    };
  }
}