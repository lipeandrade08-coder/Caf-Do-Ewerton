"use client";

import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <section
      id="historia"
      className="py-24 bg-[var(--color-brand-charcoal)] border-y border-[var(--color-brand-gold)]/5 relative"
      aria-labelledby="historia-heading"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
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
          id="historia-heading"
          itemProp="name"
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

      {/* Botanical Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none" 
           style={{ backgroundImage: "url('/botanical.png')", backgroundSize: "cover" }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5 pointer-events-none rotate-180" 
           style={{ backgroundImage: "url('/botanical.png')", backgroundSize: "cover" }} />
    </section>
  );
}
