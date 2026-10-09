import React, { useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { Volume2, ArrowRight, RotateCcw, Sparkles, Dices } from 'lucide-react';
import { WORDS, DIFFICULTY_LEVELS } from '../data/words';
import { soundManager, getStarRewardSpeech, formatStarsRewardBadge } from '../utils/audio';

export default function ModeHangman({ uppercase, onAddStar, theme, difficultyLevel = 1 }) {
  const [wordIndex, setWordIndex] = useState(0);

  const currentLevelConfig = DIFFICULTY_LEVELS.find(l => l.id === difficultyLevel) || DIFFICULTY_LEVELS[0];

  // Number of balloons allowed per difficulty
  const maxMistakesMap = {
    1: 7,
    2: 6,
    3: 5,
    4: 4,
    5: 3
  };
  const maxMistakes = maxMistakesMap[difficultyLevel] || 6;

  // Randomiser / Mélanger les mots selon le niveau
  const activeWords = useMemo(() => {
    const list = WORDS.filter(w => w.level === difficultyLevel);
    const pool = list.length > 0 ? list : WORDS;
    const shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, [difficultyLevel]);

  const currentWordObj = activeWords[wordIndex % activeWords.length];
  const targetWord = currentWordObj.word.toUpperCase();

  const [guessedLetters, setGuessedLetters] = useState(new Set());
  const [mistakes, setMistakes] = useState(0);

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const normalize = (c) => c.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const wordLetters = targetWord.split('');
  const isWon = wordLetters.every(char => {
    const normChar = normalize(char);
    return Array.from(guessedLetters).some(g => normalize(g) === normChar);
  });

  const isLost = mistakes >= maxMistakes;

  useEffect(() => {
    setGuessedLetters(new Set());
    setMistakes(0);
  }, [wordIndex, difficultyLevel]);

  // Physical keyboard listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      const char = e.key.toUpperCase();
      if (/^[A-Z]$/.test(char)) {
        e.preventDefault();
        handleGuessLetter(char);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [guessedLetters, mistakes, isWon, isLost, targetWord]);

  const handleGuessLetter = (char) => {
    if (isWon || isLost) return;
    if (guessedLetters.has(char)) return;

    soundManager.playPop();
    const nextGuessed = new Set(guessedLetters);
    nextGuessed.add(char);
    setGuessedLetters(nextGuessed);

    const normChar = normalize(char);
    const isInWord = wordLetters.some(c => normalize(c) === normChar);

    if (isInWord) {
      soundManager.playTile();
      const wonAfter = wordLetters.every(c => {
        const normC = normalize(c);
        return Array.from(nextGuessed).some(g => normalize(g) === normC);
      });

      if (wonAfter) {
        soundManager.playSuccess();
        onAddStar(currentLevelConfig.starsReward);
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 }
        });
        soundManager.speak(`Bravo ! Tu as sauvé la mascotte avec le mot : ${currentWordObj.word} ! ${getStarRewardSpeech(currentLevelConfig.starsReward)}`);
      }
    } else {
      soundManager.playTryAgain();
      const nextMistakes = mistakes + 1;
      setMistakes(nextMistakes);

      if (nextMistakes >= maxMistakes) {
        soundManager.speak(`Oh, les ballons se sont envolés ! Le mot était : ${currentWordObj.word}.`);
      } else {
        soundManager.speak(`Pas de ${char}, attention au ballon !`);
      }
    }
  };

  const handleNext = () => {
    soundManager.playPop();
    setWordIndex(prev => (prev + 1) % activeWords.length);
  };

  const handleRandomWord = () => {
    soundManager.playPop();
    if (activeWords.length <= 1) return;
    setWordIndex(prev => {
      let next;
      do {
        next = Math.floor(Math.random() * activeWords.length);
      } while (next === prev && activeWords.length > 1);
      return next;
    });
  };

  const remainingBalloons = Math.max(0, maxMistakes - mistakes);

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      <div className={`w-full bg-white rounded-3xl p-4 sm:p-7 shadow-xl border-4 ${theme?.cardBorder || 'border-amber-200'} flex flex-col items-center relative overflow-hidden`}>
        {/* Banner with Level Badge */}
        <div className="flex items-center justify-between w-full border-b pb-3 mb-3 border-slate-100 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl">🎈</span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-xl font-black text-slate-800">
                  Sauve la Mascotte !
                </h2>
                <span className={`text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-full ${currentLevelConfig.badgeBg}`}>
                  {currentLevelConfig.emoji} {currentLevelConfig.name} ({maxMistakes} ballons)
                </span>
              </div>
              <p className="text-xs text-slate-500 font-semibold">
                Devine les lettres avant que tous les ballons ne s'envolent !
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleRandomWord}
              title="Tirer un mot au hasard 🎲"
              className="flex items-center gap-1 text-xs font-black text-purple-900 bg-purple-100 hover:bg-purple-200 px-2 sm:px-2.5 py-1 rounded-xl border border-purple-300 cursor-pointer transition-all active:scale-95 shadow-xs"
            >
              <Dices className="w-4 h-4 text-purple-600" />
              <span className="hidden sm:inline">Hasard</span>
            </button>
            <span className="text-xs font-bold text-slate-500">
              Mot {(wordIndex % activeWords.length) + 1} / {activeWords.length}
            </span>
          </div>
        </div>

        {/* Mascot & Balloons Graphic */}
        <div className="flex flex-col items-center my-2 relative">
          {/* Floating Balloons */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1 flex-wrap">
            {Array.from({ length: maxMistakes }).map((_, i) => {
              const isPopped = i >= remainingBalloons;
              return (
                <span
                  key={i}
                  className={`text-2xl sm:text-4xl transition-all duration-300 transform ${
                    isPopped
                      ? 'scale-50 opacity-20 filter grayscale'
                      : 'animate-bounce-gentle filter drop-shadow-md'
                  }`}
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  🎈
                </span>
              );
            })}
          </div>

          <div className="w-16 h-3 border-b-2 border-slate-300 -mt-0.5"></div>

          {/* Basket & Mascot */}
          <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-amber-100 border-3 border-amber-400 flex flex-col items-center justify-center text-3xl sm:text-4xl shadow-md transition-all ${
            isWon ? 'animate-bounce scale-110 bg-emerald-100 border-emerald-400' : isLost ? 'scale-90 opacity-70' : ''
          }`}>
            <span>{isWon ? '🎉' : isLost ? '😴' : '🐼'}</span>
            <span className="text-[10px] font-bold text-amber-800 mt-0.5">
              {remainingBalloons} ballon(s)
            </span>
          </div>
        </div>

        {/* Word Clue */}
        <div className="flex items-center gap-2 my-1 flex-wrap justify-center">
          <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
            Catégorie : {currentWordObj.category}
          </span>
          <button
            onClick={() => {
              soundManager.playPop();
              soundManager.speak(`Indice : ${currentWordObj.hint}`);
            }}
            className="text-xs font-bold text-amber-800 bg-amber-100 hover:bg-amber-200 px-3 py-1 rounded-full cursor-pointer"
          >
            💡 Écoute un indice
          </button>
        </div>

        {/* Hidden Word Slots */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 my-3 p-3 bg-amber-50/70 rounded-2xl border-2 border-amber-200 max-w-full">
          {wordLetters.map((char, idx) => {
            const normChar = normalize(char);
            const isRevealed = isWon || isLost || Array.from(guessedLetters).some(g => normalize(g) === normChar);

            return (
              <div
                key={idx}
                className={`w-9 h-12 sm:w-13 sm:h-16 rounded-2xl flex items-center justify-center text-lg sm:text-2xl font-black transition-all border-2 sm:border-3 ${
                  isRevealed
                    ? isLost && !Array.from(guessedLetters).some(g => normalize(g) === normChar)
                      ? 'bg-rose-100 border-rose-400 text-rose-800'
                      : 'bg-white border-amber-400 text-amber-950 shadow-md'
                    : 'bg-white/60 border-dashed border-slate-300 text-transparent'
                }`}
              >
                {isRevealed ? (uppercase ? char : char.toLowerCase()) : '_'}
              </div>
            );
          })}
        </div>

        {/* Alphabet keyboard (responsive small keys on mobile) */}
        <div className="flex flex-wrap justify-center gap-1 sm:gap-1.5 max-w-xl my-2">
          {alphabet.map((letter) => {
            const isUsed = guessedLetters.has(letter);
            const isCorrect = isUsed && wordLetters.some(c => normalize(c) === normalize(letter));

            return (
              <button
                key={letter}
                disabled={isUsed || isWon || isLost}
                onClick={() => handleGuessLetter(letter)}
                className={`w-7 h-9 sm:w-10 sm:h-11 rounded-xl font-bold text-xs sm:text-base transition-all cursor-pointer select-none flex items-center justify-center border-2 ${
                  isUsed
                    ? isCorrect
                      ? 'bg-emerald-200 border-emerald-400 text-emerald-900 opacity-80'
                      : 'bg-slate-200 border-slate-300 text-slate-400 line-through opacity-50'
                    : 'bg-white hover:bg-amber-100 border-amber-300 text-amber-950 shadow-xs active:translate-y-1'
                }`}
              >
                {uppercase ? letter : letter.toLowerCase()}
              </button>
            );
          })}
        </div>

        {/* Win / Loss Screen */}
        {(isWon || isLost) && (
          <div className="mt-4 flex flex-col items-center gap-2 animate-pop">
            <span className={`text-base sm:text-lg font-black ${isWon ? 'text-emerald-700' : 'text-slate-700'}`}>
              {isWon ? `🏆 Mascotte sauvée ! ${formatStarsRewardBadge(currentLevelConfig.starsReward)} ! ⭐` : `Le mot secret était : ${currentWordObj.word.toUpperCase()}`}
            </span>

            <button
              onClick={handleNext}
              className={`btn-3d flex items-center gap-2 bg-gradient-to-r ${theme?.primaryBtn || 'from-amber-400 to-orange-500'} text-white font-extrabold text-base py-2.5 px-6 rounded-2xl cursor-pointer shadow-lg animate-bounce-gentle`}
            >
              <span>PARTIE SUIVANTE</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
