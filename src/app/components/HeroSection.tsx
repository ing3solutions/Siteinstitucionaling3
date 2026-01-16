import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { OrganicCurve } from '@/app/components/OrganicCurve';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with strong blur */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1700667010507-db08d584da48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjB0ZWNobm9sb2d5JTIwbGVhdmVzfGVufDF8fHx8MTc2ODYwNDMxNHww&ixlib=rb-4.1.0&q=80&w=1080)',
            filter: 'blur(12px) brightness(0.85)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAF7]/95 via-[#E8F0E8]/90 to-[#D5E5D5]/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl mb-8 text-[#2D4A2D] tracking-tight"
            style={{ fontFamily: 'var(--font-headline)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Colocando você<br />
            <span className="bg-gradient-to-r from-[#6B8E6B] to-[#8FA88F] bg-clip-text text-transparent">no mundo</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl mb-4 text-[#5A6F5A] max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Do jeito certo
          </motion.p>

          <motion.p 
            className="text-base md:text-lg mb-12 text-[#6B7F6B] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            A internet é o maior palco do mundo. A InG3 existe para garantir que você entre nele com identidade, clareza e impacto.
          </motion.p>

          <Link to="/contato">
            <motion.div
              className="group inline-flex items-center gap-3 bg-gradient-to-br from-[#6B8E6B] to-[#7A9A7A] hover:from-[#5A7A5A] hover:to-[#6B8E6B] text-white px-10 py-5 rounded-full transition-all duration-500 shadow-lg hover:shadow-2xl hover:scale-105 backdrop-blur-sm cursor-pointer"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-lg">Começar minha jornada</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Organic curve separator */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40">
        <OrganicCurve bottomColor="#8FA88F" topColor="transparent" />
      </div>
    </section>
  );
}