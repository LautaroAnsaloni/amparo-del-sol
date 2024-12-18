import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {

  const mensaje = encodeURIComponent("Hola, quiero hacer una consulta sobre las Cabañas Amparo del Sol");
  const enlaceWhatsApp = `https://wa.me/+542302304347?text=${mensaje}`;

  return (
    <footer className="w-full bg-stone-900 text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-center">
          <div className="flex-shrink-0 mb-8 md:mb-0 md:ml-8">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image
                src="/AmparoDelSolWhite.png" // Reemplaza esto con la ruta a tu logo
                alt="Amparo del Sol Logo"
                width={100}
                height={50}
                className="h-16 w-auto"
              />
            </Link>
          </div>
          <div className="flex-grow flex flex-col items-center justify-center">
            <nav className="flex flex-wrap justify-center gap-8 mb-8">
              <Link
                href="/#nosotros"
                className="hover:text-gray-300 transition-colors"
              >
                Nosotros
              </Link>
              <Link
                href="/lugar"
                className="hover:text-gray-300 transition-colors"
              >
                El Lugar
              </Link>
              <Link
                href="/contacto"
                className="hover:text-gray-300 transition-colors"
              >
                Contacto
              </Link>
            </nav>

            <div className="flex justify-center gap-8 mb-8">
              <Link
                href="https://www.facebook.com/profile.php?id=61568303840830"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                <FaFacebookF className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/amparodelsol.cabanas/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                <FaInstagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href={enlaceWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                <FaWhatsapp className="h-6 w-6" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>

            <div className="text-center">
              <p className="text-sm">
                © {new Date().getFullYear()} Amparo del Sol. Todos los derechos
                reservados.
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
}
