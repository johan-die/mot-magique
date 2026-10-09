// Banque de mots enrichie et organisée en 5 NIVEAUX DE DIFFICULTÉ PROGRESSIFS
// Conçue pour les 6-7 ans (CP) jusqu'aux défis pour CE1 / CE2

export const DIFFICULTY_LEVELS = [
  {
    "id": 1,
    "name": "Facile",
    "subtitle": "Début CP",
    "description": "Mots simples (3-5 lettres) sans lettre muette ni piège, 100% réguliers",
    "emoji": "🌱",
    "color": "from-emerald-400 to-green-500",
    "textColor": "text-emerald-700",
    "badgeBg": "bg-emerald-100 text-emerald-800 border-emerald-300",
    "starsReward": 1,
    "distractorCount": 0
  },
  {
    "id": 2,
    "name": "Moyen",
    "subtitle": "CP courant",
    "description": "Mots de 4-6 lettres avec sons fréquents (ou, on, ch...)",
    "emoji": "⭐",
    "color": "from-sky-400 to-blue-500",
    "textColor": "text-sky-700",
    "badgeBg": "bg-sky-100 text-sky-800 border-sky-300",
    "starsReward": 2,
    "distractorCount": 2
  },
  {
    "id": 3,
    "name": "Difficile",
    "subtitle": "Fin CP / CE1",
    "description": "Mots de 6-8 lettres, doubles consonnes et lettres muettes",
    "emoji": "🔥",
    "color": "from-amber-400 to-orange-500",
    "textColor": "text-amber-700",
    "badgeBg": "bg-amber-100 text-amber-900 border-amber-300",
    "starsReward": 3,
    "distractorCount": 4
  },
  {
    "id": 4,
    "name": "Expert",
    "subtitle": "CE1 courant",
    "description": "Mots de 7-10 lettres, sons complexes (ouille, eau, ein...)",
    "emoji": "💎",
    "color": "from-rose-400 to-red-500",
    "textColor": "text-rose-700",
    "badgeBg": "bg-rose-100 text-rose-900 border-rose-300",
    "starsReward": 4,
    "distractorCount": 6
  },
  {
    "id": 5,
    "name": "Maître",
    "subtitle": "Grand Défi CE1/CE2",
    "description": "Mots longs, mode dictée audio (image masquée) et grand Scrabble",
    "emoji": "👑",
    "color": "from-purple-500 to-indigo-600",
    "textColor": "text-purple-700",
    "badgeBg": "bg-purple-100 text-purple-900 border-purple-300",
    "starsReward": 5,
    "distractorCount": 8
  }
];

export const WORD_CATEGORIES = [
  {
    "id": "tous",
    "label": "Tous les mots",
    "emoji": "🌟"
  },
  {
    "id": "animaux",
    "label": "Animaux",
    "emoji": "🦁"
  },
  {
    "id": "aliments",
    "label": "Miam !",
    "emoji": "🍎"
  },
  {
    "id": "objets",
    "label": "Maison & École",
    "emoji": "✏️"
  },
  {
    "id": "nature",
    "label": "Nature",
    "emoji": "🌳"
  },
  {
    "id": "transports",
    "label": "Véhicules",
    "emoji": "🚀"
  }
];

export const WORDS = [
  {
    "id": "coq",
    "word": "coq",
    "level": 1,
    "category": "animaux",
    "emoji": "🐓",
    "hint": "L'oiseau de la ferme qui chante cocorico à l'aube.",
    "example": "Le coq réveille toute la basse-cour.",
    "color": "#fef3c7"
  },
  {
    "id": "bouc",
    "word": "bouc",
    "level": 1,
    "category": "animaux",
    "emoji": "🐐",
    "hint": "Le mâle de la chèvre avec de belles cornes et une barbiche.",
    "example": "Le bouc grimpe agilement sur le rocher.",
    "color": "#fef3c7"
  },
  {
    "id": "ver",
    "word": "ver",
    "level": 1,
    "category": "animaux",
    "emoji": "🪱",
    "hint": "Petit animal sans pattes qui creuse dans la terre du jardin.",
    "example": "Le ver de terre aide la terre du potager.",
    "color": "#ffedd5"
  },
  {
    "id": "lama",
    "word": "lama",
    "level": 1,
    "category": "animaux",
    "emoji": "🦙",
    "hint": "Animal doux des montagnes d'Amérique du Sud qui crache parfois.",
    "example": "Le lama avance à petits pas sur le chemin.",
    "color": "#fef9c3"
  },
  {
    "id": "koala",
    "word": "koala",
    "level": 1,
    "category": "animaux",
    "emoji": "🐨",
    "hint": "Petit animal tout rond d'Australie qui mange de l'eucalyptus.",
    "example": "Le koala s'endort paisiblement dans son arbre.",
    "color": "#e2e8f0"
  },
  {
    "id": "boa",
    "word": "boa",
    "level": 1,
    "category": "animaux",
    "emoji": "🐍",
    "hint": "Grand serpent calme qui s'enroule autour des branches.",
    "example": "Le boa glisse sans bruit entre les feuilles.",
    "color": "#dcfce7"
  },
  {
    "id": "puma",
    "word": "puma",
    "level": 1,
    "category": "animaux",
    "emoji": "🐆",
    "hint": "Grand félin très agile qui sait grimper et bondir haut.",
    "example": "Le puma observe la plaine depuis la falaise.",
    "color": "#fed7aa"
  },
  {
    "id": "panda",
    "word": "panda",
    "level": 1,
    "category": "animaux",
    "emoji": "🐼",
    "hint": "Grand animal noir et blanc qui adore grignoter du bambou.",
    "example": "Le panda croque de tendres tiges vertes.",
    "color": "#f1f5f9"
  },
  {
    "id": "lion",
    "word": "lion",
    "level": 1,
    "category": "animaux",
    "emoji": "🦁",
    "hint": "Le roi de la savane avec sa magnifique crinière dorée.",
    "example": "Le lion rugit fièrement sous le soleil couchant.",
    "color": "#fef3c7"
  },
  {
    "id": "ours",
    "word": "ours",
    "level": 1,
    "category": "animaux",
    "emoji": "🐻",
    "hint": "Grand animal fort qui adore le miel et dort tout l'hiver.",
    "example": "L'ours pêche un poisson frais dans la rivière.",
    "color": "#fed7aa"
  },
  {
    "id": "canari",
    "word": "canari",
    "level": 1,
    "category": "animaux",
    "emoji": "🐤",
    "hint": "Joli petit oiseau jaune vif qui chante de douces mélodies.",
    "example": "Le canari siffle gaiement dès le matin.",
    "color": "#fef9c3"
  },
  {
    "id": "bison",
    "word": "bison",
    "level": 1,
    "category": "animaux",
    "emoji": "🦬",
    "hint": "Grand animal massif à cornes qui galope dans les plaines.",
    "example": "Le bison court à travers la grande prairie.",
    "color": "#e2e8f0"
  },
  {
    "id": "ara",
    "word": "ara",
    "level": 1,
    "category": "animaux",
    "emoji": "🦜",
    "hint": "Grand perroquet aux plumes éclatantes rouge, bleu et jaune.",
    "example": "L'ara déploie ses grandes ailes multicolores.",
    "color": "#fee2e2"
  },
  {
    "id": "okapi",
    "word": "okapi",
    "level": 1,
    "category": "animaux",
    "emoji": "🦓",
    "hint": "Animal secret de la forêt avec des rayures blanches sur les pattes.",
    "example": "L'okapi se cache dans la végétation épaisse.",
    "color": "#ffedd5"
  },
  {
    "id": "lemur",
    "word": "lémur",
    "level": 1,
    "category": "animaux",
    "emoji": "🐒",
    "hint": "Petit animal agile de Madagascar aux grands yeux ronds.",
    "example": "Le lémur saute d'arbre en arbre avec agilité.",
    "color": "#fef3c7"
  },
  {
    "id": "crabe",
    "word": "crabe",
    "level": 1,
    "category": "animaux",
    "emoji": "🦀",
    "hint": "Petit animal marin avec deux pinces qui marche de côté sur le sable.",
    "example": "Le crabe se faufile entre les rochers à marée basse.",
    "color": "#fee2e2"
  },
  {
    "id": "rat",
    "word": "rat",
    "level": 2,
    "category": "animaux",
    "emoji": "🐀",
    "hint": "Petit rongeur rusé avec une longue queue fine.",
    "example": "Le rat se cache dans un trou.",
    "color": "#e2e8f0"
  },
  {
    "id": "pie",
    "word": "pie",
    "level": 2,
    "category": "animaux",
    "emoji": "🐦",
    "hint": "Oiseau noir et blanc connu pour aimer les objets brillants.",
    "example": "La pie jacasse perchée sur la branche.",
    "color": "#f1f5f9"
  },
  {
    "id": "oie",
    "word": "oie",
    "level": 2,
    "category": "animaux",
    "emoji": "🪿",
    "hint": "Grand oiseau blanc qui cacarde près de la mare.",
    "example": "L'oie surveille fièrement ses petits.",
    "color": "#f8fafc"
  },
  {
    "id": "pou",
    "word": "pou",
    "level": 2,
    "category": "animaux",
    "emoji": "🪲",
    "hint": "Tout petit insecte qui adore se cacher dans les cheveux.",
    "example": "On passe le peigne pour chasser le pou.",
    "color": "#fee2e2"
  },
  {
    "id": "paon",
    "word": "paon",
    "level": 2,
    "category": "animaux",
    "emoji": "🦚",
    "hint": "Magnifique oiseau qui fait la roue avec ses plumes.",
    "example": "Le paon déploie sa queue magique.",
    "color": "#cffafe"
  },
  {
    "id": "veau",
    "word": "veau",
    "level": 2,
    "category": "animaux",
    "emoji": "🐮",
    "hint": "Le petit de la vache qui boit du bon lait.",
    "example": "Le petit veau galope dans l'enclos.",
    "color": "#ffedd5"
  },
  {
    "id": "ane",
    "word": "âne",
    "level": 2,
    "category": "animaux",
    "emoji": "🫏",
    "hint": "Animal doux et patient qui fait hi-han.",
    "example": "L'âne porte de lourds paniers.",
    "color": "#e2e8f0"
  },
  {
    "id": "cerf",
    "word": "cerf",
    "level": 2,
    "category": "animaux",
    "emoji": "🦌",
    "hint": "Le seigneur de la forêt coiffé de grands bois.",
    "example": "Le cerf brame au coucher du soleil.",
    "color": "#fed7aa"
  },
  {
    "id": "thon",
    "word": "thon",
    "level": 2,
    "category": "animaux",
    "emoji": "🐟",
    "hint": "Grand poisson très rapide nageant en haute mer.",
    "example": "Le thon bondit hors de l'eau bleue.",
    "color": "#dbeafe"
  },
  {
    "id": "chat",
    "word": "chat",
    "level": 2,
    "category": "animaux",
    "emoji": "🐱",
    "hint": "Il ronronne et adore chasser les souris.",
    "example": "Le chat boit son lait.",
    "color": "#ffedd5"
  },
  {
    "id": "loup",
    "word": "loup",
    "level": 2,
    "category": "animaux",
    "emoji": "🐺",
    "hint": "Il hurle à la lune dans la forêt.",
    "example": "Le loup vit dans les bois.",
    "color": "#e2e8f0"
  },
  {
    "id": "chien",
    "word": "chien",
    "level": 2,
    "category": "animaux",
    "emoji": "🐶",
    "hint": "Le meilleur ami qui aboie et remue la queue.",
    "example": "Le chien court après la balle.",
    "color": "#fef3c7"
  },
  {
    "id": "lapin",
    "word": "lapin",
    "level": 2,
    "category": "animaux",
    "emoji": "🐰",
    "hint": "Il a de longues oreilles et adore les carottes.",
    "example": "Le petit lapin sautille dans l'herbe.",
    "color": "#f3e8ff"
  },
  {
    "id": "singe",
    "word": "singe",
    "level": 2,
    "category": "animaux",
    "emoji": "🐵",
    "hint": "Il saute de branche en branche et fait des grimaces.",
    "example": "Le singe mange une banane.",
    "color": "#fef3c7"
  },
  {
    "id": "tigre",
    "word": "tigre",
    "level": 2,
    "category": "animaux",
    "emoji": "🐯",
    "hint": "Grand félin fauve avec des rayures noires.",
    "example": "Le tigre se cache dans la jungle.",
    "color": "#ffedd5"
  },
  {
    "id": "poule",
    "word": "poule",
    "level": 2,
    "category": "animaux",
    "emoji": "🐔",
    "hint": "Elle picore des graines et pond des œufs frais.",
    "example": "La poule caquette dans la cour.",
    "color": "#fef3c7"
  },
  {
    "id": "vache",
    "word": "vache",
    "level": 2,
    "category": "animaux",
    "emoji": "🐮",
    "hint": "Elle broute l'herbe dans le pré et fait Meuh.",
    "example": "La vache a de belles taches.",
    "color": "#f1f5f9"
  },
  {
    "id": "cheval",
    "word": "cheval",
    "level": 2,
    "category": "animaux",
    "emoji": "🐴",
    "hint": "Il galope dans le pré et hennit joyeusement.",
    "example": "Le cheval saute l'obstacle.",
    "color": "#fed7aa"
  },
  {
    "id": "biche",
    "word": "biche",
    "level": 2,
    "category": "animaux",
    "emoji": "🦌",
    "hint": "La femelle du cerf, très gracieuse et rapide.",
    "example": "La biche bondit au fond des bois.",
    "color": "#ffedd5"
  },
  {
    "id": "poney",
    "word": "poney",
    "level": 2,
    "category": "animaux",
    "emoji": "🐴",
    "hint": "Un petit cheval très docile parfait pour les enfants.",
    "example": "Je monte sur un gentil poney.",
    "color": "#fed7aa"
  },
  {
    "id": "zebre",
    "word": "zèbre",
    "level": 2,
    "category": "animaux",
    "emoji": "🦓",
    "hint": "Cousin du cheval vêtu de rayures blanches et noires.",
    "example": "Le zèbre broute dans la plaine africaine.",
    "color": "#f1f5f9"
  },
  {
    "id": "canard",
    "word": "canard",
    "level": 2,
    "category": "animaux",
    "emoji": "🦆",
    "hint": "Il barbote sur la mare et fait coin-coin.",
    "example": "Les canards nagent en file indienne.",
    "color": "#fef3c7"
  },
  {
    "id": "cygne",
    "word": "cygne",
    "level": 2,
    "category": "animaux",
    "emoji": "🦢",
    "hint": "Grand oiseau au long cou glissant gracieusement sur l'eau.",
    "example": "Le cygne blanc nage sur le lac.",
    "color": "#f8fafc"
  },
  {
    "id": "aigle",
    "word": "aigle",
    "level": 2,
    "category": "animaux",
    "emoji": "🦅",
    "hint": "Rapace majestueux volant très haut dans le ciel.",
    "example": "L'aigle plane au-dessus des sommets.",
    "color": "#fed7aa"
  },
  {
    "id": "faucon",
    "word": "faucon",
    "level": 2,
    "category": "animaux",
    "emoji": "🦅",
    "hint": "Oiseau de proie qui plonge en piqué à toute vitesse.",
    "example": "Le faucon a un regard perçant.",
    "color": "#fed7aa"
  },
  {
    "id": "hibou",
    "word": "hibou",
    "level": 2,
    "category": "animaux",
    "emoji": "🦉",
    "hint": "Oiseau nocturne avec des aigrettes sur la tête.",
    "example": "Le hibou hulule au clair de lune.",
    "color": "#ede9fe"
  },
  {
    "id": "loutre",
    "word": "loutre",
    "level": 2,
    "category": "animaux",
    "emoji": "🦦",
    "hint": "Petit mammifère joueur qui nage le ventre en l'air.",
    "example": "La loutre plonge dans la rivière.",
    "color": "#fed7aa"
  },
  {
    "id": "taupe",
    "word": "taupe",
    "level": 2,
    "category": "animaux",
    "emoji": "🐾",
    "hint": "Elle vit sous terre et creuse de petits monticules.",
    "example": "La taupe fabrique une taupinière.",
    "color": "#e2e8f0"
  },
  {
    "id": "souris",
    "word": "souris",
    "level": 2,
    "category": "animaux",
    "emoji": "🐭",
    "hint": "Petite bête grise avec un S muet à la fin.",
    "example": "La petite souris grignote le fromage.",
    "color": "#e2e8f0"
  },
  {
    "id": "mouton",
    "word": "mouton",
    "level": 2,
    "category": "animaux",
    "emoji": "🐑",
    "hint": "Il a une épaisse laine blanche et fait bêê.",
    "example": "Le mouton broute dans le pré.",
    "color": "#f8fafc"
  },
  {
    "id": "chevre",
    "word": "chèvre",
    "level": 2,
    "category": "animaux",
    "emoji": "🐐",
    "hint": "Animal agile qui aime grimper sur les rochers.",
    "example": "La chèvre donne du bon lait.",
    "color": "#fef3c7"
  },
  {
    "id": "taureau",
    "word": "taureau",
    "level": 2,
    "category": "animaux",
    "emoji": "🐂",
    "hint": "Le mâle puissant de la vache avec de grandes cornes.",
    "example": "Le taureau veille sur le troupeau.",
    "color": "#fed7aa"
  },
  {
    "id": "lezard",
    "word": "lézard",
    "level": 2,
    "category": "animaux",
    "emoji": "🦎",
    "hint": "Petit reptile qui adore se chauffer au soleil.",
    "example": "Le lézard file entre les pierres.",
    "color": "#dcfce7"
  },
  {
    "id": "serpent",
    "word": "serpent",
    "level": 2,
    "category": "animaux",
    "emoji": "🐍",
    "hint": "Reptile sans pattes qui ondule doucement dans l'herbe.",
    "example": "Le serpent change de peau.",
    "color": "#dcfce7"
  },
  {
    "id": "tortue",
    "word": "tortue",
    "level": 3,
    "category": "animaux",
    "emoji": "🐢",
    "hint": "Elle marche lentement avec sa carapace solide.",
    "example": "La tortue rentre dans sa carapace.",
    "color": "#dcfce7"
  },
  {
    "id": "requin",
    "word": "requin",
    "level": 3,
    "category": "animaux",
    "emoji": "🦈",
    "hint": "Grand poisson prédateur avec un aileron pointu.",
    "example": "Le requin nage dans l'océan.",
    "color": "#dbeafe"
  },
  {
    "id": "girafe",
    "word": "girafe",
    "level": 3,
    "category": "animaux",
    "emoji": "🦒",
    "hint": "Le plus grand animal du monde grâce à son très long cou.",
    "example": "La girafe mange les feuilles au sommet.",
    "color": "#fef3c7"
  },
  {
    "id": "renard",
    "word": "renard",
    "level": 3,
    "category": "animaux",
    "emoji": "🦊",
    "hint": "Animal roux très rusé avec une belle queue touffue.",
    "example": "Le renard rôde près du poulailler.",
    "color": "#ffedd5"
  },
  {
    "id": "chouette",
    "word": "chouette",
    "level": 3,
    "category": "animaux",
    "emoji": "🦉",
    "hint": "Oiseau de nuit sans aigrettes qui voit dans le noir.",
    "example": "La chouette veille sur la forêt.",
    "color": "#ede9fe"
  },
  {
    "id": "baleine",
    "word": "baleine",
    "level": 3,
    "category": "animaux",
    "emoji": "🐋",
    "hint": "Le plus grand mammifère marin qui souffle un geyser.",
    "example": "La baleine chante sous l'eau.",
    "color": "#dbeafe"
  },
  {
    "id": "dauphin",
    "word": "dauphin",
    "level": 3,
    "category": "animaux",
    "emoji": "🐬",
    "hint": "Mammifère marin très joueur qui s'écrit avec PH !",
    "example": "Le dauphin fait des sauts dans l'eau.",
    "color": "#e0f2fe"
  },
  {
    "id": "phoque",
    "word": "phoque",
    "level": 3,
    "category": "animaux",
    "emoji": "🦭",
    "hint": "Mammifère marin aux nageoires courtes qui glisse sur la glace.",
    "example": "Le phoque plonge dans l'eau glacée.",
    "color": "#cffafe"
  },
  {
    "id": "morse",
    "word": "morse",
    "level": 3,
    "category": "animaux",
    "emoji": "🦭",
    "hint": "Gros animal de l'Arctique avec deux longues défenses.",
    "example": "Le morse se repose sur la banquise.",
    "color": "#e2e8f0"
  },
  {
    "id": "castor",
    "word": "castor",
    "level": 3,
    "category": "animaux",
    "emoji": "🦫",
    "hint": "Bâtisseur hors pair qui construit des barrages de bois.",
    "example": "Le castor coupe du bois avec ses dents.",
    "color": "#fed7aa"
  },
  {
    "id": "herisson",
    "word": "hérisson",
    "level": 3,
    "category": "animaux",
    "emoji": "🦔",
    "hint": "Petite boule couverte de piquants qui se roule en boule.",
    "example": "Le hérisson se promène dans le jardin.",
    "color": "#fed7aa"
  },
  {
    "id": "ecureuil",
    "word": "écureuil",
    "level": 3,
    "category": "animaux",
    "emoji": "🐿️",
    "hint": "Petit rongeur roux qui cache des noisettes dans les arbres.",
    "example": "L'écureuil saute de branche en branche.",
    "color": "#ffedd5"
  },
  {
    "id": "marmotte",
    "word": "marmotte",
    "level": 3,
    "category": "animaux",
    "emoji": "🐿️",
    "hint": "Elle siffle en montagne et hiberne tout l'hiver.",
    "example": "La marmotte prend le soleil en altitude.",
    "color": "#fed7aa"
  },
  {
    "id": "crapaud",
    "word": "crapaud",
    "level": 3,
    "category": "animaux",
    "emoji": "🐸",
    "hint": "Amphibien bosselé qui se déplace en marchant.",
    "example": "Le crapaud gobe les mouches la nuit.",
    "color": "#dcfce7"
  },
  {
    "id": "panthere",
    "word": "panthère",
    "level": 3,
    "category": "animaux",
    "emoji": "🐆",
    "hint": "Grand félin noir ou tacheté très furtif.",
    "example": "La panthère bondit avec souplesse.",
    "color": "#f1f5f9"
  },
  {
    "id": "leopard",
    "word": "léopard",
    "level": 3,
    "category": "animaux",
    "emoji": "🐆",
    "hint": "Félin aux superbes taches en forme de rosettes.",
    "example": "Le léopard dort sur une haute branche.",
    "color": "#fef3c7"
  },
  {
    "id": "guepard",
    "word": "guépard",
    "level": 3,
    "category": "animaux",
    "emoji": "🐆",
    "hint": "L'animal terrestre le plus rapide du monde.",
    "example": "Le guépard sprinte à toute allure.",
    "color": "#fef3c7"
  },
  {
    "id": "jaguar",
    "word": "jaguar",
    "level": 3,
    "category": "animaux",
    "emoji": "🐆",
    "hint": "Puissant félin d'Amérique du Sud qui aime nager.",
    "example": "Le jaguar chasse près du fleuve.",
    "color": "#ffedd5"
  },
  {
    "id": "cameleon",
    "word": "caméléon",
    "level": 3,
    "category": "animaux",
    "emoji": "🦎",
    "hint": "Reptile capable de changer de couleur pour se camoufler.",
    "example": "Le caméléon tourne ses yeux indépendamment.",
    "color": "#dcfce7"
  },
  {
    "id": "iguane",
    "word": "iguane",
    "level": 3,
    "category": "animaux",
    "emoji": "🦎",
    "hint": "Grand lézard végétarien avec une crête sur le dos.",
    "example": "L'iguane prend le soleil tropical.",
    "color": "#dcfce7"
  },
  {
    "id": "araignee",
    "word": "araignée",
    "level": 3,
    "category": "animaux",
    "emoji": "🕷️",
    "hint": "Elle tisse une magnifique toile géométrique en soie.",
    "example": "L'araignée répare sa toile soyeuse.",
    "color": "#ede9fe"
  },
  {
    "id": "scorpion",
    "word": "scorpion",
    "level": 3,
    "category": "animaux",
    "emoji": "🦂",
    "hint": "Arachnide du désert avec deux pinces et un dard recourbé.",
    "example": "Le scorpion se cache sous un rocher.",
    "color": "#fed7aa"
  },
  {
    "id": "homard",
    "word": "homard",
    "level": 3,
    "category": "animaux",
    "emoji": "🦞",
    "hint": "Grand crustacé des fonds marins doté de deux fortes pinces.",
    "example": "Le homard se cache dans une crevasse.",
    "color": "#fee2e2"
  },
  {
    "id": "crevette",
    "word": "crevette",
    "level": 3,
    "category": "animaux",
    "emoji": "🦐",
    "hint": "Petit crustacé rose qui nage à reculons.",
    "example": "La crevette frétille dans le filet.",
    "color": "#fee2e2"
  },
  {
    "id": "poulpe",
    "word": "poulpe",
    "level": 3,
    "category": "animaux",
    "emoji": "🐙",
    "hint": "Mollusque marin très intelligent doté de huit tentacules.",
    "example": "Le poulpe projette un nuage d'encre.",
    "color": "#ede9fe"
  },
  {
    "id": "calmar",
    "word": "calmar",
    "level": 3,
    "category": "animaux",
    "emoji": "🦑",
    "hint": "Céphalopode marin très rapide avec dix tentacules.",
    "example": "Le calmar file comme une flèche dans l'eau.",
    "color": "#f3e8ff"
  },
  {
    "id": "escargot",
    "word": "escargot",
    "level": 3,
    "category": "animaux",
    "emoji": "🐌",
    "hint": "Il sort sa maison sur son dos dès qu'il commence à pleuvoir.",
    "example": "L'escargot bave doucement sur la feuille.",
    "color": "#fef3c7"
  },
  {
    "id": "limace",
    "word": "limace",
    "level": 3,
    "category": "animaux",
    "emoji": "🐌",
    "hint": "Cousine de l'escargot qui voyage sans coquille.",
    "example": "La limace glisse sur l'herbe fraîche.",
    "color": "#ecfccb"
  },
  {
    "id": "grenouille",
    "word": "grenouille",
    "level": 4,
    "category": "animaux",
    "emoji": "🐸",
    "hint": "Petite bête verte qui coasse et saute dans la mare !",
    "example": "La grenouille saute sur le nénuphar.",
    "color": "#dcfce7"
  },
  {
    "id": "papillon",
    "word": "papillon",
    "level": 4,
    "category": "animaux",
    "emoji": "🦋",
    "hint": "Insecte aux deux ailes multicolores avec deux L.",
    "example": "Le papillon butine les fleurs.",
    "color": "#dbeafe"
  },
  {
    "id": "elephant",
    "word": "éléphant",
    "level": 4,
    "category": "animaux",
    "emoji": "🐘",
    "hint": "Le plus gros animal terrestre avec une grande trompe et PH !",
    "example": "L'éléphant boit avec sa trompe.",
    "color": "#e2e8f0"
  },
  {
    "id": "dinosaure",
    "word": "dinosaure",
    "level": 4,
    "category": "animaux",
    "emoji": "🦖",
    "hint": "Animal géant préhistorique comme le T-Rex.",
    "example": "Le grand dinosaure rugit.",
    "color": "#dcfce7"
  },
  {
    "id": "kangourou",
    "word": "kangourou",
    "level": 4,
    "category": "animaux",
    "emoji": "🦘",
    "hint": "Il bondit très haut et porte son petit dans sa poche.",
    "example": "Le kangourou fait de grands bonds.",
    "color": "#fed7aa"
  },
  {
    "id": "flamant",
    "word": "flamant",
    "level": 4,
    "category": "animaux",
    "emoji": "🦩",
    "hint": "Grand oiseau rose qui dort souvent sur une seule patte.",
    "example": "Le flamant rose plonge son bec dans l'eau.",
    "color": "#fce7f3"
  },
  {
    "id": "pelican",
    "word": "pélican",
    "level": 4,
    "category": "animaux",
    "emoji": "🪶",
    "hint": "Grand oiseau de mer avec une immense poche sous le bec.",
    "example": "Le pélican pêche des poissons frais.",
    "color": "#e0f2fe"
  },
  {
    "id": "autruche",
    "word": "autruche",
    "level": 4,
    "category": "animaux",
    "emoji": "🐦",
    "hint": "Le plus grand oiseau du monde qui court très vite sans voler.",
    "example": "L'autruche court à toute allure.",
    "color": "#fed7aa"
  },
  {
    "id": "manchot",
    "word": "manchot",
    "level": 4,
    "category": "animaux",
    "emoji": "🐧",
    "hint": "Oiseau qui ne vole pas mais nage comme un champion dans l'eau glacée.",
    "example": "Le manchot glisse sur le ventre.",
    "color": "#f1f5f9"
  },
  {
    "id": "pingouin",
    "word": "pingouin",
    "level": 4,
    "category": "animaux",
    "emoji": "🐧",
    "hint": "Oiseau marin de l'hémisphère nord capable de voler.",
    "example": "Le pingouin plonge pour attraper du poisson.",
    "color": "#e0e7ff"
  },
  {
    "id": "gorille",
    "word": "gorille",
    "level": 4,
    "category": "animaux",
    "emoji": "🦍",
    "hint": "Grand primate majestueux et paisible des forêts tropicales.",
    "example": "Le gorille se frappe la poitrine.",
    "color": "#e2e8f0"
  },
  {
    "id": "chimpanze",
    "word": "chimpanzé",
    "level": 4,
    "category": "animaux",
    "emoji": "🐒",
    "hint": "Singe très doué qui utilise des petits outils en bois.",
    "example": "Le chimpanzé s'amuse avec ses amis.",
    "color": "#ffedd5"
  },
  {
    "id": "paresseux",
    "word": "paresseux",
    "level": 4,
    "category": "animaux",
    "emoji": "🦥",
    "hint": "Animal qui passe sa vie suspendu à l'envers dans les arbres.",
    "example": "Le paresseux avance très calmement.",
    "color": "#dcfce7"
  },
  {
    "id": "libellule",
    "word": "libellule",
    "level": 4,
    "category": "animaux",
    "emoji": "🪰",
    "hint": "Insecte aux quatre ailes transparentes qui plane au-dessus de l'eau.",
    "example": "La libellule brille au soleil.",
    "color": "#cffafe"
  },
  {
    "id": "sauterelle",
    "word": "sauterelle",
    "level": 4,
    "category": "animaux",
    "emoji": "🦗",
    "hint": "Insecte vert aux grandes pattes arrière qui saute très loin.",
    "example": "La sauterelle chante dans l'herbe haute.",
    "color": "#dcfce7"
  },
  {
    "id": "corbeau",
    "word": "corbeau",
    "level": 4,
    "category": "animaux",
    "emoji": "🐦‍⬛",
    "hint": "Grand oiseau noir très intelligent avec un cri rauque.",
    "example": "Le corbeau trouve une petite branche.",
    "color": "#e2e8f0"
  },
  {
    "id": "perroquet",
    "word": "perroquet",
    "level": 4,
    "category": "animaux",
    "emoji": "🦜",
    "hint": "Oiseau multicolore capable d'imiter la voix humaine.",
    "example": "Le perroquet répète bonjour joyeusement.",
    "color": "#dcfce7"
  },
  {
    "id": "chinchilla",
    "word": "chinchilla",
    "level": 4,
    "category": "animaux",
    "emoji": "🐭",
    "hint": "Petit rongeur des Andes avec une fourrure incroyablement douce.",
    "example": "Le chinchilla fait sa toilette.",
    "color": "#f1f5f9"
  },
  {
    "id": "narval",
    "word": "narval",
    "level": 4,
    "category": "animaux",
    "emoji": "🐋",
    "hint": "Cétacé de l'océan Arctique avec une longue défense torsadée.",
    "example": "La corne du narval fend la banquise.",
    "color": "#cffafe"
  },
  {
    "id": "hippopotame",
    "word": "hippopotame",
    "level": 5,
    "category": "animaux",
    "emoji": "🦛",
    "hint": "Gros animal qui adore se baigner dans les rivières d'Afrique.",
    "example": "L'hippopotame ouvre sa bouche géante.",
    "color": "#e2e8f0"
  },
  {
    "id": "rhinoceros",
    "word": "rhinocéros",
    "level": 5,
    "category": "animaux",
    "emoji": "🦏",
    "hint": "Puissant animal avec une corne sur le museau et un RH !",
    "example": "Le rhinocéros charge dans la plaine.",
    "color": "#e2e8f0"
  },
  {
    "id": "coccinelle",
    "word": "coccinelle",
    "level": 5,
    "category": "animaux",
    "emoji": "🐞",
    "hint": "La bête à bon Dieu rouge avec deux CC et deux LL !",
    "example": "La petite coccinelle a sept points noirs.",
    "color": "#fee2e2"
  },
  {
    "id": "ornithorynque",
    "word": "ornithorynque",
    "level": 5,
    "category": "animaux",
    "emoji": "🦆",
    "hint": "Animal étonnant d'Australie à bec de canard et queue de castor.",
    "example": "L'ornithorynque nage dans la rivière.",
    "color": "#fed7aa"
  },
  {
    "id": "dromadaire",
    "word": "dromadaire",
    "level": 5,
    "category": "animaux",
    "emoji": "🐪",
    "hint": "Le vaisseau du désert qui possède une seule bosse.",
    "example": "Le dromadaire traverse les dunes de sable.",
    "color": "#fef3c7"
  },
  {
    "id": "chameau",
    "word": "chameau",
    "level": 5,
    "category": "animaux",
    "emoji": "🐫",
    "hint": "Grand mammifère du désert qui possède deux grosses bosses.",
    "example": "Le chameau résiste à la chaleur du désert.",
    "color": "#fef3c7"
  },
  {
    "id": "salamandre",
    "word": "salamandre",
    "level": 5,
    "category": "animaux",
    "emoji": "🦎",
    "hint": "Petit amphibien noir et jaune qui aime l'humidité des forêts.",
    "example": "La salamandre se cache sous une souche.",
    "color": "#fef9c3"
  },
  {
    "id": "tarentule",
    "word": "tarentule",
    "level": 5,
    "category": "animaux",
    "emoji": "🕷️",
    "hint": "Grande araignée velue très impressionnante mais discrète.",
    "example": "La tarentule attend au fond de son terrier.",
    "color": "#ede9fe"
  },
  {
    "id": "brontosaure",
    "word": "brontosaure",
    "level": 5,
    "category": "animaux",
    "emoji": "🦕",
    "hint": "Dinosaure herbivore géant au très long cou paisible.",
    "example": "Le brontosaure broute les hautes cimes.",
    "color": "#dcfce7"
  },
  {
    "id": "tyrannosaure",
    "word": "tyrannosaure",
    "level": 5,
    "category": "animaux",
    "emoji": "🦖",
    "hint": "Le redoutable roi des dinosaures aux dents acérées.",
    "example": "Le tyrannosaure fait trembler le sol.",
    "color": "#dcfce7"
  },
  {
    "id": "bourdon",
    "word": "bourdon",
    "level": 5,
    "category": "animaux",
    "emoji": "🐝",
    "hint": "Gros insecte velu et doux qui butine en vrombissant.",
    "example": "Le bourdon récolte le doux nectar.",
    "color": "#fef9c3"
  },
  {
    "id": "albatros",
    "word": "albatros",
    "level": 5,
    "category": "animaux",
    "emoji": "🪶",
    "hint": "Oiseau marin géant capable de planer des jours entiers sans battre des ailes.",
    "example": "L'albatros survole les océans déchaînés.",
    "color": "#e0f2fe"
  },
  {
    "id": "etoile_de_mer",
    "word": "étoile de mer",
    "level": 5,
    "category": "animaux",
    "emoji": "⭐",
    "hint": "Animal marin en forme d'étoile qui vit sur les rochers.",
    "example": "L'étoile de mer s'accroche au rocher.",
    "color": "#fee2e2"
  },
  {
    "id": "chevreuil",
    "word": "chevreuil",
    "level": 5,
    "category": "animaux",
    "emoji": "🦌",
    "hint": "Petit cervidé très agile et gracieux de nos forêts.",
    "example": "Le chevreuil disparaît dans le sous-bois.",
    "color": "#fed7aa"
  },
  {
    "id": "sanglier",
    "word": "sanglier",
    "level": 5,
    "category": "animaux",
    "emoji": "🐗",
    "hint": "Cousin sauvage du cochon avec de fortes défenses.",
    "example": "Le sanglier fouille le sol de la forêt.",
    "color": "#fed7aa"
  },
  {
    "id": "chauve_souris",
    "word": "chauve-souris",
    "level": 5,
    "category": "animaux",
    "emoji": "🦇",
    "hint": "Seul mammifère capable de voler dans la nuit grâce aux échos.",
    "example": "La chauve-souris dort la tête en bas.",
    "color": "#ede9fe"
  },
  {
    "id": "sel",
    "word": "sel",
    "level": 1,
    "category": "aliments",
    "emoji": "🧂",
    "hint": "Petits grains blancs que l'on ajoute pour donner du goût aux plats.",
    "example": "On met une pincée de sel dans la soupe.",
    "color": "#f8fafc"
  },
  {
    "id": "miel",
    "word": "miel",
    "level": 1,
    "category": "aliments",
    "emoji": "🍯",
    "hint": "Doux trésor doré et sucré fabriqué par les abeilles dans la ruche.",
    "example": "J'étale du bon miel sur ma tartine de pain.",
    "color": "#fef3c7"
  },
  {
    "id": "cafe",
    "word": "café",
    "level": 1,
    "category": "aliments",
    "emoji": "☕",
    "hint": "Boisson chaude que les grands boivent souvent au petit-déjeuner.",
    "example": "Papa déguste une tasse de café bien chaud.",
    "color": "#fed7aa"
  },
  {
    "id": "chou",
    "word": "chou",
    "level": 1,
    "category": "aliments",
    "emoji": "🥬",
    "hint": "Légume tout rond avec de grandes feuilles croquantes du potager.",
    "example": "Maman prépare une bonne soupe au chou vert.",
    "color": "#dcfce7"
  },
  {
    "id": "pomme",
    "word": "pomme",
    "level": 1,
    "category": "aliments",
    "emoji": "🍎",
    "hint": "Fruit rouge, vert ou jaune, croquant et très juteux.",
    "example": "Je croque une belle pomme rouge au goûter.",
    "color": "#fee2e2"
  },
  {
    "id": "poire",
    "word": "poire",
    "level": 1,
    "category": "aliments",
    "emoji": "🍐",
    "hint": "Fruit fondant et sucré en forme de cloche.",
    "example": "La poire mûre est délicieuse et fondante.",
    "color": "#fef9c3"
  },
  {
    "id": "salade",
    "word": "salade",
    "level": 1,
    "category": "aliments",
    "emoji": "🥗",
    "hint": "Plat de feuilles vertes fraîches assaisonné pour le repas.",
    "example": "On mange une grande salade bien croquante.",
    "color": "#dcfce7"
  },
  {
    "id": "tomate",
    "word": "tomate",
    "level": 1,
    "category": "aliments",
    "emoji": "🍅",
    "hint": "Fruit rouge tout rond et juteux que l'on mange en salade.",
    "example": "La tomate rouge est cueillie dans le jardin.",
    "color": "#fee2e2"
  },
  {
    "id": "banane",
    "word": "banane",
    "level": 1,
    "category": "aliments",
    "emoji": "🍌",
    "hint": "Fruit jaune tout doux qu'on épluche facilement pour le goûter.",
    "example": "Le singe déguste une banane bien mûre.",
    "color": "#fef3c7"
  },
  {
    "id": "olive",
    "word": "olive",
    "level": 1,
    "category": "aliments",
    "emoji": "🫒",
    "hint": "Petit fruit noir ou vert qui pousse sur les oliviers du soleil.",
    "example": "On ajoute quelques olives vertes sur la pizza.",
    "color": "#dcfce7"
  },
  {
    "id": "melon",
    "word": "melon",
    "level": 1,
    "category": "aliments",
    "emoji": "🍈",
    "hint": "Gros fruit d'été très sucré avec une chair orange parfumée.",
    "example": "On partage une tranche de melon frais au déjeuner.",
    "color": "#ffedd5"
  },
  {
    "id": "citron",
    "word": "citron",
    "level": 1,
    "category": "aliments",
    "emoji": "🍋",
    "hint": "Fruit jaune acide plein de vitamine C pour donner de l'énergie.",
    "example": "On presse un demi-citron dans un verre d'eau.",
    "color": "#fef9c3"
  },
  {
    "id": "bonbon",
    "word": "bonbon",
    "level": 1,
    "category": "aliments",
    "emoji": "🍬",
    "hint": "Petite douceur sucrée et fruitée très agréable à savourer.",
    "example": "J'ai choisi un bonbon à la fraise pour mon anniversaire.",
    "color": "#fce7f3"
  },
  {
    "id": "soupe",
    "word": "soupe",
    "level": 1,
    "category": "aliments",
    "emoji": "🍲",
    "hint": "Bon bouillon chaud de légumes mixés réconfortant en hiver.",
    "example": "Un grand bol de soupe chaude pour se réchauffer.",
    "color": "#fed7aa"
  },
  {
    "id": "ananas",
    "word": "ananas",
    "level": 1,
    "category": "aliments",
    "emoji": "🍍",
    "hint": "Gros fruit exotique coiffé de jolies feuilles piquantes.",
    "example": "L'ananas jaune a un goût doux et sucré.",
    "color": "#fef3c7"
  },
  {
    "id": "kaki",
    "word": "kaki",
    "level": 1,
    "category": "aliments",
    "emoji": "🍅",
    "hint": "Fruit d'automne tout doux et orange comme un petit soleil.",
    "example": "Le kaki bien mûr est très sucré et fondant.",
    "color": "#fed7aa"
  },
  {
    "id": "pain",
    "word": "pain",
    "level": 2,
    "category": "aliments",
    "emoji": "🥖",
    "hint": "Le boulanger le cuit dans son grand four.",
    "example": "Une bonne baguette de pain frais.",
    "color": "#fef3c7"
  },
  {
    "id": "lait",
    "word": "lait",
    "level": 2,
    "category": "aliments",
    "emoji": "🥛",
    "hint": "Boisson blanche que donne la gentille vache.",
    "example": "Un grand verre de lait frais.",
    "color": "#f1f5f9"
  },
  {
    "id": "jus",
    "word": "jus",
    "level": 2,
    "category": "aliments",
    "emoji": "🧃",
    "hint": "Boisson aux fruits pressés que l'on boit avec une paille.",
    "example": "Un bon jus de pomme au goûter.",
    "color": "#ffedd5"
  },
  {
    "id": "eau",
    "word": "eau",
    "level": 2,
    "category": "aliments",
    "emoji": "💧",
    "hint": "La boisson la plus saine et indispensable pour vivre.",
    "example": "Je bois de l'eau fraîche.",
    "color": "#e0f2fe"
  },
  {
    "id": "riz",
    "word": "riz",
    "level": 2,
    "category": "aliments",
    "emoji": "🍚",
    "hint": "Petits grains blancs très nourrissants que l'on cuit à l'eau.",
    "example": "Un bol de riz chaud.",
    "color": "#f1f5f9"
  },
  {
    "id": "the",
    "word": "thé",
    "level": 2,
    "category": "aliments",
    "emoji": "🍵",
    "hint": "Boisson chaude parfumée préparée avec des feuilles.",
    "example": "Une tasse de thé à la menthe.",
    "color": "#ecfccb"
  },
  {
    "id": "noix",
    "word": "noix",
    "level": 2,
    "category": "aliments",
    "emoji": "🌰",
    "hint": "Fruit à coque très dure bon pour la mémoire.",
    "example": "L'écureuil casse une noix.",
    "color": "#fed7aa"
  },
  {
    "id": "kiwi",
    "word": "kiwi",
    "level": 2,
    "category": "aliments",
    "emoji": "🥝",
    "hint": "Fruit tout vert à l'intérieur avec plein de vitamine C.",
    "example": "Je coupe un kiwi en deux.",
    "color": "#dcfce7"
  },
  {
    "id": "pois",
    "word": "pois",
    "level": 2,
    "category": "aliments",
    "emoji": "🫛",
    "hint": "Petite bille verte et sucrée cachée dans sa cosse.",
    "example": "Les petits pois sont délicieux.",
    "color": "#dcfce7"
  },
  {
    "id": "mais",
    "word": "maïs",
    "level": 2,
    "category": "aliments",
    "emoji": "🌽",
    "hint": "Grains jaunes doux qui éclatent pour faire du pop-corn.",
    "example": "L'épi de maïs est bien grillé.",
    "color": "#fef9c3"
  },
  {
    "id": "feve",
    "word": "fève",
    "level": 2,
    "category": "aliments",
    "emoji": "🫘",
    "hint": "Graine potagère ou figurine cachée dans la galette.",
    "example": "J'ai trouvé la fève dans ma part !",
    "color": "#fef3c7"
  },
  {
    "id": "mure",
    "word": "mûre",
    "level": 2,
    "category": "aliments",
    "emoji": "🫐",
    "hint": "Baie noire sauvage que l'on cueille sur les ronces.",
    "example": "On prépare de la confiture de mûres.",
    "color": "#f3e8ff"
  },
  {
    "id": "tarte",
    "word": "tarte",
    "level": 2,
    "category": "aliments",
    "emoji": "🥧",
    "hint": "Pâte croustillante garnie de pommes ou de chocolat.",
    "example": "Une belle tarte dorée au four.",
    "color": "#fed7aa"
  },
  {
    "id": "glace",
    "word": "glace",
    "level": 2,
    "category": "aliments",
    "emoji": "🍦",
    "hint": "Froide et sucrée en cornet ou en pot l'été.",
    "example": "Une bonne glace à la fraise.",
    "color": "#fce7f3"
  },
  {
    "id": "peche",
    "word": "pêche",
    "level": 2,
    "category": "aliments",
    "emoji": "🍑",
    "hint": "Fruit d'été à la peau veloutée et au cœur juteux.",
    "example": "La pêche sent très bon.",
    "color": "#ffedd5"
  },
  {
    "id": "prune",
    "word": "prune",
    "level": 2,
    "category": "aliments",
    "emoji": "🫐",
    "hint": "Petit fruit violet ou doré très sucré.",
    "example": "Je ramasse une prune sous l'arbre.",
    "color": "#ede9fe"
  },
  {
    "id": "mangue",
    "word": "mangue",
    "level": 2,
    "category": "aliments",
    "emoji": "🥭",
    "hint": "Fruit tropical à la chair orange fondante et sucrée.",
    "example": "Une mangue mûre à point.",
    "color": "#fef3c7"
  },
  {
    "id": "raisin",
    "word": "raisin",
    "level": 2,
    "category": "aliments",
    "emoji": "🍇",
    "hint": "Grappe de petits grains sucrés noirs ou blancs.",
    "example": "Je grignote une grappe de raisin.",
    "color": "#ede9fe"
  },
  {
    "id": "pate",
    "word": "pâte",
    "level": 2,
    "category": "aliments",
    "emoji": "🍝",
    "hint": "Faites de blé, en forme de coquillettes ou de spaghettis.",
    "example": "Des pâtes au fromage fondant.",
    "color": "#fef3c7"
  },
  {
    "id": "pizza",
    "word": "pizza",
    "level": 2,
    "category": "aliments",
    "emoji": "🍕",
    "hint": "Pâte ronde italienne cuite au four avec de la tomate et du fromage.",
    "example": "On partage une bonne pizza.",
    "color": "#ffedd5"
  },
  {
    "id": "puree",
    "word": "purée",
    "level": 2,
    "category": "aliments",
    "emoji": "🥔",
    "hint": "Pommes de terre écrasées avec du beurre et du lait.",
    "example": "La purée forme un petit volcan.",
    "color": "#fef9c3"
  },
  {
    "id": "frites",
    "word": "frites",
    "level": 2,
    "category": "aliments",
    "emoji": "🍟",
    "hint": "Bâtonnets de pomme de terre dorés et croustillants.",
    "example": "Des frites bien chaudes.",
    "color": "#fef9c3"
  },
  {
    "id": "jambon",
    "word": "jambon",
    "level": 2,
    "category": "aliments",
    "emoji": "🥓",
    "hint": "Tranche rose tendre souvent mise dans les sandwichs.",
    "example": "Un sandwich au jambon et au beurre.",
    "color": "#fee2e2"
  },
  {
    "id": "poulet",
    "word": "poulet",
    "level": 2,
    "category": "aliments",
    "emoji": "🍗",
    "hint": "Viande blanche très appréciée rôtie au four le dimanche.",
    "example": "Le poulet rôti sent délicieusement bon.",
    "color": "#fed7aa"
  },
  {
    "id": "poisson",
    "word": "poisson",
    "level": 2,
    "category": "aliments",
    "emoji": "🐟",
    "hint": "Aliment sain venu de la mer ou de la rivière.",
    "example": "Du poisson avec du riz chaud.",
    "color": "#cffafe"
  },
  {
    "id": "beurre",
    "word": "beurre",
    "level": 2,
    "category": "aliments",
    "emoji": "🧈",
    "hint": "Produit laitier doré que l'on tartine sur le pain.",
    "example": "Du beurre doux sur du pain frais.",
    "color": "#fef9c3"
  },
  {
    "id": "sucre",
    "word": "sucre",
    "level": 2,
    "category": "aliments",
    "emoji": "🍬",
    "hint": "Poudre blanche qui apporte de la douceur aux desserts.",
    "example": "Une cuillère de sucre dans le yaourt.",
    "color": "#f8fafc"
  },
  {
    "id": "farine",
    "word": "farine",
    "level": 2,
    "category": "aliments",
    "emoji": "🌾",
    "hint": "Poudre blanche indispensable pour faire du pain et des gâteaux.",
    "example": "On verse la farine dans le saladier.",
    "color": "#f1f5f9"
  },
  {
    "id": "radis",
    "word": "radis",
    "level": 2,
    "category": "aliments",
    "emoji": "🪴",
    "hint": "Petit légume rose et piquant croquant sous la dent.",
    "example": "On mange les radis avec du sel et du beurre.",
    "color": "#fee2e2"
  },
  {
    "id": "navet",
    "word": "navet",
    "level": 2,
    "category": "aliments",
    "emoji": "🍲",
    "hint": "Légume racine blanc et violet cuit dans le bouillon.",
    "example": "Le navet cuit dans la marmite.",
    "color": "#f3e8ff"
  },
  {
    "id": "crepe",
    "word": "crêpe",
    "level": 2,
    "category": "aliments",
    "emoji": "🥞",
    "hint": "Fine galette dorée que l'on fait sauter dans la poêle.",
    "example": "Je tartine ma crêpe de chocolat.",
    "color": "#fef3c7"
  },
  {
    "id": "carotte",
    "word": "carotte",
    "level": 3,
    "category": "aliments",
    "emoji": "🥕",
    "hint": "Légume orange croquant qui rend aimable avec deux T !",
    "example": "Le lapin croque une carotte.",
    "color": "#ffedd5"
  },
  {
    "id": "cerise",
    "word": "cerise",
    "level": 3,
    "category": "aliments",
    "emoji": "🍒",
    "hint": "Petit fruit rouge et rond souvent attaché par deux.",
    "example": "Des cerises bien sucrées cueillies sur l'arbre.",
    "color": "#fee2e2"
  },
  {
    "id": "fraise",
    "word": "fraise",
    "level": 3,
    "category": "aliments",
    "emoji": "🍓",
    "hint": "Un fruit rouge parfumé avec des petits grains extérieurs.",
    "example": "Une délicieuse fraise bien sucrée.",
    "color": "#fee2e2"
  },
  {
    "id": "orange",
    "word": "orange",
    "level": 3,
    "category": "aliments",
    "emoji": "🍊",
    "hint": "Fruit d'hiver juteux qui porte le nom de sa couleur.",
    "example": "Je bois un jus d'orange pressé.",
    "color": "#ffedd5"
  },
  {
    "id": "gateau",
    "word": "gâteau",
    "level": 3,
    "category": "aliments",
    "emoji": "🎂",
    "hint": "On souffle des bougies dessus pour son anniversaire !",
    "example": "Un délicieux gâteau au chocolat.",
    "color": "#fce7f3"
  },
  {
    "id": "abricot",
    "word": "abricot",
    "level": 3,
    "category": "aliments",
    "emoji": "🍑",
    "hint": "Fruit orange à la peau douce comme du velours.",
    "example": "Un abricot sucré cueilli en été.",
    "color": "#fed7aa"
  },
  {
    "id": "avocat",
    "word": "avocat",
    "level": 3,
    "category": "aliments",
    "emoji": "🥑",
    "hint": "Fruit crémeux à chair verte avec un gros noyau au milieu.",
    "example": "L'avocat est délicieux avec une vinaigrette.",
    "color": "#dcfce7"
  },
  {
    "id": "brocoli",
    "word": "brocoli",
    "level": 3,
    "category": "aliments",
    "emoji": "🥦",
    "hint": "Légume vert qui ressemble à une forêt de petits arbres.",
    "example": "Je mange tout mon brocoli.",
    "color": "#dcfce7"
  },
  {
    "id": "haricot",
    "word": "haricot",
    "level": 3,
    "category": "aliments",
    "emoji": "🫘",
    "hint": "Long légume vert croquant que l'on équeute.",
    "example": "Des haricots verts cuits à la vapeur.",
    "color": "#dcfce7"
  },
  {
    "id": "poivron",
    "word": "poivron",
    "level": 3,
    "category": "aliments",
    "emoji": "🫑",
    "hint": "Légume croquant rouge, jaune ou vert.",
    "example": "Le poivron colore notre assiette.",
    "color": "#fee2e2"
  },
  {
    "id": "oignon",
    "word": "oignon",
    "level": 3,
    "category": "aliments",
    "emoji": "🧅",
    "hint": "Légume qui parfume les plats mais fait pleurer les yeux !",
    "example": "On coupe l'oignon en petits dés.",
    "color": "#fed7aa"
  },
  {
    "id": "chocolat",
    "word": "chocolat",
    "level": 3,
    "category": "aliments",
    "emoji": "🍫",
    "hint": "Délice sucré au cacao adoré de tous les enfants.",
    "example": "Un carré de chocolat noir fondant.",
    "color": "#fed7aa"
  },
  {
    "id": "biscuit",
    "word": "biscuit",
    "level": 3,
    "category": "aliments",
    "emoji": "🍪",
    "hint": "Petit gâteau sec et croquant parfait avec un verre de lait.",
    "example": "Un biscuit croustillant au chocolat.",
    "color": "#fed7aa"
  },
  {
    "id": "gaufre",
    "word": "gaufre",
    "level": 3,
    "category": "aliments",
    "emoji": "🧇",
    "hint": "Pâtisserie dorée aux alvéoles croustillantes.",
    "example": "Une gaufre saupoudrée de sucre glace.",
    "color": "#fef3c7"
  },
  {
    "id": "brioche",
    "word": "brioche",
    "level": 3,
    "category": "aliments",
    "emoji": "🍞",
    "hint": "Pain doux et doré à la mie moelleuse et parfumée.",
    "example": "Une tranche de brioche dorée au réveil.",
    "color": "#fef3c7"
  },
  {
    "id": "croissant",
    "word": "croissant",
    "level": 3,
    "category": "aliments",
    "emoji": "🥐",
    "hint": "Viennoiserie feuilletée au beurre en forme de demi-lune.",
    "example": "Un bon croissant chaud le dimanche matin.",
    "color": "#fef3c7"
  },
  {
    "id": "fromage",
    "word": "fromage",
    "level": 3,
    "category": "aliments",
    "emoji": "🧀",
    "hint": "Fabriqué avec du lait, à pâte molle ou dure.",
    "example": "Un morceau de fromage sur du pain.",
    "color": "#fef9c3"
  },
  {
    "id": "yaourt",
    "word": "yaourt",
    "level": 3,
    "category": "aliments",
    "emoji": "🥛",
    "hint": "Dessert lacté crémeux que l'on mange à la cuillère.",
    "example": "Un yaourt à la vanille.",
    "color": "#f1f5f9"
  },
  {
    "id": "confiture",
    "word": "confiture",
    "level": 3,
    "category": "aliments",
    "emoji": "🍯",
    "hint": "Fruits cuits longuement avec du sucre pour tartiner.",
    "example": "De la confiture de fraises maison.",
    "color": "#fee2e2"
  },
  {
    "id": "baguette",
    "word": "baguette",
    "level": 3,
    "category": "aliments",
    "emoji": "🥖",
    "hint": "Le pain allongé traditionnel de nos boulangeries.",
    "example": "J'achète une baguette bien croustillante.",
    "color": "#fef3c7"
  },
  {
    "id": "sandwich",
    "word": "sandwich",
    "level": 3,
    "category": "aliments",
    "emoji": "🥪",
    "hint": "Deux tranches de pain garnies pour le pique-nique.",
    "example": "Un bon sandwich pour la sortie scolaire.",
    "color": "#fef3c7"
  },
  {
    "id": "pasteque",
    "word": "pastèque",
    "level": 4,
    "category": "aliments",
    "emoji": "🍉",
    "hint": "Énorme fruit vert foncé rempli d'une chair rouge très fraîche.",
    "example": "Une grosse tranche de pastèque juteuse.",
    "color": "#fee2e2"
  },
  {
    "id": "mandarine",
    "word": "mandarine",
    "level": 4,
    "category": "aliments",
    "emoji": "🍊",
    "hint": "Petit agrume d'hiver facile à éplucher en quartiers.",
    "example": "La mandarine parfume toute la classe.",
    "color": "#ffedd5"
  },
  {
    "id": "framboise",
    "word": "framboise",
    "level": 4,
    "category": "aliments",
    "emoji": "🫐",
    "hint": "Petite baie rose tendre faite de minuscules perles.",
    "example": "Une framboise douce et parfumée.",
    "color": "#fce7f3"
  },
  {
    "id": "myrtille",
    "word": "myrtille",
    "level": 4,
    "category": "aliments",
    "emoji": "🫐",
    "hint": "Petite perle bleue sauvage des montagnes.",
    "example": "Une délicieuse tarte aux myrtilles.",
    "color": "#ede9fe"
  },
  {
    "id": "noisette",
    "word": "noisette",
    "level": 4,
    "category": "aliments",
    "emoji": "🌰",
    "hint": "Fruit sec croquant très apprécié des écureuils.",
    "example": "Une noisette cachée sous la mousse.",
    "color": "#fed7aa"
  },
  {
    "id": "chataigne",
    "word": "châtaigne",
    "level": 4,
    "category": "aliments",
    "emoji": "🌰",
    "hint": "Fruit de l'automne que l'on fait griller au feu de bois.",
    "example": "Des châtaignes chaudes en hiver.",
    "color": "#fed7aa"
  },
  {
    "id": "champignon",
    "word": "champignon",
    "level": 4,
    "category": "aliments",
    "emoji": "🍄",
    "hint": "Il pousse sous les arbres et possède un joli chapeau.",
    "example": "On cuisine une omelette aux champignons.",
    "color": "#fee2e2"
  },
  {
    "id": "artichaut",
    "word": "artichaut",
    "level": 4,
    "category": "aliments",
    "emoji": "🥬",
    "hint": "Légume dont on effeuille les pétales avant d'arriver au cœur.",
    "example": "L'artichaut se trempe dans la sauce.",
    "color": "#dcfce7"
  },
  {
    "id": "betterave",
    "word": "betterave",
    "level": 4,
    "category": "aliments",
    "emoji": "🪴",
    "hint": "Légume racine tout rond d'un magnifique rouge violet.",
    "example": "Une belle salade de betterave rouge.",
    "color": "#fce7f3"
  },
  {
    "id": "courgette",
    "word": "courgette",
    "level": 4,
    "category": "aliments",
    "emoji": "🥒",
    "hint": "Légume long du potager vert foncé très tendre.",
    "example": "Une soupe de courgettes au fromage.",
    "color": "#dcfce7"
  },
  {
    "id": "aubergine",
    "word": "aubergine",
    "level": 4,
    "category": "aliments",
    "emoji": "🍆",
    "hint": "Beau légume violet foncé indispensable dans la ratatouille.",
    "example": "L'aubergine fond dans la casserole.",
    "color": "#ede9fe"
  },
  {
    "id": "epinard",
    "word": "épinard",
    "level": 4,
    "category": "aliments",
    "emoji": "🥬",
    "hint": "Grandes feuilles vertes réputées pour donner de la force.",
    "example": "Les épinards sont pleins de fer.",
    "color": "#dcfce7"
  },
  {
    "id": "macaron",
    "word": "macaron",
    "level": 4,
    "category": "aliments",
    "emoji": "🧁",
    "hint": "Petite gourmandise ronde et colorée fourrée de ganache.",
    "example": "Un macaron fondant à la pistache.",
    "color": "#fce7f3"
  },
  {
    "id": "eclair",
    "word": "éclair",
    "level": 4,
    "category": "aliments",
    "emoji": "🥖",
    "hint": "Pâtisserie allongée garnie de crème et recouverte d'un glaçage.",
    "example": "Un éclair au bon chocolat.",
    "color": "#fed7aa"
  },
  {
    "id": "sucette",
    "word": "sucette",
    "level": 4,
    "category": "aliments",
    "emoji": "🍭",
    "hint": "Bonbon rond et dur piqué sur un petit bâton.",
    "example": "Une sucette à la fraise qui dure longtemps.",
    "color": "#fee2e2"
  },
  {
    "id": "cacahuete",
    "word": "cacahuète",
    "level": 4,
    "category": "aliments",
    "emoji": "🥜",
    "hint": "Petite graine salée qui pousse sous la terre.",
    "example": "On partage des cacahuètes à l'apéritif.",
    "color": "#fed7aa"
  },
  {
    "id": "citrouille",
    "word": "citrouille",
    "level": 4,
    "category": "aliments",
    "emoji": "🎃",
    "hint": "Gros légume orange qui sert de lanterne pour Halloween.",
    "example": "La citrouille d'Halloween brille dans la nuit.",
    "color": "#ffedd5"
  },
  {
    "id": "abricotier",
    "word": "abricotier",
    "level": 4,
    "category": "aliments",
    "emoji": "🌳",
    "hint": "L'arbre fruitier qui produit les abricots dorés.",
    "example": "L'abricotier est couvert de fleurs blanches.",
    "color": "#fed7aa"
  },
  {
    "id": "cornichon",
    "word": "cornichon",
    "level": 4,
    "category": "aliments",
    "emoji": "🥒",
    "hint": "Petit légume vert croquant conservé dans le vinaigre.",
    "example": "Un cornichon qui croque dans le burger.",
    "color": "#dcfce7"
  },
  {
    "id": "vinaigre",
    "word": "vinaigre",
    "level": 4,
    "category": "aliments",
    "emoji": "🍶",
    "hint": "Liquide acide parfumé qui relève toutes les salades.",
    "example": "Une goutte de vinaigre dans l'assaisonnement.",
    "color": "#fee2e2"
  },
  {
    "id": "clementine",
    "word": "clémentine",
    "level": 5,
    "category": "aliments",
    "emoji": "🍊",
    "hint": "Délicieux petit agrume d'hiver sans pépins facile à peler.",
    "example": "Je mange une clémentine bien juteuse au goûter.",
    "color": "#ffedd5"
  },
  {
    "id": "chou_fleur",
    "word": "chou-fleur",
    "level": 5,
    "category": "aliments",
    "emoji": "🥦",
    "hint": "Gros légume d'hiver aux bouquets blancs comme des nuages.",
    "example": "Un bon gratin de chou-fleur au fromage.",
    "color": "#f8fafc"
  },
  {
    "id": "pamplemousse",
    "word": "pamplemousse",
    "level": 5,
    "category": "aliments",
    "emoji": "🍊",
    "hint": "Gros agrume rose ou jaune au goût frais et légèrement amer.",
    "example": "Un demi-pamplemousse au petit déjeuner.",
    "color": "#fee2e2"
  },
  {
    "id": "grenadille",
    "word": "grenadille",
    "level": 5,
    "category": "aliments",
    "emoji": "🍈",
    "hint": "Fruit de la passion exotique rempli de graines acidulées.",
    "example": "La grenadille apporte un parfum tropical.",
    "color": "#fef3c7"
  },
  {
    "id": "mille_feuille",
    "word": "mille-feuille",
    "level": 5,
    "category": "aliments",
    "emoji": "🍰",
    "hint": "Gâteau fait de nombreuses couches de pâte croustillante et crème.",
    "example": "Le mille-feuille craque sous la cuillère.",
    "color": "#fef3c7"
  },
  {
    "id": "viennoiserie",
    "word": "viennoiserie",
    "level": 5,
    "category": "aliments",
    "emoji": "🥐",
    "hint": "Délices feuilletés et dorés fabriqués chaque matin par l'artisan.",
    "example": "L'odeur de la viennoiserie chaude attire les gourmands.",
    "color": "#fed7aa"
  },
  {
    "id": "spaghetti",
    "word": "spaghetti",
    "level": 5,
    "category": "aliments",
    "emoji": "🍝",
    "hint": "Longues pâtes italiennes que l'on enroule autour de sa fourchette.",
    "example": "Les spaghettis à la sauce tomate sont prêts.",
    "color": "#fef9c3"
  },
  {
    "id": "tagliatelle",
    "word": "tagliatelle",
    "level": 5,
    "category": "aliments",
    "emoji": "🍝",
    "hint": "Larges rubans de pâtes fraîches délicieux avec de la crème.",
    "example": "Un plat de tagliatelles aux champignons.",
    "color": "#fef9c3"
  },
  {
    "id": "profiterole",
    "word": "profiterole",
    "level": 5,
    "category": "aliments",
    "emoji": "🍨",
    "hint": "Petit chou garni de glace à la vanille et nappé de chocolat chaud.",
    "example": "La profiterole fond dans la bouche.",
    "color": "#fed7aa"
  },
  {
    "id": "marshmallow",
    "word": "marshmallow",
    "level": 5,
    "category": "aliments",
    "emoji": "🍢",
    "hint": "Friandise moelleuse et sucrée que l'on fait griller au feu.",
    "example": "Un marshmallow doré sur la braise.",
    "color": "#fce7f3"
  },
  {
    "id": "mayonnaise",
    "word": "mayonnaise",
    "level": 5,
    "category": "aliments",
    "emoji": "🥣",
    "hint": "Sauce onctueuse préparée avec du jaune d'œuf, de l'huile et de la moutarde.",
    "example": "Une cuillère de mayonnaise maison.",
    "color": "#fef9c3"
  },
  {
    "id": "vinaigrette",
    "word": "vinaigrette",
    "level": 5,
    "category": "aliments",
    "emoji": "🥗",
    "hint": "Sauce légère composée d'huile, de vinaigre et de sel.",
    "example": "On arrose la salade de bonne vinaigrette.",
    "color": "#dcfce7"
  },
  {
    "id": "betteravier",
    "word": "betteravier",
    "level": 5,
    "category": "aliments",
    "emoji": "🚜",
    "hint": "Cultivateur spécialisé dans la récolte des betteraves sucrières.",
    "example": "Le betteravier récolte ses racines d'automne.",
    "color": "#ffedd5"
  },
  {
    "id": "chataignier",
    "word": "châtaignier",
    "level": 5,
    "category": "aliments",
    "emoji": "🌳",
    "hint": "Arbre majestueux qui produit les bogues piquantes de châtaignes.",
    "example": "Le grand châtaignier abrite les oiseaux.",
    "color": "#fed7aa"
  },
  {
    "id": "champignonniere",
    "word": "champignonnière",
    "level": 5,
    "category": "aliments",
    "emoji": "🍄",
    "hint": "Lieu obscur et humide où sont cultivés les champignons.",
    "example": "On visite une ancienne champignonnière.",
    "color": "#e2e8f0"
  },
  {
    "id": "bouillabaisse",
    "word": "bouillabaisse",
    "level": 5,
    "category": "aliments",
    "emoji": "🍲",
    "hint": "Célèbre soupe de poissons traditionnelle du port de Marseille.",
    "example": "Une bouillabaisse parfumée au safran.",
    "color": "#fed7aa"
  },
  {
    "id": "confiturier",
    "word": "confiturier",
    "level": 5,
    "category": "aliments",
    "emoji": "🍯",
    "hint": "Artisan passionné qui prépare des confitures de fruits rares.",
    "example": "Le confiturier remue sa grande bassine de cuivre.",
    "color": "#fee2e2"
  },
  {
    "id": "sac",
    "word": "sac",
    "level": 1,
    "category": "objets",
    "emoji": "🎒",
    "hint": "On y range ses cahiers et sa trousse pour aller à l'école.",
    "example": "Je ferme mon sac à dos pour aller en classe.",
    "color": "#e0e7ff"
  },
  {
    "id": "bol",
    "word": "bol",
    "level": 1,
    "category": "objets",
    "emoji": "🥣",
    "hint": "Récipient rond dans lequel on verse son chocolat au lait chaud.",
    "example": "Le bol de céréales est posé sur la table.",
    "color": "#fef3c7"
  },
  {
    "id": "fil",
    "word": "fil",
    "level": 1,
    "category": "objets",
    "emoji": "🧵",
    "hint": "Brin fin et solide que l'on glisse dans l'aiguille pour coudre.",
    "example": "On enfile le fil rouge pour recoudre le bouton.",
    "color": "#fee2e2"
  },
  {
    "id": "mur",
    "word": "mur",
    "level": 1,
    "category": "objets",
    "emoji": "🧱",
    "hint": "Paroi solide en briques qui protège la maison.",
    "example": "Le tableau est accroché au mur du salon.",
    "color": "#ffedd5"
  },
  {
    "id": "cle",
    "word": "clé",
    "level": 1,
    "category": "objets",
    "emoji": "🔑",
    "hint": "Petit objet en métal pour ouvrir ou fermer la porte à clé.",
    "example": "La clé tourne dans la serrure dorée.",
    "color": "#fef9c3"
  },
  {
    "id": "de",
    "word": "dé",
    "level": 1,
    "category": "objets",
    "emoji": "🎲",
    "hint": "Petit cube numéroté de 1 à 6 que l'on lance pour jouer aux jeux.",
    "example": "Je lance le dé et j'obtiens un six.",
    "color": "#f1f5f9"
  },
  {
    "id": "bac",
    "word": "bac",
    "level": 1,
    "category": "objets",
    "emoji": "📦",
    "hint": "Grand bac de rangement pour y mettre tous ses jouets.",
    "example": "On range tous les cubes dans le grand bac bleu.",
    "color": "#dbeafe"
  },
  {
    "id": "arc",
    "word": "arc",
    "level": 1,
    "category": "objets",
    "emoji": "🏹",
    "hint": "Arme en bois courbée pour envoyer des flèches sur une cible.",
    "example": "La flèche s'élance depuis la corde de l'arc.",
    "color": "#fed7aa"
  },
  {
    "id": "fer",
    "word": "fer",
    "level": 1,
    "category": "objets",
    "emoji": "🧲",
    "hint": "Métal solide attiré par les aimants.",
    "example": "L'aimant attire les petits clous en fer.",
    "color": "#e2e8f0"
  },
  {
    "id": "vis",
    "word": "vis",
    "level": 1,
    "category": "objets",
    "emoji": "🔩",
    "hint": "Petite tige filetée en métal que l'on tourne avec un tournevis.",
    "example": "La vis fixe solidement la planche de bois.",
    "color": "#cbd5e1"
  },
  {
    "id": "stylo",
    "word": "stylo",
    "level": 1,
    "category": "objets",
    "emoji": "🖊️",
    "hint": "Instrument d'écriture à bille pour écrire proprement sur son cahier.",
    "example": "J'écris la date avec mon beau stylo bleu.",
    "color": "#e0e7ff"
  },
  {
    "id": "tuba",
    "word": "tuba",
    "level": 1,
    "category": "objets",
    "emoji": "🤿",
    "hint": "Tube que l'on met dans la bouche pour respirer sous l'eau.",
    "example": "Avec mon masque et mon tuba, j'observe les poissons.",
    "color": "#cffafe"
  },
  {
    "id": "loto",
    "word": "loto",
    "level": 1,
    "category": "objets",
    "emoji": "🎟️",
    "hint": "Jeu amusant où l'on tire des numéros pour remplir sa grille.",
    "example": "J'ai posé tous mes pions sur mon carton de loto.",
    "color": "#fef3c7"
  },
  {
    "id": "piano",
    "word": "piano",
    "level": 1,
    "category": "objets",
    "emoji": "🎹",
    "hint": "Grand instrument de musique avec des touches blanches et noires.",
    "example": "Elle joue une douce berceuse sur le piano.",
    "color": "#f1f5f9"
  },
  {
    "id": "radio",
    "word": "radio",
    "level": 1,
    "category": "objets",
    "emoji": "📻",
    "hint": "Appareil qui diffuse de la musique et des histoires à écouter.",
    "example": "La radio diffuse notre chanson préférée.",
    "color": "#ffedd5"
  },
  {
    "id": "cube",
    "word": "cube",
    "level": 1,
    "category": "objets",
    "emoji": "🧊",
    "hint": "Solide à six faces carrées idéal pour bâtir des châteaux.",
    "example": "J'empile les cubes en bois pour faire une haute tour.",
    "color": "#dbeafe"
  },
  {
    "id": "lit",
    "word": "lit",
    "level": 2,
    "category": "objets",
    "emoji": "🛏️",
    "hint": "On y dort bien au chaud sous la couette la nuit.",
    "example": "Je dors dans mon lit confortable.",
    "color": "#e0f2fe"
  },
  {
    "id": "nez",
    "word": "nez",
    "level": 2,
    "category": "objets",
    "emoji": "👃",
    "hint": "Au milieu du visage pour respirer et sentir les bonnes odeurs.",
    "example": "J'ai un petit nez.",
    "color": "#fee2e2"
  },
  {
    "id": "bras",
    "word": "bras",
    "level": 2,
    "category": "objets",
    "emoji": "💪",
    "hint": "Entre l'épaule et la main, il permet de porter des choses.",
    "example": "Je plie mon bras musclé.",
    "color": "#ffedd5"
  },
  {
    "id": "pot",
    "word": "pot",
    "level": 2,
    "category": "objets",
    "emoji": "🪴",
    "hint": "Récipient pour mettre une fleur ou stocker de la confiture.",
    "example": "Un pot de fleurs sur le balcon.",
    "color": "#fed7aa"
  },
  {
    "id": "verre",
    "word": "verre",
    "level": 2,
    "category": "objets",
    "emoji": "🥛",
    "hint": "Récipient transparent pour boire de l'eau.",
    "example": "Un verre d'eau bien fraîche.",
    "color": "#cffafe"
  },
  {
    "id": "livre",
    "word": "livre",
    "level": 2,
    "category": "objets",
    "emoji": "📖",
    "hint": "Rempli d'histoires avec des pages à tourner.",
    "example": "Je lis un beau livre de contes.",
    "color": "#ede9fe"
  },
  {
    "id": "table",
    "word": "table",
    "level": 2,
    "category": "objets",
    "emoji": "🪑",
    "hint": "Meuble à quatre pieds sur lequel on pose son assiette ou son cahier.",
    "example": "Nous mangeons tous à table.",
    "color": "#fef3c7"
  },
  {
    "id": "porte",
    "word": "porte",
    "level": 2,
    "category": "objets",
    "emoji": "🚪",
    "hint": "On l'ouvre par la poignée pour entrer dans la classe.",
    "example": "Ferme la porte s'il te plaît.",
    "color": "#fed7aa"
  },
  {
    "id": "robot",
    "word": "robot",
    "level": 2,
    "category": "objets",
    "emoji": "🤖",
    "hint": "Machine électronique amusante qui obéit aux ordres.",
    "example": "Mon robot avance tout seul.",
    "color": "#e2e8f0"
  },
  {
    "id": "tasse",
    "word": "tasse",
    "level": 2,
    "category": "objets",
    "emoji": "☕",
    "hint": "Petit récipient avec une anse pour boire une tisane chaude.",
    "example": "Une jolie tasse décorée.",
    "color": "#fee2e2"
  },
  {
    "id": "boite",
    "word": "boîte",
    "level": 2,
    "category": "objets",
    "emoji": "📦",
    "hint": "Objet en carton ou en métal qui s'ouvre avec un couvercle.",
    "example": "Une boîte remplie de trésors.",
    "color": "#fed7aa"
  },
  {
    "id": "lampe",
    "word": "lampe",
    "level": 2,
    "category": "objets",
    "emoji": "💡",
    "hint": "Elle s'allume pour éclairer la pièce quand il fait nuit.",
    "example": "La lampe éclaire mon bureau.",
    "color": "#fef9c3"
  },
  {
    "id": "tapis",
    "word": "tapis",
    "level": 2,
    "category": "objets",
    "emoji": "🧶",
    "hint": "Tissu épais posé par terre pour réchauffer les pieds.",
    "example": "Un tapis tout doux dans le salon.",
    "color": "#ede9fe"
  },
  {
    "id": "fauteuil",
    "word": "fauteuil",
    "level": 2,
    "category": "objets",
    "emoji": "🛋️",
    "hint": "Siège large et très confortable avec des accoudoirs.",
    "example": "Grand-père lit dans son fauteuil.",
    "color": "#fed7aa"
  },
  {
    "id": "chaise",
    "word": "chaise",
    "level": 2,
    "category": "objets",
    "emoji": "🪑",
    "hint": "Siège sur lequel on s'assoit pour travailler ou manger.",
    "example": "Assieds-toi sur ta chaise.",
    "color": "#fed7aa"
  },
  {
    "id": "tiroir",
    "word": "tiroir",
    "level": 2,
    "category": "objets",
    "emoji": "🗄️",
    "hint": "Compartiment qui coulisse dans le meuble pour ranger.",
    "example": "Le tiroir est plein de stylos.",
    "color": "#f1f5f9"
  },
  {
    "id": "armoire",
    "word": "armoire",
    "level": 2,
    "category": "objets",
    "emoji": "🚪",
    "hint": "Grand meuble haut où l'on suspend ses vêtements.",
    "example": "Je range mon manteau dans l'armoire.",
    "color": "#fed7aa"
  },
  {
    "id": "miroir",
    "word": "miroir",
    "level": 2,
    "category": "objets",
    "emoji": "🪞",
    "hint": "Surface brillante qui reflète notre visage.",
    "example": "Je me regarde dans le miroir.",
    "color": "#cffafe"
  },
  {
    "id": "savon",
    "word": "savon",
    "level": 2,
    "category": "objets",
    "emoji": "🧼",
    "hint": "Il mousse dans les mains et lave très proprement avec de l'eau.",
    "example": "Le savon sent bon la lavande.",
    "color": "#fce7f3"
  },
  {
    "id": "peigne",
    "word": "peigne",
    "level": 2,
    "category": "objets",
    "emoji": "🪮",
    "hint": "Objet à dents fines pour démêler les cheveux le matin.",
    "example": "Je me coiffe avec mon peigne.",
    "color": "#fef3c7"
  },
  {
    "id": "brosse",
    "word": "brosse",
    "level": 2,
    "category": "objets",
    "emoji": "🪥",
    "hint": "Elle nettoie les dents ou discipline les mèches de cheveux.",
    "example": "Une brosse à dents toute neuve.",
    "color": "#e0f2fe"
  },
  {
    "id": "balai",
    "word": "balai",
    "level": 2,
    "category": "objets",
    "emoji": "🧹",
    "hint": "Outil à long manche qui sert à ramasser les miettes au sol.",
    "example": "On passe un coup de balai dans la cuisine.",
    "color": "#fed7aa"
  },
  {
    "id": "valise",
    "word": "valise",
    "level": 2,
    "category": "objets",
    "emoji": "🧳",
    "hint": "Grand bagage dans lequel on prépare ses habits de vacances.",
    "example": "Ma valise est prête pour le voyage.",
    "color": "#fee2e2"
  },
  {
    "id": "montre",
    "word": "montre",
    "level": 2,
    "category": "objets",
    "emoji": "⌚",
    "hint": "Petit cadran que l'on porte au poignet pour lire l'heure.",
    "example": "Ma montre indique huit heures.",
    "color": "#e0e7ff"
  },
  {
    "id": "horloge",
    "word": "horloge",
    "level": 2,
    "category": "objets",
    "emoji": "⏰",
    "hint": "Cadran mural qui sonne le tic-tac des secondes.",
    "example": "L'horloge sonne la fin de la classe.",
    "color": "#fef9c3"
  },
  {
    "id": "gomme",
    "word": "gomme",
    "level": 2,
    "category": "objets",
    "emoji": "🧼",
    "hint": "Petit morceau de caoutchouc qui efface les traits de crayon.",
    "example": "La gomme efface mon erreur.",
    "color": "#fce7f3"
  },
  {
    "id": "regle",
    "word": "règle",
    "level": 2,
    "category": "objets",
    "emoji": "📏",
    "hint": "Outil plat et gradué pour tracer des lignes bien droites.",
    "example": "Je trace un trait à la règle.",
    "color": "#fef9c3"
  },
  {
    "id": "colle",
    "word": "colle",
    "level": 2,
    "category": "objets",
    "emoji": "🧴",
    "hint": "Bâton blanc pour coller les feuilles dans le cahier.",
    "example": "Un tube de colle pour l'atelier.",
    "color": "#e0f2fe"
  },
  {
    "id": "cahier",
    "word": "cahier",
    "level": 2,
    "category": "objets",
    "emoji": "📒",
    "hint": "Ensemble de pages quadrillées pour faire ses exercices.",
    "example": "J'ouvre mon cahier de poésie.",
    "color": "#fef3c7"
  },
  {
    "id": "maison",
    "word": "maison",
    "level": 3,
    "category": "objets",
    "emoji": "🏠",
    "hint": "L'endroit chaleureux où l'on vit en famille.",
    "example": "Bienvenue dans ma maison accueillante.",
    "color": "#ffedd5"
  },
  {
    "id": "ballon",
    "word": "ballon",
    "level": 3,
    "category": "objets",
    "emoji": "⚽",
    "hint": "Sphère en cuir gonflée d'air avec deux L pour jouer.",
    "example": "On tire dans le ballon pour marquer.",
    "color": "#f1f5f9"
  },
  {
    "id": "cartable",
    "word": "cartable",
    "level": 3,
    "category": "objets",
    "emoji": "🎒",
    "hint": "Grand sac d'écolier porté sur le dos pour transporter ses livres.",
    "example": "Mon cartable est bien rangé.",
    "color": "#e0e7ff"
  },
  {
    "id": "ciseaux",
    "word": "ciseaux",
    "level": 3,
    "category": "objets",
    "emoji": "✂️",
    "hint": "Outil à deux lames articulées pour découper proprement le papier.",
    "example": "Découpe le contour avec tes ciseaux.",
    "color": "#e2e8f0"
  },
  {
    "id": "pinceau",
    "word": "pinceau",
    "level": 3,
    "category": "objets",
    "emoji": "🖌️",
    "hint": "Poils doux fixés sur un manche pour peindre en couleur.",
    "example": "Je trempe mon pinceau dans la gouache.",
    "color": "#fed7aa"
  },
  {
    "id": "tableau",
    "word": "tableau",
    "level": 3,
    "category": "objets",
    "emoji": "🖼️",
    "hint": "Grande surface noire ou blanche sur laquelle écrit le maître.",
    "example": "Le maître écrit la date au tableau.",
    "color": "#dcfce7"
  },
  {
    "id": "feutre",
    "word": "feutre",
    "level": 3,
    "category": "objets",
    "emoji": "🖍️",
    "hint": "Crayon à mine d'encre colorée pour faire de beaux dessins.",
    "example": "Je colorie le soleil avec un feutre jaune.",
    "color": "#fef9c3"
  },
  {
    "id": "crayon",
    "word": "crayon",
    "level": 3,
    "category": "objets",
    "emoji": "✏️",
    "hint": "Bâtonnet de bois contenant une mine de graphite.",
    "example": "Je taille mon crayon de papier.",
    "color": "#fed7aa"
  },
  {
    "id": "trousse",
    "word": "trousse",
    "level": 3,
    "category": "objets",
    "emoji": "👝",
    "hint": "Petite pochette zippée pour ranger ses stylos et sa gomme.",
    "example": "Ma trousse est pleine de couleurs.",
    "color": "#fce7f3"
  },
  {
    "id": "compas",
    "word": "compas",
    "level": 3,
    "category": "objets",
    "emoji": "📐",
    "hint": "Instrument à deux branches servant à tracer de parfaits cercles.",
    "example": "Le compas tourne sur la feuille.",
    "color": "#e2e8f0"
  },
  {
    "id": "eponge",
    "word": "éponge",
    "level": 3,
    "category": "objets",
    "emoji": "🧽",
    "hint": "Objet très poreux qui absorbe l'eau pour nettoyer l'ardoise.",
    "example": "L'éponge nettoie le tableau d'un geste.",
    "color": "#fef9c3"
  },
  {
    "id": "bouteille",
    "word": "bouteille",
    "level": 3,
    "category": "objets",
    "emoji": "🍾",
    "hint": "Récipient allongé avec un goulot pour conserver les boissons.",
    "example": "Une bouteille d'eau fraîche pour le sport.",
    "color": "#e0f2fe"
  },
  {
    "id": "poubelle",
    "word": "poubelle",
    "level": 3,
    "category": "objets",
    "emoji": "🗑️",
    "hint": "Bac dans lequel on jette les déchets pour garder la classe propre.",
    "example": "Jette le papier à la poubelle.",
    "color": "#e2e8f0"
  },
  {
    "id": "lunettes",
    "word": "lunettes",
    "level": 3,
    "category": "objets",
    "emoji": "👓",
    "hint": "Deux verres correcteurs posés sur le nez pour mieux voir.",
    "example": "Je porte mes lunettes pour lire.",
    "color": "#ede9fe"
  },
  {
    "id": "chapeau",
    "word": "chapeau",
    "level": 3,
    "category": "objets",
    "emoji": "🎩",
    "hint": "Couvre-chef élégant que l'on pose sur sa tête.",
    "example": "Le magicien sort un lapin de son chapeau.",
    "color": "#e0e7ff"
  },
  {
    "id": "manteau",
    "word": "manteau",
    "level": 3,
    "category": "objets",
    "emoji": "🧥",
    "hint": "Vêtement chaud et épais qu'on enfile en hiver.",
    "example": "Je boutonne mon gros manteau.",
    "color": "#fed7aa"
  },
  {
    "id": "echarpe",
    "word": "écharpe",
    "level": 3,
    "category": "objets",
    "emoji": "🧣",
    "hint": "Bande de laine tricotée pour protéger son cou du froid.",
    "example": "Une écharpe toute douce autour du cou.",
    "color": "#fee2e2"
  },
  {
    "id": "bonnet",
    "word": "bonnet",
    "level": 3,
    "category": "objets",
    "emoji": "🧢",
    "hint": "Coiffe en laine qui protège la tête et les oreilles.",
    "example": "Je mets mon bonnet pour aller dans la neige.",
    "color": "#e0e7ff"
  },
  {
    "id": "bottes",
    "word": "bottes",
    "level": 3,
    "category": "objets",
    "emoji": "👢",
    "hint": "Chaussures montantes imperméables pour sauter dans les flaques.",
    "example": "Mes bottes en caoutchouc rouge.",
    "color": "#fee2e2"
  },
  {
    "id": "baskets",
    "word": "baskets",
    "level": 3,
    "category": "objets",
    "emoji": "👟",
    "hint": "Chaussures de sport très confortables pour courir vite.",
    "example": "Je lace mes baskets pour la récréation.",
    "color": "#f1f5f9"
  },
  {
    "id": "pantalon",
    "word": "pantalon",
    "level": 3,
    "category": "objets",
    "emoji": "👖",
    "hint": "Vêtement à deux jambes qui descend jusqu'aux chevilles.",
    "example": "Mon pantalon en jean bleu.",
    "color": "#dbeafe"
  },
  {
    "id": "chemise",
    "word": "chemise",
    "level": 3,
    "category": "objets",
    "emoji": "👔",
    "hint": "Vêtement boutonné avec un col et des manches longues.",
    "example": "Une chemise blanche bien repassée.",
    "color": "#f8fafc"
  },
  {
    "id": "guitare",
    "word": "guitare",
    "level": 3,
    "category": "objets",
    "emoji": "🎸",
    "hint": "Instrument de musique à six cordes que l'on pince.",
    "example": "Je joue une chanson à la guitare.",
    "color": "#fed7aa"
  },
  {
    "id": "tambour",
    "word": "tambour",
    "level": 3,
    "category": "objets",
    "emoji": "🥁",
    "hint": "Instrument de percussion sur lequel on tape en rythme avec des baguettes.",
    "example": "Le tambour bat la mesure.",
    "color": "#fee2e2"
  },
  {
    "id": "clavier",
    "word": "clavier",
    "level": 3,
    "category": "objets",
    "emoji": "⌨️",
    "hint": "Planche garnie de touches avec des lettres pour taper du texte.",
    "example": "Mes doigts volent sur le clavier.",
    "color": "#f1f5f9"
  },
  {
    "id": "parapluie",
    "word": "parapluie",
    "level": 4,
    "category": "objets",
    "emoji": "☂️",
    "hint": "Dôme de toile imperméable que l'on déploie sous l'averse.",
    "example": "J'ouvre mon parapluie pour rester au sec.",
    "color": "#ede9fe"
  },
  {
    "id": "chateau",
    "word": "château",
    "level": 4,
    "category": "objets",
    "emoji": "🏰",
    "hint": "Grande forteresse médiévale flanquée de hautes tours.",
    "example": "Le roi habite dans son château fort.",
    "color": "#fef3c7"
  },
  {
    "id": "trompette",
    "word": "trompette",
    "level": 4,
    "category": "objets",
    "emoji": "🎺",
    "hint": "Instrument en cuivre brillant qui produit un son éclatant.",
    "example": "La fanfare fait résonner la trompette.",
    "color": "#fef9c3"
  },
  {
    "id": "violon",
    "word": "violon",
    "level": 4,
    "category": "objets",
    "emoji": "🎻",
    "hint": "Instrument en bois à quatre cordes frottées avec un archet.",
    "example": "Le violoniste joue une mélodie émouvante.",
    "color": "#fed7aa"
  },
  {
    "id": "microscope",
    "word": "microscope",
    "level": 4,
    "category": "objets",
    "emoji": "🔬",
    "hint": "Appareil scientifique qui grossit l'infiniment petit.",
    "example": "J'observe une cellule au microscope.",
    "color": "#cffafe"
  },
  {
    "id": "telescope",
    "word": "télescope",
    "level": 4,
    "category": "objets",
    "emoji": "🔭",
    "hint": "Grand instrument d'optique pour observer les étoiles la nuit.",
    "example": "Le télescope dévoile les cratères de la Lune.",
    "color": "#ede9fe"
  },
  {
    "id": "telephone",
    "word": "téléphone",
    "level": 4,
    "category": "objets",
    "emoji": "📱",
    "hint": "Petit appareil électronique tactile pour appeler ses proches.",
    "example": "J'appelle mes grands-parents au téléphone.",
    "color": "#f1f5f9"
  },
  {
    "id": "television",
    "word": "télévision",
    "level": 4,
    "category": "objets",
    "emoji": "📺",
    "hint": "Grand écran familial pour regarder des documentaires passionnants.",
    "example": "Nous regardons un dessin animé à la télévision.",
    "color": "#e2e8f0"
  },
  {
    "id": "baignoire",
    "word": "baignoire",
    "level": 4,
    "category": "objets",
    "emoji": "🛁",
    "hint": "Grand bac émaillé où l'on prend un bon bain moussant.",
    "example": "L'eau chaude coule dans la baignoire.",
    "color": "#cffafe"
  },
  {
    "id": "serviette",
    "word": "serviette",
    "level": 4,
    "category": "objets",
    "emoji": "🧖",
    "hint": "Linge doux et absorbant pour se sécher après la douche.",
    "example": "Une grande serviette de bain moelleuse.",
    "color": "#fce7f3"
  },
  {
    "id": "dentifrice",
    "word": "dentifrice",
    "level": 4,
    "category": "objets",
    "emoji": "🪥",
    "hint": "Pâte nettoyante parfumée à la menthe pour les dents.",
    "example": "Je dépose une noisette de dentifrice.",
    "color": "#e0f2fe"
  },
  {
    "id": "toboggan",
    "word": "toboggan",
    "level": 4,
    "category": "objets",
    "emoji": "🛝",
    "hint": "Piste inclinée du parc où les enfants glissent avec joie.",
    "example": "Je glisse sur le grand toboggan.",
    "color": "#fef3c7"
  },
  {
    "id": "balancoire",
    "word": "balançoire",
    "level": 4,
    "category": "objets",
    "emoji": "🎠",
    "hint": "Siège suspendu par deux cordes pour voler dans le ciel.",
    "example": "La balançoire monte très haut.",
    "color": "#fef3c7"
  },
  {
    "id": "ventilateur",
    "word": "ventilateur",
    "level": 4,
    "category": "objets",
    "emoji": "🌀",
    "hint": "Appareil à hélices qui brasse l'air frais en été.",
    "example": "Le ventilateur souffle une douce brise.",
    "color": "#e0f2fe"
  },
  {
    "id": "radiateur",
    "word": "radiateur",
    "level": 4,
    "category": "objets",
    "emoji": "🔥",
    "hint": "Appareil métallique qui chauffe doucement la pièce en hiver.",
    "example": "Le chat dort près du radiateur chaud.",
    "color": "#fee2e2"
  },
  {
    "id": "casque_audio",
    "word": "casque audio",
    "level": 4,
    "category": "objets",
    "emoji": "🎧",
    "hint": "Écouteurs confortables que l'on pose sur ses oreilles.",
    "example": "J'écoute une histoire avec mon casque.",
    "color": "#ede9fe"
  },
  {
    "id": "dictionnaire",
    "word": "dictionnaire",
    "level": 4,
    "category": "objets",
    "emoji": "📖",
    "hint": "Gros livre contenant la définition de milliers de mots.",
    "example": "Je cherche un mot rare dans le dictionnaire.",
    "color": "#fef3c7"
  },
  {
    "id": "encyclopedie",
    "word": "encyclopédie",
    "level": 4,
    "category": "objets",
    "emoji": "📚",
    "hint": "Ouvrage complet expliquant tous les secrets du monde.",
    "example": "Cette encyclopédie regorge d'images magnifiques.",
    "color": "#ede9fe"
  },
  {
    "id": "ordinateur",
    "word": "ordinateur",
    "level": 5,
    "category": "objets",
    "emoji": "💻",
    "hint": "Machine puissante dotée d'un écran, d'une souris et d'un clavier.",
    "example": "J'apprends à taper sur mon ordinateur.",
    "color": "#f1f5f9"
  },
  {
    "id": "bibliotheque",
    "word": "bibliothèque",
    "level": 5,
    "category": "objets",
    "emoji": "📚",
    "hint": "Grande armoire ou salle entière remplie d'étagères de livres.",
    "example": "Nous empruntons des albums à la bibliothèque.",
    "color": "#ede9fe"
  },
  {
    "id": "anniversaire",
    "word": "anniversaire",
    "level": 5,
    "category": "objets",
    "emoji": "🎉",
    "hint": "Jour festif exceptionnel où l'on souffle ses bougies avec ses amis.",
    "example": "Joyeux anniversaire et plein de bonheur !",
    "color": "#fce7f3"
  },
  {
    "id": "labyrinthe",
    "word": "labyrinthe",
    "level": 5,
    "category": "objets",
    "emoji": "🌀",
    "hint": "Parcours complexe aux allées tortueuses dont on cherche l'issue.",
    "example": "On trouve la sortie secrète du labyrinthe.",
    "color": "#dcfce7"
  },
  {
    "id": "squelette",
    "word": "squelette",
    "level": 5,
    "category": "objets",
    "emoji": "💀",
    "hint": "L'armature solide de tous les os articulés de notre corps.",
    "example": "Le squelette nous permet de courir et sauter.",
    "color": "#f8fafc"
  },
  {
    "id": "kaleidoscope",
    "word": "kaléidoscope",
    "level": 5,
    "category": "objets",
    "emoji": "🔮",
    "hint": "Tube magique qui crée des figures colorées symétriques à l'infini.",
    "example": "Je regarde les formes féeriques du kaléidoscope.",
    "color": "#fce7f3"
  },
  {
    "id": "taille_crayon",
    "word": "taille-crayon",
    "level": 5,
    "category": "objets",
    "emoji": "✏️",
    "hint": "Petit boîtier contenant une lame qui affine la mine des crayons.",
    "example": "Mon taille-crayon recueille tous les copeaux.",
    "color": "#fef3c7"
  },
  {
    "id": "microphone",
    "word": "microphone",
    "level": 5,
    "category": "objets",
    "emoji": "🎤",
    "hint": "Appareil électronique qui amplifie la voix des chanteurs.",
    "example": "La chanteuse parle dans son microphone.",
    "color": "#f1f5f9"
  },
  {
    "id": "refrigerateur",
    "word": "réfrigérateur",
    "level": 5,
    "category": "objets",
    "emoji": "🧊",
    "hint": "Grande armoire froide qui conserve les aliments bien au frais.",
    "example": "Le lait reste frais dans le réfrigérateur.",
    "color": "#cffafe"
  },
  {
    "id": "trampoline",
    "word": "trampoline",
    "level": 5,
    "category": "objets",
    "emoji": "🤸",
    "hint": "Toile élastique tendue sur laquelle on fait de gigantesques bonds.",
    "example": "Je saute très haut sur le trampoline.",
    "color": "#dcfce7"
  },
  {
    "id": "thermometre",
    "word": "thermomètre",
    "level": 5,
    "category": "objets",
    "emoji": "🌡️",
    "hint": "Instrument précis gradué qui mesure la température de l'air.",
    "example": "Le thermomètre indique vingt degrés.",
    "color": "#fee2e2"
  },
  {
    "id": "appareil_photo",
    "word": "appareil photo",
    "level": 5,
    "category": "objets",
    "emoji": "📷",
    "hint": "Boîtier magique qui immortalise les plus beaux souvenirs.",
    "example": "Clic-clac, je prends une jolie photo de famille.",
    "color": "#e2e8f0"
  },
  {
    "id": "machine_a_laver",
    "word": "machine à laver",
    "level": 5,
    "category": "objets",
    "emoji": "🫧",
    "hint": "Appareil ménager dont le tambour lave le linge de la maison.",
    "example": "La machine à laver fait des bulles de savon.",
    "color": "#cffafe"
  },
  {
    "id": "porte_monnaie",
    "word": "porte-monnaie",
    "level": 5,
    "category": "objets",
    "emoji": "👛",
    "hint": "Petite pochette où l'on garde ses pièces de monnaie.",
    "example": "Je range mes sous dans mon porte-monnaie.",
    "color": "#fce7f3"
  },
  {
    "id": "boussole",
    "word": "boussole",
    "level": 5,
    "category": "objets",
    "emoji": "🧭",
    "hint": "Cadran dont l'aiguille aimantée pointe toujours vers le Nord.",
    "example": "La boussole indique la direction du pôle Nord.",
    "color": "#fef3c7"
  },
  {
    "id": "sculpture",
    "word": "sculpture",
    "level": 5,
    "category": "objets",
    "emoji": "🗿",
    "hint": "Œuvre d'art tridimensionnelle taillée dans la pierre ou le bois.",
    "example": "Une magnifique sculpture exposée au musée.",
    "color": "#e2e8f0"
  },
  {
    "id": "lac",
    "word": "lac",
    "level": 1,
    "category": "nature",
    "emoji": "🏞️",
    "hint": "Grande étendue d'eau calme entourée de jolies montagnes.",
    "example": "Les petits canards nagent paisiblement sur le lac.",
    "color": "#dbeafe"
  },
  {
    "id": "mer",
    "word": "mer",
    "level": 1,
    "category": "nature",
    "emoji": "🌊",
    "hint": "Vaste étendue d'eau bleue où dansent les vagues et les poissons.",
    "example": "Les vagues de la mer viennent caresser la plage.",
    "color": "#cffafe"
  },
  {
    "id": "sol",
    "word": "sol",
    "level": 1,
    "category": "nature",
    "emoji": "🌱",
    "hint": "Terre sur laquelle on marche et où poussent les jolies fleurs.",
    "example": "Une jeune pousse verte sort doucement du sol.",
    "color": "#dcfce7"
  },
  {
    "id": "pre",
    "word": "pré",
    "level": 1,
    "category": "nature",
    "emoji": "🌾",
    "hint": "Grand champ d'herbe verte où gambadent les animaux de la ferme.",
    "example": "Les vaches broutent tranquillement dans le pré fleuri.",
    "color": "#fef9c3"
  },
  {
    "id": "ciel",
    "word": "ciel",
    "level": 1,
    "category": "nature",
    "emoji": "🌌",
    "hint": "Immense voûte bleue au-dessus de nos têtes où brillent les étoiles.",
    "example": "Le soleil brille haut dans le ciel bleu clair.",
    "color": "#e0e7ff"
  },
  {
    "id": "roc",
    "word": "roc",
    "level": 1,
    "category": "nature",
    "emoji": "🪨",
    "hint": "Gros rocher très dur et solide posé sur la falaise.",
    "example": "La forteresse a été bâtie sur un solide roc.",
    "color": "#e2e8f0"
  },
  {
    "id": "pic",
    "word": "pic",
    "level": 1,
    "category": "nature",
    "emoji": "⛰️",
    "hint": "Sommet pointu et majestueux d'une très haute montagne.",
    "example": "Le pic enneigé perce à travers les nuages.",
    "color": "#cbd5e1"
  },
  {
    "id": "gel",
    "word": "gel",
    "level": 1,
    "category": "nature",
    "emoji": "🧊",
    "hint": "Froid piquant d'hiver qui transforme l'eau en fine couche de glace.",
    "example": "Le gel du matin fait scintiller l'herbe du jardin.",
    "color": "#dbeafe"
  },
  {
    "id": "feu",
    "word": "feu",
    "level": 1,
    "category": "nature",
    "emoji": "🔥",
    "hint": "Belles flammes chaudes et dansantes dans la cheminée.",
    "example": "Le feu crépite doucement dans la cheminée du salon.",
    "color": "#fee2e2"
  },
  {
    "id": "pin",
    "word": "pin",
    "level": 1,
    "category": "nature",
    "emoji": "🌲",
    "hint": "Grand arbre de la forêt qui reste vert même en plein hiver.",
    "example": "On ramasse de jolies pommes de pin sous l'arbre.",
    "color": "#dcfce7"
  },
  {
    "id": "lys",
    "word": "lys",
    "level": 1,
    "category": "nature",
    "emoji": "⚜️",
    "hint": "Très belle fleur royale blanche au parfum très délicat.",
    "example": "Le lys déploie six grands pétales purs et blancs.",
    "color": "#f8fafc"
  },
  {
    "id": "parc",
    "word": "parc",
    "level": 1,
    "category": "nature",
    "emoji": "🌳",
    "hint": "Grand espace vert aménagé pour se promener et jouer en plein air.",
    "example": "Les enfants font du toboggan dans le grand parc.",
    "color": "#dcfce7"
  },
  {
    "id": "lune",
    "word": "lune",
    "level": 1,
    "category": "nature",
    "emoji": "🌙",
    "hint": "Bel astre blanc qui éclaire la nuit et veille sur notre sommeil.",
    "example": "La pleine lune brille doucement dans la nuit étoilée.",
    "color": "#ede9fe"
  },
  {
    "id": "dune",
    "word": "dune",
    "level": 1,
    "category": "nature",
    "emoji": "🏜️",
    "hint": "Grande colline de sable fin formée par le souffle du vent.",
    "example": "On glisse joyeusement le long de la grande dune.",
    "color": "#fef3c7"
  },
  {
    "id": "ile",
    "word": "île",
    "level": 1,
    "category": "nature",
    "emoji": "🏝️",
    "hint": "Terre entourée d'eau de tous les côtés au milieu de la mer.",
    "example": "Un palmier solitaire pousse sur la petite île.",
    "color": "#cffafe"
  },
  {
    "id": "rose",
    "word": "rose",
    "level": 1,
    "category": "nature",
    "emoji": "🌹",
    "hint": "Fleur délicate et parfumée aux jolis pétales colorés.",
    "example": "Une belle rose rouge s'épanouit dans le rosier.",
    "color": "#fce7f3"
  },
  {
    "id": "vent",
    "word": "vent",
    "level": 2,
    "category": "nature",
    "emoji": "💨",
    "hint": "L'air en mouvement qui fait bruisser les feuilles des arbres.",
    "example": "Le vent fait voler mon cerf-volant.",
    "color": "#e0f2fe"
  },
  {
    "id": "bois",
    "word": "bois",
    "level": 2,
    "category": "nature",
    "emoji": "🪵",
    "hint": "Matière du tronc des arbres ou petit groupe d'arbres.",
    "example": "Nous nous promenons dans les bois calmes.",
    "color": "#fed7aa"
  },
  {
    "id": "fleur",
    "word": "fleur",
    "level": 2,
    "category": "nature",
    "emoji": "🌸",
    "hint": "Elle éclot au printemps et embaume le jardin de ses couleurs.",
    "example": "Une jolie fleur rose dans l'herbe.",
    "color": "#fce7f3"
  },
  {
    "id": "arbre",
    "word": "arbre",
    "level": 2,
    "category": "nature",
    "emoji": "🌳",
    "hint": "Il a de profondes racines, un tronc de bois et de belles feuilles vertes.",
    "example": "Les oiseaux chantent dans le grand arbre.",
    "color": "#dcfce7"
  },
  {
    "id": "nuage",
    "word": "nuage",
    "level": 2,
    "category": "nature",
    "emoji": "☁️",
    "hint": "Gros coussin blanc de vapeur suspendu dans le ciel bleu.",
    "example": "Le nuage défile au gré du vent.",
    "color": "#f1f5f9"
  },
  {
    "id": "soleil",
    "word": "soleil",
    "level": 2,
    "category": "nature",
    "emoji": "☀️",
    "hint": "Notre étoile dorée qui réchauffe et éclaire toute la Terre.",
    "example": "Le soleil brille chaleureusement.",
    "color": "#fef9c3"
  },
  {
    "id": "herbe",
    "word": "herbe",
    "level": 2,
    "category": "nature",
    "emoji": "🌱",
    "hint": "Tapis végétal vert et frais qui couvre les champs.",
    "example": "L'herbe fraîche est douce sous les pieds nus.",
    "color": "#dcfce7"
  },
  {
    "id": "foret",
    "word": "forêt",
    "level": 2,
    "category": "nature",
    "emoji": "🌲",
    "hint": "Grand domaine boisé peuplé d'arbres centenaires et d'animaux.",
    "example": "Les cerfs vivent cachés dans la forêt.",
    "color": "#dcfce7"
  },
  {
    "id": "plage",
    "word": "plage",
    "level": 2,
    "category": "nature",
    "emoji": "🏖️",
    "hint": "Bord de mer recouvert de sable fin où l'on ramasse des coquillages.",
    "example": "On fait de magnifiques châteaux de sable sur la plage.",
    "color": "#fef3c7"
  },
  {
    "id": "sable",
    "word": "sable",
    "level": 2,
    "category": "nature",
    "emoji": "⏳",
    "hint": "Poussière dorée de coquillages et de roches au bord de l'eau.",
    "example": "Le sable chaud glisse entre mes doigts.",
    "color": "#fef3c7"
  },
  {
    "id": "vague",
    "word": "vague",
    "level": 2,
    "category": "nature",
    "emoji": "🌊",
    "hint": "Ondulation de la mer qui vient rouler et écumer sur le rivage.",
    "example": "La vague s'écrase sur les galets.",
    "color": "#cffafe"
  },
  {
    "id": "galet",
    "word": "galet",
    "level": 2,
    "category": "nature",
    "emoji": "🪨",
    "hint": "Caillou tout rond et lisse poli par les vagues de la mer.",
    "example": "Je fais des ricochets avec un galet plat.",
    "color": "#e2e8f0"
  },
  {
    "id": "pluie",
    "word": "pluie",
    "level": 2,
    "category": "nature",
    "emoji": "🌧️",
    "hint": "Gouttes d'eau bienfaisantes qui tombent des nuages pour arroser les plantes.",
    "example": "La pluie nourrit les jardins assoiffés.",
    "color": "#e0f2fe"
  },
  {
    "id": "neige",
    "word": "neige",
    "level": 2,
    "category": "nature",
    "emoji": "❄️",
    "hint": "Flocons de glace légers et blancs qui forment un manteau silencieux.",
    "example": "La neige recouvre les toits du village.",
    "color": "#f8fafc"
  },
  {
    "id": "orage",
    "word": "orage",
    "level": 2,
    "category": "nature",
    "emoji": "⛈️",
    "hint": "Grand phénomène météo avec des éclairs, du tonnerre et de la pluie.",
    "example": "L'orage gronde au loin dans la vallée.",
    "color": "#ede9fe"
  },
  {
    "id": "terre",
    "word": "terre",
    "level": 2,
    "category": "nature",
    "emoji": "🌍",
    "hint": "Notre belle planète bleue ou la terre fertile du jardin.",
    "example": "La Terre tourne autour du Soleil.",
    "color": "#dcfce7"
  },
  {
    "id": "riviere",
    "word": "rivière",
    "level": 2,
    "category": "nature",
    "emoji": "🏞️",
    "hint": "Cours d'eau naturel qui serpente avant de rejoindre le fleuve.",
    "example": "L'eau claire de la rivière coule doucement.",
    "color": "#cffafe"
  },
  {
    "id": "fleuve",
    "word": "fleuve",
    "level": 2,
    "category": "nature",
    "emoji": "🌊",
    "hint": "Grand cours d'eau puissant qui se jette directement dans la mer.",
    "example": "Les péniches naviguent sur le grand fleuve.",
    "color": "#dbeafe"
  },
  {
    "id": "feuille",
    "word": "feuille",
    "level": 2,
    "category": "nature",
    "emoji": "🍃",
    "hint": "Élément vert de la branche qui capte la lumière du soleil.",
    "example": "La feuille dorée voltige en automne.",
    "color": "#dcfce7"
  },
  {
    "id": "branche",
    "word": "branche",
    "level": 2,
    "category": "nature",
    "emoji": "🪵",
    "hint": "Bras de bois qui s'élance du tronc de l'arbre.",
    "example": "L'oiseau fait son nid sur une branche solide.",
    "color": "#fed7aa"
  },
  {
    "id": "graine",
    "word": "graine",
    "level": 2,
    "category": "nature",
    "emoji": "🌱",
    "hint": "Tout petit trésor végétal qui donnera une grande plante.",
    "example": "On sème la graine dans la bonne terre.",
    "color": "#dcfce7"
  },
  {
    "id": "racine",
    "word": "racine",
    "level": 2,
    "category": "nature",
    "emoji": "🌿",
    "hint": "Partie souterraine de la plante qui puise l'eau dans la terre.",
    "example": "Les racines de l'arbre s'enfoncent profondément.",
    "color": "#fed7aa"
  },
  {
    "id": "tulipe",
    "word": "tulipe",
    "level": 2,
    "category": "nature",
    "emoji": "🌷",
    "hint": "Fleur printanière en forme de calice aux couleurs éclatantes.",
    "example": "Les tulipes fleurissent dans le parc.",
    "color": "#fee2e2"
  },
  {
    "id": "buisson",
    "word": "buisson",
    "level": 2,
    "category": "nature",
    "emoji": "🪴",
    "hint": "Touffe d'arbustes touffus où aiment se cacher les lapins.",
    "example": "Le lapin se dissimule dans le buisson.",
    "color": "#dcfce7"
  },
  {
    "id": "etoile",
    "word": "étoile",
    "level": 3,
    "category": "nature",
    "emoji": "⭐",
    "hint": "Astre lointain et étincelant qui illumine le ciel nocturne.",
    "example": "Fais un vœu quand tu vois une étoile filante.",
    "color": "#fef9c3"
  },
  {
    "id": "cascade",
    "word": "cascade",
    "level": 3,
    "category": "nature",
    "emoji": "🌊",
    "hint": "Chute d'eau vive qui dégringole d'une haute falaise rocheuse.",
    "example": "Le bruit puissant de la cascade d'eau fraîche.",
    "color": "#cffafe"
  },
  {
    "id": "volcan",
    "word": "volcan",
    "level": 3,
    "category": "nature",
    "emoji": "🌋",
    "hint": "Montagne impressionnante d'où jaillit parfois de la lave incandescente.",
    "example": "La lave rouge coule le long du volcan.",
    "color": "#fee2e2"
  },
  {
    "id": "falaise",
    "word": "falaise",
    "level": 3,
    "category": "nature",
    "emoji": "🧗",
    "hint": "Paroi rocheuse abrupte qui surplombe majestueusement les flots.",
    "example": "Les mouettes nichent au creux de la falaise.",
    "color": "#e2e8f0"
  },
  {
    "id": "colline",
    "word": "colline",
    "level": 3,
    "category": "nature",
    "emoji": "⛰️",
    "hint": "Petite montagne douce et arrondie facile à gravir.",
    "example": "La maison se dresse au sommet de la colline.",
    "color": "#dcfce7"
  },
  {
    "id": "vallee",
    "word": "vallée",
    "level": 3,
    "category": "nature",
    "emoji": "🏞️",
    "hint": "Espace creux et verdoyant situé entre deux chaînes de montagnes.",
    "example": "Le village est niché au fond de la vallée.",
    "color": "#dcfce7"
  },
  {
    "id": "sentier",
    "word": "sentier",
    "level": 3,
    "category": "nature",
    "emoji": "🥾",
    "hint": "Petit chemin de terre tracé pour la randonnée en pleine nature.",
    "example": "Nous suivons le sentier à travers les sapins.",
    "color": "#fed7aa"
  },
  {
    "id": "prairie",
    "word": "prairie",
    "level": 3,
    "category": "nature",
    "emoji": "🌾",
    "hint": "Grande étendue d'herbe sauvage constellée de fleurs multicolores.",
    "example": "Les papillons butinent dans la prairie.",
    "color": "#dcfce7"
  },
  {
    "id": "glacier",
    "word": "glacier",
    "level": 3,
    "category": "nature",
    "emoji": "🧊",
    "hint": "Immense fleuve de glace éternelle descendant lentement des sommets.",
    "example": "Le glacier scintille sous les rayons du soleil.",
    "color": "#cffafe"
  },
  {
    "id": "banquise",
    "word": "banquise",
    "level": 3,
    "category": "nature",
    "emoji": "❄️",
    "hint": "Étendue d'eau de mer gelée où vivent les ours polaires.",
    "example": "L'ours blanc marche sur la banquise arctique.",
    "color": "#f8fafc"
  },
  {
    "id": "savane",
    "word": "savane",
    "level": 3,
    "category": "nature",
    "emoji": "🦁",
    "hint": "Vaste plaine herbeuse africaine ponctuée de baobabs.",
    "example": "Les zèbres traversent la savane dorée.",
    "color": "#fef3c7"
  },
  {
    "id": "jungle",
    "word": "jungle",
    "level": 3,
    "category": "nature",
    "emoji": "🌴",
    "hint": "Forêt tropicale luxuriante, très dense et humide.",
    "example": "Les singes se balancent dans la jungle.",
    "color": "#dcfce7"
  },
  {
    "id": "desert",
    "word": "désert",
    "level": 3,
    "category": "nature",
    "emoji": "🏜️",
    "hint": "Vaste région aride où les précipitations sont extrêmement rares.",
    "example": "Le soleil tape fort sur le désert de sable.",
    "color": "#fef3c7"
  },
  {
    "id": "tempete",
    "word": "tempête",
    "level": 3,
    "category": "nature",
    "emoji": "🌪️",
    "hint": "Violente tourmente de vent et de pluie balayant le paysage.",
    "example": "La tempête agite les cimes des arbres.",
    "color": "#e2e8f0"
  },
  {
    "id": "brouillard",
    "word": "brouillard",
    "level": 3,
    "category": "nature",
    "emoji": "🌫️",
    "hint": "Nuage épais posé au ras du sol qui masque la vue.",
    "example": "Le brouillard matinal enveloppe la campagne.",
    "color": "#f1f5f9"
  },
  {
    "id": "rocher",
    "word": "rocher",
    "level": 3,
    "category": "nature",
    "emoji": "🪨",
    "hint": "Masse de pierre robuste servant de perchoir aux oiseaux.",
    "example": "Le lézard se dore sur le rocher.",
    "color": "#e2e8f0"
  },
  {
    "id": "ruisseau",
    "word": "ruisseau",
    "level": 3,
    "category": "nature",
    "emoji": "🫧",
    "hint": "Petit cours d'eau chantant qui serpente à travers la clairière.",
    "example": "Le ruisseau murmure entre les cailloux.",
    "color": "#cffafe"
  },
  {
    "id": "source",
    "word": "source",
    "level": 3,
    "category": "nature",
    "emoji": "💧",
    "hint": "Endroit magique où l'eau pure jaillit naturellement de la terre.",
    "example": "Nous buvons l'eau glacée de la source.",
    "color": "#e0f2fe"
  },
  {
    "id": "clairiere",
    "word": "clairière",
    "level": 3,
    "category": "nature",
    "emoji": "🪵",
    "hint": "Espace découvert et ensoleillé au milieu d'une forêt dense.",
    "example": "Une biche apparaît dans la clairière.",
    "color": "#dcfce7"
  },
  {
    "id": "sommet",
    "word": "sommet",
    "level": 3,
    "category": "nature",
    "emoji": "🏔️",
    "hint": "Le point culminant d'une montagne touchant l'horizon.",
    "example": "Nous atteignons le sommet après une belle marche.",
    "color": "#e2e8f0"
  },
  {
    "id": "caverne",
    "word": "caverne",
    "level": 3,
    "category": "nature",
    "emoji": "🦇",
    "hint": "Cavité naturelle creusée dans la roche d'une montagne.",
    "example": "La caverne abrite les chauves-souris.",
    "color": "#e2e8f0"
  },
  {
    "id": "cristal",
    "word": "cristal",
    "level": 3,
    "category": "nature",
    "emoji": "💎",
    "hint": "Minéral transparent aux arêtes parfaites qui brille de mille feux.",
    "example": "Un beau cristal trouvé dans la grotte.",
    "color": "#cffafe"
  },
  {
    "id": "aurore",
    "word": "aurore",
    "level": 3,
    "category": "nature",
    "emoji": "🌅",
    "hint": "Le premier éclat de lumière dorée juste avant le lever du soleil.",
    "example": "L'aurore annonce une belle journée ensoleillée.",
    "color": "#ffedd5"
  },
  {
    "id": "crepuscule",
    "word": "crépuscule",
    "level": 3,
    "category": "nature",
    "emoji": "🌇",
    "hint": "Le moment poétique où le soleil disparaît derrière l'horizon.",
    "example": "Le ciel s'empourpre au crépuscule.",
    "color": "#ede9fe"
  },
  {
    "id": "flaque",
    "word": "flaque",
    "level": 3,
    "category": "nature",
    "emoji": "🌧️",
    "hint": "Petite mare d'eau de pluie dans laquelle on adore sauter en bottes.",
    "example": "Je saute à pieds joints dans la flaque.",
    "color": "#cffafe"
  },
  {
    "id": "montagne",
    "word": "montagne",
    "level": 4,
    "category": "nature",
    "emoji": "⛰️",
    "hint": "Très haute colline rocheuse couronnée de neiges éternelles.",
    "example": "La haute montagne tutoie les nuages blancs.",
    "color": "#e2e8f0"
  },
  {
    "id": "arc_en_ciel",
    "word": "arc-en-ciel",
    "level": 4,
    "category": "nature",
    "emoji": "🌈",
    "hint": "Sept couleurs magiques unies quand le soleil traverse la pluie.",
    "example": "Un arc-en-ciel radieux illumine la vallée.",
    "color": "#fef3c7"
  },
  {
    "id": "tournesol",
    "word": "tournesol",
    "level": 4,
    "category": "nature",
    "emoji": "🌻",
    "hint": "Grande fleur solaire dont la tête pivote pour suivre la lumière.",
    "example": "Le tournesol sourit au zénith.",
    "color": "#fef9c3"
  },
  {
    "id": "pissenlit",
    "word": "pissenlit",
    "level": 4,
    "category": "nature",
    "emoji": "🌼",
    "hint": "Fleur jaune dont on aime souffler sur l'aigrette plumeuse.",
    "example": "Je souffle sur les graines du pissenlit.",
    "color": "#fef9c3"
  },
  {
    "id": "coquelicot",
    "word": "coquelicot",
    "level": 4,
    "category": "nature",
    "emoji": "🌺",
    "hint": "Fleur sauvage d'un rouge écarlate ondulant au vent des blés.",
    "example": "Les coquelicots tachent de rouge les champs de blé.",
    "color": "#fee2e2"
  },
  {
    "id": "nenuphar",
    "word": "nénuphar",
    "level": 4,
    "category": "nature",
    "emoji": "🪷",
    "hint": "Grande feuille plate flottant sur l'eau où se perche la grenouille.",
    "example": "La grenouille verte coasse sur son nénuphar.",
    "color": "#dcfce7"
  },
  {
    "id": "stalactite",
    "word": "stalactite",
    "level": 4,
    "category": "nature",
    "emoji": "🧊",
    "hint": "Concrétion de calcaire pointue suspendue au plafond des grottes.",
    "example": "Une stalactite millénaire goutte lentement.",
    "color": "#cffafe"
  },
  {
    "id": "stalagmite",
    "word": "stalagmite",
    "level": 4,
    "category": "nature",
    "emoji": "🧊",
    "hint": "Pilier calcaire qui monte patiemment du sol d'une grotte.",
    "example": "La stalagmite s'élève goutte après goutte.",
    "color": "#cffafe"
  },
  {
    "id": "ouragan",
    "word": "ouragan",
    "level": 4,
    "category": "nature",
    "emoji": "🌀",
    "hint": "Cyclone tropical géant aux vents d'une force extraordinaire.",
    "example": "L'ouragan soulève des vagues gigantesques.",
    "color": "#e0f2fe"
  },
  {
    "id": "tornade",
    "word": "tornade",
    "level": 4,
    "category": "nature",
    "emoji": "🌪️",
    "hint": "Colonne d'air tourbillonnant à grande vitesse dévastant tout.",
    "example": "La tornade tourbillonne au-dessus de la plaine.",
    "color": "#e2e8f0"
  },
  {
    "id": "avalanche",
    "word": "avalanche",
    "level": 4,
    "category": "nature",
    "emoji": "❄️",
    "hint": "Masse immense de neige qui dévale à toute vitesse la pente.",
    "example": "L'avalanche gronde le long du versant nord.",
    "color": "#f8fafc"
  },
  {
    "id": "bambouseraie",
    "word": "bambouseraie",
    "level": 4,
    "category": "nature",
    "emoji": "🎋",
    "hint": "Forêt dense de hauts bambous verts se balançant dans le vent.",
    "example": "Le panda se régale au cœur de la bambouseraie.",
    "color": "#dcfce7"
  },
  {
    "id": "vegetation",
    "word": "végétation",
    "level": 4,
    "category": "nature",
    "emoji": "🌿",
    "hint": "L'ensemble luxuriant de toutes les plantes d'une région.",
    "example": "La végétation tropicale est d'une grande richesse.",
    "color": "#dcfce7"
  },
  {
    "id": "maregraphe",
    "word": "marégraphe",
    "level": 4,
    "category": "nature",
    "emoji": "🌊",
    "hint": "Appareil côtier qui enregistre la hauteur des marées.",
    "example": "Le marégraphe mesure le flux et le reflux de l'océan.",
    "color": "#cffafe"
  },
  {
    "id": "asteroide",
    "word": "astéroïde",
    "level": 4,
    "category": "nature",
    "emoji": "☄️",
    "hint": "Petit corps rocheux qui voyage à travers l'espace lointain.",
    "example": "L'astéroïde frôle l'orbite de la planète.",
    "color": "#ede9fe"
  },
  {
    "id": "nebuleuse",
    "word": "nébuleuse",
    "level": 4,
    "category": "nature",
    "emoji": "🌌",
    "hint": "Nuage géant de gaz interstellaire où naissent de nouvelles étoiles.",
    "example": "Le télescope spatial photographie une magnifique nébuleuse.",
    "color": "#ede9fe"
  },
  {
    "id": "constellation",
    "word": "constellation",
    "level": 4,
    "category": "nature",
    "emoji": "✨",
    "hint": "Dessin imaginaire tracé par un groupe d'étoiles dans la nuit.",
    "example": "La Grande Ourse est une constellation facile à repérer.",
    "color": "#ede9fe"
  },
  {
    "id": "clair_de_lune",
    "word": "clair de lune",
    "level": 4,
    "category": "nature",
    "emoji": "🌕",
    "hint": "Lumière douce et argentée qui éclaire les paysages nocturnes.",
    "example": "Nous marchons paisiblement au clair de lune.",
    "color": "#ede9fe"
  },
  {
    "id": "environnement",
    "word": "environnement",
    "level": 5,
    "category": "nature",
    "emoji": "🌱",
    "hint": "La nature fragile et précieuse que chaque enfant doit protéger.",
    "example": "Prenons soin de notre environnement tous les jours.",
    "color": "#dcfce7"
  },
  {
    "id": "ecosysteme",
    "word": "écosystème",
    "level": 5,
    "category": "nature",
    "emoji": "🌿",
    "hint": "Équilibre vivant et harmonieux entre les êtres vivants et leur milieu.",
    "example": "La forêt forme un écosystème remarquable.",
    "color": "#dcfce7"
  },
  {
    "id": "biodiversite",
    "word": "biodiversité",
    "level": 5,
    "category": "nature",
    "emoji": "🦋",
    "hint": "L'immense et merveilleuse variété de toutes les espèces vivantes.",
    "example": "La sauvegarde de la biodiversité est vitale pour la Terre.",
    "color": "#dcfce7"
  },
  {
    "id": "photosynthese",
    "word": "photosynthèse",
    "level": 5,
    "category": "nature",
    "emoji": "🍃",
    "hint": "Procédé magique grâce auquel les feuilles fabriquent de l'oxygène pur.",
    "example": "Grâce à la photosynthèse, les forêts purifient l'air.",
    "color": "#dcfce7"
  },
  {
    "id": "aurore_boreale",
    "word": "aurore boréale",
    "level": 5,
    "category": "nature",
    "emoji": "🌌",
    "hint": "Féerie de voiles lumineux verts et violets dansant dans le ciel du Nord.",
    "example": "L'aurore boréale illumine le ciel de Laponie.",
    "color": "#cffafe"
  },
  {
    "id": "meteorologue",
    "word": "météorologue",
    "level": 5,
    "category": "nature",
    "emoji": "🌦️",
    "hint": "Spécialiste scientifique qui étudie et prévoit la météo de demain.",
    "example": "Le météorologue annonce un grand beau temps pour le week-end.",
    "color": "#e0f2fe"
  },
  {
    "id": "nenuphar_geant",
    "word": "nénuphar géant",
    "level": 5,
    "category": "nature",
    "emoji": "🪷",
    "hint": "Plante aquatique d'Amazonie dont la feuille peut supporter un enfant.",
    "example": "Le nénuphar géant flotte sur l'eau du fleuve.",
    "color": "#dcfce7"
  },
  {
    "id": "chlorophylle",
    "word": "chlorophylle",
    "level": 5,
    "category": "nature",
    "emoji": "🌱",
    "hint": "Pigment vert présent dans les feuilles des plantes qui capte la lumière.",
    "example": "La chlorophylle donne sa belle couleur verte aux feuilles.",
    "color": "#dcfce7"
  },
  {
    "id": "stalagmitique",
    "word": "stalagmitique",
    "level": 5,
    "category": "nature",
    "emoji": "🏛️",
    "hint": "Relatif aux concrétions calcaires montant du sol d'une caverne.",
    "example": "La forêt stalagmitique est un trésor géologique.",
    "color": "#e2e8f0"
  },
  {
    "id": "foudre",
    "word": "foudre",
    "level": 5,
    "category": "nature",
    "emoji": "⚡",
    "hint": "Décharge électrique surpuissante éclatant entre l'orage et la Terre.",
    "example": "La foudre tombe sur le paratonnerre.",
    "color": "#fef9c3"
  },
  {
    "id": "crepusculaire",
    "word": "crépusculaire",
    "level": 5,
    "category": "nature",
    "emoji": "🌇",
    "hint": "Qui se produit à la tombée de la nuit lorsque le ciel s'assombrit.",
    "example": "Les chauves-souris entament leur vol crépusculaire.",
    "color": "#ede9fe"
  },
  {
    "id": "lithosphere",
    "word": "lithosphère",
    "level": 5,
    "category": "nature",
    "emoji": "🌍",
    "hint": "L'enveloppe terrestre rocheuse et solide sur laquelle nous vivons.",
    "example": "La lithosphère est découpée en grandes plaques tectoniques.",
    "color": "#fed7aa"
  },
  {
    "id": "stratosphere",
    "word": "stratosphère",
    "level": 5,
    "category": "nature",
    "emoji": "✈️",
    "hint": "Couche haute de l'atmosphère terrestre où la météo reste sereine.",
    "example": "Les grands avions voyagent dans la basse stratosphère.",
    "color": "#e0e7ff"
  },
  {
    "id": "paleontologie",
    "word": "paléontologie",
    "level": 5,
    "category": "nature",
    "emoji": "🦖",
    "hint": "Science passionnante consacrée à l'étude des fossiles anciens.",
    "example": "Le chercheur en paléontologie découvre un crâne de dinosaure.",
    "color": "#fed7aa"
  },
  {
    "id": "hydrosphere",
    "word": "hydrosphère",
    "level": 5,
    "category": "nature",
    "emoji": "💧",
    "hint": "L'ensemble de toutes les eaux liquides, solides et gazeuses de la Terre.",
    "example": "L'hydrosphère couvre la majeure partie du globe.",
    "color": "#cffafe"
  },
  {
    "id": "cristallisation",
    "word": "cristallisation",
    "level": 5,
    "category": "nature",
    "emoji": "❄️",
    "hint": "Transformation magique de l'eau en flocons de neige géométriques.",
    "example": "La cristallisation crée de minuscules dentelles de givre.",
    "color": "#f8fafc"
  },
  {
    "id": "velo",
    "word": "vélo",
    "level": 1,
    "category": "transports",
    "emoji": "🚲",
    "hint": "Deux-roues sans moteur sur lequel on pédale pour avancer vite.",
    "example": "Je roule sur la piste cyclable avec mon beau vélo.",
    "color": "#dbeafe"
  },
  {
    "id": "moto",
    "word": "moto",
    "level": 1,
    "category": "transports",
    "emoji": "🏍️",
    "hint": "Véhicule à deux roues motorisé sur lequel on roule avec un casque.",
    "example": "Le motard pilote prudemment sa moto sur la route.",
    "color": "#fee2e2"
  },
  {
    "id": "auto",
    "word": "auto",
    "level": 1,
    "category": "transports",
    "emoji": "🚗",
    "hint": "Voiture à quatre roues pour voyager confortablement en famille.",
    "example": "Toute la famille monte dans l'auto pour partir en vacances.",
    "color": "#dbeafe"
  },
  {
    "id": "car",
    "word": "car",
    "level": 1,
    "category": "transports",
    "emoji": "🚍",
    "hint": "Grand autocar qui transporte tous les élèves à l'école le matin.",
    "example": "Tous les écoliers montent dans le car scolaire.",
    "color": "#ffedd5"
  },
  {
    "id": "rame",
    "word": "rame",
    "level": 1,
    "category": "transports",
    "emoji": "🛶",
    "hint": "Long morceau de bois plat pour faire avancer une barque sur l'eau.",
    "example": "On plonge la rame dans l'eau pour faire avancer le canot.",
    "color": "#fed7aa"
  },
  {
    "id": "rail",
    "word": "rail",
    "level": 1,
    "category": "transports",
    "emoji": "🛤️",
    "hint": "Barre d'acier solide sur laquelle glissent les roues du train.",
    "example": "Le train file à vive allure sur ses deux rails.",
    "color": "#e2e8f0"
  },
  {
    "id": "char",
    "word": "char",
    "level": 1,
    "category": "transports",
    "emoji": "🏛️",
    "hint": "Véhicule fleuri et décoré qui défile lors des fêtes et carnavals.",
    "example": "Le char du carnaval défile au milieu des confettis.",
    "color": "#fef3c7"
  },
  {
    "id": "luge",
    "word": "luge",
    "level": 1,
    "category": "transports",
    "emoji": "🛷",
    "hint": "Petit traîneau qui glisse à toute vitesse sur la neige fraîche.",
    "example": "On dévale la pente enneigée assis sur la luge en bois.",
    "color": "#fee2e2"
  },
  {
    "id": "roue",
    "word": "roue",
    "level": 1,
    "category": "transports",
    "emoji": "🛞",
    "hint": "Pièce ronde qui tourne sur l'essieu pour faire rouler le véhicule.",
    "example": "La roue tourne vite sur le chemin de terre.",
    "color": "#cbd5e1"
  },
  {
    "id": "fusee",
    "word": "fusée",
    "level": 1,
    "category": "transports",
    "emoji": "🚀",
    "hint": "Grand engin propulsé par de puissants réacteurs pour aller dans l'espace.",
    "example": "La fusée blanche s'envole tout droit vers les étoiles.",
    "color": "#fee2e2"
  },
  {
    "id": "voile",
    "word": "voile",
    "level": 1,
    "category": "transports",
    "emoji": "⛵",
    "hint": "Grande toile blanche gonflée par le vent pour faire avancer le bateau.",
    "example": "Le vent souffle fort dans la grande voile blanche.",
    "color": "#dbeafe"
  },
  {
    "id": "navire",
    "word": "navire",
    "level": 1,
    "category": "transports",
    "emoji": "🚢",
    "hint": "Très grand bateau qui traverse les océans vers des pays lointains.",
    "example": "Le grand navire quitte le port pour traverser la mer.",
    "color": "#cffafe"
  },
  {
    "id": "barque",
    "word": "barque",
    "level": 1,
    "category": "transports",
    "emoji": "🛶",
    "hint": "Petite embarcation légère en bois pour se promener sur le lac.",
    "example": "La petite barque flotte doucement au bord de l'eau.",
    "color": "#fed7aa"
  },
  {
    "id": "pedalo",
    "word": "pédalo",
    "level": 1,
    "category": "transports",
    "emoji": "🛟",
    "hint": "Embarcation de vacances sur laquelle on pédale joyeusement sur l'eau.",
    "example": "On fait un tour de pédalo en famille sur le lac bleu.",
    "color": "#fef3c7"
  },
  {
    "id": "cabine",
    "word": "cabine",
    "level": 1,
    "category": "transports",
    "emoji": "🚠",
    "hint": "Grande cabine suspendue qui monte doucement vers les sommets.",
    "example": "La cabine du téléphérique survole les sapins enneigés.",
    "color": "#f1f5f9"
  },
  {
    "id": "route",
    "word": "route",
    "level": 1,
    "category": "transports",
    "emoji": "🛣️",
    "hint": "Voie goudronnée sur laquelle circulent les voitures et les camions.",
    "example": "La route traverse de beaux paysages de campagne.",
    "color": "#e2e8f0"
  },
  {
    "id": "ski",
    "word": "ski",
    "level": 3,
    "category": "transports",
    "emoji": "🎿",
    "hint": "Longues planches lisses attachées aux pieds pour glisser sur la neige.",
    "example": "Je chausse mes skis sur la piste enneigée.",
    "color": "#f8fafc"
  },
  {
    "id": "taxi",
    "word": "taxi",
    "level": 3,
    "category": "transports",
    "emoji": "🚕",
    "hint": "Voiture avec un voyant lumineux sur le toit pour transporter les voyageurs.",
    "example": "Le taxi nous dépose juste devant la gare.",
    "color": "#fef9c3"
  },
  {
    "id": "pont",
    "word": "pont",
    "level": 2,
    "category": "transports",
    "emoji": "🌉",
    "hint": "Ouvrage solide permettant aux voitures et piétons de franchir un obstacle.",
    "example": "Le train franchit le grand pont au-dessus du fleuve.",
    "color": "#e2e8f0"
  },
  {
    "id": "port",
    "word": "port",
    "level": 2,
    "category": "transports",
    "emoji": "⚓",
    "hint": "Bassin abrité où les bateaux s'amarrent le long des quais.",
    "example": "Les voiliers sont bien rangés dans le port.",
    "color": "#cffafe"
  },
  {
    "id": "quai",
    "word": "quai",
    "level": 2,
    "category": "transports",
    "emoji": "🚉",
    "hint": "Allée surélevée où les passagers attendent l'arrivée de leur train.",
    "example": "J'attends sur le quai numéro deux.",
    "color": "#f1f5f9"
  },
  {
    "id": "cale",
    "word": "cale",
    "level": 2,
    "category": "transports",
    "emoji": "🚢",
    "hint": "Le fond spacieux d'un navire où l'on charge les marchandises.",
    "example": "Les matelots descendent les caisses dans la cale.",
    "color": "#fed7aa"
  },
  {
    "id": "avion",
    "word": "avion",
    "level": 2,
    "category": "transports",
    "emoji": "✈️",
    "hint": "Grand oiseau de métal doté de deux ailes pour voler à travers les nuages.",
    "example": "L'avion vole très haut dans le ciel bleu.",
    "color": "#e0e7ff"
  },
  {
    "id": "train",
    "word": "train",
    "level": 2,
    "category": "transports",
    "emoji": "🚆",
    "hint": "Long convoi de wagons tracté par une locomotive sur les rails.",
    "example": "Tchou tchou, le train entre majestueusement en gare.",
    "color": "#e2e8f0"
  },
  {
    "id": "metro",
    "word": "métro",
    "level": 2,
    "category": "transports",
    "emoji": "🚇",
    "hint": "Train souterrain rapide qui dessert toutes les stations de la ville.",
    "example": "Nous prenons le métro pour aller au musée.",
    "color": "#e0e7ff"
  },
  {
    "id": "quad",
    "word": "quad",
    "level": 2,
    "category": "transports",
    "emoji": "🛞",
    "hint": "Petit engin tout-terrain à quatre grosses roues crantées.",
    "example": "Le quad franchit facilement les chemins boueux.",
    "color": "#fed7aa"
  },
  {
    "id": "jeep",
    "word": "jeep",
    "level": 2,
    "category": "transports",
    "emoji": "🚙",
    "hint": "Robuste voiture tout-terrain idéale pour les safaris.",
    "example": "La jeep avance au milieu de la savane.",
    "color": "#dcfce7"
  },
  {
    "id": "canot",
    "word": "canot",
    "level": 2,
    "category": "transports",
    "emoji": "🛶",
    "hint": "Petite embarcation légère manœuvrée avec des pagaies.",
    "example": "Le canot glisse silencieusement sur le lac.",
    "color": "#cffafe"
  },
  {
    "id": "kayak",
    "word": "kayak",
    "level": 2,
    "category": "transports",
    "emoji": "🛶",
    "hint": "Petite embarcation sportive fermée menée avec une double pagaie.",
    "example": "Il descend les rapides agiles en kayak.",
    "color": "#fed7aa"
  },
  {
    "id": "canoe",
    "word": "canoë",
    "level": 2,
    "category": "transports",
    "emoji": "🛶",
    "hint": "Embarcation ouverte manœuvrée avec une pagaie simple.",
    "example": "Nous pagayons ensemble dans le canoë.",
    "color": "#fed7aa"
  },
  {
    "id": "cargo",
    "word": "cargo",
    "level": 2,
    "category": "transports",
    "emoji": "🚢",
    "hint": "Grand navire de commerce transportant des milliers de conteneurs.",
    "example": "Le cargo traverse les mers lointaines.",
    "color": "#dbeafe"
  },
  {
    "id": "ferry",
    "word": "ferry",
    "level": 2,
    "category": "transports",
    "emoji": "⛴️",
    "hint": "Gros navire assurant le transport régulier des voyageurs et de leurs voitures.",
    "example": "Le ferry accoste au port de l'île.",
    "color": "#cffafe"
  },
  {
    "id": "yacht",
    "word": "yacht",
    "level": 2,
    "category": "transports",
    "emoji": "🛥️",
    "hint": "Bateau de plaisance luxueux et très rapide.",
    "example": "Le yacht jette l'ancre dans la baie abritée.",
    "color": "#f8fafc"
  },
  {
    "id": "wagon",
    "word": "wagon",
    "level": 2,
    "category": "transports",
    "emoji": "🚃",
    "hint": "Compartiment roulant du train où s'assoient confortablement les passagers.",
    "example": "Nous montons dans le wagon numéro cinq.",
    "color": "#e2e8f0"
  },
  {
    "id": "patins",
    "word": "patins",
    "level": 2,
    "category": "transports",
    "emoji": "🛼",
    "hint": "Chaussures munies de roulettes ou d'une lame pour glisser sur la glace.",
    "example": "Je fais des pirouettes avec mes patins.",
    "color": "#fce7f3"
  },
  {
    "id": "skate",
    "word": "skate",
    "level": 2,
    "category": "transports",
    "emoji": "🛹",
    "hint": "Planche courte montée sur quatre roulettes pour faire des figures.",
    "example": "Il s'entraîne au skatepark sur son skate.",
    "color": "#fef3c7"
  },
  {
    "id": "radeau",
    "word": "radeau",
    "level": 2,
    "category": "transports",
    "emoji": "🪵",
    "hint": "Plateforme flottante faite de troncs de bois attachés ensemble.",
    "example": "Le radeau descend doucement la rivière.",
    "color": "#fed7aa"
  },
  {
    "id": "voilier",
    "word": "voilier",
    "level": 2,
    "category": "transports",
    "emoji": "⛵",
    "hint": "Bateau élégant qui utilise la force du vent dans ses toiles blanches.",
    "example": "Le voilier prend le vent du large.",
    "color": "#dbeafe"
  },
  {
    "id": "navette",
    "word": "navette",
    "level": 2,
    "category": "transports",
    "emoji": "🚐",
    "hint": "Petit véhicule effectuant sans arrêt des allers-retours réguliers.",
    "example": "La navette nous emmène à l'aéroport.",
    "color": "#fef3c7"
  },
  {
    "id": "mobylette",
    "word": "mobylette",
    "level": 2,
    "category": "transports",
    "emoji": "🛵",
    "hint": "Petit deux-roues motorisé équipé de pédales.",
    "example": "La mobylette pétarade doucement dans la ruelle.",
    "color": "#e0e7ff"
  },
  {
    "id": "remorque",
    "word": "remorque",
    "level": 2,
    "category": "transports",
    "emoji": "🛒",
    "hint": "Chariot attelé à l'arrière d'un véhicule pour transporter du matériel.",
    "example": "On accroche la remorque à la voiture.",
    "color": "#e2e8f0"
  },
  {
    "id": "caleche",
    "word": "calèche",
    "level": 2,
    "category": "transports",
    "emoji": "🐴",
    "hint": "Voiture élégante à quatre roues tirée par des chevaux.",
    "example": "La calèche avance au pas dans le parc du château.",
    "color": "#fee2e2"
  },
  {
    "id": "tracteur",
    "word": "tracteur",
    "level": 2,
    "category": "transports",
    "emoji": "🚜",
    "hint": "Gros véhicule agricole à énormes roues qui laboure les champs.",
    "example": "Le tracteur vert tire la charrue dans le champ.",
    "color": "#dcfce7"
  },
  {
    "id": "voiture",
    "word": "voiture",
    "level": 3,
    "category": "transports",
    "emoji": "🚗",
    "hint": "Véhicule à quatre roues et moteur pour voyager en famille.",
    "example": "On s'attache bien dans la voiture avant de partir.",
    "color": "#fee2e2"
  },
  {
    "id": "camion",
    "word": "camion",
    "level": 3,
    "category": "transports",
    "emoji": "🚛",
    "hint": "Grand véhicule très puissant qui transporte de lourdes marchandises.",
    "example": "Le camion livre les cartons au supermarché.",
    "color": "#fef3c7"
  },
  {
    "id": "bateau",
    "word": "bateau",
    "level": 3,
    "category": "transports",
    "emoji": "⛵",
    "hint": "Embarcation qui flotte sur l'eau grâce à sa coque étanche.",
    "example": "Le bateau navigue paisiblement sur les flots.",
    "color": "#cffafe"
  },
  {
    "id": "chalutier",
    "word": "chalutier",
    "level": 3,
    "category": "transports",
    "emoji": "🎣",
    "hint": "Bateau de pêche équipé de grands filets pour ramener du poisson.",
    "example": "Le chalutier rentre au port au petit matin.",
    "color": "#dbeafe"
  },
  {
    "id": "peniche",
    "word": "péniche",
    "level": 3,
    "category": "transports",
    "emoji": "🚢",
    "hint": "Long bateau à fond plat qui navigue sur les canaux et les rivières.",
    "example": "La péniche franchit l'écluse doucement.",
    "color": "#fed7aa"
  },
  {
    "id": "gondole",
    "word": "gondole",
    "level": 3,
    "category": "transports",
    "emoji": "🛶",
    "hint": "Embarcation noire traditionnelle et poétique des canaux de Venise.",
    "example": "Le gondolier manœuvre sa gondole avec son long aviron.",
    "color": "#f1f5f9"
  },
  {
    "id": "side_car",
    "word": "side-car",
    "level": 3,
    "category": "transports",
    "emoji": "🏍️",
    "hint": "Moto équipée d'une nacelle latérale pour accueillir un passager.",
    "example": "Le copilote est bien assis dans le side-car.",
    "color": "#fee2e2"
  },
  {
    "id": "tandem",
    "word": "tandem",
    "level": 3,
    "category": "transports",
    "emoji": "🚲",
    "hint": "Bicyclette à deux selles et deux paires de pédales pour rouler à deux.",
    "example": "Nous pédalons en harmonie sur notre tandem.",
    "color": "#dbeafe"
  },
  {
    "id": "draisienne",
    "word": "draisienne",
    "level": 3,
    "category": "transports",
    "emoji": "🚲",
    "hint": "Petit vélo sans pédales parfait pour que les tout-petits apprennent l'équilibre.",
    "example": "Le petit garçon roule vite sur sa draisienne.",
    "color": "#fce7f3"
  },
  {
    "id": "tricycle",
    "word": "tricycle",
    "level": 3,
    "category": "transports",
    "emoji": "🛞",
    "hint": "Vélo stable à trois roues idéal pour les jeunes enfants.",
    "example": "Elle fait le tour du jardin sur son tricycle.",
    "color": "#fee2e2"
  },
  {
    "id": "caravane",
    "word": "caravane",
    "level": 3,
    "category": "transports",
    "emoji": "🚐",
    "hint": "Maison roulante remorquée par une voiture pour faire du camping.",
    "example": "Nous installons la caravane sous les pins.",
    "color": "#fef3c7"
  },
  {
    "id": "chariot",
    "word": "chariot",
    "level": 3,
    "category": "transports",
    "emoji": "🛒",
    "hint": "Véhicule à quatre roues servant à déplacer de lourdes charges.",
    "example": "On remplit le chariot de provisions.",
    "color": "#e2e8f0"
  },
  {
    "id": "funiculaire",
    "word": "funiculaire",
    "level": 3,
    "category": "transports",
    "emoji": "🚠",
    "hint": "Wagon tracté par un câble pour gravir une pente très raide.",
    "example": "Le funiculaire monte jusqu'au sommet de la colline.",
    "color": "#fee2e2"
  },
  {
    "id": "deltaplane",
    "word": "deltaplane",
    "level": 3,
    "category": "transports",
    "emoji": "🪂",
    "hint": "Aile triangulaire légère permettant de planer dans les airs comme un oiseau.",
    "example": "Le pilote s'élance de la falaise en deltaplane.",
    "color": "#cffafe"
  },
  {
    "id": "monoplace",
    "word": "monoplace",
    "level": 3,
    "category": "transports",
    "emoji": "🏎️",
    "hint": "Voiture de course rapide dotée d'un seul siège pour le pilote.",
    "example": "La monoplace de Formule 1 franchit la ligne d'arrivée.",
    "color": "#fee2e2"
  },
  {
    "id": "trottinette",
    "word": "trottinette",
    "level": 3,
    "category": "transports",
    "emoji": "🛴",
    "hint": "Planche à deux roues et guidon sur laquelle on pousse du pied.",
    "example": "Je file à toute allure sur ma trottinette.",
    "color": "#fee2e2"
  },
  {
    "id": "sous_marin",
    "word": "sous-marin",
    "level": 3,
    "category": "transports",
    "emoji": "🤿",
    "hint": "Navire exceptionnel capable de plonger au plus profond des mers.",
    "example": "Le sous-marin explore les abysses océaniques.",
    "color": "#dbeafe"
  },
  {
    "id": "fourgon",
    "word": "fourgon",
    "level": 3,
    "category": "transports",
    "emoji": "🚐",
    "hint": "Véhicule utilitaire fermé pour transporter des colis.",
    "example": "Le livreur descend les paquets de son fourgon.",
    "color": "#f1f5f9"
  },
  {
    "id": "ambulance",
    "word": "ambulance",
    "level": 3,
    "category": "transports",
    "emoji": "🚑",
    "hint": "Véhicule d'urgence blanche avec un gyrophare bleu pour secourir les malades.",
    "example": "L'ambulance file avec sa sirène deux-tons.",
    "color": "#f8fafc"
  },
  {
    "id": "pompiers",
    "word": "pompiers",
    "level": 3,
    "category": "transports",
    "emoji": "🚒",
    "hint": "Grand camion rouge équipé d'une échelle télescopique et de lances à eau.",
    "example": "Le camion des pompiers part éteindre un feu.",
    "color": "#fee2e2"
  },
  {
    "id": "motoneige",
    "word": "motoneige",
    "level": 3,
    "category": "transports",
    "emoji": "❄️",
    "hint": "Véhicule motorisé à chenille pour filer sur la neige épaisse.",
    "example": "La motoneige trace sa piste dans le grand nord.",
    "color": "#f8fafc"
  },
  {
    "id": "paquebot",
    "word": "paquebot",
    "level": 3,
    "category": "transports",
    "emoji": "🛳️",
    "hint": "Immense ville flottante de plusieurs étages naviguant sur les océans.",
    "example": "Le gigantesque paquebot quitte le port.",
    "color": "#f8fafc"
  },
  {
    "id": "parachute",
    "word": "parachute",
    "level": 3,
    "category": "transports",
    "emoji": "🪂",
    "hint": "Grande coupole de tissu qui freine la chute dans les airs.",
    "example": "Le parachutiste atterrit en douceur dans le champ.",
    "color": "#cffafe"
  },
  {
    "id": "helicoptere",
    "word": "hélicoptère",
    "level": 4,
    "category": "transports",
    "emoji": "🚁",
    "hint": "Engin volant spectaculaire grâce aux pales tournantes de son rotor.",
    "example": "L'hélicoptère de secours se pose sur l'hôpital.",
    "color": "#fee2e2"
  },
  {
    "id": "locomotive",
    "word": "locomotive",
    "level": 4,
    "category": "transports",
    "emoji": "🚂",
    "hint": "Le moteur puissant en tête de train qui tracte tous les wagons.",
    "example": "La locomotive à vapeur siffle dans la vallée.",
    "color": "#e2e8f0"
  },
  {
    "id": "montgolfiere",
    "word": "montgolfière",
    "level": 4,
    "category": "transports",
    "emoji": "🎈",
    "hint": "Immense ballon d'air chaud sous lequel est suspendue une nacelle d'osier.",
    "example": "La montgolfière s'élève silencieusement dans le ciel du matin.",
    "color": "#ffedd5"
  },
  {
    "id": "telepherique",
    "word": "téléphérique",
    "level": 4,
    "category": "transports",
    "emoji": "🚡",
    "hint": "Nacelle suspendue à un très long câble d'acier reliant deux montagnes.",
    "example": "Le téléphérique nous conduit au sommet enneigé.",
    "color": "#e0e7ff"
  },
  {
    "id": "aeroglisseur",
    "word": "aéroglisseur",
    "level": 4,
    "category": "transports",
    "emoji": "🚤",
    "hint": "Véhicule sur coussin d'air capable de glisser sur l'eau comme sur la terre.",
    "example": "L'aéroglisseur traverse la baie à pleine vitesse.",
    "color": "#cffafe"
  },
  {
    "id": "catamaran",
    "word": "catamaran",
    "level": 4,
    "category": "transports",
    "emoji": "⛵",
    "hint": "Bateau de course ou de croisière très stable équipé de deux coques parallèles.",
    "example": "Le catamaran glisse sur l'eau sans gîter.",
    "color": "#dbeafe"
  },
  {
    "id": "brise_glace",
    "word": "brise-glace",
    "level": 4,
    "category": "transports",
    "emoji": "🚢",
    "hint": "Navire renforcé d'une proue spéciale pour fendre la banquise polaire.",
    "example": "Le brise-glace ouvre une voie dans les glaces.",
    "color": "#cffafe"
  },
  {
    "id": "skateboard",
    "word": "skateboard",
    "level": 4,
    "category": "transports",
    "emoji": "🛹",
    "hint": "Planche à roulettes sur laquelle on réalise d'acrobatiques sauts.",
    "example": "Il maîtrise parfaitement son skateboard.",
    "color": "#fef3c7"
  },
  {
    "id": "dirigeable",
    "word": "dirigeable",
    "level": 4,
    "category": "transports",
    "emoji": "🎈",
    "hint": "Aéronef allongé plus léger que l'air gonflé d'un gaz protecteur.",
    "example": "Le grand dirigeable plane au-dessus du stade.",
    "color": "#f1f5f9"
  },
  {
    "id": "chasse_neige",
    "word": "chasse-neige",
    "level": 4,
    "category": "transports",
    "emoji": "🚜",
    "hint": "Camion équipé d'une grande lame frontale pour dégager la route enneigée.",
    "example": "Le chasse-neige déblaie la route du col.",
    "color": "#fef9c3"
  },
  {
    "id": "semi_remorque",
    "word": "semi-remorque",
    "level": 4,
    "category": "transports",
    "emoji": "🚛",
    "hint": "Énorme camion de transport routier composé d'un tracteur et d'une remorque.",
    "example": "Le semi-remorque roule sur l'autoroute.",
    "color": "#e2e8f0"
  },
  {
    "id": "bateau_mouche",
    "word": "bateau-mouche",
    "level": 4,
    "category": "transports",
    "emoji": "🛥️",
    "hint": "Bateau panoramique vitré permettant de visiter Paris sur la Seine.",
    "example": "Nous admirons la Tour Eiffel depuis le bateau-mouche.",
    "color": "#cffafe"
  },
  {
    "id": "bicyclette",
    "word": "bicyclette",
    "level": 4,
    "category": "transports",
    "emoji": "🚲",
    "hint": "Le nom élégant et traditionnel de notre cher vélo à pédales.",
    "example": "Une promenade printanière à bicyclette.",
    "color": "#dbeafe"
  },
  {
    "id": "navette_spatiale",
    "word": "navette spatiale",
    "level": 4,
    "category": "transports",
    "emoji": "🚀",
    "hint": "Vaisseau réutilisable capable de voyager dans l'orbite de la Terre.",
    "example": "La navette spatiale revient de sa mission.",
    "color": "#f8fafc"
  },
  {
    "id": "hydroglisseur",
    "word": "hydroglisseur",
    "level": 4,
    "category": "transports",
    "emoji": "🚤",
    "hint": "Bateau à fond plat propulsé par une gigantesque hélice aérienne.",
    "example": "L'hydroglisseur survole les marais de Floride.",
    "color": "#e0f2fe"
  },
  {
    "id": "trottinette_electrique",
    "word": "trottinette électrique",
    "level": 4,
    "category": "transports",
    "emoji": "🛴",
    "hint": "Engin urbain moderne équipé d'une batterie et d'un petit moteur silencieux.",
    "example": "Il circule en trottinette électrique avec prudence.",
    "color": "#fee2e2"
  },
  {
    "id": "camion_citerne",
    "word": "camion-citerne",
    "level": 4,
    "category": "transports",
    "emoji": "🚛",
    "hint": "Poids lourd doté d'une grande cuve métallique pour acheminer les liquides.",
    "example": "Le camion-citerne approvisionne la station.",
    "color": "#e2e8f0"
  },
  {
    "id": "diligence",
    "word": "diligence",
    "level": 4,
    "category": "transports",
    "emoji": "🐴",
    "hint": "Grande voiture attelée d'autrefois qui transportait courriers et voyageurs.",
    "example": "La diligence traverse les plaines de l'Ouest.",
    "color": "#fed7aa"
  },
  {
    "id": "porte_conteneurs",
    "word": "porte-conteneurs",
    "level": 4,
    "category": "transports",
    "emoji": "🚢",
    "hint": "Géant des mers chargé de milliers de boîtes métalliques colorées.",
    "example": "Le porte-conteneurs entre dans le grand port marchand.",
    "color": "#dbeafe"
  },
  {
    "id": "side_car_cross",
    "word": "side-car cross",
    "level": 4,
    "category": "transports",
    "emoji": "🏍️",
    "hint": "Course spectaculaire de motos à trois roues sur piste tout-terrain.",
    "example": "Les pilotes de side-car négocient le virage serré.",
    "color": "#fed7aa"
  },
  {
    "id": "astronaute",
    "word": "astronaute",
    "level": 5,
    "category": "transports",
    "emoji": "👨‍🚀",
    "hint": "Explorateur courageux qui voyage dans l'espace en combinaison pressurisée.",
    "example": "L'astronaute flotte en apesanteur dans la station spatiale.",
    "color": "#e0e7ff"
  },
  {
    "id": "porte_avions",
    "word": "porte-avions",
    "level": 5,
    "category": "transports",
    "emoji": "🚢",
    "hint": "Navire militaire géant doté d'une véritable piste de décollage en pleine mer.",
    "example": "L'avion de chasse apponte sur le porte-avions.",
    "color": "#e2e8f0"
  },
  {
    "id": "submersible",
    "word": "submersible",
    "level": 5,
    "category": "transports",
    "emoji": "🤿",
    "hint": "Petit engin sous-marin d'exploration scientifique pour les très grandes profondeurs.",
    "example": "Le submersible explore la fosse marine abyssale.",
    "color": "#dbeafe"
  },
  {
    "id": "camping_car",
    "word": "camping-car",
    "level": 5,
    "category": "transports",
    "emoji": "🚐",
    "hint": "Véhicule aménagé avec lits, cuisine et salon pour voyager en toute liberté.",
    "example": "Nous partons en vacances à bord de notre camping-car.",
    "color": "#fef3c7"
  },
  {
    "id": "aeronef",
    "word": "aéronef",
    "level": 5,
    "category": "transports",
    "emoji": "✈️",
    "hint": "Terme désignant tout appareil capable de se soutenir et circuler dans les airs.",
    "example": "Cet aéronef futuriste fonctionne à l'énergie solaire.",
    "color": "#e0e7ff"
  },
  {
    "id": "fusee_lunaire",
    "word": "fusée lunaire",
    "level": 5,
    "category": "transports",
    "emoji": "🚀",
    "hint": "Puissant lanceur spatial conçu pour acheminer des humains jusqu'à la Lune.",
    "example": "La fusée lunaire s'élance vers les étoiles.",
    "color": "#f8fafc"
  },
  {
    "id": "vaisseau_spatial",
    "word": "vaisseau spatial",
    "level": 5,
    "category": "transports",
    "emoji": "🛸",
    "hint": "Engin imaginaire ou futuriste explorant les galaxies lointaines.",
    "example": "Le vaisseau spatial active sa propulsion interstellaire.",
    "color": "#ede9fe"
  },
  {
    "id": "telepherique_urbain",
    "word": "téléphérique urbain",
    "level": 5,
    "category": "transports",
    "emoji": "🚡",
    "hint": "Transport par câble suspendu moderne survolant le trafic des grandes villes.",
    "example": "Le téléphérique urbain offre une vue imprenable sur les toits.",
    "color": "#e0e7ff"
  },
  {
    "id": "navette_autonome",
    "word": "navette autonome",
    "level": 5,
    "category": "transports",
    "emoji": "🤖",
    "hint": "Petit minibus électrique circulant tout seul sans chauffeur grâce à ses capteurs.",
    "example": "La navette autonome dépose les passagers à l'hôpital.",
    "color": "#cffafe"
  },
  {
    "id": "hydroptere",
    "word": "hydroptère",
    "level": 5,
    "category": "transports",
    "emoji": "⛵",
    "hint": "Bateau révolutionnaire doté d'ailes sous-marines qui le font voler au-dessus de l'eau.",
    "example": "L'hydroptère bat le record de vitesse à la voile.",
    "color": "#dbeafe"
  },
  {
    "id": "quadricycle",
    "word": "quadricycle",
    "level": 5,
    "category": "transports",
    "emoji": "🏎️",
    "hint": "Véhicule léger à quatre roues motorisé idéal pour la ville.",
    "example": "Ce petit quadricycle électrique ne pollue pas.",
    "color": "#dcfce7"
  },
  {
    "id": "char_a_voile",
    "word": "char à voile",
    "level": 5,
    "category": "transports",
    "emoji": "⛵",
    "hint": "Engin à trois roues gréé d'une voile qui glisse à toute allure sur le sable mouillé.",
    "example": "Le char à voile file sur l'immense plage à marée basse.",
    "color": "#fef3c7"
  },
  {
    "id": "parapentiste",
    "word": "parapentiste",
    "level": 5,
    "category": "transports",
    "emoji": "🪂",
    "hint": "Pilote qui s'élance du haut d'un versant accroché sous une grande voile souple.",
    "example": "Le parapentiste s'élève dans les courants d'air chaud.",
    "color": "#cffafe"
  },
  {
    "id": "spationaute",
    "word": "spationaute",
    "level": 5,
    "category": "transports",
    "emoji": "🚀",
    "hint": "Nom donné aux astronautes européens explorant le cosmos.",
    "example": "Le spationaute effectue des expériences scientifiques à bord.",
    "color": "#e0e7ff"
  },
  {
    "id": "bicyclette_cargo",
    "word": "bicyclette cargo",
    "level": 5,
    "category": "transports",
    "emoji": "🚲",
    "hint": "Vélo rallongé doté d'une grande caisse avant pour transporter deux enfants.",
    "example": "Maman conduit les enfants à l'école en vélo cargo.",
    "color": "#dbeafe"
  },
  {
    "id": "motoneigiste",
    "word": "motoneigiste",
    "level": 5,
    "category": "transports",
    "emoji": "❄️",
    "hint": "Conducteur chevronné guidant son attelage à chenilles sur les neiges du Grand Nord.",
    "example": "Le motoneigiste trace sa piste à travers la toundra blanche.",
    "color": "#f8fafc"
  },
  {
    "id": "locotracteur",
    "word": "locotracteur",
    "level": 5,
    "category": "transports",
    "emoji": "🚜",
    "hint": "Petit engin ferroviaire puissant servant à manœuvrer les wagons dans la gare de triage.",
    "example": "Le locotracteur range les rames de wagons de fret.",
    "color": "#fef3c7"
  }
];
