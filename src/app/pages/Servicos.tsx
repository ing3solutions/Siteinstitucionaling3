import { motion } from 'motion/react';
import { useRef } from 'react';
import { useInView } from 'motion/react';
import { Globe, Palette, Megaphone, Code, Smartphone, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageLayout } from '@/app/components/layout';
import { OrganicCurve } from '@/app/components/OrganicCurve';
import { ScrollReveal } from '@/app/components/ScrollReveal';

const services = [
  {
    icon: Globe,
    title: 'Sites Institucionais',
    description: 'Presenças digitais que representam a essência do seu negócio. Sites que contam histórias e geram conexão.',
    features: ['Design responsivo', 'SEO otimizado', 'Performance máxima', 'Gestão de conteúdo'],
  },
  {
    icon: Palette,
    title: 'Identidade Visual',
    description: 'Do conceito à aplicação. Criamos marcas memoráveis que traduzem seu propósito em elementos visuais.',
    features: ['Logo e marca', 'Manual de identidade', 'Aplicações digitais', 'Papelaria'],
  },
  {
    icon: Megaphone,
    title: 'Marketing Digital',
    description: 'Estratégias inteligentes para conectar sua marca ao público certo, no momento certo.',
    features: ['Social media', 'Campanhas pagas', 'Email marketing', 'Analytics'],
  },
  {
    icon: Code,
    title: 'Desenvolvimento Web',
    description: 'Soluções técnicas robustas e escaláveis. Do e-commerce ao sistema personalizado.',
    features: ['E-commerce', 'Sistemas web', 'Integrações', 'APIs'],
  },
  {
    icon: Smartphone,
    title: 'Aplicativos Mobile',
    description: 'Experiências mobile nativas que encantam usuários e geram resultados.',
    features: ['iOS e Android', 'UX mobile-first', 'Integrações', 'Publicação nas lojas'],
  },
  {
    icon: TrendingUp,
    title: 'Consultoria Digital',
    description: 'Orientação estratégica para transformar sua presença digital e alcançar novos patamares.',
    features: ['Diagnóstico', 'Planejamento', 'Mentoria', 'Acompanhamento'],
  },
];

export function Servicos() {
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
            Nossos Serviços
          </motion.span>

          <motion.h1
            className="text-5xl md:text-7xl mb-8 text-[#2D4A2D] tracking-tight"
            style={{ fontFamily: 'var(--font-headline)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Soluções que<br />
            <span className="bg-gradient-to-r from-[#6B8E6B] to-[#8FA88F] bg-clip-text text-transparent">
              transformam
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-[#5A6F5A] max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Do planejamento à execução, oferecemos um ecossistema completo de serviços digitais pensados para sua realidade.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40">
          <OrganicCurve bottomColor="#F8FAF7" topColor="transparent" />
        </div>
      </section>

      <section className="relative py-24 md:py-32 bg-[#F8FAF7]">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group h-full bg-white rounded-[32px] p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#E8F0E8]">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-[20px] bg-gradient-to-br from-[#6B8E6B] to-[#8FA88F] text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <service.icon className="w-8 h-8" />
                    </div>
                  </div>

                  <h3
                    className="text-2xl mb-4 text-[#2D4A2D]"
                    style={{ fontFamily: 'var(--font-headline)' }}
                  >
                    {service.title}
                  </h3>

                  <p
                    className="text-[#5A6F5A] mb-6 leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
                  >
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-[#6B8E6B]"
                        style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#8FA88F]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#8FA88F] via-[#7A9A7A] to-[#6B8E6B] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2
              className="text-4xl md:text-5xl mb-6 text-[#F8FAF7] tracking-tight"
              style={{ fontFamily: 'var(--font-headline)' }}
            >
              Pronto para começar?
            </h2>
            <p
              className="text-lg text-[#F8FAF7]/90 mb-10 max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
            >
              Vamos conversar sobre como a InG3 pode transformar sua presença digital.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/contato"
                className="inline-flex items-center gap-3 bg-[#F8FAF7] text-[#2D4A2D] px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
              >
                <span className="text-lg">Falar com a InG3</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
