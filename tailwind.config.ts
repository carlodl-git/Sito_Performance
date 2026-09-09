import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    /* Dichiarati per intero, non in `extend`: un breakpoint aggiunto in
       `extend` finisce in coda al CSS e vincerebbe su `sm:`/`lg:` anche
       alle larghezze grandi. `xs` serve a distinguere i telefoni piccoli
       (320px) da quelli normali; il resto sono i valori di default. */
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        /* Logo: verde/petrolio, rosso, grigio.
           Il verde profondo del logo è il colore dominante del sito; il teal
           passa ad accento (link, dettagli) e il rosso resta solo per la CTA
           principale, una per schermata. */
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
          // Il rosso del logo (#E43733) portava il bianco a 4.29:1, sotto AA
          // per il testo normale: il bottone più importante del sito era
          // l'elemento meno leggibile. Scurito quanto basta a passare
          // (4.91:1), differenza impercettibile se non affiancando i due.
          // Il logo è un file immagine, non è toccato.
          DEFAULT: "#D4312D",
          light: "#EA5A57",
          dark: "#BC2B27",
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
        /* Colore dell'area corrente. I valori arrivano da globals.css
           (`[data-area="..."]`): la stessa classe `bg-area` rende teal in
           palestra e ottone nel golf indoor, senza varianti per area nel
           markup. In formato canale perché `bg-area/10` deve funzionare. */
        area: {
          DEFAULT: "rgb(var(--area-accent) / <alpha-value>)",
          deep: "rgb(var(--area-deep) / <alpha-value>)",
          tint: "rgb(var(--area-tint) / <alpha-value>)",
          glow: "rgb(var(--area-glow) / <alpha-value>)",
        },
        /* Colore della famiglia di corsi, con lo stesso meccanismo di
           `area`: i valori arrivano da `[data-famiglia="..."]`. Serve solo
           al calendario, ma passa da un token perché il componente non
           deve sapere che esiste il Pilates o il golf. */
        famiglia: {
          DEFAULT: "rgb(var(--famiglia) / <alpha-value>)",
          tint: "rgb(var(--famiglia-tint) / <alpha-value>)",
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
