import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import CategoriesStrip from "@/components/CategoriesStrip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-mist text-ink">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <CategoriesStrip />
        <section id="contact" className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="section-card rounded-3xl px-8 py-12 sm:px-12">
              <p className="text-sm uppercase tracking-[0.2em] text-steel">Contact</p>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl">Contact</h2>
              <p className="mt-4 text-base text-slate sm:text-lg">
                For partnerships and early access: contact@dealoraapp.com
              </p>
              <a
                href="mailto:contact@dealoraapp.com"
                className="focus-ring mt-8 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-slate"
                aria-label="Email Dealora"
              >
                Email us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

