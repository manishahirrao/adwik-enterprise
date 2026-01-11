import { Card, CardContent } from '@/components/ui/card'
import { FileText } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'Terms & Conditions - Advick Enterprises',
  description: 'Terms and Conditions for using Advick Enterprises services',
}

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20">
        <div className="absolute inset-0">
          <Image
            src="/slider7.png"
            alt="Terms & Conditions"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-600 text-white px-4 py-1 text-sm font-medium mb-4">
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xl text-slate-300">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-slate max-w-none">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 m-0">Terms of Service</h2>
                      <p className="text-slate-600 m-0">Please read these terms carefully before using our services</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Acceptance of Terms</h3>
                  <p className="text-slate-700 mb-6">
                    By accessing and using the services of Advick Enterprises, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                  </p>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Products and Services</h3>
                  <p className="text-slate-700 mb-4">
                    Advick Enterprises supplies industrial instrumentation products including:
                  </p>
                  <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
                    <li>Flow measurement instruments</li>
                    <li>Pressure measurement devices</li>
                    <li>Temperature sensors and controllers</li>
                    <li>Level measurement equipment</li>
                    <li>Related accessories and components</li>
                  </ul>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Quotations and Orders</h3>
                  <p className="text-slate-700 mb-6">
                    All quotations are valid for 30 days from the date of issue unless otherwise stated. Prices are subject to change without notice. Orders are subject to acceptance by Advick Enterprises.
                  </p>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Payment Terms</h3>
                  <p className="text-slate-700 mb-4">
                    Payment terms will be specified in the quotation or invoice. Standard payment terms include:
                  </p>
                  <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
                    <li>Advance payment or payment against delivery as agreed</li>
                    <li>Credit terms for approved customers</li>
                    <li>All payments to be made in Indian Rupees (INR)</li>
                  </ul>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Delivery</h3>
                  <p className="text-slate-700 mb-6">
                    Delivery timelines are estimates and may vary based on product availability and location. We will make reasonable efforts to meet delivery schedules but are not liable for delays beyond our control.
                  </p>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Product Warranty</h3>
                  <p className="text-slate-700 mb-6">
                    Products are covered by manufacturer warranty as specified. Warranty terms vary by product and manufacturer. We will assist with warranty claims as per manufacturer policies.
                  </p>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">7. Returns and Refunds</h3>
                  <p className="text-slate-700 mb-6">
                    Returns are accepted only for defective products or incorrect shipments. Please refer to our Refund Policy for detailed information.
                  </p>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">8. Limitation of Liability</h3>
                  <p className="text-slate-700 mb-6">
                    Advick Enterprises shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services. Our liability is limited to the value of the products supplied.
                  </p>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">9. Intellectual Property</h3>
                  <p className="text-slate-700 mb-6">
                    All content on our website, including text, images, logos, and designs, is the property of Advick Enterprises or its licensors and is protected by copyright laws.
                  </p>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">10. Governing Law</h3>
                  <p className="text-slate-700 mb-6">
                    These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Bhopal, Madhya Pradesh.
                  </p>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">11. Contact Information</h3>
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <p className="text-slate-700 mb-2"><strong>Email:</strong> advickenterprises@gmail.com</p>
                    <p className="text-slate-700 mb-2"><strong>Phone:</strong> +91 7987004209</p>
                    <p className="text-slate-700"><strong>Address:</strong> E1/203, Fortune Divine City, Misrod, Bhopal, MP 462026</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
