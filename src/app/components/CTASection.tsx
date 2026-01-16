import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-gradient-to-br from-[#8FA88F] via-[#7A9A7A] to-[#6B8E6B] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl mb-8 text-[#F8FAF7] tracking-tight leading-tight"
            style={{ fontFamily: 'var(--font-headline)' }}
          >
            Pronto para entrar<br />no mundo digital?
          </h2>
          
          <p 
            className="text-xl md:text-2xl mb-12 text-[#F8FAF7]/90 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
          >
            Vamos criar juntos uma presença digital que representa sua essência e conecta você às melhores oportunidades.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              className="group inline-flex items-center gap-3 bg-[#F8FAF7] hover:bg-white text-[#2D4A2D] px-10 py-5 rounded-full transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 backdrop-blur-sm"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-5 h-5" />
              <span className="text-lg">Falar com a InG3</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <motion.button
              className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-[#F8FAF7] px-10 py-5 rounded-full border-2 border-white/30 hover:border-white/60 transition-all duration-500 backdrop-blur-md"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-lg">Agendar conversa</span>
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          className="mt-20 pt-12 border-t border-[#F8FAF7]/20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <p 
            className="text-[#F8FAF7]/70 mb-6"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
          >
            InG3 — Onde sua ideia encontra o mundo
          </p>
          <p 
            className="text-sm text-[#F8FAF7]/50"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
          >
            © 2026 InG3. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </section>
  );
}