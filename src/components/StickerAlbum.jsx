import React, { useState, useMemo } from 'react';
import { WORDS, WORD_CATEGORIES } from '../data/words';
import { soundManager } from '../utils/audio';
import { Sparkles, Trophy, Lock, Search } from 'lucide-react';

export default function StickerAlbum({ unlockedStickerIds = [], activeProfile, theme }) {
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyUnlocked, setOnlyUnlocked] = useState(false);

  const totalUnlocked = unlockedStickerIds.length;
  const totalWords = WORDS.length;
  const progressPercent = Math.min(100, Math.round((totalUnlocked / totalWords) * 100));

  const filteredWords = useMemo(() => {
    return WORDS.filter(w => {
      const matchCat = selectedCategory === 'tous' || w.category === selectedCategory;
      const matchSearch = !searchQuery || w.word.toLowerCase().includes(searchQuery.toLowerCase());
      const isUnlocked = unlockedStickerIds.includes(w.id);
      const matchUnlocked = !onlyUnlocked || isUnlocked;
      return matchCat && matchSearch && matchUnlocked;
    });
  }, [selectedCategory, searchQuery, onlyUnlocked, unlockedStickerIds]);

  const categoryCount = (catId) => {
    if (catId === 'tous') return WORDS.length;
    return WORDS.filter(w => w.category === catId).length;
  };

  const handleStickerClick = (wordObj, isUnlocked) => {
    soundManager.playPop();
    if (isUnlocked) {
      soundManager.playStar();
      soundManager.speak(wordObj.word);
    } else {
      soundManager.speak("Cet autocollant est encore un mystère ! Réussis le mot pour le débloquer !");
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
                Plus de 500 mots magnifiques à collectionner et débloquer !
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

        {/* Search & Only Unlocked Filter Bar */}
        <div className="w-full flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="relative flex-1 min-w-[200px] max-w-xs">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Rechercher un mot..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-300 font-semibold"
            />
          </div>

          <button
            onClick={() => {
              soundManager.playPop();
              setOnlyUnlocked(!onlyUnlocked);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
              onlyUnlocked
                ? 'bg-emerald-100 text-emerald-800 border-emerald-300 shadow-sm'
                : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
            }`}
          >
            {onlyUnlocked ? '⭐ Débloqués seulement' : 'Afficher tout l\'album'}
          </button>
        </div>

        {/* Category chips with counts */}
        <div className="flex flex-wrap justify-center gap-2 mb-4 w-full">
          {WORD_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                soundManager.playPop();
                setSelectedCategory(cat.id);
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                selectedCategory === cat.id
                  ? 'bg-amber-500 text-white shadow-md scale-105'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                selectedCategory === cat.id ? 'bg-amber-600 text-amber-100' : 'bg-slate-200 text-slate-600'
              }`}>
                {categoryCount(cat.id)}
              </span>
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
