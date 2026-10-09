import { Ruler, MousePointerClick, Palette, TrendingUp } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const items = [
  { icon: Ruler, title: "Sob medida" },
  { icon: MousePointerClick, title: "Experiência do usuário" },
  { icon: Palette, title: "Design moderno" },
  { icon: TrendingUp, title: "Escalabilidade" },
];

export default function Differentials() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="py-28 bg-liv-carbon">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
          Não entregamos apenas <span className="text-liv-gold">código.</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-16">
          Entregamos soluções pensadas para resolver problemas reais.
        </p>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title }, i) => (
            <div
              key={title}
              style={{ transitionDelay: `${i * 100}ms` }}
              className={`reveal ${
                visible ? "visible" : ""
              } bg-liv-graphite/40 border border-white/5 rounded-2xl p-8 card-hover`}
            >
              <Icon className="text-liv-gold mx-auto mb-4" size={30} />
              <p className="text-white font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}