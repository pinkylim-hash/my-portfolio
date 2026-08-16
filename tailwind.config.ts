import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./data/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        pinky: "#5261A8",
        cream: "#F8F0E7",
        grass: "#639C5B",
        lavender: "#D9B7E8",
        mint: "#ADCAA5",
        sun: "#F2CD79",
        inkblue: "#5261A8",
        ink: "#25221F"
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Black", "sans-serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(.16,1,.3,1)"
      }
    }
  },
  plugins: []
} satisfies Config;
