'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, CheckCircle2, Phone, Factory, Gauge, Thermometer, Activity, Users, Award, Shield, Zap, TrendingUp, Clock, Wrench } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {

  const products = [
    {
      title: 'Electromagnetic Flow Meters',
      description: 'Accurate liquid flow measurement for water, chemicals, and slurries',
      icon: Activity
    },
    {
      title: 'Pressure Transmitters',
      description: 'Industrial pressure sensors for process control applications',
      icon: Gauge
    },
    {
      title: 'Thermowells',
      description: 'Protective sheaths for temperature sensors in high-pressure environments',
      icon: Thermometer
    },
    {
      title: 'RTD & Thermocouples',
      description: 'Temperature sensors for precise industrial measurements',
      icon: Zap
    },
    {
      title: 'Level Switches',
      description: 'Conductivity and float-based level detection systems',
      icon: Factory
    },
    {
      title: 'Temperature Gauges',
      description: 'Bimetallic and digital temperature indicators',
      icon: Thermometer
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80"
            alt="Industrial Instrumentation"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70"></div>
        </div>

        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-600 text-white px-4 py-1 text-sm font-medium mb-6">
              Established 2018 | Bhopal, Madhya Pradesh
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Industrial Instrumentation Solutions
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-slate-300">
              Advick Enterprises specializes in Temperature, Flow, Level & Pressure measurement instruments for industrial applications.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/products">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  View Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-blue-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 7987004209</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              <span>ISO Compliant Products</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 text-sm font-medium mb-4">
                About Advick Enterprises
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                Your Partner in Industrial Instrumentation
              </h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  Since 2018, Advick Enterprises has been providing quality instrumentation solutions to industries across Madhya Pradesh and beyond. We specialize in measurement and control instruments for industrial processes.
                </p>
                <p>
                  Our team brings extensive experience in Temperature & Cooling processes, Flow measurement, Pressure instrumentation, and Level detection systems. We work with manufacturing plants, chemical facilities, and process industries.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="text-3xl font-bold text-blue-600">6+</div>
                  <div className="text-sm text-slate-600">Years in Business</div>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="text-3xl font-bold text-blue-600">100+</div>
                  <div className="text-sm text-slate-600">Satisfied Clients</div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/about">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
                alt="Industrial Instrumentation"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Quality Assured</div>
                    <div className="text-sm text-slate-600">All products tested & certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 text-sm font-medium mb-4">
              Our Products
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Instrumentation Products We Supply
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Complete range of industrial measurement and control instruments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-2">{product.title}</h3>
                        <p className="text-sm text-slate-600">{product.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/products">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Why Choose Advick Enterprises
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Quality Products</h3>
              <p className="text-sm text-slate-600">ISO compliant instruments from trusted manufacturers</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Expert Team</h3>
              <p className="text-sm text-slate-600">Experienced professionals with process knowledge</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Technical Support</h3>
              <p className="text-sm text-slate-600">Installation guidance and after-sales service</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Competitive Pricing</h3>
              <p className="text-sm text-slate-600">Best value without compromising on quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Industries We Serve
            </h2>
            <p className="text-slate-600">Serving diverse industrial sectors with specialized solutions</p>
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
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto mb-3" />
                <p className="font-medium text-slate-800">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-xl md:text-2xl mb-6 italic">
              "Reliable products and excellent technical support. Advick Enterprises has been our go-to supplier for instrumentation needs."
            </p>
            <div>
              <p className="font-bold">Vishal Mehta</p>
              <p className="text-blue-200 text-sm">Plant Manager, Chemical Industry</p>
            </div>
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
