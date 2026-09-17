import type { MetadataRoute } from "next";

const BASE_URL = "https://cafedoewerton.com.br";

/**
 * Image Sitemap — Café do Ewerton
 *
 * Arquivo separado que indexa todas as imagens do produto e galeria
 * para o Google Image Search.
 *
 * Buscas por imagem têm alta intenção de compra para produtos de café premium.
 *
 * O Next.js expõe este arquivo em /sitemap-images.xml automaticamente,
 * pois o nome do arquivo corresponde à rota da URL gerada.
 *
 * Referência Next.js: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 * Referência Google: https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps
 *
 * Nota: a API do Next.js aceita `images` como array de strings (URLs absolutas).
 * O Google lê os <image:loc> no XML gerado automaticamente.
 */

const LAST_MOD = new Date("2026-09-17");

/** Imagens do produto principal */
const productImages: string[] = [
  `${BASE_URL}/embalagem-v3.png`,
  `${BASE_URL}/embalagem-v3-transparent-pillow.png`,
];

/** Imagens institucionais / hero */
const heroImages: string[] = [
  `${BASE_URL}/hero-bg-v2.png`,
  `${BASE_URL}/roast-bg.png`,
  `${BASE_URL}/cta-bg.jpg`,
];

/** Galeria — 13 fotos do processo e experiência */
const galleryImages: string[] = Array.from(
  { length: 13 },
  (_, i) => `${BASE_URL}/gallery-${i + 1}.png`
);

/** Acompanhamentos — harmonizações e sugestões */
const acompanhamentoImages: string[] = [
  `${BASE_URL}/acompanhamento_cake_1787676911586.jpg`,
  `${BASE_URL}/acompanhamento_cookies_1787676945633.jpg`,
  `${BASE_URL}/acompanhamento_croissant_1787676899633.jpg`,
  `${BASE_URL}/acompanhamento_paodequeijo_1787676923021.jpg`,
  `${BASE_URL}/acompanhamento_tart_1787676934712.jpg`,
  `${BASE_URL}/acompanhamento_toast_1787676958257.jpg`,
];

export default function sitemapImages(): MetadataRoute.Sitemap {
  return [
    // ─────────────────────────────────────────────────────────────
    // Página principal — imagens do produto e institucionais
    // ─────────────────────────────────────────────────────────────
    {
      url: BASE_URL,
      lastModified: LAST_MOD,
      changeFrequency: "monthly",
      priority: 1.0,
      images: [...productImages, ...heroImages],
    },

    // ─────────────────────────────────────────────────────────────
    // Galeria — 13 fotos do processo e experiência de café
    // ─────────────────────────────────────────────────────────────
    {
      url: BASE_URL,
      lastModified: LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.8,
      images: galleryImages,
    },

    // ─────────────────────────────────────────────────────────────
    // Acompanhamentos — harmonizações e sugestões de consumo
    // ─────────────────────────────────────────────────────────────
    {
      url: BASE_URL,
      lastModified: LAST_MOD,
      changeFrequency: "yearly",
      priority: 0.6,
      images: acompanhamentoImages,
    },
  ];
}
