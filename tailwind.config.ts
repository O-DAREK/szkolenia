import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta z projektu graficznego (docs/style.css)
        bgdark: "#0f141e", // tło strony
        card: "#151f2e", // tło kart kursów
        accent: "#0ea5e9", // turkusowy akcent
        "accent-dark": "#0284c7", // hover akcentu
        main: "#e2e8f0", // główny tekst
        muted: "#94a3b8", // przygaszony tekst
        footer: "#0b0f17", // tło stopki
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
