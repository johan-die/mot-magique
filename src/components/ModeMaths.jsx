import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Volume2, ArrowRight, RotateCcw, Sparkles, CheckCircle2 } from 'lucide-react';
import { MATH_EXERCISES_BY_LEVEL } from '../data/maths';
import { DIFFICULTY_LEVELS } from '../data/words';
import { soundManager } from '../utils/audio';

// Fisher-Yates shuffle algorithm to guarantee true random position of the correct answer
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

export default function ModeMaths({ onAddStar, theme, difficultyLevel = 1 }) {
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [status, setStatus] = useState('idle');
  const [shuffledOptions, setShuffledOptions] = useState([]);

  const currentLevelConfig = DIFFICULTY_LEVELS.find(l => l.id === difficultyLevel) || DIFFICULTY_LEVELS[0];

  const exercises = MATH_EXERCISES_BY_LEVEL[difficultyLevel] || MATH_EXERCISES_BY_LEVEL[1];
  const currentEx = exercises[exerciseIndex % exercises.length];

  // Randomize answer options order on every new question or level change!
  useEffect(() => {
    setSelectedAnswer(null);
    setStatus('idle');
    if (currentEx && currentEx.options) {
      setShuffledOptions(shuffle(currentEx.options));
    }
  }, [exerciseIndex, difficultyLevel, currentEx]);

  const handleAnswer = (ans) => {
    if (status === 'success') return;
    setSelectedAnswer(ans);

    const isCorrect = ans === currentEx.answer;

    if (isCorrect) {
      setStatus('success');
      soundManager.playSuccess();
      onAddStar(currentLevelConfig.starsReward);

      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });

      soundManager.speak(`Bravo ! C'est la bonne réponse : ${ans} ! +${currentLevelConfig.starsReward} étoiles !`);
    } else {
      setStatus('retry');
      soundManager.playTryAgain();
      soundManager.speak("Ce n'est pas tout à fait ça, recompte bien et réessaie !");
    }
  };

  const handleNext = () => {
    soundManager.playPop();
    setExerciseIndex(prev => (prev + 1) % exercises.length);
  };

  const speakQuestion = () => {
    soundManager.playPop();
    if (currentEx.story) {
      soundManager.speak(currentEx.story);
    } else if (currentEx.question) {
      soundManager.speak(currentEx.question);
    } else {
      soundManager.speak("Combien y a-t-il d'objets ?");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      <div className={`w-full bg-white rounded-3xl p-4 sm:p-7 shadow-xl border-4 ${theme?.cardBorder || 'border-amber-200'} flex flex-col items-center relative overflow-hidden`}>
        {/* Banner with Level Badge */}
        <div className="flex items-center justify-between w-full border-b pb-3 mb-4 border-slate-100 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl">🧮</span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-xl font-black text-slate-800">
                  L'Atelier des Maths
                </h2>
                <span className={`text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-full ${currentLevelConfig.badgeBg}`}>
                  {currentLevelConfig.emoji} {currentLevelConfig.name}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-semibold">
                Dénombrement, additions, soustractions et petits problèmes
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-slate-500">
            Exercice {(exerciseIndex % exercises.length) + 1} / {exercises.length}
          </span>
        </div>

        {/* Listen Question Button */}
        <button
          onClick={speakQuestion}
          className={`btn-3d flex items-center gap-2 bg-gradient-to-r ${theme?.primaryBtn || 'from-sky-400 to-blue-500'} text-white font-extrabold px-4 py-2 rounded-2xl text-xs sm:text-sm cursor-pointer shadow-md mb-3`}
        >
          <Volume2 className="w-4 h-4 animate-pulse" />
          <span>Écoute la consigne</span>
        </button>

        {/* 1. Dénombrement visuel */}
        {currentEx.type === 'count' && (
          <div className="flex flex-col items-center my-3">
            <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-3 text-center">
              {currentEx.question}
            </h3>

            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 max-w-md p-4 sm:p-5 bg-sky-50 rounded-3xl border-2 border-sky-200 shadow-inner">
              {Array.from({ length: currentEx.count }).map((_, i) => (
                <span
                  key={i}
                  className="text-4xl sm:text-5xl transform hover:scale-125 transition-transform cursor-pointer select-none filter drop-shadow-sm"
                  onClick={() => {
                    soundManager.playPop();
                    soundManager.speak(`${i + 1}`);
                  }}
                  title={`Objet ${i + 1}`}
                >
                  {currentEx.item}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 font-semibold mt-2">
              (Clique sur les objets pour les compter un par un !)
            </p>
          </div>
        )}

        {/* 2. Calculs (Additions & Soustractions) */}
        {currentEx.type === 'calc' && (
          <div className="flex flex-col items-center my-3">
            <div className="flex items-center gap-2 sm:gap-4 bg-emerald-50 border-2 border-emerald-200 rounded-3xl p-4 sm:p-6 shadow-inner flex-wrap justify-center">
              {/* Part A */}
              <div className="flex flex-col items-center">
                {currentEx.a <= 10 && (
                  <div className="flex gap-1 flex-wrap justify-center max-w-[120px]">
                    {Array.from({ length: Math.min(10, currentEx.a) }).map((_, i) => (
                      <span key={i} className="text-xl sm:text-2xl">{currentEx.item}</span>
                    ))}
                  </div>
                )}
                <span className="text-2xl sm:text-4xl font-black text-emerald-950 mt-1">{currentEx.a}</span>
              </div>

              <span className="text-2xl sm:text-4xl font-black text-emerald-600">
                {currentEx.op === '+' ? '➕' : '➖'}
              </span>

              {/* Part B */}
              <div className="flex flex-col items-center">
                {currentEx.b <= 10 && (
                  <div className="flex gap-1 flex-wrap justify-center max-w-[120px]">
                    {Array.from({ length: Math.min(10, currentEx.b) }).map((_, i) => (
                      <span key={i} className="text-xl sm:text-2xl">{currentEx.item}</span>
                    ))}
                  </div>
                )}
                <span className="text-2xl sm:text-4xl font-black text-emerald-950 mt-1">{currentEx.b}</span>
              </div>

              <span className="text-2xl sm:text-4xl font-black text-emerald-600">🟰</span>

              <span className="text-2xl sm:text-4xl font-black text-emerald-800 bg-white px-4 py-2 rounded-2xl border-2 border-dashed border-emerald-400 min-w-[3.5rem] text-center">
                {status === 'success' ? currentEx.answer : '?'}
              </span>
            </div>
          </div>
        )}

        {/* 3. Comparaisons (<, =, >) */}
        {currentEx.type === 'compare' && (
          <div className="flex flex-col items-center my-3">
            <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-3 text-center">
              {currentEx.question}
            </h3>

            <div className="flex items-center gap-3 sm:gap-4 text-3xl sm:text-4xl font-black text-slate-800 bg-amber-50 p-4 sm:p-5 rounded-3xl border-2 border-amber-300">
              <span className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border-2 border-amber-400 flex items-center justify-center shadow-md">
                {currentEx.a}
              </span>

              <span className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-200 border-2 border-dashed border-amber-500 flex items-center justify-center text-amber-900">
                {status === 'success' ? currentEx.answer : '?'}
              </span>

              <span className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border-2 border-amber-400 flex items-center justify-center shadow-md">
                {currentEx.b}
              </span>
            </div>
          </div>
        )}

        {/* 4. Doubles & Moitiés */}
        {currentEx.type === 'double' && (
          <div className="flex flex-col items-center my-3">
            <div className="text-center bg-purple-50 border-2 border-purple-200 rounded-3xl p-5 shadow-inner max-w-md">
              <span className="text-3xl mb-1 block">✨</span>
              <h3 className="text-lg sm:text-xl font-black text-purple-950 mb-1">
                {currentEx.question}
              </h3>
              <p className="text-xs font-semibold text-purple-700">
                💡 Indice : {currentEx.hint}
              </p>
            </div>
          </div>
        )}

        {/* 5. Petits Problèmes illustrés */}
        {currentEx.type === 'problem' && (
          <div className="flex flex-col items-center my-3">
            <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-4 sm:p-6 shadow-inner max-w-lg text-center">
              <span className="text-3xl mb-2 block">{currentEx.emoji}</span>
              <p className="text-sm sm:text-base font-bold text-slate-800 leading-relaxed">
                {currentEx.story}
              </p>
            </div>
          </div>
        )}

        {/* Clickable Shuffled Answer Options (True Random Order!) */}
        <div className="flex flex-col items-center my-2">
          <p className="text-xs sm:text-sm font-bold text-slate-600 mb-2">
            Choisis la bonne réponse :
          </p>

          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4">
            {shuffledOptions.map((opt, i) => {
              const isSelected = selectedAnswer === opt;
              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt)}
                  className={`w-14 h-14 sm:w-18 sm:h-18 rounded-2xl font-black text-xl sm:text-3xl tile-shadow cursor-pointer transition-all active:translate-y-1 flex items-center justify-center border-3 ${
                    isSelected
                      ? status === 'success'
                        ? 'bg-emerald-400 border-emerald-600 text-emerald-950 scale-105'
                        : 'bg-rose-200 border-rose-400 text-rose-900 animate-wiggle'
                      : 'bg-white hover:bg-slate-50 border-amber-400 text-slate-800'
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>

        {/* Success / Next Button */}
        {status === 'success' && (
          <div className="mt-4 flex flex-col items-center gap-1.5 animate-pop">
            <button
              onClick={handleNext}
              className={`btn-3d flex items-center gap-2 bg-gradient-to-r ${theme?.primaryBtn || 'from-sky-400 to-blue-500'} text-white font-extrabold text-base py-2.5 px-6 rounded-2xl cursor-pointer shadow-lg animate-bounce-gentle`}
            >
              <span>EXERCICE SUIVANT</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <span className="text-emerald-700 font-bold text-xs sm:text-sm">
              Super champion ! +{currentLevelConfig.starsReward} Étoiles gagnées ! ⭐
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
