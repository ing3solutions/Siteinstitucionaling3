import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Lightbulb, Users, Rocket, Eye, Palette, Code2 } from 'lucide-react';
import { OrganicCurve } from '@/app/components/OrganicCurve';

const features = [
  {
    icon: Lightbulb,
    title: "Estratégia Digital",
    description: "Cada site é pensado do zero, com estratégia que faz sentido para seu negócio e objetivos."
  },
  {
    icon: Palette,
    title: "Design com Identidade",
    description: "Cada projeto tem identidade própria. Cada decisão visual tem intenção. Zero templates."
  },
  {
    icon: Code2,
    title: "Tecnologia Moderna",
    description: "Desenvolvemos com as melhores tecnologias, garantindo performance e escalabilidade."
  },
  {
    icon: Eye,
    title: "Experiência Intuitiva",
    description: "UX pensada para conectar pessoas às oportunidades de forma natural e fluida."
  },
  {
    icon: Users,
    title: "Atendimento Humano",
    description: "Cada cliente é tratado como marca, não como template. Acompanhamento próximo e atencioso."
  },
  {
    icon: Rocket,
    title: "Visão de Futuro",
    description: "Criamos experiências que fazem sentido agora e daqui a anos. Design atemporal."
  }
];

export function SolutionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-[#F8FAF7]">
      {/* Top curve */}
      <div className="h-32 md:h-40">
        <OrganicCurve variant="top" topColor="#8FA88F" bottomColor="transparent" />
      </div>

      <div ref={ref} className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 
              className="text-5xl md:text-6xl mb-6 text-[#2D4A2D] tracking-tight"
              style={{ fontFamily: 'var(--font-headline)' }}
            >
              Como trabalhamos
            </h2>
            <p 
              className="text-lg md:text-xl text-[#5A6F5A] max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
            >
              Nosso diferencial está em transformar cada projeto em uma experiência única, que conecta pessoas, ideias e oportunidades.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/90 backdrop-blur-sm rounded-[32px] p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#E5EDE5] hover:border-[#8FA88F]/30 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -8 }}
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8FA88F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <motion.div 
                    className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-[20px] bg-gradient-to-br from-[#6B8E6B] to-[#8FA88F] text-white shadow-md"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="w-7 h-7" />
                  </motion.div>
                  <h3 
                    className="text-xl md:text-2xl mb-4 text-[#2D4A2D] group-hover:text-[#6B8E6B] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-headline)' }}
                  >
                    {feature.title}
                  </h3>
                  <p 
                    className="text-base text-[#5A6F5A] leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="h-32 md:h-40">
        <OrganicCurve bottomColor="#8FA88F" topColor="transparent" />
      </div>
    </section>
  );
}