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

## Slide order (20 slides)

| # | Label | Content |
|---|---|---|
| 01 | Title | Animated mascot, particle field |
| 02 | The Basics | AI defined — one simple idea |
| 03 | Timeline | Horizontal axis: 1950s → 2022–2026 |
| 04 | Post-ChatGPT | Impact of the first public LLM |
| 05 | Hierarchy | The Russian Doll — AI ⊃ ML ⊃ NN ⊃ DL |
| 06 | Neural Networks | Animated node graph |
| 07 | Medical Imaging | Real-world neural net example |
| 08 | Glossary | 8 must-know terms (incl. LLM) |
| 09 | How LLMs Work | Next-token prediction, hallucinations |
| 10 | LLM vs Agentic | Talker vs Doer |
| 11 | Use Cases | 6 domains AI already works in |
| 12 | Anthropic | Constitutional AI, safety, long context |
| 13 | Claude Code | Simulated terminal, what it is |
| 14 | Keys to Machine | MCP, tools, memory deep-dive |
| 15 | Capabilities | Skills, multi-agent, plugins |
| 16 | Execution Flow | Live simulation: Analyze → Plan → Ask → Execute |
| 17 | Vibe Coding | Natural-language development, the PM shift |
| 18 | AI-Native | AI-Native IDEs — Cursor & Google Antigravity |
| 19 | Manifesto | Don't stay behind |
| 20 | Outro | Welcome to the era of AI |

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
