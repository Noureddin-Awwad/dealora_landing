import Container from "@/components/Container";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-mist text-ink">
      <Container className="py-16 sm:py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-steel">Privacy</p>
        <h1 className="mt-3 font-heading text-3xl sm:text-4xl">Privacy Policy</h1>
        <p className="mt-6 text-slate">
          Dealora values transparency and privacy. This site does not use tracking pixels or ad
          scripts. If you contact us, we will only use your information to respond to your request
          and manage communications related to Dealora.
        </p>
      </Container>
    </main>
  );
}
