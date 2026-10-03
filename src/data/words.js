// Banque de mots enrichie et organisée en 5 NIVEAUX DE DIFFICULTÉ PROGRESSIFS
// Conçue pour les 6-7 ans (CP) jusqu'aux défis pour CE1 / CE2

export const DIFFICULTY_LEVELS = [
  {
    id: 1,
    name: 'Facile',
    subtitle: 'Début CP',
    description: 'Mots courts (3-4 lettres), 0 piège, aide active',
    emoji: '🌱',
    color: 'from-emerald-400 to-green-500',
    textColor: 'text-emerald-700',
    badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    starsReward: 1,
    distractorCount: 0
  },
  {
    id: 2,
    name: 'Moyen',
    subtitle: 'CP courant',
    description: 'Mots de 4-6 lettres avec sons fréquents (ou, on, ch...)',
    emoji: '⭐',
    color: 'from-sky-400 to-blue-500',
    textColor: 'text-sky-700',
    badgeBg: 'bg-sky-100 text-sky-800 border-sky-300',
    starsReward: 2,
    distractorCount: 2
  },
  {
    id: 3,
    name: 'Difficile',
    subtitle: 'Fin CP / CE1',
    description: 'Mots de 6-8 lettres, doubles consonnes et lettres muettes',
    emoji: '🔥',
    color: 'from-amber-400 to-orange-500',
    textColor: 'text-amber-700',
    badgeBg: 'bg-amber-100 text-amber-900 border-amber-300',
    starsReward: 3,
    distractorCount: 4
  },
  {
    id: 4,
    name: 'Expert',
    subtitle: 'CE1 courant',
    description: 'Mots de 7-10 lettres, sons complexes (ouille, eau, ein...)',
    emoji: '💎',
    color: 'from-rose-400 to-red-500',
    textColor: 'text-rose-700',
    badgeBg: 'bg-rose-100 text-rose-900 border-rose-300',
    starsReward: 4,
    distractorCount: 6
  },
  {
    id: 5,
    name: 'Maître',
    subtitle: 'Grand Défi CE1/CE2',
    description: 'Mots longs, mode dictée audio (image masquée) et grand Scrabble',
    emoji: '👑',
    color: 'from-purple-500 to-indigo-600',
    textColor: 'text-purple-700',
    badgeBg: 'bg-purple-100 text-purple-900 border-purple-300',
    starsReward: 5,
    distractorCount: 8
  }
];

export const WORD_CATEGORIES = [
  { id: 'tous', label: 'Tous les mots', emoji: '🌟' },
  { id: 'animaux', label: 'Animaux', emoji: '🦁' },
  { id: 'aliments', label: 'Miam !', emoji: '🍎' },
  { id: 'objets', label: 'Maison & École', emoji: '✏️' },
  { id: 'nature', label: 'Nature', emoji: '🌳' },
  { id: 'transports', label: 'Véhicules', emoji: '🚀' },
];

export const WORDS = [
  // =========================================================================
  // NIVEAU 1 : FACILE (3 à 4 lettres régulières, sons simples) - Début CP
  // =========================================================================
  {
    id: 'lit',
    word: 'lit',
    level: 1,
    category: 'objets',
    emoji: '🛏️',
    hint: 'On y dort bien au chaud la nuit.',
    example: 'Je dors dans mon lit.',
    color: '#e0f2fe'
  },
  {
    id: 'bus',
    word: 'bus',
    level: 1,
    category: 'transports',
    emoji: '🚌',
    hint: 'Un grand véhicule pour aller à l\'école.',
    example: 'Le bus scolaire arrive.',
    color: '#fef3c7'
  },
  {
    id: 'chat',
    word: 'chat',
    level: 1,
    category: 'animaux',
    emoji: '🐱',
    hint: 'Il ronronne et adore chasser les souris.',
    example: 'Le chat boit son lait.',
    color: '#ffedd5'
  },
  {
    id: 'pain',
    word: 'pain',
    level: 1,
    category: 'aliments',
    emoji: '🥖',
    hint: 'Le boulanger le cuit dans son grand four.',
    example: 'Une bonne baguette de pain.',
    color: '#fef3c7'
  },
  {
    id: 'loup',
    word: 'loup',
    level: 1,
    category: 'animaux',
    emoji: '🐺',
    hint: 'Il hurle à la lune dans la forêt.',
    example: 'Le loup vit dans les bois.',
    color: '#e2e8f0'
  },
  {
    id: 'ours',
    word: 'ours',
    level: 1,
    category: 'animaux',
    emoji: '🐻',
    hint: 'Un grand animal poilu qui aime le miel.',
    example: 'L\'ours dort tout l\'hiver.',
    color: '#fed7aa'
  },
  {
    id: 'lait',
    word: 'lait',
    level: 1,
    category: 'aliments',
    emoji: '🥛',
    hint: 'Boisson blanche que donne la vache.',
    example: 'Un grand verre de lait frais.',
    color: '#f1f5f9'
  },
  {
    id: 'velo',
    word: 'vélo',
    level: 1,
    category: 'transports',
    emoji: '🚲',
    hint: 'On appuie sur les pédales pour avancer !',
    example: 'Je fais du vélo dans le parc.',
    color: '#dbeafe'
  },
  {
    id: 'lune',
    word: 'lune',
    level: 1,
    category: 'nature',
    emoji: '🌙',
    hint: 'Elle brille dans le ciel sombre la nuit.',
    example: 'La lune éclaire la nuit.',
    color: '#ede9fe'
  },
  {
    id: 'mer',
    word: 'mer',
    level: 1,
    category: 'nature',
    emoji: '🌊',
    hint: 'De l\'eau salée avec de grandes vagues.',
    example: 'On se baigne dans la mer.',
    color: '#cffafe'
  },
  {
    id: 'nez',
    word: 'nez',
    level: 1,
    category: 'objets',
    emoji: '👃',
    hint: 'Au milieu du visage pour sentir les odeurs.',
    example: 'J\'ai un petit nez.',
    color: '#fee2e2'
  },
  {
    id: 'lion',
    word: 'lion',
    level: 1,
    category: 'animaux',
    emoji: '🦁',
    hint: 'Le roi de la savane avec une crinière.',
    example: 'Le lion rugit très fort.',
    color: '#fef3c7'
  },
  {
    id: 'bras',
    word: 'bras',
    level: 1,
    category: 'objets',
    emoji: '💪',
    hint: 'Entre l\'épaule et la main.',
    example: 'Je plie mon bras.',
    color: '#ffedd5'
  },
  {
    id: 'sac',
    word: 'sac',
    level: 1,
    category: 'objets',
    emoji: '🎒',
    hint: 'On y range ses affaires d\'école.',
    example: 'Mon sac à dos est bleu.',
    color: '#e0e7ff'
  },
  {
    id: 'bol',
    word: 'bol',
    level: 1,
    category: 'objets',
    emoji: '🥣',
    hint: 'Pour manger ses céréales le matin.',
    example: 'Un bol de chocolat chaud.',
    color: '#fee2e2'
  },
  {
    id: 'jus',
    word: 'jus',
    level: 1,
    category: 'aliments',
    emoji: '🧃',
    hint: 'Boisson aux fruits avec une paille.',
    example: 'Un bon jus de pomme.',
    color: '#ffedd5'
  },

  // =========================================================================
  // NIVEAU 2 : MOYEN (4 à 6 lettres, sons fréquents ch, ou, on, oi) - CP courant
  // =========================================================================
  {
    id: 'pomme',
    word: 'pomme',
    level: 2,
    category: 'aliments',
    emoji: '🍎',
    hint: 'Un fruit croquant souvent rouge ou vert !',
    example: 'Je croque une belle pomme.',
    color: '#fee2e2'
  },
  {
    id: 'chien',
    word: 'chien',
    level: 2,
    category: 'animaux',
    emoji: '🐶',
    hint: 'Le meilleur ami qui aboie et remue la queue.',
    example: 'Le chien court après la balle.',
    color: '#fef3c7'
  },
  {
    id: 'livre',
    word: 'livre',
    level: 2,
    category: 'objets',
    emoji: '📖',
    hint: 'Rempli d\'histoires avec des pages à tourner.',
    example: 'Je lis un livre captivant.',
    color: '#ede9fe'
  },
  {
    id: 'fleur',
    word: 'fleur',
    level: 2,
    category: 'nature',
    emoji: '🌸',
    hint: 'Elle pousse au printemps et sent très bon.',
    example: 'Une jolie fleur dans le jardin.',
    color: '#fce7f3'
  },
  {
    id: 'arbre',
    word: 'arbre',
    level: 2,
    category: 'nature',
    emoji: '🌳',
    hint: 'Il a un tronc en bois et plein de feuilles vertes.',
    example: 'Les oiseaux chantent dans l\'arbre.',
    color: '#dcfce7'
  },
  {
    id: 'poire',
    word: 'poire',
    level: 2,
    category: 'aliments',
    emoji: '🍐',
    hint: 'Un fruit doux et juteux en forme de goutte.',
    example: 'Une poire bien sucrée.',
    color: '#ecfccb'
  },
  {
    id: 'lapin',
    word: 'lapin',
    level: 2,
    category: 'animaux',
    emoji: '🐰',
    hint: 'Il a de longues oreilles et adore les carottes.',
    example: 'Le petit lapin sautille dans l\'herbe.',
    color: '#f3e8ff'
  },
  {
    id: 'stylo',
    word: 'stylo',
    level: 2,
    category: 'objets',
    emoji: '🖊️',
    hint: 'Outil rempli d\'encre pour écrire sur le cahier.',
    example: 'J\'écris mon prénom avec mon stylo.',
    color: '#e0e7ff'
  },
  {
    id: 'table',
    word: 'table',
    level: 2,
    category: 'objets',
    emoji: '🪑',
    hint: 'Meuble avec quatre pieds pour poser son assiette.',
    example: 'Nous mangeons à table.',
    color: '#fef3c7'
  },
  {
    id: 'porte',
    word: 'porte',
    level: 2,
    category: 'objets',
    emoji: '🚪',
    hint: 'On l\'ouvre avec une poignée pour entrer.',
    example: 'Ferme la porte s\'il te plaît.',
    color: '#fed7aa'
  },
  {
    id: 'singe',
    word: 'singe',
    level: 2,
    category: 'animaux',
    emoji: '🐵',
    hint: 'Il saute de branche en branche et fait des grimaces.',
    example: 'Le singe mange une banane.',
    color: '#fef3c7'
  },
  {
    id: 'tigre',
    word: 'tigre',
    level: 2,
    category: 'animaux',
    emoji: '🐯',
    hint: 'Grand félin fauve avec des rayures noires.',
    example: 'Le tigre se cache dans la jungle.',
    color: '#ffedd5'
  },
  {
    id: 'nuage',
    word: 'nuage',
    level: 2,
    category: 'nature',
    emoji: '☁️',
    hint: 'Comme un gros coton blanc dans le ciel bleu.',
    example: 'Le nuage cache le soleil.',
    color: '#f1f5f9'
  },
  {
    id: 'glace',
    word: 'glace',
    level: 2,
    category: 'aliments',
    emoji: '🍦',
    hint: 'Froide et sucrée en cornet l\'été.',
    example: 'Une bonne glace à la fraise.',
    color: '#fce7f3'
  },
  {
    id: 'avion',
    word: 'avion',
    level: 2,
    category: 'transports',
    emoji: '✈️',
    hint: 'Il a deux grandes ailes pour voler dans le ciel.',
    example: 'L\'avion vole très haut.',
    color: '#e0e7ff'
  },
  {
    id: 'train',
    word: 'train',
    level: 2,
    category: 'transports',
    emoji: '🚆',
    hint: 'Il roule sur des rails avec plusieurs wagons.',
    example: 'Tchou tchou, le train entre en gare.',
    color: '#e2e8f0'
  },
  {
    id: 'poule',
    word: 'poule',
    level: 2,
    category: 'animaux',
    emoji: '🐔',
    hint: 'Elle picore des graines et pond des œufs frais.',
    example: 'La poule caquette dans la cour.',
    color: '#fef3c7'
  },
  {
    id: 'vache',
    word: 'vache',
    level: 2,
    category: 'animaux',
    emoji: '🐮',
    hint: 'Elle broute l\'herbe dans le pré et fait Meuh.',
    example: 'La vache a de belles taches.',
    color: '#f1f5f9'
  },
  {
    id: 'robot',
    word: 'robot',
    level: 2,
    category: 'objets',
    emoji: '🤖',
    hint: 'Une machine électronique amusante.',
    example: 'Mon robot marche tout droit.',
    color: '#e2e8f0'
  },
  {
    id: 'soleil',
    word: 'soleil',
    level: 2,
    category: 'nature',
    emoji: '☀️',
    hint: 'Il brille tout jaune et réchauffe toute la Terre.',
    example: 'Le soleil brille fort.',
    color: '#fef9c3'
  },

  // =========================================================================
  // NIVEAU 3 : DIFFICILE (6 à 8 lettres, doubles consonnes, muettes) - Fin CP/CE1
  // =========================================================================
  {
    id: 'banane',
    word: 'banane',
    level: 3,
    category: 'aliments',
    emoji: '🍌',
    hint: 'Un fruit jaune courbé que l\'on épluche.',
    example: 'Je mange une banane au goûter.',
    color: '#fef9c3'
  },
  {
    id: 'carotte',
    word: 'carotte',
    level: 3,
    category: 'aliments',
    emoji: '🥕',
    hint: 'Légume orange croquant avec deux T !',
    example: 'Le lapin mange une carotte.',
    color: '#ffedd5'
  },
  {
    id: 'cerise',
    word: 'cerise',
    level: 3,
    category: 'aliments',
    emoji: '🍒',
    hint: 'Petit fruit rouge attaché par deux.',
    example: 'Des cerises bien sucrées.',
    color: '#fee2e2'
  },
  {
    id: 'fraise',
    word: 'fraise',
    level: 3,
    category: 'aliments',
    emoji: '🍓',
    hint: 'Un fruit rouge parfumé avec des petits grains.',
    example: 'Une tarte à la fraise.',
    color: '#fee2e2'
  },
  {
    id: 'orange',
    word: 'orange',
    level: 3,
    category: 'aliments',
    emoji: '🍊',
    hint: 'Un fruit rond de la même couleur que son nom !',
    example: 'Je presse une orange.',
    color: '#ffedd5'
  },
  {
    id: 'gâteau',
    word: 'gâteau',
    level: 3,
    category: 'aliments',
    emoji: '🎂',
    hint: 'On souffle des bougies dessus pour son anniversaire !',
    example: 'Un délicieux gâteau d\'anniversaire.',
    color: '#fce7f3'
  },
  {
    id: 'maison',
    word: 'maison',
    level: 3,
    category: 'objets',
    emoji: '🏠',
    hint: 'L\'endroit où l\'on habite avec sa famille.',
    example: 'Bienvenue dans ma jolie maison.',
    color: '#ffedd5'
  },
  {
    id: 'ballon',
    word: 'ballon',
    level: 3,
    category: 'objets',
    emoji: '⚽',
    hint: 'Rond avec deux L, on tire dedans pour marquer !',
    example: 'On joue au ballon dans la cour.',
    color: '#f1f5f9'
  },
  {
    id: 'étoile',
    word: 'étoile',
    level: 3,
    category: 'nature',
    emoji: '⭐',
    hint: 'Elle scintille la nuit tout là-haut dans le ciel.',
    example: 'Fais un vœu sous une étoile.',
    color: '#fef9c3'
  },
  {
    id: 'tortue',
    word: 'tortue',
    level: 3,
    category: 'animaux',
    emoji: '🐢',
    hint: 'Elle marche lentement avec sa carapace solide.',
    example: 'La tortue rentre dans sa carapace.',
    color: '#dcfce7'
  },
  {
    id: 'canard',
    word: 'canard',
    level: 3,
    category: 'animaux',
    emoji: '🦆',
    hint: 'Il nage sur l\'eau avec un D muet à la fin.',
    example: 'Les petits canards nagent bien.',
    color: '#fef3c7'
  },
  {
    id: 'souris',
    word: 'souris',
    level: 3,
    category: 'animaux',
    emoji: '🐭',
    hint: 'Petite bête grise avec un S muet à la fin.',
    example: 'La petite souris grignote le fromage.',
    color: '#e2e8f0'
  },
  {
    id: 'voiture',
    word: 'voiture',
    level: 3,
    category: 'transports',
    emoji: '🚗',
    hint: 'Véhicule avec quatre roues et un moteur.',
    example: 'On monte dans la voiture.',
    color: '#fee2e2'
  },
  {
    id: 'mouton',
    word: 'mouton',
    level: 3,
    category: 'animaux',
    emoji: '🐑',
    hint: 'Il a une épaisse laine blanche et fait bêê.',
    example: 'Le mouton broute dans le pré.',
    color: '#f8fafc'
  },
  {
    id: 'cheval',
    word: 'cheval',
    level: 3,
    category: 'animaux',
    emoji: '🐴',
    hint: 'Il galope dans le pré et hennit joyeusement.',
    example: 'Le cheval saute l\'obstacle.',
    color: '#fed7aa'
  },
  {
    id: 'requin',
    word: 'requin',
    level: 3,
    category: 'animaux',
    emoji: '🦈',
    hint: 'Grand poisson prédateur avec un aileron pointu.',
    example: 'Le requin nage dans l\'océan.',
    color: '#dbeafe'
  },

  // =========================================================================
  // NIVEAU 4 : EXPERT (7 à 10 lettres, sons complexes: ouille, eau, ain, ph) - CE1
  // =========================================================================
  {
    id: 'grenouille',
    word: 'grenouille',
    level: 4,
    category: 'animaux',
    emoji: '🐸',
    hint: 'Petite bête verte qui coasse et saute dans la mare !',
    example: 'La grenouille saute sur le nénuphar.',
    color: '#dcfce7'
  },
  {
    id: 'papillon',
    word: 'papillon',
    level: 4,
    category: 'animaux',
    emoji: '🦋',
    hint: 'Insecte aux deux ailes multicolores avec deux L.',
    example: 'Le papillon butine les fleurs.',
    color: '#dbeafe'
  },
  {
    id: 'dauphin',
    word: 'dauphin',
    level: 4,
    category: 'animaux',
    emoji: '🐬',
    hint: 'Mammifère marin très joueur qui s\'écrit avec PH !',
    example: 'Le dauphin fait des sauts dans l\'eau.',
    color: '#e0f2fe'
  },
  {
    id: 'éléphant',
    word: 'éléphant',
    level: 4,
    category: 'animaux',
    emoji: '🐘',
    hint: 'Le plus gros animal terrestre avec une grande trompe et PH !',
    example: 'L\'éléphant boit avec sa trompe.',
    color: '#e2e8f0'
  },
  {
    id: 'chocolat',
    word: 'chocolat',
    level: 4,
    category: 'aliments',
    emoji: '🍫',
    hint: 'Délice sucré à base de cacao avec un T muet à la fin.',
    example: 'Un bon chocolat chaud.',
    color: '#fed7aa'
  },
  {
    id: 'parapluie',
    word: 'parapluie',
    level: 4,
    category: 'objets',
    emoji: '☂️',
    hint: 'On l\'ouvre au-dessus de sa tête pour ne pas être mouillé.',
    example: 'Ouvre ton parapluie sous l\'averse.',
    color: '#ede9fe'
  },
  {
    id: 'champignon',
    word: 'champignon',
    level: 4,
    category: 'nature',
    emoji: '🍄',
    hint: 'Il pousse dans la forêt sous la pluie avec un chapeau.',
    example: 'Un joli champignon rouge et blanc.',
    color: '#fee2e2'
  },
  {
    id: 'château',
    word: 'château',
    level: 4,
    category: 'objets',
    emoji: '🏰',
    hint: 'Grande bâtisse fortifiée de chevaliers avec un chapeau sur le A !',
    example: 'Le roi habite dans son grand château.',
    color: '#fef3c7'
  },
  {
    id: 'bouteille',
    word: 'bouteille',
    level: 4,
    category: 'objets',
    emoji: '🍾',
    hint: 'Récipient en verre ou plastique pour l\'eau avec EILLE.',
    example: 'Une bouteille d\'eau fraîche.',
    color: '#e0f2fe'
  },
  {
    id: 'dinosaure',
    word: 'dinosaure',
    level: 4,
    category: 'animaux',
    emoji: '🦖',
    hint: 'Animal géant préhistorique comme le T-Rex.',
    example: 'Le grand dinosaure rugit.',
    color: '#dcfce7'
  },
  {
    id: 'kangourou',
    word: 'kangourou',
    level: 4,
    category: 'animaux',
    emoji: '🦘',
    hint: 'Il bondit très haut et porte son petit dans sa poche.',
    example: 'Le kangourou fait de grands bonds.',
    color: '#fed7aa'
  },
  {
    id: 'trottinette',
    word: 'trottinette',
    level: 4,
    category: 'transports',
    emoji: '🛴',
    hint: 'Deux roues, un guidon et une planche pour glisser.',
    example: 'Je roule en trottinette sur le trottoir.',
    color: '#fee2e2'
  },
  {
    id: 'montagne',
    word: 'montagne',
    level: 4,
    category: 'nature',
    emoji: '⛰️',
    hint: 'Très haute colline avec de la neige à son sommet.',
    example: 'La montagne touche les nuages.',
    color: '#e2e8f0'
  },
  {
    id: 'arc-en-ciel',
    word: 'arc-en-ciel',
    level: 4,
    category: 'nature',
    emoji: '🌈',
    hint: 'Sept magnifiques couleurs dans le ciel quand pluie et soleil se croisent.',
    example: 'Regarde le bel arc-en-ciel.',
    color: '#fef3c7'
  },

  // =========================================================================
  // NIVEAU 5 : MAÎTRE / CHAMPION (8 à 14 lettres, orthographe exigeante) - CE1/CE2
  // =========================================================================
  {
    id: 'hippopotame',
    word: 'hippopotame',
    level: 5,
    category: 'animaux',
    emoji: '🦛',
    hint: 'Gros animal qui adore se baigner dans les rivières d\'Afrique.',
    example: 'L\'hippopotame ouvre sa bouche géante.',
    color: '#e2e8f0'
  },
  {
    id: 'rhinocéros',
    word: 'rhinocéros',
    level: 5,
    category: 'animaux',
    emoji: '🦏',
    hint: 'Puissant animal avec une corne sur le museau et un RH !',
    example: 'Le rhinocéros charge dans la plaine.',
    color: '#e2e8f0'
  },
  {
    id: 'coccinelle',
    word: 'coccinelle',
    level: 5,
    category: 'animaux',
    emoji: '🐞',
    hint: 'La bête à bon Dieu rouge avec deux CC et deux LL !',
    example: 'La petite coccinelle a sept points noirs.',
    color: '#fee2e2'
  },
  {
    id: 'tournesol',
    word: 'tournesol',
    level: 5,
    category: 'nature',
    emoji: '🌻',
    hint: 'Grande fleur jaune dont la tête suit la lumière du soleil.',
    example: 'Le tournesol regarde le soleil.',
    color: '#fef9c3'
  },
  {
    id: 'bibliothèque',
    word: 'bibliothèque',
    level: 5,
    category: 'objets',
    emoji: '📚',
    hint: 'Lieu calme rempli d\'étagères de livres avec un TH !',
    example: 'Nous empruntons des contes à la bibliothèque.',
    color: '#ede9fe'
  },
  {
    id: 'hélicoptère',
    word: 'hélicoptère',
    level: 5,
    category: 'transports',
    emoji: '🚁',
    hint: 'Engin volant avec de grandes pales d\'hélice qui tournent.',
    example: 'L\'hélicoptère se pose sur le toit.',
    color: '#fee2e2'
  },
  {
    id: 'anniversaire',
    word: 'anniversaire',
    level: 5,
    category: 'objets',
    emoji: '🎉',
    hint: 'Le grand jour festif où l\'on fête une année de plus !',
    example: 'Joyeux anniversaire à toi !',
    color: '#fce7f3'
  },
  {
    id: 'astronaute',
    word: 'astronaute',
    level: 5,
    category: 'transports',
    emoji: '👨‍🚀',
    hint: 'Explorateur qui voyage dans les étoiles en combinaison spatiale.',
    example: 'L\'astronaute marche sur la Lune.',
    color: '#e0e7ff'
  },
  {
    id: 'ordinateur',
    word: 'ordinateur',
    level: 5,
    category: 'objets',
    emoji: '💻',
    hint: 'Machine avec un écran, une souris et un clavier.',
    example: 'J\'apprends à coder sur mon ordinateur.',
    color: '#f1f5f9'
  },
  {
    id: 'labyrinthe',
    word: 'labyrinthe',
    level: 5,
    category: 'objets',
    emoji: '🌀',
    hint: 'Jeu d\'allées avec de fausses pistes pour trouver la sortie avec un Y et TH !',
    example: 'On cherche la sortie du labyrinthe.',
    color: '#dcfce7'
  },
  {
    id: 'balançoire',
    word: 'balançoire',
    level: 5,
    category: 'objets',
    emoji: '🎠',
    hint: 'Siège suspendu avec une cédille sous le C pour se balancer haut.',
    example: 'Je vole dans les airs sur la balançoire.',
    color: '#fef3c7'
  },
  {
    id: 'squelette',
    word: 'squelette',
    level: 5,
    category: 'objets',
    emoji: '💀',
    hint: 'L\'ensemble de tous les os qui soutiennent notre corps.',
    example: 'Le squelette protège nos organes.',
    color: '#f8fafc'
  },
  {
    id: 'constellation',
    word: 'constellation',
    level: 5,
    category: 'nature',
    emoji: '✨',
    hint: 'Groupe d\'étoiles qui dessinent une figure magique dans la nuit.',
    example: 'La grande ourse est une constellation.',
    color: '#ede9fe'
  }
];
