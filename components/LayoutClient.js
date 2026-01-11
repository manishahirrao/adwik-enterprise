'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import EnquiryPopup from '@/components/EnquiryPopup'

export default function LayoutClient({ children }) {
  const [enquiryOpen, setEnquiryOpen] = useState(false)

  return (
    <>
      <Navigation onEnquiryClick={() => setEnquiryOpen(true)} />
      <main className="pt-[104px]">{children}</main>
      <Footer />
      <FloatingWhatsApp />
      <EnquiryPopup 
        isOpen={enquiryOpen} 
        onClose={() => setEnquiryOpen(false)} 
      />
    </>
  )
}
