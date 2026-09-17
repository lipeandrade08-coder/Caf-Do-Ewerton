import type { MetadataRoute } from "next";

const BASE_URL = "https://cafedoewerton.com.br";

/**
 * Data de última modificação do site (estrutura, design, conteúdo fixo).
 * Atualize sempre que publicar mudanças relevantes no layout ou conteúdo.
 */
const SITE_LAST_MODIFIED = new Date("2026-09-17");

/**
 * Data de última modificação de páginas legais (Política, Termos).
 * Raramente mudam; manter fixa reduz crawl desnecessário.
 */
const LEGAL_LAST_MODIFIED = new Date("2026-09-05");

/**
 * Gera as alternates de idioma (hreflang) para uma URL.
 * Mesmo sendo site em PT-BR apenas, declarar o hreflang
 * ajuda o Google a não criar duplicatas em outros idiomas.
 */
function alternates(path = "") {
  const url = `${BASE_URL}${path}`;
  return {
    languages: {
      "pt-BR": url,
      "x-default": url,
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ─────────────────────────────────────────────────────────────
    // Página principal — máxima prioridade, crawl mensal
    // ─────────────────────────────────────────────────────────────
    {
      url: BASE_URL,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: alternates(),
    },

    // ─────────────────────────────────────────────────────────────
    // Páginas legais — baixa prioridade, raramente atualizadas
    // Nota: âncoras (#) foram removidas pois o Google as ignora
    // no sitemap e podem gerar entradas duplicadas.
    // ─────────────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/politica-de-privacidade`,
      lastModified: LEGAL_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: alternates("/politica-de-privacidade"),
    },
    {
      url: `${BASE_URL}/termos-de-uso`,
      lastModified: LEGAL_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: alternates("/termos-de-uso"),
    },
  ];
}
