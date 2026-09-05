import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Café do Ewerton — Café Especial Artesanal",
    short_name: "Café do Ewerton",
    description:
      "Café especial artesanal com torra média. Selecionado com cuidado para preservar aroma, sabor e equilíbrio em cada xícara. Pacote 500g por R$ 60.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#121110",
    theme_color: "#C8A96A",
    orientation: "portrait-primary",
    categories: ["food", "shopping", "lifestyle"],
    lang: "pt-BR",
    dir: "ltr",
    prefer_related_applications: false,
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
        purpose: "any",
      },
      {
        src: "/embalagem-v3.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/embalagem-v3-transparent-pillow.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    screenshots: [
      {
        src: "/hero-bg-v2.png",
        sizes: "1280x800",
        type: "image/png",
        form_factor: "wide",
        label: "Café do Ewerton — Página Inicial",
      },
      {
        src: "/embalagem-v3.png",
        sizes: "390x844",
        type: "image/png",
        form_factor: "narrow",
        label: "Café do Ewerton — Nosso Produto",
      },
    ],
    // Atalhos rápidos — aparecem no ícone do app mobile
    shortcuts: [
      {
        name: "Pedir pelo WhatsApp",
        short_name: "WhatsApp",
        description: "Faça seu pedido diretamente pelo WhatsApp",
        url: "https://wa.me/5512997792964?text=Olá! Vim pelo site do Café do Ewerton e gostaria de saber como faço para pedir o meu café.",
        icons: [{ src: "/favicon.ico", sizes: "any" }],
      },
      {
        name: "Nosso Café",
        short_name: "Produto",
        description: "Conheça o Café do Ewerton",
        url: "/#nosso-cafe",
        icons: [{ src: "/favicon.ico", sizes: "any" }],
      },
    ],
  };
}
