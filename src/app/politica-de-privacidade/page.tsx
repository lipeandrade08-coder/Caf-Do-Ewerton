import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade do Café do Ewerton. Saiba como coletamos, usamos e protegemos seus dados pessoais.",
  alternates: {
    canonical: "https://cafedoewerton.com.br/politica-de-privacidade",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PoliticaDePrivacidade() {
  return (
    <main
      className="min-h-screen bg-[#121110] text-[#D4B483] py-20 px-6"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <meta itemProp="name" content="Política de Privacidade — Café do Ewerton" />
      <meta itemProp="datePublished" content="2024-01-01" />
      <meta itemProp="dateModified" content="2026-09-05" />
      <meta
        itemProp="description"
        content="Política de Privacidade do Café do Ewerton."
      />

      <div className="container mx-auto max-w-3xl">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-10 text-sm text-[#D4B483]/60"
        >
          <ol
            className="flex items-center gap-2"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            <li
              itemScope
              itemProp="itemListElement"
              itemType="https://schema.org/ListItem"
            >
              <Link
                href="/"
                className="hover:text-[#C8A96A] transition-colors"
                itemProp="item"
              >
                <span itemProp="name">Início</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li aria-hidden="true">›</li>
            <li
              itemScope
              itemProp="itemListElement"
              itemType="https://schema.org/ListItem"
            >
              <span
                className="text-[#C8A96A]"
                itemProp="name"
                aria-current="page"
              >
                Política de Privacidade
              </span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-[#C8A96A] text-4xl mb-6 block">♕</span>
          <h1 className="font-serif text-4xl md:text-5xl text-[#F0E8D5] mb-4">
            Política de Privacidade
          </h1>
          <p className="text-[#D4B483]/70 text-sm">
            Última atualização: 5 de setembro de 2026
          </p>
        </header>

        {/* Conteúdo */}
        <article
          className="prose prose-invert max-w-none space-y-8 text-[#D4B483]/80 leading-relaxed"
          itemProp="articleBody"
        >
          <section>
            <h2 className="font-serif text-2xl text-[#F0E8D5] mb-4">
              1. Quem somos
            </h2>
            <p>
              O <strong className="text-[#C8A96A]">Café do Ewerton</strong> é
              uma marca de café especial artesanal com sede em São José dos
              Campos, SP. Nosso site é{" "}
              <a
                href="https://cafedoewerton.com.br"
                className="text-[#C8A96A] underline"
              >
                cafedoewerton.com.br
              </a>{" "}
              e nosso contato é{" "}
              <a
                href="mailto:contato@cafedoewerton.com.br"
                className="text-[#C8A96A] underline"
              >
                contato@cafedoewerton.com.br
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#F0E8D5] mb-4">
              2. Dados que coletamos
            </h2>
            <p>
              Nosso site é essencialmente um portfólio de marca. Não coletamos
              dados pessoais diretamente através do site. Quando você nos contata
              pelo WhatsApp ou e-mail, podemos coletar:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>Nome e sobrenome</li>
              <li>Número de telefone (WhatsApp)</li>
              <li>Endereço de e-mail</li>
              <li>Endereço de entrega</li>
              <li>Informações do pedido</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#F0E8D5] mb-4">
              3. Como usamos seus dados
            </h2>
            <p>Utilizamos seus dados exclusivamente para:</p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>Processar e entregar seu pedido</li>
              <li>Entrar em contato sobre seu pedido</li>
              <li>Responder dúvidas e suporte ao cliente</li>
              <li>
                Enviar ofertas e novidades (apenas com seu consentimento explícito)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#F0E8D5] mb-4">
              4. Compartilhamento de dados
            </h2>
            <p>
              Não vendemos, alugamos ou compartilhamos seus dados pessoais com
              terceiros, exceto quando necessário para cumprir obrigações legais
              ou entregar seu pedido (ex.: transportadoras).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#F0E8D5] mb-4">
              5. Cookies e rastreamento
            </h2>
            <p>
              Nosso site pode utilizar cookies essenciais para funcionamento
              básico. Não utilizamos cookies de rastreamento publicitário ou
              ferramentas de analytics de terceiros que coletem dados pessoais.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#F0E8D5] mb-4">
              6. Seus direitos (LGPD)
            </h2>
            <p>
              De acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018),
              você tem direito a:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>Confirmar a existência de tratamento dos seus dados</li>
              <li>Acessar seus dados</li>
              <li>Corrigir dados incompletos ou incorretos</li>
              <li>Solicitar exclusão dos seus dados</li>
              <li>Revogar consentimento a qualquer momento</li>
            </ul>
            <p className="mt-4">
              Para exercer seus direitos, entre em contato pelo e-mail:{" "}
              <a
                href="mailto:contato@cafedoewerton.com.br"
                className="text-[#C8A96A] underline"
              >
                contato@cafedoewerton.com.br
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#F0E8D5] mb-4">
              7. Segurança
            </h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger
              seus dados pessoais contra acesso não autorizado, perda ou
              destruição.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#F0E8D5] mb-4">
              8. Alterações nesta política
            </h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. A
              data de &ldquo;última atualização&rdquo; no topo desta página
              indica quando as alterações foram feitas.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#F0E8D5] mb-4">
              9. Contato
            </h2>
            <p>
              Para dúvidas sobre esta Política de Privacidade, entre em contato:
            </p>
            <ul className="list-none mt-4 space-y-2">
              <li>
                📧{" "}
                <a
                  href="mailto:contato@cafedoewerton.com.br"
                  className="text-[#C8A96A] underline"
                >
                  contato@cafedoewerton.com.br
                </a>
              </li>
              <li>
                📱{" "}
                <a
                  href="https://wa.me/5512997792964"
                  className="text-[#C8A96A] underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  (12) 99779-2964
                </a>
              </li>
            </ul>
          </section>
        </article>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-[#C8A96A]/10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#C8A96A] hover:text-[#F0E8D5] transition-colors text-sm font-medium"
          >
            ← Voltar ao início
          </Link>
        </div>
      </div>
    </main>
  );
}
