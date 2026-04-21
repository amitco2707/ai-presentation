import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  term: string;
  short: string;
  description: string;
  delay?: number;
  active: boolean;
}

/**
 * Glossary card with hover flip. Front shows icon + term + short tagline.
 * Hovering reveals a full definition with a subtle scale + glow.
 */
export default function GlossaryCard({
  icon: Icon,
  term,
  short,
  description,
  delay = 0,
  active,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay, type: "spring", damping: 20, stiffness: 100 }}
      whileHover={{ y: -6 }}
      className="group relative h-full rounded-2xl border border-line bg-elevated/60 backdrop-blur-xl p-6 overflow-hidden cursor-pointer transition-all duration-500 hover:border-brand-orange/50 hover:shadow-glow-sm hover:bg-elevated/90"
    >
      {/* Ambient glow */}
      <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-brand-orange/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <motion.div
            className="h-11 w-11 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-amber group-hover:bg-brand-orange/20 group-hover:border-brand-orange/40 transition-all"
            whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.5 } }}
          >
            <Icon size={20} strokeWidth={1.75} />
          </motion.div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            term
          </span>
        </div>

        <h3 className="text-xl font-bold text-cream mb-1 tracking-tight">{term}</h3>
        <p className="text-xs text-brand-amber/80 uppercase tracking-wider mb-3 font-medium">
          {short}
        </p>
        <p className="text-sm text-cream/80 leading-relaxed flex-1 group-hover:text-cream transition-colors duration-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
