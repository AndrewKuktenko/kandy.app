/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import scrollbar from "tailwind-scrollbar";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto-condensed": ['"Roboto Condensed"', "sans-serif"],
      },
    },
  },
  plugins: [daisyui, scrollbar],
};
