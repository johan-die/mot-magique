import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { RotateCcw, Sparkles, Trophy } from 'lucide-react';
import { WORDS, DIFFICULTY_LEVELS } from '../data/words';
import { soundManager, getStarRewardSpeech, formatStarsRewardBadge } from '../utils/audio';
import { FluentEmoji } from './FluentEmoji';

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function ModeMemory({ uppercase, onAddStar, theme, difficultyLevel = 1 }) {
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedIds, setMatchedIds] = useState(new Set());
  const [isCompleted, setIsCompleted] = useState(false);
  const [moves, setMoves] = useState(0);

  const currentLevelConfig = DIFFICULTY_LEVELS.find(l => l.id === difficultyLevel) || DIFFICULTY_LEVELS[0];

  // Number of pairs based on difficulty
  const pairsCountMap = {
    1: 2, // 4 cartes
    2: 3, // 6 cartes
    3: 4, // 8 cartes
    4: 6, // 12 cartes
    5: 8  // 16 cartes
  };
  const pairsCount = pairsCountMap[difficultyLevel] || 3;

  // Initialize a new memory game round
  const initGame = () => {
    // Pick words for this level
    const levelWords = WORDS.filter(w => w.level === difficultyLevel);
    const candidateWords = levelWords.length >= pairsCount ? levelWords : WORDS;
    const selectedWords = shuffle(candidateWords).slice(0, pairsCount);

    const deck = [];
    selectedWords.forEach((item) => {
      // Card 1: The Image
      deck.push({
        uid: `${item.id}-image-${Date.now()}-${Math.random()}`,
        wordId: item.id,
        type: 'image',
        content: item.emoji,
        label: item.word,
        color: item.color || '#fff'
      });
      // Card 2: The Written Word
      deck.push({
        uid: `${item.id}-text-${Date.now()}-${Math.random()}`,
        wordId: item.id,
        type: 'text',
        content: uppercase ? item.word.toUpperCase() : item.word.toLowerCase(),
        label: item.word,
        color: '#fff'
      });
    });

    setCards(shuffle(deck));
    setFlippedIndices([]);
    setMatchedIds(new Set());
    setIsCompleted(false);
    setMoves(0);
  };

  useEffect(() => {
    initGame();
  }, [uppercase, difficultyLevel]);

  const handleCardClick = (idx) => {
    if (flippedIndices.length === 2) return;
    if (flippedIndices.includes(idx)) return;
    if (matchedIds.has(cards[idx].wordId)) return;

    soundManager.playPop();
    const newFlipped = [...flippedIndices, idx];
    setFlippedIndices(newFlipped);

    soundManager.speak(cards[idx].label);

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
      const [firstIdx, secondIdx] = newFlipped;
      const cardA = cards[firstIdx];
      const cardB = cards[secondIdx];

      if (cardA.wordId === cardB.wordId && cardA.type !== cardB.type) {
        // MATCH !
        soundManager.playSuccess();
        const nextMatched = new Set(matchedIds);
        nextMatched.add(cardA.wordId);
        setMatchedIds(nextMatched);
        setFlippedIndices([]);

        if (nextMatched.size === cards.length / 2) {
          setIsCompleted(true);
          onAddStar(currentLevelConfig.starsReward);
          confetti({
            particleCount: 80,
            spread: 80,
            origin: { y: 0.6 }
          });
          setTimeout(() => {
            soundManager.speak(`Bravo ! Toutes les paires trouvées ! ${getStarRewardSpeech(currentLevelConfig.starsReward)}`);
          }, 400);
        }
      } else {
        setTimeout(() => {
          soundManager.playTryAgain();
          setFlippedIndices([]);
        }, 1100);
      }
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      <div className={`w-full bg-white rounded-3xl p-4 sm:p-7 shadow-xl border-4 ${theme?.cardBorder || 'border-amber-200'} flex flex-col items-center relative overflow-hidden`}>
        {/* Banner with Level Badge */}
        <div className="flex items-center justify-between w-full border-b pb-3 mb-4 border-slate-100 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl">🃏</span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-xl font-black text-slate-800">
                  Le Mémory Phonétique
                </h2>
                <span className={`text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-full ${currentLevelConfig.badgeBg}`}>
                  {currentLevelConfig.emoji} {currentLevelConfig.name} ({pairsCount} paires)
                </span>
              </div>
              <p className="text-xs text-slate-500 font-semibold">
                Associe chaque image avec son mot écrit !
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
              Coups : {moves}
            </span>
            <button
              onClick={() => {
                soundManager.playPop();
                initGame();
              }}
              title="Nouvelle partie"
              className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Cards Responsive Grid */}
        <div className={`grid gap-2 sm:gap-3 w-full max-w-3xl my-2 ${
          pairsCount <= 3 
            ? 'grid-cols-2 sm:grid-cols-3' 
            : pairsCount <= 4 
            ? 'grid-cols-2 sm:grid-cols-4' 
            : 'grid-cols-3 sm:grid-cols-4'
        }`}>
          {cards.map((card, idx) => {
            const isFlipped = flippedIndices.includes(idx);
            const isMatched = matchedIds.has(card.wordId);
            const showFace = isFlipped || isMatched;

            return (
              <div
                key={card.uid}
                onClick={() => handleCardClick(idx)}
                className={`h-24 sm:h-32 rounded-2xl cursor-pointer transition-all duration-300 transform select-none flex items-center justify-center p-2 text-center ${
                  showFace
                    ? isMatched
                      ? 'bg-emerald-100 border-3 border-emerald-400 shadow-md scale-95 opacity-90'
                      : 'bg-white border-3 border-sky-400 shadow-lg scale-102'
                    : `bg-gradient-to-br ${theme?.primaryBtn || 'from-amber-300 to-amber-500'} border-3 border-white/60 shadow-md hover:scale-105 active:scale-95`
                }`}
              >
                {showFace ? (
                  card.type === 'image' ? (
                    <FluentEmoji
                      emoji={card.content}
                      alt={card.label}
                      className="w-12 h-12 sm:w-16 sm:h-16 filter drop-shadow-sm animate-pop"
                    />
                  ) : (
                    <span className="text-sm sm:text-lg font-black text-slate-800 break-words animate-pop px-1">
                      {card.content}
                    </span>
                  )
                ) : (
                  <span className="text-2xl sm:text-3xl text-white opacity-80 animate-pulse">
                    ✨
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Victory Screen */}
        {isCompleted && (
          <div className="mt-5 flex flex-col items-center gap-2 animate-pop">
            <div className="flex items-center gap-2 text-emerald-700 font-black text-base sm:text-lg">
              <Trophy className="w-6 h-6 text-yellow-500" />
              <span>Gagné ! {pairsCount} paires en {moves} coups ! {formatStarsRewardBadge(currentLevelConfig.starsReward)} ! ⭐</span>
            </div>

            <button
              onClick={() => {
                soundManager.playPop();
                initGame();
              }}
              className={`btn-3d px-6 py-2.5 bg-gradient-to-r ${theme?.primaryBtn || 'from-amber-400 to-orange-500'} text-white font-black text-base rounded-2xl cursor-pointer shadow-lg`}
            >
              NOUVELLE PARTIE ! ✨
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
