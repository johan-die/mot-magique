import React, { useState, useEffect, useRef, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { 
  Volume2, 
  Lightbulb, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw, 
  Keyboard as KeyboardIcon,
  Sparkles,
  Eye,
  Dices
} from 'lucide-react';
import { WORDS, WORD_CATEGORIES, DIFFICULTY_LEVELS } from '../data/words';
import { soundManager } from '../utils/audio';
import VirtualKeyboard from './VirtualKeyboard';

export default function ModeGuess({ uppercase, onAddStar, difficultyLevel = 1 }) {
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [wordIndex, setWordIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'success' | 'retry'
  const [hintLevel, setHintLevel] = useState(0); // 0: none, 1: first letter, 2: text hint
  const [showKeyboard, setShowKeyboard] = useState(true);
  const [imageRevealed, setImageRevealed] = useState(false);
  const inputRef = useRef(null);

  const currentLevelConfig = DIFFICULTY_LEVELS.find(l => l.id === difficultyLevel) || DIFFICULTY_LEVELS[0];

  // Randomiser / Mélanger aléatoirement les mots selon le niveau et la catégorie
  const activeWords = useMemo(() => {
    const list = WORDS.filter(w => {
      const matchesLevel = w.level === difficultyLevel;
      const matchesCat = selectedCategory === 'tous' || w.category === selectedCategory;
      return matchesLevel && matchesCat;
    });
    const pool = list.length > 0 ? list : WORDS.filter(w => w.level === difficultyLevel);
    // Fisher-Yates shuffle
    const shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, [difficultyLevel, selectedCategory]);

  const currentWordObj = activeWords[wordIndex % activeWords.length] || activeWords[0];
  const targetWord = currentWordObj ? currentWordObj.word.toLowerCase() : '';

  // Reset when word or level changes
  useEffect(() => {
    setUserInput('');
    setStatus('idle');
    setHintLevel(0);
    // In Level 5 (Maître), image starts hidden for Dictation Mode!
    setImageRevealed(difficultyLevel < 5);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [wordIndex, selectedCategory, difficultyLevel]);

  const normalize = (str, strictAccents = false) => {
    const trimmed = str.trim().toLowerCase();
    if (strictAccents) return trimmed;
    return trimmed.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const handleListen = () => {
    soundManager.playPop();
    if (difficultyLevel === 5) {
      soundManager.speak(`Écoute bien pour la dictée : ${currentWordObj.word}`, { rate: 0.8 });
    } else {
      soundManager.speak(currentWordObj.word, { rate: 0.8 });
    }
  };

  const handleHint = () => {
    soundManager.playPop();
    const nextLevel = Math.min(hintLevel + 1, 2);
    setHintLevel(nextLevel);

    if (nextLevel === 1) {
      soundManager.speak(`Le mot commence par la lettre ${currentWordObj.word[0].toUpperCase()}`);
    } else {
      soundManager.speak(currentWordObj.hint);
    }
  };

  const handleValidate = () => {
    // In level 4 and 5 (Expert and Maître), accents matter!
    const isStrict = difficultyLevel >= 4;
    const cleanUser = normalize(userInput, isStrict);
    const cleanTarget = normalize(targetWord, isStrict);

    if (!cleanUser) {
      soundManager.speak("Écris quelque chose dans la boîte !");
      return;
    }

    if (cleanUser === cleanTarget) {
      // SUCCESS !
      setStatus('success');
      setImageRevealed(true);
      soundManager.playSuccess();
      onAddStar(currentLevelConfig.starsReward);

      confetti({
        particleCount: 60 + difficultyLevel * 15,
        spread: 70,
        origin: { y: 0.65 }
      });

      soundManager.speak(`Bravo ! C'est bien : ${currentWordObj.word} ! +${currentLevelConfig.starsReward} étoiles !`, {
        rate: 0.85
      });
    } else {
      // RETRY
      setStatus('retry');
      soundManager.playTryAgain();
      soundManager.speak("Presque ! Écoute bien et réessaie !", {
        rate: 0.85
      });
    }
  };

  const handleNextWord = () => {
    soundManager.playPop();
    setWordIndex((prev) => (prev + 1) % activeWords.length);
  };

  const handleRandomWord = () => {
    soundManager.playPop();
    if (activeWords.length <= 1) return;
    setWordIndex((prev) => {
      let next;
      do {
        next = Math.floor(Math.random() * activeWords.length);
      } while (next === prev && activeWords.length > 1);
      return next;
    });
  };

  const formatText = (txt) => {
    return uppercase ? txt.toUpperCase() : txt.toLowerCase();
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      {/* Category filters */}
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
                ? 'bg-sky-500 text-white shadow-md scale-105'
                : 'bg-white/80 hover:bg-white text-slate-700 border border-slate-200'
            }`}
          >
            <span className="mr-1">{cat.emoji}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Main Card */}
      <div className="w-full bg-white rounded-3xl p-5 sm:p-8 shadow-xl border-4 border-sky-200 flex flex-col items-center relative overflow-hidden">
        {/* Level badge */}
        <div className={`absolute top-4 left-4 ${currentLevelConfig.badgeBg} text-xs sm:text-sm font-extrabold px-3 py-1 rounded-full border flex items-center gap-1.5`}>
          <span>{currentLevelConfig.emoji}</span>
          <span>{currentLevelConfig.name}</span>
          <span className="opacity-75">({currentWordObj.word.length} lettres)</span>
        </div>

        {/* Counter & Random button */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={handleRandomWord}
            title="Tirer un mot au hasard 🎲"
            className="flex items-center gap-1 text-xs font-black text-sky-800 bg-sky-100 hover:bg-sky-200 px-2 sm:px-2.5 py-1 rounded-xl border border-sky-300 cursor-pointer transition-all active:scale-95 shadow-xs"
          >
            <Dices className="w-4 h-4 text-sky-600" />
            <span className="hidden sm:inline">Hasard</span>
          </button>
          <span className="text-slate-500 text-xs sm:text-sm font-bold">
            {(wordIndex % activeWords.length) + 1} / {activeWords.length}
          </span>
        </div>

        {/* Level 5 Dictation Banner */}
        {difficultyLevel === 5 && !imageRevealed && (
          <div className="mt-8 bg-purple-50 border border-purple-300 text-purple-900 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full flex items-center gap-2">
            <span>🎧</span>
            <span>Mode Dictée du Maître : écoute le mot et écris-le sans voir l'image !</span>
          </div>
        )}

        {/* Image / Illustration / Mystery card */}
        <div 
          className="mt-5 mb-4 w-36 h-36 sm:w-44 sm:h-44 rounded-3xl flex items-center justify-center text-7xl sm:text-8xl shadow-inner border-4 border-dashed border-sky-300 relative transition-transform hover:scale-105"
          style={{ backgroundColor: currentWordObj.color || '#f0f9ff' }}
        >
          {imageRevealed ? (
            <span className="filter drop-shadow-md select-none animate-pop">
              {currentWordObj.emoji}
            </span>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <span className="text-5xl sm:text-6xl animate-bounce-gentle">❓</span>
              <span className="text-[11px] font-black text-purple-700 uppercase tracking-wider mt-1">
                Image Mystère
              </span>
            </div>
          )}
        </div>

        {/* Action button: Listen TTS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
          <button
            onClick={handleListen}
            className="btn-3d flex items-center gap-2 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white font-extrabold px-5 py-2.5 rounded-2xl text-base sm:text-lg cursor-pointer shadow-md"
          >
            <Volume2 className="w-6 h-6 animate-pulse" />
            <span>{difficultyLevel === 5 ? "Écoute la dictée !" : "Écoute le mot !"}</span>
          </button>

          {/* Reveal image button for Level 5 */}
          {difficultyLevel === 5 && !imageRevealed && (
            <button
              onClick={() => {
                soundManager.playPop();
                setImageRevealed(true);
              }}
              className="flex items-center gap-1.5 text-xs font-bold text-purple-700 bg-purple-100 hover:bg-purple-200 px-3 py-2.5 rounded-2xl border border-purple-300 cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              <span>Révéler l'image</span>
            </button>
          )}
        </div>

        {/* Visual Letter Count Slots (shown for levels 1 & 2, optional for 3+) */}
        {(difficultyLevel <= 2 || hintLevel >= 1) && (
          <div className="flex items-center gap-1.5 sm:gap-2 mb-3">
            {targetWord.split('').map((char, idx) => {
              const isFirst = idx === 0 && (difficultyLevel === 1 || hintLevel >= 1);
              return (
                <div
                  key={idx}
                  className="w-7 h-9 sm:w-9 sm:h-11 border-b-4 border-sky-400 flex items-center justify-center text-lg sm:text-xl font-black text-sky-900 bg-sky-50/60 rounded-t-lg"
                >
                  {isFirst ? formatText(char) : ''}
                </div>
              );
            })}
          </div>
        )}

        {/* Clue button */}
        <div className="flex flex-col items-center mb-4">
          {hintLevel === 0 ? (
            <button
              onClick={handleHint}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-700 bg-amber-100 hover:bg-amber-200 px-3 py-1.5 rounded-xl border border-amber-300 transition-all cursor-pointer"
            >
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>Besoin d'un indice ?</span>
            </button>
          ) : (
            <div className="bg-amber-50 border-2 border-amber-300 text-amber-900 rounded-2xl px-4 py-2 text-sm sm:text-base font-semibold flex items-center gap-2 animate-pop max-w-md text-center">
              <Lightbulb className="w-5 h-5 text-amber-500 shrink-0" />
              <span>
                {hintLevel === 1 
                  ? `Indice : la 1ère lettre est « ${formatText(currentWordObj.word[0])} »` 
                  : currentWordObj.hint}
              </span>
            </div>
          )}
        </div>

        {/* Input Zone */}
        <div className="w-full max-w-md flex flex-col items-center gap-3">
          <input
            ref={inputRef}
            type="text"
            value={formatText(userInput)}
            onChange={(e) => {
              setUserInput(e.target.value);
              if (status !== 'idle') setStatus('idle');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleValidate();
            }}
            placeholder={formatText("Écris ici...")}
            className={`w-full text-center text-2xl sm:text-3xl font-black py-3 sm:py-4 px-4 rounded-2xl border-4 tracking-widest focus:outline-none transition-all shadow-inner ${
              status === 'success'
                ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                : status === 'retry'
                ? 'border-rose-400 bg-rose-50 text-rose-800 animate-wiggle'
                : 'border-sky-300 bg-sky-50/50 text-sky-950 focus:border-sky-500 focus:bg-white'
            }`}
          />

          {/* Validation & Next Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-3 w-full mt-2">
            {status !== 'success' ? (
              <button
                onClick={handleValidate}
                className="btn-3d flex-1 max-w-xs flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-extrabold text-xl py-3.5 px-6 rounded-2xl cursor-pointer shadow-lg"
              >
                <CheckCircle2 className="w-7 h-7" />
                <span>VALIDER</span>
              </button>
            ) : (
              <button
                onClick={handleNextWord}
                className="btn-3d flex-1 max-w-xs flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-extrabold text-xl py-3.5 px-6 rounded-2xl cursor-pointer shadow-lg animate-bounce-gentle"
              >
                <span>MOT SUIVANT</span>
                <ArrowRight className="w-7 h-7" />
              </button>
            )}

            {/* Clear */}
            <button
              onClick={() => {
                soundManager.playPop();
                setUserInput('');
                setStatus('idle');
              }}
              title="Effacer"
              className="p-3.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-2xl border border-slate-300 transition-all cursor-pointer"
            >
              <RotateCcw className="w-6 h-6" />
            </button>

            {/* Keyboard toggle */}
            <button
              onClick={() => {
                soundManager.playPop();
                setShowKeyboard(!showKeyboard);
              }}
              title={showKeyboard ? "Cacher le clavier" : "Afficher le clavier virtuel"}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                showKeyboard 
                  ? 'bg-sky-100 text-sky-700 border-sky-300' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600 border-slate-300'
              }`}
            >
              <KeyboardIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Feedback messages */}
          {status === 'success' && (
            <div className="mt-3 flex items-center gap-2 text-emerald-700 font-extrabold text-lg sm:text-xl animate-pop">
              <Sparkles className="w-6 h-6 text-yellow-500" />
              <span>Bravo ! +{currentLevelConfig.starsReward} Étoiles gagnées !</span>
            </div>
          )}

          {status === 'retry' && (
            <div className="mt-3 text-rose-600 font-bold text-sm sm:text-base animate-pop text-center">
              <span>{difficultyLevel >= 4 ? "Attention aux accents et aux lettres muettes !" : "Presque ! Écoute le mot à nouveau ! 💡"}</span>
            </div>
          )}
        </div>
      </div>

      {/* On-screen virtual keyboard */}
      {showKeyboard && (
        <VirtualKeyboard
          onKeyPress={(char) => setUserInput(prev => prev + char)}
          onBackspace={() => setUserInput(prev => prev.slice(0, -1))}
          onSpace={() => setUserInput(prev => prev + ' ')}
          uppercase={uppercase}
        />
      )}
    </div>
  );
}
