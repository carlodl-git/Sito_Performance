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
        // Logo: teal/petrol (#2C8B8D) = primary, red (#E43733) = accent, grey (#A0A0A0) = muted
        primary: {
          DEFAULT: "#2C8B8D",
          dark: "#1E6264",
          light: "#3DA5A7",
        },
        accent: {
          DEFAULT: "#E43733",
          light: "#EA5A57",
          dark: "#C42E2A",
        },
        muted: "#A0A0A0",
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        // Sfondo scuro per hero/footer (in linea con il verde scuro del logo)
        brand: {
          dark: "#0F2D2E",
          DEFAULT: "#143D3E",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
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
