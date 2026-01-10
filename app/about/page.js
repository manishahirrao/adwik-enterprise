'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Award, Target, Lightbulb, CheckCircle2, TrendingUp, ArrowRight, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  const values = [
    {
      iconName: 'Target',
      title: 'Our Mission',
      description: 'To provide high-quality instrumentation solutions that enable industries to achieve precise measurement, automation, and control in their processes.'
    },
    {
      iconName: 'Lightbulb',
      title: 'Our Vision',
      description: 'To be the leading provider of industrial instrumentation solutions, recognized for innovation, reliability, and exceptional customer service.'
    },
    {
      iconName: 'Award',
      title: 'Our Values',
      description: 'Quality, Integrity, Innovation, and Customer Satisfaction form the foundation of everything we do at Advick Enterprises.'
    }
  ]
  
  const getIcon = (iconName) => {
    const icons = { Target, Lightbulb, Award, Users, CheckCircle2, TrendingUp }
    return icons[iconName]
  }

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80"
            alt="About Advick Enterprises"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-600 text-white px-4 py-1 text-sm font-medium mb-4">
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Advick Enterprises
            </h1>
            <p className="text-xl text-slate-300">
              Providing quality industrial instrumentation solutions since 2018
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Company</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <strong>Advick Enterprises</strong> was established in 2018 in Bhopal, Madhya Pradesh. We are a trusted supplier of industrial instrumentation products, specializing in measurement and control equipment for various industrial applications.
                </p>
                <p>
                  Our company has built a strong reputation by providing quality products and reliable service to industries across the region. We work with manufacturing plants, chemical facilities, pharmaceutical companies, and other process industries.
                </p>
                <p>
                  We supply a comprehensive range of instrumentation including flow meters, pressure transmitters, temperature sensors, level switches, and related accessories. Our team has practical knowledge of industrial processes and can help customers select the right instruments for their applications.
                </p>
              </div>
            </div>

            <div>
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
                alt="Advick Enterprises"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-slate-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">2018</div>
                  <div className="text-sm text-slate-600">Established</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">100+</div>
                  <div className="text-sm text-slate-600">Clients</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">1000+</div>
                  <div className="text-sm text-slate-600">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">What Drives Us</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = getIcon(value.iconName)
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Our Expertise</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We have extensive knowledge and experience in various areas of industrial instrumentation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {expertise.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <p className="text-slate-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Our Leadership</h2>
            <p className="text-slate-600">Meet the people behind Advick Enterprises</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64 bg-slate-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1 text-slate-900">{member.name}</h3>
                  <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 text-sm font-medium rounded mb-3">
                    {member.role}
                  </div>
                  <p className="text-slate-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Industries We Serve</h2>
            <p className="text-slate-600">We provide instrumentation solutions to various industrial sectors</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Chemical Processing',
              'Oil & Gas',
              'Pharmaceutical',
              'Food & Beverage',
              'Water Treatment',
              'Power Plants',
              'Manufacturing',
              'HVAC Systems'
            ].map((industry, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-lg text-center hover:bg-slate-100 transition-colors">
                <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto mb-3" />
                <p className="font-medium text-slate-800">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Advick Enterprises</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { iconName: 'Award', title: 'Quality Products', desc: 'ISO compliant instrumentation' },
              { iconName: 'Users', title: 'Expert Team', desc: 'Experienced professionals' },
              { iconName: 'CheckCircle2', title: 'Reliable Service', desc: 'Timely delivery & support' },
              { iconName: 'TrendingUp', title: 'Fair Pricing', desc: 'Competitive rates' }
            ].map((item, index) => {
              const Icon = getIcon(item.iconName)
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                  <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-blue-100 text-sm">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-slate-900 rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Partner With Us
                </h2>
                <p className="text-slate-300 mb-6">
                  Contact us for product inquiries, technical specifications, or quotations. Our team is ready to assist you with your instrumentation needs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      Get a Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <a href="tel:7987004209">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
                  alt="Contact Us"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
