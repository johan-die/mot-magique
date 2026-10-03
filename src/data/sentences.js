// Base de phrases pour "La Fabrique de Phrases" avec 5 NIVEAUX DE DIFFICULTÉ

export const SENTENCES_DATA = [
  // --- NIVEAU 1 : FACILE (2 à 3 blocs simples : Sujet + Verbe + Objet) ---
  {
    id: 1,
    level: 1,
    blocks: ['Le petit chat', 'boit', 'son lait.'],
    emoji: '🐱',
    color: '#ffedd5',
    distractors: []
  },
  {
    id: 2,
    level: 1,
    blocks: ['Le chien', 'joue avec', 'le ballon.'],
    emoji: '🐶',
    color: '#fef3c7',
    distractors: []
  },
  {
    id: 3,
    level: 1,
    blocks: ['La pomme', 'est', 'très bonne.'],
    emoji: '🍎',
    color: '#fee2e2',
    distractors: []
  },

  // --- NIVEAU 2 : MOYEN (3 à 4 blocs : adjectifs et petits mots) ---
  {
    id: 4,
    level: 2,
    blocks: ['Le grand soleil', 'brille', 'dans', 'le ciel bleu.'],
    emoji: '☀️',
    color: '#fef9c3',
    distractors: []
  },
  {
    id: 5,
    level: 2,
    blocks: ['Lilou et Tiago', 'mangent', 'du bon chocolat', 'au goûter.'],
    emoji: '🍫',
    color: '#fed7aa',
    distractors: []
  },
  {
    id: 6,
    level: 2,
    blocks: ['La petite poule', 'picore', 'des graines', 'dans la cour.'],
    emoji: '🐔',
    color: '#fef3c7',
    distractors: []
  },

  // --- NIVEAU 3 : DIFFICILE (4 à 5 blocs : compléments de lieu et temps) ---
  {
    id: 7,
    level: 3,
    blocks: ['Le gros ours brun', 'dort paisiblement', 'dans', 'sa grande caverne.'],
    emoji: '🐻',
    color: '#fed7aa',
    distractors: ['sur le toit']
  },
  {
    id: 8,
    level: 3,
    blocks: ['Le petit canard jaune', 'nage gaiement', 'sur', 'la mare d\'eau calme.'],
    emoji: '🦆',
    color: '#fef3c7',
    distractors: ['dans le four']
  },

  // --- NIVEAU 4 : EXPERT (5 blocs avec adjectifs et adverbes) ---
  {
    id: 9,
    level: 4,
    blocks: ['La fusée blanche', 'décolle', 'très rapidement', 'vers', 'les étoiles scintillantes.'],
    emoji: '🚀',
    color: '#e0e7ff',
    distractors: ['un vélo rouge']
  },
  {
    id: 10,
    level: 4,
    blocks: ['La jolie princesse', 'lit avec attention', 'un grimoire magique', 'dans', 'son château secret.'],
    emoji: '🏰',
    color: '#fce7f3',
    distractors: ['la boîte à pizza']
  },

  // --- NIVEAU 5 : MAÎTRE (5 à 6 blocs avec 1 ou 2 blocs pièges) ---
  {
    id: 11,
    level: 5,
    blocks: ['L\'astronaute courageux', 'marche avec précaution', 'sur le sol rocheux', 'de la mystérieuse Lune.'],
    emoji: '👨‍🚀',
    color: '#ede9fe',
    distractors: ['mange une glace', 'avec son chat']
  },
  {
    id: 12,
    level: 5,
    blocks: ['Le grand dauphin bleu', 'bondit avec grâce', 'au-dessus', 'des hautes vagues', 'de l\'océan.'],
    emoji: '🐬',
    color: '#e0f2fe',
    distractors: ['sur la bicyclette', 'en pyjama']
  }
];
