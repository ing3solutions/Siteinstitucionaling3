# InG3 Website

## Overview
This is a premium React + Vite + Tailwind CSS website for InG3, a digital agency that creates personalized digital presences with a focus on premium design, human future, technology integrated with nature, and emotional experience.

## Tech Stack
- **Frontend Framework**: React 18.3.1 with React Router DOM for navigation
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.12
- **UI Components**: Radix UI, MUI, Shadcn-style components
- **Animation**: Motion library (Framer Motion)

## Design System

### Colors
- Primary Green: #6B8E6B, #7A9A7A, #8FA88F
- Dark Green: #2D4A2D, #3A5A3A, #4A6A4A
- Off-white: #F8FAF7
- Text Colors: #5A6F5A, #6B7F6B

### Typography
- Headline: Clash Display (via Fontshare)
- Body: Manrope (via Google Fonts)

### Animation Easing
- Standard: [0.22, 1, 0.36, 1]

## Project Structure
```
├── src/
│   ├── app/
│   │   ├── App.tsx           # Main app with React Router
│   │   ├── design-system.ts  # Design tokens
│   │   ├── components/       # UI components
│   │   │   ├── layout/       # Header, Footer, PageLayout
│   │   │   ├── HeroSection.tsx
│   │   │   ├── PurposeSection.tsx
│   │   │   ├── SolutionsSection.tsx
│   │   │   ├── VisualSection.tsx
│   │   │   ├── TrustSection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── OrganicCurve.tsx
│   │   │   ├── ParallaxBackground.tsx
│   │   │   └── ScrollReveal.tsx
│   │   └── pages/            # Route pages
│   │       ├── Home.tsx
│   │       ├── Sobre.tsx     # About page
│   │       ├── Servicos.tsx  # Services page
│   │       ├── Projetos.tsx  # Portfolio page
│   │       ├── Conteudo.tsx  # Blog/Insights page
│   │       └── Contato.tsx   # Contact page
│   ├── assets/
│   │   └── images/           # Organized image assets
│   │       ├── backgrounds/
│   │       ├── nature/
│   │       ├── technology/
│   │       ├── ui/
│   │       └── projects/
│   └── styles/
│       ├── index.css
│       ├── fonts.css
│       ├── theme.css
│       └── tailwind.css
├── index.html
├── vite.config.ts
└── package.json
```

## Pages
- **Home** (`/`): Hero, Purpose, Solutions, Visual, Trust, CTA sections
- **Sobre** (`/sobre`): About page with values and team
- **Serviços** (`/servicos`): Services with feature cards
- **Projetos** (`/projetos`): Portfolio with filtering
- **Conteúdo** (`/conteudo`): Blog/insights page
- **Contato** (`/contato`): Contact form with info

## Key Components
- **PageLayout**: Shared layout with Header, Footer, ParallaxBackground
- **ScrollReveal**: Scroll-triggered fade-in animations
- **ParallaxBackground**: Animated organic background with parallax
- **OrganicCurve**: SVG section separators

## Development
- **Dev Server**: `npm run dev` - Runs on port 5000
- **Build**: `npm run build` - Creates production build in `dist/`

## Deployment
Configured for static deployment with the build output in `dist/` directory.

## Recent Changes (Jan 2026)
- Added multi-page structure with React Router
- Created shared Header, Footer, PageLayout components
- Implemented ParallaxBackground with scroll animations
- Built all 6 pages maintaining consistent design system
- Added ScrollReveal animation component
- Created design-system.ts with color and typography tokens
