'use client'

import React, { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useSwipeable } from 'react-swipeable'

const cabinImages = [
  '/IMG_5956.jpg',
  '/IMG_5958.jpg',
  '/IMG_5962.jpg',
  '/IMG_6675.jpg',
  '/IMG_6697.jpg',
  '/IMG_6719.jpg',
]

const options: EmblaOptionsType = {
  loop: false,
  align: 'center',
  slidesToScroll: 1,
  containScroll: 'keepSnaps',
  dragFree: true
}

export default function CabinCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [enlargedImageIndex, setEnlargedImageIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])


  const handleImageClick = (index: number) => {
    if (isMobile) {
      setEnlargedImageIndex(index)
    }
  }

  const closeEnlargedImage = () => {
    setEnlargedImageIndex(null)
  }

  const navigateEnlargedImage = (direction: 'prev' | 'next') => {
    if (enlargedImageIndex === null) return
    const newIndex = direction === 'prev'
      ? (enlargedImageIndex - 1 + cabinImages.length) % cabinImages.length
      : (enlargedImageIndex + 1) % cabinImages.length
    setEnlargedImageIndex(newIndex)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => navigateEnlargedImage('next'),
    onSwipedRight: () => navigateEnlargedImage('prev'),
    preventScrollOnSwipe: true,
    trackMouse: true
  })

  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="overflow-hidden h-full transition-all duration-300" ref={emblaRef}>
        <div className="flex h-full gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          {cabinImages.map((src, index) => (
            <div 
              key={index} 
              className="flex-[0_0_90%] sm:flex-[0_0_80%] md:flex-[0_0_70%] lg:flex-[0_0_50%] min-w-0 relative px-2 sm:px-4 md:px-8 lg:px-12 h-full"
              onClick={() => handleImageClick(index)}
            >
              <div className={`relative w-full h-full transition-all duration-300 ${
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
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 50vw"
                  className="object-cover rounded-lg"
                  priority={index === selectedIndex}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {!isMobile && (
        <>
          <button
            onClick={scrollPrev}
            className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all duration-300"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all duration-300"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      <div className="md:hidden w-40 absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm transition-opacity duration-300">
        Toca para ampliar
      </div>

      {enlargedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 md:hidden"
          onClick={closeEnlargedImage}
          {...handlers}
        >
          <div className="relative w-full h-full">
            <Image
              src={cabinImages[enlargedImageIndex]}
              alt={`Imagen ampliada ${enlargedImageIndex + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateEnlargedImage('prev')
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateEnlargedImage('next')
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <button
              onClick={closeEnlargedImage}
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full"
              aria-label="Cerrar imagen ampliada"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
            Desliza para navegar
          </div>
        </div>
      )}
    </div>
  )
}


