import React from 'react';
import { DIFFICULTY_LEVELS } from '../data/words';
import { soundManager } from '../utils/audio';

export default function DifficultySelector({ currentLevel, onSelectLevel }) {
  const handleSelect = (lvl) => {
    soundManager.playPop();
    onSelectLevel(lvl.id);
    soundManager.speak(`Niveau ${lvl.name} sélectionné !`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-4 px-2">
      <div className="bg-white/90 backdrop-blur rounded-2xl p-2 sm:p-3 border-2 border-amber-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="text-xs sm:text-sm font-extrabold text-amber-900 flex items-center gap-1.5 shrink-0">
          <span>🎯</span>
          <span>Difficulté :</span>
        </span>

        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 w-full sm:w-auto">
          {DIFFICULTY_LEVELS.map((lvl) => {
            const isSelected = currentLevel === lvl.id;
            return (
              <button
                key={lvl.id}
                type="button"
                onClick={() => handleSelect(lvl)}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer select-none ${
                  isSelected
                    ? `bg-gradient-to-r ${lvl.color} text-white shadow-md scale-105 ring-2 ring-white ring-offset-1`
                    : 'bg-amber-50 hover:bg-amber-100 text-slate-700 border border-amber-200'
                }`}
                title={`${lvl.name} (${lvl.subtitle}) : ${lvl.description}`}
              >
                <span>{lvl.emoji}</span>
                <span>{lvl.name}</span>
                {isSelected && (
                  <span className="ml-1 bg-white/25 text-white text-[10px] px-1.5 py-0.2 rounded-full font-black">
                    +{lvl.starsReward}⭐
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
