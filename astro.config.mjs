import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Astro 7 defaults to "jsx", which can drop spaces between inline elements.
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
