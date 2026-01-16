import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ParallaxBackground } from '../ParallaxBackground';

interface PageLayoutProps {
  children: ReactNode;
  showParallax?: boolean;
  backgroundImage?: string;
}

export function PageLayout({ children, showParallax = true, backgroundImage }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {showParallax && <ParallaxBackground imageUrl={backgroundImage} />}
      <Header />
      <motion.main
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
