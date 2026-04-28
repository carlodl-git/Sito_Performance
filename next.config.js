/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'placehold.co' },
    ],
  },

  // ============================================================
  // Redirect 301 — Migrazione SEO da WordPress a Next.js
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
      // /dt_workouts/pilates-e-yoga/ → /servizi/pilates-yoga (112 clic/anno — pagina top)
      { source: '/dt_workouts/pilates-e-yoga', destination: '/servizi/pilates-yoga', permanent: true },
      { source: '/dt_workouts/pilates-e-yoga/', destination: '/servizi/pilates-yoga', permanent: true },

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

      // ---------- GALLERIA DIVI ----------
      // /dt_galleries/performance-center/ → /
      { source: '/dt_galleries/performance-center', destination: '/', permanent: true },
      { source: '/dt_galleries/performance-center/', destination: '/', permanent: true },

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

      // ---------- NOTE ----------
      // I PDF in /wp-content/uploads/* NON hanno redirect:
      //   sono copiati con path identica in /public/wp-content/uploads/.
      //
      // Le pagine /events/*, /tag/*, /shop/*, /event/* NON hanno redirect:
      //   verranno restituite come 404 e Google le deindicizzerà
      //   naturalmente in 2-3 mesi (sono thin content).
      //
      // /privacy-policy/ NON ha redirect: stessa URL sul nuovo sito.
      //
      // /golf-lab/, /team/, / restano identiche (zero redirect necessari).
    ];
  },
};

module.exports = nextConfig;
