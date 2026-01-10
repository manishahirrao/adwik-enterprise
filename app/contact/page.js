'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import Image from 'next/image'

export default function Contact() {
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

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: [
        'E1/203, Fortune Divine City',
        'Misrod, Bhopal',
        'Madhya Pradesh - 462026'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [
        '7987004209',
        '8962488601'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'advickenterprises@gmail.com',
        'info@advickenterprises.in'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Saturday',
        '9:00 AM - 6:00 PM',
        'Sunday: Closed'
      ],
      color: 'from-orange-500 to-orange-600'
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
          src="https://images.unsplash.com/photo-1577459212160-e089168a797d?w=1920&q=80"
          alt="Contact Us"
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
              Contact Us
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              We're here to help with all your instrumentation needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 h-full group">
                    <CardContent className="p-8">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`inline-flex p-4 bg-gradient-to-r ${info.color} rounded-full mb-6 shadow-lg`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-4 text-slate-800">{info.title}</h3>
                      <div className="space-y-2">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-slate-600">
                            {info.title === 'Phone' ? (
                              <a href={`tel:${detail}`} className="hover:text-blue-600 transition-colors">
                                {detail}
                              </a>
                            ) : info.title === 'Email' ? (
                              <a href={`mailto:${detail}`} className="hover:text-blue-600 transition-colors break-all">
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Map and Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700">Location</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">Visit Our Office</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-none shadow-2xl overflow-hidden">
                <div className="relative h-96 bg-gradient-to-br from-blue-100 to-blue-50">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.7426524!2d77.4876!3d23.2176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEzJzAzLjQiTiA3N8KwMjknMTUuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-slate-800 mb-6">Why Choose Advick Enterprises?</h3>
              
              <Card className="border-l-4 border-blue-600 shadow-md">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg text-slate-800 mb-2">Quality Products</h4>
                  <p className="text-slate-600">We provide high-quality industrial instrumentation from trusted manufacturers.</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-blue-600 shadow-md">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg text-slate-800 mb-2">Expert Support</h4>
                  <p className="text-slate-600">Our experienced team provides technical support and consultation for your projects.</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-blue-600 shadow-md">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg text-slate-800 mb-2">Timely Delivery</h4>
                  <p className="text-slate-600">We ensure prompt delivery and installation of instrumentation equipment.</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-blue-600 shadow-md">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg text-slate-800 mb-2">Competitive Pricing</h4>
                  <p className="text-slate-600">Best value for money with transparent pricing and no hidden costs.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-none shadow-2xl overflow-hidden">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-10"></div>
                <CardContent className="p-12 relative z-10">
                  <div className="text-center mb-8">
                    <Badge className="mb-4 bg-blue-100 text-blue-700">Quick Contact</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Ready to Get Started?</h2>
                    <p className="text-lg text-slate-600">Contact us today for expert instrumentation solutions</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <motion.a
                      href="tel:7987004209"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="block"
                    >
                      <Card className="border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                        <CardContent className="p-6 text-center">
                          <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                          <p className="font-semibold text-slate-800 mb-1">Call Us</p>
                          <p className="text-sm text-slate-600">7987004209</p>
                        </CardContent>
                      </Card>
                    </motion.a>

                    <motion.a
                      href="mailto:advickenterprises@gmail.com"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="block"
                    >
                      <Card className="border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                        <CardContent className="p-6 text-center">
                          <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                          <p className="font-semibold text-slate-800 mb-1">Email Us</p>
                          <p className="text-sm text-slate-600 truncate">advickenterprises@gmail.com</p>
                        </CardContent>
                      </Card>
                    </motion.a>

                    <motion.a
                      href="https://wa.me/917987004209"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="block"
                    >
                      <Card className="border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                        <CardContent className="p-6 text-center">
                          <Send className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                          <p className="font-semibold text-slate-800 mb-1">WhatsApp</p>
                          <p className="text-sm text-slate-600">Chat with us</p>
                        </CardContent>
                      </Card>
                    </motion.a>
                  </div>
                </CardContent>
              </div>
            </Card>
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
              We're Most Trusted Instrumentation Services Provider
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Serving industries across Bhopal and Madhya Pradesh with quality instrumentation solutions since 2018
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
