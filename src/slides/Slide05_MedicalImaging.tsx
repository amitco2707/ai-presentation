import { motion } from "framer-motion";
import { Scan, ShieldCheck, Timer } from "lucide-react";
import SlideShell from "../components/SlideShell";

interface Props {
  active: boolean;
}

const STATS = [
  {
    icon: Scan,
    label: "Reads every pixel",
    body: "The network scans a scan the way a radiologist scans — except it looks at every pixel, every time.",
  },
  {
    icon: Timer,
    label: "Flags what matters",
    body: "It highlights regions a doctor should review, so nothing important gets missed.",
  },
  {
    icon: ShieldCheck,
    label: "Second set of eyes",
    body: "It doesn't replace the doctor — it supports them. Faster triage, fewer errors.",
  },
];

export default function Slide05_MedicalImaging({ active }: Props) {
  return (
    <SlideShell
      active={active}
      eyebrow="Chapter 06 — Medical Imaging"
      title={<>A network that <span className="gradient-text">looks at scans.</span></>}
      subtitle="One concrete example: Neural Networks helping clinicians spot features in medical imaging."
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        {/* Stylized scan visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.3 }}
          className="relative aspect-square max-w-[480px] mx-auto w-full rounded-3xl border border-line bg-gradient-to-br from-[#141414] to-[#0a0a0a] overflow-hidden"
        >
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <radialGradient id="scanGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#2a2520" />
                <stop offset="60%" stopColor="#141010" />
                <stop offset="100%" stopColor="#080505" />
              </radialGradient>
              <filter id="softBlur">
                <feGaussianBlur stdDeviation="3" />
              </filter>
            </defs>

            {/* Body/organ silhouette */}
            <ellipse cx="200" cy="210" rx="140" ry="165" fill="url(#scanGrad)" />
            <ellipse
              cx="200"
              cy="210"
              rx="140"
              ry="165"
              fill="none"
              stroke="#3a2a20"
              strokeWidth="1"
            />

            {/* Internal structures (abstract lungs-ish) */}
            <path
              d="M 160 150 Q 130 200 140 280 Q 160 300 180 290 Q 175 200 175 160 Z"
              fill="#1a1410"
              stroke="#3a2a20"
              strokeWidth="1"
              filter="url(#softBlur)"
              opacity="0.9"
            />
            <path
              d="M 240 150 Q 270 200 260 280 Q 240 300 220 290 Q 225 200 225 160 Z"
              fill="#1a1410"
              stroke="#3a2a20"
              strokeWidth="1"
              filter="url(#softBlur)"
              opacity="0.9"
            />

            {/* Texture dots */}
            {Array.from({ length: 80 }).map((_, i) => (
              <circle
                key={i}
                cx={100 + Math.random() * 200}
                cy={80 + Math.random() * 260}
                r={0.6 + Math.random() * 1.2}
                fill="#F4E4D0"
                opacity={0.1 + Math.random() * 0.2}
              />
            ))}

            {/* AI detection regions */}
            {active && (
              <>
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <motion.rect
                    x="155"
                    y="195"
                    width="45"
                    height="40"
                    rx="4"
                    fill="none"
                    stroke="#D97757"
                    strokeWidth="2"
                    strokeDasharray="4 3"
                    animate={{ strokeDashoffset: [0, -14] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <text x="155" y="188" fontSize="10" fill="#F0B27A" className="font-mono">
                    REGION 01 · 94%
                  </text>
                </motion.g>
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.7 }}
                >
                  <motion.rect
                    x="235"
                    y="220"
                    width="35"
                    height="35"
                    rx="4"
                    fill="none"
                    stroke="#F0B27A"
                    strokeWidth="2"
                    strokeDasharray="4 3"
                    animate={{ strokeDashoffset: [0, -14] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <text x="235" y="213" fontSize="10" fill="#F0B27A" className="font-mono">
                    REGION 02 · 87%
                  </text>
                </motion.g>

                {/* Crosshairs */}
                <motion.line
                  x1="0"
                  y1="215"
                  x2="400"
                  y2="215"
                  stroke="#D97757"
                  strokeWidth="0.5"
                  strokeDasharray="2 6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  transition={{ delay: 0.6 }}
                />
                <motion.line
                  x1="200"
                  y1="0"
                  x2="200"
                  y2="400"
                  stroke="#D97757"
                  strokeWidth="0.5"
                  strokeDasharray="2 6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  transition={{ delay: 0.6 }}
                />

                {/* Scanning line */}
                <motion.line
                  x1="50"
                  y1="50"
                  x2="350"
                  y2="50"
                  stroke="#F0B27A"
                  strokeWidth="1.5"
                  initial={{ y1: 50, y2: 50, opacity: 0.8 }}
                  animate={{ y1: [50, 370, 50], y2: [50, 370, 50] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </>
            )}
          </svg>

          {/* HUD overlay */}
          <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-brand-amber/80 space-y-1">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-pulse" />
              NEURAL NET · ACTIVE
            </div>
            <div className="text-muted">MODEL v4.2 · INFERENCE</div>
          </div>
          <div className="absolute bottom-4 right-4 font-mono text-[10px] tracking-widest text-muted">
            SCAN ID · 7F3A9C
          </div>
        </motion.div>

        {/* Bullet points */}
        <div className="space-y-5">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: 30 }}
              animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.5 + i * 0.15, type: "spring", damping: 22 }}
              className="flex gap-4 p-5 rounded-xl border border-line/60 bg-elevated/40 hover:border-brand-orange/40 hover:bg-elevated/70 transition-all"
            >
              <div className="shrink-0 h-11 w-11 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center">
                <s.icon size={18} className="text-brand-amber" strokeWidth={1.75} />
              </div>
              <div>
                <h4 className="font-semibold text-cream mb-1">{s.label}</h4>
                <p className="text-sm text-muted leading-relaxed">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
