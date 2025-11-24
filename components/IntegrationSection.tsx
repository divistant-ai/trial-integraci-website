export default function IntegrationSection() {
  const integrations = [
    'Jenkins',
    'GitLab',
    'GitHub',
    'Trivy',
    'ArgoCD',
    'Jira',
    'Slack',
  ]

  return (
    <section id="integrations" className="py-20 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
          We Play Nice with Your Stack.
        </h2>
        <p className="text-center text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          IntegraCI sits on top of your existing tools. No rip-and-replace required. Keep using what works, orchestrate the rest.
        </p>
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="bg-primary-600 dark:bg-primary-500 text-white rounded-full w-32 h-32 flex items-center justify-center text-xl font-bold shadow-lg">
              IntegraCI
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm">
                    {integration.charAt(0)}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {integration}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href="#integrations"
            className="text-primary-600 dark:text-primary-400 font-semibold hover:underline inline-flex items-center"
          >
            Explore all 50+ Plugins
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

