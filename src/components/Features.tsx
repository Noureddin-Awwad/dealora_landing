import Section from "./Section";

const features = [
  {
    title: "Multi-merchant deal aggregation",
    text: "Aggregate offers from multiple online merchants into one view."
  },
  {
    title: "Price comparison experience",
    text: "Compare pricing and availability across merchants in seconds."
  },
  {
    title: "Category browsing",
    text: "Navigate deals by category with clear, structured filters."
  },
  {
    title: "Trending & hot deals",
    text: "Highlighted deals are updated frequently for timely discovery."
  },
  {
    title: "Mobile-first experience",
    text: "Designed for fast browsing on mobile and desktop." 
  },
  {
    title: "Trusted links to merchants",
    text: "Direct users to official merchant listings with confidence."
  }
];

export default function Features() {
  return (
    <Section
      id="features"
      eyebrow="Features"
      title="Built for clarity, speed, and credibility"
      description="A modern platform designed to make deal discovery trustworthy and simple."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="section-card rounded-2xl p-6 transition hover:-translate-y-1"
          >
            <h3 className="text-lg font-semibold text-ink">{feature.title}</h3>
            <p className="mt-3 text-sm text-slate">{feature.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
