import { Instagram, MessageCircle } from "lucide-react";
import Logo from "./logo";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Segmentos", href: "#segmentos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="bg-liv-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo className="h-11 w-11 rounded-full" />
              <span className="text-white font-semibold">LIV Digital</span>
            </div>
            <p className="text-gray-500 text-sm">
              Tecnologia que transforma negócios.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">
              Navegação
            </h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-gray-500 text-sm hover:text-liv-gold transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">
              Redes sociais
            </h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/livdigital.br"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-liv-gold/50 hover:text-liv-gold transition-colors text-gray-400"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/5586995666751"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-liv-gold/50 hover:text-liv-gold transition-colors text-gray-400"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">
              Contato
            </h4>
            <p className="text-gray-500 text-sm">livdigital.contato@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-center">
          <p className="text-gray-600 text-xs">
            © 2026 LIV Digital. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}