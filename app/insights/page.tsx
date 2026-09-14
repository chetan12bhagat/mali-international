import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { generatePageMetadata } from "@/data/seo";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { articles } from "@/data/insights";

export const metadata: Metadata = generatePageMetadata("insights");

export default function InsightsPage() {
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <>
      <section className="pt-32 pb-[clamp(40px,6vw,80px)] bg-off-white">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Insights" }]} />
          <AnimatedSection>
            <SectionLabel className="mb-4">Insights</SectionLabel>
            <h1 className="text-dark-text mb-4 max-w-3xl">Insights & Resources</h1>
            <p className="text-xl text-muted max-w-[560px] leading-relaxed">
              Practical insights on India sourcing, international procurement and global trade.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="py-[clamp(40px,6vw,80px)] bg-off-white">
          <Container>
            <AnimatedSection>
              <Link
                href={`/insights/${featured.slug}`}
                className="group block bg-white hover:bg-light-gray transition-colors duration-300 p-8 md:p-12"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                    Featured
                  </span>
                  <span className="text-xs text-muted">•</span>
                  <span className="text-xs text-muted">{featured.category}</span>
                  <span className="text-xs text-muted">•</span>
                  <span className="text-xs text-muted">{featured.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-dark-text group-hover:text-navy transition-colors duration-200 mb-4 max-w-2xl">
                  {featured.title}
                </h2>
                <p className="text-muted leading-relaxed max-w-2xl mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-navy">Read Article</span>
                  <ArrowRight className="w-4 h-4 text-navy transition-transform duration-200 group-hover:translate-x-[3px]" />
                </div>
              </Link>
            </AnimatedSection>
          </Container>
        </section>
      )}

      {/* Article Grid */}
      <section className="py-[clamp(60px,10vw,120px)] bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {rest.map((article, i) => (
              <AnimatedSection key={article.slug} delay={i * 0.08}>
                <Link
                  href={`/insights/${article.slug}`}
                  className="group block bg-off-white hover:bg-light-gray transition-colors duration-300 p-6 md:p-8 h-full"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-muted">{article.category}</span>
                    <span className="text-xs text-muted">•</span>
                    <span className="text-xs text-muted">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-dark-text group-hover:text-navy transition-colors duration-200 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-auto">
                    <span className="text-sm font-medium text-navy">Read</span>
                    <ArrowRight className="w-3.5 h-3.5 text-navy transition-transform duration-200 group-hover:translate-x-[3px]" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
