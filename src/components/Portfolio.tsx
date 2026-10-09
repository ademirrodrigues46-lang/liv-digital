import { CalendarCheck, Bike, Menu as MenuIcon } from "lucide-react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    icon: CalendarCheck,
    name: "LIV Booking",
    description: "Sistema de agendamento para barbearias, salões e clínicas.",
    tags: ["Agendamento", "Web App", "Dashboard"],
  },
  {
    icon: Bike,
    name: "LIV Delivery",
    description: "Sistema de pedidos e delivery para restaurantes e pizzarias.",
    tags: ["Pedidos", "Delivery", "Mobile"],
  },
  {
    icon: MenuIcon,
    name: "LIV Menu",
    description: "Cardápio digital moderno e interativo para o seu negócio.",
    tags: ["Cardápio Digital", "QR Code", "Web"],
  },
];

export default function Portfolio() {
  return (
    <section id="projetos" className="py-28 bg-liv-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-liv-gold text-sm font-semibold tracking-widest">
            PROJETOS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Produtos que já estamos construindo.
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-4 text-sm">
            Projetos conceituais desenvolvidos pela LIV Digital. Em breve,
            cases reais de clientes entrarão aqui.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} {...p} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}