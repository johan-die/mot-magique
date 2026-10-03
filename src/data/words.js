// Banque de mots simples et courants pour enfants de 6-7 ans (CP / CE1)
// Mots classés par niveau de difficulté et thématiques

export const WORD_CATEGORIES = [
  { id: 'tous', label: 'Tous les mots', emoji: '🌟' },
  { id: 'animaux', label: 'Animaux', emoji: '🦁' },
  { id: 'aliments', label: 'Miam !', emoji: '🍎' },
  { id: 'objets', label: 'Maison & École', emoji: '✏️' },
  { id: 'nature', label: 'Nature', emoji: '🌳' },
  { id: 'transports', label: 'Véhicules', emoji: '🚀' },
];

export const WORDS = [
  // --- NIVEAU 1 : Mots courts (3 à 4 lettres) - Début CP ---
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
    hint: 'Un grand véhicule jaune ou rouge pour aller à l\'école.',
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
    hint: 'On appuie sur les deux pédales pour avancer !',
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
    hint: 'De l\'eau salée avec de grandes vagues et du sable.',
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
    hint: 'Le roi de la savane avec une grande crinière.',
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
    id: 'dent',
    word: 'dent',
    level: 1,
    category: 'objets',
    emoji: '🦷',
    hint: 'Blanche dans la bouche pour croquer la pomme.',
    example: 'Je me brosse les dents.',
    color: '#f8fafc'
  },
  {
    id: 'main',
    word: 'main',
    level: 1,
    category: 'objets',
    emoji: '✋',
    hint: 'Elle a cinq doigts pour attraper et écrire.',
    example: 'Je te donne la main.',
    color: '#ffedd5'
  },
  {
    id: 'pied',
    word: 'pied',
    level: 1,
    category: 'objets',
    emoji: '🦶',
    hint: 'Tout en bas de la jambe pour marcher et courir.',
    example: 'On met des chaussettes aux pieds.',
    color: '#fed7aa'
  },

  // --- NIVEAU 2 : Mots moyens (5 à 6 lettres) - Milieu CP / CE1 ---
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
    hint: 'Meuble avec quatre pieds pour poser son assiette ou ses devoirs.',
    example: 'Nous mangeons à table.',
    color: '#fef3c7'
  },
  {
    id: 'porte',
    word: 'porte',
    level: 2,
    category: 'objets',
    emoji: '🚪',
    hint: 'On l\'ouvre avec une poignée pour entrer dans la pièce.',
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
    id: 'fusée',
    word: 'fusée',
    level: 2,
    category: 'transports',
    emoji: '🚀',
    hint: 'Elle décolle très vite vers les étoiles et l\'espace.',
    example: 'La fusée part vers la Lune.',
    color: '#fee2e2'
  },
  {
    id: 'pluie',
    word: 'pluie',
    level: 2,
    category: 'nature',
    emoji: '🌧️',
    hint: 'Des gouttes d\'eau qui tombent des nuages gris.',
    example: 'Prends ton parapluie, il pleut.',
    color: '#e0f2fe'
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
    hint: 'Froide et sucrée en cornet l\'été à la vanille ou fraise.',
    example: 'Une bonne glace au chocolat.',
    color: '#fce7f3'
  },
  {
    id: 'avion',
    word: 'avion',
    level: 2,
    category: 'transports',
    emoji: '✈️',
    hint: 'Il a deux grandes ailes pour voler au-dessus des nuages.',
    example: 'L\'avion vole très haut dans le ciel.',
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
    hint: 'Elle picore des graines et pond de bons œufs frais.',
    example: 'La poule caquette dans la cour.',
    color: '#fef3c7'
  },
  {
    id: 'vache',
    word: 'vache',
    level: 2,
    category: 'animaux',
    emoji: '🐮',
    hint: 'Elle broute l\'herbe dans le pré et fait "Meuh".',
    example: 'La vache a des taches noires et blanches.',
    color: '#f1f5f9'
  },
  {
    id: 'robot',
    word: 'robot',
    level: 2,
    category: 'objets',
    emoji: '🤖',
    hint: 'Une machine électronique amusante avec des boutons.',
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
    example: 'Le soleil brille très fort aujourd\'hui.',
    color: '#fef9c3'
  },

  // --- NIVEAU 3 : Mots un peu plus longs (7 lettres et plus) - Fin CP / CE1 ---
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
    hint: 'Légume orange croquant qui pousse sous la terre.',
    example: 'Le lapin mange une carotte.',
    color: '#ffedd5'
  },
  {
    id: 'cerise',
    word: 'cerise',
    level: 3,
    category: 'aliments',
    emoji: '🍒',
    hint: 'Petit fruit rouge souvent attaché par deux à une tige.',
    example: 'Des cerises bien sucrées sur l\'arbre.',
    color: '#fee2e2'
  },
  {
    id: 'fraise',
    word: 'fraise',
    level: 3,
    category: 'aliments',
    emoji: '🍓',
    hint: 'Un fruit rouge avec des petits grains et une collerette verte.',
    example: 'Une tarte à la fraise.',
    color: '#fee2e2'
  },
  {
    id: 'orange',
    word: 'orange',
    level: 3,
    category: 'aliments',
    emoji: '🍊',
    hint: 'Un fruit rond et juteux de la même couleur que son nom !',
    example: 'Je presse une orange pour le jus.',
    color: '#ffedd5'
  },
  {
    id: 'gâteau',
    word: 'gâteau',
    level: 3,
    category: 'aliments',
    emoji: '🎂',
    hint: 'On souffle des bougies dessus le jour de son anniversaire !',
    example: 'Un délicieux gâteau au chocolat.',
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
    hint: 'Rond et léger, on tape dedans pour marquer un but !',
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
    id: 'papillon',
    word: 'papillon',
    level: 3,
    category: 'animaux',
    emoji: '🦋',
    hint: 'Il a de magnifiques ailes multicolores et butine les fleurs.',
    example: 'Le papillon vole de fleur en fleur.',
    color: '#dbeafe'
  },
  {
    id: 'tortue',
    word: 'tortue',
    level: 3,
    category: 'animaux',
    emoji: '🐢',
    hint: 'Elle marche lentement avec sa carapace protectrice sur le dos.',
    example: 'La tortue rentre dans sa carapace.',
    color: '#dcfce7'
  },
  {
    id: 'canard',
    word: 'canard',
    level: 3,
    category: 'animaux',
    emoji: '🦆',
    hint: 'Il nage sur la mare et fait "Coin-coin".',
    example: 'Les petits canards suivent leur maman.',
    color: '#fef3c7'
  },
  {
    id: 'souris',
    word: 'souris',
    level: 3,
    category: 'animaux',
    emoji: '🐭',
    hint: 'Petite bête toute grise qui adore grignoter le fromage.',
    example: 'La petite souris passe sous le lit.',
    color: '#e2e8f0'
  },
  {
    id: 'voiture',
    word: 'voiture',
    level: 3,
    category: 'transports',
    emoji: '🚗',
    hint: 'Elle a quatre roues et un volant pour rouler sur la route.',
    example: 'On monte dans la voiture pour partir en vacances.',
    color: '#fee2e2'
  },
  {
    id: 'dauphin',
    word: 'dauphin',
    level: 3,
    category: 'animaux',
    emoji: '🐬',
    hint: 'Très intelligent, il fait de grands sauts dans l\'océan.',
    example: 'Le dauphin nage avec ses amis.',
    color: '#e0f2fe'
  },
  {
    id: 'chocolat',
    word: 'chocolat',
    level: 3,
    category: 'aliments',
    emoji: '🍫',
    hint: 'Une tablette marron au goût sucré adoré des enfants.',
    example: 'Un carré de chocolat noir.',
    color: '#fed7aa'
  }
];
