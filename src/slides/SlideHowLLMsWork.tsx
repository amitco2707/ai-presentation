import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import SlideShell from "../components/SlideShell";

interface Props {
  active: boolean;
}

const PROMPT = ["The", "cat", "jumped", "over", "the"];

const PREDICTIONS = [
  { word: "fence", pct: 85, color: "#F0B27A" },
  { word: "wall",  pct: 10, color: "#D97757" },
  { word: "moon",  pct: 5,  color: "#8a8a8a" },
];

export default function SlideHowLLMsWork({ active }: Props) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!active) { setRevealed(false); return; }
    const t = setTimeout(() => setRevealed(true), 2000);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <SlideShell
      active={active}
      part="Part 2: The Intelligence Engine"
      eyebrow="Chapter 07 — How LLMs Work"
      title={<>Not thinking. <span className="gradient-text">Predicting.</span></>}
      subtitle="An LLM is a probabilistic model — it calculates which word is statistically most likely to come next, over and over, billions of times."
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-5 items-start">

        {/* ── Left column ── */}
        <div className="flex flex-col gap-4">

          {/* Token strip */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest mb-3" style={{ color: "#F0B27A" }}>
              Next Token Prediction
            </p>
            <div className="flex flex-wrap gap-2">
              {PROMPT.map((word, i) => (
                <motion.span
                  key={word + i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ delay: 0.35 + i * 0.1, type: "spring", damping: 20 }}
                  className="px-3 py-1.5 rounded-lg border font-mono text-sm font-semibold"
                  style={{ borderColor: "#2a2825", backgroundColor: "#141414", color: "#ffffff" }}
                >
                  {word}
                </motion.span>
              ))}

              {/* Predicted token slot */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={active ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.1 }}
                className="px-3 py-1.5 rounded-lg border font-mono text-sm font-semibold"
                style={{
                  borderColor: "#D97757",
                  backgroundColor: "rgba(217,119,87,0.1)",
                  minWidth: "3.5rem",
                  textAlign: "center",
                }}
              >
                <AnimatePresence mode="wait">
                  {revealed ? (
                    <motion.span key="word" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} style={{ color: "#F0B27A" }}>
                      fence
                    </motion.span>
                  ) : (
                    <motion.span key="cursor" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.9, repeat: Infinity }} style={{ color: "#D97757" }}>
                      _
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.span>
            </div>
          </div>

          {/* Probability bars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={active ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.2 }}
            className="rounded-xl border p-4 space-y-3"
            style={{ borderColor: "#2a2825", backgroundColor: "#141414" }}
          >
            <p className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: "#c9c3ba" }}>
              Model output — probability distribution
            </p>
            {PREDICTIONS.map((p, i) => (
              <div key={p.word} className="flex items-center gap-3">
                <span className="font-mono text-sm w-14 text-right shrink-0" style={{ color: "#F4E4D0" }}>
                  {p.word}
                </span>
                <div className="flex-1 h-4 rounded-full overflow-hidden" style={{ backgroundColor: "#1c1c1c" }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: p.color }}
                    initial={{ width: 0 }}
                    animate={active ? { width: `${p.pct}%` } : { width: 0 }}
                    transition={{ delay: 1.4 + i * 0.15, duration: 0.55, ease: "easeOut" }}
                  />
                </div>
                <span className="font-mono text-sm w-12 shrink-0 font-bold" style={{ color: p.color }}>
                  {p.pct}%
                </span>
              </div>
            ))}
          </motion.div>

          {/* Implication — directly beneath bars */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ delay: 2.0 }}
            className="rounded-xl border p-4"
            style={{ borderColor: "rgba(217,119,87,0.45)", backgroundColor: "rgba(217,119,87,0.08)" }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "#F4E4D0" }}>
              <span style={{ color: "#F0B27A", fontWeight: 600 }}>Implication: </span>
              LLMs can be confidently wrong because they don't know what they don't know.
              Human direction, context, and verification are always required.
            </p>
          </motion.div>

          {/* Cat + Fence illustration */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
            transition={{ delay: 2.6, type: "spring", damping: 22 }}
            className="mt-1"
          >
            <div style={{ height: 110 }} className="w-full">
              <svg
                viewBox="0 0 260 110"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Ground */}
                <line x1="10" y1="105" x2="250" y2="105" stroke="#2a2825" strokeWidth="1.5" />

                {/* ── FENCE (right side) ── */}
                {([152, 171, 190, 209] as number[]).map((px, i) => (
                  <motion.g
                    key={px}
                    initial={{ opacity: 0, y: 8 }}
                    animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                    transition={{ delay: 2.82 + i * 0.06, type: "spring", damping: 20 }}
                  >
                    {/* Pointed post top */}
                    <polygon
                      points={`${px},55 ${px + 3.5},45 ${px + 7},55`}
                      fill="#1a1510" stroke="#D97757" strokeWidth="1.5" strokeLinejoin="round"
                    />
                    {/* Post body */}
                    <rect x={px} y={55} width={7} height={50} rx={2}
                      fill="#1a1510" stroke="#D97757" strokeWidth="1.5" />
                  </motion.g>
                ))}

                {/* Fence rail — top */}
                <motion.rect
                  x={149} y={67} width={71} height={5} rx={2}
                  fill="#1a1510" stroke="#D97757" strokeWidth="1.5"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={active ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                  transition={{ delay: 3.08, duration: 0.32, ease: "easeOut" }}
                  style={{ transformOrigin: "149px 69px" }}
                />
                {/* Fence rail — bottom */}
                <motion.rect
                  x={149} y={85} width={71} height={5} rx={2}
                  fill="#1a1510" stroke="#D97757" strokeWidth="1.5"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={active ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                  transition={{ delay: 3.18, duration: 0.32, ease: "easeOut" }}
                  style={{ transformOrigin: "149px 87px" }}
                />

                {/* ── CAT (left side, facing right toward fence) ── */}
                <motion.g
                  initial={{ opacity: 0, x: -10 }}
                  animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 2.68, type: "spring", damping: 22, stiffness: 90 }}
                >
                  {/* Tail */}
                  <path
                    d="M42,96 Q24,74 33,51 Q37,43 45,49"
                    stroke="#D97757" strokeWidth="4.5" fill="none" strokeLinecap="round"
                  />

                  {/* Body */}
                  <ellipse cx="65" cy="90" rx="24" ry="17"
                    fill="#1a1510" stroke="#D97757" strokeWidth="1.5" />

                  {/* Head */}
                  <circle cx="83" cy="66" r="17"
                    fill="#1a1510" stroke="#D97757" strokeWidth="1.5" />

                  {/* Left ear */}
                  <polygon points="70,52 65,38 80,49"
                    fill="#1a1510" stroke="#D97757" strokeWidth="1.5" strokeLinejoin="round" />
                  <polygon points="71,51 67,43 79,49" fill="#D97757" opacity="0.4" />

                  {/* Right ear */}
                  <polygon points="87,51 96,37 103,50"
                    fill="#1a1510" stroke="#D97757" strokeWidth="1.5" strokeLinejoin="round" />
                  <polygon points="89,51 95,41 101,50" fill="#D97757" opacity="0.4" />

                  {/* Right eye — looking toward fence */}
                  <ellipse cx="91" cy="64" rx="4" ry="4.5" fill="#F0B27A" />
                  <circle cx="92" cy="64" r="2.6" fill="#0a0a0a" />
                  <circle cx="91.5" cy="63" r="1" fill="white" opacity="0.7" />

                  {/* Left eye */}
                  <ellipse cx="77" cy="64" rx="3.5" ry="4" fill="#F0B27A" />
                  <circle cx="78" cy="64" r="2.2" fill="#0a0a0a" />
                  <circle cx="77.5" cy="63" r="0.8" fill="white" opacity="0.7" />

                  {/* Nose */}
                  <path d="M81,72 L84,75 L87,72 Q84,70 81,72" fill="#D97757" />

                  {/* Mouth */}
                  <path d="M84,75 Q81,79 79,78" stroke="#D97757" strokeWidth="1" fill="none" strokeLinecap="round" />
                  <path d="M84,75 Q87,79 89,78" stroke="#D97757" strokeWidth="1" fill="none" strokeLinecap="round" />

                  {/* Whiskers — right side (toward fence) */}
                  <line x1="88" y1="70" x2="110" y2="66" stroke="#F0B27A" strokeWidth="1" opacity="0.6" />
                  <line x1="88" y1="72" x2="110" y2="72" stroke="#F0B27A" strokeWidth="1" opacity="0.6" />
                  <line x1="88" y1="74" x2="110" y2="78" stroke="#F0B27A" strokeWidth="1" opacity="0.6" />

                  {/* Whiskers — left side */}
                  <line x1="79" y1="70" x2="60" y2="67" stroke="#F0B27A" strokeWidth="1" opacity="0.6" />
                  <line x1="79" y1="72" x2="60" y2="72" stroke="#F0B27A" strokeWidth="1" opacity="0.6" />
                  <line x1="79" y1="74" x2="60" y2="78" stroke="#F0B27A" strokeWidth="1" opacity="0.6" />

                  {/* Paws */}
                  <ellipse cx="56" cy="104" rx="10" ry="4.5" fill="#1a1510" stroke="#D97757" strokeWidth="1.5" />
                  <ellipse cx="74" cy="105" rx="10" ry="4.5" fill="#1a1510" stroke="#D97757" strokeWidth="1.5" />
                </motion.g>

                {/* ── THINKING BUBBLES (rising from cat's head) ── */}

                {/* Bubble dot 1 — small */}
                <motion.circle
                  cx={100} cy={50} r={3.5}
                  fill="rgba(240,178,122,0.2)" stroke="#F0B27A" strokeWidth="1.2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 3.2, type: "spring", damping: 14, stiffness: 260 }}
                  style={{ transformOrigin: "100px 50px", transformBox: "fill-box" }}
                />

                {/* Bubble dot 2 — medium */}
                <motion.circle
                  cx={112} cy={38} r={5}
                  fill="rgba(240,178,122,0.2)" stroke="#F0B27A" strokeWidth="1.2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 3.4, type: "spring", damping: 14, stiffness: 260 }}
                  style={{ transformOrigin: "112px 38px", transformBox: "fill-box" }}
                />

                {/* Main thought bubble — fade-in wrapper */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={active ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 3.65, duration: 0.35 }}
                >
                  {/* Float loop wrapper */}
                  <motion.g
                    animate={active ? { y: [0, -4, 0] } : { y: 0 }}
                    transition={{
                      delay: 4.2,
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <circle cx={127} cy={22} r={13}
                      fill="rgba(240,178,122,0.15)" stroke="#F0B27A" strokeWidth="1.5" />
                    <text
                      x={127} y={27}
                      textAnchor="middle"
                      fontSize={14}
                      fontWeight="700"
                      fill="#F0B27A"
                      fontFamily="Inter, system-ui, sans-serif"
                    >?</text>
                  </motion.g>
                </motion.g>

              </svg>
            </div>
          </motion.div>
        </div>

        {/* ── Right column ── */}
        <div className="flex flex-col gap-4">

          {/* Statistical patterns card — number label removed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.45, type: "spring", damping: 22 }}
            className="flex gap-3 p-4 rounded-xl border"
            style={{ borderColor: "#2a2825", backgroundColor: "#141414" }}
          >
            <div>
              <h4 className="font-bold text-sm tracking-tight mb-1" style={{ color: "#ffffff" }}>
                Statistical patterns
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: "#F4E4D0" }}>
                The model reads trillions of words during training and encodes which words tend to follow which — as billions of numerical weights.
              </p>
            </div>
          </motion.div>

          {/* Hallucination card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.75, type: "spring", damping: 22 }}
            className="p-4 rounded-xl border"
            style={{ borderColor: "rgba(217,119,87,0.5)", backgroundColor: "#141414" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className="px-2 py-0.5 rounded font-mono text-[9px] uppercase tracking-widest font-bold"
                style={{ backgroundColor: "rgba(217,119,87,0.15)", color: "#F0B27A" }}
              >
                hallucination
              </span>
            </div>
            <h4 className="font-bold text-sm tracking-tight mb-2" style={{ color: "#ffffff" }}>
              Plausible ≠ Factual
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: "#F4E4D0" }}>
              Because the model optimises for the <em>most probable</em> next word — not the <em>most true</em> one — it has no internal "fact database" to check against.
              It can generate a fluent, confident answer that is completely wrong.
              That is a hallucination: statistically plausible, factually false.
            </p>
          </motion.div>

        </div>
      </div>
    </SlideShell>
  );
}
