'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'

export default function ElLugar() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error al reproducir el video:", error)
      })
    }
  }, [])

  return (
    <main className="flex flex-col items-center bg-[#eed9c4]">
      <section className="w-full relative font-lato">
      <Navbar/>
        {isMobile ? (
          <Image
            src="/ScreenClipLosReyunos.png"
            alt="Los Reyunos"
            width={800}
            height={400}
            className="w-full h-[400px] object-cover"
          />
        ) : (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[600px] object-cover"
          >
            <source src="/ClipLosReyunos.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        )}
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-6">Sobre Los Reyunos</h2>
        <p className="mb-4">
          A 35 Km de la ciudad de San Rafael, nos encontramos con la presa Los Reyunos, un hipnotizante espejo de agua que combina una sinfonía de verdes y turquesas, invita a los viajeros a realizar distintas actividades como pesca de salmónidos y pejerreyes; alquilar embarcaciones, realizar cabalgatas, caminatas y mountain bike; buceo, tirobangi, rappel, senderismo y un sinfín de otras prácticas que conjugan a la perfección con el majestuoso entorno natural.
        </p>
        <p className="mb-4">
          La particularidad que tiene este espejo de agua artificial es que es uno de los poco diques del país que cuenta con el sistemas de rebombeo permitiendo recuperar el agua erogada al invertir sus turbinas para volver a reutilizar este importante elemento para este gran oasis del sur mendocino.
        </p>
      </section>

      <section className="bg-gray-100 w-full py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6">Club Náutico Los Reyunos</h2>
          <p className="mb-4">
            A 11 Km de la presa por camino consolidado se llega a el Club Náutico Los Reyunos, rodeado de casas de fin de semana que descienden desde la montaña hasta orillas del lago. Aquí podrás disfrutar de:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Restaurantes</li>
            <li>Apart hotel</li>
            <li>Cabañas y campings</li>
            <li>Deportes acuáticos: esquí acuático, kayak, wake board y canotaje</li>
            <li>Embarcadero con lanchas y catamaranes para paseos</li>
          </ul>
          <p className="mb-4">
            El Club cuenta con una proveeduría abierta a todos los visitantes, donde encontrarás desde productos para elaborar tus propios platos hasta comidas para llevar, además de artículos de pesca y otros productos necesarios para tu estadía.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-6">Actividades y Deportes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Deportes Terrestres</h3>
            <ul className="list-disc pl-6">
              <li>Paddle</li>
              <li>Basquet</li>
              <li>Tenis</li>
              <li>Fútbol</li>
              <li>Volleyball</li>
              <li>Mountain bike</li>
              <li>Senderismo</li>
              <li>Cabalgatas</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Deportes Acuáticos</h3>
            <ul className="list-disc pl-6">
              <li>Esquí acuático</li>
              <li>Wakeboard</li>
              <li>Windsurf</li>
              <li>Kayak</li>
              <li>Canotaje</li>
              <li>Pesca deportiva</li>
              <li>Buceo</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  )
}