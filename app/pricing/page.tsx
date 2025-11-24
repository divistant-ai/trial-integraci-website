import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PricingSection from '@/components/PricingSection'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Pricing - IntegraCI',
  description: 'Choose the right plan for your engineering team. Transparent pricing with no hidden fees.',
}

export default function PricingPage() {
  return (
    <>
      <Script
        id="pricing-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'IntegraCI',
            offers: [
              {
                '@type': 'Offer',
                name: 'Starter',
                price: '0',
                priceCurrency: 'USD',
              },
              {
                '@type': 'Offer',
                name: 'Professional',
                price: 'Custom',
                priceCurrency: 'USD',
              },
              {
                '@type': 'Offer',
                name: 'Enterprise',
                price: 'Custom',
                priceCurrency: 'USD',
              },
            ],
          }),
        }}
      />
      <Navigation />
      <main>
        <PricingSection />
      </main>
      <Footer />
    </>
  )
}

