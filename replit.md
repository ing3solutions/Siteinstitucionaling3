# InG3 Website

## Overview
This is a React + Vite + Tailwind CSS website for InG3, a company that helps clients establish their identity and presence on the internet.

## Tech Stack
- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.12
- **UI Components**: Radix UI, MUI, Shadcn-style components
- **Animation**: Motion library

## Project Structure
```
├── src/
│   ├── app/           # Main application components
│   │   ├── App.tsx    # Root component
│   │   └── components/ # UI components
│   ├── styles/        # CSS styles
│   └── main.tsx       # Entry point
├── index.html         # HTML template
├── vite.config.ts     # Vite configuration
└── package.json       # Dependencies
```

## Development
- **Dev Server**: `npm run dev` - Runs on port 5000
- **Build**: `npm run build` - Creates production build in `dist/`

## Deployment
Configured for static deployment with the build output in `dist/` directory.
