export default function SocialProof() {
  const partners = [
    'AWS Partner',
    'CNCF Member',
    'GitLab Partner',
    'Kubernetes Certified',
  ]

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800/50 border-y border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-6">
          Trusted by engineering teams at:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 opacity-60 grayscale">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <span className="text-gray-700 dark:text-gray-300 font-medium text-xs sm:text-sm">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

