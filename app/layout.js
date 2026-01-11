import { Inter } from 'next/font/google'
import './globals.css'
import LayoutClient from '@/components/LayoutClient'

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
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}
