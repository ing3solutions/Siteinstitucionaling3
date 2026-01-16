import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import { useInView } from 'motion/react';
import { Mail, Phone, MapPin, Send, ArrowRight, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { PageLayout } from '@/app/components/layout';
import { OrganicCurve } from '@/app/components/OrganicCurve';
import { ScrollReveal } from '@/app/components/ScrollReveal';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'contato@ing3.com.br',
    link: 'mailto:contato@ing3.com.br',
  },
  {
    icon: Phone,
    title: 'Telefone',
    value: '+55 (11) 99999-9999',
    link: 'tel:+5511999999999',
  },
  {
    icon: MapPin,
    title: 'Localização',
    value: 'São Paulo, Brasil',
    link: '#',
  },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: MessageCircle, href: '#', label: 'WhatsApp' },
];

export function Contato() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <PageLayout>
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-16">
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.span
            className="inline-block text-sm uppercase tracking-widest text-[#6B8E6B] mb-6"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Contato
          </motion.span>

          <motion.h1
            className="text-5xl md:text-7xl mb-8 text-[#2D4A2D] tracking-tight"
            style={{ fontFamily: 'var(--font-headline)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Vamos<br />
            <span className="bg-gradient-to-r from-[#6B8E6B] to-[#8FA88F] bg-clip-text text-transparent">
              conversar
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-[#5A6F5A] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Tem um projeto em mente? Queremos ouvir suas ideias e ajudar a transformá-las em realidade.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40">
          <OrganicCurve bottomColor="#F8FAF7" topColor="transparent" />
        </div>
      </section>

      <section className="relative py-16 md:py-24 bg-[#F8FAF7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div>
                <h2
                  className="text-3xl md:text-4xl mb-8 text-[#2D4A2D]"
                  style={{ fontFamily: 'var(--font-headline)' }}
                >
                  Entre em contato
                </h2>

                <div className="space-y-6 mb-12">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      className="flex items-center gap-4 p-4 bg-white rounded-[20px] shadow-md hover:shadow-lg transition-all duration-300 group"
                      whileHover={{ x: 4 }}
                    >
                      <div className="w-14 h-14 rounded-[16px] bg-gradient-to-br from-[#6B8E6B] to-[#8FA88F] flex items-center justify-center text-white shadow-lg">
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p
                          className="text-sm text-[#8A9A8A] mb-1"
                          style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}
                        >
                          {info.title}
                        </p>
                        <p
                          className="text-lg text-[#2D4A2D] group-hover:text-[#6B8E6B] transition-colors duration-300"
                          style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                        >
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div>
                  <p
                    className="text-sm text-[#8A9A8A] mb-4"
                    style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}
                  >
                    Siga-nos nas redes
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6B8E6B] to-[#8FA88F] flex items-center justify-center text-white shadow-md hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-xl">
                <h3
                  className="text-2xl mb-6 text-[#2D4A2D]"
                  style={{ fontFamily: 'var(--font-headline)' }}
                >
                  Envie uma mensagem
                </h3>

                {isSubmitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#6B8E6B] to-[#8FA88F] flex items-center justify-center">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <h4
                      className="text-2xl mb-2 text-[#2D4A2D]"
                      style={{ fontFamily: 'var(--font-headline)' }}
                    >
                      Mensagem enviada!
                    </h4>
                    <p
                      className="text-[#5A6F5A]"
                      style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
                    >
                      Entraremos em contato em breve.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        className="block text-sm text-[#5A6F5A] mb-2"
                        style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                      >
                        Nome *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-[#F8FAF7] border border-[#E8F0E8] rounded-[16px] text-[#2D4A2D] placeholder-[#8A9A8A] focus:outline-none focus:border-[#6B8E6B] focus:ring-2 focus:ring-[#6B8E6B]/20 transition-all duration-300"
                        style={{ fontFamily: 'var(--font-body)' }}
                        placeholder="Seu nome"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-sm text-[#5A6F5A] mb-2"
                        style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-[#F8FAF7] border border-[#E8F0E8] rounded-[16px] text-[#2D4A2D] placeholder-[#8A9A8A] focus:outline-none focus:border-[#6B8E6B] focus:ring-2 focus:ring-[#6B8E6B]/20 transition-all duration-300"
                        style={{ fontFamily: 'var(--font-body)' }}
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-sm text-[#5A6F5A] mb-2"
                        style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                      >
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-[#F8FAF7] border border-[#E8F0E8] rounded-[16px] text-[#2D4A2D] placeholder-[#8A9A8A] focus:outline-none focus:border-[#6B8E6B] focus:ring-2 focus:ring-[#6B8E6B]/20 transition-all duration-300"
                        style={{ fontFamily: 'var(--font-body)' }}
                        placeholder="Sua empresa"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-sm text-[#5A6F5A] mb-2"
                        style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                      >
                        Mensagem *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-5 py-4 bg-[#F8FAF7] border border-[#E8F0E8] rounded-[16px] text-[#2D4A2D] placeholder-[#8A9A8A] focus:outline-none focus:border-[#6B8E6B] focus:ring-2 focus:ring-[#6B8E6B]/20 transition-all duration-300 resize-none"
                        style={{ fontFamily: 'var(--font-body)' }}
                        placeholder="Conte-nos sobre seu projeto..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-br from-[#6B8E6B] to-[#7A9A7A] hover:from-[#5A7A5A] hover:to-[#6B8E6B] text-white px-8 py-5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70"
                      style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      {isSubmitting ? (
                        <span>Enviando...</span>
                      ) : (
                        <>
                          <span className="text-lg">Enviar mensagem</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
