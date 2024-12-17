import Link from 'next/link'
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io";

const mensaje = encodeURIComponent("Hola, quiero hacer una consulta sobre las Cabañas Amparo del Sol");
const enlaceWhatsApp = `https://wa.me/+542302304347?text=${mensaje}`;


export default function SocialMediaButtons() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-4 z-50">
      <Link
        href={enlaceWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300"
        aria-label="Chatea con nosotros en WhatsApp"
      >
        <IoLogoWhatsapp size={24} />
      </Link>
      <Link
        href="https://www.instagram.com/amparodelsol.cabanas/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 hover:from-yellow-600 hover:via-pink-600 hover:to-purple-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300"
        aria-label="Síguenos en Instagram"
      >
        <IoLogoInstagram size={24} />
      </Link>
    </div>
  )
}