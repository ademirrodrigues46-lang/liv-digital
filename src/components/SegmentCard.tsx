import type { LucideIcon } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

interface SegmentCardProps {
  icon: LucideIcon;
  name: string;
  delay?: number;
}

export default function SegmentCard({ icon: Icon, name, delay = 0 }: SegmentCardProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${
        visible ? "visible" : ""
      } flex flex-col items-center justify-center gap-4 bg-liv-graphite/40 border border-white/5 rounded-2xl py-10 px-4 card-hover group`}
    >
      <div className="w-14 h-14 rounded-full border border-liv-gold/20 flex items-center justify-center group-hover:border-liv-gold/60 group-hover:bg-liv-gold/10 transition-all duration-300">
        <Icon className="text-liv-gold" size={24} />
      </div>
      <p className="text-white font-semibold text-sm tracking-wide">{name}</p>
    </div>
  );
}