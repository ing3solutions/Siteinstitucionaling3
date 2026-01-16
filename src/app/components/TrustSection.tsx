import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Quote } from 'lucide-react';
import { OrganicCurve } from '@/app/components/OrganicCurve';

export function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-[#F8FAF7]">
      {/* Top curve */}
      <div className="h-32 md:h-40">
        <OrganicCurve variant="top" topColor="#8FA88F" bottomColor="transparent" />
      </div>

      <div ref={ref} className="py-20 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#6B8E6B] to-[#8FA88F] text-white mb-10">
              <Quote className="w-10 h-10" />
            </div>

            <h2 
              className="text-4xl md:text-5xl lg:text-6xl mb-10 text-[#2D4A2D] leading-tight tracking-tight"
              style={{ fontFamily: 'var(--font-headline)' }}
            >
              Nós acreditamos que entrar na internet não deveria ser frio, confuso ou genérico
            </h2>
            
            <p 
              className="text-xl md:text-2xl text-[#5A6F5A] mb-8 leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
            >
              Deveria ser um momento de <span className="text-[#6B8E6B]" style={{ fontWeight: 500 }}>impacto, clareza e entusiasmo</span>.
            </p>

            <motion.div 
              className="bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl rounded-[32px] p-10 md:p-12 shadow-xl border border-[#E5EDE5]/50"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <p 
                className="text-2xl md:text-3xl lg:text-4xl text-[#2D4A2D] mb-4 leading-tight"
                style={{ fontFamily: 'var(--font-headline)' }}
              >
                "Uau. Agora eu existo<br />de verdade no digital."
              </p>
              <p 
                className="text-base md:text-lg text-[#6B7F6B]"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
              >
                Essa é a sensação que queremos criar
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}