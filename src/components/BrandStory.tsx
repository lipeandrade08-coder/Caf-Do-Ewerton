"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function BrandStory() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isReady, setIsReady] = useState(false);
  const rafRef = useRef<number | null>(null);
  const lastScrollY = useRef(-1);

  // Wait for video metadata before enabling scroll scrub
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoaded = () => {
      video.pause();
      video.currentTime = 0;
      setIsReady(true);
    };

    if (video.readyState >= 1) {
      onLoaded();
    } else {
      video.addEventListener("loadedmetadata", onLoaded);
      return () => video.removeEventListener("loadedmetadata", onLoaded);
    }
  }, []);

  // rAF-throttled scroll scrub — never blocks the main thread at 60fps
  useEffect(() => {
    if (!isReady) return;

    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const updateFrame = () => {
      const currentScrollY = window.scrollY;
      // Skip if scroll hasn't changed (saves GPU decode calls)
      if (currentScrollY === lastScrollY.current) return;
      lastScrollY.current = currentScrollY;

      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;
      const progress = Math.max(
        0,
        Math.min(1, (windowH - rect.top) / (section.offsetHeight + windowH))
      );

      try {
        video.currentTime = progress * video.duration;
      } catch {
        // ignore seek errors during rapid scroll
      }
    };

    const onScroll = () => {
      if (rafRef.current !== null) return; // already scheduled
      rafRef.current = requestAnimationFrame(() => {
        updateFrame();
        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateFrame(); // set initial frame

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [isReady]);

  return (
    <section
      ref={sectionRef}
      id="historia"
      className="py-24 bg-[var(--color-brand-charcoal)] border-y border-[var(--color-brand-gold)]/5 relative overflow-hidden"
      aria-labelledby="historia-heading"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      {/* Background Video — scroll-driven via rAF, never autoplays */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-15 gpu-layer"
        src="/Coffee_plantation_at_sunrise_1080p_20260912125658.mp4"
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[var(--color-brand-charcoal)]/90 via-[var(--color-brand-charcoal)]/60 to-[var(--color-brand-charcoal)]/90 pointer-events-none" />

      <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
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
          id="historia-heading"
          itemProp="name"
        >
          Nossa História
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[var(--color-brand-gold)] text-xl font-medium tracking-wide mb-10"
        >
          Tradição, altitude e altíssima qualidade em cada grão.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[var(--color-brand-beige)] font-light leading-relaxed space-y-6 text-lg text-justify md:text-center"
          itemProp="description"
        >
          <p>
            O <strong>Café do Ewerton</strong> nasce no coração de <strong>Carmo de Minas</strong>, encravado nas montanhas da lendária Serra da Mantiqueira. Cultivado a uma altitude privilegiada de aproximadamente 1.200 metros do nível do mar, nosso café se beneficia de um <em>terroir</em> mundialmente reconhecido por abrigar os melhores produtores de café do planeta. As condições climáticas perfeitas e o solo rico conferem aos nossos grãos uma identidade única.
          </p>
          <p>
            Nossa dedicação à excelência é comprovada na xícara: um café de altíssima qualidade que atinge a impressionante <strong>pontuação de 86 pontos</strong>. Trata-se de uma bebida de alto padrão, que se destaca por suas notas adocicadas naturais e marcantes, classificando-o como um autêntico Café Especial de excelência.
          </p>
          <p>
            Esse resultado não é obra do acaso. Ele é fruto do trabalho meticuloso de cafeicultores apaixonados, totalmente focados na monocultura do café. Cada etapa importa: desde a colheita, que seleciona criteriosamente apenas os melhores frutos no cafezal, até o cumprimento irrestrito das mais rigorosas especificações dos órgãos responsáveis pela cafeicultura. É com esse rigor e respeito à terra que o Café do Ewerton sai de nossas montanhas para conquistar exigentes paladares em todos os estados do país.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
