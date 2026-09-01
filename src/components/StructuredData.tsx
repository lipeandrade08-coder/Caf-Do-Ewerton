/**
 * StructuredData — Schema.org JSON-LD para SEO avançado
 *
 * Inclui:
 * - LocalBusiness: dados da empresa para Google Maps e busca local
 * - Product: o café com preço, avaliação e disponibilidade
 * - Organization: identidade da marca com redes sociais
 * - BreadcrumbList: estrutura de navegação
 * - FAQPage: perguntas frequentes (aparecem expandidas no Google)
 */

const BASE_URL = "https://cafedoewerton.com.br";

const localBusiness = {
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#business`,
  name: "Café do Ewerton",
  description:
    "Café especial artesanal com torra média, selecionado com cuidado para preservar aroma, sabor e equilíbrio em cada xícara.",
  url: BASE_URL,
  telephone: "+5512997792964",
  priceRange: "R$ 60",
  servesCuisine: "Café Especial",
  image: `${BASE_URL}/embalagem-v3.png`,
  logo: `${BASE_URL}/favicon.ico`,
  sameAs: [],
  hasMap: "",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
};

const product = {
  "@type": "Product",
  "@id": `${BASE_URL}/#product`,
  name: "Café do Ewerton — Torra Média 500g",
  description:
    "Café especial artesanal com torra média pensada para proporcionar equilíbrio, aroma marcante e sabor com personalidade em cada xícara. Embalagem de 500g.",
  image: `${BASE_URL}/embalagem-v3.png`,
  brand: {
    "@type": "Brand",
    name: "Café do Ewerton",
  },
  offers: {
    "@type": "Offer",
    url: BASE_URL,
    priceCurrency: "BRL",
    price: "60.00",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: {
      "@type": "Organization",
      name: "Café do Ewerton",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "47",
    bestRating: "5",
    worstRating: "1",
  },
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Peso",
      value: "500g",
    },
    {
      "@type": "PropertyValue",
      name: "Tipo de Torra",
      value: "Torra Média",
    },
    {
      "@type": "PropertyValue",
      name: "Categoria",
      value: "Café Especial Artesanal",
    },
  ],
};

const organization = {
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Café do Ewerton",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/favicon.ico`,
    width: 512,
    height: 512,
  },
  description:
    "Marca de café especial artesanal com foco em qualidade, aroma e sabor equilibrado.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+5512997792964",
    contactType: "customer service",
    availableLanguage: "Portuguese",
    contactOption: "TollFree",
  },
  sameAs: [],
};

const breadcrumb = {
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Início",
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Nosso Café",
      item: `${BASE_URL}/#nosso-cafe`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Qualidade",
      item: `${BASE_URL}/#qualidade`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "História",
      item: `${BASE_URL}/#historia`,
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Contato",
      item: `${BASE_URL}/#contato`,
    },
  ],
};

const faq = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qual é o preço do café do Ewerton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O Café do Ewerton custa R$ 60,00 por pacote de 500g. É um café especial artesanal de torra média.",
      },
    },
    {
      "@type": "Question",
      name: "Como comprar o Café do Ewerton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Você pode comprar o Café do Ewerton diretamente pelo WhatsApp. Basta acessar o site e clicar em 'Pedir pelo WhatsApp'.",
      },
    },
    {
      "@type": "Question",
      name: "Qual é o tipo de torra do Café do Ewerton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O Café do Ewerton possui torra média, pensada para equilibrar aroma, acidez e corpo, preservando a personalidade do grão em cada xícara.",
      },
    },
    {
      "@type": "Question",
      name: "O Café do Ewerton faz entrega?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para informações sobre entrega, entre em contato diretamente pelo WhatsApp. Atendemos consultas sobre frete e disponibilidade.",
      },
    },
    {
      "@type": "Question",
      name: "Qual o tamanho do pacote do Café do Ewerton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O Café do Ewerton é vendido em pacotes de 500g (meio quilo), suficiente para aproximadamente 50 xícaras.",
      },
    },
  ],
};

const graphData = {
  "@context": "https://schema.org",
  "@graph": [localBusiness, product, organization, breadcrumb, faq],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphData) }}
    />
  );
}
