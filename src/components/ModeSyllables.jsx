import React, { useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { Volume2, ArrowRight, RotateCcw, Sparkles, CheckCircle2, Dices } from 'lucide-react';
import { SYLLABLE_WORDS } from '../data/syllables';
import { DIFFICULTY_LEVELS } from '../data/words';
import { soundManager, getStarRewardSpeech, formatStarsRewardBadge } from '../utils/audio';

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function ModeSyllables({ uppercase, onAddStar, theme, difficultyLevel = 1 }) {
  const [index, setIndex] = useState(0);

  const currentLevelConfig = DIFFICULTY_LEVELS.find(l => l.id === difficultyLevel) || DIFFICULTY_LEVELS[0];

  // Randomiser / Mélanger les mots selon le niveau
  const activeWords = useMemo(() => {
    const filteredWords = SYLLABLE_WORDS.filter(w => w.level === difficultyLevel);
    const pool = filteredWords.length > 0 ? filteredWords : SYLLABLE_WORDS;
    return shuffle(pool);
  }, [difficultyLevel]);

  const currentItem = activeWords[index % activeWords.length];

  const [trainWagons, setTrainWagons] = useState([]);
  const [wagonBank, setWagonBank] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const syllables = currentItem.syllables;
    setTrainWagons(new Array(syllables.length).fill(null));

    // Base wagons for the word
    const bankItems = syllables.map((syl, idx) => ({
      id: `${syl}-${idx}-${Date.now()}-${Math.random()}`,
      text: uppercase ? syl.toUpperCase() : syl.toLowerCase(),
      isDistractor: false,
      placed: false
    }));

    // Add distractor wagons for higher levels (Level 3: 1 distractor, Level 4 & 5: 2 distractors)
    if (difficultyLevel >= 3 && currentItem.distractors && currentItem.distractors.length > 0) {
      const distractorsCount = difficultyLevel >= 4 ? Math.min(2, currentItem.distractors.length) : 1;
      for (let i = 0; i < distractorsCount; i++) {
        const distSyl = currentItem.distractors[i];
        bankItems.push({
          id: `distractor-${distSyl}-${i}-${Date.now()}`,
          text: uppercase ? distSyl.toUpperCase() : distSyl.toLowerCase(),
          isDistractor: true,
          placed: false
        });
      }
    }

    setWagonBank(shuffle(bankItems));
    setStatus('idle');
  }, [index, uppercase, difficultyLevel, currentItem]);

  const handleWagonClick = (wagon) => {
    if (wagon.placed || status === 'success') return;

    const firstEmpty = trainWagons.findIndex(w => w === null);
    if (firstEmpty === -1) return;

    soundManager.playTile();
    soundManager.speak(wagon.text, { rate: 0.9 });

    const newTrain = [...trainWagons];
    newTrain[firstEmpty] = wagon;
    setTrainWagons(newTrain);

    const newBank = wagonBank.map(b => b.id === wagon.id ? { ...b, placed: true } : b);
    setWagonBank(newBank);

    if (status !== 'idle') setStatus('idle');

    if (firstEmpty === trainWagons.length - 1) {
      setTimeout(() => {
        checkTrain(newTrain);
      }, 300);
    }
  };

  const handleTrainSlotClick = (slotIdx) => {
    if (status === 'success') return;
    const wagon = trainWagons[slotIdx];
    if (!wagon) return;

    soundManager.playPop();

    const newTrain = [...trainWagons];
    newTrain[slotIdx] = null;
    setTrainWagons(newTrain);

    const newBank = wagonBank.map(b => b.id === wagon.id ? { ...b, placed: false } : b);
    setWagonBank(newBank);

    if (status !== 'idle') setStatus('idle');
  };

  const checkTrain = (currentTrain = trainWagons) => {
    const constructed = currentTrain.map(w => w ? w.text.toLowerCase() : '').join('');
    const expected = currentItem.syllables.join('').toLowerCase();

    if (constructed === expected) {
      setStatus('success');
      soundManager.playSuccess();
      onAddStar(currentLevelConfig.starsReward);

      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.6 }
      });

      const syllableSpoken = currentItem.syllables.join(', ');
      soundManager.speak(`Tchou-tchou ! ${syllableSpoken} : ${currentItem.word} ! ${getStarRewardSpeech(currentLevelConfig.starsReward)}`);
    } else {
      setStatus('retry');
      soundManager.playTryAgain();
      soundManager.speak("Les wagons ne sont pas dans le bon ordre ou contiennent un piège, réorganise-les !");
    }
  };

  const handleNext = () => {
    soundManager.playPop();
    setIndex(prev => (prev + 1) % activeWords.length);
  };

  const handleRandomWord = () => {
    soundManager.playPop();
    if (activeWords.length <= 1) return;
    setIndex((prev) => {
      let next;
      do {
        next = Math.floor(Math.random() * activeWords.length);
      } while (next === prev && activeWords.length > 1);
      return next;
    });
  };

  const handleReset = () => {
    soundManager.playPop();
    setTrainWagons(new Array(currentItem.syllables.length).fill(null));
    setWagonBank(wagonBank.map(w => ({ ...w, placed: false })));
    setStatus('idle');
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      <div className={`w-full bg-white rounded-3xl p-4 sm:p-7 shadow-xl border-4 ${theme?.cardBorder || 'border-amber-200'} flex flex-col items-center relative overflow-hidden`}>
        {/* Banner with Level Badge */}
        <div className="flex items-center justify-between w-full border-b pb-3 mb-4 border-slate-100 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl">🚂</span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-xl font-black text-slate-800">
                  Le Train des Syllabes
                </h2>
                <span className={`text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-full ${currentLevelConfig.badgeBg}`}>
                  {currentLevelConfig.emoji} {currentLevelConfig.name}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-semibold">
                Accroche les wagons dans le bon ordre pour que le train parte !
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleRandomWord}
              title="Tirer un mot au hasard 🎲"
              className="flex items-center gap-1 text-xs font-black text-amber-900 bg-amber-100 hover:bg-amber-200 px-2 sm:px-2.5 py-1 rounded-xl border border-amber-300 cursor-pointer transition-all active:scale-95 shadow-xs"
            >
              <Dices className="w-4 h-4 text-amber-600" />
              <span className="hidden sm:inline">Hasard</span>
            </button>
            <span className="text-xs font-bold text-slate-500">
              Mot {(index % activeWords.length) + 1} / {activeWords.length}
            </span>
          </div>
        </div>

        {/* Word image + audio */}
        <div className="flex items-center gap-4 my-2">
          <div 
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl flex items-center justify-center text-5xl sm:text-7xl shadow-inner border-4 border-dashed border-amber-300"
            style={{ backgroundColor: currentItem.color }}
          >
            <span className="filter drop-shadow-sm select-none">{currentItem.emoji}</span>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => {
                soundManager.playPop();
                soundManager.speak(currentItem.word);
              }}
              className={`btn-3d flex items-center gap-2 bg-gradient-to-r ${theme?.primaryBtn || 'from-amber-400 to-orange-500'} text-white font-extrabold px-4 py-2 rounded-2xl text-xs sm:text-sm cursor-pointer shadow-md`}
            >
              <Volume2 className="w-4 h-4 animate-pulse" />
              <span>Écoute le mot</span>
            </button>
            <span className="text-xs font-bold text-slate-500">
              {currentItem.syllables.length} wagons à accrocher
            </span>
          </div>
        </div>

        {/* The Train on Tracks (Responsive flex wrap) */}
        <div className="w-full my-4 flex flex-col items-center">
          <div className="w-full max-w-2xl bg-amber-50/80 border-2 border-amber-300 rounded-3xl p-3 sm:p-4 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {/* Locomotive */}
            <div className="flex flex-col items-center justify-center bg-gradient-to-tr from-amber-500 to-red-500 text-white font-black px-3 py-2 sm:px-4 sm:py-3 rounded-2xl shadow-md border-2 border-amber-600 shrink-0">
              <span className="text-2xl sm:text-3xl">🚂</span>
              <span className="text-[9px] uppercase tracking-wider">Tchou-Tchou</span>
            </div>

            <span className="text-lg text-amber-500 font-black">🔗</span>

            {/* Train Wagons (Slots) */}
            {trainWagons.map((wagon, idx) => {
              const isFilled = wagon !== null;
              return (
                <React.Fragment key={idx}>
                  <div
                    onClick={() => handleTrainSlotClick(idx)}
                    className={`min-w-[4rem] sm:min-w-[5.5rem] h-12 sm:h-16 px-2 sm:px-3 rounded-2xl flex items-center justify-center text-lg sm:text-2xl font-black cursor-pointer transition-all border-3 ${
                      isFilled
                        ? 'bg-amber-300 border-amber-500 text-amber-950 tile-shadow transform -translate-y-1'
                        : 'bg-white/80 border-dashed border-amber-300 text-slate-300 shadow-inner'
                    } ${status === 'retry' && isFilled ? 'border-rose-400 bg-rose-200 text-rose-950 animate-wiggle' : ''} ${status === 'success' ? 'border-emerald-500 bg-emerald-300 text-emerald-950 scale-105' : ''}`}
                  >
                    {isFilled ? wagon.text : `Wagon ${idx + 1}`}
                  </div>
                  {idx < trainWagons.length - 1 && (
                    <span className="text-amber-500 font-bold">🔗</span>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Railway Tracks */}
          <div className="w-full max-w-2xl h-2.5 bg-amber-200 rounded-full mt-2 relative flex justify-between px-3">
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} className="w-1.5 h-3.5 -top-0.5 bg-amber-600 rounded-xs"></div>
            ))}
          </div>
        </div>

        {/* Syllables Bank (Wagons disponibles) */}
        <div className="w-full flex flex-col items-center my-2">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs sm:text-sm font-bold text-slate-600">
              Wagons dans la gare :
            </span>
            {difficultyLevel >= 3 && (
              <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                ⚠️ Attention aux wagons pièges !
              </span>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {wagonBank.map((wagon) => {
              if (wagon.placed) {
                return (
                  <div
                    key={wagon.id}
                    className="min-w-[4rem] sm:min-w-[5rem] h-12 sm:h-14 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 opacity-25 flex items-center justify-center text-sm sm:text-base font-bold text-slate-400"
                  >
                    {wagon.text}
                  </div>
                );
              }

              return (
                <button
                  key={wagon.id}
                  onClick={() => handleWagonClick(wagon)}
                  className="min-w-[4rem] sm:min-w-[5.5rem] h-12 sm:h-16 px-3 sm:px-4 rounded-2xl bg-amber-100 hover:bg-amber-200 active:bg-amber-300 border-2 sm:border-3 border-amber-400 text-amber-950 font-black text-lg sm:text-2xl tile-shadow transition-transform active:translate-y-1 cursor-pointer flex items-center justify-center"
                >
                  {wagon.text}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full mt-4">
          {status !== 'success' ? (
            <button
              onClick={() => checkTrain()}
              className="btn-3d flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-extrabold text-base sm:text-lg py-2.5 sm:py-3 px-6 rounded-2xl cursor-pointer shadow-lg"
            >
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>VÉRIFIER LE TRAIN</span>
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="btn-3d flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-extrabold text-base sm:text-lg py-2.5 sm:py-3 px-6 rounded-2xl cursor-pointer shadow-lg animate-bounce-gentle"
            >
              <span>MOT SUIVANT</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          )}

          <button
            onClick={handleReset}
            title="Recommencer"
            className="p-2.5 sm:p-3 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-2xl border border-slate-300 transition-all cursor-pointer"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>

        {status === 'success' && (
          <div className="mt-3 flex items-center gap-2 text-emerald-700 font-extrabold text-base sm:text-lg animate-pop">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            <span>Tchou tchou ! Le train est parti ! {formatStarsRewardBadge(currentLevelConfig.starsReward)} ! ⭐</span>
          </div>
        )}
      </div>
    </div>
  );
}
