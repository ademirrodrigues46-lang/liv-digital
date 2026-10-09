import { Scissors, Stethoscope, Sparkles, UtensilsCrossed, Pizza, Beef } from "lucide-react";
import SegmentCard from "./SegmentCard";

const segments = [
  { icon: Scissors, name: "BARBEARIAS" },
  { icon: Stethoscope, name: "CLÍNICAS" },
  { icon: Sparkles, name: "SALÕES" },
  { icon: UtensilsCrossed, name: "RESTAURANTES" },
  { icon: Pizza, name: "PIZZARIAS" },
  { icon: Beef, name: "HAMBURGUERIAS" },
];

export default function Segments() {
  return (
    <section id="segmentos" className="py-28 bg-liv-carbon">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-liv-gold text-sm font-semibold tracking-widest">
            SEGMENTOS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Tecnologia para diferentes negócios.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 mb-16">
          {segments.map((s, i) => (
            <SegmentCard key={s.name} {...s} delay={i * 70} />
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center bg-liv-graphite/40 border border-white/5 rounded-2xl p-10">
          <h3 className="text-xl font-semibold text-white mb-3">
            Seu negócio é diferente?
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Desenvolvemos soluções personalizadas para diferentes segmentos,
            não importa o tamanho ou a complexidade do seu negócio.
          </p>
        </div>
      </div>
    </section>
  );
}