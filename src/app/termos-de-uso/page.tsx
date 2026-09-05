import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de Uso do Café do Ewerton. Conheça as condições de uso do nosso site e serviços.",
  alternates: {
    canonical: "https://cafedoewerton.com.br/termos-de-uso",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermosDeUso() {
  return (
    <main
      className="min-h-screen bg-[#121110] text-[#D4B483] py-20 px-6"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <meta itemProp="name" content="Termos de Uso — Café do Ewerton" />
      <meta itemProp="datePublished" content="2024-01-01" />
      <meta itemProp="dateModified" content="2026-09-05" />

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
                Termos de Uso
              </span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-[#C8A96A] text-4xl mb-6 block">♕</span>
          <h1 className="font-serif text-4xl md:text-5xl text-[#F0E8D5] mb-4">
            Termos de Uso
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
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao acessar e utilizar o site{" "}
              <a
                href="https://cafedoewerton.com.br"
                className="text-[#C8A96A] underline"
              >
                cafedoewerton.com.br
              </a>
              , você concorda com estes Termos de Uso. Se não concordar com
              qualquer parte destes termos, por favor, não utilize nosso site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#F0E8D5] mb-4">
              2. Uso do Site
            </h2>
            <p>
              O site do Café do Ewerton tem caráter informativo e comercial. Ao
              utilizá-lo, você se compromete a:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>Usar o site apenas para fins lícitos</li>
              <li>
                Não tentar acessar áreas restritas ou sistemas internos
              </li>
              <li>Não reproduzir conteúdo sem autorização</li>
              <li>Não realizar atividades que prejudiquem o funcionamento do site</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#F0E8D5] mb-4">
              3. Propriedade Intelectual
            </h2>
            <p>
              Todo o conteúdo do site — incluindo textos, imagens, logotipos,
              marca e design — é propriedade do Café do Ewerton e está protegido
              por leis de propriedade intelectual brasileiras. É proibida a
              reprodução sem autorização prévia.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#F0E8D5] mb-4">
              4. Pedidos e Pagamentos
            </h2>
            <p>
              Os pedidos são realizados via WhatsApp. Ao fazer um pedido, você
              concorda com:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>O preço informado no momento do pedido</li>
              <li>As condições de entrega combinadas</li>
              <li>A política de troca e devolução vigente</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#F0E8D5] mb-4">
              5. Limitação de Responsabilidade
            </h2>
            <p>
              O Café do Ewerton não se responsabiliza por danos indiretos
              decorrentes do uso do site. Fazemos nosso melhor para manter o
              site disponível, mas não garantimos disponibilidade ininterrupta.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#F0E8D5] mb-4">
              6. Links Externos
            </h2>
            <p>
              Nosso site pode conter links para o WhatsApp e Instagram. Esses
              serviços têm seus próprios Termos de Uso e Políticas de
              Privacidade, pelos quais não nos responsabilizamos.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#F0E8D5] mb-4">
              7. Alterações dos Termos
            </h2>
            <p>
              Reservamo-nos o direito de modificar estes Termos a qualquer
              momento. Alterações entram em vigor imediatamente após publicação
              no site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#F0E8D5] mb-4">
              8. Lei Aplicável
            </h2>
            <p>
              Estes Termos são regidos pelas leis brasileiras. Fica eleito o
              Foro da Comarca de São José dos Campos/SP para dirimir quaisquer
              controvérsias.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#F0E8D5] mb-4">
              9. Contato
            </h2>
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
