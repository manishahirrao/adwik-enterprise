'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube, Instagram, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/clients', label: 'Our Clients' },
    { href: '/contact', label: 'Contact' },
  ]

  const legalLinks = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-conditions', label: 'Terms & Conditions' },
    { href: '/cookie-policy', label: 'Cookie Policy' },
  ]

  const services = [
    'Flow Instrumentation',
    'Pressure Gauge',
    'Thermowell',
    'Temperature Gauge',
    'RTD Sensors',
    'Level Instrumentation',
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="Advick Enterprises Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-lg font-bold">Advick Enterprises</div>
                <div className="text-xs text-blue-200">Since 2018</div>
              </div>
            </div>
            <p className="text-blue-100 mb-6">
              A well-established vendor offering advanced instruments with superior performance, maximum accuracy, durability, and efficiency for all industries.
            </p>
            <div className="flex space-x-3">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 bg-blue-800 hover:bg-blue-700 rounded-full transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 bg-blue-800 hover:bg-blue-700 rounded-full transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 bg-blue-800 hover:bg-blue-700 rounded-full transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 bg-blue-800 hover:bg-blue-700 rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-center text-blue-100 hover:text-white transition-colors group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-6">Our Products</h3>
            <ul className="space-y-3">
              {services.slice(0, 4).map((service) => (
                <li key={service}>
                  <Link href="/products">
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-center text-blue-100 hover:text-white transition-colors group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h3 className="text-lg font-bold mb-6">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-center text-blue-100 hover:text-white transition-colors group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-blue-100">
                  E1/203, Fortune Divine City, Misrod, Bhopal, MP 462026
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div className="text-blue-100">
                  <a href="mailto:advickenterprises@gmail.com" className="hover:text-white transition-colors block">
                    advickenterprises@gmail.com
                  </a>
                  <a href="mailto:info@advickenterprises.in" className="hover:text-white transition-colors block">
                    info@advickenterprises.in
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div className="text-blue-100">
                  <a href="tel:7987004209" className="hover:text-white transition-colors block">
                    7987004209
                  </a>
                  <a href="tel:8962488601" className="hover:text-white transition-colors block">
                    8962488601
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
            <p>© 2025 Advick Enterprises. All rights reserved.</p>
           
          </div>
        </div>
      </div>
    </footer>
  )
}
