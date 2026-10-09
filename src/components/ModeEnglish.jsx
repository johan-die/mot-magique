import React, { useState, useEffect, useMemo, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { 
  Volume2, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw, 
  Dices, 
  Lightbulb, 
  Keyboard as KeyboardIcon,
  Headphones,
  BookOpen
} from 'lucide-react';
import { ENGLISH_WORDS, ENGLISH_CATEGORIES } from '../data/englishWords';
import { DIFFICULTY_LEVELS } from '../data/words';
import { soundManager, formatStarsRewardBadge } from '../utils/audio';
import { FluentEmoji } from './FluentEmoji';
import VirtualKeyboard from './VirtualKeyboard';

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function ModeEnglish({ uppercase, onAddStar, theme, difficultyLevel = 1 }) {
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [gameSubMode, setGameSubMode] = useState('quiz'); // 'quiz' (Écoute & Trouve) | 'spell' (Écris le mot)
  const [wordIndex, setWordIndex] = useState(0);
  const [status, setStatus] = useState('idle'); // 'idle' | 'success' | 'retry'
  const [userInput, setUserInput] = useState('');
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState(null);
  const [hintShown, setHintShown] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(true);

  const currentLevelConfig = DIFFICULTY_LEVELS.find(l => l.id === difficultyLevel) || DIFFICULTY_LEVELS[0];

  // Filtrer les mots selon la catégorie et le niveau
  const availableWords = useMemo(() => {
    let list = ENGLISH_WORDS.filter(w => {
      const matchCat = selectedCategory === 'tous' || w.category === selectedCategory;
      const matchLevel = w.level === difficultyLevel;
      return matchCat && matchLevel;
    });

    // Repli si aucun mot pour cette combinaison exacte
    if (list.length === 0) {
      list = ENGLISH_WORDS.filter(w => selectedCategory === 'tous' || w.category === selectedCategory);
    }
    if (list.length === 0) {
      list = ENGLISH_WORDS;
    }
    return list;
  }, [selectedCategory, difficultyLevel]);

  const currentWord = availableWords[wordIndex % availableWords.length] || ENGLISH_WORDS[0];

  // Options du quiz (1 bonne réponse + 3 distracteurs)
  const quizOptions = useMemo(() => {
    if (!currentWord) return [];
    const others = shuffle(ENGLISH_WORDS.filter(w => w.id !== currentWord.id)).slice(0, 3);
    return shuffle([currentWord, ...others]);
  }, [currentWord]);

  // Réinitialiser l'état lors d'un changement de mot
  useEffect(() => {
    setUserInput('');
    setStatus('idle');
    setSelectedQuizAnswer(null);
    setHintShown(false);
  }, [wordIndex, selectedCategory, difficultyLevel, gameSubMode]);

  // Prononcer le mot anglais
  const speakEnglish = useCallback((wordToSpeak = currentWord.wordEn) => {
    soundManager.cancel();
    soundManager.speak(wordToSpeak, { lang: 'en-US', rate: 0.8 });
  }, [currentWord]);

  // Prononcer le mot français
  const speakFrench = useCallback(() => {
    soundManager.cancel();
    soundManager.speak(`En français : ${currentWord.wordFr}`, { lang: 'fr-FR', rate: 0.85 });
  }, [currentWord]);

  // Prononcer automatiquement en entrant sur un nouveau mot en mode Quiz
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentWord && gameSubMode === 'quiz') {
        speakEnglish();
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [currentWord, gameSubMode, speakEnglish]);

  // Gestion du choix en mode Quiz
  const handleSelectQuizOption = (option) => {
    if (status === 'success') return;
    soundManager.playPop();
    setSelectedQuizAnswer(option.id);

    if (option.id === currentWord.id) {
      setStatus('success');
      soundManager.playStar();
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
      speakEnglish();
      if (onAddStar) {
        onAddStar(currentLevelConfig.starsReward || 1);
      }
    } else {
      setStatus('retry');
      soundManager.playError();
      setTimeout(() => {
        setStatus('idle');
        setSelectedQuizAnswer(null);
      }, 1000);
    }
  };

  // Gestion de la saisie en mode Écriture (Spell)
  const handleKeyPress = (char) => {
    if (status === 'success') return;
    soundManager.playPop();

    const target = currentWord.wordEn.toLowerCase();
    const nextInput = (userInput + char).toLowerCase();

    if (nextInput.length <= target.length) {
      setUserInput(nextInput);

      if (nextInput === target) {
        setStatus('success');
        soundManager.playStar();
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 }
        });
        speakEnglish();
        if (onAddStar) {
          onAddStar(currentLevelConfig.starsReward || 1);
        }
      } else if (nextInput.length === target.length) {
        setStatus('retry');
        soundManager.playError();
        setTimeout(() => {
          setStatus('idle');
          setUserInput('');
        }, 1200);
      }
    }
  };

  const handleDelete = () => {
    if (userInput.length > 0) {
      soundManager.playPop();
      setUserInput(userInput.slice(0, -1));
      setStatus('idle');
    }
  };

  // Passer au mot suivant
  const handleNextWord = () => {
    soundManager.playPop();
    setWordIndex(prev => (prev + 1) % availableWords.length);
  };

  // Mot aléatoire
  const handleRandomWord = () => {
    soundManager.playPop();
    const randomIndex = Math.floor(Math.random() * availableWords.length);
    setWordIndex(randomIndex);
  };

  const formatText = (txt) => {
    if (!txt) return '';
    return uppercase ? txt.toUpperCase() : txt.toLowerCase();
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
      {/* 1. Barres de contrôles supérieures */}
      <div className="w-full flex flex-col gap-2.5 mb-3">
        {/* Choix du sous-mode : Quiz Audio vs Écriture */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 bg-white p-1 rounded-2xl shadow-xs border border-indigo-200">
            <button
              onClick={() => {
                soundManager.playPop();
                setGameSubMode('quiz');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                gameSubMode === 'quiz'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Headphones className="w-4 h-4" />
              <span>Écoute & Trouve</span>
            </button>
            <button
              onClick={() => {
                soundManager.playPop();
                setGameSubMode('spell');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                gameSubMode === 'spell'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <KeyboardIcon className="w-4 h-4" />
              <span>Écris le mot</span>
            </button>
          </div>

          {/* Badge Niveau et Bouton Aléatoire */}
          <div className="flex items-center gap-2">
            <div className={`px-2.5 py-1 rounded-xl text-xs font-black border flex items-center gap-1 ${currentLevelConfig.badgeBg}`}>
              <span>{currentLevelConfig.emoji}</span>
              <span>{currentLevelConfig.name}</span>
            </div>
            <button
              onClick={handleRandomWord}
              title="Mot aléatoire"
              className="p-1.5 bg-white hover:bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <Dices className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filtre par catégorie */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full scrollbar-none">
          {ENGLISH_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  soundManager.playPop();
                  setSelectedCategory(cat.id);
                  setWordIndex(0);
                }}
                className={`px-2.5 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1 select-none shrink-0 ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-xs ring-2 ring-indigo-300'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Carte Principale de Jeu */}
      <div className={`w-full bg-white rounded-3xl p-4 sm:p-7 shadow-xl border-4 ${theme?.cardBorder || 'border-indigo-200'} flex flex-col items-center relative overflow-hidden`}>
        
        {/* Titre et Audio */}
        <div className="flex items-center justify-between w-full border-b pb-3 mb-3 border-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🇬🇧</span>
            <div>
              <h2 className="text-base sm:text-lg font-black text-indigo-950">
                English Club
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-500 font-semibold">
                {gameSubMode === 'quiz' ? 'Écoute la prononciation anglaise et choisis la bonne image !' : 'Regarde l\'image et écris le mot en anglais !'}
              </p>
            </div>
          </div>

          {/* Bouton de prononciation rapide */}
          <button
            onClick={() => speakEnglish()}
            className="btn-3d flex items-center gap-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-extrabold px-3 py-1.5 rounded-xl text-xs cursor-pointer shadow-sm active:scale-95"
          >
            <Volume2 className="w-4 h-4 animate-pulse" />
            <span>Écoute en anglais</span>
          </button>
        </div>

        {/* --- SOUS-MODE 1 : QUIZ ÉCOUTE & TROUVE --- */}
        {gameSubMode === 'quiz' && (
          <div className="w-full flex flex-col items-center my-2">
            {/* Grand bouton sonore pour réécouter */}
            <div className="my-3 flex flex-col items-center">
              <button
                onClick={() => speakEnglish()}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white flex flex-col items-center justify-center shadow-lg transform transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Volume2 className="w-8 h-8 sm:w-10 sm:h-10 animate-bounce-gentle" />
                <span className="text-[10px] font-black uppercase mt-1">Réécouter</span>
              </button>
              <span className="text-xs font-bold text-indigo-900 mt-2 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                Trouve le mot prononcé en anglais !
              </span>
            </div>

            {/* Grille des 4 options illustrées */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-lg my-3">
              {quizOptions.map((opt) => {
                const isSelected = selectedQuizAnswer === opt.id;
                const isCorrect = status === 'success' && opt.id === currentWord.id;
                const isWrong = isSelected && status === 'retry';

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectQuizOption(opt)}
                    className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl border-3 transition-all cursor-pointer transform hover:scale-102 active:scale-95 shadow-sm ${
                      isCorrect
                        ? 'bg-emerald-50 border-emerald-400 ring-4 ring-emerald-200 scale-102'
                        : isWrong
                        ? 'bg-rose-50 border-rose-400 animate-shake'
                        : 'bg-slate-50 hover:bg-indigo-50/50 border-slate-200'
                    }`}
                  >
                    <FluentEmoji
                      emoji={opt.emoji}
                      alt={opt.wordEn}
                      className="w-14 h-14 sm:w-16 sm:h-16 filter drop-shadow-sm select-none mb-1.5"
                    />
                    <span className="text-sm sm:text-base font-black text-slate-800 uppercase tracking-wide">
                      {formatText(opt.wordEn)}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      ({opt.wordFr})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* --- SOUS-MODE 2 : ÉCRIS LE MOT (SPELL) --- */}
        {gameSubMode === 'spell' && (
          <div className="w-full flex flex-col items-center my-2">
            {/* Illustration Fluent Emoji */}
            <div
              className="my-2 w-28 h-28 sm:w-36 sm:h-36 rounded-3xl flex items-center justify-center shadow-inner border-4 border-dashed border-indigo-300 relative transition-transform hover:scale-105 shrink-0"
              style={{ backgroundColor: currentWord.color || '#f0f9ff' }}
            >
              <FluentEmoji
                emoji={currentWord.emoji}
                alt={currentWord.wordEn}
                className="w-20 h-20 sm:w-24 sm:h-24 filter drop-shadow-md select-none animate-pop"
              />
            </div>

            {/* Traduction française et Phonétique */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
              <span className="text-xs sm:text-sm font-black text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                En français : <strong className="text-indigo-900">{currentWord.wordFr}</strong>
              </span>
              {currentWord.phonetic && (
                <span className="text-[11px] font-mono text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                  {currentWord.phonetic}
                </span>
              )}
            </div>

            {/* Boutons d'écoute */}
            <div className="flex items-center gap-2 mb-3">
              <button
                onClick={() => speakEnglish()}
                className="btn-3d flex items-center gap-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-extrabold px-3 py-1.5 rounded-xl text-xs cursor-pointer shadow-sm"
              >
                <Volume2 className="w-4 h-4 animate-pulse" />
                <span>🇬🇧 Écoute en anglais</span>
              </button>
              <button
                onClick={speakFrench}
                className="flex items-center gap-1 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 px-2.5 py-1.5 rounded-xl border border-slate-200 cursor-pointer"
              >
                <span>🇫🇷 Français</span>
              </button>
              <button
                onClick={() => setHintShown(true)}
                title="Afficher la première lettre"
                className="flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-100 hover:bg-amber-200 px-2.5 py-1.5 rounded-xl border border-amber-300 cursor-pointer"
              >
                <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                <span>Indice</span>
              </button>
            </div>

            {/* Cases de lettres pour le mot anglais */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 my-2">
              {currentWord.wordEn.split('').map((char, index) => {
                const enteredChar = userInput[index] || '';
                const isHint = hintShown && index === 0 && !enteredChar;

                return (
                  <div
                    key={index}
                    className={`w-10 h-13 sm:w-12 sm:h-16 rounded-2xl flex items-center justify-center text-xl sm:text-2xl font-black transition-all border-3 ${
                      enteredChar
                        ? status === 'success'
                          ? 'bg-emerald-100 border-emerald-400 text-emerald-950 scale-105'
                          : status === 'retry'
                          ? 'bg-rose-100 border-rose-400 text-rose-950'
                          : 'bg-indigo-50 border-indigo-400 text-indigo-950 shadow-md'
                        : isHint
                        ? 'bg-amber-50 border-dashed border-amber-300 text-amber-600'
                        : 'bg-slate-50 border-dashed border-slate-300 text-transparent'
                    }`}
                  >
                    {enteredChar
                      ? formatText(enteredChar)
                      : isHint
                      ? formatText(char)
                      : '_'}
                  </div>
                );
              })}
            </div>

            {/* Clavier virtuel pour l'écriture */}
            {showKeyboard && status !== 'success' && (
              <div className="w-full max-w-md my-2">
                <VirtualKeyboard
                  onKeyPress={handleKeyPress}
                  onDelete={handleDelete}
                  uppercase={uppercase}
                />
              </div>
            )}
          </div>
        )}

        {/* 3. Écran de Victoire / Mot Suivant */}
        {status === 'success' && (
          <div className="mt-4 flex flex-col items-center gap-2 animate-pop">
            <div className="flex items-center gap-2 text-emerald-700 font-black text-sm sm:text-base">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Well done ! {formatStarsRewardBadge(currentLevelConfig.starsReward)} ! ⭐</span>
            </div>

            <button
              onClick={handleNextWord}
              className={`btn-3d flex items-center gap-2 bg-gradient-to-r ${theme?.primaryBtn || 'from-indigo-500 to-purple-600'} text-white font-extrabold text-sm sm:text-base py-2.5 px-6 rounded-2xl cursor-pointer shadow-lg animate-bounce-gentle`}
            >
              <span>MOT SUIVANT</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
