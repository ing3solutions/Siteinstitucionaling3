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

### Glassmorphism
- Light glass: rgba(248, 250, 247, 0.7) + blur(20px)
- Medium glass: rgba(248, 250, 247, 0.85) + blur(24px)
- Dark glass: rgba(45, 74, 45, 0.6) + blur(20px)
- Card glass: rgba(255, 255, 255, 0.5) + blur(16px)

### Typography
- Headline: Clash Display (via Fontshare)
- Body: Manrope (via Google Fonts)

### Animation Easing
- Standard: [0.22, 1, 0.36, 1]
- Bounce: [0.34, 1.56, 0.64, 1]

## Project Structure
```
├── src/
│   ├── app/
│   │   ├── App.tsx           # Main app with React Router
│   │   ├── design-system.ts  # Design tokens + glassmorphism
│   │   ├── components/       # UI components
│   │   │   ├── layout/       # Header, Footer, PageLayout, StickyNav
│   │   │   ├── HeroIntro.tsx # Animated intro with scroll effects
│   │   │   ├── HeroSection.tsx
│   │   │   ├── WhyInternetSection.tsx
│   │   │   ├── WhyInG3Section.tsx
│   │   │   ├── PurposeSection.tsx
│   │   │   ├── SolutionsSection.tsx
│   │   │   ├── VisualSection.tsx
│   │   │   ├── TrustSection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── OrganicCurve.tsx
│   │   │   ├── ParallaxBackground.tsx
│   │   │   └── ScrollReveal.tsx
│   │   └── pages/            # Route pages
│   │       ├── Home.tsx      # Custom layout with HeroIntro + StickyNav
│   │       ├── Sobre.tsx     # About page
│   │       ├── Servicos.tsx  # Services page
│   │       ├── Projetos.tsx  # Portfolio page
│   │       ├── Conteudo.tsx  # Blog/Insights page
│   │       └── Contato.tsx   # Contact page
│   ├── assets/
│   │   └── images/
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
- **Home** (`/`): Animated HeroIntro, WhyInternet, Purpose, WhyInG3, Solutions, Visual, Trust, CTA
- **Sobre** (`/sobre`): About page with values and team
- **Serviços** (`/servicos`): Services with feature cards
- **Projetos** (`/projetos`): Portfolio with filtering
- **Conteúdo** (`/conteudo`): Blog/insights page
- **Contato** (`/contato`): Contact form with info

## Key Components
- **HeroIntro**: Dramatic entrance animation with staggered text, scroll-linked fade/scale
- **StickyNav**: Glassmorphism navigation appearing after scroll, with social icons
- **PageLayout**: Shared layout with Header, Footer, ParallaxBackground
- **ScrollReveal**: Scroll-triggered fade-in animations
- **ParallaxBackground**: Animated organic background with parallax
- **OrganicCurve**: SVG section separators

## Homepage Features
- Animated hero text entrance (staggered, 3D transform)
- Hero fades out and shrinks on scroll
- Sticky glass navigation appears after scrolling 500px
- "Início" link scrolls to content section (not top)
- Instagram and WhatsApp icons with glass hover effect
- Scroll-driven section reveals throughout

## Development
- **Dev Server**: `npm run dev` - Runs on port 5000
- **Build**: `npm run build` - Creates production build in `dist/`

## Deployment
Configured for static deployment with the build output in `dist/` directory.

## Recent Changes (Jan 2026)
- Added dramatic hero intro animation with staggered text entrance
- Implemented sticky glassmorphism navigation bar
- Added Instagram and WhatsApp social links with glass hover effects
- Created WhyInternetSection and WhyInG3Section with scroll animations
- Added glassmorphism design tokens to design-system.ts
- "Início" navigation scrolls to content section instead of top
