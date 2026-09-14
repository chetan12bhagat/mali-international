import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { articles } from "@/data/insights";
import { siteConfig } from "@/data/company";

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: `${article.title} | Mali International`,
    description: article.excerpt,
    alternates: { canonical: `${siteConfig.url}/insights/${slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      url: `${siteConfig.url}/insights/${slug}`,
    },
  };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    publisher: {
      "@type": "Organization",
      name: "Mali International",
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="pt-32 pb-[clamp(40px,6vw,60px)] bg-off-white">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Insights", href: "/insights" },
              { label: article.title },
            ]}
          />
        </Container>
      </section>

      <article className="pb-[clamp(60px,10vw,120px)] bg-off-white">
        <Container>
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                  {article.category}
                </span>
                <span className="text-xs text-muted">•</span>
                <span className="text-xs text-muted">{article.readTime}</span>
                <span className="text-xs text-muted">•</span>
                <time className="text-xs text-muted" dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>

              <h1 className="text-dark-text mb-8">{article.title}</h1>

              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: articleContentToHTML(article.content) }}
              />

              <div className="mt-16 pt-8 border-t border-light-gray">
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-2 text-navy font-medium group"
                >
                  <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-[3px]" />
                  Back to Insights
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </article>
    </>
  );
}

function articleContentToHTML(content: string): string {
  return content
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^\- \*\*(.*?)\*\*: (.*$)/gm, '<li><strong>$1</strong>: $2</li>')
    .replace(/^\- (.*$)/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[hul])(.*\S.*)$/gm, '<p>$1</p>')
    .replace(/<p><\/p>/g, '')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}
