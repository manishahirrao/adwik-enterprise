'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Building2, Users, Award, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Clients() {
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
      company: 'Plant Manager, Chemical Industry',
      text: 'Reliable products and excellent technical support. Advick Enterprises has been our go-to supplier for instrumentation needs.'
    },
    {
      name: 'Rajesh Kumar',
      company: 'Maintenance Head, Manufacturing',
      text: 'Quality instruments at competitive prices. Their team understands our requirements and delivers on time.'
    },
    {
      name: 'Amit Sharma',
      company: 'Project Engineer, Pharmaceutical',
      text: 'Professional service and good product knowledge. We have been working with them for over 3 years now.'
    }
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</h3>
                    <p className="text-slate-600 text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Industries We Serve</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Providing instrumentation solutions across multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800">{industry}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-white/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Our Valued Clients</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We're proud to serve these industry leaders
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
              <Card key={index} className="hover:shadow-lg transition-shadow">
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
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 max-w-2xl mx-auto">
              We serve a diverse portfolio of clients across multiple industries. Our commitment to quality and reliability has earned us the trust of leading organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Client Testimonials</h2>
            <p className="text-slate-600">What our clients say about us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-slate-800">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Clients?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Experience the quality and reliability that our clients trust
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
