"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section id="contato" className="relative py-32 flex items-center justify-center overflow-hidden">
      {/* Background with dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/cta-bg.jpg')", // Placeholder - needs actual image
          backgroundColor: "var(--color-brand-charcoal)"
        }}
      >
        <div className="absolute inset-0 bg-[var(--color-brand-charcoal)]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-charcoal)] via-transparent to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[var(--color-brand-gold)] text-4xl mb-6"
        >
          ♕
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-4xl md:text-5xl text-[var(--color-brand-cream)] mb-6 leading-tight"
        >
          Seu próximo café começa aqui.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[var(--color-brand-beige)] text-lg mb-10 font-light"
        >
          Fale diretamente com o Café do Ewerton e saiba como pedir o seu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href="https://wa.me/5500000000000?text=Olá! Vim pelo site do Café do Ewerton e gostaria de saber como faço para pedir o meu café."
            target="_blank"
            className="flex items-center space-x-3 bg-[var(--color-brand-gold)] text-[var(--color-brand-charcoal)] px-10 py-5 rounded-full font-bold text-base hover:bg-[var(--color-brand-beige)] transition-colors shadow-xl hover:shadow-2xl hover:-translate-y-1 transform duration-300"
          >
            <Phone size={24} />
            <span>PEDIR PELO WHATSAPP</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
