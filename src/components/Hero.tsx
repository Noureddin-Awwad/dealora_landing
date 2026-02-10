import Container from "./Container";

export default function Hero() {
  return (
    <section className="pb-16 pt-14 sm:pb-20 sm:pt-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-steel">
              Trusted deal discovery
            </p>
            <h1 className="mt-4 font-heading text-4xl leading-tight sm:text-5xl">
              Smart deal discovery & price comparison
            </h1>
            <p className="mt-6 text-base text-slate sm:text-lg">
              Dealora is a deal discovery and comparison platform that aggregates offers from multiple online merchants. Users can browse, compare prices, and discover the best available deals across categories via web and mobile app.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#1a54da]"
              >
                Get updates
              </a>
              <a
                href="#how"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-black/20"
              >
                How it works
              </a>
            </div>
          </div>
          <div className="section-card relative overflow-hidden rounded-3xl p-8 sm:p-10">
            <div className="absolute right-6 top-6 h-28 w-28 rounded-full bg-accentSoft/80 blur-2xl" />
            <div className="absolute bottom-8 left-6 h-24 w-24 rounded-full bg-[#f8edc7] blur-2xl" />
            <div className="relative">
              <p className="text-sm uppercase tracking-[0.2em] text-steel">Snapshot</p>
              <h2 className="mt-4 font-heading text-2xl">What Dealora delivers</h2>
              <ul className="mt-6 space-y-4 text-sm text-slate">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-accent" />
                  Centralized deal aggregation across trusted merchants.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-accent" />
                  Price comparison insights with clear category navigation.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-accent" />
                  Mobile-first experience built for quick deal discovery.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
