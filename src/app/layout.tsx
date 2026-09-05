import type { Metadata, Viewport } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://cafedoewerton.com.br";

export const viewport: Viewport = {
  themeColor: "#C8A96A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Café do Ewerton | Café Especial Artesanal — Torra Média Premium",
    template: "%s | Café do Ewerton",
  },

  description:
    "Café especial artesanal com torra média, selecionado com cuidado para preservar aroma, sabor e equilíbrio em cada xícara. Pacote de 500g por R$ 60. Peça pelo WhatsApp e receba em todo o Brasil.",

  keywords: [
    // Marca
    "café do Ewerton",
    "cafe do ewerton",
    // Produto principal
    "café especial",
    "café artesanal",
    "café torra média",
    "café premium",
    "café gourmet",
    "café selecionado",
    "café especial 500g",
    "café especial artesanal",
    // Compra / conversão
    "comprar café especial",
    "comprar café online",
    "café pelo WhatsApp",
    "pedir café online",
    "café entrega brasil",
    "café artesanal preço",
    "café especial R$ 60",
    // Características
    "café com aroma forte",
    "café equilibrado",
    "café corpo encorpado",
    "café torra media artesanal",
    "café moagem especial",
    "grãos selecionados café",
    // Local / regional
    "café especial São José dos Campos",
    "café artesanal São Paulo",
    "café especial interior SP",
    "café gourmet Brasil",
    // Uso / presente
    "café especial presente",
    "café gourmet presente",
    "melhor café especial brasil",
    "café premium presente",
    // Métodos de preparo
    "café especial coador",
    "café especial prensa francesa",
    "café especial espresso",
    "café especial aeropress",
    // Intenção informacional
    "o que é café especial",
    "diferença café especial comum",
    "café com pontuação alta",
  ],

  authors: [{ name: "Café do Ewerton", url: BASE_URL }],
  creator: "Café do Ewerton",
  publisher: "Café do Ewerton",

  alternates: {
    canonical: BASE_URL,
    languages: {
      "pt-BR": BASE_URL,
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "Café do Ewerton",
    title: "Café do Ewerton | Café Especial Artesanal — Torra Média 500g R$ 60",
    description:
      "Café especial artesanal com torra média. Grãos selecionados para preservar aroma, sabor e equilíbrio. Pacote 500g por R$ 60. Peça pelo WhatsApp e receba em todo o Brasil.",
    images: [
      {
        url: "/embalagem-v3.png",
        width: 1200,
        height: 630,
        alt: "Embalagem do Café do Ewerton — Café Especial Artesanal Torra Média 500g",
        type: "image/png",
      },
      {
        url: "/hero-bg-v2.png",
        width: 1200,
        height: 630,
        alt: "Café do Ewerton — Café Especial Premium Artesanal",
        type: "image/png",
      },
    ],
    countryName: "Brazil",
    emails: ["contato@cafedoewerton.com.br"],
    phoneNumbers: ["+5512997792964"],
  },

  twitter: {
    card: "summary_large_image",
    site: "@cafe_do_ewerton",
    creator: "@cafe_do_ewerton",
    title: "Café do Ewerton | Café Especial Artesanal — Torra Média Premium",
    description:
      "Café especial artesanal com torra média. Selecionado com cuidado. Pacote 500g por R$ 60. Peça pelo WhatsApp!",
    images: [
      {
        url: "/embalagem-v3.png",
        alt: "Embalagem do Café do Ewerton — Café Especial Artesanal Torra Média 500g",
      },
    ],
  },

  // App Links (Facebook / deep links)
  appLinks: {
    web: {
      url: BASE_URL,
      should_fallback: true,
    },
  },

  // Classificação de conteúdo
  category: "food & beverage",

  // Verificação de propriedade (adicione seus códigos quando disponíveis)
  // verification: {
  //   google: "seu-codigo-google-search-console",
  //   yandex: "seu-codigo-yandex",
  //   other: {
  //     "msvalidate.01": "seu-codigo-bing",
  //   },
  // },

  // Outros metadados úteis
  other: {
    // Price meta tags (comparadores de preço e Facebook Commerce)
    "product:price:amount": "60.00",
    "product:price:currency": "BRL",
    "product:availability": "in stock",
    "product:condition": "new",
    "product:brand": "Café do Ewerton",
    "product:category": "Café Especial Artesanal",
    "product:retailer_item_id": "CAFE-EWERTON-500G",
    // Pinterest Rich Pins
    "og:type": "og:product",
    // Geo / Local SEO
    "geo.region": "BR-SP",
    "geo.placename": "São José dos Campos",
    "geo.position": "-23.1794;-45.8869",
    ICBM: "-23.1794, -45.8869",
    // WhatsApp business
    "wa:number": "5512997792964",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cinzel.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* Preconnect para recursos externos críticos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/favicon.ico" />
        {/* Microsoft Tile */}
        <meta name="msapplication-TileColor" content="#C8A96A" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        {/* Format Detection */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="format-detection" content="address=no" />
      </head>
      <body className="min-h-full flex flex-col">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
