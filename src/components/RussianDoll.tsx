import { motion } from "framer-motion";

interface Props {
  active: boolean;
}

// SVG canvas is 420x420. Layers are concentric, with ~50px of clear padding
// on every side between each pair of rings — so the nesting reads at a glance.
const LAYERS = [
  {
    label: "Artificial Intelligence",
    short: "AI",
    description: "Machines doing tasks that usually need human intelligence.",
    x: 5,
    y: 5,
    size: 410,
    rx: 34,
    color: "#D97757",
    fill: "rgba(217,119,87,0.04)",
    labelY: 32, // short-code sits inside top edge, above the next ring
  },
  {
    label: "Machine Learning",
    short: "ML",
    description: "Systems that learn patterns from data.",
    x: 60,
    y: 60,
    size: 300,
    rx: 28,
    color: "#E89464",
    fill: "rgba(232,148,100,0.06)",
    labelY: 88,
  },
  {
    label: "Neural Networks",
    short: "NN",
    description: "Layers of connected nodes inspired by the brain.",
    x: 115,
    y: 115,
    size: 190,
    rx: 22,
    color: "#F0B27A",
    fill: "rgba(240,178,122,0.08)",
    labelY: 145,
  },
  {
    label: "Deep Learning",
    short: "DL",
    description: "Neural networks with many layers for complex tasks.",
    x: 170,
    y: 170,
    size: 80,
    rx: 14,
    color: "#FAD7A0",
    fill: "rgba(250,215,160,0.12)",
    labelY: 215, // centered inside the innermost ring
  },
];

/**
 * "Russian Doll" hierarchy — truly concentric rounded squares with clear
 * padding between rings. Short codes sit inside the top of each ring; a label
 * column to the right connects each descriptive label to its specific ring
 * via a leader line whose length matches that ring's relative size.
 */
export default function RussianDoll({ active }: Props) {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 w-full">
      {/* Concentric rings */}
      <svg
        viewBox="0 0 420 420"
        className="shrink-0 w-full max-w-[420px] h-auto"
        style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))" }}
      >
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FAD7A0" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FAD7A0" stopOpacity="0" />
          </radialGradient>
        </defs>

        {LAYERS.map((layer, i) => (
          <motion.g
            key={layer.short}
            initial={false}
            animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
            transition={{
              delay: active ? i * 0.25 : 0,
              type: "spring",
              damping: 18,
              stiffness: 110,
            }}
            style={{ transformOrigin: "210px 210px", transformBox: "fill-box" }}
          >
            <rect
              x={layer.x}
              y={layer.y}
              width={layer.size}
              height={layer.size}
              rx={layer.rx}
              fill={layer.fill}
              stroke={layer.color}
              strokeWidth={2}
            />
            {/* Short-code label — centered horizontally, sitting above the next ring */}
            <text
              x={210}
              y={layer.labelY}
              textAnchor="middle"
              fontSize={11}
              fontFamily="JetBrains Mono, monospace"
              fontWeight={600}
              letterSpacing={3}
              fill={layer.color}
            >
              {layer.short}
            </text>
          </motion.g>
        ))}

        {/* Innermost pulse core — visual payoff at the center */}
        <motion.circle
          cx={210}
          cy={228}
          r={18}
          fill="url(#coreGlow)"
          animate={
            active
              ? { scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }
              : { scale: 1, opacity: 0 }
          }
          transition={{ duration: 2.4, repeat: Infinity, delay: LAYERS.length * 0.25 }}
          style={{ transformOrigin: "210px 228px" }}
        />
        <motion.circle
          cx={210}
          cy={228}
          r={4}
          fill="#FAD7A0"
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: LAYERS.length * 0.25 + 0.2 }}
        />
      </svg>

      {/* Label column — leader-line width encodes each ring's relative size */}
      <div className="flex flex-col gap-5 w-full max-w-[360px]">
        {LAYERS.map((layer, i) => {
          // Proportional leader line — longest for outer AI, shortest for DL
          const lineWidth = 20 + (layer.size / 410) * 60;
          return (
            <motion.div
              key={layer.short}
              initial={false}
              animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
              transition={{ delay: active ? i * 0.25 + 0.15 : 0, duration: 0.5 }}
              className="flex items-start gap-4"
            >
              {/* Connector: short-code chip + leader line */}
              <div className="flex items-center gap-2 shrink-0 pt-1">
                <span
                  className="font-mono text-[10px] font-semibold tracking-[0.2em] w-7 text-right"
                  style={{ color: layer.color }}
                >
                  {layer.short}
                </span>
                <span
                  className="h-[2px] rounded-full"
                  style={{ width: lineWidth, backgroundColor: layer.color }}
                />
              </div>

              <div className="flex-1 min-w-0">
                <div
                  className="text-base font-semibold tracking-tight leading-tight"
                  style={{ color: layer.color }}
                >
                  {layer.label}
                </div>
                <div className="text-sm text-muted mt-0.5 leading-snug">
                  {layer.description}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
