import React, { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { Volume2, ArrowRight, RotateCcw, Sparkles, CheckCircle2, Flame, Award } from 'lucide-react';
import { MATH_TOPICS, generateExercise } from '../utils/mathGenerator';
import { DIFFICULTY_LEVELS } from '../data/words';
import { soundManager, getStarRewardSpeech, formatStarsRewardBadge } from '../utils/audio';

export default function ModeMaths({ onAddStar, theme, difficultyLevel = 1 }) {
  const [topicId, setTopicId] = useState('mixed');
  const [currentEx, setCurrentEx] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [status, setStatus] = useState('idle'); // 'idle' | 'success' | 'retry'
  const [solvedCount, setSolvedCount] = useState(0);
  const [streak, setStreak] = useState(0);

  const currentLevelConfig = DIFFICULTY_LEVELS.find(l => l.id === difficultyLevel) || DIFFICULTY_LEVELS[0];

  // Function to load next procedural exercise
  const loadNewExercise = useCallback((lvl = difficultyLevel, top = topicId) => {
    setSelectedAnswer(null);
    setStatus('idle');
    const newEx = generateExercise(lvl, top);
    setCurrentEx(newEx);
  }, [difficultyLevel, topicId]);

  // Load new exercise on mount or when difficulty/topic changes
  useEffect(() => {
    loadNewExercise(difficultyLevel, topicId);
  }, [difficultyLevel, topicId, loadNewExercise]);

  const handleSelectTopic = (id) => {
    soundManager.playPop();
    setTopicId(id);
    loadNewExercise(difficultyLevel, id);
  };

  const handleAnswer = (ans) => {
    if (status === 'success' || !currentEx) return;
    setSelectedAnswer(ans);

    const isCorrect = ans === currentEx.answer;

    if (isCorrect) {
      setStatus('success');
      soundManager.playSuccess();
      onAddStar(currentLevelConfig.starsReward);
      setSolvedCount(prev => prev + 1);
      setStreak(prev => prev + 1);

      confetti({
        particleCount: 75,
        spread: 65,
        origin: { y: 0.6 }
      });

      soundManager.speak(`Bravo ! C'est la bonne réponse : ${ans} ! ${getStarRewardSpeech(currentLevelConfig.starsReward)}`);
    } else {
      setStatus('retry');
      soundManager.playTryAgain();
      setStreak(0);
      soundManager.speak("Ce n'est pas la bonne réponse, recompte bien et réessaie !");
    }
  };

  const handleNext = () => {
    soundManager.playPop();
    loadNewExercise();
  };

  const speakQuestion = () => {
    if (!currentEx) return;
    soundManager.playPop();
    if (currentEx.story) {
      soundManager.speak(currentEx.story);
    } else if (currentEx.type === 'count') {
      soundManager.speak("Combien y a-t-il d'objets ?");
    } else if (currentEx.question) {
      soundManager.speak(currentEx.question);
    } else {
      soundManager.speak("Combien y a-t-il d'objets ?");
    }
  };

  if (!currentEx) return null;

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      {/* Topics switcher (Responsive horizontal wrap with badges) */}
      <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-3 w-full px-1">
        {MATH_TOPICS.map((top) => {
          const isSelected = topicId === top.id;
          return (
            <button
              key={top.id}
              onClick={() => handleSelectTopic(top.id)}
              className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 select-none ${
                isSelected
                  ? `bg-gradient-to-r ${theme?.primaryBtn || 'from-sky-500 to-blue-600'} text-white shadow-md scale-105 ring-2 ring-white`
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              <span>{top.emoji}</span>
              <span>{top.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Exercise Card */}
      <div className={`w-full bg-white rounded-3xl p-4 sm:p-7 shadow-xl border-4 ${theme?.cardBorder || 'border-amber-200'} flex flex-col items-center relative overflow-hidden`}>
        {/* Banner with Level Badge and Streak Counter */}
        <div className="flex items-center justify-between w-full border-b pb-3 mb-4 border-slate-100 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl">🧮</span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-xl font-black text-slate-800">
                  L'Atelier des Maths (Génération Infinie)
                </h2>
                <span className={`text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-full ${currentLevelConfig.badgeBg}`}>
                  {currentLevelConfig.emoji} {currentLevelConfig.name}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-semibold">
                Exercices uniques générés à l'infini avec Lilou et Tiago
              </p>
            </div>
          </div>

          {/* Solved stats */}
          <div className="flex items-center gap-2">
            {streak >= 3 && (
              <span className="flex items-center gap-1 text-xs font-black bg-orange-100 text-orange-800 px-2.5 py-1 rounded-full border border-orange-300 animate-pulse">
                <Flame className="w-3.5 h-3.5 text-orange-600" />
                <span>Série de {streak} !</span>
              </span>
            )}
            <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
              Réussis : {solvedCount} ⭐
            </span>
          </div>
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
            <h3 className="text-base sm:text-xl font-black text-slate-800 mb-3 text-center">
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

        {/* 2. Additions & Soustractions */}
        {currentEx.type === 'calc' && (
          <div className="flex flex-col items-center my-3">
            <div className="flex items-center gap-2 sm:gap-4 bg-emerald-50 border-2 border-emerald-200 rounded-3xl p-4 sm:p-6 shadow-inner flex-wrap justify-center">
              {/* Part A */}
              <div className="flex flex-col items-center">
                {currentEx.a <= 10 && (
                  <div className="flex gap-1 flex-wrap justify-center max-w-[120px]">
                    {Array.from({ length: currentEx.a }).map((_, i) => (
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
                    {Array.from({ length: currentEx.b }).map((_, i) => (
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
            <p className="text-xs text-slate-500 font-semibold mt-2">
              Rappel : la pointe s'oriente vers le plus petit nombre !
            </p>
          </div>
        )}

        {/* 4. Doubles & Moitiés */}
        {currentEx.type === 'double' && (
          <div className="flex flex-col items-center my-3">
            <div className="text-center bg-purple-50 border-2 border-purple-200 rounded-3xl p-5 shadow-inner max-w-md">
              <span className="text-3xl mb-1 block">✨</span>
              <h3 className="text-lg sm:text-2xl font-black text-purple-950 mb-1">
                {currentEx.question}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-purple-700">
                💡 Indice : {currentEx.hint}
              </p>
            </div>
          </div>
        )}

        {/* 5. Compléments */}
        {currentEx.type === 'complement' && (
          <div className="flex flex-col items-center my-3">
            <div className="text-center bg-sky-50 border-2 border-sky-300 rounded-3xl p-5 shadow-inner max-w-md">
              <span className="text-3xl mb-1 block">🎯</span>
              <h3 className="text-lg sm:text-2xl font-black text-sky-950 mb-1">
                {currentEx.question}
              </h3>
              <p className="text-xs font-semibold text-sky-700">
                💡 Indice : {currentEx.hint}
              </p>
            </div>
          </div>
        )}

        {/* 6. Suites logiques */}
        {currentEx.type === 'sequence' && (
          <div className="flex flex-col items-center my-3">
            <div className="text-center bg-amber-50 border-2 border-amber-300 rounded-3xl p-5 shadow-inner max-w-md">
              <span className="text-3xl mb-1 block">📈</span>
              <h3 className="text-lg sm:text-2xl font-black text-amber-950 mb-2">
                {currentEx.question}
              </h3>
              <p className="text-xs font-semibold text-amber-700">
                💡 Indice : {currentEx.hint}
              </p>
            </div>
          </div>
        )}

        {/* 7. Problèmes du Quotidien avec Lilou & Tiago */}
        {currentEx.type === 'problem' && (
          <div className="flex flex-col items-center my-3">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-3xl p-4 sm:p-6 shadow-inner max-w-lg text-center">
              <span className="text-3xl mb-2 block">{currentEx.emoji}</span>
              <p className="text-sm sm:text-base font-bold text-slate-800 leading-relaxed mb-2">
                {currentEx.story}
              </p>
              {currentEx.calc && (
                <div className="bg-white px-3 py-1 rounded-xl border border-amber-300 text-xs font-bold text-amber-800 inline-block">
                  Opération : {currentEx.calc} = ?
                </div>
              )}
            </div>
          </div>
        )}

        {/* Clickable Shuffled Answer Options (True Random Order!) */}
        <div className="flex flex-col items-center my-3">
          <p className="text-xs sm:text-sm font-bold text-slate-600 mb-2">
            Choisis la bonne réponse :
          </p>

          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4">
            {currentEx.options.map((opt, i) => {
              const isSelected = selectedAnswer === opt;
              return (
                <button
                  key={`${currentEx.id}-${i}-${opt}`}
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
              Super calcul ! {formatStarsRewardBadge(currentLevelConfig.starsReward)} ! ⭐
            </span>
          </div>
        )}

        {/* Reset / Reload Button */}
        {status !== 'success' && (
          <button
            onClick={() => loadNewExercise()}
            title="Générer un autre exercice"
            className="mt-2 text-xs font-bold text-slate-500 hover:text-slate-700 flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Changer d'exercice</span>
          </button>
        )}
      </div>
    </div>
  );
}
