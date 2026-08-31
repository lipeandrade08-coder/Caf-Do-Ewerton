"use client";

import { motion } from "framer-motion";
import { Thermometer, Clock, CheckCircle } from "lucide-react";

export default function RoastSection() {
  return (
    <section className="relative py-32 flex items-center justify-center overflow-hidden border-t border-[var(--color-brand-gold)]/10">
      {/* Background – bg-fixed REMOVIDO (causa repaint na página inteira a cada scroll pixel) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/roast-bg.png')",
          backgroundColor: "var(--color-brand-charcoal)",
        }}
      >
        <div className="absolute inset-0 bg-[var(--color-brand-charcoal)]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-charcoal)] via-transparent to-[var(--color-brand-charcoal)] opacity-90" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl text-[var(--color-brand-cream)] mb-6"
          >
            O equilíbrio da torra média.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--color-brand-beige)] font-light text-lg max-w-2xl mx-auto leading-relaxed"
          >
            A torra média foi cuidadosamente escolhida para extrair o melhor dos grãos.
            Ela preserva as características naturais do café, equilibrando corpo, doçura,
            aroma e intensidade em uma bebida perfeita para o dia a dia.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center text-center p-8 bg-[var(--color-brand-charcoal)]/60 backdrop-blur-md rounded-2xl border border-[var(--color-brand-gold)]/10 hover:border-[var(--color-brand-gold)]/30 transition-colors"
          >
            {/* CSS float animation – replaces infinite framer-motion y:[0,-10,0] */}
            <div
              className="w-16 h-16 rounded-full border border-[var(--color-brand-gold)]/30 flex items-center justify-center mb-6 text-[var(--color-brand-gold)] animate-float-subtle"
            >
              <Thermometer size={24} />
            </div>
            <h3 className="text-[var(--color-brand-cream)] font-serif text-xl mb-3">Temperatura Ideal</h3>
            <p className="text-[var(--color-brand-beige)] text-sm font-light leading-relaxed">
              Os grãos são submetidos a uma temperatura rigorosamente controlada para realçar os açúcares naturais sem queimar.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center text-center p-8 bg-[var(--color-brand-charcoal)]/60 backdrop-blur-md rounded-2xl border border-[var(--color-brand-gold)]/20 shadow-[0_0_20px_rgba(200,169,106,0.1)] hover:border-[var(--color-brand-gold)]/40 transition-colors"
          >
            <div
              className="w-16 h-16 rounded-full border border-[var(--color-brand-gold)] flex items-center justify-center mb-6 text-[var(--color-brand-gold)] bg-[var(--color-brand-gold)]/10 animate-float-subtle"
              style={{ animationDelay: "0.5s" }}
            >
              <Clock size={24} />
            </div>
            <h3 className="text-[var(--color-brand-gold)] font-serif text-xl mb-3">Tempo Exato</h3>
            <p className="text-[var(--color-brand-beige)] text-sm font-light leading-relaxed">
              O processo é interrompido no momento exato em que os óleos essenciais atingem o ponto perfeito de maturação.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col items-center text-center p-8 bg-[var(--color-brand-charcoal)]/60 backdrop-blur-md rounded-2xl border border-[var(--color-brand-gold)]/10 hover:border-[var(--color-brand-gold)]/30 transition-colors"
          >
            <div
              className="w-16 h-16 rounded-full border border-[var(--color-brand-gold)]/30 flex items-center justify-center mb-6 text-[var(--color-brand-gold)] animate-float-subtle"
              style={{ animationDelay: "1s" }}
            >
              <CheckCircle size={24} />
            </div>
            <h3 className="text-[var(--color-brand-cream)] font-serif text-xl mb-3">Ponto de Equilíbrio</h3>
            <p className="text-[var(--color-brand-beige)] text-sm font-light leading-relaxed">
              O resultado é uma bebida limpa, marcante, com doçura evidente e acidez na medida certa para uma experiência superior.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
