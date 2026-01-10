'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Activity, Gauge, Thermometer, Zap, Factory, Droplets, Wind, Layers, ArrowRight, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Products() {
  const products = [
    {
      title: 'Flow Meter',
      category: 'Flow Instrumentation',
      description: 'Electromagnetic flow meters for accurate flow measurement in various industrial applications. Provides precise readings for liquid flow in pipes.',
      icon: Activity,
      image: 'https://images.unsplash.com/photo-1606206886378-e49a19ad0933?w=800&q=80',
      features: ['High accuracy', 'Digital display', 'Wide range measurement', 'Easy installation']
    },
    {
      title: 'Pressure Transmitter',
      category: 'Pressure Instrumentation',
      description: 'High-precision pressure measurement solutions for critical industrial processes. Converts pressure into electrical signals for monitoring and control.',
      icon: Gauge,
      image: 'https://images.unsplash.com/photo-1606206886378-e49a19ad0933?w=800&q=80',
      features: ['High precision', '4-20mA output', 'Robust design', 'Temperature compensated']
    },
    {
      title: 'Thermowell',
      category: 'Temperature Protection',
      description: 'Temperature protection devices for harsh environments. Protects temperature sensors while allowing accurate measurement.',
      icon: Thermometer,
      image: 'https://images.unsplash.com/photo-1606206886378-e49a19ad0933?w=800&q=80',
      features: ['Corrosion resistant', 'High pressure rated', 'Multiple materials', 'Custom lengths']
    },
    {
      title: 'RTD Sensors',
      category: 'Temperature Measurement',
      description: 'Resistance Temperature Detectors for accurate temperature readings. Ideal for precise temperature monitoring in industrial processes.',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1606206886378-e49a19ad0933?w=800&q=80',
      features: ['High accuracy', 'Wide temperature range', 'Fast response', 'Long-term stability']
    },
    {
      title: 'Conductivity Level Switch',
      category: 'Level Instrumentation',
      description: 'Liquid level control switches using conductivity principle. Perfect for monitoring and controlling liquid levels in tanks and vessels.',
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1606206886378-e49a19ad0933?w=800&q=80',
      features: ['Simple operation', 'No moving parts', 'Multiple probe lengths', 'Cost effective']
    },
    {
      title: 'Temperature Gauge',
      category: 'Temperature Measurement',
      description: 'Precision temperature measurement instruments for various industrial applications. Provides accurate temperature readings.',
      icon: Thermometer,
      image: 'https://images.unsplash.com/photo-1606206886378-e49a19ad0933?w=800&q=80',
      features: ['Easy to read', 'Durable construction', 'Various ranges', 'Reliable performance']
    },
    {
      title: 'Thermocouple',
      category: 'Temperature Sensors',
      description: 'Temperature sensors based on thermoelectric effect. Suitable for high-temperature applications and quick response needs.',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1606206886378-e49a19ad0933?w=800&q=80',
      features: ['Wide range', 'Fast response', 'Rugged design', 'Multiple types']
    },
    {
      title: 'Pressure Gauge',
      category: 'Pressure Measurement',
      description: 'Mechanical pressure gauges for visual pressure monitoring. Essential for maintaining optimal pressure in systems and processes.',
      icon: Gauge,
      image: 'https://images.unsplash.com/photo-1606206886378-e49a19ad0933?w=800&q=80',
      features: ['Clear dial', 'Various sizes', 'Different ranges', 'Durable construction']
    },
    {
      title: 'RTD & Thermocouple Cable',
      category: 'Instrumentation Cables',
      description: 'Specialized cables for temperature sensor connections. Ensures accurate signal transmission from sensors to instruments.',
      icon: Layers,
      image: 'https://images.unsplash.com/photo-1606206886378-e49a19ad0933?w=800&q=80',
      features: ['High quality insulation', 'Various gauges', 'Flexible design', 'Temperature resistant']
    }
  ]

  const categories = [
    { name: 'Flow Instrumentation', icon: Activity, count: 1 },
    { name: 'Pressure Instrumentation', icon: Gauge, count: 2 },
    { name: 'Level Instrumentation', icon: Droplets, count: 1 },
    { name: 'Temperature Instrumentation', icon: Thermometer, count: 4 },
    { name: 'Cables & Accessories', icon: Layers, count: 1 }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1606206886378-e49a19ad0933?w=1920&q=80"
          alt="Products"
          fill
          className="object-cover opacity-20"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 bg-blue-500/20 text-white border-blue-400 px-6 py-2">
              Our Products
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Industrial Instrumentation Products
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Comprehensive range of high-quality instrumentation solutions for your industrial needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-5 gap-4"
          >
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="border-2 border-slate-100 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex p-3 bg-blue-100 rounded-full mb-3 group-hover:bg-blue-600 transition-colors"
                      >
                        <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                      </motion.div>
                      <h3 className="text-sm font-semibold text-slate-800 mb-1">{category.name}</h3>
                      <p className="text-xs text-slate-600">{category.count} Products</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700">Product Catalog</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">Our Product Range</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Explore our comprehensive range of industrial instrumentation products</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mt-4"></div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                      <motion.div
                        className="absolute top-4 right-4 p-3 bg-white rounded-full shadow-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-6 h-6 text-blue-600" />
                      </motion.div>
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-blue-600 text-white">{product.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <h3 className="text-2xl font-bold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-slate-600 mb-4 flex-grow">{product.description}</p>
                      <div className="space-y-2 mb-4">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Help Choosing the Right Product?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Our experts are ready to help you find the perfect instrumentation solution for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6 group">
                  Contact Our Experts
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
