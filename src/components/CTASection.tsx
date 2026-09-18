"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section id="contato" className="relative py-32 flex items-center justify-center overflow-hidden">
      {/* Background with dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/cta-bg.jpg')",
          backgroundColor: "var(--color-brand-charcoal)"
        }}
      >
        <div className="absolute inset-0 bg-[#121110]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[var(--color-brand-gold)] text-5xl mb-8"
        >
          ♕
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-5xl md:text-6xl text-[var(--color-brand-cream)] mb-6 leading-tight max-w-3xl"
        >
          Seu próximo café começa aqui.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[var(--color-brand-beige)] text-lg md:text-xl mb-12 font-light max-w-2xl"
        >
          Experimente a verdadeira essência de um café especial. Fale diretamente conosco, tire suas dúvidas e faça seu pedido.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col items-center mb-10"
        >
          <p className="text-[var(--color-brand-beige)] text-sm uppercase tracking-widest mb-2 font-light">
            Valor do pacote
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-[var(--color-brand-gold)] font-serif text-2xl">R$</span>
            <span className="text-[var(--color-brand-cream)] font-serif text-7xl md:text-8xl leading-none">60</span>
            <span className="text-[var(--color-brand-gold)] font-serif text-2xl self-start mt-3">,00</span>
          </div>
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-transparent via-[var(--color-brand-gold)] to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Link
            href="https://wa.me/5512997792964?text=Olá! Vim pelo site do Café do Ewerton e gostaria de saber como faço para pedir o meu café."
            target="_blank"
            className="flex items-center space-x-3 bg-[var(--color-brand-gold)] text-[var(--color-brand-charcoal)] px-10 py-4 rounded-full font-bold text-sm md:text-base hover:bg-[var(--color-brand-beige)] transition-all shadow-xl hover:shadow-[0_0_30px_rgba(200,169,106,0.3)] hover:-translate-y-1 transform duration-300 w-full sm:w-auto justify-center"
          >
            <Phone size={20} />
            <span>PEDIR PELO WHATSAPP</span>
          </Link>
          
          <Link
            href="https://www.instagram.com/cafedoewerton/"
            className="flex items-center space-x-3 bg-transparent border border-[var(--color-brand-gold)]/50 text-[var(--color-brand-cream)] px-10 py-4 rounded-full font-bold text-sm md:text-base hover:bg-[var(--color-brand-gold)]/10 hover:border-[var(--color-brand-gold)] transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <span>CONHECER NOSSO INSTAGRAM</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
