'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Activity, Gauge, Thermometer, Zap, Factory, Droplets, Layers, ArrowRight, CheckCircle2, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Products() {
  const products = [
    {
      title: 'Electromagnetic Flow Meters',
      category: 'Flow Instrumentation',
      description: 'Accurate liquid flow measurement for water, chemicals, and slurries',
      icon: Activity,
      features: ['High accuracy ±0.5%', 'Digital display', 'Wide range measurement', 'Easy installation']
    },
    {
      title: 'Pressure Transmitters',
      category: 'Pressure Instrumentation',
      description: 'Industrial pressure sensors for process control applications',
      icon: Gauge,
      features: ['High precision', '4-20mA output', 'Robust design', 'Temperature compensated']
    },
    {
      title: 'Thermowells',
      category: 'Temperature Protection',
      description: 'Protective sheaths for temperature sensors in high-pressure environments',
      icon: Thermometer,
      features: ['Corrosion resistant', 'High pressure rated', 'SS316/SS304 material', 'Custom lengths']
    },
    {
      title: 'RTD Sensors (PT100)',
      category: 'Temperature Measurement',
      description: 'Resistance Temperature Detectors for precise industrial temperature monitoring',
      icon: Zap,
      features: ['High accuracy ±0.1°C', 'Range -200 to 600°C', 'Fast response', 'Long-term stability']
    },
    {
      title: 'Conductivity Level Switches',
      category: 'Level Instrumentation',
      description: 'Liquid level detection using conductivity principle',
      icon: Droplets,
      features: ['Simple operation', 'No moving parts', 'Multiple probe lengths', 'Cost effective']
    },
    {
      title: 'Temperature Gauges',
      category: 'Temperature Measurement',
      description: 'Bimetallic and digital temperature indicators',
      icon: Thermometer,
      features: ['Easy to read dial', 'Durable construction', 'Various ranges', 'Reliable performance']
    },
    {
      title: 'Thermocouples (K, J, T Type)',
      category: 'Temperature Sensors',
      description: 'Temperature sensors for high-temperature applications',
      icon: Zap,
      features: ['Range up to 1200°C', 'Fast response', 'Rugged design', 'Multiple types']
    },
    {
      title: 'Pressure Gauges',
      category: 'Pressure Measurement',
      description: 'Mechanical pressure gauges for visual pressure monitoring',
      icon: Gauge,
      features: ['Clear dial display', 'Sizes 2" to 6"', 'Various ranges', 'Glycerin filled option']
    },
    {
      title: 'RTD & Thermocouple Cables',
      category: 'Instrumentation Cables',
      description: 'Specialized cables for temperature sensor connections',
      icon: Layers,
      features: ['High quality insulation', 'Various gauges', 'Flexible design', 'Temperature resistant']
    }
  ]

  const categories = [
    { name: 'Flow Instrumentation', icon: Activity },
    { name: 'Pressure Instrumentation', icon: Gauge },
    { name: 'Level Instrumentation', icon: Droplets },
    { name: 'Temperature Instrumentation', icon: Thermometer },
    { name: 'Cables & Accessories', icon: Layers }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1606206886378-e49a19ad0933?w=1920&q=80"
            alt="Industrial Products"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
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

          <div className="grid md:grid-cols-5 gap-4">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Our Products</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              High-quality instrumentation products for various industrial applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="inline-block bg-slate-100 text-slate-700 px-2 py-1 text-xs font-medium rounded mb-2">
                          {product.category}
                        </div>
                        <h3 className="font-bold text-lg text-slate-900">{product.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-4">{product.description}</p>
                    
                    <div className="space-y-2">
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
                  </CardContent>
                </Card>
              )
            })}
          </div>
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
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help Selecting Products?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Our team can help you choose the right instrumentation for your application
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="tel:7987004209">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
