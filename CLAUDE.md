# Montecchia Performance Center — sito

Next.js 14 (App Router), Tailwind, TypeScript. Tutto statico: nessun
database, nessuna API, nessun form. Le prenotazioni passano da WhatsApp e,
per il golf, dal gestionale del club.

Sostituisce un WordPress+Divi. I redirect 301 dal vecchio sito stanno in
`next.config.js` e **non vanno rimossi**: alcune URL avevano traffico.

## L'idea del sito

Il centro ha **quattro aree**, e il sito è costruito su quella struttura:

| Area | URL | Colore |
|---|---|---|
| Palestra & Corsi | `/palestra` | petrolio |
| Studio Pilates Reformer | `/pilates` | salvia |
| Golf Indoor | `/golf-indoor` | ottone |
| Salute e Benessere | `/salute-benessere` | ardesia |

La home è uno **smistatore**: quattro riquadri a schermo pieno, poi il
centro sotto la piega. Ogni area si legge come un sito a sé — nav delle
sue sezioni, colore proprio, footer del suo colore — ma condivide con le
altre griglia, tipografia e componenti.

## Le due regole che tengono in piedi tutto

**1. Il colore dell'area è una variabile, non una variante.**
Il layout dell'area mette `data-area` sul contenitore; da lì in giù
`bg-area`, `text-area`, `border-area`, `bg-area-deep`, `bg-area-tint`,
`text-area-glow` cambiano valore da soli. Le palette stanno in
`globals.css` sotto `[data-area="..."]`, in formato canale così le
opacità di Tailwind (`bg-area/10`) funzionano.

> Nessun componente deve sapere in quale area si trova. Se ti serve un
> `if (area === "golf")` per un colore, stai sbagliando: aggiungi un
> token. Gli accenti sono tutti sopra AA (≥ 5:1) sul fondo avorio;
> `--area-glow` è la variante per i fondi scuri.

**2. I dati stanno in `src/data/`, una copia sola.**

| File | Cosa possiede |
|---|---|
| `areas.ts` | Anagrafica delle 4 aree: etichette, URL, sezioni della nav, foto, messaggio WhatsApp. Letto da home, header, footer, sitemap e dalle pagine. |
| `contatti.ts` | Indirizzo, telefono, email, orari, booking, social, link mappa. **Unico posto** dove modificarli. |
| `services.ts` | I 17 servizi. Ogni servizio appartiene a un'area (`serviceArea`). |
| `team.ts` | Le persone. `teamByArea()` per le sezioni delle aree. |
| `courses.ts` | Orario corsi 2025/26. |
| `blog.ts` | I post. |

Rinominare un'area o correggere un numero di telefono deve essere una
modifica a **un** file. Se ti trovi a cambiare la stessa stringa in due
posti, il posto giusto è `src/data/`.

## Struttura delle route

```
src/app/
  layout.tsx              font + metadata globali
  page.tsx                home: lo smistatore (chrome propria)
  (aree)/<area>/
    layout.tsx            3 righe: <AreaLayout area="..."> 
    page.tsx
  (centro)/
    layout.tsx            Header + Footer del centro
    servizi/ team/ chi-siamo/ blog/ contatti/ privacy-policy/
```

Le pagine trasversali stanno in `(centro)` e sono **centrali**, non
duplicate per area: un centro solo, non quattro rubriche.

## Convenzioni

- **Italiano** in tutto: contenuti, commenti, messaggi di commit. Attenzione
  agli accenti veri (`è`, `più`): il vecchio sito aveva `e'` e `piu'`.
- **Il rosso `cta` è solo della prova gratuita**, uno per schermata. Le
  altre azioni usano `btn-area` / `btn-area-light`.
- **Niente ombre**: filetti (`border-line`) e spazio. `section-padding` per
  il ritmo verticale, `container-narrow` per la misura.
- Classi condivise in `globals.css`: `heading-display/section/sub`,
  `eyebrow`, `lead`, `manifesto`, `row-rule`, `area-num`, `link-area`.

## Prima di dire che è fatto

```bash
npx next build && npx next lint
```

Gli screenshot via Playwright vanno in timeout in questo ambiente. In
alternativa: `npx next start -p 3113` e poi verificare a mano che ogni
link interno risponda 200 e che `data-area` sia quello giusto su ogni
pagina — sono i due controlli che hanno pescato più errori.

## Cosa manca (in ordine di peso)

1. **Foto.** Non esiste nessuna foto del Reformer né dello studio Pilates:
   la pagina usa lezioni di yoga all'aperto, vere ma di un'altra attività.
   L'area Salute non ha foto degli studi (l'hero è tipografico di
   proposito: la vecchia immagine era uno stock di massaggio con oli).
   Cercare `TODO FOTO` nel codice.
2. **Indirizzo da confermare.** `contatti.ts` usa "Via Montecchia, 12",
   la forma della privacy policy di Golf della Montecchia Srl. Va
   verificata contro l'Impressum del club prima del lancio, insieme a
   orari e telefono.
3. **Listini e orari** dello Studio Pilates e dell'area Salute: mancano.
4. **Deploy.** Nessun ambiente. Va su Vercel **sotto l'org `scailetech`**,
   mai su account personali, e la produzione richiede sign-off.
5. Gli hero delle pagine `(centro)` sono ancora markup a mano invece di
   `PageHero`: duplicazione da riassorbire.
