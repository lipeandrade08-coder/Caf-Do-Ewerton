"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Coffee } from "lucide-react";

export default function AboutCoffee() {
  return (
    <section
      id="nosso-cafe"
      className="py-24 bg-[var(--color-brand-charcoal)] relative overflow-hidden"
      aria-labelledby="nosso-cafe-heading"
      itemScope
      itemType="https://schema.org/Product"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center relative"
          >
            {/* Subtle glow behind the product */}
            <motion.div 
              animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-96 bg-[var(--color-brand-gold)] blur-[80px] rounded-full pointer-events-none" 
            />
            
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden bg-[var(--color-brand-charcoal)] border border-[var(--color-brand-gold)]/10 shadow-2xl"
            >
              <Image
                src="/sem fundo.png"
                alt="Embalagem do Café do Ewerton — Café Especial Artesanal Torra Média 500g — Vista Frontal"
                fill
                className="object-cover object-center"
                itemProp="image"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col items-start"
          >
            <h2
              id="nosso-cafe-heading"
              className="font-serif text-4xl md:text-5xl text-[var(--color-brand-cream)] mb-6"
              itemProp="name"
            >
              Café do Ewerton — Torra Média 500g
            </h2>
            <p className="font-serif text-xl text-[var(--color-brand-gold)] mb-2 tracking-wide">
              Um café feito para ser apreciado.
            </p>
            
            <p
              className="text-[var(--color-brand-beige)] text-lg mb-10 leading-relaxed font-light"
              itemProp="description"
            >
              O Café do Ewerton busca entregar uma experiência equilibrada, aromática e marcante.
              Cada grão é selecionado para proporcionar momentos de apreciação únicos,
              preservando a tradição de um café verdadeiramente especial.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-12 w-full max-w-md">
              <div className="border-l-2 border-[var(--color-brand-gold)] pl-4">
                <span className="block text-[var(--color-brand-gold)] text-xs font-bold tracking-widest uppercase mb-1">Torra</span>
                <span className="block text-[var(--color-brand-cream)] text-lg">Média</span>
              </div>
              <div className="border-l-2 border-[var(--color-brand-gold)] pl-4">
                <span className="block text-[var(--color-brand-gold)] text-xs font-bold tracking-widest uppercase mb-1">Peso</span>
                <span className="block text-[var(--color-brand-cream)] text-lg">500g</span>
              </div>
              <div className="border-l-2 border-[var(--color-brand-gold)] pl-4">
                <span className="block text-[var(--color-brand-gold)] text-xs font-bold tracking-widest uppercase mb-1">Perfil</span>
                <span className="block text-[var(--color-brand-cream)] text-lg">Equilibrado</span>
              </div>
              <div className="border-l-2 border-[var(--color-brand-gold)] pl-4">
                <span className="block text-[var(--color-brand-gold)] text-xs font-bold tracking-widest uppercase mb-1">Experiência</span>
                <span className="block text-[var(--color-brand-cream)] text-lg">Aromática</span>
              </div>
            </div>

            <Link
              href="https://wa.me/5512997792964?text=Olá! Vim pelo site do Café do Ewerton e gostaria de saber como faço para pedir o meu café."
              target="_blank"
              className="flex items-center space-x-2 bg-transparent text-[var(--color-brand-gold)] border border-[var(--color-brand-gold)] px-8 py-3 rounded-full font-bold text-sm hover:bg-[var(--color-brand-gold)] hover:text-[var(--color-brand-charcoal)] transition-all duration-300"
            >
              <Coffee size={18} />
              <span>QUERO EXPERIMENTAR</span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
