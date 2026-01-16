import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Globe, Users, TrendingUp, Clock } from 'lucide-react';

const benefits = [
  {
    icon: Globe,
    title: "Alcance Global",
    description: "Sua marca disponível 24 horas por dia para o mundo inteiro. Sem fronteiras, sem limites.",
    stat: "4.9B+",
    statLabel: "pessoas online"
  },
  {
    icon: Users,
    title: "Conexão Direta",
    description: "Fale diretamente com seu público. Crie relacionamentos genuínos e duradouros.",
    stat: "83%",
    statLabel: "preferem marcas online"
  },
  {
    icon: TrendingUp,
    title: "Crescimento Escalável",
    description: "Expanda sem os custos de estrutura física. Cresça de forma inteligente e sustentável.",
    stat: "3.5x",
    statLabel: "mais retorno"
  },
  {
    icon: Clock,
    title: "Sempre Presente",
    description: "Sua presença trabalha por você enquanto você descansa. O mundo nunca para.",
    stat: "24/7",
    statLabel: "disponibilidade"
  }
];

export function WhyInternetSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const glassCardStyle = {
    background: 'rgba(255, 255, 255, 0.5)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.5)',
  };

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-[#F8FAF7] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#8FA88F]/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#6B8E6B]/15 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span 
            className="inline-block text-sm tracking-widest text-[#6B8E6B] uppercase mb-4"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Por que estar na internet?
          </motion.span>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[#2D4A2D] tracking-tight"
            style={{ fontFamily: 'var(--font-headline)' }}
          >
            O mundo está<br />
            <span className="bg-gradient-to-r from-[#6B8E6B] to-[#8FA88F] bg-clip-text text-transparent">
              conectado
            </span>
          </h2>
          <p 
            className="text-lg md:text-xl text-[#5A6F5A] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
          >
            Quem não está online, está invisível. A internet é onde as oportunidades acontecem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group relative rounded-[28px] p-8 md:p-10 hover:shadow-xl transition-all duration-500"
              style={glassCardStyle}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.2 + index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <div className="flex items-start gap-6">
                <motion.div 
                  className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6B8E6B] to-[#8FA88F] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <benefit.icon className="w-7 h-7 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 
                    className="text-xl md:text-2xl mb-3 text-[#2D4A2D]"
                    style={{ fontFamily: 'var(--font-headline)' }}
                  >
                    {benefit.title}
                  </h3>
                  <p 
                    className="text-base text-[#5A6F5A] leading-relaxed mb-4"
                    style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
                  >
                    {benefit.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span 
                      className="text-3xl md:text-4xl text-[#6B8E6B]"
                      style={{ fontFamily: 'var(--font-headline)' }}
                    >
                      {benefit.stat}
                    </span>
                    <span 
                      className="text-sm text-[#8A9A8A]"
                      style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}
                    >
                      {benefit.statLabel}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
