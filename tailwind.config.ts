import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mist: "#f6f7fb",
        ink: "#0b0f1a",
        steel: "rgba(15, 23, 42, 0.65)",
        slate: "#334155",
        accent: "#1b5ef5",
        accentSoft: "rgba(27, 94, 245, 0.14)",
        gold: "#E4C76A"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.12)",
        card: "0 10px 30px rgba(15, 23, 42, 0.08)"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        heading: ["var(--font-playfair)", "serif"]
      },
      backgroundImage: {
        glow: "radial-gradient(circle at top right, rgba(27, 94, 245, 0.18), transparent 50%)",
        haze: "radial-gradient(circle at 20% 10%, rgba(228, 199, 106, 0.22), transparent 55%)"
      }
    }
  },
  plugins: []
};

export default config;
