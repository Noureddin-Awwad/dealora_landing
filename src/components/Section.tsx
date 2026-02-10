import { ReactNode } from "react";
import Container from "./Container";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children
}: SectionProps) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-sm uppercase tracking-[0.2em] text-steel">{eyebrow}</p>
          ) : null}
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl">{title}</h2>
          {description ? (
            <p className="mt-4 text-base text-slate sm:text-lg">{description}</p>
          ) : null}
        </div>
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}
