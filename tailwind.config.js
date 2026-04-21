/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0a0a0a",
        elevated: "#141414",
        panel: "#1c1c1c",
        brand: {
          orange: "#D97757",
          amber: "#F0B27A",
          rust: "#B8623A",
        },
        cream: "#F4E4D0",
        muted: "#c9c3ba",
        line: "#2a2825",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7.5rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        display: ["clamp(2rem, 4.5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        headline: ["clamp(1.75rem, 3.5vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(217, 119, 87, 0.45)",
        "glow-sm": "0 0 30px -10px rgba(217, 119, 87, 0.35)",
        card: "0 10px 40px -10px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(ellipse at center, rgba(217,119,87,0.12) 0%, rgba(10,10,10,0) 70%)",
        "grid-pattern":
          "linear-gradient(rgba(217,119,87,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(217,119,87,0.06) 1px, transparent 1px)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        blink: "blink 1.2s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
