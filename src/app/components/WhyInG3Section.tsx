import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Leaf, Shield, Lightbulb, Handshake } from 'lucide-react';

const reasons = [
  {
    icon: Leaf,
    title: "Abordagem Orgânica",
    description: "Cada projeto cresce naturalmente, respeitando a essência única da sua marca e do seu negócio."
  },
  {
    icon: Shield,
    title: "Compromisso Real",
    description: "Não entregamos templates. Criamos soluções pensadas especificamente para você e seus objetivos."
  },
  {
    icon: Lightbulb,
    title: "Visão Estratégica",
    description: "Unimos criatividade com estratégia para criar presenças digitais que realmente convertem."
  },
  {
    icon: Handshake,
    title: "Parceria Genuína",
    description: "Trabalhamos junto com você. Seu sucesso é o nosso sucesso. Simples assim."
  }
];

export function WhyInG3Section() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-gradient-to-br from-[#2D4A2D] via-[#3A5A3A] to-[#4A6A4A] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span 
            className="inline-block text-sm tracking-widest text-[#8FA88F] uppercase mb-4"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Por que a InG3?
          </motion.span>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white tracking-tight"
            style={{ fontFamily: 'var(--font-headline)' }}
          >
            Confiança que se<br />
            <span className="bg-gradient-to-r from-[#8FA88F] to-[#B5C5B5] bg-clip-text text-transparent">
              constrói
            </span>
          </h2>
          <p 
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
          >
            Escolher a InG3 é escolher uma parceria que valoriza sua visão e transforma em realidade digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="group relative rounded-[24px] p-6 md:p-8 transition-all duration-500"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.2 + index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                y: -8, 
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center transition-all duration-300"
                style={{
                  background: 'rgba(143, 168, 143, 0.3)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <reason.icon className="w-6 h-6 text-[#B5C5B5]" />
              </motion.div>
              <h3 
                className="text-lg md:text-xl mb-3 text-white"
                style={{ fontFamily: 'var(--font-headline)' }}
              >
                {reason.title}
              </h3>
              <p 
                className="text-sm md:text-base text-white/70 leading-relaxed"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
              >
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
