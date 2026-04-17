import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves the site from /ai-presentation/, so assets need this prefix.
  // In dev mode Vite ignores `base` anyway, so this is safe for `npm run dev`.
  base: "/ai-presentation/",
  server: {
    port: 5173,
    open: true,
  },
});
