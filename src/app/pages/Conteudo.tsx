import { motion } from 'motion/react';
import { useRef } from 'react';
import { useInView } from 'motion/react';
import { Clock, ArrowRight, BookOpen, Lightbulb, TrendingUp } from 'lucide-react';
import { PageLayout } from '@/app/components/layout';
import { OrganicCurve } from '@/app/components/OrganicCurve';
import { ScrollReveal } from '@/app/components/ScrollReveal';

const featuredArticle = {
  title: 'O Futuro do Design Digital: Natureza e Tecnologia em Harmonia',
  excerpt: 'Exploramos como as tendências de design estão convergindo para criar experiências mais humanas, orgânicas e conectadas com a natureza.',
  category: 'Design',
  readTime: '8 min',
  color: 'from-[#6B8E6B] to-[#8FA88F]',
};

const articles = [
  {
    title: 'Como Construir uma Marca Autêntica no Digital',
    excerpt: 'Descubra os pilares essenciais para criar uma identidade que ressoa com seu público.',
    category: 'Branding',
    readTime: '5 min',
    icon: Lightbulb,
  },
  {
    title: 'Tendências de UX para 2026',
    excerpt: 'As principais tendências que estão moldando a experiência do usuário este ano.',
    category: 'UX Design',
    readTime: '6 min',
    icon: TrendingUp,
  },
  {
    title: 'SEO Orgânico: Estratégias Sustentáveis',
    excerpt: 'Como construir uma presença online duradoura sem depender apenas de anúncios.',
    category: 'Marketing',
    readTime: '7 min',
    icon: BookOpen,
  },
  {
    title: 'A Psicologia das Cores no Design Web',
    excerpt: 'Entenda como as cores influenciam a percepção e o comportamento dos usuários.',
    category: 'Design',
    readTime: '4 min',
    icon: Lightbulb,
  },
  {
    title: 'Mobile First: Mais que uma Tendência',
    excerpt: 'Por que priorizar a experiência mobile é fundamental para o sucesso digital.',
    category: 'Desenvolvimento',
    readTime: '5 min',
    icon: TrendingUp,
  },
  {
    title: 'Storytelling Digital: Conectando Marcas e Pessoas',
    excerpt: 'A arte de contar histórias que criam conexões emocionais no ambiente digital.',
    category: 'Estratégia',
    readTime: '6 min',
    icon: BookOpen,
  },
];

const categories = [
  { name: 'Design', count: 12 },
  { name: 'Branding', count: 8 },
  { name: 'Marketing', count: 15 },
  { name: 'Desenvolvimento', count: 10 },
  { name: 'Estratégia', count: 7 },
];

export function Conteudo() {
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
            Insights & Conteúdo
          </motion.span>

          <motion.h1
            className="text-5xl md:text-7xl mb-8 text-[#2D4A2D] tracking-tight"
            style={{ fontFamily: 'var(--font-headline)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Ideias que<br />
            <span className="bg-gradient-to-r from-[#6B8E6B] to-[#8FA88F] bg-clip-text text-transparent">
              movem
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-[#5A6F5A] max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Artigos, insights e reflexões sobre design, tecnologia e o futuro digital. Conhecimento que transforma.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40">
          <OrganicCurve bottomColor="#F8FAF7" topColor="transparent" />
        </div>
      </section>

      <section className="relative py-12 bg-[#F8FAF7]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <motion.div
              className={`group relative bg-gradient-to-br ${featuredArticle.color} rounded-[32px] p-8 md:p-12 overflow-hidden cursor-pointer`}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl" />
              </div>

              <div className="relative z-10 max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className="px-4 py-1.5 bg-white/20 text-white rounded-full text-sm"
                    style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                  >
                    {featuredArticle.category}
                  </span>
                  <span className="flex items-center gap-2 text-white/80 text-sm">
                    <Clock className="w-4 h-4" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h2
                  className="text-3xl md:text-4xl lg:text-5xl mb-6 text-white"
                  style={{ fontFamily: 'var(--font-headline)' }}
                >
                  {featuredArticle.title}
                </h2>

                <p
                  className="text-lg text-white/90 mb-8 max-w-2xl"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
                >
                  {featuredArticle.excerpt}
                </p>

                <div className="inline-flex items-center gap-2 text-white group-hover:gap-4 transition-all duration-300">
                  <span style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
                    Ler artigo
                  </span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-16 md:py-24 bg-[#F8FAF7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h3
                  className="text-2xl mb-8 text-[#2D4A2D]"
                  style={{ fontFamily: 'var(--font-headline)' }}
                >
                  Últimos Artigos
                </h3>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {articles.map((article, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <motion.div
                      className="group bg-white rounded-[24px] p-6 shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
                      whileHover={{ y: -4 }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-[#6B8E6B]/10 to-[#8FA88F]/10 flex items-center justify-center flex-shrink-0">
                          <article.icon className="w-6 h-6 text-[#6B8E6B]" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span
                              className="text-xs uppercase tracking-wider text-[#6B8E6B]"
                              style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
                            >
                              {article.category}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-[#8A9A8A]">
                              <Clock className="w-3 h-3" />
                              {article.readTime}
                            </span>
                          </div>
                          <h4
                            className="text-lg text-[#2D4A2D] group-hover:text-[#6B8E6B] transition-colors duration-300"
                            style={{ fontFamily: 'var(--font-headline)' }}
                          >
                            {article.title}
                          </h4>
                        </div>
                      </div>
                      <p
                        className="text-[#5A6F5A] text-sm leading-relaxed"
                        style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
                      >
                        {article.excerpt}
                      </p>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <ScrollReveal delay={0.2}>
                <div className="sticky top-32">
                  <h3
                    className="text-lg mb-6 text-[#2D4A2D]"
                    style={{ fontFamily: 'var(--font-headline)' }}
                  >
                    Categorias
                  </h3>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <motion.button
                        key={category.name}
                        className="w-full flex items-center justify-between p-4 bg-white rounded-[16px] shadow-sm hover:shadow-md transition-all duration-300 group"
                        whileHover={{ x: 4 }}
                      >
                        <span
                          className="text-[#5A6F5A] group-hover:text-[#6B8E6B] transition-colors duration-300"
                          style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}
                        >
                          {category.name}
                        </span>
                        <span
                          className="text-sm text-[#8A9A8A]"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {category.count}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
