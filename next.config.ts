import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Servir imagens em formatos modernos (AVIF ~50% menor que PNG, WebP ~30%)
    formats: ["image/avif", "image/webp"],
    // Tamanhos de dispositivo para srcset responsivo
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920, 2048],
    // Tamanhos para imagens de conteúdo (não hero)
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Manter a qualidade alta para café premium
    minimumCacheTTL: 2678400, // 31 dias em segundos
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Compressão gzip/brotli automática
  compress: true,
  // Power header removido (reduz footprint de segurança)
  poweredByHeader: false,
  // Headers de segurança e SEO
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Cache longo para assets estáticos
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      // Cache agressivo para imagens (melhora Core Web Vitals)
      {
        source: "/(:path*\\.(?:png|jpg|jpeg|gif|ico|svg|webp|avif|mp4|woff2))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  // Redirecionar /sitemap.xml → Next.js sitemap handler
  async redirects() {
    return [
      // Redirecionar versão sem www para com www (ou vice-versa) — ajuste conforme DNS
      // {
      //   source: "/:path*",
      //   has: [{ type: "host", value: "www.cafedoewerton.com.br" }],
      //   destination: "https://cafedoewerton.com.br/:path*",
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
