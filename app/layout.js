import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Advick Enterprises - Industrial Instrumentation Solutions',
  description: 'Leading provider of industrial instrumentation solutions for Temperature, Flow, Level & Pressure measurement. Established in 2018.',
  keywords: 'flow meter, pressure transmitter, thermowell, RTD sensors, temperature gauge, industrial instrumentation, Bhopal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
