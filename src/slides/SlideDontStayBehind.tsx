import { motion } from "framer-motion";
import { AlertTriangle, Handshake, TrendingUp } from "lucide-react";
import SlideShell from "../components/SlideShell";

interface Props {
  active: boolean;
}

const TENETS = [
  {
    icon: AlertTriangle,
    n: "01",
    headline: "It's not optional anymore",
    body: "Every serious competitor is already doing the work of finding out where AI fits into their stack. Opting out is the decision — and it's a costly one.",
  },
  {
    icon: Handshake,
    n: "02",
    headline: "It's a partner, not a threat",
    body: "The people winning with AI aren't being replaced by it — they're the ones who learned to delegate to it. The job changes. The person doing the job changes with it.",
  },
  {
    icon: TrendingUp,
    n: "03",
    headline: "Core component, not 'extra'",
    body: "AI belongs in the center of the product and the process — not on a settings page. Companies that treat it as a side feature will ship side-feature results.",
  },
];

export default function SlideDontStayBehind({ active }: Props) {
  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 18 — The manifesto"
      title={
        <>
          Don't <span className="gradient-text">stay behind.</span>
        </>
      }
      subtitle="A field this fast doesn't wait. In 18 months, 'we're exploring AI' will sound like 'we're exploring the internet' did in 2001."
    >
      <div className="space-y-6">
        {/* Hero statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, type: "spring", damping: 22 }}
          className="relative p-7 md:p-9 rounded-2xl border border-brand-orange/50 bg-gradient-to-br from-brand-orange/15 via-brand-rust/5 to-transparent overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-orange/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-40 w-40 bg-brand-amber/15 blur-3xl rounded-full" />

          <div className="relative">
            <div className="font-mono text-[10px] uppercase tracking-widest text-brand-amber mb-4">
              the thesis
            </div>
            <p className="text-2xl md:text-4xl font-bold text-cream leading-tight tracking-tight">
              AI isn't a <span className="text-muted/80 line-through">tool to resist.</span>{" "}
              <span className="gradient-text">It's a partner to adopt —</span> and the window to
              start is closing fast.
            </p>
          </div>
        </motion.div>

        {/* Three tenets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TENETS.map((t, i) => (
            <motion.div
              key={t.n}
              initial={{ opacity: 0, y: 30 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.55 + i * 0.12, type: "spring", damping: 22, stiffness: 100 }}
              whileHover={{ y: -4 }}
              className="group relative p-6 rounded-2xl border border-line bg-elevated hover:border-brand-orange/50 hover:shadow-glow-sm transition-all overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-brand-orange/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-11 w-11 rounded-xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-brand-amber">
                    <t.icon size={20} strokeWidth={1.75} />
                  </div>
                  <span className="font-mono text-4xl font-black text-line/70 tracking-tighter leading-none">
                    {t.n}
                  </span>
                </div>

                <h3 className="text-xl md:text-[22px] font-bold text-cream mb-2 tracking-tight leading-tight">
                  {t.headline}
                </h3>
                <p className="text-sm text-muted leading-relaxed group-hover:text-cream/80 transition-colors flex-1">
                  {t.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing stamp */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.15 }}
          className="flex items-center justify-center gap-4 pt-2 font-mono text-xs md:text-sm text-muted"
        >
          <span className="h-[1px] w-16 bg-line" />
          <span className="tracking-widest uppercase text-brand-amber">
            adopt · delegate · compound
          </span>
          <span className="h-[1px] w-16 bg-line" />
        </motion.div>
      </div>
    </SlideShell>
  );
}
