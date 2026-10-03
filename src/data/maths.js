// Activités mathématiques structurées en 5 NIVEAUX DE DIFFICULTÉ pour CP et CE1
// Ordres des options mélangés aléatoirement

export const MATH_EXERCISES_BY_LEVEL = {
  // --- NIVEAU 1 : FACILE (Nombres de 1 à 5, dénombrement et additions simples) ---
  1: [
    { type: 'count', item: '🍎', count: 3, options: [3, 2, 4], question: 'Combien y a-t-il de pommes ?', answer: 3 },
    { type: 'count', item: '🐱', count: 4, options: [5, 4, 3], question: 'Combien y a-t-il de chats ?', answer: 4 },
    { type: 'count', item: '⭐', count: 5, options: [4, 6, 5], question: 'Combien y a-t-il d\'étoiles ?', answer: 5 },
    { type: 'calc', a: 2, b: 1, op: '+', answer: 3, item: '🎈', options: [2, 4, 3], question: 'Calcule : 2 + 1 = ?' },
    { type: 'calc', a: 3, b: 2, op: '+', answer: 5, item: '🍬', options: [5, 4, 6], question: 'Calcule : 3 + 2 = ?' },
    { type: 'calc', a: 4, b: 1, op: '-', answer: 3, item: '🚗', options: [4, 3, 2], question: 'Calcule : 4 - 1 = ?' }
  ],

  // --- NIVEAU 2 : MOYEN (Nombres jusqu'à 10, additions et soustractions) ---
  2: [
    { type: 'count', item: '🍓', count: 7, options: [8, 6, 7], question: 'Combien y a-t-il de fraises ?', answer: 7 },
    { type: 'count', item: '🐶', count: 8, options: [8, 7, 9], question: 'Combien y a-t-il de chiots ?', answer: 8 },
    { type: 'calc', a: 4, b: 4, op: '+', answer: 8, item: '⚽', options: [9, 8, 7], question: 'Calcule : 4 + 4 = ?' },
    { type: 'calc', a: 5, b: 3, op: '+', answer: 8, item: '🧁', options: [8, 9, 7], question: 'Calcule : 5 + 3 = ?' },
    { type: 'calc', a: 7, b: 2, op: '-', answer: 5, item: '🐟', options: [4, 6, 5], question: 'Calcule : 7 - 2 = ?' },
    { type: 'compare', a: 8, b: 5, answer: '>', options: ['>', '<', '='], question: 'Quel signe convient ? 8 ... 5' }
  ],

  // --- NIVEAU 3 : DIFFICILE (Nombres jusqu'à 20, doubles simples et compléments) ---
  3: [
    { type: 'calc', a: 8, b: 4, op: '+', answer: 12, item: '🌸', options: [12, 11, 13], question: 'Calcule : 8 + 4 = ?' },
    { type: 'calc', a: 9, b: 6, op: '+', answer: 15, item: '🚀', options: [14, 16, 15], question: 'Calcule : 9 + 6 = ?' },
    { type: 'calc', a: 12, b: 3, op: '-', answer: 9, item: '🍪', options: [9, 8, 10], question: 'Calcule : 12 - 3 = ?' },
    { type: 'double', question: 'Quel est le double de 5 ?', answer: 10, options: [8, 12, 10], hint: '5 + 5 = ?' },
    { type: 'double', question: 'Quelle est la moitié de 8 ?', answer: 4, options: [4, 3, 5], hint: 'Partage 8 en 2 parts égales.' },
    { type: 'compare', a: 14, b: 19, answer: '<', options: ['=', '<', '>'], question: 'Quel signe convient ? 14 ... 19' }
  ],

  // --- NIVEAU 4 : EXPERT (Calcul mental CE1, dizaines et doubles avancés) ---
  4: [
    { type: 'calc', a: 15, b: 7, op: '+', answer: 22, item: '⭐', options: [21, 23, 22], question: 'Calcule : 15 + 7 = ?' },
    { type: 'calc', a: 20, b: 15, op: '+', answer: 35, item: '🎈', options: [35, 30, 40], question: 'Calcule : 20 + 15 = ?' },
    { type: 'calc', a: 25, b: 6, op: '-', answer: 19, item: '🍬', options: [18, 20, 19], question: 'Calcule : 25 - 6 = ?' },
    { type: 'double', question: 'Quel est le double de 7 ?', answer: 14, options: [14, 12, 16], hint: '7 + 7 = ?' },
    { type: 'double', question: 'Quelle est la moitié de 16 ?', answer: 8, options: [7, 9, 8], hint: '8 + 8 = 16' },
    { type: 'problem', story: 'Lilou a 12 étoiles dorées. Tiago lui en offre 8. Combien d\'étoiles Lilou a-t-elle en tout ?', answer: 20, options: [20, 18, 22], emoji: '⭐' }
  ],

  // --- NIVEAU 5 : MAÎTRE (Défis CE1/CE2, grands nombres & petits problèmes) ---
  5: [
    { type: 'calc', a: 35, b: 25, op: '+', answer: 60, item: '🌟', options: [60, 50, 70], question: 'Calcule : 35 + 25 = ?' },
    { type: 'calc', a: 50, b: 15, op: '-', answer: 35, item: '💎', options: [30, 40, 35], question: 'Calcule : 50 - 15 = ?' },
    { type: 'double', question: 'Quel est le double de 15 ?', answer: 30, options: [30, 25, 35], hint: '15 + 15 = ?' },
    { type: 'problem', story: 'Tiago a 30 billes. Il fait une partie avec Lilou et en gagne 12. Combien de billes a-t-il maintenant ?', answer: 42, options: [40, 42, 45], emoji: '🔮' },
    { type: 'problem', story: 'Dans le verger, Lilou cueille 24 pommes et Tiago cueille 16 poires. Combien de fruits ont-ils cueillis en tout ?', answer: 40, options: [40, 38, 42], emoji: '🍎' },
    { type: 'problem', story: 'Pour son anniversaire, Lilou a 50 bonbons. Elle en distribue 20 à ses camarades de classe. Combien lui en reste-t-il ?', answer: 30, options: [35, 30, 25], emoji: '🍬' }
  ]
};
