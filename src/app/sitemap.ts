import type { MetadataRoute } from "next";

const BASE_URL = "https://cafedoewerton.com.br";
const LAST_MODIFIED_SITE = new Date("2026-09-05");
const LAST_MODIFIED_CONTENT = new Date("2026-09-05");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Página principal — máxima prioridade
    {
      url: BASE_URL,
      lastModified: LAST_MODIFIED_SITE,
      changeFrequency: "monthly",
      priority: 1,
    },
    // Seção: Nosso Café
    {
      url: `${BASE_URL}/#nosso-cafe`,
      lastModified: LAST_MODIFIED_CONTENT,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Seção: Qualidade & Torra
    {
      url: `${BASE_URL}/#qualidade`,
      lastModified: LAST_MODIFIED_CONTENT,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    // Seção: História
    {
      url: `${BASE_URL}/#historia`,
      lastModified: LAST_MODIFIED_CONTENT,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    // Seção: Contato
    {
      url: `${BASE_URL}/#contato`,
      lastModified: LAST_MODIFIED_CONTENT,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Política de Privacidade
    {
      url: `${BASE_URL}/politica-de-privacidade`,
      lastModified: LAST_MODIFIED_SITE,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    // Termos de Uso
    {
      url: `${BASE_URL}/termos-de-uso`,
      lastModified: LAST_MODIFIED_SITE,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
