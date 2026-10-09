import { Smartphone, Globe, CalendarCheck, Bike, Settings2, Zap } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: Smartphone,
    title: "Aplicativos",
    description: "Aplicativos personalizados para diferentes necessidades do seu negócio.",
  },
  {
    icon: Globe,
    title: "Sites",
    description: "Sites modernos, rápidos e responsivos que representam sua marca.",
  },
  {
    icon: CalendarCheck,
    title: "Agendamentos",
    description: "Sistemas de reservas para barbearias, salões, clínicas e outros negócios.",
  },
  {
    icon: Bike,
    title: "Delivery",
    description: "Pedidos online, cardápios digitais e delivery para restaurantes.",
  },
  {
    icon: Settings2,
    title: "Sistemas personalizados",
    description: "Soluções desenvolvidas especificamente para cada empresa.",
  },
  {
    icon: Zap,
    title: "Automação",
    description: "Automatização de tarefas e processos para ganhar tempo e eficiência.",
  },
];

export default function Solutions() {
  return (
    <section id="solucoes" className="py-28 bg-liv-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-liv-gold text-sm font-semibold tracking-widest">
            SOLUÇÕES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Soluções pensadas para o seu negócio.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}