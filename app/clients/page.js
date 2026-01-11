'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Building2, Users, Award, TrendingUp, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import EnquiryPopup from '@/components/EnquiryPopup'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
}

// Testimonial Carousel Component
function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const testimonials = [
    {
      name: "Vishal Mehta",
      role: "Plant Manager, Chemical Industry",
      text: "Reliable products and excellent technical support. Advick Enterprises has been our go-to supplier for instrumentation needs."
    },
    {
      name: "Rajesh Kumar",
      role: "Maintenance Head, Manufacturing",
      text: "Quality instruments at competitive prices. Their team understands our requirements and delivers on time every time."
    },
    {
      name: "Amit Sharma",
      role: "Project Engineer, Pharmaceutical",
      text: "Professional service and good product knowledge. We have been working with them for over 3 years now."
    },
    {
      name: "Priya Desai",
      role: "Operations Manager, Food Processing",
      text: "Excellent after-sales support. They helped us with installation and troubleshooting. Highly recommended!"
    },
    {
      name: "Suresh Patel",
      role: "Instrumentation Engineer, Power Plant",
      text: "Fast delivery and genuine products. Their technical team is very knowledgeable and helpful."
    },
    {
      name: "Anil Verma",
      role: "Purchase Manager, Textile Industry",
      text: "Great experience working with Advick Enterprises. They provide quality products with proper documentation."
    }
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3))
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const visibleTestimonials = testimonials.slice(currentIndex * 3, currentIndex * 3 + 3)

  return (
    <div className="relative">
      <motion.div 
        className="grid md:grid-cols-3 gap-8"
        key={currentIndex}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        {visibleTestimonials.map((testimonial, index) => (
          <Card key={index} className="hover:shadow-xl transition-shadow h-full">
            <CardContent className="p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-slate-800">{testimonial.name}</p>
                <p className="text-sm text-slate-600">{testimonial.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index ? 'bg-blue-600 w-8' : 'bg-slate-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Clients() {
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  
  const stats = [
    { icon: Building2, value: '100+', label: 'Total Clients' },
    { icon: Users, value: '1000+', label: 'Projects Completed' },
    { icon: Award, value: '6+', label: 'Years Experience' },
    { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' }
  ]

  return (
    <div className="min-h-screen bg-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20">
        <div className="absolute inset-0">
          <Image
            src="/slider5.png"
            alt="Our Clients"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-600 text-white px-4 py-1 text-sm font-medium mb-4">
              Our Clients
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted by Leading Industries
            </h1>
            <p className="text-xl text-slate-300">
              Serving diverse industries with quality instrumentation solutions since 2018
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/80">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="text-center hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <motion.div 
                        className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-7 h-7 text-blue-600" />
                      </motion.div>
                      <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</h3>
                      <p className="text-slate-600 text-sm">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Industries We Serve</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Providing instrumentation solutions across multiple sectors
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { name: 'Chemical Processing', image: '/Chemical Processing.jpg' },
              { name: 'Oil & Gas', image: '/Oil & Gas.jpg' },
              { name: 'Pharmaceutical', image: '/Pharmaceutical.jpg' },
              { name: 'Food & Beverage', image: '/Food & Beverage.jpeg' },
              { name: 'Water Treatment', image: '/Water Treatment.jpeg' },
              { name: 'Power Plants', image: '/Power Plants.jpeg' },
              { name: 'Manufacturing', image: '/Manufacturing.jpeg' },
              { name: 'HVAC Systems', image: '/Hvac.webp' }
            ].map((industry, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow overflow-hidden group"
                variants={scaleIn}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-40 bg-slate-100 overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-bold text-white text-center">{industry.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-white/80">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Our Valued Clients</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We're proud to serve these industry leaders
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              'cl-1.png',
              'client2-1.png',
              'client3-1.png',
              'client4.png',
              'client5.png',
              'CLIENT6.png',
              'client7.png',
              'client8.png',
              'client9.png',
              'client10.png',
              'client11.png',
              'client12.png',
              'client13.png',
              'clinet14.png',
              'client15.png',
              'client16.png'
            ].map((logo, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 flex items-center justify-center h-32 bg-white">
                    <div className="relative w-full h-full">
                      <Image
                        src={`/${logo}`}
                        alt={`Client ${index + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-slate-600 max-w-2xl mx-auto">
              We serve a diverse portfolio of clients across multiple industries. Our commitment to quality and reliability has earned us the trust of leading organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Client Testimonials</h2>
            <p className="text-slate-600">What our clients say about us</p>
          </motion.div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white/80">
        <motion.div 
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              <motion.div 
                className="p-8 md:p-12 text-white"
                variants={fadeInLeft}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Join Our Clients?
                </h2>
                <p className="text-blue-100 mb-6 text-lg">
                  Experience the quality, reliability, and exceptional service that leading industries trust. Partner with us for your instrumentation needs.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-700 p-2 rounded-lg">
                      <svg className="h-5 w-5 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Trusted by 500+ Clients</h3>
                      <p className="text-blue-200 text-sm">Across multiple industries nationwide</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-700 p-2 rounded-lg">
                      <svg className="h-5 w-5 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Quick Response Time</h3>
                      <p className="text-blue-200 text-sm">24/7 technical support available</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-700 p-2 rounded-lg">
                      <Phone className="h-5 w-5 text-blue-200" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Contact Us</h3>
                      <p className="text-blue-200 text-sm">+91 7987004209</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    onClick={() => setEnquiryOpen(true)}
                    className="bg-white text-blue-900 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Send Enquiry
                  </Button>
                  <a href="https://wa.me/917987004209?text=Hello%2C%20I%20am%20interested%20in%20partnering%20with%20Advick%20Enterprises" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="border-white bg-blue-700 text-white hover:bg-white hover:text-blue-900 transition-all">
                      <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </motion.div>
              <motion.div 
                className="relative h-64 md:h-auto overflow-hidden"
                variants={fadeInRight}
              >
                <Image
                  src="/slider7.png"
                  alt="Join Our Clients"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Enquiry Popup */}
      <EnquiryPopup 
        isOpen={enquiryOpen} 
        onClose={() => setEnquiryOpen(false)} 
      />
    </div>
  )
}
