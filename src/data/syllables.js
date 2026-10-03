// Base de mots découpés en syllabes organisée en 5 NIVEAUX DE DIFFICULTÉ (CP / CE1 / CE2)

export const SYLLABLE_WORDS = [
  // --- NIVEAU 1 : FACILE (2 syllabes simples et transparentes) ---
  { id: 'bateau', level: 1, word: 'bateau', emoji: '⛵', syllables: ['ba', 'teau'], distractors: ['li'], color: '#dbeafe' },
  { id: 'gateau', level: 1, word: 'gâteau', emoji: '🎂', syllables: ['gâ', 'teau'], distractors: ['to'], color: '#fce7f3' },
  { id: 'lapin', level: 1, word: 'lapin', emoji: '🐰', syllables: ['la', 'pin'], distractors: ['pa'], color: '#f3e8ff' },
  { id: 'ballon', level: 1, word: 'ballon', emoji: '⚽', syllables: ['bal', 'lon'], distractors: ['ro'], color: '#fef3c7' },
  { id: 'maison', level: 1, word: 'maison', emoji: '🏠', syllables: ['mai', 'son'], distractors: ['ne'], color: '#ffedd5' },

  // --- NIVEAU 2 : MOYEN (2 à 3 syllabes courantes avec sons ch, ou, on) ---
  { id: 'chapeau', level: 2, word: 'chapeau', emoji: '🎩', syllables: ['cha', 'peau'], distractors: ['che', 'pa'], color: '#e0e7ff' },
  { id: 'tortue', level: 2, word: 'tortue', emoji: '🐢', syllables: ['tor', 'tue'], distractors: ['tur', 'te'], color: '#dcfce7' },
  { id: 'poisson', level: 2, word: 'poisson', emoji: '🐟', syllables: ['pois', 'son'], distractors: ['soi', 'pon'], color: '#cffafe' },
  { id: 'mouton', level: 2, word: 'mouton', emoji: '🐑', syllables: ['mou', 'ton'], distractors: ['tou', 'mon'], color: '#f1f5f9' },
  { id: 'tomate', level: 2, word: 'tomate', emoji: '🍅', syllables: ['to', 'ma', 'te'], distractors: ['ta', 'mo'], color: '#fee2e2' },

  // --- NIVEAU 3 : DIFFICILE (3 syllabes avec sons complexes et doubles lettres) ---
  { id: 'papillon', level: 3, word: 'papillon', emoji: '🦋', syllables: ['pa', 'pil', 'lon'], distractors: ['pi', 'pan'], color: '#dbeafe' },
  { id: 'chocolat', level: 3, word: 'chocolat', emoji: '🍫', syllables: ['cho', 'co', 'lat'], distractors: ['cha', 'lot'], color: '#fed7aa' },
  { id: 'grenouille', level: 3, word: 'grenouille', emoji: '🐸', syllables: ['gre', 'noui', 'lle'], distractors: ['gou', 'ne'], color: '#dcfce7' },
  { id: 'banane', level: 3, word: 'banane', emoji: '🍌', syllables: ['ba', 'na', 'ne'], distractors: ['bon', 'na'], color: '#fef9c3' },
  { id: 'voiture', level: 3, word: 'voiture', emoji: '🚗', syllables: ['voi', 'tu', 're'], distractors: ['vi', 'tur'], color: '#fee2e2' },

  // --- NIVEAU 4 : EXPERT (3 à 4 syllabes avec pièges dans la réserve) ---
  { id: 'parapluie', level: 4, word: 'parapluie', emoji: '☂️', syllables: ['pa', 'ra', 'pluie'], distractors: ['pa', 'pleu', 'ri'], color: '#ede9fe' },
  { id: 'dinosaure', level: 4, word: 'dinosaure', emoji: '🦖', syllables: ['di', 'no', 'saure'], distractors: ['de', 'nau', 'sor'], color: '#dcfce7' },
  { id: 'champignon', level: 4, word: 'champignon', emoji: '🍄', syllables: ['cham', 'pi', 'gnon'], distractors: ['chon', 'pa', 'gno'], color: '#fee2e2' },
  { id: 'kangourou', level: 4, word: 'kangourou', emoji: '🦘', syllables: ['kan', 'gou', 'rou'], distractors: ['kon', 'gar', 'ru'], color: '#fed7aa' },
  { id: 'dauphin', level: 4, word: 'dauphin', emoji: '🐬', syllables: ['dau', 'phin'], distractors: ['dou', 'fin', 'pha'], color: '#e0f2fe' },

  // --- NIVEAU 5 : MAÎTRE (4 à 5 syllabes, mots longs & 2 pièges obligatoires) ---
  { id: 'helicoptere', level: 5, word: 'hélicoptère', emoji: '🚁', syllables: ['hé', 'li', 'cop', 'tère'], distractors: ['ha', 'cap', 'teur'], color: '#fee2e2' },
  { id: 'coccinelle', level: 5, word: 'coccinelle', emoji: '🐞', syllables: ['coc', 'ci', 'nel', 'le'], distractors: ['cac', 'si', 'nal'], color: '#fee2e2' },
  { id: 'ordinateur', level: 5, word: 'ordinateur', emoji: '💻', syllables: ['or', 'di', 'na', 'teur'], distractors: ['ar', 'do', 'teur'], color: '#f1f5f9' },
  { id: 'hippopotame', level: 5, word: 'hippopotame', emoji: '🦛', syllables: ['hip', 'po', 'po', 'tame'], distractors: ['hap', 'pe', 'tem'], color: '#e2e8f0' },
  { id: 'anniversaire', level: 5, word: 'anniversaire', emoji: '🎉', syllables: ['an', 'ni', 'ver', 'saire'], distractors: ['on', 'ne', 'var'], color: '#fce7f3' }
];
