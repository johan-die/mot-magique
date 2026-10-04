// Profils utilisateurs en dur : Lilou & Tiago
// Thèmes visuels personnalisés (couleurs, bordures, icônes) et gestion des étoiles

export const PROFILES = {
  lilou: {
    id: 'lilou',
    name: 'Lilou',
    avatar: '👧',
    title: 'Princesse des Mots',
    themeName: 'rose-pastel',
    // Thème interface fille (roses, violets doux, touches dorées)
    theme: {
      id: 'lilou',
      bgGradient: 'from-pink-50 via-rose-50 to-purple-50',
      headerBorder: 'border-pink-300',
      headerBg: 'bg-white/95',
      primaryBtn: 'from-pink-400 to-rose-500 hover:from-pink-500 hover:to-rose-600',
      primaryText: 'text-rose-900',
      primaryLight: 'bg-rose-100 text-rose-800 border-rose-300',
      cardBorder: 'border-pink-200',
      cardGlow: 'shadow-pink-100',
      accentColor: '#f43f5e',
      decorations: ['🌸', '✨', '💖', '🦄', '🎀']
    }
  },
  tiago: {
    id: 'tiago',
    name: 'Tiago',
    avatar: '👦',
    title: 'Capitaine Explorateur',
    themeName: 'bleu-aventure',
    // Thème interface garçon (bleu aventure, cyan, touches dynamiques)
    theme: {
      id: 'tiago',
      bgGradient: 'from-sky-50 via-blue-50 to-indigo-50',
      headerBorder: 'border-sky-300',
      headerBg: 'bg-white/95',
      primaryBtn: 'from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700',
      primaryText: 'text-sky-950',
      primaryLight: 'bg-sky-100 text-sky-800 border-sky-300',
      cardBorder: 'border-sky-200',
      cardGlow: 'shadow-sky-100',
      accentColor: '#0284c7',
      decorations: ['🚀', '⚡', '⭐', '🦕', '⚽']
    }
  },
  elyo: {
    id: 'elyo',
    name: 'Elyo',
    avatar: '🧒',
    title: 'Petit Champion',
    themeName: 'emeraude-nature',
    // Thème interface émeraude / menthe (vert vif, turquoise doux, touches lumineuses)
    theme: {
      id: 'elyo',
      bgGradient: 'from-emerald-50 via-teal-50 to-green-50',
      headerBorder: 'border-emerald-300',
      headerBg: 'bg-white/95',
      primaryBtn: 'from-emerald-400 to-teal-600 hover:from-emerald-500 hover:to-teal-700',
      primaryText: 'text-emerald-950',
      primaryLight: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      cardBorder: 'border-emerald-200',
      cardGlow: 'shadow-emerald-100',
      accentColor: '#10b981',
      decorations: ['🌱', '🌟', '🦁', '🛸', '🎯']
    }
  }
};
