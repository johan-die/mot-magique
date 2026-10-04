import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  Volume2, 
  Wand2, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw, 
  Sparkles,
  Keyboard as KeyboardIcon,
  AlertCircle,
  Dices
} from 'lucide-react';
import { WORDS, WORD_CATEGORIES, DIFFICULTY_LEVELS } from '../data/words';
import { soundManager } from '../utils/audio';
import VirtualKeyboard from './VirtualKeyboard';

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
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [rejectedNotice, setRejectedNotice] = useState(null);
  const mobileInputRef = useRef(null);

  const currentLevelConfig = DIFFICULTY_LEVELS.find(l => l.id === difficultyLevel) || DIFFICULTY_LEVELS[0];

  const handleToggleKeyboard = () => {
    soundManager.playPop();
    const willShow = !showKeyboard;
    setShowKeyboard(willShow);
    if (!willShow) {
      setTimeout(() => {
        if (mobileInputRef.current) {
          mobileInputRef.current.focus();
        }
      }, 60);
    } else {
      if (mobileInputRef.current) {
        mobileInputRef.current.blur();
      }
    }
  };

  // Randomiser / Mélanger aléatoirement les mots pour ce niveau et cette catégorie
  const activeWords = useMemo(() => {
    const list = WORDS.filter(w => {
      const matchesLevel = w.level === difficultyLevel;
      const matchesCat = selectedCategory === 'tous' || w.category === selectedCategory;
      return matchesLevel && matchesCat;
    });
    const pool = list.length > 0 ? list : WORDS.filter(w => w.level === difficultyLevel);
    return shuffle(pool);
  }, [difficultyLevel, selectedCategory]);

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
    setRejectedNotice(null);
  }, [wordIndex, selectedCategory, difficultyLevel]);

  // Click on bank tile -> place in first empty slot
  const handleBankTileClick = useCallback((tile) => {
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
  }, [slots, bank, status]);

  // Click on slot tile -> return to bank
  const handleSlotClick = useCallback((index) => {
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
  }, [slots, bank, status]);

  // Remove last placed letter (Backspace / Delete)
  const handleBackspace = useCallback(() => {
    if (status === 'success') return;
    let lastFilledIdx = -1;
    for (let i = slots.length - 1; i >= 0; i--) {
      if (slots[i] !== null) {
        lastFilledIdx = i;
        break;
      }
    }
    if (lastFilledIdx !== -1) {
      handleSlotClick(lastFilledIdx);
    }
  }, [slots, status, handleSlotClick]);

  // Check solution
  const checkSolution = useCallback((currentSlots = slots) => {
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
  }, [slots, currentWordObj, difficultyLevel, currentLevelConfig, onAddStar]);

  const handleNextWord = useCallback(() => {
    soundManager.playPop();
    setWordIndex((prev) => (prev + 1) % activeWords.length);
  }, [activeWords.length]);

  const handleRandomWord = useCallback(() => {
    soundManager.playPop();
    if (activeWords.length <= 1) return;
    setWordIndex((prev) => {
      let next;
      do {
        next = Math.floor(Math.random() * activeWords.length);
      } while (next === prev && activeWords.length > 1);
      return next;
    });
  }, [activeWords.length]);

  // Handle typing from physical or virtual keyboard: ONLY ACCEPTS PROPOSED LETTERS IN BANK!
  const handleKeyInput = useCallback((char) => {
    if (status === 'success') return;

    // Check if slots are already full
    const firstEmptyIndex = slots.findIndex(s => s === null);
    if (firstEmptyIndex === -1) return;

    const inputChar = char.toUpperCase();
    const inputNorm = inputChar.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // 1. Search for available exact tile in bank
    let match = bank.find(b => !b.placed && b.char === inputChar);

    // 2. If not found, search for normalized tile (e.g. user typed E and bank has É, or vice-versa)
    if (!match) {
      match = bank.find(b => {
        if (b.placed) return false;
        const bNorm = b.char.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return bNorm === inputNorm;
      });
    }

    if (match) {
      // THE LETTER IS IN THE PROPOSED BANK -> PLACE IT!
      setRejectedNotice(null);
      handleBankTileClick(match);
    } else {
      // THE LETTER IS NOT IN THE BANK OR ALREADY USED -> REJECT IT!
      soundManager.playTryAgain();
      setRejectedNotice(`La lettre « ${inputChar} » n'est pas dans la réserve disponible !`);
      setTimeout(() => {
        setRejectedNotice(null);
      }, 1800);
    }
  }, [bank, slots, status, handleBankTileClick]);

  // Global physical keyboard listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't interfere if an input or textarea has focus
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      if (e.key === 'Backspace' || e.key === 'Delete') {
        e.preventDefault();
        handleBackspace();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (status === 'success') {
          handleNextWord();
        } else {
          checkSolution();
        }
      } else if (e.key.length === 1 && /[a-zA-ZÀ-ÿ]/.test(e.key)) {
        e.preventDefault();
        handleKeyInput(e.key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleBackspace, handleNextWord, checkSolution, handleKeyInput, status]);

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

  const handleReset = () => {
    soundManager.playPop();
    setSlots(new Array(targetLetters.length).fill(null));
    setBank(bank.map(b => ({ ...b, placed: false })));
    setStatus('idle');
    setRejectedNotice(null);
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
      <div className="w-full bg-white rounded-3xl p-3.5 sm:p-7 shadow-xl border-4 border-amber-300 flex flex-col items-center relative overflow-hidden">
        {/* Responsive Header Row inside card */}
        <div className="w-full flex items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-100">
          <div className={`${currentLevelConfig.badgeBg} text-xs font-extrabold px-2.5 py-1 rounded-full border flex items-center gap-1.5 shrink-0`}>
            <span>{currentLevelConfig.emoji}</span>
            <span>{currentLevelConfig.name}</span>
            <span className="opacity-75 hidden min-[400px]:inline">({targetLetters.length} lettres • {currentLevelConfig.distractorCount} pièges)</span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={handleRandomWord}
              title="Tirer un mot au hasard 🎲"
              className="flex items-center gap-1 text-xs font-black text-amber-900 bg-amber-100 hover:bg-amber-200 px-2 py-1 rounded-xl border border-amber-300 cursor-pointer transition-all active:scale-95 shadow-xs"
            >
              <Dices className="w-3.5 h-3.5 text-amber-600" />
              <span>Hasard</span>
            </button>
            <span className="text-slate-500 text-xs font-bold bg-slate-100 px-2 py-1 rounded-xl border border-slate-200">
              {(wordIndex % activeWords.length) + 1} / {activeWords.length}
            </span>
          </div>
        </div>

        {/* Hidden input for native phone typing */}
        <input
          ref={mobileInputRef}
          type="text"
          inputMode={showKeyboard ? "none" : "text"}
          value=""
          onChange={(e) => {
            const val = e.target.value;
            if (val) {
              handleKeyInput(val.slice(-1));
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'Backspace' || e.key === 'Delete') {
              handleBackspace();
            } else if (e.key === 'Enter') {
              if (status === 'success') {
                handleNextWord();
              } else {
                checkSolution();
              }
            }
          }}
          className="opacity-0 absolute -z-10 w-1 h-1 pointer-events-none"
          aria-hidden="true"
          tabIndex={-1}
        />

        {/* Image & Audio button */}
        <div className="flex items-center gap-3 my-2">
          <div 
            className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl flex items-center justify-center text-5xl sm:text-6xl shadow-inner border-4 border-dashed border-amber-300 shrink-0"
            style={{ backgroundColor: currentWordObj.color || '#fffbeb' }}
          >
            <span className="filter drop-shadow-sm select-none">{currentWordObj.emoji}</span>
          </div>

          <div className="flex flex-col gap-1.5">
            <button
              onClick={() => {
                soundManager.playPop();
                soundManager.speak(currentWordObj.word);
              }}
              className="btn-3d flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-extrabold px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl text-xs sm:text-sm cursor-pointer shadow-md"
            >
              <Volume2 className="w-4 h-4 animate-pulse" />
              <span>Écoute le mot</span>
            </button>

            <button
              onClick={handleMagicHint}
              className="flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-100 hover:bg-amber-200 px-3 py-1.5 rounded-xl border border-amber-300 transition-all cursor-pointer"
            >
              <Wand2 className="w-3.5 h-3.5 text-amber-600" />
              <span>Baguette Magique (Aide)</span>
            </button>
          </div>
        </div>

        {/* Keyboard mode toggle pill */}
        <div className="w-full flex items-center justify-between px-1 mb-1 text-[11px] sm:text-xs text-slate-500">
          <span className="font-semibold flex items-center gap-1">
            {showKeyboard ? "⌨️ Clavier virtuel actif" : "📱 Clavier téléphone disponible"}
          </span>
          <button
            type="button"
            onClick={handleToggleKeyboard}
            className="font-bold text-amber-800 hover:text-amber-950 underline cursor-pointer"
          >
            {showKeyboard ? "Utiliser clavier téléphone 📱" : "Afficher clavier virtuel ⌨️"}
          </button>
        </div>

        {/* Rejected character feedback notice */}
        {rejectedNotice && (
          <div className="mb-2 bg-rose-100 border border-rose-400 text-rose-800 text-xs sm:text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1.5 animate-wiggle">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{rejectedNotice}</span>
          </div>
        )}

        {/* Target Letter Slots */}
        <div className="w-full flex flex-col items-center my-2">
          <p className="text-xs sm:text-sm font-bold text-amber-900 mb-1.5">
            Cases à remplir (clique sur une lettre pour la retirer) :
          </p>

          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2.5 p-2.5 sm:p-3 bg-amber-50/80 rounded-2xl border-2 border-amber-200 min-h-[4rem] items-center max-w-full">
            {slots.map((slot, idx) => {
              const isFilled = slot !== null;
              return (
                <div
                  key={idx}
                  onClick={() => handleSlotClick(idx)}
                  className={`w-9 h-12 min-[380px]:w-11 min-[380px]:h-14 sm:w-14 sm:h-18 rounded-xl sm:rounded-2xl flex items-center justify-center text-lg min-[380px]:text-xl sm:text-3xl font-black cursor-pointer transition-all ${
                    isFilled
                      ? 'bg-amber-400 border-2 sm:border-3 border-amber-500 text-amber-950 tile-shadow transform -translate-y-0.5 sm:-translate-y-1 hover:scale-105'
                      : 'bg-white/80 border-2 sm:border-3 border-dashed border-amber-300 text-slate-300 shadow-inner hover:border-amber-400'
                  } ${status === 'retry' && isFilled ? 'border-rose-400 bg-rose-200 text-rose-950 animate-wiggle' : ''} ${status === 'success' ? 'border-emerald-500 bg-emerald-300 text-emerald-950 scale-105' : ''}`}
                >
                  {isFilled ? formatChar(slot.char) : (idx + 1)}
                </div>
              );
            })}
          </div>
        </div>

        {/* Letter Bank */}
        <div className="w-full flex flex-col items-center my-2">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs sm:text-sm font-bold text-slate-600">
              Lettres proposées :
            </span>
            {currentLevelConfig.distractorCount > 0 && (
              <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                ⚠️ {currentLevelConfig.distractorCount} piège(s) !
              </span>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2.5 max-w-2xl">
            {bank.map((tile) => {
              if (tile.placed) {
                return (
                  <div
                    key={tile.id}
                    className="w-9 h-12 min-[380px]:w-11 min-[380px]:h-14 sm:w-14 sm:h-16 rounded-xl sm:rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 opacity-25 flex items-center justify-center text-base min-[380px]:text-lg sm:text-2xl font-bold text-slate-400"
                  >
                    {formatChar(tile.char)}
                  </div>
                );
              }

              return (
                <button
                  key={tile.id}
                  onClick={() => handleBankTileClick(tile)}
                  className="w-9 h-12 min-[380px]:w-11 min-[380px]:h-14 sm:w-14 sm:h-16 rounded-xl sm:rounded-2xl bg-amber-100 hover:bg-amber-200 active:bg-amber-300 border-2 sm:border-3 border-amber-400 text-amber-950 font-black text-lg min-[380px]:text-xl sm:text-2xl tile-shadow transition-transform active:translate-y-0.5 cursor-pointer flex items-center justify-center"
                >
                  {formatChar(tile.char)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Verification & Controls */}
        <div className="flex items-center justify-center gap-2 w-full mt-3">
          {status !== 'success' ? (
            <button
              onClick={() => checkSolution()}
              className="btn-3d flex-1 max-w-[220px] sm:max-w-xs flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-extrabold text-base sm:text-xl py-2.5 sm:py-3.5 px-4 rounded-2xl cursor-pointer shadow-lg"
            >
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              <span>VÉRIFIER</span>
            </button>
          ) : (
            <button
              onClick={handleNextWord}
              className="btn-3d flex-1 max-w-[220px] sm:max-w-xs flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-extrabold text-base sm:text-xl py-2.5 sm:py-3.5 px-4 rounded-2xl cursor-pointer shadow-lg animate-bounce-gentle"
            >
              <span>MOT SUIVANT</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
            </button>
          )}

          <button
            onClick={handleReset}
            title="Recommencer"
            className="p-2.5 sm:p-3.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-2xl border border-slate-300 transition-all cursor-pointer shrink-0"
          >
            <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Toggle Virtual Keyboard */}
          <button
            onClick={handleToggleKeyboard}
            title={showKeyboard ? "Cacher le clavier virtuel" : "Afficher le clavier virtuel"}
            className={`p-2.5 sm:p-3.5 rounded-2xl border transition-all cursor-pointer shrink-0 ${
              showKeyboard 
                ? 'bg-amber-200 text-amber-900 border-amber-400 shadow-xs' 
                : 'bg-slate-100 hover:bg-slate-200 text-slate-600 border-slate-300'
            }`}
          >
            <KeyboardIcon className="w-5 h-5 sm:w-6 sm:h-6" />
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

      {/* On-screen virtual keyboard */}
      {showKeyboard && (
        <VirtualKeyboard
          onKeyPress={handleKeyInput}
          onBackspace={handleBackspace}
          onSpace={() => {}}
          uppercase={uppercase}
        />
      )}
    </div>
  );
}
