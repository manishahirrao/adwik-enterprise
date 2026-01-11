'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Navigation({ onEnquiryClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/clients', label: 'Our Clients' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`bg-blue-900 text-white py-2 text-sm transition-all duration-300 ${
          scrolled ? 'h-0 py-0 overflow-hidden' : 'h-auto'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="mailto:advickenterprises@gmail.com" className="flex items-center hover:text-blue-200 transition-colors">
              <Mail className="w-4 h-4 mr-1" />
              advickenterprises@gmail.com
            </a>
            <a href="tel:7987004209" className="flex items-center hover:text-blue-200 transition-colors">
              <Phone className="w-4 h-4 mr-1" />
              7987004209
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <motion.nav
        className={`transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3"
              >
                <div className="relative w-12 h-12">
                  <Image
                    src="/logo.png"
                    alt="Advick Enterprises Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    Advick Enterprises
                  </div>
                  <div className="text-xs text-slate-600">Since 2018</div>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="relative px-4 py-2"
                  >
                    <span
                      className={`text-sm font-medium transition-colors ${
                        pathname === link.href
                          ? 'text-blue-600'
                          : 'text-slate-700 hover:text-blue-600'
                      }`}
                    >
                      {link.label}
                    </span>
                    {pathname === link.href && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                onClick={onEnquiryClick}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="container mx-auto px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <motion.div
                      whileHover={{ x: 4 }}
                      className={`block px-4 py-3 rounded-lg ${
                        pathname === link.href
                          ? 'bg-blue-50 text-blue-600 font-semibold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {link.label}
                    </motion.div>
                  </Link>
                ))}
                <Button 
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onEnquiryClick()
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4"
                >
                  Get Quote
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}
