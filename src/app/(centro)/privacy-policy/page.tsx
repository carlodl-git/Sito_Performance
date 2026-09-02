import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR). Titolare: Golf della Montecchia S.r.l.",
  alternates: {
    canonical: "https://www.montecchiaperformancecenter.it/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | Montecchia Performance Center",
    description:
      "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).",
    url: "https://www.montecchiaperformancecenter.it/privacy-policy",
    siteName: "Montecchia Performance Center",
    locale: "it_IT",
    type: "website",
    images: ["/images/palestra-1.jpg"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative bg-area-deep py-20 sm:py-24">
        <div className="container-narrow">
          <Link
            href="/"
            className="text-sm font-medium text-accent hover:text-accent-light"
          >
            ← Home
          </Link>
          <h1 className="mt-4 font-display text-4xl font-normal tracking-tight text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Informativa sul trattamento dei dati personali ai sensi del
            Regolamento UE 2016/679 (GDPR).
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <article
          className="container-narrow max-w-3xl text-neutral-700 leading-relaxed
            [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-normal [&_h2]:text-primary [&_h2]:mt-10 [&_h2]:mb-4
            [&_p]:mb-4
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:my-4
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:my-4
            [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-accent-light
            [&_strong]:text-primary"
        >
          <h2><strong>INFORMATIVA PER IL TRATTAMENTO DEI DATI PERSONALI</strong></h2>
          <p><strong>Informativa ai sensi e per gli effetti di cui all&apos;art. 13 e ss. del Regolamento UE n. 679/2016 del 27 aprile 2016</strong>, (General Data Protection Regulation – G.D.P.R.) <em>&quot;relativo alla protezione delle persone fisiche con riguardo al trattamento dei dati personali, nonché alla libera circolazione di tali dati e che abroga la direttiva 95/46/CE (regolamento generale sulla protezione dei dati)&quot;</em></p>
          <p>In questa informativa si descrivono le modalità di gestione dei siti internet gestiti da Golf della Montecchia Srl in riferimento al trattamento dei dati personali degli utenti che lo consultano, nonché le pratiche di trattamento dei dati trasmessi da ciascun Interessato al Titolare tramite detti siti.</p>
          <p>Vengono sottoposti al medesimo trattamento e quindi parimenti descritti nel presente documento i trattamenti riservati agli indirizzi email volontariamente sottoposti dagli Interessati a Golf della Montecchia, anche per via diversa rispetto all&apos;iscrizione al sito e che comunque fanno parte dei dati personali trattati informaticamente da Golf della Montecchia per fornire il proprio servizio di newsletter e informazione promozionale e/o sportiva, per i quali sia stato espresso, anche successivamente alla raccolta, il consenso all&apos;invio delle comunicazioni di seguito previste.</p>
          <p>La presente informativa è resa ai sensi dell&apos;art. 13 Regolamento UE 2016/679 – Regolamento generale sulla protezione dei dati (&quot;Regolamento&quot;) a coloro che interagiscono con i servizi web ed emailing di Golf della Montecchia Srl con sede in Via Montecchia 12, Selvazzano Dentro (Padova) accessibili per via telematica a partire dagli indirizzi : http://www.golfmontecchia.it; &nbsp;www.golfgalzignano.it; www.playgolf54.it; www.veniceopen.it; www.montecchiaperformancecenter.it L&apos;informativa è resa per i siti menzionati, escluso ogni altro sito eventualmente raggiunto dall&apos;utente tramite link esterni.</p>
          <p>Secondo le norme del Regolamento, i trattamenti effettuati da Golf della Montecchia sono improntati ai principi di liceità, correttezza, trasparenza, limitazione delle finalità e della conservazione, minimizzazione dei dati, esattezza, integrità e riservatezza, nonché tutti gli altri principi previsti stabiliti dal Regolamento UE n. 679/2016 e dalle altre norme vigenti in materia.</p>
          <p>Attuando la procedura di registrazione ai servizi dei siti, gli utenti comunicano volontariamente a GOLF DELLA MONTECCHIA S.r.l., Titolare del trattamento, i propri dati personali.</p>
          <p>Il conferimento dei dati è facoltativo. Tuttavia, il mancato conferimento dei dati ritenuti obbligatori &nbsp;impedirà la corretta registrazione ai siti, nonché la possibilità di fruire dei servizi riservati agli utenti registrati.</p>

          <h2>Titolare, Responsabili del trattamento dei dati e Incaricati</h2>
          <p>Il Titolare del trattamento è Golf della Montecchia S.r.l., p.iva e c.f. 02294260282 (di seguito anche il &quot;Titolare del trattamento&quot;) e può essere contattato mediante comunicazione scritta da inviarsi a: Golf della Montecchia Srl con sede in Via Montecchia 12, Selvazzano Dentro (Padova), ovvero via email all&apos;indirizzo <a href="mailto:privacy@golfmontecchia.it">privacy@golfmontecchia.it</a>.</p>
          <p>I dati personali potranno essere condivisi con soggetti che agiscono tipicamente in qualità di Responsabili del trattamento ex art. 28 del Regolamento ossia:</p>
          <ol>
            <li>persone, società o studi professionali che prestano attività di assistenza e consulenza al Titolare in materia materia contabile, amministrativa, legale, tributaria, finanziaria e di recupero crediti relativamente alla erogazione di servizi commerciali eventualmente richiesti;</li>
            <li>soggetti con i quali sia necessario interagire per l&apos;erogazione dei servizi forniti (ad esempio gli hosting provider e i responsabili del servizio <em>mailing list</em>);</li>
            <li>enti sportivi in relazione ad iscrizioni ed eventi cui partecipi l&apos;interessato;</li>
            <li>ovvero soggetti delegati a svolgere attività di manutenzione tecnica (inclusa la manutenzione degli apparati di rete e delle reti di comunicazione elettronica);</li>
            <li>soggetti, enti od autorità, autonomi titolari del trattamento, a cui sia obbligatorio comunicare i dati personali di cui si tratta in forza di disposizioni di legge o di ordini delle autorità;</li>
            <li>persone autorizzate dal Titolare al trattamento dei dati personali ex art. 29 del Regolamento necessario a svolgere attività strettamente correlate all&apos;erogazione dei servizi previsti, che si siano impegnate alla riservatezza o abbiano un adeguato obbligo legale di riservatezza.</li>
          </ol>
          <p>L&apos;elenco aggiornato dei responsabili e degli incaricati nominati dal Titolare ai sensi dell&apos;art.28 del Regolamento UE citato e delle persone autorizzate al trattamento è consultabile presso la sede di Golf della Montecchia S.r.l.</p>

          <h2><strong>Dati personali oggetto del trattamento</strong></h2>
          <p>A seguito della consultazione dei menzionati siti, o della volontaria registrazione in essi, potrebbero essere trattati dati relativi a persone identificate o identificabili.</p>
          <p>Golf della Montecchia non richiede all&apos;Interessato di fornire dati c.d. &quot;particolari&quot;, ovvero, secondo quanto previsto dal GDPR (art. 9), i dati personali che rivelino l&apos;origine razziale o etnica, le opinioni politiche, le convinzioni religiose o filosofiche, o l&apos;appartenenza sindacale, nonché dati genetici, dati biometrici intesi a identificare in modo univoco una persona fisica, dati relativi alla salute o alla vita sessuale o all&apos;orientamento sessuale della persona. Nel caso in cui la prestazione richiesta a Golf della Montecchia imponesse il trattamento di tali dati, l&apos;Interessato riceverà preventivamente apposita informativa e sarà ad Egli richiesto di prestare apposito consenso.</p>
          <p><strong>Non tutti i siti raccolgono le diverse tipologie di dati trattati; per i siti </strong>www.playgolf54.it<strong>; </strong>www.veniceopen.it<strong>; </strong><strong>www.montecchiaperformancecenter.it</strong><strong> vengono trattati solo i dati tecnici necessari per la navigazione e non viene fatto degli stessi dati alcun trattamento con finalità commerciale.</strong></p>

          <h2><strong>Tipi di dati di cui è possibile il trattamento</strong></h2>
          <p><strong><em>Dati anagrafici</em></strong></p>
          <p><strong>Nome, cognome, indirizzo fisico, nazionalità, provincia e comune di residenza, n.°telefono, codice fiscale, indirizzo email.</strong></p>
          <p><em>Dati di navigazione</em></p>
          <p>I sistemi informatici e le procedure software preposte al funzionamento di questo sito web acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell&apos;uso dei protocolli di comunicazione di Internet.</p>
          <p>Si tratta di informazioni che non sono raccolte per essere associate a interessati identificati, ma che per loro stessa natura potrebbero, attraverso elaborazioni ed associazioni con dati detenuti da terzi, permettere di identificare gli utenti.</p>
          <p>In questa categoria di dati rientrano gli indirizzi IP o i nomi a dominio dei computer utilizzati dagli utenti che si connettono al sito, gli indirizzi in notazione URI (Uniform Resource Identifier) delle risorse richieste, l&apos;orario della richiesta, il metodo utilizzato nel sottoporre la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta data dal server (buon fine, errore, ecc.) ed altri parametri relativi al sistema operativo e all&apos;ambiente informatico dell&apos;utente.</p>
          <p>Questi dati vengono utilizzati al solo fine di ricavare informazioni statistiche anonime sull&apos;uso del sito e per controllarne il corretto funzionamento (si veda anche il paragrafo sui cookies). I dati potrebbero essere utilizzati dalle autorità competenti per l&apos;accertamento di responsabilità in caso di ipotetici reati informatici ai danni del sito.</p>
          <p>Possono essere trattati inoltre dati personali forniti volontariamente dall&apos;utente.</p>
          <p><em>Cookie</em></p>
          <p>I cookie sono file di testo che vengono depositati sul vostro computer e letti da remoto dai nostri server o dai server di terze parti di cui ci serviamo. L&apos;uso di cookie tecnici permanenti oppure di cookie sessione (cioè che non vengono memorizzati in modo persistente sul computer dell&apos;utente e svaniscono con la chiusura del browser) è strettamente limitato alla fornitura tecnica del servizio richiesto dall&apos;utente e alla trasmissione di identificativi di sessione (costituiti da numeri casuali generati dal server) necessari per consentire l&apos;esplorazione sicura ed efficiente del sito e delle sue applicazioni.<br />
          I cookie tecnici utilizzati in questo sito evitano il ricorso ad altre tecniche informatiche potenzialmente pregiudizievoli per la riservatezza della navigazione degli utenti.</p>
          <p>Oltre ai cookie tecnici, questo sito utilizza cookie di analisi (Google Analytics 4, con troncamento dell&apos;indirizzo IP) e cookie funzionali (la mappa Google incorporata nella pagina Contatti). Entrambe le categorie sono <strong>disattivate per impostazione predefinita</strong> e vengono attivate solo previo consenso esplicito, raccolto tramite il banner presente alla prima visita. Il consenso è revocabile in qualsiasi momento dal link &quot;Preferenze cookie&quot; in fondo a ogni pagina: alla revoca i cookie già depositati vengono cancellati. Nessun cookie di profilazione pubblicitaria viene utilizzato. L&apos;elenco puntuale, con nomi e durate, è nella <a href="/cookie-policy">Cookie Policy</a>.</p>
          <p>Vi ricordiamo inoltre che potete impostare il vostro software browser per internet (es. Firefox, Safari, Chrome, Edge) in modalità tale da non accettare i cookie, anche tecnici, attivando la cosiddetta <strong>navigazione anonima</strong>, e che in tal caso nessun dato verrà trattato attraverso questi sistemi.</p>
          <p><em>Collegamenti ai social</em></p>
          <p>In fondo alle pagine sono presenti i collegamenti ai profili Facebook e Instagram del centro. Sono semplici link: non sono widget incorporati e non depositano alcun cookie sul dispositivo dell&apos;utente. Il trattamento dei dati inizia soltanto dopo che l&apos;utente ha lasciato questo sito, ed è regolato dall&apos;informativa della piattaforma di destinazione.</p>
          <p>Tutto ciò considerato, informiamo l&apos;utente che con la navigazione del sito, Golf della Montecchia tratterà i suoi dati personali, che potranno essere costituiti da un identificativo come il nome, un identificativo online o a uno o più elementi caratteristici della sua identità fisica, economica, culturale o sociale idonea a rendere il soggetto interessato identificato o identificabile, nonché, qualora richiesto dall&apos;interessato, i dati necessari per l&apos;iscrizione a percorsi ed attività golfistiche (di seguito anche soltanto &quot;dati personali&quot;).</p>

          <h2>Finalità e modalità del trattamento dei dati</h2>
          <p>I dati personali raccolti con la registrazione o iscrizione ai nostri siti sono trattati al fine di consentire l&apos;accesso ai&nbsp; servizi e ai contenuti riservati agli utenti registrati.</p>
          <p>I dati personali sono trattati, anche con strumenti automatizzati ed elettronici, per il tempo strettamente necessario a conseguire le finalità per cui sono stati raccolti.<br />
          Specifiche misure di sicurezza sono osservate per prevenire la perdita dei dati, usi illeciti o non corretti e accessi non autorizzati, tra cui il protocollo sicuro SSL/https per alcune parti riservate del sito e delle applicazioni e le protezioni da accessi abusivi nei server e negli altri elaboratori in uso.<br />
          I dati personali forniti dagli utenti che volontariamente si registrano o inoltrano richieste di invio di materiale informativo (newsletter, whitepaper, ecc.) sono utilizzati al fine di eseguire il servizio o la prestazione richiesta e per il mantenimento della rete di contatti golfistici e sono comunicati a terzi non nominati incaricati o responsabili dal Titolare nel solo caso in cui ciò sia a tal fine necessario (previo consenso dell&apos;interessato).</p>
          <p>L&apos;iscrizione sul sito è finalizzata a consentire, sino a revoca del consenso, che i dati personali forniti a Golf della Montecchia possano essere trattati da Golf della Montecchia Srl per:</p>
          <ol>
            <li>consentire l&apos;accesso a prodotti, servizi e contenuti;</li>
            <li>rispondere alle richieste inviate dall&apos;interessato e/o allo scopo di fornire la newsletter periodica e/o il materiale informativo e/o i whitepaper/report desiderati e/o iscrizione ad eventi, lo scaricamento di altri contenuti. Il conferimento dei dati è facoltativo, tuttavia, il mancato inserimento dei dati necessari rende impossibile l&apos;esecuzione della richiesta.</li>
            <li>inviare comunicazioni di carattere commerciale su prodotti e servizi propri o di società terze, anche con modalità automatizzate, per informare gli interessati sugli sviluppi o su nuove edizioni di newsletter, whitepaper, report, offerte ed eventi, nonché di iniziative ad essi collegate, anche promozionali;</li>
            <li>Golf della Montecchia S.r.l. utilizzerà, inoltre, i dati personali per finalità amministrative e contabili e per l&apos;esecuzione degli obblighi contrattuali nei confronti degli utenti che facciano parte della propria clientela.</li>
          </ol>
          <p>Nel caso in cui l&apos;utente richieda la registrazione/iscrizione a determinati servizi&nbsp; mediante l&apos;utilizzo di tecnologie plug-in di social networks, acconsente alla comunicazione di dati del proprio profilo/account da parte del social network a Golf della Montecchia, nella misura necessaria alla gestione della registrazione/iscrizione.</p>
          <p>I dati personali inviati mediante le procedure di registrazione possono essere trattati da Golf della Montecchia S.r.l. con strumenti automatizzati. Resta ferma la possibilità per Golf della Montecchia S.r.l. di trattare i predetti dati in forma aggregata, nel rispetto delle misure prescritte dall&apos;Autorità Garante e in virtù dello specifico esonero dal consenso previsto dalla medesima, per analisi ed elaborazioni elettroniche (es.: classificazione dell&apos;intera clientela in categorie omogenee per livelli di servizi, consumi, spesa, ecc.) dirette a monitorare periodicamente lo sviluppo e l&apos;andamento economico delle attività di Golf della Montecchia S.r.l., a orientare i relativi processi commerciali, a migliorare i servizi, nonché a progettare e realizzare le campagne di comunicazione commerciale.</p>
          <p>Specifiche misure di sicurezza sono osservate da Golf della Montecchia S.r.l. per prevenire la perdita dei dati, usi illeciti, o non corretti, e accessi non autorizzati.</p>
          <p>I dati personali sono registrati e custoditi su database elettronici situati in Italia, in Paesi appartenenti allo Spazio Economico Europeo (SEE) e in Paesi terzi che garantiscono un adeguato livello di protezione dei dati.</p>
          <p>Il trattamento dei dati personali forniti dagli utenti potrà essere effettuato anche da società, enti o consorzi, nominati responsabili del trattamento ai sensi dell&apos;art. 28 del Regolamento UE citato, che, per conto di Golf della Montecchia S.r.l, forniscono specifici servizi elaborativi, o attività connesse, strumentali o di supporto.</p>
          <p>I dati personali forniti dagli utenti potranno essere, inoltre, comunicati:</p>
          <ul>
            <li>a società partecipate o collegate;</li>
            <li>a soggetti ai quali la facoltà di accedere ai dati personali sia riconosciuta da disposizioni di legge, da regolamenti o dalla normativa comunitaria;</li>
            <li>a soggetti nei confronti dei quali la comunicazione sia prevista da norme di legge o di regolamento, ovvero da soggetti pubblici per lo svolgimento delle loro funzioni istituzionali.</li>
          </ul>
          <p>Il periodo di conservazione dei dati personali di cui sopra è in linea con le previsioni normative vigenti.</p>

          <h2><strong>Trasferimenti dei dati personali</strong></h2>
          <p>Per quanto concerne l&apos;eventuale trasferimento dei Dati verso Paesi Terzi, il Titolare rende noto che il trattamento avverrà secondo una delle modalità consentite dalla legge vigente, quali ad esempio il consenso dell&apos;interessato, l&apos;adozione di Clausole Standard approvate dalla Commissione Europea, la selezione di soggetti aderenti a programmi internazionali per la libera circolazione dei dati (es. EU-USA Privacy Shield) od operanti in Paesi considerati sicuri dalla Commissione Europea. È possibile avere maggiori informazioni, su richiesta, presso il Titolare ai contatti sopraindicati.</p>

          <h2><strong>Conservazione dei dati</strong></h2>
          <p>I dati personali trattati saranno conservati per il tempo strettamente necessario a raggiungere quelle stesse finalità nel rispetto dei principi di minimizzazione e limitazione della conservazione ex artt. 5.1.e) del Regolamento. Maggiori informazioni in merito al periodo di conservazione dei dati e ai criteri utilizzati per determinare tale periodo possono essere richieste scrivendo al Titolare al seguente indirizzo: <a href="mailto:privacy@golfmontecchia.it">privacy@golfmontecchia.it</a></p>

          <h2>Diritti dell&apos;interessato</h2>
          <p>Ai sensi degli articoli 15 e seguenti del Regolamento, l&apos; interessato ha il diritto di chiedere a Golf della Montecchia S.r.l. l&apos;accesso ai dati personali che lo riguardano, nonché la rettifica, la cancellazione,&nbsp; la limitazione del trattamento nei casi previsti dall&apos;art. 18 del Regolamento, nonché ottenere in un formato strutturato, di uso comune e leggibile da dispositivo automatico i dati che lo riguardano, nei casi previsti dall&apos;art. 20 del Regolamento.</p>
          <p>L&apos;interessato ha il diritto di revocare il consenso in qualsiasi momento senza pregiudicare la liceità del trattamento basata sul consenso prestato prima della revoca.</p>
          <p>L&apos;interessato può formulare una richiesta di opposizione al trattamento dei suoi dati personali ex articolo 21 del GDPR nella quale dare evidenza delle ragioni che giustifichino l&apos;opposizione: il Titolare si riserva di valutare l&apos;istanza, che verrà accettata nel caso in cui non vi siano motivi legittimi cogenti per procedere al trattamento, prevalenti sugli interessi, diritti e libertà dell&apos;utente.<br />
          Le richieste vanno rivolte per iscritto al Titolare al seguente indirizzo: <a href="mailto:privacy@golfmontecchia.it">privacy@golfmontecchia.it</a></p>
          <p>L&apos;interessato ha il diritto di proporre reclamo all&apos;Autorità Garante per il trattamento dei dati personali, ai sensi dell&apos;art. 77 del Regolamento UE 679/2016.</p>
        </article>
      </section>
    </>
  );
}
