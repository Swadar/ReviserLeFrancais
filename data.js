const baseDeDonnees = [
    {
        id: 1,
        niveau: "Basique",
        texte: "Les pommes que j'ai mangé étaient délicieuses.",
        contient_erreur: true,
        mot_errone: "mangé",
        explication: "Le participe passé s'accorde avec le COD (les pommes) placé avant le verbe. Il fallait écrire 'mangées'."
    },
    {
        id: 2,
        niveau: "Basique",
        texte: "Elle a toujours cru en ses capacités.",
        contient_erreur: false,
        mot_errone: null,
        explication: "Le participe passé du verbe croire conjugué avec 'avoir' ne s'accorde pas ici, car il n'y a pas de COD avant le verbe."
    },
    {
        id: 3,
        niveau: "Avancé",
        texte: "Ils se sont lavés les mains avant le repas.",
        contient_erreur: true,
        mot_errone: "lavés",
        explication: "Avec un verbe pronominal, si le COD (les mains) est placé après le verbe, le participe passé ne s'accorde pas. Il fallait écrire 'lavé'."
    },
    {
        id: 4,
        niveau: "Avancé",
        texte: "Malgré ses efforts, elle s'est contredit devant le jury.",
        contient_erreur: true,
        mot_errone: "contredit",
        explication: "Le participe passé d'un verbe pronominal s'accorde avec le sujet si le pronom réfléchi est COD. Ici, elle a contredit 'elle-même'. Il fallait écrire 'contredite'."
    }
];