'use client'

import React, { useState, useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const cabinImages = [
  '/IMG_5956.jpg',
  '/IMG_5958.jpg',
  '/IMG_5962.jpg',
  '/IMG_6675.jpg',
  '/IMG_6697.jpg',
  '/IMG_6719.jpg',
]

const options: EmblaOptionsType = {
  loop: true,
  align: 'center',
  slidesToScroll: 1,
  containScroll: 'trimSnaps',
  dragFree: true
}

export default function CabinCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  const handleImageClick = (src: string) => {
    if (window.innerWidth < 768) { // Solo para dispositivos móviles
      setEnlargedImage(src)
    }
  }

  const closeEnlargedImage = () => {
    setEnlargedImage(null)
  }

  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          {cabinImages.map((src, index) => (
            <div 
              key={index} 
              className="flex-[0_0_90%] sm:flex-[0_0_80%] md:flex-[0_0_70%] lg:flex-[0_0_50%] min-w-0 relative px-2 sm:px-4 md:px-8 lg:px-12"
              onClick={() => handleImageClick(src)}
            >
              <div className={`relative w-full aspect-square transition-all duration-300 ${
                index === selectedIndex
                  ? 'scale-100 sm:scale-105 md:scale-110 lg:scale-125 z-10'
                  : index === (selectedIndex - 1 + cabinImages.length) % cabinImages.length ||
                    index === (selectedIndex + 1) % cabinImages.length
                  ? 'scale-95 sm:scale-90 md:scale-95 blur-[1px] sm:blur-[2px]'
                  : 'scale-85 sm:scale-80 md:scale-85 opacity-50'
              }`}>
                <Image
                  src={src}
                  alt={`Cabaña ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Botones de navegación solo visibles en pantallas md y superiores */}
      <button
        onClick={scrollPrev}
        className="hidden md:block absolute left-1 md:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 sm:p-4 rounded-full hover:bg-opacity-75 transition-all duration-300"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="hidden md:block absolute right-1 md:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 sm:p-4 rounded-full hover:bg-opacity-75 transition-all duration-300"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Indicador de deslizamiento para dispositivos móviles */}
      <div className="md:hidden w-40 absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
        Desliza para ver más
      </div>

      {/* Imagen ampliada para dispositivos móviles */}
      {enlargedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 md:hidden"
          onClick={closeEnlargedImage}
        >
          <div className="relative w-full h-full">
            <Image
              src={enlargedImage}
              alt="Imagen ampliada"
              fill
              className="object-contain"
            />
            <button
              onClick={closeEnlargedImage}
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full"
              aria-label="Cerrar imagen ampliada"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

