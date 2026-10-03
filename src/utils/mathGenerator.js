// Générateur procédural infini d'exercices mathématiques pour CP, CE1 et CE2
// Génère des calculs, des comparaisons, des doubles/moitiés, des suites et des problèmes à l'infini
// avec des bornes cohérentes et des distracteurs intelligents aléatoires.

export const MATH_TOPICS = [
  { id: 'mixed', label: '🎲 Tout mélangé', emoji: '🎲', desc: 'Défis variés aléatoires' },
  { id: 'count', label: '🔢 Dénombrement', emoji: '🔢', desc: 'Compter des objets visuels' },
  { id: 'addition', label: '➕ Additions', emoji: '➕', desc: 'Calculer des sommes' },
  { id: 'subtraction', label: '➖ Soustractions', emoji: '➖', desc: 'Enlever et retirer' },
  { id: 'doubles', label: '✨ Doubles & Moitiés', emoji: '✨', desc: 'Calcul mental & partage' },
  { id: 'complements', label: '🎯 Compléments', emoji: '🎯', desc: 'Compléter à 10, 20 ou 100' },
  { id: 'sequences', label: '📈 Suites logiques', emoji: '📈', desc: 'Trouver le nombre suivant' },
  { id: 'problems', label: '🧠 Problèmes du quotidien', emoji: '🧠', desc: 'Histoires avec Lilou et Tiago' }
];

const ITEMS = ['🍎', '🍓', '🍬', '⭐', '🐱', '🐶', '🚗', '🎈', '🧁', '⚽', '🍪', '🌸', '🚀', '🦋', '🐟', '💎'];

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

// Génère des distracteurs proches et cohérents, avec options aléatoires
function generateSmartOptions(answer, count = 3, minVal = 0, maxVal = 100) {
  if (typeof answer === 'string') {
    return shuffle(['<', '=', '>']);
  }

  const optionsSet = new Set([answer]);
  const offsets = shuffle([-1, 1, -2, 2, -3, 3, -10, 10, -5, 5]);

  for (const d of offsets) {
    const candidate = answer + d;
    if (candidate >= minVal && candidate <= maxVal && candidate !== answer) {
      optionsSet.add(candidate);
      if (optionsSet.size === count) break;
    }
  }

  while (optionsSet.size < count) {
    const randOffset = (Math.random() < 0.5 ? -1 : 1) * randomInt(1, 6);
    const candidate = Math.max(minVal, Math.min(maxVal, answer + randOffset));
    optionsSet.add(candidate);
  }

  return shuffle(Array.from(optionsSet));
}

// 1. Dénombrement visuel
function generateCount(level) {
  const item = pickRandom(ITEMS);
  let count = 3;
  if (level === 1) count = randomInt(1, 5);
  else if (level === 2) count = randomInt(4, 9);
  else count = randomInt(7, 12);

  return {
    id: `count-${Date.now()}-${Math.random()}`,
    type: 'count',
    item,
    count,
    answer: count,
    question: `Combien y a-t-il de ${item} ?`,
    options: generateSmartOptions(count, 3, 1, count + 4)
  };
}

// 2. Additions
function generateAddition(level) {
  const item = pickRandom(ITEMS);
  let a, b;

  if (level === 1) {
    a = randomInt(1, 3);
    b = randomInt(1, 5 - a);
  } else if (level === 2) {
    a = randomInt(2, 6);
    b = randomInt(1, 10 - a);
  } else if (level === 3) {
    a = randomInt(6, 12);
    b = randomInt(3, 9);
  } else if (level === 4) {
    a = randomInt(15, 35);
    b = randomInt(5, 15);
  } else {
    // Level 5
    a = randomInt(25, 55);
    b = randomInt(15, 45);
  }

  const answer = a + b;
  return {
    id: `add-${Date.now()}-${Math.random()}`,
    type: 'calc',
    item,
    a,
    b,
    op: '+',
    answer,
    question: `Calcule : ${a} + ${b} = ?`,
    options: generateSmartOptions(answer, 3, Math.max(0, answer - 5), answer + 10)
  };
}

// 3. Soustractions
function generateSubtraction(level) {
  const item = pickRandom(ITEMS);
  let a, b;

  if (level === 1) {
    a = randomInt(2, 5);
    b = randomInt(1, a - 1);
  } else if (level === 2) {
    a = randomInt(5, 10);
    b = randomInt(1, a - 1);
  } else if (level === 3) {
    a = randomInt(11, 20);
    b = randomInt(2, 9);
  } else if (level === 4) {
    a = randomInt(20, 50);
    b = randomInt(3, 15);
  } else {
    // Level 5
    a = randomInt(40, 100);
    b = randomInt(12, 35);
  }

  const answer = a - b;
  return {
    id: `sub-${Date.now()}-${Math.random()}`,
    type: 'calc',
    item,
    a,
    b,
    op: '-',
    answer,
    question: `Calcule : ${a} - ${b} = ?`,
    options: generateSmartOptions(answer, 3, 0, answer + 8)
  };
}

// 4. Comparaisons (<, =, >)
function generateComparison(level) {
  let max = 10;
  if (level === 1) max = 5;
  else if (level === 2) max = 10;
  else if (level === 3) max = 20;
  else if (level === 4) max = 50;
  else max = 100;

  const a = randomInt(1, max);
  // 30% chance of equal
  const isEq = Math.random() < 0.3;
  const b = isEq ? a : randomInt(1, max);

  let answer = '=';
  if (a < b) answer = '<';
  else if (a > b) answer = '>';

  return {
    id: `comp-${Date.now()}-${Math.random()}`,
    type: 'compare',
    a,
    b,
    answer,
    question: `Quel signe convient entre ${a} et ${b} ?`,
    options: ['<', '=', '>']
  };
}

// 5. Doubles & Moitiés
function generateDoubles(level) {
  const isDouble = Math.random() < 0.6;

  if (isDouble) {
    let num;
    if (level <= 2) num = randomInt(1, 5);
    else if (level === 3) num = randomInt(4, 10);
    else if (level === 4) num = randomInt(8, 15);
    else num = pickRandom([15, 20, 25, 30, 40, 50]);

    const answer = num * 2;
    return {
      id: `dbl-${Date.now()}-${Math.random()}`,
      type: 'double',
      question: `Quel est le double de ${num} ?`,
      hint: `${num} + ${num} = ?`,
      answer,
      options: generateSmartOptions(answer, 3, answer - 6, answer + 8)
    };
  } else {
    // Moitié
    let answer;
    if (level <= 2) answer = randomInt(1, 4);
    else if (level === 3) answer = randomInt(3, 8);
    else if (level === 4) answer = randomInt(6, 15);
    else answer = pickRandom([10, 15, 20, 25, 30, 50]);

    const num = answer * 2;
    return {
      id: `half-${Date.now()}-${Math.random()}`,
      type: 'double',
      question: `Quelle est la moitié de ${num} ?`,
      hint: `Partage ${num} en 2 parts égales.`,
      answer,
      options: generateSmartOptions(answer, 3, 1, answer + 6)
    };
  }
}

// 6. Compléments (à 10, à 20 ou à 100)
function generateComplements(level) {
  let target = 10;
  if (level <= 2) target = 10;
  else if (level === 3) target = pickRandom([10, 20]);
  else if (level === 4) target = pickRandom([20, 50]);
  else target = pickRandom([50, 100]);

  const given = randomInt(1, target - 1);
  const answer = target - given;

  return {
    id: `comp-${Date.now()}-${Math.random()}`,
    type: 'complement',
    target,
    given,
    answer,
    question: `Complète pour faire ${target} : ${given} + ? = ${target}`,
    hint: `Combien manque-t-il à ${given} pour atteindre ${target} ?`,
    options: generateSmartOptions(answer, 3, 1, target)
  };
}

// 7. Suites logiques
function generateSequence(level) {
  let step = 1;
  let start = randomInt(1, 10);
  let len = 4;

  if (level <= 2) {
    step = pickRandom([1, 2]);
    start = randomInt(1, 5);
  } else if (level === 3) {
    step = pickRandom([2, 5]);
    start = randomInt(2, 10);
  } else if (level === 4) {
    step = pickRandom([2, 5, 10]);
    start = randomInt(5, 25);
  } else {
    step = pickRandom([5, 10, 20]);
    start = randomInt(10, 40);
  }

  const seq = [];
  for (let i = 0; i < len; i++) {
    seq.push(start + i * step);
  }
  const answer = start + len * step;

  return {
    id: `seq-${Date.now()}-${Math.random()}`,
    type: 'sequence',
    seqString: seq.join(' , '),
    answer,
    question: `Trouve le nombre suivant : ${seq.join(' , ')} , ?`,
    hint: `On avance de ${step} en ${step} !`,
    options: generateSmartOptions(answer, 3, answer - 10, answer + 15)
  };
}

// 8. Petits Problèmes du quotidien avec Lilou et Tiago
function generateProblem(level) {
  const templates = [
    // Addition
    () => {
      let a = level <= 2 ? randomInt(2, 5) : level <= 4 ? randomInt(5, 18) : randomInt(15, 35);
      let b = level <= 2 ? randomInt(1, 4) : level <= 4 ? randomInt(4, 15) : randomInt(12, 30);
      const answer = a + b;
      const item = pickRandom(['étoiles dorées ⭐', 'bonbons aux fruits 🍬', 'belles fraises 🍓', 'billes magiques 🔮', 'autocollants 🎨']);
      return {
        story: `Lilou a ${a} ${item}. Tiago lui en offre ${b} de plus. Combien en a-t-elle maintenant en tout ?`,
        calc: `${a} + ${b}`,
        answer,
        emoji: '🎁',
        options: generateSmartOptions(answer, 3, answer - 6, answer + 8)
      };
    },
    // Soustraction
    () => {
      let a = level <= 2 ? randomInt(4, 8) : level <= 4 ? randomInt(10, 25) : randomInt(25, 50);
      let b = level <= 2 ? randomInt(1, a - 1) : level <= 4 ? randomInt(3, 10) : randomInt(10, 20);
      const answer = a - b;
      const item = pickRandom(['gâteaux au chocolat 🍪', 'ballons de baudruche 🎈', 'pommes rouges 🍎', 'billes 🔮']);
      return {
        story: `Tiago a ${a} ${item}. Il en donne ${b} à Lilou. Combien lui en reste-t-il dans sa boîte ?`,
        calc: `${a} - ${b}`,
        answer,
        emoji: '🧺',
        options: generateSmartOptions(answer, 3, Math.max(0, answer - 6), answer + 8)
      };
    },
    // Partage / Moitié ou multiplication simple
    () => {
      let part = level <= 2 ? randomInt(2, 4) : level <= 4 ? randomInt(4, 10) : randomInt(10, 25);
      const total = part * 2;
      return {
        story: `Lilou et Tiago ont ramassé ${total} cerises 🍒 ensemble. Ils se partagent la récolte en deux parts égales. Combien de cerises chacun reçoit-il ?`,
        calc: `${total} ÷ 2`,
        answer: part,
        emoji: '🍒',
        options: generateSmartOptions(part, 3, 1, part + 6)
      };
    }
  ];

  const chosenTemplate = pickRandom(templates)();
  return {
    id: `prob-${Date.now()}-${Math.random()}`,
    type: 'problem',
    ...chosenTemplate,
    question: chosenTemplate.story
  };
}

// Générateur universel pour le niveau et le thème demandé
export function generateExercise(level = 1, topicId = 'mixed') {
  let effectiveTopic = topicId;

  if (topicId === 'mixed') {
    const available = ['count', 'addition', 'subtraction', 'compare', 'doubles', 'complements', 'sequences', 'problems'];
    // For level 1, prioritize count, addition, subtraction, problem
    if (level === 1) {
      effectiveTopic = pickRandom(['count', 'addition', 'subtraction', 'problems']);
    } else {
      effectiveTopic = pickRandom(available);
    }
  }

  switch (effectiveTopic) {
    case 'count':
      return generateCount(level);
    case 'addition':
      return generateAddition(level);
    case 'subtraction':
      return generateSubtraction(level);
    case 'compare':
      return generateComparison(level);
    case 'doubles':
      return generateDoubles(level);
    case 'complements':
      return generateComplements(level);
    case 'sequences':
      return generateSequence(level);
    case 'problems':
      return generateProblem(level);
    default:
      return generateAddition(level);
  }
}
