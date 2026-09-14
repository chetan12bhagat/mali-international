import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center pt-20 bg-off-white">
      <Container>
        <div className="text-center max-w-lg mx-auto">
          <span className="text-6xl md:text-8xl font-bold text-gold/20 block mb-4">404</span>
          <h1 className="text-2xl md:text-3xl font-semibold text-dark-text mb-4">
            Page not found.
          </h1>
          <p className="text-muted mb-8 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Button href="/" size="lg">
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
