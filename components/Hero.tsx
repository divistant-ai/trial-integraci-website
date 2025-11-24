'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide mb-4">
          The Internal Developer Platform (IDP) for Modern Enterprises
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Stop Fighting Your Tools.
          <br />
          <span className="text-primary-600 dark:text-primary-400">Start Orchestrating Them.</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          IntegraCI unifies your fragmented DevOps tools into one Self-Service Portal. Accelerate delivery, enforce governance, and make developers happy—without replacing your existing stack.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#demo"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Started for Free
          </a>
          <a
            href="#demo"
            className="border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors hover:border-primary-600 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400"
          >
            View Interactive Demo
          </a>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Service Health Dashboard</h3>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                  All Systems Operational
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Jenkins Pipeline</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">12 Active</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">SonarQube Score</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">A+</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Services</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">247</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Compatible with Jenkins, GitLab, AWS, K8s, and 50+ tools.
          </p>
        </div>
      </div>
    </section>
  )
}

