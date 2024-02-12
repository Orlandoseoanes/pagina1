/** @type {import('tailwindcss').Config} */
import netlify from '@astrojs/netlify';

export default {
  output: 'server',
  adapter: netlify(),
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#274C5B",

          "secondary": "#7EB693",

          "accent": "#274C5B",

          "neutral": "#D4D4D4",

          "base-100": "#F9F8F8",

          "info": "#EFF6F1",

          "success": "#84cc16",

          "warning": "#f59e0b",

          "error": "#dc2626",
        },
      },
    ],
  },
};
