import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./logo";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Segmentos", href: "#segmentos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-liv-black/90 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <Logo className="h-11 w-11 rounded-full" />
          <span className="font-semibold tracking-wide text-white text-lg hidden sm:block">
            LIV <span className="text-liv-gold">Digital</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-gray-300 hover:text-liv-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-liv-gold text-liv-black text-sm font-semibold hover:bg-liv-goldLight hover:shadow-goldSm transition-all duration-300"
        >
          Solicitar projeto
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mt-4 mx-6 glass rounded-2xl p-6 animate-fade-in">
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-200 text-base hover:text-liv-gold transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-6 block text-center px-5 py-3 rounded-full bg-liv-gold text-liv-black font-semibold"
          >
            Solicitar projeto
          </a>
        </div>
      )}
    </header>
  );
}