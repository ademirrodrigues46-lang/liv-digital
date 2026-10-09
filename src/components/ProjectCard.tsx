import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

interface ProjectCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  tags: string[];
  conceptual?: boolean;
  delay?: number;
}

export default function ProjectCard({
  icon: Icon,
  name,
  description,
  tags,
  conceptual = true,
  delay = 0,
}: ProjectCardProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${
        visible ? "visible" : ""
      } group bg-liv-graphite/40 border border-white/5 rounded-2xl overflow-hidden card-hover`}
    >
      <div className="h-44 bg-gradient-to-br from-liv-graphiteLight to-liv-black flex items-center justify-center relative">
        <Icon className="text-liv-gold/70 group-hover:scale-110 transition-transform duration-500" size={48} />
        {conceptual && (
          <span className="absolute top-4 left-4 text-[10px] font-semibold tracking-widest bg-liv-black/70 border border-liv-gold/30 text-liv-gold px-3 py-1 rounded-full">
            PROJETO CONCEITUAL
          </span>
        )}
      </div>
      <div className="p-7">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-white font-semibold text-lg">{name}</h3>
          <ArrowUpRight
            size={18}
            className="text-gray-600 group-hover:text-liv-gold transition-colors"
          />
        </div>
        <p className="text-gray-400 text-sm mb-5 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] text-gray-400 border border-white/10 rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}