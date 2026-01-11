'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, CheckCircle2, Phone, Mail, Factory, Gauge, Thermometer, Activity, Users, Award, Zap, TrendingUp, Clock, Wrench } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import EnquiryPopup from '@/components/EnquiryPopup'
import HeroSlider from '@/components/HeroSlider'

export default function Home() {
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState('')

  // Auto-open popup when page loads
  useEffect(() => {
    // Check if user has already seen the popup today
    const lastShown = localStorage.getItem('enquiryPopupLastShown')
    const today = new Date().toDateString()
    
    if (lastShown !== today) {
      const timer = setTimeout(() => {
        setEnquiryOpen(true)
        localStorage.setItem('enquiryPopupLastShown', today)
      }, 2000) // Opens after 2 seconds

      return () => clearTimeout(timer)
    }
  }, [])

  const handleEnquiry = (productTitle) => {
    setSelectedProduct(productTitle)
    setEnquiryOpen(true)
  }

  const products = [
    {
      title: 'Electromagnetic Flow Meters',
      description: 'Critical flow measurement with zero pressure drop for accurate liquid flow monitoring',
      icon: Activity,
      image: '/flow-meter.jpg'
    },
    {
      title: 'Ultrasonic Water Meter',
      description: 'Non-invasive ultrasonic technology for accurate water flow measurement',
      icon: Activity,
      image: '/flow-meter.jpg'
    },
    {
      title: 'Analog Pressure Gauges',
      description: 'Shock & vibration-resistant pressure gauges for industrial applications',
      icon: Gauge,
      image: '/pressure-transmitter.jpg'
    },
    {
      title: 'Pressure Transmitters',
      description: 'Industrial pressure sensors with 4-20mA output for process control',
      icon: Gauge,
      image: '/pressure-transmitter.jpg'
    },
    {
      title: 'RTD PT100 Temperature Sensor',
      description: 'Precision PT100 RTD sensors for accurate temperature measurement',
      icon: Thermometer,
      image: '/head-type-rtd-sensor.jpg'
    },
    {
      title: 'K Type Thermocouples',
      description: 'K-type thermocouples for high-temperature industrial applications',
      icon: Zap,
      image: '/rtd-thermocouple.jpg'
    },
    {
      title: 'PID Temperature Controller',
      description: 'Auto-tuning PID controllers for precise temperature control',
      icon: Factory,
      image: '/conductive-level-switch.jpg'
    },
    {
      title: 'Ultrasonic Level Transmitter',
      description: 'Non-contact level measurement using ultrasonic technology',
      icon: Thermometer,
      image: '/conductive-level-switch.jpg'
    },
    {
      title: 'Thermowells',
      description: 'Protective sheaths for temperature sensors in high-pressure environments',
      icon: Thermometer,
      image: '/thermowell.jpg'
    }
  ]

  return (
    <div className="min-h-screen bg-cyan-50">
      {/* Hero Slider */}
      <HeroSlider />

      {/* About Section */}
      <section className="py-16 bg-white/80">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 text-sm font-medium mb-4">
                About Advick Enterprises
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                Your Partner in Industrial Instrumentation
              </h2>
              <p className="text-slate-700 mb-4">
                Advick Enterprises is a well-established vendor and supplier that offers a wide range of advanced instruments like electromagnetic flow meters, RTD head type thermocouples, analog pressure gauges, head type RTD sensors, digital PID temperature controllers, analog temperature gauges, and flow instrumentation.
              </p>
              <p className="text-slate-700">
                Our products are designed with superior performance in mind, maximum accuracy, durability, and efficiency for all industries. From critical flow measurement with zero pressure drop to shock & vibration-resistant pressure gauges and auto-tuning PID controllers, we make sure that each product is a solution for your needs. We provide more than quality equipment - we bring a partnership to help you streamline your operations and elevate your processes.
              </p>
              
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
      <section className="py-16 bg-cyan-50">
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
                <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
                  <div className="relative h-48 bg-slate-100">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 mb-2">{product.title}</h3>
                        <p className="text-sm text-slate-600">{product.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-auto">
                      <Button 
                        onClick={() => handleEnquiry(product.title)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm"
                      >
                        <Mail className="w-4 h-4 mr-1" />
                        Inquiry
                      </Button>
                      <a href="tel:7987004209" className="flex-1">
                        <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 text-sm">
                          <Phone className="w-4 h-4 mr-1" />
                          Call
                        </Button>
                      </a>
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
      <section className="py-16 bg-white/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Why Choose Advick Enterprises
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Listed on IndiaMART</h3>
              <p className="text-sm text-slate-600">Verified supplier on India's largest B2B marketplace</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Listed on TradeIndia</h3>
              <p className="text-sm text-slate-600">Trusted supplier on leading B2B platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Industries We Serve
            </h2>
            <p className="text-slate-600">Serving diverse industrial sectors with specialized solutions</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Chemical Processing', image: '/Chemical Processing.jpg' },
              { name: 'Oil & Gas', image: '/Oil & Gas.jpg' },
              { name: 'Pharmaceutical', image: '/Pharmaceutical.jpg' },
              { name: 'Food & Beverage', image: '/Food & Beverage.jpeg' },
              { name: 'Water Treatment', image: '/Water Treatment.jpeg' },
              { name: 'Power Plants', image: '/Power Plants.jpeg' },
              { name: 'Manufacturing', image: '/Manufacturing.jpeg' },
              { name: 'HVAC Systems', image: '/Hvac.webp' }
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="relative h-40 bg-slate-100">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-bold text-white text-center">{industry.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white/80">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Approach to Service</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Understanding Requirements</h3>
                    <p className="text-slate-600">We discuss your specific application needs and process parameters to recommend suitable instruments.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Product Selection</h3>
                    <p className="text-slate-600">Based on your requirements, we suggest appropriate instrumentation with technical specifications.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Quotation & Delivery</h3>
                    <p className="text-slate-600">We provide competitive quotes and ensure timely delivery of products to your location.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">After-Sales Support</h3>
                    <p className="text-slate-600">We offer technical support and guidance for installation and troubleshooting when needed.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
                alt="Our Service Approach"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Common Applications</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our instrumentation products are used in various industrial processes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-3">Process Monitoring</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Continuous monitoring of flow, pressure, temperature, and level in production processes.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Real-time data collection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Process optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Gauge className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-3">Quality Control</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Ensuring product quality through accurate measurement and control systems.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Consistent product quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Reduced waste</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Factory className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-3">Safety Systems</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Critical safety instrumentation for protecting equipment and personnel.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Pressure relief systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Temperature alarms</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality & Certifications */}
      <section className="py-16 bg-white/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Quality & Standards</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We supply products that meet international quality standards
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">ISO Compliant</h3>
                <p className="text-sm text-slate-600">Products meet ISO quality standards</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Tested Products</h3>
                <p className="text-sm text-slate-600">All instruments are factory tested</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Warranty Support</h3>
                <p className="text-sm text-slate-600">Manufacturer warranty on all products</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Expert Guidance</h3>
                <p className="text-sm text-slate-600">Technical consultation available</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">What Our Clients Say</h2>
            <p className="text-slate-600">Trusted by industries across India</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed italic">
                  "Reliable products and excellent technical support. Advick Enterprises has been our go-to supplier for instrumentation needs."
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-slate-800">Vishal Mehta</p>
                  <p className="text-sm text-slate-600">Plant Manager, Chemical Industry</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed italic">
                  "Quality instruments at competitive prices. Their team understands our requirements and delivers on time every time."
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-slate-800">Rajesh Kumar</p>
                  <p className="text-sm text-slate-600">Maintenance Head, Manufacturing</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed italic">
                  "Professional service and good product knowledge. We have been working with them for over 3 years now."
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-slate-800">Amit Sharma</p>
                  <p className="text-sm text-slate-600">Project Engineer, Pharmaceutical</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed italic">
                  "Excellent after-sales support. They helped us with installation and troubleshooting. Highly recommended!"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-slate-800">Priya Desai</p>
                  <p className="text-sm text-slate-600">Operations Manager, Food Processing</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed italic">
                  "Fast delivery and genuine products. Their technical team is very knowledgeable and helpful."
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-slate-800">Suresh Patel</p>
                  <p className="text-sm text-slate-600">Instrumentation Engineer, Power Plant</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed italic">
                  "Great experience working with Advick Enterprises. They provide quality products with proper documentation."
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-slate-800">Anil Verma</p>
                  <p className="text-sm text-slate-600">Purchase Manager, Textile Industry</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      

      {/* FAQ Section */}
      <section className="py-16 bg-white/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-600">Common questions about our products and services</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-slate-900 mb-2">What types of instrumentation do you supply?</h3>
                <p className="text-slate-600">
                  We supply a wide range of industrial instrumentation including flow meters, pressure transmitters, temperature sensors (RTD, thermocouples), level switches, thermowells, and related accessories.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-slate-900 mb-2">Do you provide installation services?</h3>
                <p className="text-slate-600">
                  We provide installation guidance and technical support. Our team can assist with installation procedures, wiring diagrams, and commissioning support to ensure proper setup.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-slate-900 mb-2">What is the warranty on your products?</h3>
                <p className="text-slate-600">
                  All our products come with manufacturer warranty. The warranty period varies by product type and manufacturer. We provide warranty support and can assist with any warranty claims.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-slate-900 mb-2">How long does delivery take?</h3>
                <p className="text-slate-600">
                  Delivery time depends on product availability and your location. For in-stock items in Bhopal area, we can deliver within 1-2 days. For other locations and special orders, delivery typically takes 3-7 days.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-slate-900 mb-2">Do you provide technical support?</h3>
                <p className="text-slate-600">
                  Yes, we provide technical support for product selection, installation guidance, and troubleshooting. Our team has experience with various industrial processes and can help you choose the right instruments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-slate-900 mb-2">Can you supply custom specifications?</h3>
                <p className="text-slate-600">
                  Yes, many of our products can be customized based on your requirements. This includes custom probe lengths, connection types, ranges, and materials. Contact us with your specific needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

     

      {/* Contact CTA */}
      <section className="py-16 bg-white/80">
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

      {/* Enquiry Popup */}
      <EnquiryPopup 
        isOpen={enquiryOpen} 
        onClose={() => setEnquiryOpen(false)} 
        productName={selectedProduct}
      />
    </div>
  )
}
