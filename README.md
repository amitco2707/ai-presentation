# AI for Beginners — From Zero to Hero

An interactive, web-based presentation built as a single-page React app. Framer Motion animations, Tailwind CSS, deployed to GitHub Pages.

## 🌐 Live presentation

**[https://amitco2707.github.io/ai-presentation/](https://amitco2707.github.io/ai-presentation/)**

No install required — open in any browser.

## Navigation

| Input | Action |
|---|---|
| Scroll wheel · ↓ / ↑ · Space · PgDn / PgUp | Move between slides |
| Home / End | Jump to first / last slide |
| Right-side tick-bar | Click any position |
| Bottom arrows | Next / Previous |

## Slide order (22 slides)

The presentation is divided into three parts:

### Part 1 — The Foundations
| # | Label | Content |
|---|---|---|
| 01 | Title | Animated mascot, particle field |
| 02 | Roadmap | 3-part table of contents |
| 03 | The Basics | AI defined — one simple idea |
| 04 | Timeline | Horizontal axis: 1950s → 2022–2026 |
| 05 | Post-ChatGPT | Impact of the first public LLM |
| 06 | Hierarchy | The Russian Doll — AI ⊃ ML ⊃ NN ⊃ DL |
| 07 | Neural Networks | Animated node graph |
| 08 | Medical Imaging | Real-world neural net example |
| 09 | Glossary | 8 must-know terms (incl. LLM) |

### Part 2 — The Intelligence Engine
| # | Label | Content |
|---|---|---|
| 10 | How LLMs Work | Next-token prediction, hallucinations |
| 11 | LLM vs Agentic | Talker vs Doer |
| 12 | Use Cases | 6 domains AI already works in |

### Part 3 — The Future of Work
| # | Label | Content |
|---|---|---|
| 13 | Anthropic | Constitutional AI, safety, long context |
| 14 | Claude Code | Simulated terminal, what it is |
| 15 | Keys to Machine | Terminal-native agent, filesystem & git |
| 16 | Capabilities | Skills, multi-agent, plugins |
| 17 | Execution Flow | Live simulation: Analyze → Plan → Ask → Execute |
| 18 | Vibe Coding | Natural-language development, the PM shift |
| 19 | Claude Everywhere | Office & Chrome integrations, animated Chrome demo |
| 20 | Desktop vs Code | Claude Desktop (co-pilot) vs Claude Code (mechanic) |
| 21 | Manifesto | Don't stay behind |
| 22 | Outro | Welcome to the era of AI |

## Tech stack

- **React 18** + **TypeScript** — component-per-slide architecture
- **Framer Motion** — enter animations, staggered reveals, spring physics
- **Tailwind CSS** — utility-first styling, custom design tokens
- **Vite** — dev server and production build
- **GitHub Actions** — automatic deploy to GitHub Pages on push to `main`

## Local development

```bash
cd presentation
npm install
npm run dev        # http://localhost:5173
```

## Production build

```bash
npm run build
npm run preview
```
