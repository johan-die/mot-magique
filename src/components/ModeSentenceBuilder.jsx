import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Volume2, ArrowRight, RotateCcw, Sparkles, CheckCircle2 } from 'lucide-react';
import { SENTENCES_DATA } from '../data/sentences';
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

export default function ModeSentenceBuilder({ onAddStar, theme, difficultyLevel = 1 }) {
  const [index, setIndex] = useState(0);

  const currentLevelConfig = DIFFICULTY_LEVELS.find(l => l.id === difficultyLevel) || DIFFICULTY_LEVELS[0];

  // Filter sentences by level
  const filteredSentences = SENTENCES_DATA.filter(s => s.level === difficultyLevel);
  const activeSentences = filteredSentences.length > 0 ? filteredSentences : SENTENCES_DATA;
  const currentSentenceObj = activeSentences[index % activeSentences.length];
  const targetBlocks = currentSentenceObj.blocks;

  const [placedSlots, setPlacedSlots] = useState([]);
  const [bankBlocks, setBankBlocks] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setPlacedSlots(new Array(targetBlocks.length).fill(null));

    const blocksWithId = targetBlocks.map((blk, idx) => ({
      id: `${blk}-${idx}-${Date.now()}-${Math.random()}`,
      text: blk,
      isDistractor: false,
      placed: false
    }));

    // Add distractor blocks for Level 3, 4, 5 if available
    if (difficultyLevel >= 3 && currentSentenceObj.distractors && currentSentenceObj.distractors.length > 0) {
      currentSentenceObj.distractors.forEach((distBlk, dIdx) => {
        blocksWithId.push({
          id: `dist-${distBlk}-${dIdx}-${Date.now()}`,
          text: distBlk,
          isDistractor: true,
          placed: false
        });
      });
    }

    setBankBlocks(shuffle(blocksWithId));
    setStatus('idle');
  }, [index, difficultyLevel, currentSentenceObj]);

  const handleBankBlockClick = (block) => {
    if (block.placed || status === 'success') return;

    const firstEmpty = placedSlots.findIndex(s => s === null);
    if (firstEmpty === -1) return;

    soundManager.playTile();
    soundManager.speak(block.text);

    const newSlots = [...placedSlots];
    newSlots[firstEmpty] = block;
    setPlacedSlots(newSlots);

    const newBank = bankBlocks.map(b => b.id === block.id ? { ...b, placed: true } : b);
    setBankBlocks(newBank);

    if (status !== 'idle') setStatus('idle');

    if (firstEmpty === targetBlocks.length - 1) {
      setTimeout(() => {
        checkSentence(newSlots);
      }, 400);
    }
  };

  const handleSlotClick = (idx) => {
    if (status === 'success') return;
    const block = placedSlots[idx];
    if (!block) return;

    soundManager.playPop();

    const newSlots = [...placedSlots];
    newSlots[idx] = null;
    setPlacedSlots(newSlots);

    const newBank = bankBlocks.map(b => b.id === block.id ? { ...b, placed: false } : b);
    setBankBlocks(newBank);

    if (status !== 'idle') setStatus('idle');
  };

  const checkSentence = (currentSlots = placedSlots) => {
    const constructed = currentSlots.map(s => s ? s.text : '').join(' ');
    const expected = targetBlocks.join(' ');

    if (constructed === expected) {
      setStatus('success');
      soundManager.playSuccess();
      onAddStar(currentLevelConfig.starsReward);

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });

      soundManager.speak(`Superbe ! Écoute la phrase complète : ${expected} ! ${getStarRewardSpeech(currentLevelConfig.starsReward)}`);
    } else {
      setStatus('retry');
      soundManager.playTryAgain();
      soundManager.speak("La phrase n'a pas encore tout son sens, réorganise les morceaux !");
    }
  };

  const handleReadCurrent = () => {
    const text = placedSlots.filter(s => s !== null).map(s => s.text).join(' ');
    if (!text.trim()) {
      soundManager.speak("Place des morceaux de phrase d'abord !");
      return;
    }
    soundManager.playPop();
    soundManager.speak(text);
  };

  const handleNext = () => {
    soundManager.playPop();
    setIndex(prev => (prev + 1) % activeSentences.length);
  };

  const handleReset = () => {
    soundManager.playPop();
    setPlacedSlots(new Array(targetBlocks.length).fill(null));
    setBankBlocks(bankBlocks.map(b => ({ ...b, placed: false })));
    setStatus('idle');
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      <div className={`w-full bg-white rounded-3xl p-4 sm:p-7 shadow-xl border-4 ${theme?.cardBorder || 'border-amber-200'} flex flex-col items-center relative overflow-hidden`}>
        {/* Banner with Level Badge */}
        <div className="flex items-center justify-between w-full border-b pb-3 mb-3 border-slate-100 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl">📜</span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-xl font-black text-slate-800">
                  La Fabrique de Phrases
                </h2>
                <span className={`text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-full ${currentLevelConfig.badgeBg}`}>
                  {currentLevelConfig.emoji} {currentLevelConfig.name}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-semibold">
                Remets les morceaux dans l'ordre pour composer la phrase !
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-slate-500">
            Phrase {(index % activeSentences.length) + 1} / {activeSentences.length}
          </span>
        </div>

        {/* Mascot / Theme visual */}
        <div 
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center text-4xl sm:text-5xl shadow-inner border-3 border-dashed border-amber-300 my-1"
          style={{ backgroundColor: currentSentenceObj.color }}
        >
          <span className="filter drop-shadow-sm select-none">{currentSentenceObj.emoji}</span>
        </div>

        {/* Listen button */}
        <button
          onClick={handleReadCurrent}
          className={`btn-3d flex items-center gap-1.5 bg-gradient-to-r ${theme?.primaryBtn || 'from-amber-400 to-orange-500'} text-white font-extrabold px-3.5 py-1.5 rounded-xl text-xs cursor-pointer shadow-sm mb-3`}
        >
          <Volume2 className="w-4 h-4 animate-pulse" />
          <span>Écoute ma phrase</span>
        </button>

        {/* Sentence Target Slots */}
        <div className="w-full max-w-2xl bg-amber-50/80 border-2 border-amber-300 rounded-3xl p-3 sm:p-4 my-2 flex flex-wrap items-center justify-center gap-2 min-h-[4.5rem]">
          {placedSlots.map((slot, idx) => {
            const isFilled = slot !== null;
            return (
              <div
                key={idx}
                onClick={() => handleSlotClick(idx)}
                className={`min-h-[3rem] px-3 sm:px-4 py-2 rounded-2xl font-black text-sm sm:text-lg flex items-center justify-center cursor-pointer transition-all border-2 sm:border-3 ${
                  isFilled
                    ? 'bg-amber-300 border-amber-500 text-amber-950 tile-shadow'
                    : 'bg-white/80 border-dashed border-amber-300 text-slate-300 shadow-inner'
                } ${status === 'retry' && isFilled ? 'border-rose-400 bg-rose-200 text-rose-950 animate-wiggle' : ''} ${status === 'success' ? 'border-emerald-500 bg-emerald-300 text-emerald-950' : ''}`}
              >
                {isFilled ? slot.text : `[ Morceau ${idx + 1} ]`}
              </div>
            );
          })}
        </div>

        {/* Word Blocks Bank */}
        <div className="w-full flex flex-col items-center my-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs sm:text-sm font-bold text-slate-600">
              Morceaux à placer :
            </span>
            {difficultyLevel >= 3 && currentSentenceObj.distractors?.length > 0 && (
              <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                ⚠️ Attention au morceau piège !
              </span>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
            {bankBlocks.map((block) => {
              if (block.placed) {
                return (
                  <div
                    key={block.id}
                    className="min-h-[2.7rem] px-3 sm:px-4 py-1.5 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 opacity-25 flex items-center justify-center text-xs sm:text-sm font-bold text-slate-400"
                  >
                    {block.text}
                  </div>
                );
              }

              return (
                <button
                  key={block.id}
                  onClick={() => handleBankBlockClick(block)}
                  className="min-h-[2.7rem] px-3 sm:px-4 py-1.5 rounded-2xl bg-amber-100 hover:bg-amber-200 active:bg-amber-300 border-2 border-amber-400 text-amber-950 font-black text-xs sm:text-base tile-shadow transition-transform active:translate-y-1 cursor-pointer flex items-center justify-center"
                >
                  {block.text}
                </button>
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full mt-2">
          {status !== 'success' ? (
            <button
              onClick={() => checkSentence()}
              className="btn-3d flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-extrabold text-sm sm:text-base py-2.5 px-5 rounded-2xl cursor-pointer shadow-lg"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>VÉRIFIER LA PHRASE</span>
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="btn-3d flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-extrabold text-sm sm:text-base py-2.5 px-5 rounded-2xl cursor-pointer shadow-lg animate-bounce-gentle"
            >
              <span>PHRASE SUIVANTE</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}

          <button
            onClick={handleReset}
            title="Recommencer"
            className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-2xl border border-slate-300 transition-all cursor-pointer"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>

        {status === 'success' && (
          <div className="mt-3 flex items-center gap-2 text-emerald-700 font-extrabold text-sm sm:text-base animate-pop">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            <span>Bravo ! Phrase complète ! {formatStarsRewardBadge(currentLevelConfig.starsReward)} ! ⭐</span>
          </div>
        )}
      </div>
    </div>
  );
}
