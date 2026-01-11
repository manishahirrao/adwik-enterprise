'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Format WhatsApp message
    const whatsappMessage = `*New Contact Form Submission*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Company:* ${formData.company || 'Not provided'}%0A` +
      `*Message:* ${formData.message}%0A`

    // Open WhatsApp with the message
    const whatsappUrl = `https://wa.me/917987004209?text=${whatsappMessage}`
    window.open(whatsappUrl, '_blank')
    
    // Show success message
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 500)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: [
        'E1/203, Fortune Divine City',
        'Misrod, Bhopal',
        'Madhya Pradesh - 462026'
      ]
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [
        '+91 7987004209',
        '+91 8962488601'
      ],
      links: ['tel:7987004209', 'tel:8962488601']
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'advickenterprises@gmail.com'
      ],
      links: ['mailto:advickenterprises@gmail.com']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Saturday',
        '9:00 AM - 6:00 PM',
        'Sunday: Closed'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20">
        <div className="absolute inset-0">
          <Image
            src="/slider13.png"
            alt="Contact Us"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-600 text-white px-4 py-1 text-sm font-medium mb-4">
              Contact Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-slate-300">
              We're here to help with all your instrumentation needs
            </p>
          </div>
        </div>
      </section>

      

      {/* Contact Form and Map Section */}
      <section className="py-16 bg-white/80">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Send Us a Message</h2>
              <p className="text-slate-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <p className="text-green-800">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXXXXXXX"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map and Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Visit Our Office</h2>
              
              <Card className="mb-6 overflow-hidden shadow-lg">
                <div className="relative h-80 bg-slate-200">
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

              <div className="space-y-4">
                <Card className="border-l-4 border-blue-600">
                  <CardContent className="p-4">
                    <h4 className="font-bold text-slate-900 mb-2">Quality Products</h4>
                    <p className="text-sm text-slate-600">High-quality industrial instrumentation from trusted manufacturers</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-blue-600">
                  <CardContent className="p-4">
                    <h4 className="font-bold text-slate-900 mb-2">Expert Support</h4>
                    <p className="text-sm text-slate-600">Technical support and consultation for your projects</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-blue-600">
                  <CardContent className="p-4">
                    <h4 className="font-bold text-slate-900 mb-2">Timely Delivery</h4>
                    <p className="text-sm text-slate-600">Prompt delivery and installation of equipment</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Contact Info Cards */}
      <section className="py-16 bg-cyan-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-slate-900">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-slate-600 text-sm">
                          {info.links && info.links[idx] ? (
                            <a href={info.links[idx]} className="hover:text-blue-600 transition-colors">
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
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
