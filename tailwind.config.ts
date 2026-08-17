import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Logo: verde/petrolio, rosso, grigio.
           Il verde profondo del logo è il colore dominante del sito; il teal
           passa ad accento (link, dettagli) e il rosso resta solo per la CTA
           principale — una per schermata. */
        primary: {
          DEFAULT: "#143D3E",
          dark: "#0F2D2E",
          light: "#2C8B8D",
        },
        accent: {
          // Teal del logo scurito quanto basta a superare AA sul fondo avorio
          // (5.35:1); il teal esatto del logo resta in `accent-light`, usato
          // sui fondi scuri dove il contrasto non è un problema.
          DEFAULT: "#237371",
          light: "#2C8B8D",
          dark: "#1A5857",
        },
        // Azione principale. Da usare a mano, mai come colore di servizio.
        cta: {
          DEFAULT: "#E43733",
          light: "#EA5A57",
          dark: "#C42E2A",
        },
        muted: "#6E695F",
        // Fondo pagina avorio al posto del bianco puro: ammorbidisce tutto il
        // sito senza toccare le 43 `bg-white` già scritte.
        white: "#FBFAF7",
        paper: {
          DEFAULT: "#FBFAF7",
          alt: "#F3F1EA",
        },
        line: "#E4E0D6",
        ink: {
          DEFAULT: "#1C1C1A",
          soft: "#4A4A45",
        },
        // Scala neutra riscaldata: le `text-neutral-600` e `bg-neutral-50`
        // esistenti si riallineano da sole alla nuova palette.
        neutral: {
          50: "#F7F5F0",
          100: "#F0EDE6",
          200: "#E4E0D6",
          300: "#D3CEC2",
          400: "#A8A398",
          500: "#7A756B",
          600: "#4A4A45",
          700: "#3A3A36",
          800: "#262622",
          900: "#1C1C1A",
        },
        brand: {
          dark: "#0F2D2E",
          DEFAULT: "#143D3E",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Corpo del testo a 17px con interlinea generosa.
        base: ["1.0625rem", { lineHeight: "1.75" }],
      },
      borderRadius: {
        lg: "0.25rem",
        xl: "0.25rem",
        "2xl": "0.375rem",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
    },
  },
  plugins: [],
};

export default config;
