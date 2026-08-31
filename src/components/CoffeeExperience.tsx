"use client";

import { motion } from "framer-motion";
import { Wind, Scale, Flame, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Wind size={32} className="text-[var(--color-brand-gold)]" />,
    title: "Aroma",
    description: "Uma experiência que começa antes do primeiro gole.",
  },
  {
    icon: <Scale size={32} className="text-[var(--color-brand-gold)]" />,
    title: "Equilíbrio",
    description: "Torra média pensada para proporcionar uma bebida equilibrada.",
  },
  {
    icon: <Flame size={32} className="text-[var(--color-brand-gold)]" />,
    title: "Sabor",
    description: "Personalidade presente em cada xícara.",
  },
  {
    icon: <ShieldCheck size={32} className="text-[var(--color-brand-gold)]" />,
    title: "Qualidade",
    description: "Cuidado desde a seleção até o momento do preparo.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function CoffeeExperience() {
  return (
    <section id="qualidade" className="py-24 bg-[var(--color-brand-charcoal)] border-t border-[var(--color-brand-gold)]/5 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[var(--color-brand-gold)] mb-4 inline-block"
          >
            ♕
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl text-[var(--color-brand-cream)]"
          >
            Cada detalhe importa.
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center group"
            >
              {/* CSS float animation – replaces infinite framer-motion y:[0,-10,0] */}
              <div
                className="w-20 h-20 rounded-full border border-[var(--color-brand-gold)]/20 flex items-center justify-center mb-6 bg-[var(--color-brand-charcoal)] group-hover:border-[var(--color-brand-gold)] transition-colors duration-500 shadow-[0_0_15px_rgba(200,169,106,0.05)] group-hover:shadow-[0_0_20px_rgba(200,169,106,0.15)] animate-float-subtle"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                {feature.icon}
              </div>
              <h3 className="font-serif text-2xl text-[var(--color-brand-cream)] mb-3">
                {feature.title}
              </h3>
              <p className="text-[var(--color-brand-beige)] font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
