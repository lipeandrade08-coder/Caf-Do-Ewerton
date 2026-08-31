"use client";

import { motion } from "framer-motion";

export default function CinematicSection() {
  return (
    <section className="relative py-48 md:py-64 flex items-center justify-center overflow-hidden bg-[var(--color-brand-charcoal)]">

      {/* Video Background – preload="none" evita download desnecessário antes de ser visível */}
      <div className="absolute inset-0 w-full h-full gpu-layer">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="w-full h-full object-cover"
        >
          <source src="/cinematic-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay layers – sem mix-blend-multiply para não quebrar compositing do browser */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[var(--color-brand-charcoal)]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(29,27,26,0.9)_100%)]" />
        <div className="absolute -bottom-10 -right-10 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(29,27,26,1)_0%,_rgba(29,27,26,0.8)_40%,_transparent_70%)]" />
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
