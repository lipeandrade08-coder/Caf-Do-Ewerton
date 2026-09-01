import type { Metadata, Viewport } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const BASE_URL = "https://cafe-do-ewerton.vercel.app";

export const viewport: Viewport = {
  themeColor: "#C8A96A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Café do Ewerton | Café Especial Artesanal — Torra Média Premium",
    template: "%s | Café do Ewerton",
  },

  description:
    "Café especial artesanal com torra média, selecionado com cuidado para preservar aroma, sabor e equilíbrio em cada xícara. Pacote de 500g por R$ 60. Peça pelo WhatsApp.",

  keywords: [
    "café especial",
    "café artesanal",
    "café torra média",
    "café premium",
    "café do Ewerton",
    "café 500g",
    "café gourmet",
    "café selecionado",
    "comprar café especial",
    "café por WhatsApp",
  ],

  authors: [{ name: "Café do Ewerton" }],
  creator: "Café do Ewerton",
  publisher: "Café do Ewerton",

  alternates: {
    canonical: BASE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
    title: "Café do Ewerton | Café Especial Artesanal — Torra Média Premium",
    description:
      "Café especial artesanal com torra média. Selecionado com cuidado para preservar aroma, sabor e equilíbrio. Pacote 500g por R$ 60.",
    images: [
      {
        url: "/embalagem-v3.png",
        width: 1200,
        height: 630,
        alt: "Embalagem do Café do Ewerton — Café Especial Artesanal Torra Média 500g",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Café do Ewerton | Café Especial Artesanal — Torra Média Premium",
    description:
      "Café especial artesanal com torra média. Selecionado com cuidado. Pacote 500g por R$ 60.",
    images: ["/embalagem-v3.png"],
  },

  category: "food & beverage",
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
      <body className="min-h-full flex flex-col">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
