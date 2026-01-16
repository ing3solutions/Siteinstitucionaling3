import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Sparkles, Heart, Zap } from 'lucide-react';

const cards = [
  {
    icon: Sparkles,
    title: "Identidade Digital",
    description: "Traduzimos a essência do seu negócio em experiências digitais que representam, acolhem e projetam o futuro."
  },
  {
    icon: Heart,
    title: "Propósito & Humanidade",
    description: "Onde design encontra propósito, tecnologia encontra humanidade, e futuro encontra clareza."
  },
  {
    icon: Zap,
    title: "Impacto Real",
    description: "Não entregamos páginas, entregamos posicionamento. Criamos presenças vivas na internet."
  }
];

export function PurposeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-gradient-to-br from-[#7A9A7A] via-[#8FA88F] to-[#9FB59F] overflow-hidden">
      {/* Decorative blur circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
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
            O que nós imaginamos
          </h2>
          <p 
            className="text-lg md:text-xl text-[#F8FAF7]/90 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
          >
            A InG3 não cria apenas sites. A InG3 coloca pessoas, ideias e empresas no mundo digital com intenção.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative bg-white/95 backdrop-blur-xl rounded-[32px] p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-[24px] bg-gradient-to-br from-[#6B8E6B] to-[#8FA88F] text-white shadow-lg">
                  <card.icon className="w-8 h-8" />
                </div>
              </div>
              <h3 
                className="text-2xl md:text-3xl mb-4 text-[#2D4A2D]"
                style={{ fontFamily: 'var(--font-headline)' }}
              >
                {card.title}
              </h3>
              <p 
                className="text-base md:text-lg text-[#5A6F5A] leading-relaxed"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
              >
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}