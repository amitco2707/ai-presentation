import { motion } from "framer-motion";
import { useMemo } from "react";

interface Props {
  active: boolean;
  width?: number;
  height?: number;
}

/**
 * Animated neural network diagram with 3 layers (input / hidden / output).
 * Nodes pulse in sequence; edges carry travelling-light "signals".
 */
export default function NeuralNetGraph({ active, width = 520, height = 380 }: Props) {
  const layers = useMemo(
    () => [
      { count: 4, x: width * 0.15, color: "#F0B27A" },
      { count: 6, x: width * 0.5, color: "#D97757" },
      { count: 3, x: width * 0.85, color: "#E89464" },
    ],
    [width]
  );

  const nodes = useMemo(() => {
    const all: { x: number; y: number; layer: number; index: number; color: string }[] = [];
    layers.forEach((layer, li) => {
      const spacing = height / (layer.count + 1);
      for (let i = 0; i < layer.count; i++) {
        all.push({
          x: layer.x,
          y: spacing * (i + 1),
          layer: li,
          index: i,
          color: layer.color,
        });
      }
    });
    return all;
  }, [layers, height]);

  const edges = useMemo(() => {
    const e: { x1: number; y1: number; x2: number; y2: number; key: string }[] = [];
    for (let l = 0; l < layers.length - 1; l++) {
      const a = nodes.filter((n) => n.layer === l);
      const b = nodes.filter((n) => n.layer === l + 1);
      a.forEach((n1, i) =>
        b.forEach((n2, j) => {
          e.push({ x1: n1.x, y1: n1.y, x2: n2.x, y2: n2.y, key: `${l}-${i}-${j}` });
        })
      );
    }
    return e;
  }, [nodes, layers.length]);

  // Pick a few "signal" edges to animate
  const signalEdges = useMemo(
    () => edges.filter((_, i) => i % 5 === 0).slice(0, 8),
    [edges]
  );

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-full"
      style={{ maxHeight: "500px" }}
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F0B27A" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#F0B27A" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Edges */}
      {edges.map((edge, i) => (
        <motion.line
          key={edge.key}
          x1={edge.x1}
          y1={edge.y1}
          x2={edge.x2}
          y2={edge.y2}
          stroke="#D97757"
          strokeWidth={0.6}
          strokeOpacity={0.25}
          initial={{ pathLength: 0 }}
          animate={active ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 0.4 + (i % 20) * 0.02, duration: 0.8 }}
        />
      ))}

      {/* Signal pulses along select edges */}
      {active &&
        signalEdges.map((edge, i) => (
          <motion.circle
            key={`sig-${edge.key}`}
            r={3}
            fill="#F0B27A"
            initial={{ cx: edge.x1, cy: edge.y1, opacity: 0 }}
            animate={{
              cx: [edge.x1, edge.x2],
              cy: [edge.y1, edge.y2],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 1.6,
              delay: 1 + i * 0.25,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "linear",
            }}
          />
        ))}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.g
          key={`n-${i}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{
            delay: 0.15 + node.layer * 0.25 + node.index * 0.06,
            type: "spring",
            damping: 14,
          }}
          style={{ transformOrigin: `${node.x}px ${node.y}px` }}
        >
          <circle cx={node.x} cy={node.y} r={22} fill="url(#nodeGlow)" />
          <motion.circle
            cx={node.x}
            cy={node.y}
            r={10}
            fill={node.color}
            stroke="#F4E4D0"
            strokeWidth={1}
            animate={{ r: [10, 12, 10] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
          <circle cx={node.x} cy={node.y} r={4} fill="#F4E4D0" opacity={0.9} />
        </motion.g>
      ))}

      {/* Layer labels */}
      {active && (
        <>
          {["Input", "Hidden", "Output"].map((label, i) => (
            <motion.text
              key={label}
              x={layers[i].x}
              y={height - 10}
              textAnchor="middle"
              className="font-mono"
              fontSize={10}
              fill="#8a8580"
              letterSpacing="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 + i * 0.1 }}
            >
              {label.toUpperCase()}
            </motion.text>
          ))}
        </>
      )}
    </svg>
  );
}
