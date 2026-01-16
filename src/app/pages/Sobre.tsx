import { motion } from 'motion/react';
import { useRef } from 'react';
import { useInView } from 'motion/react';
import { Users, Target, Leaf, Sparkles } from 'lucide-react';
import { PageLayout } from '@/app/components/layout';
import { OrganicCurve } from '@/app/components/OrganicCurve';
import { ScrollReveal } from '@/app/components/ScrollReveal';

const values = [
  {
    icon: Leaf,
    title: 'Natureza & Tecnologia',
    description: 'Acreditamos que tecnologia e natureza não são opostos. Criamos soluções que respiram, crescem e evoluem organicamente.',
  },
  {
    icon: Users,
    title: 'Humanidade em Primeiro',
    description: 'Por trás de cada pixel, existe uma pessoa. Projetamos experiências que respeitam e valorizam a humanidade.',
  },
  {
    icon: Target,
    title: 'Propósito Claro',
    description: 'Cada projeto nasce de uma intenção clara. Não criamos apenas sites, criamos posicionamentos digitais.',
  },
  {
    icon: Sparkles,
    title: 'Excelência Visual',
    description: 'O belo também funciona. Acreditamos que design de qualidade gera confiança e resultados.',
  },
];

const team = [
  {
    name: 'Ana Clara',
    role: 'Design Lead',
    description: 'Transforma ideias em experiências visuais memoráveis.',
  },
  {
    name: 'Lucas Mendes',
    role: 'Tech Lead',
    description: 'Arquiteta soluções tecnológicas com propósito.',
  },
  {
    name: 'Marina Santos',
    role: 'Strategy Lead',
    description: 'Conecta marcas ao seu público de forma autêntica.',
  },
];

export function Sobre() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <PageLayout>
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20">
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.span
            className="inline-block text-sm uppercase tracking-widest text-[#6B8E6B] mb-6"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Sobre a InG3
          </motion.span>

          <motion.h1
            className="text-5xl md:text-7xl mb-8 text-[#2D4A2D] tracking-tight"
            style={{ fontFamily: 'var(--font-headline)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Onde tecnologia<br />
            <span className="bg-gradient-to-r from-[#6B8E6B] to-[#8FA88F] bg-clip-text text-transparent">
              encontra propósito
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-[#5A6F5A] max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Somos mais do que uma agência digital. Somos arquitetos de presenças online que representam a essência de cada projeto, cada ideia, cada sonho.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40">
          <OrganicCurve bottomColor="#7A9A7A" topColor="transparent" />
        </div>
      </section>

      <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#7A9A7A] via-[#8FA88F] to-[#9FB59F] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-20">
            <h2
              className="text-4xl md:text-5xl mb-6 text-[#F8FAF7] tracking-tight"
              style={{ fontFamily: 'var(--font-headline)' }}
            >
              Nossos Valores
            </h2>
            <p
              className="text-lg text-[#F8FAF7]/80 max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
            >
              Os pilares que guiam cada decisão e cada pixel do nosso trabalho.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="bg-white/95 backdrop-blur-xl rounded-[32px] p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-[24px] bg-gradient-to-br from-[#6B8E6B] to-[#8FA88F] text-white shadow-lg">
                      <value.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <h3
                    className="text-2xl mb-4 text-[#2D4A2D]"
                    style={{ fontFamily: 'var(--font-headline)' }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="text-[#5A6F5A] leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
                  >
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40">
          <OrganicCurve topColor="#8FA88F" bottomColor="#F8FAF7" variant="bottom" />
        </div>
      </section>

      <section className="relative py-24 md:py-32 bg-[#F8FAF7] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-20">
            <h2
              className="text-4xl md:text-5xl mb-6 text-[#2D4A2D] tracking-tight"
              style={{ fontFamily: 'var(--font-headline)' }}
            >
              Nosso Time
            </h2>
            <p
              className="text-lg text-[#5A6F5A] max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
            >
              Pessoas apaixonadas por criar o futuro digital.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="text-center group">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#8FA88F] to-[#6B8E6B] flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-500">
                    <span
                      className="text-4xl text-white"
                      style={{ fontFamily: 'var(--font-headline)' }}
                    >
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3
                    className="text-2xl mb-2 text-[#2D4A2D]"
                    style={{ fontFamily: 'var(--font-headline)' }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-[#6B8E6B] mb-3"
                    style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                  >
                    {member.role}
                  </p>
                  <p
                    className="text-[#5A6F5A]"
                    style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
                  >
                    {member.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
