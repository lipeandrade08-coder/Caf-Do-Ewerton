"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    // { passive: true } tells the browser this handler won't call preventDefault()
    // allowing the browser to scroll without waiting for JS — critical for 60fps scroll
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Nosso Café", href: "#nosso-cafe" },
    { name: "Qualidade", href: "#qualidade" },
    { name: "História", href: "#historia" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[var(--color-brand-charcoal)]/90 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center space-x-2 group">
          <span className="text-[var(--color-brand-gold)] font-serif text-2xl group-hover:scale-105 transition-transform">
            ♕
          </span>
          <span className="font-serif text-xl tracking-widest text-[var(--color-brand-cream)]">
            CAFÉ DO EWERTON
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[var(--color-brand-cream)] hover:text-[var(--color-brand-gold)] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:block">
          <Link
            href="https://wa.me/5512997792964?text=Olá! Vim pelo site do Café do Ewerton e gostaria de saber como faço para pedir o meu café."
            target="_blank"
            className="flex items-center space-x-2 bg-[var(--color-brand-gold)] text-[var(--color-brand-charcoal)] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[var(--color-brand-beige)] transition-colors"
          >
            <Phone size={16} />
            <span>PEDIR PELO WHATSAPP</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[var(--color-brand-gold)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-[var(--color-brand-charcoal)] shadow-xl md:hidden border-t border-[var(--color-brand-gold)]/20"
        >
          <div className="flex flex-col items-center py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[var(--color-brand-cream)] text-lg hover:text-[var(--color-brand-gold)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://wa.me/5512997792964?text=Olá! Vim pelo site do Café do Ewerton e gostaria de saber como faço para pedir o meu café."
              target="_blank"
              className="flex items-center space-x-2 bg-[var(--color-brand-gold)] text-[var(--color-brand-charcoal)] px-8 py-3 rounded-full font-bold text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone size={16} />
              <span>PEDIR PELO WHATSAPP</span>
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
