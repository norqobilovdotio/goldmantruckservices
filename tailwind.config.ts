import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          base: "#F3F5F7",
          alt: "#EEF2F6",
        },
        text: {
          primary: "#0F172A",
          secondary: "#334155",
          muted: "#64748B",
        },
        border: {
          default: "#CBD5E1",
        },
        accent: {
          DEFAULT: "#2563EB",
          hover: "#1D4ED8",
        },
      },
    },
  },
  plugins: [],
}
export default config

