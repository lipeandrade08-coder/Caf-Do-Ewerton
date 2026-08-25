"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const InstagramIcon = ({ size = 16, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

// Using the real images added to the public folder
const posts = Array.from({ length: 12 }, (_, i) => `/gallery-${i + 1}.png`);

export default function InstagramGrid() {
  return (
    <section className="py-24 bg-[var(--color-brand-charcoal)] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl text-[var(--color-brand-cream)] mb-6"
          >
            Acompanhe o Café do Ewerton
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16 max-w-5xl mx-auto">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="aspect-square bg-[var(--color-brand-charcoal)] border border-[var(--color-brand-gold)]/10 rounded-xl overflow-hidden relative group cursor-pointer"
            >
              <Image
                src={post}
                alt={`Café do Ewerton Galeria ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-[var(--color-brand-charcoal)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <InstagramIcon size={32} className="text-[var(--color-brand-gold)]" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="#"
            target="_blank"
            className="inline-flex items-center space-x-2 bg-transparent text-[var(--color-brand-cream)] border border-[var(--color-brand-cream)]/30 px-8 py-3 rounded-full font-bold text-sm hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)] transition-colors duration-300"
          >
            <InstagramIcon size={18} />
            <span>SEGUIR NO INSTAGRAM</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
