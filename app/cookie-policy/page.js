import { Card, CardContent } from '@/components/ui/card'
import { Cookie } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'Cookie Policy - Advick Enterprises',
  description: 'Cookie Policy for Advick Enterprises - How we use cookies on our website',
}

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20">
        <div className="absolute inset-0">
          <Image
            src="/slider5.png"
            alt="Cookie Policy"
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
              Cookie Policy
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
                      <Cookie className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 m-0">How We Use Cookies</h2>
                      <p className="text-slate-600 m-0">Understanding cookies on our website</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. What Are Cookies?</h3>
                  <p className="text-slate-700 mb-6">
                    Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and understanding how you use our site.
                  </p>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Types of Cookies We Use</h3>
                  
                  <h4 className="text-lg font-semibold text-slate-900 mt-6 mb-3">Essential Cookies</h4>
                  <p className="text-slate-700 mb-4">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                  </p>
                  <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
                    <li>Session management</li>
                    <li>Security features</li>
                    <li>Load balancing</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-slate-900 mt-6 mb-3">Functional Cookies</h4>
                  <p className="text-slate-700 mb-4">
                    These cookies allow the website to remember choices you make and provide enhanced features.
                  </p>
                  <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
                    <li>Language preferences</li>
                    <li>Region selection</li>
                    <li>Form data retention</li>
                    <li>Enquiry popup preferences</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-slate-900 mt-6 mb-3">Analytics Cookies</h4>
                  <p className="text-slate-700 mb-4">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                  <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
                    <li>Page views and traffic sources</li>
                    <li>Time spent on pages</li>
                    <li>Navigation patterns</li>
                    <li>Device and browser information</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-slate-900 mt-6 mb-3">Marketing Cookies</h4>
                  <p className="text-slate-700 mb-6">
                    These cookies track your online activity to help us deliver more relevant advertising or to limit how many times you see an advertisement.
                  </p>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Third-Party Cookies</h3>
                  <p className="text-slate-700 mb-4">
                    We may use third-party services that also set cookies on your device. These include:
                  </p>
                  <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
                    <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                    <li><strong>Social Media Platforms:</strong> For social sharing features</li>
                    <li><strong>WhatsApp:</strong> For the floating chat button functionality</li>
                  </ul>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. How Long Do Cookies Last?</h3>
                  <p className="text-slate-700 mb-4">
                    Cookies can be either:
                  </p>
                  <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
                    <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
                    <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them</li>
                  </ul>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Managing Cookies</h3>
                  <p className="text-slate-700 mb-4">
                    You can control and manage cookies in several ways:
                  </p>
                  
                  <h4 className="text-lg font-semibold text-slate-900 mt-6 mb-3">Browser Settings</h4>
                  <p className="text-slate-700 mb-4">
                    Most browsers allow you to:
                  </p>
                  <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
                    <li>View what cookies are stored and delete them individually</li>
                    <li>Block third-party cookies</li>
                    <li>Block cookies from specific websites</li>
                    <li>Block all cookies</li>
                    <li>Delete all cookies when you close your browser</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-slate-900 mt-6 mb-3">Browser-Specific Instructions</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
                    <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                    <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                    <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                    <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                  </ul>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Impact of Disabling Cookies</h3>
                  <p className="text-slate-700 mb-4">
                    If you disable cookies, some features of our website may not function properly:
                  </p>
                  <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
                    <li>You may need to re-enter information on forms</li>
                    <li>Some personalized features may not work</li>
                    <li>The enquiry popup may appear repeatedly</li>
                    <li>Your preferences may not be saved</li>
                  </ul>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">7. Updates to This Policy</h3>
                  <p className="text-slate-700 mb-6">
                    We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements. We encourage you to review this page periodically.
                  </p>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">8. Your Consent</h3>
                  <p className="text-slate-700 mb-6">
                    By using our website, you consent to the use of cookies as described in this policy. If you do not agree with our use of cookies, you should adjust your browser settings or refrain from using our website.
                  </p>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">9. Contact Us</h3>
                  <p className="text-slate-700 mb-4">
                    If you have any questions about our use of cookies, please contact us:
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
