'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: '/slider5.png',
      title: 'Industrial Instrumentation Solutions',
      subtitle: 'Advanced instruments with superior performance, maximum accuracy, and durability',
      cta1: { text: 'View Products', link: '/products' },
      cta2: { text: 'Get Quote', link: '/contact' }
    },
    {
      image: '/slider7.png',
      title: 'Temperature Measurement Experts',
      subtitle: 'RTD sensors, thermocouples, and temperature controllers for precise monitoring',
      cta1: { text: 'View Products', link: '/products' },
      cta2: { text: 'Get Quote', link: '/contact' }
    },
    {
      image: '/slider13.png',
      title: 'Flow & Pressure Instrumentation',
      subtitle: 'Electromagnetic flow meters and pressure transmitters for industrial applications',
      cta1: { text: 'View Products', link: '/products' },
      cta2: { text: 'Get Quote', link: '/contact' }
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      {/* Slides */}
      <div className="relative h-[500px] md:h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover opacity-75"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-900/30"></div>
          </div>
        ))}

        {/* Content */}
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-600 text-white px-4 py-1 text-sm font-medium mb-6">
              Established 2018 | Bhopal, Madhya Pradesh
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-slate-300">
              {slides[currentSlide].subtitle}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href={slides[currentSlide].cta1.link}>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  {slides[currentSlide].cta1.text}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href={slides[currentSlide].cta2.link}>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                  {slides[currentSlide].cta2.text}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
