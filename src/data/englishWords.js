// Base de données pour "English Club" - Apprendre l'anglais au CP / CE1 / CE2
// Organisée en 5 niveaux de difficulté et 6 catégories thématiques

export const ENGLISH_CATEGORIES = [
  { id: 'tous', label: 'Tous les mots', emoji: '🌟' },
  { id: 'animals', label: 'Animaux', emoji: '🦁' },
  { id: 'colors', label: 'Couleurs', emoji: '🎨' },
  { id: 'numbers', label: 'Nombres', emoji: '🔢' },
  { id: 'food', label: 'Miam !', emoji: '🍎' },
  { id: 'school', label: 'Maison & École', emoji: '🎒' },
  { id: 'greetings', label: 'Salutations', emoji: '👋' }
];

export const ENGLISH_WORDS = [
  // --- NIVEAU 1 : FACILE (3 lettres, mots ultra réguliers) ---
  {
    id: 'en_cat',
    wordEn: 'cat',
    wordFr: 'chat',
    level: 1,
    category: 'animals',
    emoji: '🐱',
    phonetic: '/kæt/',
    color: '#ffedd5',
    hintFr: 'Le petit félin qui miaule et ronronne.'
  },
  {
    id: 'en_dog',
    wordEn: 'dog',
    wordFr: 'chien',
    level: 1,
    category: 'animals',
    emoji: '🐶',
    phonetic: '/dɒɡ/',
    color: '#fef3c7',
    hintFr: 'Le meilleur ami qui aboie et remue la queue.'
  },
  {
    id: 'en_pig',
    wordEn: 'pig',
    wordFr: 'cochon',
    level: 1,
    category: 'animals',
    emoji: '🐷',
    phonetic: '/pɪɡ/',
    color: '#fce7f3',
    hintFr: 'L\'animal rose de la ferme qui fait groin-groin.'
  },
  {
    id: 'en_cow',
    wordEn: 'cow',
    wordFr: 'vache',
    level: 1,
    category: 'animals',
    emoji: '🐮',
    phonetic: '/kaʊ/',
    color: '#f1f5f9',
    hintFr: 'Elle broute dans le pré et donne du lait.'
  },
  {
    id: 'en_red',
    wordEn: 'red',
    wordFr: 'rouge',
    level: 1,
    category: 'colors',
    emoji: '🔴',
    phonetic: '/rɛd/',
    color: '#fee2e2',
    hintFr: 'La couleur de la fraise et de la tomate.'
  },
  {
    id: 'en_one',
    wordEn: 'one',
    wordFr: 'un',
    level: 1,
    category: 'numbers',
    emoji: '1️⃣',
    phonetic: '/wʌn/',
    color: '#e0f2fe',
    hintFr: 'Le tout premier chiffre pour compter.'
  },
  {
    id: 'en_two',
    wordEn: 'two',
    wordFr: 'deux',
    level: 1,
    category: 'numbers',
    emoji: '2️⃣',
    phonetic: '/tuː/',
    color: '#e0f2fe',
    hintFr: 'Un plus un font...'
  },
  {
    id: 'en_six',
    wordEn: 'six',
    wordFr: 'six',
    level: 1,
    category: 'numbers',
    emoji: '6️⃣',
    phonetic: '/sɪks/',
    color: '#e0f2fe',
    hintFr: 'Le chiffre juste après cinq.'
  },
  {
    id: 'en_ten',
    wordEn: 'ten',
    wordFr: 'dix',
    level: 1,
    category: 'numbers',
    emoji: '🔟',
    phonetic: '/tɛn/',
    color: '#e0f2fe',
    hintFr: 'Le nombre total de doigts sur nos deux mains.'
  },
  {
    id: 'en_egg',
    wordEn: 'egg',
    wordFr: 'œuf',
    level: 1,
    category: 'food',
    emoji: '🥚',
    phonetic: '/ɛɡ/',
    color: '#fef9c3',
    hintFr: 'La poule le pond dans le poulailler.'
  },
  {
    id: 'en_pen',
    wordEn: 'pen',
    wordFr: 'stylo',
    level: 1,
    category: 'school',
    emoji: '🖊️',
    phonetic: '/pɛn/',
    color: '#e0e7ff',
    hintFr: 'On l\'utilise pour écrire à l\'encre.'
  },
  {
    id: 'en_sun',
    wordEn: 'sun',
    wordFr: 'soleil',
    level: 1,
    category: 'school',
    emoji: '☀️',
    phonetic: '/sʌn/',
    color: '#fef9c3',
    hintFr: 'Il brille tout jaune dans le ciel.'
  },
  {
    id: 'en_yes',
    wordEn: 'yes',
    wordFr: 'oui',
    level: 1,
    category: 'greetings',
    emoji: '👍',
    phonetic: '/jɛs/',
    color: '#dcfce7',
    hintFr: 'Le mot magique pour dire qu\'on est d\'accord.'
  },

  // --- NIVEAU 2 : MOYEN (4 lettres) ---
  {
    id: 'en_bird',
    wordEn: 'bird',
    wordFr: 'oiseau',
    level: 2,
    category: 'animals',
    emoji: '🐦',
    phonetic: '/bɜːd/',
    color: '#dbeafe',
    hintFr: 'Il a des ailes et chante dans les arbres.'
  },
  {
    id: 'en_fish',
    wordEn: 'fish',
    wordFr: 'poisson',
    level: 2,
    category: 'animals',
    emoji: '🐟',
    phonetic: '/fɪʃ/',
    color: '#cffafe',
    hintFr: 'Il nage sous l\'eau avec ses nageoires.'
  },
  {
    id: 'en_duck',
    wordEn: 'duck',
    wordFr: 'canard',
    level: 2,
    category: 'animals',
    emoji: '🦆',
    phonetic: '/dʌk/',
    color: '#fef3c7',
    hintFr: 'Il barbote dans la mare et fait coin-coin.'
  },
  {
    id: 'en_lion',
    wordEn: 'lion',
    wordFr: 'lion',
    level: 2,
    category: 'animals',
    emoji: '🦁',
    phonetic: '/ˈlaɪən/',
    color: '#fef3c7',
    hintFr: 'Le roi de la savane avec sa crinière dorée.'
  },
  {
    id: 'en_bear',
    wordEn: 'bear',
    wordFr: 'ours',
    level: 2,
    category: 'animals',
    emoji: '🐻',
    phonetic: '/bɛə/',
    color: '#fed7aa',
    hintFr: 'Un gros animal poilu qui adore le miel.'
  },
  {
    id: 'en_frog',
    wordEn: 'frog',
    wordFr: 'grenouille',
    level: 2,
    category: 'animals',
    emoji: '🐸',
    phonetic: '/frɒɡ/',
    color: '#dcfce7',
    hintFr: 'Elle saute près de l\'étang et fait coâ-coâ.'
  },
  {
    id: 'en_blue',
    wordEn: 'blue',
    wordFr: 'bleu',
    level: 2,
    category: 'colors',
    emoji: '🔵',
    phonetic: '/bluː/',
    color: '#dbeafe',
    hintFr: 'La couleur de la mer et du ciel d\'été.'
  },
  {
    id: 'en_pink',
    wordEn: 'pink',
    wordFr: 'rose',
    level: 2,
    category: 'colors',
    emoji: '🩷',
    phonetic: '/pɪŋk/',
    color: '#fce7f3',
    hintFr: 'La couleur préférée des flamants roses.'
  },
  {
    id: 'en_four',
    wordEn: 'four',
    wordFr: 'quatre',
    level: 2,
    category: 'numbers',
    emoji: '4️⃣',
    phonetic: '/fɔː/',
    color: '#e0f2fe',
    hintFr: 'Le nombre de pattes d\'un chien ou d\'un chat.'
  },
  {
    id: 'en_five',
    wordEn: 'five',
    wordFr: 'cinq',
    level: 2,
    category: 'numbers',
    emoji: '5️⃣',
    phonetic: '/faɪv/',
    color: '#e0f2fe',
    hintFr: 'Le nombre de doigts sur une seule main.'
  },
  {
    id: 'en_nine',
    wordEn: 'nine',
    wordFr: 'neuf',
    level: 2,
    category: 'numbers',
    emoji: '9️⃣',
    phonetic: '/naɪn/',
    color: '#e0f2fe',
    hintFr: 'Le chiffre juste avant dix.'
  },
  {
    id: 'en_milk',
    wordEn: 'milk',
    wordFr: 'lait',
    level: 2,
    category: 'food',
    emoji: '🥛',
    phonetic: '/mɪlk/',
    color: '#f8fafc',
    hintFr: 'Boisson blanche délicieuse au petit déjeuner.'
  },
  {
    id: 'en_cake',
    wordEn: 'cake',
    wordFr: 'gâteau',
    level: 2,
    category: 'food',
    emoji: '🎂',
    phonetic: '/keɪk/',
    color: '#fce7f3',
    hintFr: 'On souffle des bougies dessus pour son anniversaire.'
  },
  {
    id: 'en_book',
    wordEn: 'book',
    wordFr: 'livre',
    level: 2,
    category: 'school',
    emoji: '📖',
    phonetic: '/bʊk/',
    color: '#e0e7ff',
    hintFr: 'On l\'ouvre pour lire de belles histoires.'
  },
  {
    id: 'en_door',
    wordEn: 'door',
    wordFr: 'porte',
    level: 2,
    category: 'school',
    emoji: '🚪',
    phonetic: '/dɔː/',
    color: '#fed7aa',
    hintFr: 'On l\'ouvre pour entrer dans la maison.'
  },
  {
    id: 'en_star',
    wordEn: 'star',
    wordFr: 'étoile',
    level: 2,
    category: 'school',
    emoji: '⭐',
    phonetic: '/stɑː/',
    color: '#fef9c3',
    hintFr: 'Elle scintille la nuit dans le ciel sombre.'
  },
  {
    id: 'en_moon',
    wordEn: 'moon',
    wordFr: 'lune',
    level: 2,
    category: 'school',
    emoji: '🌙',
    phonetic: '/muːn/',
    color: '#ede9fe',
    hintFr: 'Elle éclaire nos nuits et change de forme.'
  },
  {
    id: 'en_tree',
    wordEn: 'tree',
    wordFr: 'arbre',
    level: 2,
    category: 'school',
    emoji: '🌳',
    phonetic: '/triː/',
    color: '#dcfce7',
    hintFr: 'Il a un tronc en bois et plein de feuilles vertes.'
  },

  // --- NIVEAU 3 : DIFFICILE (5 lettres) ---
  {
    id: 'en_horse',
    wordEn: 'horse',
    wordFr: 'cheval',
    level: 3,
    category: 'animals',
    emoji: '🐴',
    phonetic: '/hɔːs/',
    color: '#fed7aa',
    hintFr: 'Il galope dans le pré et hennit joyeusement.'
  },
  {
    id: 'en_sheep',
    wordEn: 'sheep',
    wordFr: 'mouton',
    level: 3,
    category: 'animals',
    emoji: '🐑',
    phonetic: '/ʃiːp/',
    color: '#f8fafc',
    hintFr: 'Il a une épaisse laine blanche et fait bêê.'
  },
  {
    id: 'en_mouse',
    wordEn: 'mouse',
    wordFr: 'souris',
    level: 3,
    category: 'animals',
    emoji: '🐭',
    phonetic: '/maʊs/',
    color: '#e2e8f0',
    hintFr: 'Petite bête qui adore grignoter du fromage.'
  },
  {
    id: 'en_tiger',
    wordEn: 'tiger',
    wordFr: 'tigre',
    level: 3,
    category: 'animals',
    emoji: '🐯',
    phonetic: '/ˈtaɪɡə/',
    color: '#ffedd5',
    hintFr: 'Grand félin fauve avec de belles rayures noires.'
  },
  {
    id: 'en_green',
    wordEn: 'green',
    wordFr: 'vert',
    level: 3,
    category: 'colors',
    emoji: '🟢',
    phonetic: '/ɡriːn/',
    color: '#dcfce7',
    hintFr: 'La couleur de l\'herbe fraîche et des feuilles.'
  },
  {
    id: 'en_white',
    wordEn: 'white',
    wordFr: 'blanc',
    level: 3,
    category: 'colors',
    emoji: '⚪',
    phonetic: '/waɪt/',
    color: '#f8fafc',
    hintFr: 'La couleur de la neige en hiver.'
  },
  {
    id: 'en_black',
    wordEn: 'black',
    wordFr: 'noir',
    level: 3,
    category: 'colors',
    emoji: '⚫',
    phonetic: '/blæk/',
    color: '#e2e8f0',
    hintFr: 'La couleur de la nuit quand tout est éteint.'
  },
  {
    id: 'en_three',
    wordEn: 'three',
    wordFr: 'trois',
    level: 3,
    category: 'numbers',
    emoji: '3️⃣',
    phonetic: '/θriː/',
    color: '#e0f2fe',
    hintFr: 'Deux plus un font...'
  },
  {
    id: 'en_seven',
    wordEn: 'seven',
    wordFr: 'sept',
    level: 3,
    category: 'numbers',
    emoji: '7️⃣',
    phonetic: '/ˈsɛvn/',
    color: '#e0f2fe',
    hintFr: 'Le nombre de jours dans une semaine.'
  },
  {
    id: 'en_eight',
    wordEn: 'eight',
    wordFr: 'huit',
    level: 3,
    category: 'numbers',
    emoji: '8️⃣',
    phonetic: '/eɪt/',
    color: '#e0f2fe',
    hintFr: 'Le nombre de pattes de l\'araignée.'
  },
  {
    id: 'en_apple',
    wordEn: 'apple',
    wordFr: 'pomme',
    level: 3,
    category: 'food',
    emoji: '🍎',
    phonetic: '/ˈæpl/',
    color: '#fee2e2',
    hintFr: 'Le fruit croquant que Blanche-Neige adore.'
  },
  {
    id: 'en_bread',
    wordEn: 'bread',
    wordFr: 'pain',
    level: 3,
    category: 'food',
    emoji: '🍞',
    phonetic: '/brɛd/',
    color: '#fed7aa',
    hintFr: 'Cuit au four par le boulanger, croustillant !'
  },
  {
    id: 'en_water',
    wordEn: 'water',
    wordFr: 'eau',
    level: 3,
    category: 'food',
    emoji: '💧',
    phonetic: '/ˈwɔːtə/',
    color: '#dbeafe',
    hintFr: 'Elle désaltère quand on a très soif.'
  },
  {
    id: 'en_pizza',
    wordEn: 'pizza',
    wordFr: 'pizza',
    level: 3,
    category: 'food',
    emoji: '🍕',
    phonetic: '/ˈpiːtsə/',
    color: '#fee2e2',
    hintFr: 'Délicieuse part garnie de fromage fondu et tomate.'
  },
  {
    id: 'en_house',
    wordEn: 'house',
    wordFr: 'maison',
    level: 3,
    category: 'school',
    emoji: '🏠',
    phonetic: '/haʊs/',
    color: '#ffedd5',
    hintFr: 'Le foyer où habite toute la famille.'
  },
  {
    id: 'en_table',
    wordEn: 'table',
    wordFr: 'table',
    level: 3,
    category: 'school',
    emoji: '🪑',
    phonetic: '/ˈteɪbl/',
    color: '#fef3c7',
    hintFr: 'On s\'assoit autour pour manger en famille.'
  },
  {
    id: 'en_hello',
    wordEn: 'hello',
    wordFr: 'bonjour',
    level: 3,
    category: 'greetings',
    emoji: '👋',
    phonetic: '/həˈləʊ/',
    color: '#fef3c7',
    hintFr: 'Le premier mot pour saluer quelqu\'un.'
  },

  // --- NIVEAU 4 : EXPERT (6 lettres) ---
  {
    id: 'en_rabbit',
    wordEn: 'rabbit',
    wordFr: 'lapin',
    level: 4,
    category: 'animals',
    emoji: '🐰',
    phonetic: '/ˈræbɪt/',
    color: '#f3e8ff',
    hintFr: 'Il a de longues oreilles et adore les carottes.'
  },
  {
    id: 'en_monkey',
    wordEn: 'monkey',
    wordFr: 'singe',
    level: 4,
    category: 'animals',
    emoji: '🐵',
    phonetic: '/ˈmʌŋki/',
    color: '#fef3c7',
    hintFr: 'Il saute d\'arbre en arbre et fait des grimaces.'
  },
  {
    id: 'en_yellow',
    wordEn: 'yellow',
    wordFr: 'jaune',
    level: 4,
    category: 'colors',
    emoji: '🟡',
    phonetic: '/ˈjɛləʊ/',
    color: '#fef9c3',
    hintFr: 'La couleur des poussins et du soleil d\'été.'
  },
  {
    id: 'en_orange',
    wordEn: 'orange',
    wordFr: 'orange',
    level: 4,
    category: 'colors',
    emoji: '🟠',
    phonetic: '/ˈɒrɪndʒ/',
    color: '#ffedd5',
    hintFr: 'La couleur de la carotte et de la clémentine.'
  },
  {
    id: 'en_purple',
    wordEn: 'purple',
    wordFr: 'violet',
    level: 4,
    category: 'colors',
    emoji: '🟣',
    phonetic: '/ˈpɜːpl/',
    color: '#f3e8ff',
    hintFr: 'Mélange de bleu et de rouge, couleur de la prune.'
  },
  {
    id: 'en_banana',
    wordEn: 'banana',
    wordFr: 'banane',
    level: 4,
    category: 'food',
    emoji: '🍌',
    phonetic: '/bəˈnɑːnə/',
    color: '#fef9c3',
    hintFr: 'Fruit jaune tout courbé que les singes adorent.'
  },
  {
    id: 'en_cheese',
    wordEn: 'cheese',
    wordFr: 'fromage',
    level: 4,
    category: 'food',
    emoji: '🧀',
    phonetic: '/tʃiːz/',
    color: '#fef3c7',
    hintFr: 'Délicieux aliment fait avec du bon lait.'
  },
  {
    id: 'en_carrot',
    wordEn: 'carrot',
    wordFr: 'carotte',
    level: 4,
    category: 'food',
    emoji: '🥕',
    phonetic: '/ˈkærət/',
    color: '#ffedd5',
    hintFr: 'Légume orange croquant qui pousse sous terre.'
  },
  {
    id: 'en_school',
    wordEn: 'school',
    wordFr: 'école',
    level: 4,
    category: 'school',
    emoji: '🎒',
    phonetic: '/skuːl/',
    color: '#e0e7ff',
    hintFr: 'L\'endroit formidable où on apprend à lire et écrire.'
  },
  {
    id: 'en_please',
    wordEn: 'please',
    wordFr: 's\'il te plaît',
    level: 4,
    category: 'greetings',
    emoji: '🙏',
    phonetic: '/pliːz/',
    color: '#ede9fe',
    hintFr: 'Le mot de politesse magique pour demander.'
  },

  // --- NIVEAU 5 : MAÎTRE (Expressions & Mots longs) ---
  {
    id: 'en_goodbye',
    wordEn: 'goodbye',
    wordFr: 'au revoir',
    level: 5,
    category: 'greetings',
    emoji: '🤝',
    phonetic: '/ɡʊdˈbaɪ/',
    color: '#fef3c7',
    hintFr: 'Ce qu\'on dit en partant à la fin de la journée.'
  },
  {
    id: 'en_elephant',
    wordEn: 'elephant',
    wordFr: 'éléphant',
    level: 5,
    category: 'animals',
    emoji: '🐘',
    phonetic: '/ˈɛlɪfənt/',
    color: '#e2e8f0',
    hintFr: 'Le géant gris d\'Afrique avec une longue trompe.'
  },
  {
    id: 'en_butterfly',
    wordEn: 'butterfly',
    wordFr: 'papillon',
    level: 5,
    category: 'animals',
    emoji: '🦋',
    phonetic: '/ˈbʌtəflaɪ/',
    color: '#dbeafe',
    hintFr: 'Il volette gracieusement avec ses ailes colorées.'
  },
  {
    id: 'en_strawberry',
    wordEn: 'strawberry',
    wordFr: 'fraise',
    level: 5,
    category: 'food',
    emoji: '🍓',
    phonetic: '/ˈstrɔːbəri/',
    color: '#fee2e2',
    hintFr: 'Petit fruit rouge parfumé qu\'on cueille au potager.'
  }
];
