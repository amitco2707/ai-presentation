import { motion } from "framer-motion";
import SlideShell from "../components/SlideShell";

interface Props {
  active: boolean;
}

const PARTS = [
  {
    number: "01",
    title: "The Foundations",
    color: "#F0B27A",
    topics: ["What is AI — one clean definition", "The timeline that changed everything", "Neural networks demystified", "Terminology you'll actually use"],
  },
  {
    number: "02",
    title: "The Intelligence Engine",
    color: "#D97757",
    topics: ["How LLMs predict the next word", "Why they hallucinate — and when to trust them", "From chatbot to autonomous agent", "The shift to Agentic AI"],
  },
  {
    number: "03",
    title: "The Future of Work",
    color: "#B8623A",
    topics: ["Anthropic & the safety-first bet", "Claude Code — the terminal mechanic", "Claude Desktop — the screen-aware co-pilot", "Real integrations you can use today"],
  },
];

export default function Slide02_Roadmap({ active }: Props) {
  return (
    <SlideShell
      active={active}
      eyebrow="Roadmap"
      title={<>Three acts. <span className="gradient-text">One arc.</span></>}
      subtitle="We start with concepts, move to mechanics, and end with tools you can put to work tomorrow."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {PARTS.map((part, i) => (
          <motion.div
            key={part.number}
            initial={{ opacity: 0, y: 24 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ delay: 0.3 + i * 0.15, type: "spring", damping: 22, stiffness: 110 }}
            className="relative p-5 md:p-6 rounded-2xl border border-[#2a2825] bg-[#141414] overflow-hidden flex flex-col"
          >
            {/* Background number watermark */}
            <div
              className="absolute -bottom-4 -right-3 font-mono font-black text-[7rem] leading-none select-none pointer-events-none"
              style={{ color: part.color, opacity: 0.06 }}
            >
              {part.number}
            </div>

            {/* Glow accent */}
            <div
              className="absolute -top-10 -left-10 h-28 w-28 rounded-full blur-3xl opacity-20"
              style={{ backgroundColor: part.color }}
            />

            <div className="relative">
              {/* Part badge */}
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="font-mono text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full border"
                  style={{
                    color: part.color,
                    borderColor: part.color + "40",
                    backgroundColor: part.color + "12",
                  }}
                >
                  Part {part.number}
                </span>
              </div>

              <h3
                className="text-xl md:text-2xl font-bold tracking-tight mb-4 leading-tight"
                style={{ color: "#ffffff" }}
              >
                {part.title}
              </h3>

              <ul className="space-y-2.5">
                {part.topics.map((topic, j) => (
                  <motion.li
                    key={topic}
                    initial={{ opacity: 0, x: -8 }}
                    animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                    transition={{ delay: 0.55 + i * 0.15 + j * 0.07 }}
                    className="flex items-start gap-2.5 text-sm"
                    style={{ color: "#c9c3ba" }}
                  >
                    <span
                      className="mt-1.5 h-1 w-1 rounded-full shrink-0"
                      style={{ backgroundColor: part.color }}
                    />
                    {topic}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-5 flex items-center justify-center gap-3 font-mono text-xs"
        style={{ color: "#c9c3ba" }}
      >
        <span className="h-[1px] w-12 bg-[#2a2825]" />
        <span>
          no prerequisites — just{" "}
          <span style={{ color: "#F0B27A" }}>curiosity and a browser</span>
        </span>
        <span className="h-[1px] w-12 bg-[#2a2825]" />
      </motion.div>
    </SlideShell>
  );
}
