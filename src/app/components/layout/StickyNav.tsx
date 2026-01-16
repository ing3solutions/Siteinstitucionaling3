import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, MessageCircle } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Início', scrollTo: 'content-start' },
  { path: '/sobre', label: 'Sobre' },
  { path: '/servicos', label: 'Serviços' },
  { path: '/projetos', label: 'Projetos' },
  { path: '/conteudo', label: 'Conteúdo' },
  { path: '/contato', label: 'Contato' },
];

interface StickyNavProps {
  showAfterScroll?: number;
}

export function StickyNav({ showAfterScroll = 600 }: StickyNavProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        setIsVisible(window.scrollY > showAfterScroll);
      } else {
        setIsVisible(true);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfterScroll, isHomePage]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleNavClick = (link: typeof navLinks[0], e: React.MouseEvent) => {
    if (isHomePage && link.scrollTo) {
      e.preventDefault();
      const element = document.getElementById(link.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const glassStyle = {
    background: 'rgba(248, 250, 247, 0.75)',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    boxShadow: '0 8px 32px rgba(45, 74, 45, 0.1)',
  };

  const iconGlassStyle = {
    background: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.4)',
  };

  const iconGlassHoverStyle = {
    background: 'rgba(255, 255, 255, 0.7)',
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.header
            className="fixed top-0 left-0 right-0 z-50"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="max-w-7xl mx-auto px-4 py-3">
              <nav 
                className="flex items-center justify-between px-6 py-3 rounded-full"
                style={glassStyle}
              >
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                  <motion.span
                    className="text-xl md:text-2xl text-[#2D4A2D] tracking-tight"
                    style={{ fontFamily: 'var(--font-headline)' }}
                    whileHover={{ scale: 1.02 }}
                  >
                    InG3
                  </motion.span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={(e) => handleNavClick(link, e)}
                      className={`relative text-sm transition-colors duration-300 ${
                        location.pathname === link.path
                          ? 'text-[#6B8E6B]'
                          : 'text-[#5A6F5A] hover:text-[#6B8E6B]'
                      }`}
                      style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                    >
                      {link.label}
                      {location.pathname === link.path && (
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6B8E6B] to-[#8FA88F] rounded-full"
                          layoutId="activeStickyNav"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  ))}
                </div>

                {/* Social Icons & CTA */}
                <div className="hidden md:flex items-center gap-3">
                  {/* Instagram */}
                  <motion.a
                    href="https://instagram.com/ing3.digital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full transition-all duration-300"
                    style={iconGlassStyle}
                    whileHover={{ scale: 1.05, ...iconGlassHoverStyle }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Instagram className="w-4 h-4 text-[#5A6F5A]" />
                  </motion.a>

                  {/* WhatsApp */}
                  <motion.a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full transition-all duration-300"
                    style={iconGlassStyle}
                    whileHover={{ scale: 1.05, ...iconGlassHoverStyle }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle className="w-4 h-4 text-[#5A6F5A]" />
                  </motion.a>

                  {/* CTA Button */}
                  <Link to="/contato">
                    <motion.button
                      className="bg-gradient-to-br from-[#6B8E6B] to-[#7A9A7A] hover:from-[#5A7A5A] hover:to-[#6B8E6B] text-white px-5 py-2 text-sm rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                      style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Começar
                    </motion.button>
                  </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden p-2 text-[#2D4A2D]"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </nav>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && isVisible && (
          <motion.div
            className="fixed inset-0 z-40 pt-24"
            style={{
              background: 'rgba(248, 250, 247, 0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    to={link.path}
                    onClick={(e) => handleNavClick(link, e)}
                    className={`text-2xl ${
                      location.pathname === link.path
                        ? 'text-[#6B8E6B]'
                        : 'text-[#2D4A2D]'
                    }`}
                    style={{ fontFamily: 'var(--font-headline)' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              {/* Social icons in mobile */}
              <motion.div
                className="flex items-center gap-4 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href="https://instagram.com/ing3.digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full"
                  style={iconGlassStyle}
                >
                  <Instagram className="w-5 h-5 text-[#5A6F5A]" />
                </a>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full"
                  style={iconGlassStyle}
                >
                  <MessageCircle className="w-5 h-5 text-[#5A6F5A]" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-4"
              >
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-2 bg-gradient-to-br from-[#6B8E6B] to-[#7A9A7A] text-white px-8 py-3 rounded-full"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                >
                  Começar
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
