'use client'

import { useState } from 'react'

export default function FooterCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Thank you! We will contact you soon.')
        setFormData({ name: '', email: '', company: '' })
        // Track conversion event
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'form_submit', {
            event_category: 'engagement',
            event_label: 'Footer CTA',
          })
        }
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <section className="py-20 bg-primary-600 dark:bg-primary-700 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Unify Your DevSecOps Experience?
        </h2>
        <p className="text-xl text-primary-100 mb-12">
          Join high-performing teams shipping faster with IntegraCI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="text"
              placeholder="Company Name"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="w-full bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Start Your Free Trial
            </button>
          </form>
        </div>
        <div className="mt-8">
          <a
            href="#sales"
            className="text-white hover:text-primary-100 font-semibold underline"
          >
            Talk to Sales
          </a>
        </div>
      </div>
    </section>
  )
}

