'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Award, Target, Lightbulb, CheckCircle2, TrendingUp, Phone, Mail } from 'lucide-react'
import Image from 'next/image'
import EnquiryPopup from '@/components/EnquiryPopup'

export default function About() {
  const [enquiryOpen, setEnquiryOpen] = useState(false)
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
     
    },
    {
      name: 'Anurag Sahu',
      role: 'CEO',
      description: 'Driving innovation and operational excellence in instrumentation',
 
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
                src="/slider13.png"
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Our Expertise</h2>
              <p className="text-slate-600 mb-8">
                We have extensive knowledge and experience in various areas of industrial instrumentation
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <p className="text-slate-700 font-medium text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Image
                src="/adt673_calibrator.jpg"
                alt="Our Expertise"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
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
            {team.map((member, index) => {
              const initials = member.name.split(' ').map(n => n[0]).join('')
              return (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-6">
                      <span className="text-5xl font-bold text-white">{initials}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-slate-900">{member.name}</h3>
                    <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 text-sm font-medium rounded-full mb-4">
                      {member.role}
                    </div>
                    <p className="text-slate-600 leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              )
            })}
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
            <Card className="hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48 bg-slate-100">
                <Image
                  src="/electromagnetic-flow-meter-500x500.webp"
                  alt="Product Supply"
                  fill
                  className="object-cover"
                />
              </div>
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

            <Card className="hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48 bg-slate-100">
                <Image
                  src="/pressure-transmitter-500x500.webp"
                  alt="Technical Consultation"
                  fill
                  className="object-cover"
                />
              </div>
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

            <Card className="hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48 bg-slate-100">
                <Image
                  src="/rtd-pt100-temperature-sensor-500x500.webp"
                  alt="Installation Support"
                  fill
                  className="object-cover"
                />
              </div>
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

            <Card className="hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48 bg-slate-100">
                <Image
                  src="/digital-temperature-controller-500x500.webp"
                  alt="After-Sales Service"
                  fill
                  className="object-cover"
                />
              </div>
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

      {/* CTA Section */}
      <section className="py-16 bg-white/80">
        <div className="container mx-auto px-4">
          <div className="bg-slate-900 rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Work With Us?
                </h2>
                <p className="text-slate-300 mb-6">
                  Partner with Advick Enterprises for reliable industrial instrumentation solutions. Contact us today to discuss your requirements.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-400" />
                    <span>+91 7987004209</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>advickenterprises@gmail.com</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    onClick={() => setEnquiryOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Send Enquiry
                  </Button>
                  <a href="https://wa.me/917987004209?text=Hello%2C%20I%20am%20interested%20in%20your%20industrial%20instrumentation%20products" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="border-white bg-blue-700 text-white hover:bg-white hover:text-slate-900">
                      <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative h-64 md:h-auto overflow-hidden">
                <Image
                  src="/engine-img-2-1.jpg"
                  alt="Contact Advick Enterprises"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Popup */}
      <EnquiryPopup 
        isOpen={enquiryOpen} 
        onClose={() => setEnquiryOpen(false)} 
      />

    </div>
  )
}
