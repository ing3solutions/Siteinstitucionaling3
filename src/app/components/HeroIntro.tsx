import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export function HeroIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  const scrollToContent = () => {
    const contentSection = document.getElementById('content-start');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="intro"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with nature image and blur */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1700667010507-db08d584da48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjB0ZWNobm9sb2d5JTIwbGVhdmVzfGVufDF8fHx8MTc2ODYwNDMxNHww&ixlib=rb-4.1.0&q=80&w=1920)',
            filter: 'blur(8px) brightness(0.9)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAF7]/90 via-[#E8F0E8]/85 to-[#D5E5D5]/80" />
      </div>

      {/* Animated Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        style={{ opacity, scale, y }}
      >
        {/* Main headline with staggered animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-6 text-[#2D4A2D] tracking-tight leading-[1.1]"
            style={{ fontFamily: 'var(--font-headline)' }}
          >
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 80, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Colocando você
            </motion.span>
            <br />
            <motion.span
              className="inline-block bg-gradient-to-r from-[#6B8E6B] via-[#7A9A7A] to-[#8FA88F] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 80, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              no mundo
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl mb-4 text-[#5A6F5A]"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Do jeito certo
          </motion.p>

          <motion.p 
            className="text-base md:text-lg lg:text-xl mb-16 text-[#6B7F6B] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            A internet é o maior palco do mundo. A InG3 existe para garantir que você entre nele com identidade, clareza e impacto.
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToContent}
          className="inline-flex flex-col items-center gap-2 text-[#6B8E6B] hover:text-[#5A7A5A] transition-colors cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span 
            className="text-sm tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
          >
            Explorar
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Organic wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none" 
          className="w-full h-20 md:h-28"
          fill="none"
        >
          <motion.path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,75 1440,60 L1440,120 L0,120 Z"
            fill="#F8FAF7"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
      </div>
    </section>
  );
}
