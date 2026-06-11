import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return undefined;
          if (id.includes("react-dom") || id.includes("react/")) return "react";
          if (id.includes("framer-motion") || id.includes("gsap")) return "motion";
          if (id.includes("react-scroll") || id.includes("lenis")) return "ui";
          if (id.includes("emailjs-com")) return "email";
          return "vendor";
        },
      },
    },
  },
});
