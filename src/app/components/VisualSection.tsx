import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function VisualSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-gradient-to-br from-[#8FA88F] via-[#7A9A7A] to-[#6B8E6B] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 
            className="text-5xl md:text-6xl mb-6 text-[#F8FAF7] tracking-tight"
            style={{ fontFamily: 'var(--font-headline)' }}
          >
            Experiências digitais
          </h2>
          <p 
            className="text-lg md:text-xl text-[#F8FAF7]/90 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
          >
            Onde tecnologia e natureza se encontram para criar conexões autênticas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="relative rounded-[32px] overflow-hidden shadow-2xl group h-[400px] md:h-[500px] border border-white/10"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <img 
              src="https://images.unsplash.com/photo-1558455546-d697224f1d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmUlMjB0ZWNoJTIwbWluaW1hbHxlbnwxfHx8fDE3Njg2MDQzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Future tech minimal"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D4A2D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-8 left-8 right-8 backdrop-blur-md bg-white/10 p-6 rounded-[24px] border border-white/20">
                <h3 
                  className="text-3xl md:text-4xl text-[#F8FAF7] mb-3"
                  style={{ fontFamily: 'var(--font-headline)' }}
                >
                  Design que inspira
                </h3>
                <p 
                  className="text-base text-[#F8FAF7]/90"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
                >
                  Interfaces que respiram e conectam
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative rounded-[32px] overflow-hidden shadow-2xl group h-[400px] md:h-[500px] border border-white/10"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <img 
              src="https://images.unsplash.com/photo-1692805949033-4212d6f6baec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZ3JlZW4lMjB0ZXh0dXJlfGVufDF8fHx8MTc2ODYwNDMxNnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Organic green texture"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D4A2D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-8 left-8 right-8 backdrop-blur-md bg-white/10 p-6 rounded-[24px] border border-white/20">
                <h3 
                  className="text-3xl md:text-4xl text-[#F8FAF7] mb-3"
                  style={{ fontFamily: 'var(--font-headline)' }}
                >
                  Natureza e tecnologia
                </h3>
                <p 
                  className="text-base text-[#F8FAF7]/90"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
                >
                  Harmonia entre orgânico e digital
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}