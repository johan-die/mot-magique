// Dictionnaire français enrichi pour enfants (CP / CE1 / CE2)
// Mots fréquents, noms, adjectifs, petits mots grammaticaux et verbes courants
import { WORDS } from './words';

export const COMMON_FRENCH_WORDS = new Set([
  // Petits mots outils (fondamentaux CP)
  'un', 'une', 'des', 'le', 'la', 'les', 'l', 'd', 'de', 'du', 'au', 'aux',
  'ce', 'cet', 'cette', 'ces', 'mon', 'ma', 'mes', 'ton', 'ta', 'tes', 'son', 'sa', 'ses',
  'notre', 'nos', 'votre', 'vos', 'leur', 'leurs',
  'je', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles',
  'me', 'te', 'se', 'lui', 'leur', 'y', 'en', 'moi', 'toi',
  'et', 'ou', 'mais', 'donc', 'or', 'ni', 'car', 'que', 'qui', 'quoi', 'dont', 'où', 'quand', 'comment', 'pourquoi',
  'dans', 'sur', 'sous', 'avec', 'sans', 'pour', 'par', 'chez', 'vers', 'avant', 'après', 'pendant',
  'ici', 'là', 'très', 'trop', 'bien', 'mal', 'plus', 'moins', 'aussi', 'encore', 'toujours', 'jamais',
  'oui', 'non', 'merci', 'bonjour', 'bonsoir', 'salut', 'au revoir', 'pardon', 's\'il vous plaît', 's\'il te plaît',
  'est', 'sont', 'a', 'ont', 'va', 'vont', 'fait', 'font', 'dit', 'dis', 'peut', 'veut', 'aime', 'aiment',
  'comme', 'tout', 'tous', 'toute', 'toutes', 'autre', 'autres', 'même', 'rien', 'quelque',

  // Verbes conjugués fréquents (présent)
  'suis', 'es', 'est', 'sommes', 'êtes', 'sont', 'étais', 'était', 'été', 'serai', 'sera',
  'ai', 'as', 'a', 'avons', 'avez', 'ont', 'avais', 'avait', 'eu', 'aurai', 'aura',
  'vais', 'vas', 'va', 'allons', 'allez', 'vont', 'allé', 'allée', 'aller',
  'fais', 'fait', 'faisons', 'faites', 'font', 'faire',
  'dis', 'dit', 'disons', 'dites', 'disent', 'dire',
  'vois', 'voit', 'voyons', 'voyez', 'voient', 'voir', 'vu',
  'mange', 'manges', 'mangeons', 'mangez', 'mangent', 'mangé', 'manger',
  'joue', 'joues', 'jouons', 'jouez', 'jouent', 'joué', 'jouer',
  'aime', 'aimes', 'aimons', 'aimez', 'aiment', 'aimé', 'aimer',
  'écris', 'écrit', 'écrivons', 'écrivez', 'écrivent', 'écrire',
  'lis', 'lit', 'lisons', 'lisez', 'lisent', 'lire',
  'dors', 'dort', 'dormons', 'dormez', 'dorment', 'dormir',
  'cours', 'court', 'courons', 'courez', 'courent', 'courir',
  'marche', 'marches', 'marchons', 'marchez', 'marchent', 'marcher',
  'donne', 'donnes', 'donnons', 'donnez', 'donnent', 'donner',
  'prends', 'prend', 'prenons', 'prenez', 'prennent', 'prendre',
  'mets', 'met', 'mettons', 'mettez', 'mettent', 'mettre',
  'parle', 'parles', 'parlons', 'parlez', 'parlent', 'parler',
  'regarde', 'regardes', 'regardons', 'regardez', 'regardent', 'regarder',
  'écoute', 'écoutes', 'écoutons', 'écoutez', 'écoutent', 'écouter',
  'chante', 'chantes', 'chantons', 'chantez', 'chantent', 'chanter',
  'dessine', 'dessines', 'dessinons', 'dessinez', 'dessinent', 'dessiner',

  // Nombres en lettres
  'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix',
  'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'vingt', 'trente', 'quarante', 'cinquante', 'cent',

  // Couleurs
  'rouge', 'bleu', 'bleue', 'bleus', 'bleues', 'vert', 'verte', 'verts', 'vertes',
  'jaune', 'jaunes', 'noir', 'noire', 'noirs', 'noires', 'blanc', 'blanche', 'blancs', 'blanches',
  'rose', 'roses', 'orange', 'violet', 'violette', 'marron', 'gris', 'grise',

  // Animaux
  'chat', 'chats', 'chatte', 'chatton', 'chien', 'chiens', 'chienne', 'chiot',
  'cheval', 'chevaux', 'poney', 'âne', 'vache', 'vaches', 'veau', 'taureau',
  'mouton', 'moutons', 'brebis', 'agneau', 'chèvre', 'cochon', 'cochons',
  'poule', 'poules', 'poussin', 'poussins', 'coq', 'canard', 'canards', 'oie',
  'lapin', 'lapins', 'lapine', 'souris', 'rat', 'écureuil', 'hérisson',
  'oiseau', 'oiseaux', 'pigeon', 'moineau', 'corbeau', 'hibou', 'chouette',
  'poisson', 'poissons', 'requin', 'baleine', 'dauphin', 'dauphins', 'tortue', 'tortues',
  'grenouille', 'grenouilles', 'crapaud', 'serpent', 'lézard', 'crocodile',
  'lion', 'lions', 'lionne', 'tigre', 'tigres', 'panthère', 'léopard', 'guépard',
  'ours', 'ourson', 'loup', 'loups', 'louve', 'renard', 'renards',
  'éléphant', 'éléphants', 'girafe', 'girafes', 'singe', 'singes', 'zèbre', 'zèbres',
  'hippopotame', 'rhinocéros', 'chameau', 'dromadaire', 'panda', 'koala', 'kangourou',
  'abeille', 'abeilles', 'papillon', 'papillons', 'fourmi', 'fourmis', 'araignée', 'mouche', 'coccinelle',

  // Aliments & Boissons
  'pomme', 'pommes', 'poire', 'poires', 'banane', 'bananes', 'orange', 'oranges',
  'fraise', 'fraises', 'framboise', 'cerise', 'cerises', 'raisin', 'raisins', 'citron', 'citrons',
  'abricot', 'pêche', 'prune', 'ananas', 'melon', 'pastèque', 'kiwi',
  'carotte', 'carottes', 'tomate', 'tomates', 'salade', 'pomme de terre', 'patate', 'haricot', 'petit pois',
  'pain', 'baguette', 'croissant', 'brioche', 'biscuit', 'biscuits', 'gâteau', 'gâteaux',
  'bonbon', 'bonbons', 'chocolat', 'chocolats', 'glace', 'glaces', 'sucre', 'miel', 'confiture',
  'lait', 'eau', 'jus', 'sirop', 'soupe', 'beurre', 'fromage', 'œuf', 'œufs', 'viande', 'poulet', 'poisson',
  'pâtes', 'riz', 'pizza', 'frites', 'crêpe', 'crêpes',

  // Famille & Personnes
  'papa', 'maman', 'père', 'mère', 'parent', 'parents', 'bébé', 'bébés',
  'frère', 'frères', 'sœur', 'sœurs', 'famille',
  'enfant', 'enfants', 'fille', 'filles', 'fils', 'garçon', 'garçons',
  'papi', 'mamie', 'grand-père', 'grand-mère', 'oncle', 'tante', 'cousin', 'cousine',
  'ami', 'amis', 'amie', 'amies', 'copain', 'copains', 'copine', 'copines',
  'maître', 'maîtresse', 'docteur', 'maître', 'dame', 'monsieur',

  // École & Objets du quotidien
  'école', 'classe', 'cahier', 'cahiers', 'livre', 'livres', 'stylo', 'stylos',
  'crayon', 'crayons', 'feutre', 'feutres', 'gomme', 'gommes', 'règle', 'règles',
  'trousse', 'cartable', 'sac', 'ciseaux', 'colle', 'feuille', 'feuilles', 'dessin', 'dessins',
  'tableau', 'craie', 'lettre', 'lettres', 'mot', 'mots', 'phrase', 'phrases', 'histoire', 'histoires',
  'jeu', 'jeux', 'jouet', 'jouets', 'poupée', 'poupées', 'ballon', 'ballons', 'balle', 'balles',
  'vélo', 'vélos', 'trottinette', 'patins', 'corde', 'balançoire',

  // Maison & Mobilier
  'maison', 'maisons', 'chambre', 'cuisine', 'salon', 'jardin', 'garage',
  'lit', 'lits', 'table', 'tables', 'chaise', 'chaises', 'porte', 'portes', 'fenêtre', 'fenêtres',
  'armoire', 'tiroir', 'lampe', 'tapis', 'rideau', 'assiette', 'verre', 'fourchette', 'cuillère', 'couteau',

  // Nature, Temps & Météo
  'soleil', 'lune', 'étoile', 'étoiles', 'ciel', 'nuage', 'nuages', 'pluie', 'neige', 'vent', 'orage', 'arc-en-ciel',
  'jour', 'nuit', 'matin', 'midi', 'soir', 'heure', 'temps',
  'arbre', 'arbres', 'fleur', 'fleurs', 'herbe', 'forêt', 'bois', 'feuille', 'feuilles',
  'montagne', 'montagnes', 'mer', 'plage', 'sable', 'vague', 'vagues', 'rivière', 'lac', 'terre',

  // Transports
  'voiture', 'voitures', 'auto', 'camion', 'camions', 'bus', 'train', 'trains',
  'avion', 'avions', 'hélicoptère', 'fusée', 'fusées', 'bateau', 'bateaux', 'navire', 'moto'
]);

// Intégrer automatiquement tous les mots de la grande banque WORDS
WORDS.forEach(w => {
  if (w && w.word) {
    const clean = w.word.toLowerCase().trim();
    COMMON_FRENCH_WORDS.add(clean);
    // Ajouter aussi sans tiret si mot composé
    if (clean.includes('-')) {
      clean.split('-').forEach(part => COMMON_FRENCH_WORDS.add(part));
    }
  }
});

// Remplacements phonétiques fréquents des enfants de CP/CE1
const PHONETIC_MAP = {
  'bato': 'bateau',
  'foto': 'photo',
  'shat': 'chat',
  'chien': 'chien',
  'chen': 'chien',
  'chval': 'cheval',
  'shval': 'cheval',
  'pome': 'pomme',
  'livr': 'livre',
  'mezon': 'maison',
  'gardin': 'jardin',
  'solay': 'soleil',
  'soley': 'soleil',
  'étoil': 'étoile',
  'etoile': 'étoile',
  'papion': 'papillon',
  'torti': 'tortue',
  'garson': 'garçon',
  'fil': 'fille',
  'mamn': 'maman',
  'pp': 'papa',
  'kado': 'cadeau',
  'choko': 'chocolat',
  'chokola': 'chocolat',
  'vélot': 'vélo',
  'train': 'train',
  'trin': 'train',
  'glace': 'glace',
  'glass': 'glace',
  'tabl': 'table'
};

// Distance de Levenshtein simple pour trouver le mot le plus proche
function levenshtein(a, b) {
  const an = a ? a.length : 0;
  const bn = b ? b.length : 0;
  if (an === 0) return bn;
  if (bn === 0) return an;
  const matrix = new Array(bn + 1);
  for (let i = 0; i <= bn; ++i) {
    let row = (matrix[i] = new Array(an + 1));
    row[0] = i;
  }
  const firstRow = matrix[0];
  for (let j = 1; j <= an; ++j) {
    firstRow[j] = j;
  }
  for (let i = 1; i <= bn; ++i) {
    for (let j = 1; j <= an; ++j) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }
  return matrix[bn][an];
}

// Nettoyer un mot (ponctuation, majuscules)
export function cleanWord(rawWord) {
  if (!rawWord) return '';
  return rawWord
    .toLowerCase()
    .replace(/^[.,;:!?'"«»()]+|[.,;:!?'"«»()]+$/g, '')
    .trim();
}

// Vérifier un mot individuel
export function checkWord(rawWord) {
  const word = cleanWord(rawWord);
  if (!word || word.length === 0) return { valid: true, empty: true };

  // Si c'est un chiffre
  if (!isNaN(word)) return { valid: true, isNumber: true };

  // Vérifier présence exacte dans le dictionnaire
  if (COMMON_FRENCH_WORDS.has(word)) {
    return { valid: true, word };
  }

  // Vérifier les variantes sans apostrophe (ex: l'arbre -> arbre)
  if (word.startsWith("l'") || word.startsWith("d'") || word.startsWith("j'") || word.startsWith("c'") || word.startsWith("m'") || word.startsWith("t'") || word.startsWith("s'") || word.startsWith("n'")) {
    const subWord = word.slice(2);
    if (COMMON_FRENCH_WORDS.has(subWord)) {
      return { valid: true, word };
    }
  }

  // Recherche dans les erreurs phonétiques typiques
  if (PHONETIC_MAP[word]) {
    return {
      valid: false,
      word,
      suggestion: PHONETIC_MAP[word],
      reason: 'phonetic'
    };
  }

  // Chercher une suggestion par distance de Levenshtein
  let bestSuggestion = null;
  let minDistance = 3;

  for (const dictWord of COMMON_FRENCH_WORDS) {
    if (Math.abs(dictWord.length - word.length) > 2) continue;
    const dist = levenshtein(word, dictWord);
    if (dist < minDistance) {
      minDistance = dist;
      bestSuggestion = dictWord;
      if (dist === 1) break;
    }
  }

  return {
    valid: false,
    word,
    suggestion: bestSuggestion,
    reason: 'unknown'
  };
}
