'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Mail, Phone, User, Building, MessageSquare, X } from 'lucide-react'

export default function EnquiryPopup({ isOpen, onClose, productName = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: productName,
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      
      // Reset form after 2 seconds and close
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          product: '',
          message: ''
        })
        setSubmitSuccess(false)
        onClose()
      }, 2000)
    }, 1000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-900">
            Product Enquiry
          </DialogTitle>
        </DialogHeader>

        {submitSuccess ? (
          <div className="py-8 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Thank You!</h3>
            <p className="text-slate-600">Your enquiry has been submitted successfully. We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-slate-700">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-slate-700">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-slate-700">
                Company Name
              </Label>
              <div className="relative">
                <Building className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={handleChange}
                  className="pl-10"
                />
              </div>
            </div>

            {productName && (
              <div className="space-y-2">
                <Label htmlFor="product" className="text-slate-700">
                  Product of Interest
                </Label>
                <Input
                  id="product"
                  name="product"
                  type="text"
                  value={formData.product}
                  onChange={handleChange}
                  className="bg-slate-50"
                  readOnly
                />
              </div>
            )}

            {!productName && (
              <div className="space-y-2">
                <Label htmlFor="product" className="text-slate-700">
                  Product of Interest
                </Label>
                <Input
                  id="product"
                  name="product"
                  type="text"
                  placeholder="Which product are you interested in?"
                  value={formData.product}
                  onChange={handleChange}
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="message" className="text-slate-700">
                Message <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="pl-10 resize-none"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
