'use client'

import { useEffect, useState } from 'react'

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        const hasSeenPopup = localStorage.getItem('exitIntentShown')
        if (!hasSeenPopup) {
          setShowPopup(true)
          localStorage.setItem('exitIntentShown', 'true')
        }
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  if (!showPopup) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg max-w-md w-full p-8 relative">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Download Free E-book
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          The Guide to Implementing Platform Engineering in 2025
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-600"
          />
          <button
            type="submit"
            className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Download Now
          </button>
        </form>
      </div>
    </div>
  )
}

