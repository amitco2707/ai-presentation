import { motion } from "framer-motion";
import { Globe, Brain, Users, Zap } from "lucide-react";
import SlideShell from "../components/SlideShell";

interface Props {
  active: boolean;
}

const IMPACTS = [
  {
    icon: Users,
    label: "Accessibility",
    body: "The first public LLM. In five days, one million people were talking to AI — no PhD, no API key, no install.",
  },
  {
    icon: Brain,
    label: "Reasoning",
    body: "Models went from autocomplete to deliberation — chain-of-thought turned 'guess the word' into 'work the problem'.",
  },
  {
    icon: Globe,
    label: "Global shift",
    body: "Every country, every industry, every classroom started asking: what does my work look like with AI in it?",
  },
  {
    icon: Zap,
    label: "New baseline",
    body: "Release cadence went from years to weeks. 'State of the art' is a moving target now — not a milestone.",
  },
];

export default function SlidePostChatGPT({ active }: Props) {
  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 03 — Post-ChatGPT"
      title={<>One release. <span className="gradient-text">A global shift.</span></>}
      subtitle="November 2022 — the first public LLM launched. AI stopped being a research topic and became a tool anyone could hold."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {IMPACTS.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 20 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 + i * 0.12, type: "spring", damping: 22 }}
            whileHover={{ y: -4 }}
            className="group p-5 md:p-6 rounded-xl border border-[#2a2825] bg-[#141414] hover:border-brand-orange/50 hover:shadow-glow-sm transition-all overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-11 w-11 rounded-lg bg-brand-orange/15 border border-brand-orange/40 flex items-center justify-center text-brand-amber shrink-0">
                <c.icon size={20} strokeWidth={1.75} />
              </div>
              <h4
                className="text-lg md:text-xl font-bold tracking-tight"
                style={{ color: "#ffffff" }}
              >
                {c.label}
              </h4>
            </div>
            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: "#F4E4D0" }}
            >
              {c.body}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: 1.05 }}
        className="mt-5 p-4 md:p-5 rounded-xl border border-brand-orange/40 bg-brand-orange/10"
      >
        <p
          className="text-sm md:text-base leading-relaxed"
          style={{ color: "#ffffff" }}
        >
          <span style={{ color: "#F0B27A", fontWeight: 600 }}>The bottom line — </span>
          the first public LLM didn't just launch a product. It rewired public expectations for what software should be able to do.
        </p>
      </motion.div>
    </SlideShell>
  );
}
