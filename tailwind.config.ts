import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta „żywsza” (2026-11-27): granat z fioletem, akcent cyjan → fiolet
        bgdark: "#0d1029", // tło strony
        card: "#171a3a", // tło kart kursów
        accent: "#22d3ee", // cyjan — główny akcent
        "accent-dark": "#06b6d4", // hover akcentu
        accent2: "#a855f7", // fiolet — drugi akcent (gradienty)
        pink: "#f472b6", // trzeci akcent (ikony)
        price: "#fbbf24", // złoty — ceny
        main: "#f1f5f9", // główny tekst
        muted: "#a5b4fc", // przygaszony tekst (lawendowy)
        footer: "#080a1c", // tło stopki
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
