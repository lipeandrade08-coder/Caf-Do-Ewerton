"use client";

import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#121110] pt-20 pb-10 border-t border-[var(--color-brand-gold)]/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Logo & Brand */}
          <div className="md:col-span-1 flex flex-col items-start">
            <span className="text-[var(--color-brand-gold)] text-4xl mb-4">♕</span>
            <span className="font-serif text-xl tracking-widest text-[var(--color-brand-cream)] mb-2">
              CAFÉ DO EWERTON
            </span>
            <span className="text-[var(--color-brand-beige)] text-xs tracking-widest uppercase mb-6">
              Tradição • Qualidade • Excelência
            </span>
            <p className="text-[var(--color-brand-beige)]/70 text-sm font-light leading-relaxed">
              Elevando o padrão do café especial no Brasil. Uma experiência única em cada xícara.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-1 flex flex-col">
            <h4 className="text-[var(--color-brand-gold)] text-sm font-bold tracking-widest uppercase mb-6">Navegação</h4>
            <div className="flex flex-col space-y-4">
              <Link href="#" className="text-[var(--color-brand-beige)] hover:text-[var(--color-brand-cream)] hover:translate-x-1 text-sm transition-all">
                Início
              </Link>
              <Link href="#nosso-cafe" className="text-[var(--color-brand-beige)] hover:text-[var(--color-brand-cream)] hover:translate-x-1 text-sm transition-all">
                Nosso Café
              </Link>
              <Link href="#historia" className="text-[var(--color-brand-beige)] hover:text-[var(--color-brand-cream)] hover:translate-x-1 text-sm transition-all">
                Nossa História
              </Link>
              <Link href="#qualidade" className="text-[var(--color-brand-beige)] hover:text-[var(--color-brand-cream)] hover:translate-x-1 text-sm transition-all">
                Qualidade & Torra
              </Link>
              <Link href="#contato" className="text-[var(--color-brand-beige)] hover:text-[var(--color-brand-cream)] hover:translate-x-1 text-sm transition-all">
                Contato
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-1 flex flex-col">
            <h4 className="text-[var(--color-brand-gold)] text-sm font-bold tracking-widest uppercase mb-6">Contato</h4>
            <div className="flex flex-col space-y-4">
              <Link href="https://wa.me/5512997792964" className="text-[var(--color-brand-beige)] hover:text-[var(--color-brand-cream)] text-sm transition-colors flex items-center space-x-2">
                <Phone size={16} className="text-[var(--color-brand-gold)]" />
                <span>(12) 99779-2964</span>
              </Link>
              <Link href="https://www.instagram.com/cafe_do_ewerton/" target="_blank" className="text-[var(--color-brand-beige)] hover:text-[var(--color-brand-cream)] text-sm transition-colors flex items-center space-x-2">
                <InstagramIcon size={16} />
                <span>@cafe_do_ewerton</span>
              </Link>
              <p className="text-[var(--color-brand-beige)]/70 text-sm mt-2">
                carvalhoewerton99@gmail.com
              </p>
              <div className="text-[var(--color-brand-beige)] hover:text-[var(--color-brand-cream)] text-sm transition-colors flex items-start space-x-2 mt-4">
                <MapPin size={16} className="text-[var(--color-brand-gold)] shrink-0 mt-0.5" />
                <span>Av. Gustavo Mollica, Nº 241<br />Portal das Colinas</span>
              </div>
            </div>
          </div>


        </div>

        {/* Copyright */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-brand-gold)]/20 to-transparent mb-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between w-full text-xs text-[var(--color-brand-beige)]/50">
          <p>© {new Date().getFullYear()} Café do Ewerton. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/termos-de-uso" className="hover:text-[var(--color-brand-gold)] transition-colors">Termos de Uso</Link>
            <Link href="/politica-de-privacidade" className="hover:text-[var(--color-brand-gold)] transition-colors">Política de Privacidade</Link>
            <p className="opacity-50 hover:opacity-100 transition-opacity ml-4 border-l border-[var(--color-brand-gold)]/20 pl-4">
              Desenvolvido por 2Type
            </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
