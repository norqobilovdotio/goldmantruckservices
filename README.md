# Goldman Truck Services - Landing Page

A production-ready, fully functional landing page for Goldman Truck Services, a truck repair center in Cincinnati, OH.

## Features

- **Modern Design**: Clean, premium, industrial aesthetic with glassmorphism effects
- **Fully Responsive**: Works perfectly on all devices
- **Lead Generation**: Contact form with honeypot spam protection
- **Interactive Map**: Embedded Google Maps for easy location finding
- **Smooth Animations**: Subtle entrance animations using Framer Motion
- **Accessibility**: Proper semantic HTML and good contrast ratios
- **Performance**: Optimized for fast loading

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Framer Motion
- Lucide React icons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```
DATABASE_URL="file:./dev.db"
SMTP_HOST=""
SMTP_PORT="587"
SMTP_USER=""
SMTP_PASS=""
SMTP_FROM="Goldman Truck Services <service@goldmantruckservices.com>"
SMTP_TO="service@goldmantruckservices.com"
```

3. Initialize the database:
```bash
npx prisma db push
```

4. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── api/contact/route.ts    # Contact form API endpoint
│   ├── privacy/page.tsx         # Privacy policy page
│   ├── terms/page.tsx           # Terms of service page
│   ├── globals.css              # Global styles with glassmorphism
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── components/
│   ├── ui/                      # Reusable UI components
│   ├── Header.tsx               # Sticky navigation header
│   ├── Hero.tsx                 # Hero section
│   ├── InfoBar.tsx              # Quick info bar
│   ├── Services.tsx             # Services grid
│   ├── Parking.tsx              # Parking section
│   ├── WhyUs.tsx                # Why choose us section
│   ├── Testimonials.tsx         # Customer reviews
│   ├── FAQ.tsx                  # FAQ accordion
│   ├── MapContact.tsx           # Map and contact form
│   └── Footer.tsx               # Footer
└── lib/
    └── utils.ts                 # Utility functions
```

## Contact Information

- **Phone**: 513-900-0000
- **Address**: 11919 Tramway Dr, Cincinnati, OH 45241
- **Email**: service@goldmantruckservices.com

## License

All rights reserved © Goldman Truck Services

# goldmantruckservices
