'use client'

import { useState } from 'react'

type Tab = {
  id: string
  title: string
  description: string
}

export default function SolutionSection() {
  const [activeTab, setActiveTab] = useState('service-catalog')

  const tabs: Array<Tab> = [
    {
      id: 'service-catalog',
      title: 'Service Catalog (Discovery)',
      description: 'A centralized library of all your software. Track ownership, dependencies, and metadata instantly.',
    },
    {
      id: 'scaffolder',
      title: 'Self-Service Scaffolder (Speed)',
      description: 'Create new microservices in minutes with "Golden Path" templates. Built-in standards, CI/CD config, and security policies from Day 1.',
    },
    {
      id: 'governance',
      title: 'Unified Governance (Security)',
      description: 'Don\'t be the bottleneck. Automate policy checks (OPA) and view vulnerability scores across your entire fleet.',
    },
    {
      id: 'techdocs',
      title: 'TechDocs (Documentation)',
      description: 'Docs-like-code. Keep your documentation close to your code, rendered beautifully in IntegraCI.',
    },
  ]

  return (
    <section id="platform" className="py-20 bg-gray-50 dark:bg-gray-800/50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Everything Your Developers Need, Under One Roof.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left p-6 rounded-lg border-2 transition-all ${
                  activeTab === tab.id
                    ? 'border-primary-600 dark:border-primary-400 bg-primary-50 dark:bg-primary-900/20'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <h3 className={`text-xl font-semibold mb-2 ${
                  activeTab === tab.id
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-900 dark:text-white'
                }`}>
                  {tab.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {tab.description}
                </p>
              </button>
            ))}
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto text-primary-600 dark:text-primary-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {tabs.find(t => t.id === activeTab)?.title} Preview
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

