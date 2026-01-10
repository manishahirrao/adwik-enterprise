'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Building2, Users, Award, TrendingUp, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Clients() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const stats = [
    { icon: Building2, value: '100+', label: 'Total Clients' },
    { icon: Users, value: '1000+', label: 'Projects Completed' },
    { icon: Award, value: '6+', label: 'Years Experience' },
    { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' }
  ]

  const industries = [
    'Manufacturing',
    'Chemical Processing',
    'Pharmaceuticals',
    'Food & Beverage',
    'Oil & Gas',
    'Water Treatment',
    'Power Generation',
    'Automotive',
    'Textile',
    'Paper & Pulp'
  ]

  const testimonials = [
    {
      name: 'Vishal Mehta',
      company: 'Manufacturing Sector',
      text: 'Great service and honest. I always recommend getting services from Advick Enterprises',
      rating: 5
    },
    {
      name: 'Client Representative',
      company: 'Chemical Industry',
      text: 'Excellent quality products and timely delivery. Their technical support is outstanding.',
      rating: 5
    },
    {
      name: 'Industry Partner',
      company: 'Process Industry',
      text: 'Reliable instrumentation solutions with competitive pricing. Highly recommended.',
      rating: 5
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
          src="https://images.unsplash.com/photo-1582193607281-dafb7941640f?w=1920&q=80"
          alt="Our Clients"
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
              Our Clients
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Trusted by Leading Industries
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Serving diverse industries with quality instrumentation solutions since 2018
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-white">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex p-4 bg-blue-100 rounded-full mb-4"
                      >
                        <Icon className="w-8 h-8 text-blue-600" />
                      </motion.div>
                      <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</h3>
                      <p className="text-slate-600">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700">Industries We Serve</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">Diverse Industry Experience</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Providing instrumentation solutions across multiple sectors</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mt-4"></div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {industries.map((industry, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="border-2 border-slate-100 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="inline-flex p-3 bg-blue-100 rounded-full mb-3 group-hover:bg-blue-600 transition-colors"
                    >
                      <Building2 className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                    </motion.div>
                    <h3 className="text-sm font-semibold text-slate-800">{industry}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700">Our Valuable Clients</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">Trusted Partners</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">We're proud to serve these industry leaders</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mt-4"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[...Array(18)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="border-2 border-slate-100 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="p-8 flex items-center justify-center h-32 bg-gradient-to-br from-slate-50 to-white">
                      <div className="text-center">
                        <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                        <p className="text-xs text-slate-600 font-medium">Client {index + 1}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              We serve a diverse portfolio of clients across multiple industries. Our commitment to quality and reliability has earned us the trust of leading organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-slate-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-slate-800">{testimonial.name}</p>
                      <p className="text-sm text-slate-600">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join Our Clients?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Experience the quality and reliability that our clients trust
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6 group">
                Get Started Today
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
