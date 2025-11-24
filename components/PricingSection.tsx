export default function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for small teams getting started with platform engineering',
      features: [
        'Up to 10 services',
        'Basic Service Catalog',
        'Self-Service Scaffolder',
        'Community Support',
        'Standard Integrations',
        'Basic Documentation',
      ],
      cta: 'Get Started Free',
      ctaLink: '#demo',
      popular: false,
    },
    {
      name: 'Professional',
      price: 'Custom',
      description: 'For growing teams that need advanced features and support',
      features: [
        'Unlimited services',
        'Advanced Service Catalog',
        'Custom Scaffolder Templates',
        'Priority Support',
        'All Integrations (50+)',
        'Advanced Governance (OPA)',
        'TechDocs Pro',
        'DORA Metrics Dashboard',
        'SLA: 99.9% Uptime',
      ],
      cta: 'Contact Sales',
      ctaLink: '#sales',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with complex requirements',
      features: [
        'Everything in Professional',
        'Dedicated Account Manager',
        'Custom Integrations',
        'On-Premise Deployment',
        'Advanced Security & Compliance',
        '24/7 Phone Support',
        'SLA: 99.99% Uptime',
        'Custom Training',
        'White-Glove Onboarding',
      ],
      cta: 'Contact Sales',
      ctaLink: '#sales',
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the right plan for your engineering team. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg border-2 p-8 ${
                plan.popular
                  ? 'border-primary-600 dark:border-primary-400 bg-primary-50 dark:bg-primary-900/20 scale-105'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  {plan.price !== 'Free' && (
                    <span className="text-gray-600 dark:text-gray-400 ml-2">/month</span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {plan.description}
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={plan.ctaLink}
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-primary-600 hover:bg-primary-700 text-white'
                    : 'bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Can I change plans later?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We accept all major credit cards, ACH transfers, and can invoice for Enterprise customers.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Is there a free trial?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes! Start with our free Starter plan. Professional and Enterprise plans include a 14-day free trial.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Do you offer discounts for annual plans?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, we offer up to 20% discount for annual commitments. Contact sales for details.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Need help choosing the right plan?
          </p>
          <a
            href="#demo"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Schedule a Demo
          </a>
        </div>
      </div>
    </section>
  )
}

