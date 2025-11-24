# IntegraCI Landing Page

Landing page untuk IntegraCI - The Internal Developer Platform (IDP) for Modern Enterprises.

## Tech Stack

- **Next.js 14** - React framework dengan SSR/SSG
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animations (optional)

## Fitur

- ✅ Dark Mode dengan local storage persistence
- ✅ Responsive design (mobile-first)
- ✅ SEO optimized dengan Schema markup
- ✅ Form submission dengan webhook integration
- ✅ Google Analytics integration
- ✅ Performance optimized (target Lighthouse 90+)

## Getting Started

### Install Dependencies

```bash
npm install
```

### Setup Environment Variables

Copy `.env.example` ke `.env.local` dan isi dengan nilai yang sesuai:

```bash
cp .env.example .env.local
```

### Run Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Build for Production

```bash
npm run build
npm start
```

## Deployment

Project ini siap untuk di-deploy ke:
- **Vercel** (recommended) - `vercel deploy`
- **Netlify** - Connect repository
- **AWS Amplify** - Connect repository

## Struktur Project

```
├── app/
│   ├── api/              # API routes
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── SocialProof.tsx
│   ├── ProblemSection.tsx
│   ├── SolutionSection.tsx
│   ├── IntegrationSection.tsx
│   ├── PersonaSection.tsx
│   ├── ComparisonSection.tsx
│   ├── FooterCTA.tsx
│   ├── Footer.tsx
│   ├── DarkModeProvider.tsx
│   └── GoogleAnalytics.tsx
└── project-brief/        # Project documentation
```

## Webhook Integration

Form submissions dikirim ke webhook URL yang dikonfigurasi di environment variable `WEBHOOK_URL`. Format data yang dikirim:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "leadSource": "Landing Page",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Performance Targets

- Lighthouse Score: 90+
- First Contentful Paint (FCP): < 1.5s
- Time to Interactive (TTI): < 3.5s

## License

Proprietary - All rights reserved

