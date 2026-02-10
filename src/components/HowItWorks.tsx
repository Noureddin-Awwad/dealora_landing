import Section from "./Section";

const steps = [
  {
    title: "Discover deals",
    text: "Browse curated and trending offers across key categories."
  },
  {
    title: "Compare offers",
    text: "View side-by-side pricing from multiple trusted merchants."
  },
  {
    title: "Shop with confidence",
    text: "Use verified links that take you directly to merchant sites."
  }
];

export default function HowItWorks() {
  return (
    <Section
      id="how"
      eyebrow="How it works"
      title="A streamlined path from discovery to checkout"
      description="Dealora helps users locate the best available deals with clarity and speed."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="section-card rounded-2xl p-6 transition hover:-translate-y-1"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-steel">
              Step {index + 1}
            </p>
            <h3 className="mt-4 text-xl font-semibold text-ink">{step.title}</h3>
            <p className="mt-3 text-sm text-slate">{step.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
