import type { LucideIcon } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: ServiceCardProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${
        visible ? "visible" : ""
      } group relative overflow-hidden rounded-2xl border border-white/5 bg-liv-graphite/50 p-8 card-hover`}
    >
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-liv-gold/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-liv-gold/10 transition-colors group-hover:bg-liv-gold/20">
        <Icon className="text-liv-gold" size={26} />
      </div>

      <h3 className="relative mb-3 text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="relative text-sm leading-relaxed text-gray-400">
        {description}
      </p>
    </div>
  );
}