import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Volume2, ArrowRight, RotateCcw, Sparkles, CheckCircle2 } from 'lucide-react';
import { WORDS, DIFFICULTY_LEVELS } from '../data/words';
import { soundManager } from '../utils/audio';

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function ModeMissingLetter({ uppercase, onAddStar, theme, difficultyLevel = 1 }) {
  const [wordIndex, setWordIndex] = useState(0);

  const currentLevelConfig = DIFFICULTY_LEVELS.find(l => l.id === difficultyLevel) || DIFFICULTY_LEVELS[0];

  // Filter words by difficulty level
  const filteredWords = WORDS.filter(w => w.level === difficultyLevel);
  const activeWords = filteredWords.length > 0 ? filteredWords : WORDS;
  const currentWordObj = activeWords[wordIndex % activeWords.length];
  const word = currentWordObj.word;

  const [missingIndex, setMissingIndex] = useState(1);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    // Choose missing letter index based on level
    let targetIdx = 1;
    if (difficultyLevel === 5) {
      // In level 5, pick the tricky silent ending letter if possible!
      targetIdx = word.length - 1;
    } else if (difficultyLevel >= 3) {
      targetIdx = Math.floor(Math.random() * (word.length - 1)) + 1;
    } else {
      // Level 1: pick a vowel
      const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'é', 'è'];
      const vowelIdx = word.split('').findIndex((c, i) => i > 0 && vowels.includes(c.toLowerCase()));
      targetIdx = vowelIdx !== -1 ? vowelIdx : 1;
    }

    setMissingIndex(targetIdx);

    const correctChar = word[targetIdx].toUpperCase();
    const alphabet = ['A', 'E', 'I', 'O', 'U', 'R', 'S', 'T', 'L', 'M', 'N', 'P', 'B', 'D', 'C', 'F', 'G'];
    const filteredAlphabet = alphabet.filter(c => c !== correctChar);

    // Number of options: 3 for L1-L2, 4 for L3-L5
    const optionsCount = difficultyLevel >= 3 ? 3 : 2;
    const distractors = shuffle(filteredAlphabet).slice(0, optionsCount);
    setOptions(shuffle([correctChar, ...distractors]));
    setSelectedOption(null);
    setStatus('idle');
  }, [wordIndex, word, difficultyLevel]);

  const handleSelectOption = (opt) => {
    if (status === 'success') return;
    setSelectedOption(opt);

    const correctChar = word[missingIndex].toUpperCase();
    if (opt.toUpperCase() === correctChar) {
      setStatus('success');
      soundManager.playSuccess();
      onAddStar(currentLevelConfig.starsReward);

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });

      soundManager.speak(`Bravo ! C'était bien la lettre ${correctChar} pour ${currentWordObj.word} ! +${currentLevelConfig.starsReward} étoiles !`);
    } else {
      setStatus('retry');
      soundManager.playTryAgain();
      soundManager.speak(`Ce n'est pas la lettre ${opt}, réessaie !`);
    }
  };

  const handleNext = () => {
    soundManager.playPop();
    setWordIndex(prev => (prev + 1) % activeWords.length);
  };

  const formatChar = (c) => {
    return uppercase ? c.toUpperCase() : c.toLowerCase();
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      <div className={`w-full bg-white rounded-3xl p-4 sm:p-7 shadow-xl border-4 ${theme?.cardBorder || 'border-amber-200'} flex flex-col items-center relative overflow-hidden`}>
        {/* Banner with Level Badge */}
        <div className="flex items-center justify-between w-full border-b pb-3 mb-4 border-slate-100 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl">🧩</span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-xl font-black text-slate-800">
                  La Lettre Mystère
                </h2>
                <span className={`text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-full ${currentLevelConfig.badgeBg}`}>
                  {currentLevelConfig.emoji} {currentLevelConfig.name}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-semibold">
                Trouve la bonne lettre pour compléter le mot !
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-slate-500">
            Mot {(wordIndex % activeWords.length) + 1} / {activeWords.length}
          </span>
        </div>

        {/* Image & Audio */}
        <div className="flex items-center gap-4 my-2">
          <div 
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl flex items-center justify-center text-5xl sm:text-6xl shadow-inner border-4 border-dashed border-amber-300"
            style={{ backgroundColor: currentWordObj.color || '#fff' }}
          >
            <span className="filter drop-shadow-sm select-none">{currentWordObj.emoji}</span>
          </div>

          <button
            onClick={() => {
              soundManager.playPop();
              soundManager.speak(currentWordObj.word);
            }}
            className={`btn-3d flex items-center gap-2 bg-gradient-to-r ${theme?.primaryBtn || 'from-amber-400 to-orange-500'} text-white font-extrabold px-4 py-2 rounded-2xl text-xs sm:text-sm cursor-pointer shadow-md`}
          >
            <Volume2 className="w-4 h-4 animate-pulse" />
            <span>Écoute le mot</span>
          </button>
        </div>

        {/* Word Display with the Blank Slot */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 my-4 p-3 sm:p-4 bg-amber-50/70 rounded-2xl border-2 border-amber-200 max-w-full">
          {word.split('').map((char, idx) => {
            const isMissing = idx === missingIndex;
            return (
              <div
                key={idx}
                className={`w-10 h-13 sm:w-14 sm:h-18 rounded-2xl flex items-center justify-center text-xl sm:text-3xl font-black transition-all border-3 ${
                  isMissing
                    ? status === 'success'
                      ? 'bg-emerald-300 border-4 border-emerald-500 text-emerald-950 scale-105 animate-pop'
                      : 'bg-white border-4 border-dashed border-amber-400 text-amber-600 animate-pulse'
                    : 'bg-amber-100 border-2 sm:border-3 border-amber-300 text-amber-950'
                }`}
              >
                {isMissing ? (status === 'success' ? formatChar(char) : '?') : formatChar(char)}
              </div>
            );
          })}
        </div>

        {/* Options to click */}
        <div className="flex flex-col items-center my-2">
          <p className="text-xs sm:text-sm font-bold text-slate-600 mb-3">
            Choisis la bonne lettre parmi les propositions :
          </p>

          <div className="flex items-center gap-2.5 sm:gap-4 flex-wrap justify-center">
            {options.map((opt, i) => {
              const isSelected = selectedOption === opt;
              return (
                <button
                  key={i}
                  onClick={() => handleSelectOption(opt)}
                  className={`w-12 h-14 sm:w-16 sm:h-18 rounded-2xl font-black text-xl sm:text-3xl tile-shadow cursor-pointer transition-all active:translate-y-1 flex items-center justify-center border-3 ${
                    isSelected
                      ? status === 'success'
                        ? 'bg-emerald-400 border-emerald-600 text-emerald-950'
                        : 'bg-rose-200 border-rose-400 text-rose-900 animate-wiggle'
                      : 'bg-white hover:bg-amber-50 border-amber-400 text-amber-950'
                  }`}
                >
                  {formatChar(opt)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Next word button on success */}
        {status === 'success' && (
          <div className="mt-4 flex flex-col items-center gap-1.5 animate-pop">
            <button
              onClick={handleNext}
              className={`btn-3d flex items-center gap-2 bg-gradient-to-r ${theme?.primaryBtn || 'from-amber-400 to-orange-500'} text-white font-extrabold text-base sm:text-lg py-2.5 px-6 rounded-2xl cursor-pointer shadow-lg animate-bounce-gentle`}
            >
              <span>MOT SUIVANT</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <span className="text-emerald-700 font-bold text-xs sm:text-sm">
              Bravo ! +{currentLevelConfig.starsReward} Étoiles gagnées ! ⭐
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
