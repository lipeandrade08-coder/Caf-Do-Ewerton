import type { MetadataRoute } from "next";

const BASE_URL = "https://cafedoewerton.com.br";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Regra principal — permite tudo aos bots legítimos
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/api/", "/admin/", "/*.json$"],
      },
      // Googlebot — acesso total a imagens e vídeos
      {
        userAgent: "Googlebot",
        allow: ["/", "/*.png", "/*.jpg", "/*.jpeg", "/*.webp", "/*.mp4"],
        disallow: ["/_next/", "/api/"],
      },
      // Googlebot Image — acesso a todas as imagens
      {
        userAgent: "Googlebot-Image",
        allow: [
          "/embalagem-v3.png",
          "/embalagem-v3-transparent-pillow.png",
          "/hero-bg-v2.png",
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
          "/roast-bg.png",
          "/cta-bg.jpg",
        ],
      },
      // Bingbot
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/_next/", "/api/"],
      },
      // Facebook Crawler — para Open Graph
      {
        userAgent: "facebookexternalhit",
        allow: "/",
      },
      // WhatsApp scraper — para link previews no WhatsApp
      {
        userAgent: "WhatsApp",
        allow: "/",
      },
      // Twitter/X card fetcher
      {
        userAgent: "Twitterbot",
        allow: "/",
      },
      // LinkedIn post inspector
      {
        userAgent: "LinkedInBot",
        allow: "/",
      },
      // Bloquear scrapers maliciosos e bots de spam
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
        ],
        disallow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
