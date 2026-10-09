import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  Volume2, 
  Sparkles, 
  CheckCircle, 
  RotateCcw, 
  Lightbulb, 
  Keyboard as KeyboardIcon,
  Play,
  SmilePlus,
  Trophy,
  Target
} from 'lucide-react';
import { checkWord, cleanWord } from '../data/dictionary';
import { DIFFICULTY_LEVELS } from '../data/words';
import { soundManager, getStarRewardSpeech, formatStarsRewardBadge } from '../utils/audio';
import VirtualKeyboard from './VirtualKeyboard';
import { FluentEmoji } from './FluentEmoji';

const LEVEL_CHALLENGES = {
  1: {
    title: "Mission Débutant",
    targetWords: 3,
    description: "Écris au moins 3 mots simples bien orthographiés (ex: le chat dort)"
  },
  2: {
    title: "Mission Phrase Complète",
    targetWords: 5,
    description: "Écris une jolie phrase complète d'au moins 5 mots avec une majuscule et un point !"
  },
  3: {
    title: "Mission Détective des Mots",
    targetWords: 8,
    description: "Écris une phrase avec un animal et une couleur (au moins 8 mots sans faute)"
  },
  4: {
    title: "Mission Mini-Écrivain",
    targetWords: 12,
    description: "Raconte une petite aventure en 2 phrases (au moins 12 mots bien écrits)"
  },
  5: {
    title: "Grand Défi du Maître",
    targetWords: 16,
    description: "Écris une histoire d'au moins 16 mots parfaits sans aucune erreur !"
  }
};

export default function ModeFreeWriting({ uppercase, onAddStar, difficultyLevel = 1 }) {
  const [text, setText] = useState('Le chat joue avec le ballon.');
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const textareaRef = useRef(null);

  const handleToggleKeyboard = () => {
    soundManager.playPop();
    const willShow = !showKeyboard;
    setShowKeyboard(willShow);
    if (!willShow) {
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.focus();
        }
      }, 60);
    } else {
      if (textareaRef.current) {
        textareaRef.current.blur();
      }
    }
  };

  const currentLevelConfig = DIFFICULTY_LEVELS.find(l => l.id === difficultyLevel) || DIFFICULTY_LEVELS[0];
  const challenge = LEVEL_CHALLENGES[difficultyLevel] || LEVEL_CHALLENGES[1];

  // Quick stickers to inspire children's creative sentences
  const quickStickers = [
    { label: 'chat', emoji: '🐱' },
    { label: 'chien', emoji: '🐶' },
    { label: 'pomme', emoji: '🍎' },
    { label: 'maison', emoji: '🏠' },
    { label: 'soleil', emoji: '☀️' },
    { label: 'vélo', emoji: '🚲' },
    { label: 'fleur', emoji: '🌸' },
    { label: 'gâteau', emoji: '🎂' }
  ];

  // Tokenize and analyze words
  const analyzeText = () => {
    const rawTokens = text.split(/(\s+)/);
    const results = [];
    let validCount = 0;
    let mistakeCount = 0;

    rawTokens.forEach((token) => {
      if (/^\s+$/.test(token) || !token) {
        results.push({ type: 'space', text: token });
      } else {
        const check = checkWord(token);
        if (check.empty || check.isNumber) {
          results.push({ type: 'neutral', text: token });
        } else if (check.valid) {
          validCount++;
          results.push({ type: 'valid', text: token, word: check.word });
        } else {
          mistakeCount++;
          results.push({
            type: 'mistake',
            text: token,
            raw: token,
            suggestion: check.suggestion
          });
        }
      }
    });

    const isChallengeMet = validCount >= challenge.targetWords && mistakeCount === 0;

    setAnalysis({ results, validCount, mistakeCount, isChallengeMet });
    return { results, validCount, mistakeCount, isChallengeMet };
  };

  const handleVerify = () => {
    soundManager.playPop();
    const res = analyzeText();

    if (res.isChallengeMet) {
      soundManager.playSuccess();
      onAddStar(currentLevelConfig.starsReward + 2); // Bonus for mission accomplished
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
      soundManager.speak(`Incroyable ! Tu as réussi la ${challenge.title.toLowerCase()} ! ${getStarRewardSpeech(currentLevelConfig.starsReward + 2)}`);
    } else if (res.validCount > 0 && res.mistakeCount === 0) {
      soundManager.playSuccess();
      onAddStar(currentLevelConfig.starsReward);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
      soundManager.speak("Bravo ! Tous tes mots sont bien écrits !");
    } else if (res.mistakeCount > 0) {
      soundManager.playTryAgain();
      soundManager.speak("Bravo pour ton texte ! Regarde les mots soulignés pour voir les suggestions.");
    } else {
      soundManager.speak("Écris quelques mots avant de vérifier !");
    }
  };

  const handleSpeakFull = () => {
    if (!text.trim()) {
      soundManager.speak("Ton ardoise est vide ! Écris quelque chose d'abord.");
      return;
    }
    soundManager.playPop();
    soundManager.speak(text, { rate: 0.85 });
  };

  const handleApplySuggestion = (rawToken, suggestion) => {
    if (!suggestion) return;
    soundManager.playTile();
    const regex = new RegExp(`\\b${rawToken}\\b`, 'i');
    const newText = text.replace(regex, uppercase ? suggestion.toUpperCase() : suggestion.toLowerCase());
    setText(newText);
    soundManager.speak(`Remplacé par ${suggestion}`);
    setTimeout(() => {
      const rawTokens = newText.split(/(\s+)/);
      const results = [];
      let validCount = 0;
      let mistakeCount = 0;
      rawTokens.forEach((t) => {
        if (/^\s+$/.test(t) || !t) {
          results.push({ type: 'space', text: t });
        } else {
          const check = checkWord(t);
          if (check.empty || check.isNumber) {
            results.push({ type: 'neutral', text: t });
          } else if (check.valid) {
            validCount++;
            results.push({ type: 'valid', text: t, word: check.word });
          } else {
            mistakeCount++;
            results.push({ type: 'mistake', text: t, raw: t, suggestion: check.suggestion });
          }
        }
      });
      const isChallengeMet = validCount >= challenge.targetWords && mistakeCount === 0;
      setAnalysis({ results, validCount, mistakeCount, isChallengeMet });
    }, 50);
  };

  const handleInsertWord = (word) => {
    soundManager.playPop();
    const formatted = uppercase ? word.toUpperCase() : word.toLowerCase();
    const trailingSpace = text.length > 0 && !text.endsWith(' ') ? ' ' : '';
    setText((prev) => prev + trailingSpace + formatted + ' ');
  };

  const formatText = (txt) => {
    return uppercase ? txt.toUpperCase() : txt.toLowerCase();
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      {/* Current Level Mission Box */}
      <div className="w-full bg-gradient-to-r from-amber-100 via-yellow-100 to-amber-200 border-2 border-amber-300 rounded-2xl p-3 sm:p-4 mb-4 flex items-center justify-between gap-3 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-400 text-amber-950 flex items-center justify-center text-xl shadow-inner shrink-0">
            🎯
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xs sm:text-sm text-amber-950 uppercase tracking-wide">
                {challenge.title}
              </span>
              <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${currentLevelConfig.badgeBg}`}>
                Niveau {currentLevelConfig.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-amber-800">
              {challenge.description}
            </p>
          </div>
        </div>

        <div className="hidden sm:flex flex-col items-end shrink-0">
          <span className="text-[11px] font-bold text-amber-700">Récompense</span>
          <span className="text-sm font-black text-amber-950">+{currentLevelConfig.starsReward + 2} ⭐</span>
        </div>
      </div>

      {/* Inspiration stickers */}
      <div className="w-full bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-3 mb-4 flex flex-wrap items-center justify-between gap-2 shadow-sm">
        <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-800">
          <SmilePlus className="w-4 h-4 text-emerald-600" />
          <span>Idées de mots à ajouter :</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {quickStickers.map((item) => (
            <button
              key={item.label}
              onClick={() => handleInsertWord(item.label)}
              className="px-2.5 py-1 bg-white hover:bg-emerald-100 border border-emerald-300 text-emerald-950 font-semibold rounded-xl text-xs sm:text-sm shadow-xs transition-all flex items-center gap-1 cursor-pointer active:scale-95"
            >
              <FluentEmoji emoji={item.emoji} alt={item.label} className="w-5 h-5 shrink-0" />
              <span>{formatText(item.label)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Notebook writing card */}
      <div className="w-full bg-white rounded-3xl p-3.5 sm:p-8 shadow-xl border-4 border-emerald-200 flex flex-col relative">
        <div className="flex items-center justify-between mb-2 border-b-2 border-slate-100 pb-2 flex-wrap gap-1">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📝</span>
            <h2 className="text-base sm:text-xl font-bold text-emerald-900">
              L'Ardoise Magique
            </h2>
          </div>
          <span className="text-xs sm:text-sm text-slate-500 font-medium">
            Écris une phrase ou une histoire !
          </span>
        </div>

        {/* Keyboard mode toggle pill */}
        <div className="w-full flex items-center justify-between px-1 mb-1.5 text-[11px] sm:text-xs text-slate-500">
          <span className="font-semibold flex items-center gap-1">
            {showKeyboard ? "⌨️ Clavier virtuel actif" : "📱 Clavier téléphone actif"}
          </span>
          <button
            type="button"
            onClick={handleToggleKeyboard}
            className="font-bold text-emerald-700 hover:text-emerald-900 underline cursor-pointer"
          >
            {showKeyboard ? "Passer au clavier téléphone 📱" : "Afficher le clavier virtuel ⌨️"}
          </button>
        </div>

        {/* Notebook Ruled Textarea */}
        <div className="relative w-full rounded-2xl border-2 border-slate-300 bg-[linear-gradient(#f8fafc_1px,transparent_1px)] bg-[size:100%_2.25rem] sm:bg-[size:100%_2.5rem] p-3 sm:p-4 shadow-inner">
          <textarea
            ref={textareaRef}
            inputMode={showKeyboard ? "none" : "text"}
            value={formatText(text)}
            onChange={(e) => {
              setText(e.target.value);
              setAnalysis(null);
            }}
            placeholder={formatText("Écris ce que tu veux ici...")}
            rows={4}
            className="w-full bg-transparent text-lg sm:text-2xl font-bold text-slate-800 leading-[2.25rem] sm:leading-[2.5rem] resize-none focus:outline-none border-none tracking-wide"
          />
        </div>

        {/* Action Buttons Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-2 mt-3">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleSpeakFull}
              className="btn-3d flex items-center gap-1.5 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white font-extrabold px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-base cursor-pointer shadow-md"
            >
              <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
              <span>Lire à voix haute</span>
            </button>

            <button
              onClick={handleVerify}
              className="btn-3d flex items-center gap-1.5 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-extrabold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-base cursor-pointer shadow-md"
            >
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Vérifier mon texte</span>
            </button>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => {
                soundManager.playPop();
                setText('');
                setAnalysis(null);
              }}
              title="Effacer tout le texte"
              className="p-2 sm:p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl border border-slate-300 transition-all cursor-pointer shrink-0"
            >
              <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              onClick={handleToggleKeyboard}
              title={showKeyboard ? "Cacher le clavier virtuel et utiliser le clavier du téléphone" : "Afficher le clavier virtuel"}
              className={`p-2 sm:p-2.5 rounded-xl border transition-all cursor-pointer shrink-0 ${
                showKeyboard 
                  ? 'bg-emerald-100 text-emerald-800 border-emerald-300 shadow-xs' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600 border-slate-300'
              }`}
            >
              <KeyboardIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Verification Analysis Box */}
        {analysis && (
          <div className="mt-5 p-4 bg-slate-50 border-2 border-emerald-300 rounded-2xl flex flex-col gap-3 animate-pop">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="font-extrabold text-sm sm:text-base text-emerald-900 flex items-center gap-1.5">
                <Sparkles className="w-5 h-5 text-amber-500" />
                Résultat de la vérification :
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-600">
                {analysis.validCount} mot(s) correct(s)
                {analysis.mistakeCount > 0 && ` • ${analysis.mistakeCount} à vérifier`}
              </span>
            </div>

            {/* Mission banner */}
            {analysis.isChallengeMet && (
              <div className="bg-amber-100 border-2 border-amber-400 text-amber-950 p-2.5 rounded-xl font-black text-sm flex items-center gap-2 animate-bounce-gentle">
                <Trophy className="w-6 h-6 text-amber-600 shrink-0" />
                <span>🏆 Félicitations ! Tu as accompli la {challenge.title.toLowerCase()} ! Bonus {formatStarsRewardBadge(currentLevelConfig.starsReward + 2)} ! ⭐</span>
              </div>
            )}

            {/* Visual Word Badges */}
            <div className="flex flex-wrap items-center gap-1.5 p-3 bg-white rounded-xl border border-slate-200 text-lg sm:text-xl font-bold">
              {analysis.results.map((token, idx) => {
                if (token.type === 'space') {
                  return <span key={idx}> </span>;
                }
                if (token.type === 'valid') {
                  return (
                    <span 
                      key={idx}
                      onClick={() => soundManager.speak(token.text)}
                      title="Mot reconnu ! Clique pour écouter"
                      className="px-2 py-0.5 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-300 cursor-pointer hover:bg-emerald-200 transition-colors"
                    >
                      {token.text}
                    </span>
                  );
                }
                if (token.type === 'mistake') {
                  return (
                    <span 
                      key={idx}
                      className="px-2 py-0.5 rounded-lg bg-amber-100 text-amber-900 border-2 border-amber-400 border-dashed"
                    >
                      {token.text}
                    </span>
                  );
                }
                return <span key={idx}>{token.text}</span>;
              })}
            </div>

            {/* Suggestions list */}
            {analysis.mistakeCount > 0 && (
              <div className="flex flex-col gap-1.5 mt-1">
                <span className="text-xs sm:text-sm font-bold text-amber-800 flex items-center gap-1">
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  Suggestions d'aide (clique sur un mot pour corriger) :
                </span>
                <div className="flex flex-wrap gap-2">
                  {analysis.results
                    .filter(t => t.type === 'mistake' && t.suggestion)
                    .map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleApplySuggestion(item.raw, item.suggestion)}
                        className="px-3 py-1 bg-amber-200 hover:bg-amber-300 text-amber-950 font-bold rounded-xl text-sm border border-amber-400 cursor-pointer transition-all flex items-center gap-1"
                      >
                        <span className="line-through text-amber-700 text-xs">{item.raw}</span>
                        <span>➔</span>
                        <span className="text-emerald-800 font-extrabold">{formatText(item.suggestion)}</span>
                      </button>
                    ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {showKeyboard && (
        <VirtualKeyboard
          onKeyPress={(char) => setText(prev => prev + char)}
          onBackspace={() => setText(prev => prev.slice(0, -1))}
          onSpace={() => setText(prev => prev + ' ')}
          uppercase={uppercase}
        />
      )}
    </div>
  );
}
