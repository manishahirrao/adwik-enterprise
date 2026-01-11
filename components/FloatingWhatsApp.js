'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false)
  const whatsappNumber = '917987004209' // Format: country code + number without + or spaces
  const message = 'Hello! I would like to inquire about your industrial instrumentation products.'

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Tooltip */}
        <div
          className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
          }`}
        >
          Chat with us on WhatsApp
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="border-8 border-transparent border-l-slate-900"></div>
          </div>
        </div>

        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
      </button>
    </div>
  )
}
