import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  navegacao: [
    { label: 'Home', path: '/' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Serviços', path: '/servicos' },
    { label: 'Projetos', path: '/projetos' },
  ],
  recursos: [
    { label: 'Conteúdo', path: '/conteudo' },
    { label: 'Contato', path: '/contato' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:contato@ing3.com.br', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#2D4A2D] via-[#3A5A3A] to-[#4A6A4A] overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-80 h-80 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-2">
            <motion.h2
              className="text-3xl md:text-4xl text-[#F8FAF7] mb-4"
              style={{ fontFamily: 'var(--font-headline)' }}
            >
              InG3
            </motion.h2>
            <p
              className="text-[#F8FAF7]/70 text-lg max-w-md leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
            >
              Onde sua ideia encontra o mundo. Criamos presenças digitais que representam, acolhem e projetam o futuro.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 rounded-full bg-[#F8FAF7]/10 hover:bg-[#F8FAF7]/20 flex items-center justify-center text-[#F8FAF7] transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3
              className="text-sm uppercase tracking-wider text-[#F8FAF7]/50 mb-6"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
            >
              Navegação
            </h3>
            <ul className="space-y-3">
              {footerLinks.navegacao.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#F8FAF7]/80 hover:text-[#F8FAF7] transition-colors duration-300 inline-flex items-center gap-1 group"
                    style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}
                  >
                    {link.label}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="text-sm uppercase tracking-wider text-[#F8FAF7]/50 mb-6"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
            >
              Recursos
            </h3>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#F8FAF7]/80 hover:text-[#F8FAF7] transition-colors duration-300 inline-flex items-center gap-1 group"
                    style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}
                  >
                    {link.label}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#F8FAF7]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-sm text-[#F8FAF7]/50"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
          >
            © 2026 InG3. Todos os direitos reservados.
          </p>
          <p
            className="text-sm text-[#F8FAF7]/50"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
          >
            Onde sua ideia encontra o mundo
          </p>
        </div>
      </div>
    </footer>
  );
}
