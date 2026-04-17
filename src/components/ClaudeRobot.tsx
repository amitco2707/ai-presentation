import { motion } from "framer-motion";

export type RobotVariant = "wave" | "think" | "point" | "thumbs-up" | "code" | "idle";

interface Props {
  variant?: RobotVariant;
  size?: number;
  className?: string;
  /** Disable idle float — useful inside already-animated parents */
  still?: boolean;
}

/**
 * Claude Robot mascot — custom inline SVG.
 * Rounded cube body, single round screen face, antenna, small arms.
 * Variants change pose (arm position + facial expression).
 */
export default function ClaudeRobot({
  variant = "idle",
  size = 200,
  className = "",
  still = false,
}: Props) {
  const bodyMotion = still
    ? {}
    : {
        animate: { y: [0, -8, 0] },
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
      };

  return (
    <motion.div
      className={className}
      style={{ width: size, height: size }}
      {...bodyMotion}
    >
      <svg
        viewBox="0 0 200 220"
        className="w-full h-full drop-shadow-[0_20px_30px_rgba(217,119,87,0.25)]"
      >
        <defs>
          <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F0B27A" />
            <stop offset="60%" stopColor="#D97757" />
            <stop offset="100%" stopColor="#B8623A" />
          </linearGradient>
          <linearGradient id="faceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F0B27A" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#F0B27A" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Antenna */}
        <motion.g
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "100px 40px" }}
        >
          <line
            x1="100"
            y1="40"
            x2="100"
            y2="20"
            stroke="#D97757"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <motion.circle
            cx="100"
            cy="16"
            r="6"
            fill="#F0B27A"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <circle cx="100" cy="16" r="10" fill="url(#glow)" />
        </motion.g>

        {/* Body */}
        <rect
          x="40"
          y="40"
          width="120"
          height="110"
          rx="22"
          fill="url(#bodyGrad)"
          stroke="#B8623A"
          strokeWidth="1.5"
        />

        {/* Screen / face */}
        <rect x="55" y="58" width="90" height="72" rx="16" fill="url(#faceGrad)" />
        <rect
          x="55"
          y="58"
          width="90"
          height="72"
          rx="16"
          fill="none"
          stroke="#2a2825"
          strokeWidth="1"
        />

        {/* Eyes — blink */}
        <motion.g
          animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.94, 0.96, 0.98, 1] }}
          style={{ transformOrigin: "100px 94px" }}
        >
          {variant === "think" ? (
            <>
              <circle cx="82" cy="94" r="4" fill="#F4E4D0" />
              <circle cx="118" cy="94" r="4" fill="#F4E4D0" />
            </>
          ) : variant === "code" ? (
            <>
              <rect x="76" y="90" width="12" height="8" rx="2" fill="#F4E4D0" />
              <rect x="112" y="90" width="12" height="8" rx="2" fill="#F4E4D0" />
            </>
          ) : (
            <>
              <circle cx="82" cy="94" r="5" fill="#F4E4D0" />
              <circle cx="118" cy="94" r="5" fill="#F4E4D0" />
              <circle cx="83.5" cy="92.5" r="1.5" fill="#0a0a0a" opacity="0.4" />
              <circle cx="119.5" cy="92.5" r="1.5" fill="#0a0a0a" opacity="0.4" />
            </>
          )}
        </motion.g>

        {/* Mouth */}
        {variant === "thumbs-up" ? (
          <path
            d="M 85 112 Q 100 122 115 112"
            stroke="#F4E4D0"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
        ) : variant === "think" ? (
          <circle cx="100" cy="114" r="2.5" fill="#F4E4D0" />
        ) : (
          <path
            d="M 88 112 Q 100 118 112 112"
            stroke="#F4E4D0"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.8"
          />
        )}

        {/* Cheek lights */}
        <circle cx="62" cy="118" r="2" fill="#F0B27A" opacity="0.8" />
        <circle cx="138" cy="118" r="2" fill="#F0B27A" opacity="0.8" />

        {/* Arms */}
        {variant === "wave" ? (
          <motion.g
            animate={{ rotate: [20, -20, 20] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "160px 80px" }}
          >
            <rect x="152" y="74" width="14" height="40" rx="7" fill="url(#bodyGrad)" />
            <circle cx="159" cy="70" r="10" fill="#F0B27A" stroke="#B8623A" strokeWidth="1" />
          </motion.g>
        ) : variant === "point" ? (
          <g>
            <rect x="152" y="90" width="36" height="12" rx="6" fill="url(#bodyGrad)" />
            <circle cx="192" cy="96" r="8" fill="#F0B27A" stroke="#B8623A" strokeWidth="1" />
          </g>
        ) : variant === "thumbs-up" ? (
          <g>
            <rect x="148" y="70" width="14" height="30" rx="7" fill="url(#bodyGrad)" />
            <circle cx="155" cy="64" r="10" fill="#F0B27A" stroke="#B8623A" strokeWidth="1" />
            <rect x="152" y="54" width="6" height="10" rx="3" fill="#F0B27A" />
          </g>
        ) : variant === "code" ? (
          <>
            <rect x="28" y="85" width="14" height="30" rx="7" fill="url(#bodyGrad)" />
            <rect x="158" y="85" width="14" height="30" rx="7" fill="url(#bodyGrad)" />
          </>
        ) : (
          <>
            {/* idle / think */}
            <rect x="28" y="75" width="14" height="50" rx="7" fill="url(#bodyGrad)" />
            <rect x="158" y="75" width="14" height="50" rx="7" fill="url(#bodyGrad)" />
          </>
        )}

        {/* Legs / base */}
        <rect x="68" y="150" width="18" height="30" rx="6" fill="url(#bodyGrad)" />
        <rect x="114" y="150" width="18" height="30" rx="6" fill="url(#bodyGrad)" />
        <rect x="62" y="178" width="30" height="8" rx="4" fill="#B8623A" />
        <rect x="108" y="178" width="30" height="8" rx="4" fill="#B8623A" />

        {/* Floor shadow */}
        <ellipse cx="100" cy="200" rx="60" ry="6" fill="#000" opacity="0.5" />
      </svg>
    </motion.div>
  );
}
