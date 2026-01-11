import { Card, CardContent } from '@/components/ui/card'
import { Shield } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'Privacy Policy - Advick Enterprises',
  description: 'Privacy Policy for Advick Enterprises - How we collect, use, and protect your information',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20">
        <div className="absolute inset-0">
          <Image
            src="/slider13.png"
            alt="Privacy Policy"
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
              Privacy Policy
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
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 m-0">Your Privacy Matters</h2>
                      <p className="text-slate-600 m-0">We are committed to protecting your personal information</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Information We Collect</h3>
                  <p className="text-slate-700 mb-4">
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
                    <li>Name and contact information (email, phone number, address)</li>
                    <li>Company name and business details</li>
                    <li>Product inquiries and requirements</li>
                    <li>Communication preferences</li>
                  </ul>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. How We Use Your Information</h3>
                  <p className="text-slate-700 mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
                    <li>Process your inquiries and provide quotations</li>
                    <li>Communicate with you about our products and services</li>
                    <li>Improve our website and customer service</li>
                    <li>Send you updates about new products and offers (with your consent)</li>
                    <li>Comply with legal obligations</li>
                  </ul>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Information Sharing</h3>
                  <p className="text-slate-700 mb-6">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
                    <li>Service providers who assist in our business operations</li>
                    <li>Legal authorities when required by law</li>
                    <li>Business partners with your explicit consent</li>
                  </ul>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Data Security</h3>
                  <p className="text-slate-700 mb-6">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Your Rights</h3>
                  <p className="text-slate-700 mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Lodge a complaint with relevant authorities</li>
                  </ul>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Cookies</h3>
                  <p className="text-slate-700 mb-6">
                    Our website uses cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.
                  </p>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">7. Contact Us</h3>
                  <p className="text-slate-700 mb-4">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
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
