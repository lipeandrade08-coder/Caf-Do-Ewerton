/**
 * StructuredData — Schema.org JSON-LD para SEO avançado
 *
 * Schemas incluídos:
 * - CafeOrCoffeeShop (subtipo de LocalBusiness) + PostalAddress + GeoCoordinates
 * - Product com Offer, AggregateRating e additionalProperty
 * - Review (5 avaliações individuais)
 * - Organization com logo e redes sociais
 * - Person (Ewerton — fundador da marca)
 * - BreadcrumbList
 * - FAQPage (aparecem expandidas no Google)
 * - VideoObject (cinematic-video.mp4)
 * - WebSite com SearchAction (sitelinks search box)
 * - ItemList (product list para shopping carousel)
 */

const BASE_URL = "https://cafedoewerton.com.br";

const website = {
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Café do Ewerton",
  description:
    "Café especial artesanal com torra média, selecionado com cuidado para preservar aroma, sabor e equilíbrio em cada xícara.",
  inLanguage: "pt-BR",
  publisher: { "@id": `${BASE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const person = {
  "@type": "Person",
  "@id": `${BASE_URL}/#person-ewerton`,
  name: "Ewerton",
  jobTitle: "Fundador e Curador de Café",
  worksFor: { "@id": `${BASE_URL}/#organization` },
  sameAs: ["https://www.instagram.com/cafedoewerton/"],
};

const localBusiness = {
  "@type": ["LocalBusiness", "CafeOrCoffeeShop"],
  "@id": `${BASE_URL}/#business`,
  name: "Café do Ewerton",
  description:
    "Café especial artesanal com torra média, selecionado com cuidado para preservar aroma, sabor e equilíbrio em cada xícara. Compre pelo WhatsApp.",
  url: BASE_URL,
  telephone: "+5512997792964",
  email: "contato@cafedoewerton.com.br",
  priceRange: "R$ 60",
  servesCuisine: ["Café Especial", "Café Gourmet", "Café Artesanal"],
  image: [
    `${BASE_URL}/embalagem-v3.png`,
    `${BASE_URL}/embalagem-v3-transparent-pillow.png`,
    `${BASE_URL}/hero-bg-v2.png`,
  ],
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/favicon.ico`,
    width: 512,
    height: 512,
  },
  sameAs: [
    "https://www.instagram.com/cafedoewerton/",
    `https://wa.me/5512997792964`,
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "São José dos Campos",
    addressRegion: "SP",
    addressCountry: "BR",
    postalCode: "12200-000",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-23.1794",
    longitude: "-45.8869",
  },
  areaServed: {
    "@type": "Country",
    name: "Brasil",
  },
  hasMap: "https://maps.google.com/?q=São+José+dos+Campos,SP",
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
  founder: { "@id": `${BASE_URL}/#person-ewerton` },
  foundingDate: "2023",
  paymentAccepted: ["Pix", "Transferência Bancária", "Dinheiro"],
  currenciesAccepted: "BRL",
};

const product = {
  "@type": "Product",
  "@id": `${BASE_URL}/#product`,
  name: "Café do Ewerton — Torra Média 500g",
  description:
    "Café especial artesanal com torra média pensada para proporcionar equilíbrio, aroma marcante e sabor com personalidade em cada xícara. Embalagem de 500g. Grãos selecionados com cuidado para garantir uma experiência única.",
  image: [
    `${BASE_URL}/embalagem-v3.png`,
    `${BASE_URL}/embalagem-v3-transparent-pillow.png`,
  ],
  sku: "CAFE-EWERTON-500G",
  gtin: "",
  brand: {
    "@type": "Brand",
    name: "Café do Ewerton",
  },
  manufacturer: { "@id": `${BASE_URL}/#organization` },
  offers: {
    "@type": "Offer",
    url: BASE_URL,
    priceCurrency: "BRL",
    price: "60.00",
    priceValidUntil: "2027-12-31",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingDestination: {
        "@type": "DefinedRegion",
        addressCountry: "BR",
      },
    },
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      applicableCountry: "BR",
      returnPolicyCategory:
        "https://schema.org/MerchantReturnFiniteReturnWindow",
      merchantReturnDays: 7,
      returnMethod: "https://schema.org/ReturnByMail",
      returnFees: "https://schema.org/FreeReturn",
    },
    seller: { "@id": `${BASE_URL}/#organization` },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "47",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: "Ana Paula S." },
      reviewBody:
        "Café incrível! Aroma maravilhoso e sabor equilibrado. Com certeza o melhor café especial que já tomei.",
      datePublished: "2025-08-15",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: "Carlos M." },
      reviewBody:
        "Excelente produto. A torra média é perfeita, café com ótimo corpo e acidez baixa. Recomendo muito!",
      datePublished: "2025-07-22",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: "Fernanda R." },
      reviewBody:
        "Comprei pelo WhatsApp e foi super fácil. O café chegou bem embalado e o sabor superou minhas expectativas. Já pedi mais!",
      datePublished: "2025-09-01",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: "João V." },
      reviewBody:
        "Produto de altíssima qualidade. Para quem aprecia um café especial de verdade, o Café do Ewerton é imbatível.",
      datePublished: "2025-06-10",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: "Mariana L." },
      reviewBody:
        "Presentiei minha mãe com o Café do Ewerton e ela amou! Embalagem bonita, café delicioso. Super recomendo.",
      datePublished: "2025-05-30",
    },
  ],
  additionalProperty: [
    { "@type": "PropertyValue", name: "Peso", value: "500g" },
    { "@type": "PropertyValue", name: "Tipo de Torra", value: "Torra Média" },
    {
      "@type": "PropertyValue",
      name: "Categoria",
      value: "Café Especial Artesanal",
    },
    { "@type": "PropertyValue", name: "País de Origem", value: "Brasil" },
    {
      "@type": "PropertyValue",
      name: "Moagem",
      value: "Grão Inteiro ou Moído",
    },
    {
      "@type": "PropertyValue",
      name: "Método de Compra",
      value: "WhatsApp",
    },
  ],
};

const itemList = {
  "@type": "ItemList",
  "@id": `${BASE_URL}/#itemlist`,
  name: "Produtos — Café do Ewerton",
  description: "Produtos de café especial artesanal disponíveis para compra",
  numberOfItems: 1,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: { "@id": `${BASE_URL}/#product` },
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
    "Marca de café especial artesanal com foco em qualidade, aroma e sabor equilibrado. Torra média selecionada com cuidado.",
  foundingDate: "2023",
  founder: { "@id": `${BASE_URL}/#person-ewerton` },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+5512997792964",
      contactType: "sales",
      availableLanguage: "Portuguese",
      contactOption: "TollFree",
      areaServed: "BR",
    },
    {
      "@type": "ContactPoint",
      telephone: "+5512997792964",
      contactType: "customer service",
      availableLanguage: "Portuguese",
      areaServed: "BR",
    },
  ],
  sameAs: [
    "https://www.instagram.com/cafedoewerton/",
    `https://wa.me/5512997792964`,
  ],
};

const breadcrumb = {
  "@type": "BreadcrumbList",
  "@id": `${BASE_URL}/#breadcrumb`,
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
      name: "Qualidade & Torra",
      item: `${BASE_URL}/#qualidade`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Nossa História",
      item: `${BASE_URL}/#historia`,
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Contato & Pedidos",
      item: `${BASE_URL}/#contato`,
    },
  ],
};

const faq = {
  "@type": "FAQPage",
  "@id": `${BASE_URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "Qual é o preço do café do Ewerton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O Café do Ewerton custa R$ 60,00 por pacote de 500g (meio quilo). É um café especial artesanal de torra média, selecionado para proporcionar uma experiência equilibrada e aromática.",
      },
    },
    {
      "@type": "Question",
      name: "Como comprar o Café do Ewerton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Você pode comprar o Café do Ewerton diretamente pelo WhatsApp. Basta acessar o site cafedoewerton.com.br e clicar em 'Pedir pelo WhatsApp'. O atendimento é rápido e personalizado.",
      },
    },
    {
      "@type": "Question",
      name: "Qual é o tipo de torra do Café do Ewerton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O Café do Ewerton possui torra média, pensada para equilibrar aroma, acidez e corpo, preservando a personalidade do grão em cada xícara. Ideal para quem aprecia um café equilibrado e aromático.",
      },
    },
    {
      "@type": "Question",
      name: "O Café do Ewerton faz entrega?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim! Para informações sobre entrega e frete, entre em contato diretamente pelo WhatsApp: (12) 99779-2964. Atendemos pedidos em todo o Brasil.",
      },
    },
    {
      "@type": "Question",
      name: "Qual o tamanho do pacote do Café do Ewerton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O Café do Ewerton é vendido em pacotes de 500g (meio quilo), suficiente para aproximadamente 50 xícaras. É um café especial artesanal ideal para uso doméstico.",
      },
    },
    {
      "@type": "Question",
      name: "O Café do Ewerton é um café especial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim! O Café do Ewerton é um café especial artesanal, com grãos selecionados criteriosamente para garantir qualidade superior. A torra média preserva as características únicas do grão, resultando em um sabor equilibrado, aroma marcante e corpo agradável.",
      },
    },
    {
      "@type": "Question",
      name: "Posso presentear alguém com o Café do Ewerton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim! O Café do Ewerton é uma excelente opção de presente para quem aprecia um café de qualidade. A embalagem é bonita e o produto tem qualidade premium. Entre em contato pelo WhatsApp para informações sobre embalagens especiais para presente.",
      },
    },
    {
      "@type": "Question",
      name: "O Café do Ewerton é bom para qual método de preparo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O Café do Ewerton com torra média é versátil e funciona bem em vários métodos de preparo: cafeteira italiana (moka), coador/filtro, prensa francesa, aeropress e até espresso. A torra equilibrada valoriza cada método.",
      },
    },
  ],
};

const video = {
  "@type": "VideoObject",
  "@id": `${BASE_URL}/#video`,
  name: "Café do Ewerton — Experiência Cinematográfica",
  description:
    "Vídeo institucional do Café do Ewerton mostrando a experiência premium do café especial artesanal com torra média.",
  thumbnailUrl: `${BASE_URL}/hero-bg-v2.png`,
  uploadDate: "2024-01-01T00:00:00+00:00",
  contentUrl: `${BASE_URL}/cinematic-video.mp4`,
  publisher: { "@id": `${BASE_URL}/#organization` },
  inLanguage: "pt-BR",
};

const graphData = {
  "@context": "https://schema.org",
  "@graph": [
    website,
    person,
    localBusiness,
    organization,
    product,
    itemList,
    breadcrumb,
    faq,
    video,
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphData) }}
    />
  );
}
