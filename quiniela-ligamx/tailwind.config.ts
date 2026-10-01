import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pure: {
          navy: "#0A2540",
          blue: "#1B3A5F",
          "blue-dark": "#06182a",
          amber: "#D4A017",
          gold: "#E8B923",
          "gold-hover": "#C6920F",
          "gold-light": "#FEF9EC",
          "bg-light": "#F8FAFC",
          slate: "#1E293B",
          "slate-muted": "#64748B",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(10, 37, 64, 0.06), 0 2px 6px -1px rgba(10, 37, 64, 0.04)",
        card: "0 10px 30px -4px rgba(10, 37, 64, 0.08), 0 4px 10px -2px rgba(10, 37, 64, 0.03)",
        glow: "0 0 25px rgba(212, 160, 23, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
