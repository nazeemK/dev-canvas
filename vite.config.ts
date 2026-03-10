import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/dev-canvas/" : "/",
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" && {
      name: "github-pages",
      closeBundle() {
        const outDir = path.resolve(__dirname, "dist");
        fs.copyFileSync(path.join(outDir, "index.html"), path.join(outDir, "404.html"));
        fs.writeFileSync(path.join(outDir, ".nojekyll"), "");
      },
    },
  ].filter(Boolean),
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ["gsap", "gsap/ScrollTrigger"],
  },
}));
