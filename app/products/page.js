'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Activity, Gauge, Thermometer, Zap, Factory, Droplets, Layers, CheckCircle2, Phone, Mail, Settings, Wind, Waves } from 'lucide-react'
import Image from 'next/image'
import EnquiryPopup from '@/components/EnquiryPopup'


// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
}

export default function Products() {
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState('')

  const handleEnquiry = (productTitle) => {
    setSelectedProduct(productTitle)
    setEnquiryOpen(true)
  }

  const products = [
    // Flow Meters
    {
      title: 'Electromagnetic Flow Meters',
      category: 'Flow Instrumentation',
      description: 'Critical flow measurement with zero pressure drop for accurate liquid flow monitoring',
      icon: Activity,
      image: '/electromagnetic-flow-meter-500x500.webp',
      features: ['Zero pressure drop', 'High accuracy ±0.5%', 'Digital display', 'Wide range measurement']
    },
    {
      title: 'Ultrasonic Water Meter',
      category: 'Flow Instrumentation',
      description: 'Non-invasive ultrasonic technology for accurate water flow measurement',
      icon: Activity,
      image: '/ultrasonic-water-meter-500x500.webp',
      features: ['Non-invasive', 'No pressure loss', 'High accuracy', 'Long service life']
    },
    {
      title: 'Smart Ultrasonic Water Meter',
      category: 'Flow Instrumentation',
      description: 'Smart water metering with IoT connectivity and remote monitoring',
      icon: Activity,
      image: '/residential-water-meter-500x500.webp',
      features: ['IoT enabled', 'Remote monitoring', 'Data logging', 'Battery powered']
    },
    {
      title: 'Turbine Flow Meter',
      category: 'Flow Instrumentation',
      description: 'High accuracy flow measurement for clean liquids',
      icon: Wind,
      image: '/turbine-flow-meter-500x500.webp',
      features: ['High accuracy', 'Pulse output', 'Wide range', 'Low pressure drop']
    },
    {
      title: 'Water Flow Meter',
      category: 'Flow Instrumentation',
      description: 'Reliable water flow measurement for various applications',
      icon: Activity,
      image: '/water-flow-meter-500x500.webp',
      features: ['Durable construction', 'Easy installation', 'Various sizes', 'Cost effective']
    },
    {
      title: 'Electromagnetic Water Flow Meter',
      category: 'Flow Instrumentation',
      description: 'Specialized electromagnetic flow meters for water applications',
      icon: Activity,
      image: '/electromagnetic-water-flow-meter-500x500.webp',
      features: ['Water optimized', 'High accuracy', 'Digital display', 'Easy maintenance']
    },
    {
      title: 'Digital Water Flow Meter',
      category: 'Flow Instrumentation',
      description: 'Digital display water meters for accurate measurement',
      icon: Activity,
      image: '/digital-water-flow-meter-for-borewell-500x500.webp',
      features: ['Digital display', 'High accuracy', 'Easy reading', 'Tamper proof']
    },
    {
      title: 'Water Flow Switch',
      category: 'Flow Instrumentation',
      description: 'Flow detection and monitoring switches for water systems',
      icon: Activity,
      image: '/honeywell-water-flow-switch-500x500.webp',
      features: ['Paddle type', 'Adjustable setpoint', 'Relay output', 'Compact design']
    },

    // Pressure Instrumentation
    {
      title: 'Pressure Transmitters',
      category: 'Pressure Instrumentation',
      description: 'Industrial pressure sensors with 4-20mA output for process control',
      icon: Gauge,
      image: '/pressure-transmitter-500x500.webp',
      features: ['4-20mA output', 'High accuracy', 'Robust design', 'Temperature compensated']
    },
    {
      title: 'Pressure Transmitter Sensor',
      category: 'Pressure Instrumentation',
      description: 'High-quality pressure transmitter sensors for industrial use',
      icon: Gauge,
      image: '/pressure-transmitter-sensor-500x500.webp',
      features: ['High precision', 'Wide range', 'Durable construction', 'Easy installation']
    },

    // Level Instrumentation
    {
      title: 'Ultrasonic Level Transmitter',
      category: 'Level Instrumentation',
      description: 'Non-contact level measurement using ultrasonic technology',
      icon: Waves,
      image: '/ultrasonic-level-transmitter-500x500.webp',
      features: ['Non-contact', 'Long range', '4-20mA output', 'Easy calibration']
    },
    {
      title: 'Float Level Transmitter',
      category: 'Level Instrumentation',
      description: 'Reliable float-based level measurement and transmission',
      icon: Droplets,
      image: '/float-level-transmitter-500x500.webp',
      features: ['Reliable operation', '4-20mA output', 'Various materials', 'Easy installation']
    },
    {
      title: 'Vibrating Fork Level Switch',
      category: 'Level Instrumentation',
      description: 'Vibrating fork technology for reliable level detection',
      icon: Droplets,
      image: '/vibrating-fork-level-switch-500x500.webp',
      features: ['Vibration technology', 'No calibration needed', 'Solid/liquid detection', 'Compact design']
    },
    {
      title: 'Stainless Steel Float Switches',
      category: 'Level Instrumentation',
      description: 'Durable stainless steel float switches for harsh environments',
      icon: Droplets,
      image: '/stainless-steel-float-switches-500x500.webp',
      features: ['SS316 construction', 'Corrosion resistant', 'Multiple mounting options', 'High reliability']
    },
    {
      title: 'Tubular Type Level Gauge',
      category: 'Level Instrumentation',
      description: 'Visual level indication with tubular glass gauge',
      icon: Droplets,
      image: '/tubular-type-level-gauge-500x500.webp',
      features: ['Visual indication', 'Transparent tube', 'High pressure rated', 'Easy maintenance']
    },

    // Temperature Measurement
    {
      title: 'RTD PT100 Temperature Sensor',
      category: 'Temperature Measurement',
      description: 'Precision PT100 RTD sensors for accurate temperature measurement',
      icon: Thermometer,
      image: '/rtd-pt100-temperature-sensor-500x500.webp',
      features: ['High accuracy ±0.1°C', 'Range -200 to 600°C', 'Fast response', 'Various probe lengths']
    },
    {
      title: 'K Type Thermocouples',
      category: 'Temperature Measurement',
      description: 'K-type thermocouples for high-temperature industrial applications',
      icon: Zap,
      image: '/k-type-thermocouples-500x500.webp',
      features: ['Range up to 1200°C', 'Fast response', 'Rugged design', 'Cost effective']
    },
    {
      title: 'J Type Thermocouple',
      category: 'Temperature Measurement',
      description: 'J-type thermocouples for moderate temperature applications',
      icon: Zap,
      image: '/j-type-thermocouple-500x500.webp',
      features: ['Range up to 750°C', 'Good sensitivity', 'Reliable performance', 'Industrial use']
    },
    {
      title: 'Head Mounted Temperature Transmitter',
      category: 'Temperature Measurement',
      description: 'Head-mounted transmitters for RTD and thermocouple signals',
      icon: Zap,
      image: '/head-mounted-temperature-transmitter-500x500.webp',
      features: ['4-20mA output', 'Head mounting', 'Universal input', 'Isolated design']
    },
    {
      title: 'Bimetallic Temperature Gauge',
      category: 'Temperature Measurement',
      description: 'Bimetallic temperature indicators for visual monitoring',
      icon: Thermometer,
      image: '/bimetallic-temperature-gauge-500x500.webp',
      features: ['Easy to read dial', 'Durable construction', 'Various ranges', 'Reliable performance']
    },

    // Temperature Control
    {
      title: 'PID Temperature Controller',
      category: 'Temperature Control',
      description: 'Auto-tuning PID controllers for precise temperature control',
      icon: Settings,
      image: '/pid-temperature-controller-500x500.webp',
      features: ['Auto-tuning capability', 'Precise control', 'Digital display', 'Easy programming']
    },
    {
      title: 'Digital Temperature Controller',
      category: 'Temperature Control',
      description: 'Digital temperature controllers with advanced features',
      icon: Settings,
      image: '/digital-temperature-controller-500x500.webp',
      features: ['Digital control', 'Multiple outputs', 'Alarm functions', 'User-friendly interface']
    },
    {
      title: 'Auto Tune PID Temperature Controller',
      category: 'Temperature Control',
      description: 'Self-tuning PID controllers for optimal temperature control',
      icon: Settings,
      image: '/auto-tune-pid-temperature-controller-500x500.webp',
      features: ['Self-tuning', 'Adaptive control', 'Multiple sensor inputs', 'Relay/SSR output']
    },

    // Sensors & Switches
    {
      title: 'Inductive Proximity Sensor',
      category: 'Sensors & Switches',
      description: 'Non-contact detection of metallic objects',
      icon: Zap,
      image: '/inductive-proximity-sensor-500x500.webp',
      features: ['Non-contact detection', 'Long life', 'Various sensing ranges', 'Industrial grade']
    },
    {
      title: 'IFM Inductive Proximity Sensors',
      category: 'Sensors & Switches',
      description: 'Premium IFM brand proximity sensors for industrial automation',
      icon: Zap,
      image: '/ifm-inductive-proximity-sensors-500x500.webp',
      features: ['IFM quality', 'High reliability', 'Various models', 'Easy installation']
    },

    // Accessories & Components
    {
      title: 'Thermowells',
      category: 'Accessories',
      description: 'Protective sheaths for temperature sensors in high-pressure environments',
      icon: Thermometer,
      image: '/thermowell.jpg',
      features: ['Corrosion resistant', 'High pressure rated', 'SS316/SS304 material', 'Custom lengths']
    },
    {
      title: 'RTD Thermocouple Cable',
      category: 'Accessories',
      description: 'Specialized extension and compensation cables',
      icon: Layers,
      image: '/rtd-cable-500x500.webp',
      features: ['High quality insulation', 'Various gauges', 'Flexible design', 'Temperature resistant']
    },
    {
      title: 'Thermocouple Compensating Cables',
      category: 'Accessories',
      description: 'Compensation cables for accurate thermocouple signal transmission',
      icon: Layers,
      image: '/thermocouple-compensating-cables-500x500.webp',
      features: ['Accurate compensation', 'Color coded', 'Various types', 'High quality']
    },
    {
      title: 'Signal Isolator Converter',
      category: 'Accessories',
      description: 'Signal isolation and conversion for process signals',
      icon: Layers,
      image: '/signal-isolator-converter-500x500.webp',
      features: ['Signal isolation', '4-20mA conversion', 'DIN rail mounting', 'Noise immunity']
    },
    {
      title: 'Alarm Annunciator Panel',
      category: 'Accessories',
      description: 'Multi-channel alarm annunciation systems',
      icon: Layers,
      image: '/alarm-annunciator-panel-500x500.webp',
      features: ['Multiple channels', 'Visual/audio alarm', 'Acknowledge function', 'Panel mounting']
    },
    {
      title: 'Testo 174H Temperature Data Logger',
      category: 'Accessories',
      description: 'Temperature and humidity data logger for monitoring',
      icon: Layers,
      image: '/testo-174h-temperature-data-logger-500x500.webp',
      features: ['Temperature & humidity', 'Data logging', 'USB interface', 'Battery powered']
    },
    {
      title: '8 Channel Analog Input RS485 Module',
      category: 'Accessories',
      description: 'Multi-channel analog input module with RS485 communication',
      icon: Layers,
      image: '/8-channel-analog-input-rs485-module-500x500.webp',
      features: ['8 analog inputs', 'RS485 communication', 'Modbus protocol', 'DIN rail mounting']
    }
  ]

  const categories = [
    { name: 'Flow Instrumentation', icon: Activity },
    { name: 'Pressure Instrumentation', icon: Gauge },
    { name: 'Temperature Measurement', icon: Thermometer },
    { name: 'Temperature Control', icon: Settings },
    { name: 'Level Instrumentation', icon: Droplets },
    { name: 'Sensors & Switches', icon: Zap },
    { name: 'Accessories', icon: Layers }
  ]

  return (
    <div className="min-h-screen bg-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20">
        <div className="absolute inset-0">
          <Image
            src="/slider13.png"
            alt="Industrial Products"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-600 text-white px-4 py-1 text-sm font-medium mb-4">
              Our Products
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Industrial Instrumentation Products
            </h1>
            <p className="text-xl text-slate-300">
              Complete range of measurement and control instruments for industrial applications
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Product Categories</h2>
            <p className="text-slate-600">Browse our instrumentation products by category</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-800">{category.name}</h3>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Our Products</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              High-quality instrumentation products for various industrial applications
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="hover:shadow-xl transition-shadow overflow-hidden flex flex-col h-full">
                    <div className="relative h-48 bg-slate-100 overflow-hidden group">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div 
                          className="bg-blue-100 p-3 rounded-lg flex-shrink-0"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="w-6 h-6 text-blue-600" />
                        </motion.div>
                        <div>
                          <div className="inline-block bg-slate-100 text-slate-700 px-2 py-1 text-xs font-medium rounded mb-2">
                            {product.category}
                          </div>
                          <h3 className="font-bold text-lg text-slate-900">{product.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 mb-4">{product.description}</p>
                      
                      <div className="space-y-2 mb-6 flex-1">
                        <p className="text-sm font-semibold text-slate-700">Key Features:</p>
                        <ul className="space-y-1">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                              <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-2 mt-auto">
                        <Button 
                          onClick={() => handleEnquiry(product.title)}
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white group"
                        >
                          <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                          Inquiry
                        </Button>
                        <a href="tel:7987004209" className="flex-1">
                          <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 group">
                            <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                            Call
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Why Choose Our Products</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle2, title: 'Quality Assured', desc: 'ISO compliant products from trusted manufacturers' },
              { icon: Gauge, title: 'Accurate Measurement', desc: 'Precise and reliable instrumentation' },
              { icon: Factory, title: 'Industrial Grade', desc: 'Built for harsh industrial environments' },
              { icon: Phone, title: 'Technical Support', desc: 'Expert guidance and after-sales service' }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white/80">
        <motion.div 
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              <motion.div 
                className="p-8 md:p-12 text-white"
                variants={fadeInLeft}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Need Help Selecting Products?
                </h2>
                <p className="text-slate-300 mb-6 text-lg">
                  Our technical experts can help you choose the right instrumentation for your specific application requirements. Get personalized recommendations and technical support.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-400" />
                    <span className="text-slate-200">+91 7987004209</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-slate-200">advickenterprises@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-slate-200 text-sm">Bhopal, Madhya Pradesh</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    onClick={() => setEnquiryOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Send Enquiry
                  </Button>
                  <a href="https://wa.me/917987004209?text=Hello%2C%20I%20need%20help%20selecting%20industrial%20instrumentation%20products" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="border-white bg-slate-700 text-white hover:bg-white hover:text-slate-900 transition-all">
                      <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </motion.div>
              <motion.div 
                className="relative h-64 md:h-auto overflow-hidden"
                variants={fadeInRight}
              >
                <Image
                  src="/adt673_calibrator.jpg"
                  alt="Industrial Instrumentation Products"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>
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
