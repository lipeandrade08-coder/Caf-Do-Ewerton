"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      aria-label="Café do Ewerton — Café Especial Artesanal Torra Média 500g"
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* Microdados de produto inline — complementam o JSON-LD */}
      <meta itemProp="name" content="Café do Ewerton — Torra Média 500g" />
      <meta
        itemProp="description"
        content="Café especial artesanal com torra média, selecionado com cuidado para preservar aroma, sabor e equilíbrio em cada xícara."
      />
      <meta itemProp="image" content="https://cafedoewerton.com.br/embalagem-v3.png" />
      <span itemProp="offers" itemScope itemType="https://schema.org/Offer">
        <meta itemProp="price" content="60.00" />
        <meta itemProp="priceCurrency" content="BRL" />
        <meta itemProp="availability" content="https://schema.org/InStock" />
      </span>
      {/* Background Image – CSS ken-burns (GPU compositor-only, zero repaint) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-ken-burns"
        style={{
          backgroundImage: "url('/hero-bg-v2.png')",
          backgroundColor: "var(--color-brand-charcoal)",
        }}
      />

      {/* Overlay layers – rgba sem mix-blend-multiply para não quebrar compositing */}
      <div className="absolute inset-0 bg-[var(--color-brand-charcoal)]/40 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(29,27,26,0.6)_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-charcoal)] via-transparent to-[var(--color-brand-charcoal)]/50 opacity-70 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center mt-16">

        {/* Crown – CSS float (compositor-only) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[var(--color-brand-gold)] text-6xl mb-4 animate-crown-bob"
          style={{ animationDelay: "0.8s" }}
        >
          ♕
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-[var(--color-brand-cream)] mb-6 tracking-wide"
        >
          CAFÉ DO EWERTON
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="textxl md:text-3xl font-medium text-[var(--color-brand-gold)] mb-8"
        >
          Mais que café. Uma experiência em cada xícara.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="max-w-2xl text-[var(--color-brand-beige)] text-base md:text-lg mb-10 leading-relaxed"
        >
          Café selecionado com cuidado, torra média e um equilíbrio pensado para preservar aroma, sabor e personalidade em cada preparo.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="https://wa.me/5512997792964?text=Olá! Vim pelo site do Café do Ewerton e gostaria de saber como faço para pedir o meu café."
            target="_blank"
            className="flex items-center space-x-2 bg-[var(--color-brand-gold)] text-[var(--color-brand-charcoal)] px-8 py-4 rounded-full font-bold text-sm hover:bg-[var(--color-brand-beige)] transition-colors w-full sm:w-auto justify-center"
          >
            <Phone size={18} />
            <span>PEDIR PELO WHATSAPP</span>
          </Link>

          <Link
            href="#nosso-cafe"
            className="flex items-center justify-center px-8 py-4 rounded-full font-bold text-sm border-2 border-[var(--color-brand-gold)] text-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold)]/10 transition-colors w-full sm:w-auto"
          >
            CONHEÇA NOSSO CAFÉ
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 text-[var(--color-brand-beige)]/70 text-sm tracking-widest uppercase"
        >
          Torra Média • 500g
        </motion.div>
      </div>

      {/* Decorative glows – promovidos à GPU layer, sem blur dinâmico */}
      <div
        className="absolute top-0 left-0 w-64 h-64 opacity-20 pointer-events-none gpu-layer"
        style={{ background: "radial-gradient(circle, var(--color-brand-gold) 0%, transparent 70%)", filter: "blur(40px)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 opacity-20 pointer-events-none gpu-layer"
        style={{ background: "radial-gradient(circle, var(--color-brand-gold) 0%, transparent 70%)", filter: "blur(50px)" }}
      />
    </section>
  );
}
