import type { MetadataRoute } from "next";

const BASE_URL = "https://cafedoewerton.com.br";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ─────────────────────────────────────────────────────────
      // Regra global — permite tudo a bots legítimos desconhecidos
      // ─────────────────────────────────────────────────────────
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/_next/",   // Build artifacts internos do Next.js
          "/api/",     // Endpoints de API (não há conteúdo indexável)
          "/admin/",   // Área administrativa (proteger por precaução)
        ],
      },

      // ─────────────────────────────────────────────────────────
      // Googlebot — acesso total + imagens explicitamente liberadas
      // ─────────────────────────────────────────────────────────
      {
        userAgent: "Googlebot",
        allow: [
          "/",
          "/*.png",
          "/*.jpg",
          "/*.jpeg",
          "/*.webp",
          "/*.avif",
          "/*.mp4",
        ],
        disallow: ["/_next/", "/api/"],
      },

      // ─────────────────────────────────────────────────────────
      // Googlebot-Image — acesso a todas as imagens do produto
      // ─────────────────────────────────────────────────────────
      {
        userAgent: "Googlebot-Image",
        allow: [
          "/embalagem-v3.png",
          "/embalagem-v3-transparent-pillow.png",
          "/hero-bg-v2.png",
          "/roast-bg.png",
          "/cta-bg.jpg",
          "/gallery-1.png",
          "/gallery-2.png",
          "/gallery-3.png",
          "/gallery-4.png",
          "/gallery-5.png",
          "/gallery-6.png",
          "/gallery-7.png",
          "/gallery-8.png",
          "/gallery-9.png",
          "/gallery-10.png",
          "/gallery-11.png",
          "/gallery-12.png",
          "/gallery-13.png",
          "/acompanhamento_cake_1787676911586.jpg",
          "/acompanhamento_cookies_1787676945633.jpg",
          "/acompanhamento_croissant_1787676899633.jpg",
          "/acompanhamento_paodequeijo_1787676923021.jpg",
          "/acompanhamento_tart_1787676934712.jpg",
          "/acompanhamento_toast_1787676958257.jpg",
        ],
      },

      // ─────────────────────────────────────────────────────────
      // Bingbot — crawl-delay para não sobrecarregar o servidor
      // ─────────────────────────────────────────────────────────
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/_next/", "/api/"],
        crawlDelay: 2,
      },

      // ─────────────────────────────────────────────────────────
      // Social crawlers — acesso livre para previews/Open Graph
      // ─────────────────────────────────────────────────────────
      {
        userAgent: "facebookexternalhit",
        allow: "/",
      },
      {
        userAgent: "WhatsApp",
        allow: "/",
      },
      {
        userAgent: "Twitterbot",
        allow: "/",
      },
      {
        userAgent: "LinkedInBot",
        allow: "/",
      },
      {
        userAgent: "Slackbot",
        allow: "/",
      },
      {
        userAgent: "TelegramBot",
        allow: "/",
      },

      // ─────────────────────────────────────────────────────────
      // AI / LLM scrapers — bloqueados (não contribuem para SEO
      // e consomem largura de banda sem retorno comercial)
      // ─────────────────────────────────────────────────────────
      {
        userAgent: [
          "GPTBot",           // OpenAI
          "ChatGPT-User",     // OpenAI (browsing plugin)
          "OAI-SearchBot",    // OpenAI SearchGPT
          "anthropic-ai",     // Anthropic (Claude)
          "ClaudeBot",        // Anthropic (Claude crawler)
          "Claude-Web",       // Anthropic
          "Bytespider",       // TikTok / ByteDance
          "CCBot",            // Common Crawl (base de treinamento de LLMs)
          "cohere-ai",        // Cohere
          "Diffbot",          // Diffbot AI
          "FacebookBot",      // Meta AI training (diferente de facebookexternalhit)
          "Google-Extended",  // Google Bard / Gemini training
          "img2dataset",      // scraper de imagens para ML
          "Omgilibot",        // Omgili / Webz
          "PerplexityBot",    // Perplexity AI
          "YouBot",           // You.com AI
        ],
        disallow: "/",
      },

      // ─────────────────────────────────────────────────────────
      // SEO scrapers maliciosos e bots de spam conhecidos
      // ─────────────────────────────────────────────────────────
      {
        userAgent: [
          "AhrefsBot",
          "MJ12bot",
          "DotBot",
          "SemrushBot",
          "BLEXBot",
          "MegaIndex.ru",
          "spbot",
          "Exabot",
          "DataForSeoBot",
          "PetalBot",
          "BrightEdge",
          "Sogou",
        ],
        disallow: "/",
      },
    ],

    // ─────────────────────────────────────────────────────────────
    // Sitemaps — principal e de imagens
    // ─────────────────────────────────────────────────────────────
    sitemap: [
      `${BASE_URL}/sitemap.xml`,
      `${BASE_URL}/sitemap-images.xml`,
    ],
    host: BASE_URL,
  };
}
