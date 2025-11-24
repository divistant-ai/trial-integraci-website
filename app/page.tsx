import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import IntegrationSection from '@/components/IntegrationSection'
import PersonaSection from '@/components/PersonaSection'
import ComparisonSection from '@/components/ComparisonSection'
import FooterCTA from '@/components/FooterCTA'
import Footer from '@/components/Footer'
import ExitIntentPopup from '@/components/ExitIntentPopup'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Script
        id="schema-markup"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'IntegraCI',
            applicationCategory: 'DeveloperApplication',
            description: 'The Internal Developer Platform (IDP) for Modern Enterprises',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
          }),
        }}
      />
      <Navigation />
      <main>
        <Hero />
        <SocialProof />
        <ProblemSection />
        <SolutionSection />
        <IntegrationSection />
        <PersonaSection />
        <ComparisonSection />
        <FooterCTA />
      </main>
      <Footer />
      <ExitIntentPopup />
    </>
  )
}

