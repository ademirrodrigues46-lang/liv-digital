import { MessageCircle, Target, Code2, Rocket } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Conversa",
    description: "Entendemos seu negócio e seus objetivos.",
  },
  {
    number: "02",
    icon: Target,
    title: "Estratégia",
    description: "Definimos a melhor solução tecnológica.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Desenvolvimento",
    description: "Construímos sua plataforma, sistema ou aplicativo.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lançamento",
    description: "Colocamos sua solução no ar.",
  },
];

export default function HowItWorks() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="py-28 bg-liv-black relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-liv-gold/10 to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-liv-gold text-sm font-semibold tracking-widest">
            COMO FUNCIONA
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Da ideia ao produto.
          </h2>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, i) => (
            <div
              key={step.number}
              style={{ transitionDelay: `${i * 120}ms` }}
              className={`reveal ${visible ? "visible" : ""} relative text-center lg:text-left`}
            >
              <div className="flex lg:flex-col items-center lg:items-start gap-4 mb-5">
                <span className="text-4xl font-bold text-liv-gold/20">
                  {step.number}
                </span>
                <div className="w-12 h-12 rounded-xl bg-liv-gold/10 flex items-center justify-center">
                  <step.icon className="text-liv-gold" size={20} />
                </div>
              </div>
              <h3 className="text-white font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}