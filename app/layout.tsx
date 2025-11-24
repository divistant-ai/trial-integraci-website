import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { DarkModeProvider } from '@/components/DarkModeProvider'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IntegraCI - The Internal Developer Platform for Modern Enterprises',
  description: 'Stop Fighting Your Tools. Start Orchestrating Them. IntegraCI unifies your fragmented DevOps tools into one Self-Service Portal.',
  keywords: 'DevOps, Internal Developer Platform, IDP, CI/CD, Platform Engineering',
  openGraph: {
    title: 'IntegraCI - The Internal Developer Platform',
    description: 'Unify your DevOps tools into one Self-Service Portal',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <DarkModeProvider>
          {children}
        </DarkModeProvider>
      </body>
    </html>
  )
}

