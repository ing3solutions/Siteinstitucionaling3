import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import { useInView } from 'motion/react';
import { ArrowUpRight, Filter } from 'lucide-react';
import { PageLayout } from '@/app/components/layout';
import { OrganicCurve } from '@/app/components/OrganicCurve';
import { ScrollReveal } from '@/app/components/ScrollReveal';

const categories = ['Todos', 'Sites', 'Branding', 'Apps', 'Marketing'];

const projects = [
  {
    title: 'EcoVerde',
    category: 'Sites',
    description: 'Plataforma digital para empresa de sustentabilidade com foco em experiência imersiva.',
    tags: ['Website', 'E-commerce', 'Branding'],
    color: 'from-[#6B8E6B] to-[#8FA88F]',
  },
  {
    title: 'NaturaTech',
    category: 'Branding',
    description: 'Identidade visual completa para startup de tecnologia verde.',
    tags: ['Identidade Visual', 'Manual de Marca'],
    color: 'from-[#7A9A7A] to-[#9FB59F]',
  },
  {
    title: 'FlowApp',
    category: 'Apps',
    description: 'Aplicativo mobile para gestão de produtividade pessoal com foco em bem-estar.',
    tags: ['iOS', 'Android', 'UX Design'],
    color: 'from-[#5A7A5A] to-[#7A9A7A]',
  },
  {
    title: 'Orgânica',
    category: 'Sites',
    description: 'E-commerce para marca de produtos orgânicos com integração completa.',
    tags: ['E-commerce', 'SEO', 'Integrações'],
    color: 'from-[#8FA88F] to-[#B5C5B5]',
  },
  {
    title: 'VidaPlena',
    category: 'Marketing',
    description: 'Campanha digital integrada para clínica de saúde integrativa.',
    tags: ['Social Media', 'Ads', 'Conteúdo'],
    color: 'from-[#4A6A4A] to-[#6B8E6B]',
  },
  {
    title: 'TerraFirme',
    category: 'Branding',
    description: 'Rebranding completo para empresa de arquitetura sustentável.',
    tags: ['Branding', 'Website', 'Papelaria'],
    color: 'from-[#3A5A3A] to-[#5A7A5A]',
  },
];

export function Projetos() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProjects = activeCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category === activeCategory);

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
            Nosso Portfólio
          </motion.span>

          <motion.h1
            className="text-5xl md:text-7xl mb-8 text-[#2D4A2D] tracking-tight"
            style={{ fontFamily: 'var(--font-headline)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Projetos que<br />
            <span className="bg-gradient-to-r from-[#6B8E6B] to-[#8FA88F] bg-clip-text text-transparent">
              inspiram
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-[#5A6F5A] max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Cada projeto é uma história única. Conheça algumas das marcas e empresas que confiaram na InG3 para dar vida às suas ideias.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40">
          <OrganicCurve bottomColor="#F8FAF7" topColor="transparent" />
        </div>
      </section>

      <section className="relative py-12 bg-[#F8FAF7]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-br from-[#6B8E6B] to-[#7A9A7A] text-white shadow-lg'
                      : 'bg-white text-[#5A6F5A] hover:bg-[#E8F0E8] border border-[#E8F0E8]'
                  }`}
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-12 pb-24 md:pb-32 bg-[#F8FAF7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.1}>
                <motion.div
                  className="group relative bg-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                  whileHover={{ y: -8 }}
                >
                  <div className={`h-56 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="text-6xl text-white/30"
                        style={{ fontFamily: 'var(--font-headline)' }}
                      >
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-[#2D4A2D]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                        <ArrowUpRight className="w-6 h-6 text-[#2D4A2D]" />
                      </div>
                    </motion.div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="text-xs uppercase tracking-wider text-[#6B8E6B]"
                        style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
                      >
                        {project.category}
                      </span>
                    </div>

                    <h3
                      className="text-2xl mb-3 text-[#2D4A2D]"
                      style={{ fontFamily: 'var(--font-headline)' }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="text-[#5A6F5A] mb-4 leading-relaxed"
                      style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
                    >
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-[#E8F0E8] text-[#5A6F5A] rounded-full"
                          style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
