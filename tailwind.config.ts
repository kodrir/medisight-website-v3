import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand neutrals (from brand guidelines)
        ink: "#101010",
        mist: "#EFF7FA",
        // Primary brand blue — #00BFFF
        primary: {
          50: "#e6f9ff",
          100: "#ccf3ff",
          200: "#99e7ff",
          300: "#66dbff",
          400: "#1ecbff",
          500: "#00BFFF",
          600: "#0098cc",
          700: "#0077a3",
          800: "#005a7a",
          900: "#003d52",
        },
        // Brand purple — #5A3EFF
        accent: {
          50: "#efecff",
          100: "#e0daff",
          200: "#c4b8ff",
          300: "#a08dff",
          400: "#7d63ff",
          500: "#5A3EFF",
          600: "#4a2fe0",
          700: "#3a25b3",
          800: "#2c1c87",
          900: "#1f145e",
        },
        // Per-agent accents — an on-brand spread across cyan-blue -> purple
        agent: {
          assistant: "#00BFFF",
          labs: "#2D9CFF",
          patients: "#3B82F6",
          colleague: "#6366F1",
          reimbursement: "#7C3AED",
          compliance: "#5A3EFF",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #00BFFF 0%, #5A3EFF 100%)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,16,16,0.04), 0 4px 14px rgba(16,16,16,0.06)",
        raised: "0 6px 16px rgba(16,16,16,0.08), 0 16px 40px rgba(16,16,16,0.12)",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
