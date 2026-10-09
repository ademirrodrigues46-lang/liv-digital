import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section id="contato" className="relative py-28 bg-liv-carbon overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-liv-gold/10 rounded-full blur-[140px]" />

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Tem uma ideia?
          <br />
          <span className="text-gradient-gold">
            Vamos transformar em tecnologia.
          </span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Conte-nos o que você precisa e vamos encontrar a melhor solução
          para o seu negócio.
        </p>

        <a
          href="https://wa.me/5586995666751"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-liv-gold text-liv-black font-semibold hover:bg-liv-goldLight hover:shadow-gold transition-all duration-300"
        >
          <MessageCircle size={20} />
          Falar com a LIV Digital
        </a>
      </div>
    </section>
  );
}