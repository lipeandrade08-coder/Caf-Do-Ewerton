import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Café do Ewerton — Café Especial Artesanal",
    short_name: "Café do Ewerton",
    description:
      "Café especial artesanal com torra média. Selecionado com cuidado para preservar aroma, sabor e equilíbrio em cada xícara.",
    start_url: "/",
    display: "standalone",
    background_color: "#121110",
    theme_color: "#C8A96A",
    orientation: "portrait",
    categories: ["food", "shopping"],
    lang: "pt-BR",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
