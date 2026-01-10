'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Award, Target, Lightbulb, CheckCircle2, TrendingUp } from 'lucide-react'
import Image from 'next/image'

export default function About() {
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

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide high-quality instrumentation solutions that enable industries to achieve precise measurement, automation, and control in their processes.'
    },
    {
      icon: Lightbulb,
      title: 'Our Vision',
      description: 'To be the leading provider of industrial instrumentation solutions, recognized for innovation, reliability, and exceptional customer service.'
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Quality, Integrity, Innovation, and Customer Satisfaction form the foundation of everything we do at Advick Enterprises.'
    }
  ]

  const expertise = [
    'Temperature & Cooling Processes',
    'Flow Measurement Systems',
    'Pressure Measurement Solutions',
    'Level Instrumentation',
    'Process Automation & Control',
    'Batching Systems'
  ]

  const team = [
    {
      name: 'Jaya Sahu',
      role: 'Proprietor',
      description: 'Leading the company with vision and dedication since inception',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80'
    },
    {
      name: 'Anurag Sahu',
      role: 'CEO',
      description: 'Driving innovation and operational excellence in instrumentation',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1717386255785-59c670564341?w=1920&q=80"
          alt="About Advick Enterprises"
          fill
          className="object-cover opacity-20"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 bg-blue-500/20 text-white border-blue-400 px-6 py-2">
              About Us
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About Advick Enterprises
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Your trusted partner in industrial instrumentation since 2018
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-blue-100 text-blue-700">Our Story</Badge>
              <h2 className="text-4xl font-bold mb-6 text-slate-800">We Continuously Raise Up The Culture</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Established in 2018, <strong>Advick Enterprises</strong> has emerged as a trusted name in industrial instrumentation based in Bhopal, Madhya Pradesh. We have built our reputation on delivering excellence and reliability in every project we undertake.
                </p>
                <p>
                  Our team possesses rich knowledge of various Temperature & Cooling processes, along with comprehensive expertise in Flow, Temperature, Level, and Pressure measurement processes. This depth of understanding enables us to provide tailored solutions to diverse industrial challenges.
                </p>
                <p>
                  We specialize in providing comprehensive solutions for industrial processes in terms of measurement, automation, and control. Our expertise extends to specialized systems like batching systems, ensuring precision and efficiency in industrial operations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-20"></div>
                <Image
                  src="https://images.unsplash.com/photo-1717386255785-59c670564341?w=800&q=80"
                  alt="Advick Enterprises Facility"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl relative z-10 w-full"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 grid grid-cols-3 gap-4"
              >
                <Card className="border-none shadow-lg bg-gradient-to-br from-blue-50 to-white">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">6+</div>
                    <div className="text-sm text-slate-600">Years</div>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-lg bg-gradient-to-br from-blue-50 to-white">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">100+</div>
                    <div className="text-sm text-slate-600">Clients</div>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-lg bg-gradient-to-br from-blue-50 to-white">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">1000+</div>
                    <div className="text-sm text-slate-600">Projects</div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700">Our Values</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">What Drives Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                    <CardContent className="p-8">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex p-4 bg-blue-100 rounded-full mb-6"
                      >
                        <Icon className="w-8 h-8 text-blue-600" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-4 text-slate-800">{value.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700">Expertise</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">Our Areas of Expertise</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Comprehensive knowledge across multiple instrumentation domains</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mt-4"></div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {expertise.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="border-2 border-slate-100 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <p className="text-slate-700 font-medium">{item}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700">Leadership</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">Meet Our Team</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                  </div>
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-2 text-slate-800">{member.name}</h3>
                    <Badge className="mb-4 bg-blue-100 text-blue-700">{member.role}</Badge>
                    <p className="text-slate-600">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white relative overflow-hidden">
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
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Why Choose Us</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Work With Advick Enterprises?</h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Award, title: 'Quality Products', desc: 'High-grade instrumentation' },
              { icon: Users, title: 'Expert Team', desc: 'Experienced professionals' },
              { icon: CheckCircle2, title: 'Reliable Service', desc: 'Timely delivery & support' },
              { icon: TrendingUp, title: 'Competitive Pricing', desc: 'Best value for money' }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex p-4 bg-white/20 rounded-full mb-4"
                      >
                        <Icon className="w-8 h-8" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-blue-100">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
