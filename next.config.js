/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disabilita il redirect automatico Next.js per il trailing slash:
  // così i nostri custom 301 (es. /about/ → /chi-siamo) sono diretti,
  // senza una chain extra (/about/ → /about → /chi-siamo).
  skipTrailingSlashRedirect: true,

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'placehold.co' },
    ],
  },

  // ============================================================
  // Redirect 301: migrazione SEO da WordPress a Next.js
  // Generato: 2026-04-26
  // Dominio: www.montecchiaperformancecenter.it
  // Vedi: Migrazione_SEO_Mappatura.xlsx per la lista completa
  // ============================================================
  async redirects() {
    return [
      // ---------- PAGINE PRINCIPALI ----------
      // /about/ → /chi-siamo (allineamento naming italiano)
      { source: '/about', destination: '/chi-siamo', permanent: true },
      { source: '/about/', destination: '/chi-siamo', permanent: true },

      // /contact/ → /contatti (1 backlink esterno)
      { source: '/contact', destination: '/contatti', permanent: true },
      { source: '/contact/', destination: '/contatti', permanent: true },

      // /fitness/ → /palestra (52 clic/anno, allineamento naming italiano)
      { source: '/fitness', destination: '/palestra', permanent: true },
      { source: '/fitness/', destination: '/palestra', permanent: true },

      // ---------- SERVIZI: SLUG ITALIANI SEO-FRIENDLY ----------
      // /fisio/ → /servizi/fisioterapia
      { source: '/fisio', destination: '/servizi/fisioterapia', permanent: true },
      { source: '/fisio/', destination: '/servizi/fisioterapia', permanent: true },

      // /one-to-one-training/ → /servizi/personal-training
      { source: '/one-to-one-training', destination: '/servizi/personal-training', permanent: true },
      { source: '/one-to-one-training/', destination: '/servizi/personal-training', permanent: true },

      // /group-training/ → /servizi/allenamento-di-gruppo
      { source: '/group-training', destination: '/servizi/allenamento-di-gruppo', permanent: true },
      { source: '/group-training/', destination: '/servizi/allenamento-di-gruppo', permanent: true },

      // /mini-group-training/ → /servizi/mini-group-training (slug inglese mantenuto)
      { source: '/mini-group-training', destination: '/servizi/mini-group-training', permanent: true },
      { source: '/mini-group-training/', destination: '/servizi/mini-group-training', permanent: true },

      // ---------- WORKOUTS (vecchio custom post type Divi) → /servizi/[slug] ----------
      // /dt_workouts/pilates-e-yoga/ → /servizi/pilates (112 clic/anno, pagina top)
      // Puntava a /servizi/pilates-yoga, che non esiste: sul nuovo sito i due
      // corsi sono separati (/servizi/pilates e /servizi/yoga). La pagina più
      // visitata del vecchio sito cadeva quindi su un 404. Il Pilates è il
      // termine che portava il traffico, quindi la destinazione è quella.
      { source: '/dt_workouts/pilates-e-yoga', destination: '/servizi/pilates', permanent: true },
      { source: '/dt_workouts/pilates-e-yoga/', destination: '/servizi/pilates', permanent: true },

      // /dt_workouts/fit-for-golf/ → /servizi/fit-for-golf (6 clic)
      { source: '/dt_workouts/fit-for-golf', destination: '/servizi/fit-for-golf', permanent: true },
      { source: '/dt_workouts/fit-for-golf/', destination: '/servizi/fit-for-golf', permanent: true },

      // /dt_workouts/tpi-junior/ → /servizi/tpi-junior
      { source: '/dt_workouts/tpi-junior', destination: '/servizi/tpi-junior', permanent: true },
      { source: '/dt_workouts/tpi-junior/', destination: '/servizi/tpi-junior', permanent: true },

      // /dt_workouts/tone/ → /servizi/tone
      { source: '/dt_workouts/tone', destination: '/servizi/tone', permanent: true },
      { source: '/dt_workouts/tone/', destination: '/servizi/tone', permanent: true },

      // /dt_workouts/functional/ → /servizi/functional
      { source: '/dt_workouts/functional', destination: '/servizi/functional', permanent: true },
      { source: '/dt_workouts/functional/', destination: '/servizi/functional', permanent: true },

      // /dt_workouts/functional-tone/ → /servizi/functional-tone
      { source: '/dt_workouts/functional-tone', destination: '/servizi/functional-tone', permanent: true },
      { source: '/dt_workouts/functional-tone/', destination: '/servizi/functional-tone', permanent: true },

      // /dt_workouts/power/ ("FULL BODY WORKOUT") → /palestra
      // Era l'unico dei sette workout rimasto senza redirect. Non ha una
      // scheda propria sul nuovo sito: Full Body Workout è un corso a
      // calendario, quindi la destinazione giusta è l'orario in palestra.
      { source: '/dt_workouts/power', destination: '/palestra', permanent: true },
      { source: '/dt_workouts/power/', destination: '/palestra', permanent: true },

      // L'indice dei workout → l'indice dei servizi
      { source: '/dt_workouts', destination: '/servizi', permanent: true },
      { source: '/dt_workouts/', destination: '/servizi', permanent: true },

      // ---------- GALLERIA DIVI ----------
      // Le tre gallerie e il loro indice → home. Erano contenitori di foto
      // senza testo: sul nuovo sito le immagini vivono dentro le pagine
      // delle aree, non in una galleria a sé.
      { source: '/dt_galleries/performance-center', destination: '/', permanent: true },
      { source: '/dt_galleries/performance-center/', destination: '/', permanent: true },
      { source: '/dt_galleries/performance-face', destination: '/', permanent: true },
      { source: '/dt_galleries/performance-face/', destination: '/', permanent: true },
      { source: '/dt_galleries/tecnologie', destination: '/golf-indoor', permanent: true },
      { source: '/dt_galleries/tecnologie/', destination: '/golf-indoor', permanent: true },
      { source: '/dt_galleries', destination: '/', permanent: true },
      { source: '/dt_galleries/', destination: '/', permanent: true },

      // ---------- TEAM: EX-MEMBRI → pagina aggregata ----------
      // /team/niccolo-bisazza/ → /team (uscito dal team)
      { source: '/team/niccolo-bisazza', destination: '/team', permanent: true },
      { source: '/team/niccolo-bisazza/', destination: '/team', permanent: true },

      // /team/davide-oliviero/ → /team (uscito dal team)
      { source: '/team/davide-oliviero', destination: '/team', permanent: true },
      { source: '/team/davide-oliviero/', destination: '/team', permanent: true },

      // ---------- BLOG / NEWS ----------
      // /news/ → /blog
      { source: '/news', destination: '/blog', permanent: true },
      { source: '/news/', destination: '/blog', permanent: true },

      // /yoga-e-aperitivo-in-piscina-30-euro/ → /blog/yoga-e-aperitivo-in-piscina-30-euro
      { source: '/yoga-e-aperitivo-in-piscina-30-euro', destination: '/blog/yoga-e-aperitivo-in-piscina-30-euro', permanent: true },
      { source: '/yoga-e-aperitivo-in-piscina-30-euro/', destination: '/blog/yoga-e-aperitivo-in-piscina-30-euro', permanent: true },

      // /corsi-settembre-2020/ → /blog/corsi-settembre-2020
      { source: '/corsi-settembre-2020', destination: '/blog/corsi-settembre-2020', permanent: true },
      { source: '/corsi-settembre-2020/', destination: '/blog/corsi-settembre-2020', permanent: true },

      // /sistema-immunitario-attivita-fisica/ → /blog/sistema-immunitario-attivita-fisica
      { source: '/sistema-immunitario-attivita-fisica', destination: '/blog/sistema-immunitario-attivita-fisica', permanent: true },
      { source: '/sistema-immunitario-attivita-fisica/', destination: '/blog/sistema-immunitario-attivita-fisica', permanent: true },

      // ---------- PAGINE MINORI ----------
      // /shiatsu/ → /servizi/shiatsu (pagina dedicata, decisione 26/04)
      { source: '/shiatsu', destination: '/servizi/shiatsu', permanent: true },
      { source: '/shiatsu/', destination: '/servizi/shiatsu', permanent: true },

      // /online/ → /servizi
      { source: '/online', destination: '/servizi', permanent: true },
      { source: '/online/', destination: '/servizi', permanent: true },

      // /fitmatepro/ → /palestra (macchinario di analisi, citato nella pagina palestra)
      { source: '/fitmatepro', destination: '/palestra', permanent: true },
      { source: '/fitmatepro/', destination: '/palestra', permanent: true },

      // ---------- RINOMINE INTERNE ----------
      // /golf-lab/ → /golf-indoor: "golf lab" era gergo interno, l'area si
      // chiama Golf Indoor ed è quello che la gente cerca. La vecchia URL
      // era indicizzata, quindi il 301 va tenuto.
      { source: '/golf-lab', destination: '/golf-indoor', permanent: true },
      { source: '/golf-lab/', destination: '/golf-indoor', permanent: true },

      // ---------- PAGINE VIVE SENZA EQUIVALENTE ----------
      // Erano nella sitemap del WordPress e rispondevano 200: senza redirect
      // sarebbero diventate 404 vere, non deindicizzazioni naturali.

      // /ingg/ → /golf-indoor. Progetto INGG (Italian Network for Golf Goal)
      // col dott. Massimo Messina. Il testo non viene ripreso sul nuovo sito
      // (decisione 01/09): resta solo il redirect verso l'area golf.
      { source: '/ingg', destination: '/golf-indoor', permanent: true },
      { source: '/ingg/', destination: '/golf-indoor', permanent: true },

      // /educational*/ → /golf-indoor: storico di seminari 2016-2018
      // (TrackMan University, Craig Davies, Bioswing), tutti di area golf.
      { source: '/educational', destination: '/golf-indoor', permanent: true },
      { source: '/educational/', destination: '/golf-indoor', permanent: true },
      { source: '/educational-2', destination: '/golf-indoor', permanent: true },
      { source: '/educational-2/', destination: '/golf-indoor', permanent: true },
      { source: '/educational-3', destination: '/golf-indoor', permanent: true },
      { source: '/educational-3/', destination: '/golf-indoor', permanent: true },

      // /prenotazioni/ → /contatti: sul WordPress era una pagina vuota, ma
      // l'URL è parlante ed è quello che uno si salva nei preferiti.
      { source: '/prenotazioni', destination: '/contatti', permanent: true },
      { source: '/prenotazioni/', destination: '/contatti', permanent: true },

      // /attivita/ → /servizi: stessa cosa, indice delle attività.
      { source: '/attivita', destination: '/servizi', permanent: true },
      { source: '/attivita/', destination: '/servizi', permanent: true },

      // /classes-scheduled-events/ → /palestra: conteneva solo uno shortcode
      // rotto del vecchio plugin orari. L'orario vero ora è in /palestra.
      { source: '/classes-scheduled-events', destination: '/palestra', permanent: true },
      { source: '/classes-scheduled-events/', destination: '/palestra', permanent: true },

      // /video/ → /chi-siamo: raccolta di video di presentazione del centro.
      { source: '/video', destination: '/chi-siamo', permanent: true },
      { source: '/video/', destination: '/chi-siamo', permanent: true },

      // /category/news/ → /blog: unica categoria del vecchio blog.
      { source: '/category/news', destination: '/blog', permanent: true },
      { source: '/category/news/', destination: '/blog', permanent: true },

      // ---------- NOTE ----------
      // I PDF in /wp-content/uploads/* NON hanno redirect:
      //   sono copiati con path identica in /public/wp-content/uploads/.
      //
      // Le pagine /events/*, /tag/*, /shop/*, /event/* NON hanno redirect:
      //   verranno restituite come 404 e Google le deindicizzerà
      //   naturalmente in 2-3 mesi (sono thin content).
      //
      // Nemmeno il resto della demo Divi ha redirect, ed è voluto:
      //   /shortcodes/*, /gallery/*, /blog/blog-*-col-*, /home/home-*,
      //   /header-*, /forums/*, /topics/*, /groups/*, /members/*,
      //   /register/, /activate/, /activity/, /miscellaneous/, /test-3/,
      //   /contact1/. Sono pagine di esempio del tema, mai compilate: circa
      //   un centinaio di URL che è giusto far cadere.
      //
      // /privacy-policy/ NON ha redirect: stessa URL sul nuovo sito.
      //
      // /team/ e / restano identiche (zero redirect necessari).
    ];
  },
};

module.exports = nextConfig;
