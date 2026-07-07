const baseDeDonnees = [
    // --- NIVEAU BASIQUE ---
    {
        id: 1,
        niveau: "Basique",
        texte: "Le kayak à été loué pour l'excursion en mer.",
        contient_erreur: true,
        mot_errone: "à",
        explication: "Il s'agit du verbe avoir conjugué. On peut remplacer par 'avait'. Il fallait écrire 'a'."
    },
    {
        id: 2,
        niveau: "Basique",
        texte: "Elle a préparé toutes ses affaires de ski pour demain.",
        contient_erreur: false,
        mot_errone: null,
        explication: "L'adjectif possessif 'ses' (les siennes) est correct ici."
    },
    {
        id: 3,
        niveau: "Basique",
        texte: "Il faut mélangé la pâte délicatement pour ne pas la casser.",
        contient_erreur: true,
        mot_errone: "mélangé",
        explication: "Quand deux verbes se suivent, le second est à l'infinitif. Astuce : on peut dire 'il faut prendre' (et non 'pris'). Il fallait écrire 'mélanger'."
    },
    {
        id: 4,
        niveau: "Basique",
        texte: "Les jeux multiplateformes sont de plus en plus populaires.",
        contient_erreur: false,
        mot_errone: null,
        explication: "L'accord de l'adjectif 'populaires' avec le sujet masculin pluriel 'Les jeux' est correct."
    },
    {
        id: 5,
        niveau: "Basique",
        texte: "Les sculptures de cette exposition son vraiment magnifiques.",
        contient_erreur: true,
        mot_errone: "son",
        explication: "Il s'agit du verbe être (elles sont). 'Son' est un déterminant possessif (le sien). Il fallait écrire 'sont'."
    },

    // --- NIVEAU AVANCÉ ---
    {
        id: 6,
        niveau: "Avancé",
        texte: "Les recettes de sushis que j'ai essayé étaient très techniques.",
        contient_erreur: true,
        mot_errone: "essayé",
        explication: "Le participe passé conjugué avec 'avoir' s'accorde avec le COD s'il est placé avant. J'ai essayé quoi ? 'les recettes' (féminin pluriel). Il fallait écrire 'essayées'."
    },
    {
        id: 7,
        niveau: "Avancé",
        texte: "Les héroïnes se sont souries avant le combat final.",
        contient_erreur: true,
        mot_errone: "souries",
        explication: "Les verbes pronominaux qui n'ont jamais de COD (on sourit À quelqu'un, pas quelqu'un) restent invariables. Il fallait écrire 'souri'."
    },
    {
        id: 8,
        niveau: "Avancé",
        texte: "Des personnages tout puissants dominent ce monde imaginaire.",
        contient_erreur: true,
        mot_errone: "tout",
        explication: "Devant un adjectif masculin pluriel, l'adverbe 'tout' prend un 's' lorsqu'il signifie 'entièrement'. Il fallait écrire 'tous'."
    },
    {
        id: 9,
        niveau: "Avancé",
        texte: "Les pièces de théâtre qu'ils ont lues pour l'examen de littérature.",
        contient_erreur: false,
        mot_errone: null,
        explication: "Le participe passé s'accorde bien avec le COD placé avant (les pièces de théâtre, féminin pluriel)."
    },
    {
        id: 10,
        niveau: "Avancé",
        texte: "Même fatiguée, elle s'est permis une pause bien méritée.",
        contient_erreur: false,
        mot_errone: null,
        explication: "Ici, 'une pause' est le COD et il est placé APRÈS le verbe. Le participe passé du verbe pronominal ne s'accorde donc pas avec le sujet."
    },
    {
        id: 11,
        niveau: "Avancé",
        texte: "La séance d'entraînement qu'elle a planifié avec le groupe d'enfants.",
        contient_erreur: true,
        mot_errone: "planifié",
        explication: "Le COD (La séance d'entraînement) est placé avant le verbe avoir. Il fallait écrire 'planifiée'."
    },
    {
        id: 12,
        niveau: "Avancé",
        texte: "Ils se sont succédé sur le podium avec beaucoup de fierté.",
        contient_erreur: false,
        mot_errone: null,
        explication: "Le verbe se succéder n'admet pas de COD (on succède À quelqu'un). Le participe passé est donc toujours invariable."
    }
];