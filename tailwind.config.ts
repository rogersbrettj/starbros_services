import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff9ff",
          100: "#dff3ff",
          200: "#b8e7ff",
          300: "#82d5ff",
          400: "#45bdf8",
          500: "#2299dd",
          600: "#147fc3",
          700: "#12669d",
          800: "#155681",
          900: "#17486b",
          950: "#0f2e47",
        },
      },
      boxShadow: {
        soft: "0 24px 70px rgba(15, 46, 71, 0.14)",
        card: "0 14px 38px rgba(15, 46, 71, 0.09)",
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
} satisfies Config;
