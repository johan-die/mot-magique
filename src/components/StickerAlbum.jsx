import React, { useState } from 'react';
import { WORDS, WORD_CATEGORIES } from '../data/words';
import { soundManager } from '../utils/audio';
import { Sparkles, Trophy, Lock } from 'lucide-react';

export default function StickerAlbum({ unlockedStickerIds = [], activeProfile, theme }) {
  const [selectedCategory, setSelectedCategory] = useState('tous');

  const filteredWords = selectedCategory === 'tous'
    ? WORDS
    : WORDS.filter(w => w.category === selectedCategory);

  const totalUnlocked = unlockedStickerIds.length;
  const totalWords = WORDS.length;
  const progressPercent = Math.min(100, Math.round((totalUnlocked / totalWords) * 100));

  const handleStickerClick = (wordObj, isUnlocked) => {
    soundManager.playPop();
    if (isUnlocked) {
      soundManager.playStar();
      soundManager.speak(wordObj.word);
    } else {
      soundManager.speak("Cet autocollant est encore mystère ! Réussis le mot pour le débloquer !");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      <div className={`w-full bg-white rounded-3xl p-5 sm:p-8 shadow-xl border-4 ${theme?.cardBorder || 'border-amber-200'} flex flex-col items-center relative overflow-hidden`}>
        {/* Banner */}
        <div className="flex items-center justify-between w-full border-b pb-3 mb-4 border-slate-100 flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <span className="text-3xl sm:text-4xl">📖</span>
            <div>
              <h2 className="text-lg sm:text-2xl font-black text-slate-800 flex items-center gap-2">
                Le Grand Imagier de {activeProfile.name}
                <Sparkles className="w-5 h-5 text-yellow-500" />
              </h2>
              <p className="text-xs text-slate-500 font-semibold">
                Tous les mots réussis débloquent leurs autocollants magiques dorés !
              </p>
            </div>
          </div>

          {/* Progress Bar Badge */}
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1.5 font-black text-sm text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
              <Trophy className="w-4 h-4 text-amber-600" />
              <span>{totalUnlocked} / {totalWords} Autocollants ({progressPercent}%)</span>
            </div>
            <div className="w-32 bg-slate-200 h-2 rounded-full overflow-hidden mt-1.5">
              <div
                className={`h-full bg-gradient-to-r ${theme?.primaryBtn || 'from-amber-400 to-orange-500'}`}
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Category chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-5 w-full">
          {WORD_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                soundManager.playPop();
                setSelectedCategory(cat.id);
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-amber-500 text-white shadow-md scale-105'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <span className="mr-1">{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sticker Album Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 w-full max-h-[500px] overflow-y-auto p-2">
          {filteredWords.map((item) => {
            const isUnlocked = unlockedStickerIds.includes(item.id);

            return (
              <div
                key={item.id}
                onClick={() => handleStickerClick(item, isUnlocked)}
                className={`flex flex-col items-center justify-center p-3 rounded-2xl border-3 transition-all cursor-pointer transform hover:scale-105 ${
                  isUnlocked
                    ? 'bg-gradient-to-b from-amber-50 to-yellow-100 border-amber-300 shadow-md ring-2 ring-yellow-300/50'
                    : 'bg-slate-50 border-dashed border-slate-300 opacity-60'
                }`}
              >
                {isUnlocked ? (
                  <>
                    <span className="text-4xl sm:text-5xl filter drop-shadow-sm animate-pop">
                      {item.emoji}
                    </span>
                    <span className="text-xs sm:text-sm font-black text-amber-950 mt-2 uppercase tracking-wide">
                      {item.word}
                    </span>
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-200/60 px-1.5 py-0.2 rounded-full mt-1">
                      ⭐ Débloqué
                    </span>
                  </>
                ) : (
                  <>
                    <Lock className="w-8 h-8 text-slate-400 my-2" />
                    <span className="text-xs font-bold text-slate-400">
                      Mystère
                    </span>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
