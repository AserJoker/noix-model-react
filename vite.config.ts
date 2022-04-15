import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      fileName: "noix-model-react",
      entry: "src/index.ts",
      formats: ["es"],
    },
    minify: true,
    rollupOptions: {
      external: ["react", "react-dom", "@noix/model"],
    },
  },
});
