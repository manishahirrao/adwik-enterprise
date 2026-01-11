'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, CheckCircle2, Phone, Mail, Factory, Gauge, Thermometer, Activity, Users, Award, Zap, TrendingUp, Clock, Wrench } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import EnquiryPopup from '@/components/EnquiryPopup'
import HeroSlider from '@/components/HeroSlider'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
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
    }, 5000) // Change every 5 seconds

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

// FAQ Accordion Component
function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <motion.div
      initial={false}
      className="border border-slate-200 rounded-lg overflow-hidden bg-white"
    >
      <button
        onClick={onToggle}
        className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
      >
        <h3 className="font-bold text-slate-900 pr-8">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 text-slate-600">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  )
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "What types of instrumentation do you supply?",
      answer: "We supply a wide range of industrial instrumentation including flow meters, pressure transmitters, temperature sensors (RTD, thermocouples), level switches, thermowells, and related accessories."
    },
    {
      question: "Do you provide installation services?",
      answer: "We provide installation guidance and technical support. Our team can assist with installation procedures, wiring diagrams, and commissioning support to ensure proper setup."
    },
    {
      question: "What is the warranty on your products?",
      answer: "All our products come with manufacturer warranty. The warranty period varies by product type and manufacturer. We provide warranty support and can assist with any warranty claims."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery time depends on product availability and your location. For in-stock items in Bhopal area, we can deliver within 1-2 days. For other locations and special orders, delivery typically takes 3-7 days."
    },
    {
      question: "Do you provide technical support?",
      answer: "Yes, we provide technical support for product selection, installation guidance, and troubleshooting. Our team has experience with various industrial processes and can help you choose the right instruments."
    },
    {
      question: "Can you supply custom specifications?",
      answer: "Yes, many of our products can be customized based on your requirements. This includes custom probe lengths, connection types, ranges, and materials. Contact us with your specific needs."
    }
  ]

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
        />
      ))}
    </div>
  )
}

export default function Home() {
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState('')

  // Auto-open popup when page loads
  useEffect(() => {
    // Open popup after 2 seconds every time user visits
    const timer = setTimeout(() => {
      setEnquiryOpen(true)
    }, 2000) // Opens after 2 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleEnquiry = (productTitle) => {
    setSelectedProduct(productTitle)
    setEnquiryOpen(true)
  }

  const products = [
    {
      title: 'Electromagnetic Flow Meters',
      description: 'Critical flow measurement with zero pressure drop for accurate liquid flow monitoring',
      icon: Activity,
      image: '/flow-meter.jpg'
    },
    {
      title: 'Ultrasonic Water Meter',
      description: 'Non-invasive ultrasonic technology for accurate water flow measurement',
      icon: Activity,
      image: '/flow-meter.jpg'
    },
    {
      title: 'Analog Pressure Gauges',
      description: 'Shock & vibration-resistant pressure gauges for industrial applications',
      icon: Gauge,
      image: '/pressure-transmitter.jpg'
    },
    {
      title: 'Pressure Transmitters',
      description: 'Industrial pressure sensors with 4-20mA output for process control',
      icon: Gauge,
      image: '/pressure-transmitter.jpg'
    },
    {
      title: 'RTD PT100 Temperature Sensor',
      description: 'Precision PT100 RTD sensors for accurate temperature measurement',
      icon: Thermometer,
      image: '/head-type-rtd-sensor.jpg'
    },
    {
      title: 'K Type Thermocouples',
      description: 'K-type thermocouples for high-temperature industrial applications',
      icon: Zap,
      image: '/rtd-thermocouple.jpg'
    },
    {
      title: 'PID Temperature Controller',
      description: 'Auto-tuning PID controllers for precise temperature control',
      icon: Factory,
      image: '/conductive-level-switch.jpg'
    },
    {
      title: 'Ultrasonic Level Transmitter',
      description: 'Non-contact level measurement using ultrasonic technology',
      icon: Thermometer,
      image: '/conductive-level-switch.jpg'
    },
    {
      title: 'Thermowells',
      description: 'Protective sheaths for temperature sensors in high-pressure environments',
      icon: Thermometer,
      image: '/thermowell.jpg'
    }
  ]

  return (
    <div className="min-h-screen bg-cyan-50">
      {/* Hero Slider */}
      <HeroSlider onEnquiryClick={() => setEnquiryOpen(true)} />

      {/* About Section */}
      <section className="py-16 bg-white/80">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 text-sm font-medium mb-4">
                About Advick Enterprises
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                Your Partner in Industrial Instrumentation
              </h2>
              <p className="text-slate-700 mb-4">
                Advick Enterprises is a well-established vendor and supplier that offers a wide range of advanced instruments like electromagnetic flow meters, RTD head type thermocouples, analog pressure gauges, head type RTD sensors, digital PID temperature controllers, analog temperature gauges, and flow instrumentation.
              </p>
              <p className="text-slate-700">
                Our products are designed with superior performance in mind, maximum accuracy, durability, and efficiency for all industries. From critical flow measurement with zero pressure drop to shock & vibration-resistant pressure gauges and auto-tuning PID controllers, we make sure that each product is a solution for your needs. We provide more than quality equipment - we bring a partnership to help you streamline your operations and elevate your processes.
              </p>
              
              <motion.div 
                className="mt-8 grid grid-cols-2 gap-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={fadeInUp} className="border-l-4 border-blue-600 pl-4">
                  <div className="text-3xl font-bold text-blue-600">6+</div>
                  <div className="text-sm text-slate-600">Years in Business</div>
                </motion.div>
                <motion.div variants={fadeInUp} className="border-l-4 border-blue-600 pl-4">
                  <div className="text-3xl font-bold text-blue-600">100+</div>
                  <div className="text-sm text-slate-600">Satisfied Clients</div>
                </motion.div>
              </motion.div>

              <motion.div 
                className="mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link href="/about">
                  <Button className="bg-blue-600 hover:bg-blue-700 group">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full max-w-md">
                <Image
                  src="/engine-img-2-1.jpg"
                  alt="Industrial Instrumentation"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-xl max-w-[200px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="flex items-start gap-2">
                    <div className="bg-blue-100 p-2 rounded">
                      <Award className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">Quality Assured</div>
                      <div className="text-xs text-slate-600">All products tested & certified</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 text-sm font-medium mb-4">
              Our Products
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Instrumentation Products We Supply
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Complete range of industrial measurement and control instruments
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { image: '/electromagnetic-flow-meter-500x500.webp', title: 'Electromagnetic Flow Meters' },
              { image: '/pressure-transmitter-500x500.webp', title: 'Pressure Transmitters' },
              { image: '/rtd-pt100-temperature-sensor-500x500.webp', title: 'RTD PT100 Sensors' },
              { image: '/k-type-thermocouples-500x500.webp', title: 'K Type Thermocouples' },
              { image: '/digital-temperature-controller-500x500.webp', title: 'Temperature Controllers' },
              { image: '/ultrasonic-level-transmitter-500x500.webp', title: 'Level Transmitters' },
              { image: '/turbine-flow-meter-500x500.webp', title: 'Turbine Flow Meters' },
              { image: '/proximity-sensor-500x500.webp', title: 'Proximity Sensors' }
            ].map((product, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Link href="/products">
                  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden group cursor-pointer">
                    <div className="relative h-48 bg-slate-100 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white font-semibold text-sm text-center">{product.title}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/products">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 group">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white/80">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Why Choose Advick Enterprises
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div 
              className="text-center"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <CheckCircle2 className="h-8 w-8 text-blue-600" />
              </motion.div>
              <h3 className="font-bold text-slate-900 mb-2">Quality Products</h3>
              <p className="text-sm text-slate-600">ISO compliant instruments from trusted manufacturers</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Users className="h-8 w-8 text-blue-600" />
              </motion.div>
              <h3 className="font-bold text-slate-900 mb-2">Expert Team</h3>
              <p className="text-sm text-slate-600">Experienced professionals with process knowledge</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Wrench className="h-8 w-8 text-blue-600" />
              </motion.div>
              <h3 className="font-bold text-slate-900 mb-2">Technical Support</h3>
              <p className="text-sm text-slate-600">Installation guidance and after-sales service</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </motion.div>
              <h3 className="font-bold text-slate-900 mb-2">Competitive Pricing</h3>
              <p className="text-sm text-slate-600">Best value without compromising on quality</p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-8 h-8 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </motion.div>
              <h3 className="font-bold text-slate-900 mb-2">Listed on IndiaMART</h3>
              <p className="text-sm text-slate-600">Verified supplier on India's largest B2B marketplace</p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </motion.div>
              <h3 className="font-bold text-slate-900 mb-2">Listed on TradeIndia</h3>
              <p className="text-sm text-slate-600">Trusted supplier on leading B2B platform</p>
            </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Industries We Serve
            </h2>
            <p className="text-slate-600">Serving diverse industrial sectors with specialized solutions</p>
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

      {/* Our Approach */}
      <section className="py-16 bg-white/80">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Approach to Service</h2>
              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={fadeInUp} className="flex gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Understanding Requirements</h3>
                    <p className="text-slate-600">We discuss your specific application needs and process parameters to recommend suitable instruments.</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Product Selection</h3>
                    <p className="text-slate-600">Based on your requirements, we suggest appropriate instrumentation with technical specifications.</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Quotation & Delivery</h3>
                    <p className="text-slate-600">We provide competitive quotes and ensure timely delivery of products to your location.</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">After-Sales Support</h3>
                    <p className="text-slate-600">We offer technical support and guidance for installation and troubleshooting when needed.</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/adt673_calibrator.jpg"
                alt="Our Service Approach"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Common Applications</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our instrumentation products are used in various industrial processes
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="hover:shadow-xl transition-shadow h-full">
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <Image
                    src="/electromagnetic-flow-meter-500x500.webp"
                    alt="Process Monitoring"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Activity className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-3">Process Monitoring</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Continuous monitoring of flow, pressure, temperature, and level in production processes.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Real-time data collection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Process optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="hover:shadow-xl transition-shadow h-full">
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <Image
                    src="/pressure-transmitter-500x500.webp"
                    alt="Quality Control"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Gauge className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-3">Quality Control</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Ensuring product quality through accurate measurement and control systems.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Consistent product quality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Reduced waste</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="hover:shadow-xl transition-shadow h-full">
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <Image
                    src="/digital-temperature-controller-500x500.webp"
                    alt="Safety Systems"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Factory className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-3">Safety Systems</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Critical safety instrumentation for protecting equipment and personnel.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Pressure relief systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Temperature alarms</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quality & Certifications */}
      <section className="py-16 bg-white/80">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Quality & Standards</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We supply products that meet international quality standards
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={scaleIn} whileHover={{ scale: 1.05 }}>
              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <motion.div 
                    className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Award className="w-8 h-8 text-blue-600" />
                  </motion.div>
                  <h3 className="font-bold text-slate-900 mb-2">ISO Compliant</h3>
                  <p className="text-sm text-slate-600">Products meet ISO quality standards</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn} whileHover={{ scale: 1.05 }}>
              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <motion.div 
                    className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <CheckCircle2 className="w-8 h-8 text-blue-600" />
                  </motion.div>
                  <h3 className="font-bold text-slate-900 mb-2">Tested Products</h3>
                  <p className="text-sm text-slate-600">All instruments are factory tested</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn} whileHover={{ scale: 1.05 }}>
              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <motion.div 
                    className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Wrench className="w-8 h-8 text-blue-600" />
                  </motion.div>
                  <h3 className="font-bold text-slate-900 mb-2">Warranty Support</h3>
                  <p className="text-sm text-slate-600">Manufacturer warranty on all products</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn} whileHover={{ scale: 1.05 }}>
              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <motion.div 
                    className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Users className="w-8 h-8 text-blue-600" />
                  </motion.div>
                  <h3 className="font-bold text-slate-900 mb-2">Expert Guidance</h3>
                  <p className="text-sm text-slate-600">Technical consultation available</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-900">What Our Clients Say</h2>
            <p className="text-slate-600">Trusted by industries across India</p>
          </motion.div>

          <TestimonialCarousel />
        </div>
      </section>

      

      {/* FAQ Section */}
      <section className="py-16 bg-white/80">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-600">Common questions about our products and services</p>
          </motion.div>

          <FAQAccordion />
        </div>
      </section>

     

      {/* Contact CTA */}
      <section className="py-16 bg-white/80">
        <div className="container mx-auto px-4">
          <div className="bg-slate-900 rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Need Instrumentation Solutions?
                </h2>
                <p className="text-slate-300 mb-6">
                  Contact us for product inquiries, technical specifications, or quotations. Our team is ready to assist you.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-400" />
                    <span>+91 7987004209</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-400" />
                    <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    onClick={() => setEnquiryOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Send Enquiry
                  </Button>
                  <a href="https://wa.me/917987004209?text=Hello%2C%20I%20am%20interested%20in%20your%20industrial%20instrumentation%20products" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="border-white bg-blue-700 text-white hover:bg-white hover:text-slate-900">
                      <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative h-64 md:h-auto overflow-hidden">
                <Image
                  src="/slider5.png"
                  alt="Contact Us"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Popup */}
      <EnquiryPopup 
        isOpen={enquiryOpen} 
        onClose={() => setEnquiryOpen(false)} 
        productName={selectedProduct}
      />
    </div>
  )
}
