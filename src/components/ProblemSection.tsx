import { CalendarX, MessageSquareOff, FileWarning, GlobeLock, UserX } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const problems = [
  { icon: CalendarX, label: "Agendamentos desorganizados" },
  { icon: MessageSquareOff, label: "Pedidos perdidos no WhatsApp" },
  { icon: FileWarning, label: "Processos manuais e repetitivos" },
  { icon: GlobeLock, label: "Falta de presença digital" },
  { icon: UserX, label: "Dificuldade em acompanhar clientes" },
];

export default function ProblemSection() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="py-28 bg-liv-carbon relative">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 text-center reveal ${
          visible ? "visible" : ""
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
          Seu negócio merece mais do que o{" "}
          <span className="text-liv-gold">básico.</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed">
          Muitos negócios ainda dependem de processos manuais, mensagens
          espalhadas pelo WhatsApp e ferramentas que não foram feitas para
          suas necessidades.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-16">
          {problems.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="bg-liv-graphite/60 border border-white/5 rounded-2xl p-6 card-hover"
            >
              <Icon className="text-liv-gold/80 mx-auto mb-4" size={28} />
              <p className="text-sm text-gray-300">{label}</p>
            </div>
          ))}
        </div>

        <div className="inline-block px-8 py-4 rounded-2xl border border-liv-gold/30 bg-liv-gold/5">
          <p className="text-lg sm:text-xl font-semibold text-gradient-gold">
            A tecnologia certa simplifica tudo.
          </p>
        </div>
      </div>
    </section>
  );
}