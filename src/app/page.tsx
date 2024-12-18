"use client";

import { useState, useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ServiciosIncluidos from "../components/ui/cabin-amenities";
import Footer from "../components/ui/footer";
import Navbar from "@/components/ui/navbar";
import CabinCarousel from "@/components/CabinCarousel";
import HouseCarousel from "@/components/HouseCarousel";
import FormularioContacto from "@/components/FormularioContacto";

const rollingTexts = [
  "Experiencia única en la naturaleza",
  "Desconectate de la rutina",
  "Vista panorámica al lago",
  "Viví momentos inolvidables",
];

export default function Home() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTextIndex(
          (prevIndex) => (prevIndex + 1) % rollingTexts.length
        );
        setIsVisible(true);
      }, 500); // Espera medio segundo antes de mostrar el siguiente texto
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="flex-grow overflow-x-hidden">
      <SpeedInsights />
      <div className="flex flex-col min-h-screen font-lato">
        <Navbar />
        <section
          className="relative flex items-center justify-center overflow-hidden"
          style={{ height: "calc(100vh - 5rem)" }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src="/PanoramicaLosReyunos.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 text-center flex flex-col items-center">
            <div className="relative px-4 py-2 mb-2">
              <span className="relative z-10 text-xl md:text-2xl font-semibold text-transform: uppercase text-white">
                Bienvenidos a
              </span>
              <span className="absolute inset-0 bg-black opacity-50 blur-md"></span>
            </div>
            <h1 className="relative px-4 py-2">
              <span className="relative z-10 text-4xl md:text-7xl font-bold uppercase mb-4 font-nourd text-white">
                Amparo del Sol
              </span>
              <span className="absolute inset-0 bg-black opacity-50 blur-md"></span>
            </h1>
            <div className="h-20 mb-8 relative overflow-hidden flex items-center justify-center mt-6">
              <div
                className={`transition-all duration-500 ease-in-out ${
                  isVisible
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform -translate-y-full"
                }`}
              >
                <p className="relative inline-block px-4 py-2">
                  <span className="relative z-10 text-xl md:text-2xl font-semibold text-white">
                    {rollingTexts[currentTextIndex]}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="cabanas-2-4" className="py-16 bg-[#eed9c4]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 font-marcellus text-center text-transform: uppercase">
              Cabañas para 2 a 4 personas
            </h2>
            <div className="grid mx-8">
              <CabinCarousel />
            </div>
            <ServiciosIncluidos />
          </div>
        </section>

        <section id="cabanas-6-10" className="py-16 bg-[#264653] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 font-marcellus text-center text-transform: uppercase">
              Casa para 6 a 10 personas
            </h2>
            <div className="grid mx-8">
              <HouseCarousel />
            </div>
            <div className="max-w-6xl mx-auto mt-14 px-4 py-8">
              <p className="text-lg mt-8 text-center">
                Casa espaciosa para grupos grandes o familias numerosas.
                Disfruta de amplios espacios comunes y todas las comodidades
                para una experiencia grupal única.
              </p>
            </div>
          </div>
        </section>

        <section id="nosotros" className="py-16 bg-[#eed9c4]">
          <div className="container mx-auto text-center px-4 max-w-4xl">
            <h2 className="text-4xl font-bold mb-8 font-marcellus text-center text-[#264653]">
              Nosotros
            </h2>
            <div className="bg-white bg-opacity-20 p-8 rounded-lg shadow-lg">
              <p className="text-lg text-[#264653] leading-relaxed mb-6">
                En Amparo del Sol queremos que vivas una experiencia en plena
                naturaleza, lejos del ruido y el estrés de lo cotidiano.
              </p>
              <p className="text-lg text-[#264653] leading-relaxed mb-6">
                Nuestras cabañas, en este hermoso entorno, están pensadas para
                que encuentres un lugar donde puedas relajarte y disfrutar de
                verdad. Nos encanta cuidar de cada detalle para que, cuando
                estés acá, no tengas que preocuparte por nada más que por
                disfrutar.
              </p>
              <p className="text-lg text-[#264653] leading-relaxed mb-6">
                Nuestra misión es que te sientas como en casa, pero rodeado de
                paisajes increíbles, aire fresco y tranquilidad. Ya sea que
                vengas solo, en pareja o en familia, nuestro compromiso es que
                te lleves buenos recuerdos, descanses a tu ritmo y encuentres un
                espacio para reconectar con la naturaleza y con vos mismo.
              </p>
            </div>
          </div>
        </section>
        <section id="contacto" className="py-16 bg-[#eed9c4]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 font-marcellus text-center">
              Contacto
            </h2>
            <p className="text-lg text-center">
              Estamos aquí para responder todas tus preguntas. No dudes en
              contactarnos para más información o para hacer tu reserva.
            </p>
          </div>
          <FormularioContacto />
        </section>

        <section id="ubicacion" className="py-16 bg-[#264653] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 font-marcellus text-center">
              ¿Dónde estamos?
            </h2>
            <div className="flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d821.273577009454!2d-68.71251528931558!3d-34.57648019964784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1730479773460!5m2!1ses-419!2sar"
                width="100%"
                height="450"
                style={{
                  border: 0,
                  maxWidth: "1200px",
                  width: "100%",
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
