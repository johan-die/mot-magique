import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Volume2, 
  Wand2, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw, 
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { WORDS, WORD_CATEGORIES, DIFFICULTY_LEVELS } from '../data/words';
import { soundManager } from '../utils/audio';

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function ModeScrabble({ uppercase, onAddStar, difficultyLevel = 1 }) {
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [wordIndex, setWordIndex] = useState(0);

  const currentLevelConfig = DIFFICULTY_LEVELS.find(l => l.id === difficultyLevel) || DIFFICULTY_LEVELS[0];

  // Filter words by difficulty level AND category
  const filteredWords = WORDS.filter(w => {
    const matchesLevel = w.level === difficultyLevel;
    const matchesCat = selectedCategory === 'tous' || w.category === selectedCategory;
    return matchesLevel && matchesCat;
  });

  const activeWords = filteredWords.length > 0 
    ? filteredWords 
    : WORDS.filter(w => w.level === difficultyLevel);

  const currentWordObj = activeWords[wordIndex % activeWords.length] || activeWords[0];
  const targetLetters = currentWordObj.word.split('');

  // Placed tiles in slots: array of { id, char } or null
  const [slots, setSlots] = useState([]);
  // Bank of available tiles: array of { id, char, placed }
  const [bank, setBank] = useState([]);
  const [status, setStatus] = useState('idle');

  // Initialize slots and scrambled bank when word or difficulty changes
  useEffect(() => {
    const wordChars = currentWordObj.word.split('');
    const newSlots = new Array(wordChars.length).fill(null);
    setSlots(newSlots);

    // Create tile items for actual word letters
    const tiles = wordChars.map((char, index) => ({
      id: `${char}-${index}-${Date.now()}-${Math.random()}`,
      char: char.toUpperCase(),
      placed: false
    }));

    // Add distractor tiles depending on difficulty level
    const distractorCount = currentLevelConfig.distractorCount;
    if (distractorCount > 0) {
      const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'É', 'È'];
      for (let i = 0; i < distractorCount; i++) {
        const extraChar = alphabet[Math.floor(Math.random() * alphabet.length)];
        tiles.push({
          id: `distractor-${i}-${Date.now()}-${Math.random()}`,
          char: extraChar,
          placed: false
        });
      }
    }

    setBank(shuffle(tiles));
    setStatus('idle');
  }, [wordIndex, selectedCategory, difficultyLevel]);

  // Click on bank tile -> place in first empty slot
  const handleBankTileClick = (tile) => {
    if (tile.placed || status === 'success') return;

    const firstEmptyIndex = slots.findIndex(s => s === null);
    if (firstEmptyIndex === -1) return;

    soundManager.playTile();

    const newSlots = [...slots];
    newSlots[firstEmptyIndex] = tile;
    setSlots(newSlots);

    const newBank = bank.map(b => b.id === tile.id ? { ...b, placed: true } : b);
    setBank(newBank);

    if (status !== 'idle') setStatus('idle');

    // Auto-check if all slots filled
    if (firstEmptyIndex === slots.length - 1) {
      setTimeout(() => {
        checkSolution(newSlots);
      }, 300);
    }
  };

  // Click on slot tile -> return to bank
  const handleSlotClick = (index) => {
    if (status === 'success') return;
    const tile = slots[index];
    if (!tile) return;

    soundManager.playPop();

    const newSlots = [...slots];
    newSlots[index] = null;
    setSlots(newSlots);

    const newBank = bank.map(b => b.id === tile.id ? { ...b, placed: false } : b);
    setBank(newBank);

    if (status !== 'idle') setStatus('idle');
  };

  // Check solution
  const checkSolution = (currentSlots = slots) => {
    const constructed = currentSlots.map(s => s ? s.char.toLowerCase() : '').join('');
    const target = currentWordObj.word.toLowerCase();

    // In Level 4 & 5, check exact accents
    const isStrict = difficultyLevel >= 4;
    const normConstructed = isStrict 
      ? constructed 
      : constructed.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const normTarget = isStrict 
      ? target 
      : target.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    if (normConstructed === normTarget) {
      // SUCCESS !
      setStatus('success');
      soundManager.playSuccess();
      onAddStar(currentLevelConfig.starsReward);

      confetti({
        particleCount: 70 + difficultyLevel * 15,
        spread: 75,
        origin: { y: 0.65 }
      });

      soundManager.spellWord(currentWordObj.word);
      setTimeout(() => {
        soundManager.speak(`Bravo ! C'est bien : ${currentWordObj.word} ! +${currentLevelConfig.starsReward} étoiles !`);
      }, 1800);
    } else {
      // RETRY
      setStatus('retry');
      soundManager.playTryAgain();
      soundManager.speak("Ce n'est pas le bon ordre des lettres, réessaie !");
    }
  };

  // Magic wand clue
  const handleMagicHint = () => {
    soundManager.playStar();

    let targetIndex = -1;
    for (let i = 0; i < targetLetters.length; i++) {
      const expectedChar = targetLetters[i].toUpperCase();
      if (!slots[i] || slots[i].char !== expectedChar) {
        targetIndex = i;
        break;
      }
    }

    if (targetIndex === -1) return;

    const neededChar = targetLetters[targetIndex].toUpperCase();

    let newBank = [...bank];
    if (slots[targetIndex]) {
      const oldTileId = slots[targetIndex].id;
      newBank = newBank.map(b => b.id === oldTileId ? { ...b, placed: false } : b);
    }

    const tileToPlace = newBank.find(b => b.char === neededChar && !b.placed);
    if (!tileToPlace) return;

    const newSlots = [...slots];
    newSlots[targetIndex] = tileToPlace;
    setSlots(newSlots);

    newBank = newBank.map(b => b.id === tileToPlace.id ? { ...b, placed: true } : b);
    setBank(newBank);

    soundManager.speak(`Voici la lettre ${neededChar}`);

    if (newSlots.every(s => s !== null)) {
      setTimeout(() => {
        checkSolution(newSlots);
      }, 400);
    }
  };

  const handleNextWord = () => {
    soundManager.playPop();
    setWordIndex((prev) => (prev + 1) % activeWords.length);
  };

  const handleReset = () => {
    soundManager.playPop();
    setSlots(new Array(targetLetters.length).fill(null));
    setBank(bank.map(b => ({ ...b, placed: false })));
    setStatus('idle');
  };

  const formatChar = (c) => {
    if (!c) return '';
    return uppercase ? c.toUpperCase() : c.toLowerCase();
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      {/* Category selection */}
      <div className="flex flex-wrap justify-center gap-2 mb-3 w-full px-2">
        {WORD_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              soundManager.playPop();
              setSelectedCategory(cat.id);
              setWordIndex(0);
            }}
            className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-amber-500 text-white shadow-md scale-105'
                : 'bg-white/80 hover:bg-white text-slate-700 border border-slate-200'
            }`}
          >
            <span className="mr-1">{cat.emoji}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Main Scrabble Card */}
      <div className="w-full bg-white rounded-3xl p-5 sm:p-8 shadow-xl border-4 border-amber-300 flex flex-col items-center relative overflow-hidden">
        {/* Level badge */}
        <div className={`absolute top-4 left-4 ${currentLevelConfig.badgeBg} text-xs sm:text-sm font-extrabold px-3 py-1 rounded-full border flex items-center gap-1.5`}>
          <span>{currentLevelConfig.emoji}</span>
          <span>{currentLevelConfig.name}</span>
          <span className="opacity-75">({targetLetters.length} lettres • {currentLevelConfig.distractorCount} pièges)</span>
        </div>

        {/* Counter */}
        <div className="absolute top-4 right-4 text-slate-500 text-xs sm:text-sm font-semibold">
          Mot {(wordIndex % activeWords.length) + 1} / {activeWords.length}
        </div>

        {/* Image & Audio button */}
        <div className="flex items-center gap-4 mt-7 mb-4">
          <div 
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl flex items-center justify-center text-6xl sm:text-7xl shadow-inner border-4 border-dashed border-amber-300"
            style={{ backgroundColor: currentWordObj.color || '#fffbeb' }}
          >
            <span className="filter drop-shadow-sm select-none">{currentWordObj.emoji}</span>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => {
                soundManager.playPop();
                soundManager.speak(currentWordObj.word);
              }}
              className="btn-3d flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-extrabold px-4 py-2 rounded-2xl text-sm sm:text-base cursor-pointer shadow-md"
            >
              <Volume2 className="w-5 h-5 animate-pulse" />
              <span>Écoute le mot</span>
            </button>

            <button
              onClick={handleMagicHint}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-800 bg-amber-100 hover:bg-amber-200 px-3 py-2 rounded-xl border border-amber-300 transition-all cursor-pointer"
            >
              <Wand2 className="w-4 h-4 text-amber-600" />
              <span>Baguette Magique (Aide)</span>
            </button>
          </div>
        </div>

        {/* Scrabble Boxes */}
        <div className="w-full flex flex-col items-center my-4">
          <p className="text-xs sm:text-sm font-bold text-amber-900 mb-2">
            Place les lettres dans les cases :
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 p-3 bg-amber-50/80 rounded-2xl border-2 border-amber-200 min-h-[4.5rem] items-center max-w-full">
            {slots.map((slot, idx) => {
              const isFilled = slot !== null;
              return (
                <div
                  key={idx}
                  onClick={() => handleSlotClick(idx)}
                  className={`w-10 h-13 sm:w-14 sm:h-18 rounded-2xl flex items-center justify-center text-xl sm:text-3xl font-black cursor-pointer transition-all ${
                    isFilled
                      ? 'bg-amber-400 border-3 border-amber-500 text-amber-950 tile-shadow transform -translate-y-1 hover:scale-105'
                      : 'bg-white/80 border-3 border-dashed border-amber-300 text-slate-300 shadow-inner hover:border-amber-400'
                  } ${status === 'retry' && isFilled ? 'border-rose-400 bg-rose-200 text-rose-950 animate-wiggle' : ''} ${status === 'success' ? 'border-emerald-500 bg-emerald-300 text-emerald-950 scale-105' : ''}`}
                >
                  {isFilled ? formatChar(slot.char) : (idx + 1)}
                </div>
              );
            })}
          </div>
        </div>

        {/* Letter Bank */}
        <div className="w-full flex flex-col items-center my-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs sm:text-sm font-bold text-slate-600">
              Lettres disponibles :
            </span>
            {currentLevelConfig.distractorCount > 0 && (
              <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                ⚠️ {currentLevelConfig.distractorCount} lettre(s) piège(s) !
              </span>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 max-w-2xl">
            {bank.map((tile) => {
              if (tile.placed) {
                return (
                  <div
                    key={tile.id}
                    className="w-10 h-13 sm:w-14 sm:h-16 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 opacity-25 flex items-center justify-center text-lg sm:text-2xl font-bold text-slate-400"
                  >
                    {formatChar(tile.char)}
                  </div>
                );
              }

              return (
                <button
                  key={tile.id}
                  onClick={() => handleBankTileClick(tile)}
                  className="w-10 h-13 sm:w-14 sm:h-16 rounded-2xl bg-amber-100 hover:bg-amber-200 active:bg-amber-300 border-2 sm:border-3 border-amber-400 text-amber-950 font-black text-xl sm:text-2xl tile-shadow transition-transform active:translate-y-1 cursor-pointer flex items-center justify-center"
                >
                  {formatChar(tile.char)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Verification & Controls */}
        <div className="flex flex-wrap justify-center items-center gap-3 w-full mt-4">
          {status !== 'success' ? (
            <button
              onClick={() => checkSolution()}
              className="btn-3d flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-extrabold text-lg sm:text-xl py-3 px-6 rounded-2xl cursor-pointer shadow-lg"
            >
              <CheckCircle2 className="w-6 h-6" />
              <span>VÉRIFIER</span>
            </button>
          ) : (
            <button
              onClick={handleNextWord}
              className="btn-3d flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-extrabold text-lg sm:text-xl py-3 px-6 rounded-2xl cursor-pointer shadow-lg animate-bounce-gentle"
            >
              <span>MOT SUIVANT</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          )}

          <button
            onClick={handleReset}
            title="Recommencer"
            className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-2xl border border-slate-300 transition-all cursor-pointer"
          >
            <RotateCcw className="w-6 h-6" />
          </button>
        </div>

        {/* Status messages */}
        {status === 'success' && (
          <div className="mt-4 flex items-center gap-2 text-emerald-700 font-extrabold text-lg sm:text-xl animate-pop">
            <Sparkles className="w-6 h-6 text-yellow-500" />
            <span>Bravo ! +{currentLevelConfig.starsReward} Étoiles gagnées !</span>
          </div>
        )}

        {status === 'retry' && (
          <div className="mt-4 text-rose-600 font-bold text-sm sm:text-base animate-pop text-center">
            <span>Certaines lettres ne sont pas à leur place ou sont des pièges ! 💡</span>
          </div>
        )}
      </div>
    </div>
  );
}
