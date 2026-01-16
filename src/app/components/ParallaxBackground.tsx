import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ParallaxBackgroundProps {
  imageUrl?: string;
  speed?: number;
}

export function ParallaxBackground({ 
  imageUrl = 'https://images.unsplash.com/photo-1700667010507-db08d584da48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjB0ZWNobm9sb2d5JTIwbGVhdmVzfGVufDF8fHx8MTc2ODYwNDMxNHww&ixlib=rb-4.1.0&q=80&w=1920',
  speed = 0.3
}: ParallaxBackgroundProps) {
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const y = useTransform(scrollY, [0, windowHeight * 3], [0, windowHeight * speed]);
  const opacity = useTransform(scrollY, [0, windowHeight], [0.15, 0.05]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute inset-0 w-full h-[150%] bg-cover bg-center"
        style={{
          y,
          backgroundImage: `url(${imageUrl})`,
          filter: 'blur(20px) saturate(0.8)',
        }}
      />
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#F8FAF7]/98 via-[#E8F0E8]/95 to-[#D5E5D5]/90"
        style={{ opacity: useTransform(opacity, (v) => 1 - v) }}
      />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#8FA88F]/10 to-transparent blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[800px] h-[800px] rounded-full bg-gradient-to-tl from-[#6B8E6B]/10 to-transparent blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#9FB59F]/5 to-[#7A9A7A]/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  );
}
