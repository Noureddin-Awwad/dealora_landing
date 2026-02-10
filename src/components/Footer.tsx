import Container from "./Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-mist">
      <Container className="flex flex-col gap-6 py-10 text-sm text-slate sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-ink">© Dealora {year}</p>
          <p className="mt-2 text-xs text-steel">
            Some links may be affiliate links. Prices and availability may change.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a href="/privacy" className="focus-ring hover:text-ink">
            Privacy
          </a>
          <a href="/terms" className="focus-ring hover:text-ink">
            Terms
          </a>
        </div>
      </Container>
    </footer>
  );
}
