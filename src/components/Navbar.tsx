import Container from "./Container";

const navItems = [
  { label: "How it works", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-mist/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Dealora logo" className="h-8 w-auto" />
          <span className="text-lg font-semibold tracking-wide">Dealora</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="focus-ring hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <span className="badge rounded-full px-3 py-1 text-xs font-semibold">
            Coming soon
          </span>
        </div>
      </Container>
      <div className="border-t border-black/5 md:hidden">
        <Container className="flex items-center justify-center gap-6 py-2 text-sm text-slate">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="focus-ring hover:text-ink">
              {item.label}
            </a>
          ))}
        </Container>
      </div>
    </header>
  );
}
