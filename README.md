# Montecchia Performance Center – Sito vetrina

Sito vetrina per **Montecchia Performance Center**, con focus su palestra, corsi, servizi (nutrizionista, fisioterapista, massaggiatore), chi siamo e contatti.

## Stack

- **Next.js 14** (App Router) + React 18
- **TypeScript**
- **Tailwind CSS**
- Ottimizzato per deploy su **Vercel**

## Struttura

- `src/app/` – Pagine (App Router): Home, Palestra, Servizi, Chi Siamo, Contatti
- `src/app/servizi/[slug]/` – Pagine servizi dinamiche (nutrizionista, fisioterapista, massaggiatore)
- `src/components/layout/` – Header, Footer
- `src/components/ui/` – Componenti riutilizzabili (es. ImagePlaceholder)

## Design

- Estetica **moderna e premium**: pulita, minimalista, ampio uso di spazi bianchi
- **Palette**: nero/blu scuro (primary), bianco/grigi, accento oro (`accent`)
- **Tipografia**: Outfit (titoli), DM Sans (testo)
- Placeholder per immagini e video; predisposto per contenuti premium

## Scripts

```bash
npm install
npm run dev    # sviluppo (localhost:3000)
npm run build  # build produzione
npm run start  # avvio dopo build
npm run lint   # ESLint
```

## Funzionalità

- Design **responsivo** (mobile-first)
- Navigazione principale con menu mobile
- **Link esterno** al booking golf: [booking.montecchiaperformancecenter.it](https://booking.montecchiaperformancecenter.it)
- **Modulo di contatto** (solo front-end, senza backend di invio)

## Prossimi passi

- Sostituire i placeholder con immagini e video reali
- Aggiungere backend per invio email del modulo contatti
- Integrare calendario interattivo reale per orari corsi (es. in pagina Palestra)
