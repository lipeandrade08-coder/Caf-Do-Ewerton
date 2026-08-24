"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#121110] py-16 border-t border-[var(--color-brand-gold)]/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          
          {/* Logo & Brand */}
          <div className="mb-8 flex flex-col items-center">
            <span className="text-[var(--color-brand-gold)] text-3xl mb-3">♕</span>
            <span className="font-serif text-2xl tracking-widest text-[var(--color-brand-cream)] mb-2">
              CAFÉ DO EWERTON
            </span>
            <span className="text-[var(--color-brand-beige)] text-sm tracking-widest uppercase">
              Tradição • Qualidade • Excelência
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
            <Link href="#" className="text-[var(--color-brand-beige)] hover:text-[var(--color-brand-gold)] text-sm transition-colors">
              Início
            </Link>
            <Link href="#nosso-cafe" className="text-[var(--color-brand-beige)] hover:text-[var(--color-brand-gold)] text-sm transition-colors">
              Nosso Café
            </Link>
            <Link href="#qualidade" className="text-[var(--color-brand-beige)] hover:text-[var(--color-brand-gold)] text-sm transition-colors">
              Qualidade
            </Link>
            <Link href="#" className="text-[var(--color-brand-beige)] hover:text-[var(--color-brand-gold)] text-sm transition-colors flex items-center space-x-1">
              <InstagramIcon size={16} />
              <span>Instagram</span>
            </Link>
            <Link href="https://wa.me/5500000000000" className="text-[var(--color-brand-beige)] hover:text-[var(--color-brand-gold)] text-sm transition-colors flex items-center space-x-1">
              <Phone size={16} />
              <span>WhatsApp</span>
            </Link>
          </div>

          {/* Copyright */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-brand-gold)]/20 to-transparent mb-8" />
          
          <div className="flex flex-col md:flex-row items-center justify-between w-full text-xs text-[var(--color-brand-beige)]/50">
            <p>© {new Date().getFullYear()} Café do Ewerton. Todos os direitos reservados.</p>
            <p className="mt-4 md:mt-0 opacity-50 hover:opacity-100 transition-opacity">
              Desenvolvido por 2Type
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
