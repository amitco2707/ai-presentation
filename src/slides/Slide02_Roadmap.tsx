import { motion } from "framer-motion";
import SlideShell from "../components/SlideShell";

interface Props {
  active: boolean;
}

// Smooth S-curve road — peaks at milestones 01 & 03, valley at milestone 02
const ROAD =
  "M 0,140 C 70,140 110,108 185,108 C 260,108 315,195 420,195 C 525,195 570,108 635,108 C 710,108 750,140 820,140";

// x-positions where each milestone sits on the road (used for vertical connectors)
const MILESTONE_X = [185, 420, 635];
const MILESTONE_Y = [108, 195, 108];

const PARTS = [
  {
    n: "01",
    title: "The Foundations",
    color: "#F0B27A",
    topics: ["What is AI", "The pivotal timeline", "Neural networks"],
    // Box sits above the road (y=5 → bottom=85; road top at y≈89)
    box: { x: 20, y: 5, w: 220, h: 80 },
    entryY: -10,           // slides downward into position
    milestoneDelay: 1.85,
    boxDelay: 2.05,
  },
  {
    n: "02",
    title: "The Intelligence Engine",
    color: "#D97757",
    topics: ["How LLMs predict", "Hallucinations & trust", "Agentic AI"],
    // Box sits below the road (y=218 → top=218; road bottom at y≈214)
    box: { x: 310, y: 218, w: 220, h: 78 },
    entryY: +10,           // slides upward into position
    milestoneDelay: 2.35,
    boxDelay: 2.55,
  },
  {
    n: "03",
    title: "The Future of Work",
    color: "#B8623A",
    topics: ["Anthropic & safety", "Claude Code", "Claude Desktop & add-ins"],
    // Box sits above the road — mirroring part 01
    box: { x: 580, y: 5, w: 220, h: 80 },
    entryY: -10,
    milestoneDelay: 2.85,
    boxDelay: 3.05,
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
      <div className="w-full mt-2">
        <svg
          viewBox="0 0 820 296"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* ── ROAD ── */}

          {/* Border/edge strip (slightly wider, darker) */}
          <motion.path
            d={ROAD}
            stroke="#111111"
            strokeWidth={46}
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={active ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{
              pathLength: { duration: 1.45, ease: "easeInOut", delay: 0.3 },
              opacity: { duration: 0.05, delay: 0.3 },
            }}
          />

          {/* Road surface */}
          <motion.path
            d={ROAD}
            stroke="#1c1c1c"
            strokeWidth={38}
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={active ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{
              pathLength: { duration: 1.45, ease: "easeInOut", delay: 0.3 },
              opacity: { duration: 0.05, delay: 0.3 },
            }}
          />

          {/* Centre dashes — fade in after road is drawn */}
          <motion.path
            d={ROAD}
            stroke="rgba(255,255,255,0.13)"
            strokeWidth={1.8}
            strokeDasharray="14 10"
            fill="none"
            initial={{ opacity: 0 }}
            animate={active ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.65 }}
          />

          {/* ── PER-PART: connector, milestone circle, text box ── */}
          {PARTS.map((part, i) => {
            const mx = MILESTONE_X[i];
            const my = MILESTONE_Y[i];
            const { box } = part;

            // Connector endpoints — straight vertical line between box edge and milestone
            const connX = mx;
            const connY1 = i === 1 ? box.y : box.y + box.h;   // box top (part 02) or bottom (01, 03)
            const connY2 = my;

            // Text positions inside the box
            const bx = box.x;
            const by = box.y;

            return (
              <g key={part.n}>
                {/* Box — drawn first so milestone renders on top */}
                <motion.g
                  initial={{ opacity: 0, y: part.entryY }}
                  animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: part.entryY }}
                  transition={{ delay: part.boxDelay, type: "spring", damping: 20, stiffness: 110 }}
                >
                  {/* Background */}
                  <rect
                    x={bx} y={by} width={box.w} height={box.h} rx={10}
                    fill="#141414"
                    stroke={part.color} strokeWidth={1} strokeOpacity={0.4}
                  />

                  {/* Part badge pill */}
                  <rect
                    x={bx + 8} y={by + 7} width={52} height={15} rx={5}
                    fill={part.color} fillOpacity={0.18}
                  />
                  <text
                    x={bx + 34} y={by + 18.5}
                    textAnchor="middle"
                    fontSize={8}
                    fontWeight="700"
                    fill={part.color}
                    fontFamily="JetBrains Mono, monospace"
                    letterSpacing="1.8"
                  >
                    {`PART ${part.n}`}
                  </text>

                  {/* Title */}
                  <text
                    x={bx + 10} y={by + 33}
                    fontSize={11.5}
                    fontWeight="700"
                    fill="#F4E4D0"
                    fontFamily="Inter, system-ui, sans-serif"
                  >
                    {part.title}
                  </text>

                  {/* Topics */}
                  {part.topics.map((topic, ti) => (
                    <g key={topic}>
                      <circle
                        cx={bx + 15} cy={by + 47 + ti * 12 - 1}
                        r={1.8} fill={part.color} opacity={0.75}
                      />
                      <text
                        x={bx + 22} y={by + 47 + ti * 12 + 3.5}
                        fontSize={9.5}
                        fill="#c9c3ba"
                        fontFamily="Inter, system-ui, sans-serif"
                      >
                        {topic}
                      </text>
                    </g>
                  ))}
                </motion.g>

                {/* Connector line — drawn between box and milestone */}
                <motion.path
                  d={`M ${connX},${connY1} L ${connX},${connY2}`}
                  stroke={part.color}
                  strokeWidth={1.5}
                  strokeDasharray="4 3"
                  strokeOpacity={0.65}
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    active
                      ? { pathLength: 1, opacity: 0.65 }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={{
                    pathLength: { delay: part.milestoneDelay - 0.15, duration: 0.28, ease: "easeOut" },
                    opacity:    { delay: part.milestoneDelay - 0.15, duration: 0.15 },
                  }}
                />

                {/* Milestone circle — on top of everything */}
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={active ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ delay: part.milestoneDelay, type: "spring", damping: 14, stiffness: 220 }}
                  style={{ transformOrigin: `${mx}px ${my}px` }}
                >
                  {/* Outer glow ring */}
                  <circle cx={mx} cy={my} r={24} fill={part.color} fillOpacity={0.15} />
                  {/* Main filled circle */}
                  <circle cx={mx} cy={my} r={16} fill={part.color} />
                  {/* Number */}
                  <text
                    x={mx} y={my + 4.5}
                    textAnchor="middle"
                    fontSize={11}
                    fontWeight="800"
                    fill="#0a0a0a"
                    fontFamily="JetBrains Mono, monospace"
                    letterSpacing={0.5}
                  >
                    {part.n}
                  </text>
                </motion.g>
              </g>
            );
          })}
        </svg>
      </div>
    </SlideShell>
  );
}
