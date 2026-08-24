"use client";

import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <section id="historia" className="py-24 bg-[var(--color-brand-charcoal)] border-y border-[var(--color-brand-gold)]/5 relative">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[var(--color-brand-gold)] text-3xl mb-6"
        >
          ♕
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-4xl md:text-5xl text-[var(--color-brand-cream)] mb-6"
        >
          Café do Ewerton
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[var(--color-brand-gold)] text-xl font-medium tracking-wide mb-10"
        >
          Uma marca feita para quem valoriza os pequenos momentos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[var(--color-brand-beige)] font-light leading-relaxed space-y-6 text-lg"
        >
          <p>
            O verdadeiro café especial não é apenas sobre o sabor na xícara, é sobre toda a jornada que os grãos percorrem até chegar a você.
          </p>
          <p>
            Em breve, compartilharemos aqui a história completa de dedicação, tradição e cuidado que deu origem ao Café do Ewerton.
          </p>
        </motion.div>
      </div>

      {/* Botanical Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none" 
           style={{ backgroundImage: "url('/botanical.png')", backgroundSize: "cover" }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5 pointer-events-none rotate-180" 
           style={{ backgroundImage: "url('/botanical.png')", backgroundSize: "cover" }} />
    </section>
  );
}
