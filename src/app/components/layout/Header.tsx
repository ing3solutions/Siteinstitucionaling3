import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/sobre', label: 'Sobre' },
  { path: '/servicos', label: 'Serviços' },
  { path: '/projetos', label: 'Projetos' },
  { path: '/conteudo', label: 'Conteúdo' },
  { path: '/contato', label: 'Contato' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F8FAF7]/95 backdrop-blur-xl shadow-lg'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <motion.span
              className={`text-2xl md:text-3xl tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-[#2D4A2D]' : 'text-[#2D4A2D]'
              }`}
              style={{ fontFamily: 'var(--font-headline)' }}
              whileHover={{ scale: 1.02 }}
            >
              InG3
            </motion.span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-base transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-[#6B8E6B]'
                    : isScrolled
                    ? 'text-[#5A6F5A] hover:text-[#6B8E6B]'
                    : 'text-[#5A6F5A] hover:text-[#6B8E6B]'
                }`}
                style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6B8E6B] to-[#8FA88F] rounded-full"
                    layoutId="activeNav"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <motion.button
            className="hidden md:inline-flex items-center gap-2 bg-gradient-to-br from-[#6B8E6B] to-[#7A9A7A] hover:from-[#5A7A5A] hover:to-[#6B8E6B] text-white px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link to="/contato">Começar</Link>
          </motion.button>

          <button
            className="md:hidden p-2 text-[#2D4A2D]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#F8FAF7] pt-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
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
