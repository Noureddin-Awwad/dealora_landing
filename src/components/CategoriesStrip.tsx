import Section from "./Section";

const categories = ["Electronics", "Fashion", "Home", "Beauty", "Travel"];

export default function CategoriesStrip() {
  return (
    <Section
      eyebrow="Categories"
      title="Popular categories"
      description="Explore a wide range of merchant offers across essential categories."
    >
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <span
            key={category}
            className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm"
          >
            {category}
          </span>
        ))}
      </div>
    </Section>
  );
}
