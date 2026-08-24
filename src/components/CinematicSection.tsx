"use client";

import { motion } from "framer-motion";

export default function CinematicSection() {
  return (
    <section className="relative py-48 md:py-64 flex items-center justify-center overflow-hidden bg-[var(--color-brand-charcoal)]">
      
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/cinematic-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark Overlay & Vignettes */}
      <div className="absolute inset-0 z-0">
        {/* Base dark blend */}
        <div className="absolute inset-0 bg-[var(--color-brand-charcoal)]/60 mix-blend-multiply" />
        
        {/* Efeito Vinheta forte nas bordas para ocultar marca d'água */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[var(--color-brand-charcoal)]/50 to-[var(--color-brand-charcoal)]/100" />
        
        {/* Gradiente adicional forte no canto inferior direito específico para a marca d'água */}
        <div className="absolute -bottom-10 -right-10 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-brand-charcoal)] via-[var(--color-brand-charcoal)]/80 to-transparent blur-3xl opacity-100" />
        
        {/* Top/Bottom Fade out for smooth transition with other sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-brand-charcoal)] via-transparent to-[var(--color-brand-charcoal)] opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h2 className="font-serif text-4xl md:text-6xl text-[var(--color-brand-cream)] mb-6 leading-tight drop-shadow-2xl">
            O seu momento merece um bom café.
          </h2>
          <p className="text-[var(--color-brand-gold)] text-lg md:text-xl font-light tracking-wide drop-shadow-md">
            Transforme uma pausa comum em uma experiência especial.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
