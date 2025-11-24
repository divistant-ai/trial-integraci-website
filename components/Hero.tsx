'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide mb-4">
          The Internal Developer Platform (IDP) for Modern Enterprises
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight px-2">
          Stop Fighting Your Tools.
          <br />
          <span className="text-primary-600 dark:text-primary-400">Start Orchestrating Them.</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
          IntegraCI unifies your fragmented DevOps tools into one Self-Service Portal. Accelerate delivery, enforce governance, and make developers happy—without replacing your existing stack.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-8 sm:mb-12 px-4">
          <a
            href="#demo"
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
          >
            Get Started for Free
          </a>
          <a
            href="#demo"
            className="border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors hover:border-primary-600 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 text-center"
          >
            View Interactive Demo
          </a>
        </div>
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-2xl p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-700">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-4 sm:p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 border-b border-gray-200 dark:border-gray-700 pb-3 sm:pb-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Service Health Dashboard</h3>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs sm:text-sm font-medium self-start sm:self-auto">
                  All Systems Operational
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 sm:p-4 rounded-lg">
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">Jenkins Pipeline</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">12 Active</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 sm:p-4 rounded-lg">
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">SonarQube Score</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">A+</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-3 sm:p-4 rounded-lg sm:col-span-2 md:col-span-1">
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">Services</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">247</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-3 sm:mt-4 text-center">
            Compatible with Jenkins, GitLab, AWS, K8s, and 50+ tools.
          </p>
        </div>
      </div>
    </section>
  )
}

