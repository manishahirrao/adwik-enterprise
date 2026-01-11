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
    'Electromagnetic Flow Meters',
    'RTD Head Type Thermocouples',
    'Analog Pressure Gauges',
    'Head Type RTD Sensors',
    'Digital PID Temperature Controllers',
    'Analog Temperature Gauges'
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
    <div className="min-h-screen bg-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20">
        <div className="absolute inset-0">
          <Image
            src="/slider7.png"
            alt="About Advick Enterprises"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/40"></div>
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
      <section className="py-16 bg-white/80">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Company</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <strong>Advick Enterprises</strong> is a well-established vendor and supplier that offers a wide range of advanced instruments like electromagnetic flow meters, RTD head type thermocouples, analog pressure gauges, head type RTD sensors, digital PID temperature controllers, analog temperature gauges, and flow instrumentation.
                </p>
                <p>
                  The offered products are designed with superior performance in mind, maximum accuracy, durability, and efficiency for all industries. From critical flow measurement with zero pressure drop to shock & vibration-resistant pressure gauges and auto-tuning PID controllers, we make sure that each product is a solution for your needs.
                </p>
                <p>
                  We provide more than quality equipment - we bring a partnership to help you streamline your operations and elevate your processes. Our team has practical knowledge of industrial processes and can help customers select the right instruments for their applications.
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
      <section className="py-16 bg-cyan-50">
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
      <section className="py-16 bg-white/80">
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
      <section className="py-16 bg-cyan-50">
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

      {/* Our Capabilities */}
      <section className="py-16 bg-white/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Our Capabilities</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              What we can do for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-slate-900">Product Supply</h3>
                <p className="text-slate-600 mb-4">
                  We supply a wide range of industrial instrumentation products from reputed manufacturers. Our inventory includes flow meters, pressure transmitters, temperature sensors, level switches, and related accessories.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Wide product range</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Quality certified products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Competitive pricing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-slate-900">Technical Consultation</h3>
                <p className="text-slate-600 mb-4">
                  Our team provides technical guidance for selecting appropriate instrumentation based on your process requirements. We help you understand specifications and recommend suitable products.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Application analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Product recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Technical specifications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-slate-900">Installation Support</h3>
                <p className="text-slate-600 mb-4">
                  We provide guidance for proper installation of instrumentation equipment. Our team can assist with installation procedures and best practices to ensure optimal performance.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Installation guidelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Wiring diagrams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Commissioning support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-slate-900">After-Sales Service</h3>
                <p className="text-slate-600 mb-4">
                  We offer after-sales support including troubleshooting assistance, spare parts supply, and technical queries. Our team is available to help resolve any issues you may face.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Technical support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Spare parts availability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Troubleshooting assistance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Our Commitment to Clients</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-slate-900">Quality Assurance</h3>
                <p className="text-slate-600">
                  We supply products that meet industry standards and quality requirements. All our products come with manufacturer warranties and certifications.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-slate-900">Timely Delivery</h3>
                <p className="text-slate-600">
                  We understand the importance of project timelines. We maintain good stock levels and work with reliable logistics partners to ensure prompt delivery.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-slate-900">Transparent Pricing</h3>
                <p className="text-slate-600">
                  Our quotations are clear and transparent with no hidden costs. We provide competitive pricing while maintaining product quality standards.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-slate-900">Customer Support</h3>
                <p className="text-slate-600">
                  Our team is accessible and responsive to customer queries. We believe in building long-term relationships through reliable service and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
