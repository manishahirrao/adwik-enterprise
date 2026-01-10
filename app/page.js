'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, Menu, X, Factory, Gauge, Thermometer, Activity, Users, Award, Shield, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])

  const products = [
    {
      title: 'Flow Meter',
      description: 'Electromagnetic flow meters for accurate flow measurement',
      icon: Activity,
      image: 'https://images.unsplash.com/photo-1606206886378-e49a19ad0933?w=800&q=80'
    },
    {
      title: 'Pressure Transmitter',
      description: 'High-precision pressure measurement solutions',
      icon: Gauge,
      image: 'https://images.unsplash.com/photo-1606206886378-e49a19ad0933?w=800&q=80'
    },
    {
      title: 'Thermowell',
      description: 'Temperature protection for harsh environments',
      icon: Thermometer,
      image: 'https://images.unsplash.com/photo-1606206886378-e49a19ad0933?w=800&q=80'
    },
    {
      title: 'RTD Sensors',
      description: 'Resistance temperature detectors for accurate readings',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1606206886378-e49a19ad0933?w=800&q=80'
    },
    {
      title: 'Level Switch',
      description: 'Conductivity level switches for liquid level control',
      icon: Factory,
      image: 'https://images.unsplash.com/photo-1606206886378-e49a19ad0933?w=800&q=80'
    },
    {
      title: 'Temperature Gauge',
      description: 'Precision temperature measurement instruments',
      icon: Thermometer,
      image: 'https://images.unsplash.com/photo-1606206886378-e49a19ad0933?w=800&q=80'
    }
  ]

  const services = [
    { title: 'Flow Instrumentation', icon: Activity },
    { title: 'Pressure Instrumentation', icon: Gauge },
    { title: 'Level Instrumentation', icon: Factory },
    { title: 'Temperature Gauges', icon: Thermometer },
    { title: 'Thermocouple', icon: Zap },
    { title: 'RTD Sensors', icon: Shield }
  ]

  const features = [
    {
      icon: CheckCircle2,
      title: 'Accurate Estimates',
      description: 'We bring you the most accurate and fair-price service estimates'
    },
    {
      icon: Shield,
      title: 'Trusted Quality',
      description: 'Certified for high quality instrumentation services'
    },
    {
      icon: Award,
      title: 'Guarantee',
      description: 'Covers parts and labor on qualifying repairs and services'
    }
  ]

  const stats = [
    { value: '500+', label: 'Pressure Gauges', icon: Gauge },
    { value: '1000+', label: 'Thermowells', icon: Thermometer },
    { value: '100+', label: 'Happy Clients', icon: Users },
    { value: '6+', label: 'Years Experience', icon: Award }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <motion.section 
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1611023624193-31924e0e7d3c?w=1920&q=80"
            alt="Industrial Background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-white"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Badge className="mb-6 bg-blue-500/20 text-white border-blue-400 px-6 py-2 text-sm">
                Since 2018 - Your Trusted Partner
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Welcome to
              <br />
              <span className="text-6xl md:text-8xl">Advick Enterprises</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Leading provider of industrial instrumentation solutions for Temperature, Flow, Level & Pressure measurement
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="/products">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6 group">
                  Explore Products
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div 
              className="w-1.5 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-white">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="inline-block p-4 bg-blue-100 rounded-full mb-4"
                    >
                      <feature.icon className="w-8 h-8 text-blue-600" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2 text-slate-800">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700">About Us</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">Instrumentation Service Excellence</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-20"></div>
                <Image
                  src="https://images.unsplash.com/photo-1717386255785-59c670564341?w=800&q=80"
                  alt="Advick Enterprises"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl relative z-10"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-slate-800">We Continuously Raise Up The Culture</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Established in 2018, Advick Enterprises has built a reputation for excellence in industrial instrumentation. We bring rich knowledge of various Temperature & Cooling processes, along with expertise in Flow, Temperature, Level, and Pressure measurement.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                With our deep understanding, we provide comprehensive solutions to various industrial processes in terms of measurement, automation, and control, including specialized systems like batching systems.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <Users className="w-8 h-8 text-blue-600 mb-2" />
                  <p className="font-bold text-slate-800">Jaya Sahu</p>
                  <p className="text-sm text-slate-600">Proprietor</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <Award className="w-8 h-8 text-blue-600 mb-2" />
                  <p className="font-bold text-slate-800">Anurag Sahu</p>
                  <p className="text-sm text-slate-600">CEO</p>
                </div>
              </div>

              <Link href="/about">
                <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-6 py-6 group">
                  Learn More About Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-block p-4 bg-white/10 rounded-full mb-4"
                >
                  <stat.icon className="w-8 h-8" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-blue-200">{stat.label}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700">Our Products</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">Facilities We Provide</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Comprehensive instrumentation solutions for your industrial needs</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mt-4"></div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                      <motion.div
                        className="absolute top-4 right-4 p-3 bg-white rounded-full shadow-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-6 h-6 text-blue-600" />
                      </motion.div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-slate-600">{product.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link href="/products">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 group">
                View All Products
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">Instrumentation Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="border-2 border-slate-100 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800">{service.title}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30">Customer Feedback</Badge>
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <motion.svg
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="w-8 h-8 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </motion.svg>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl md:text-3xl font-light mb-6 italic"
            >
              "Great service and honest. I always recommend getting services from Advick Enterprises"
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-xl font-semibold">Vishal Mehta</p>
              <p className="text-blue-200">Customer</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800"></div>
            <Image
              src="https://images.unsplash.com/photo-1577459212160-e089168a797d?w=1200&q=80"
              alt="Industrial Background"
              fill
              className="object-cover opacity-20"
            />
            <div className="relative z-10 px-8 py-16 md:py-24 text-center text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                Get in touch with our team for expert instrumentation solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6 group">
                    Contact Us Today
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="tel:7987004209">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                    <Phone className="mr-2" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
