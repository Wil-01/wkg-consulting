// Single source of truth for everything the site states.
// Rule (CLAUDE.md): no figure without a source. Unknown facts are `pending(...)`,
// rendered visibly as such — never filled with a plausible guess.

export type Pending = { pending: string };
export type Text = string | Pending;

export const pending = (note: string): Pending => ({ pending: note });
export const isPending = (value: Text): value is Pending =>
  typeof value === "object" && value !== null && "pending" in value;

export const site = {
  name: "WKG Consulting",
  owner: "Williams Kouton Godonou",
  role: "Développeur indépendant",
  thesis: "Je construis des systèmes dont on peut vérifier les décisions.",
  tagline: "Le calcul vit dans le code. Le modèle ne fait que formuler.",
};

// Step 1 of docs/wkg-conversion.md §8: a plain outbound booking link, no chatbot.
export const booking = {
  url: process.env.NEXT_PUBLIC_BOOKING_URL ?? null,
  label: "Réserver un appel de 15 minutes",
  fallbackLabel: "Le calendrier ne s'affiche pas ? Ouvrir la page de réservation",
  intro:
    "Quinze minutes pour savoir si c'est faisable et à quel ordre de grandeur. " +
    "La page de réservation vous demande ce qui coince aujourd'hui : l'appel commence par là.",
  candor: "Un avis franc sur la faisabilité, y compris quand c'est non.",
};

// Four families of problems, not a list of technologies.
export const services: { title: string; problem: string; answer: string }[] = [
  {
    title: "Calcul vérifiable",
    problem: "Des chiffres affichés dont personne ne sait d'où ils viennent.",
    answer:
      "Un moteur de calcul déterministe : chaque valeur produite est accompagnée de la règle " +
      "qui l'a produite, et peut être rejouée.",
  },
  {
    title: "IA en production",
    problem: "De l'IA qui fonctionne en démonstration, pas en production.",
    answer:
      "Des traitements orchestrés en file, un corpus borné, une reprise sur erreur et un coût " +
      "par conversation plafonné — pas un appel à un modèle derrière un formulaire.",
  },
  {
    title: "Mise en ligne",
    problem: "Une activité qui n'existe pas encore en ligne.",
    answer:
      "Nom de domaine, messagerie professionnelle, hébergement, mise en ligne, puis " +
      "référencement et première campagne d'acquisition.",
  },
  {
    title: "Reprise d'existant",
    problem: "Un système qui produit des chiffres que personne n'arrive à justifier.",
    answer:
      "J'instrumente, je trouve d'où vient le chiffre, et je rends la décision traçable.",
  },
];

export type CaseStudy = {
  id: string;
  title: string;
  status: Text;
  proves: string;
  problem: Text;
  body: Text[];
  decisions?: { decision: string; reason: Text }[];
  stack?: string[];
  // Every figure carries its scope and its source (CLAUDE.md).
  measures?: { figure: string; scope: string; source: string }[];
  note?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "motis",
    title: "MOTIS",
    // Never remove until the product is on sale (CLAUDE.md).
    status: "Lancement en préparation",
    proves: "La rigueur d'un système dont chaque décision se justifie.",
    problem:
      "Des chiffres affichés sans provenance : la confiance s'érode dès qu'on ne peut plus " +
      "expliquer un résultat.",
    body: [
      "MOTIS est un produit grand public de la même entreprise. Il est présenté ici pour la " +
        "manière dont il est construit, pas pour son usage : il n'est pas encore en vente, " +
        "il n'y a donc ni utilisateurs ni revenus à afficher.",
    ],
    decisions: [
      {
        decision: "Moteur déterministe",
        reason: "Le calcul vit dans le code ; un modèle de langage ne fait que formuler le résultat.",
      },
      {
        decision: "Journal des décisions",
        // Deliberately not "every adjustment": that absolute claim is unverified
        // (docs/wkg-site-contenu.md §1.1).
        reason:
          "Le moteur consigne ce qu'il décide et pourquoi. C'est ce journal qui a révélé, en " +
          "mode ombre, un passage planifié de 100 kg à 2,5 kg.",
      },
      {
        decision: "Mode ombre avant écriture",
        reason:
          "Le moteur calculait et consignait sans rien écrire. Les erreurs de raisonnement " +
          "apparaissaient sur des données réelles avant d'atteindre un utilisateur.",
      },
      {
        decision: "Tests de mutation",
        reason:
          "Une suite verte qu'on n'a jamais vue échouer ne prouve rien. On introduit " +
          "délibérément une faille — un trou dans la règle, ou une règle trop large — et on " +
          "vérifie qu'elle est détectée, avec des contrôles positifs.",
      },
    ],
    // "578 tests d'isolement" stays out until its figure and scope are confirmed.
  },
  {
    id: "lead-pipeline",
    title: "Pipeline de qualification de leads",
    status: "En développement",
    proves: "L'IA en production, orchestrée, avec un coût maîtrisé.",
    problem:
      "Qualifier et relancer des prospects commerciaux à la main prend le temps qu'on devrait " +
      "passer avec ceux qui sont prêts.",
    body: [
      "Un pipeline agentique business-to-business qui qualifie et relance automatiquement des " +
        "prospects, exposé par un chatbot web embarquable fondé sur la génération augmentée par " +
        "récupération, et piloté par un tableau de bord d'administration.",
      "Ce n'est pas un appel à un modèle derrière un formulaire. C'est une file de traitements " +
        "orchestrés, avec un corpus borné, une reprise sur erreur et un coût par conversation " +
        "plafonné. La différence entre les deux est exactement ce que le client achète.",
    ],
    stack: [
      "Next.js (interface)",
      "NestJS (passerelle d'API)",
      "FastAPI + SDK Anthropic (agents)",
      "PostgreSQL + pgvector",
      "Redis",
      "BullMQ",
    ],
    note:
      "L'assistant de ce site sera une instance de ce pipeline : le visiteur qui converse " +
      "essaiera le système en vente.",
  },
  {
    id: "huetchenou",
    // Name authorized by the client — see docs/autorisations.md. Link and captures: not yet.
    title: "Huetchenou",
    status: "Vitrine livrée · portail en cours",
    proves:
      "Faire exister une activité en ligne de bout en bout, acquisition comprise — pas seulement " +
      "écrire du logiciel.",
    problem:
      "Un conseiller éditorial — correction et relecture de manuscrits pour des maisons " +
      "d'édition — sans présence en ligne ni outil pour échanger des documents avec ses clients.",
    body: [
      "Site vitrine livré : nom de domaine, messagerie professionnelle, hébergement, mise en " +
        "ligne, référencement et première campagne d'acquisition.",
      "Portail en cours : dépôt et consultation de documents, bibliothèque triable et " +
        "recherchable, qualification des documents par le client.",
    ],
  },
  {
    id: "cryo",
    title: "Cryo",
    status: "En développement · rien de publié",
    proves:
      "Du logiciel système natif — processus, mémoire, API Windows — qui ne ment pas sur ce " +
      "qu'il fait.",
    problem:
      "Sur un portable à 8 Go de mémoire vive, ouvrir une application lourde oblige à choisir : " +
      "tout fermer et perdre son contexte, ou tout garder et ne plus pouvoir travailler.",
    body: [
      "Cryo est une application Windows qui « gèle » une application ou une fenêtre : elle " +
        "cesse de consommer processeur et mémoire, et revient plus tard dans l'état où on l'a " +
        "laissée — onglets, fichiers non enregistrés, terminaux.",
    ],
    decisions: [
      {
        decision: "Deux chiffres au lieu d'un",
        reason:
          "Suspendre un processus libère le processeur, pas la mémoire, et évincer sa mémoire " +
          "ne la rend pas au système. Cryo affiche séparément la mémoire libérée maintenant et " +
          "celle réellement rendue : un chiffre unique aurait gonflé le gain.",
      },
      {
        decision: "Deux niveaux de gel",
        reason:
          "Le gel rapide suspend n'importe quelle application mais ne survit pas à un " +
          "redémarrage. Le gel profond sauvegarde l'état par un adaptateur dédié (Chrome, " +
          "VS Code, Docker) puis ferme l'application. Faute d'adaptateur, Cryo se rabat sur le " +
          "gel rapide plutôt que de promettre une restauration qu'il ne sait pas faire.",
      },
      {
        decision: "Restauration idempotente",
        reason:
          "Une réponse perdue ne doit pas rouvrir une fenêtre deux fois : dégeler deux fois le " +
          "même instantané ne restaure qu'une fois.",
      },
    ],
    measures: [
      {
        figure: "−2,44 Go",
        scope:
          "Mémoire privée de Chrome après le gel profond d'une fenêtre d'environ 15 onglets, sur " +
          "une machine de 7,86 Go saturée (460 Mo disponibles). La mémoire disponible du système " +
          "a augmenté de 2,59 Go en moins de 3 secondes. Le coût du dégel n'a pas encore été mesuré.",
        source: "Journal de mesures, 10 novembre 2026, Windows",
      },
      {
        figure: "75 à 89 %",
        scope:
          "Part de la mémoire privée d'une application gelée en gel rapide qui redevient " +
          "disponible environ 10 secondes après : VS Code 89 %, Chrome 79 à 83 %, Teams 75 %. " +
          "Premier cycle de chaque application, sur une machine chargée — une mesure bruitée.",
        source: "Journal de mesures, 10 novembre 2026, Windows",
      },
      {
        figure: "14 à 22 Mo",
        scope:
          "Ensemble de travail de Cryo au repos, réduit dans la zone de notification, sans " +
          "consommation de processeur mesurable.",
        source: "Journal de mesures, 10 novembre 2026, Windows",
      },
    ],
    stack: [
      "Rust (cœur, API Win32)",
      "Tauri + React",
      "Extension Chrome + hôte natif",
      "Extension VS Code",
    ],
    note: "Projet personnel. Nom de travail.",
  },
];

// Four principles, each drawn from a real failure.
// Rule: no user, no client, no person in these stories — engineering lessons only.
export const method: { title: string; body: string; failure: string }[] = [
  {
    title: "Une décision doit pouvoir se justifier",
    body:
      "Un résultat qui compte est produit par une règle écrite, et on peut dire d'où il vient.",
    failure:
      "Un même champ portait trois sens différents selon l'endroit du code. Les " +
      "macronutriments totalisaient 3 370 kcal pour une cible de 3 100, et personne ne pouvait " +
      "dire d'où venait l'écart.",
  },
  {
    title: "Un refus n'est pas une panne",
    body:
      "Refuser une donnée invalide est un résultat normal, qui doit se distinguer d'une erreur.",
    failure:
      "Un refus légitime renvoyait une erreur serveur. La file d'envoi mobile a rejoué " +
      "indéfiniment des données invalides.",
  },
  {
    title: "Observer avant d'écrire",
    body:
      "Un nouveau traitement tourne d'abord en mode ombre : il calcule et consigne, sans rien " +
      "modifier.",
    failure:
      "Le moteur planifiait un passage de 100 kg à 2,5 kg sur quatre séances : pas de charge de " +
      "référence, et une fourchette « 8-12 » lue comme « 8-8 ». Trouvé par le journal des " +
      "décisions, avant d'atteindre une séance réelle.",
  },
  {
    title: "Les tests doivent savoir échouer",
    body:
      "On sabote volontairement le code : un test qui reste vert devant un sabotage ne protège rien.",
    failure:
      "Une règle interdisait toute donnée personnelle dans les alertes techniques. La règle " +
      "existait, son application non : une adresse de courriel est passée dans une alerte.",
  },
];

// Flat list, no mastery ranking.
export const tools = [
  "TypeScript",
  "Python",
  "Rust",
  "Next.js",
  "React",
  "NestJS",
  "FastAPI",
  "Tauri",
  "PostgreSQL",
  "pgvector",
  "Redis",
  "BullMQ",
  "Docker",
  "SDK Anthropic",
  "Vercel",
];
