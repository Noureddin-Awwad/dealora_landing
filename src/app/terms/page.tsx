import Container from "@/components/Container";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-mist text-ink">
      <Container className="py-16 sm:py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-steel">Terms</p>
        <h1 className="mt-3 font-heading text-3xl sm:text-4xl">Terms of Use</h1>
        <p className="mt-6 text-slate">
          Dealora provides deal discovery and price comparison information from trusted merchants.
          Information is provided as-is and may change over time. By using the site, you agree not
          to misuse the content or represent Dealora as providing guarantees or endorsements beyond
          what is stated.
        </p>
      </Container>
    </main>
  );
}
