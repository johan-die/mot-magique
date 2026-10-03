import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  Volume2, 
  Lightbulb, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw, 
  Keyboard as KeyboardIcon,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { WORDS, WORD_CATEGORIES } from '../data/words';
import { soundManager } from '../utils/audio';
import VirtualKeyboard from './VirtualKeyboard';

export default function ModeGuess({ uppercase, onAddStar }) {
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [wordIndex, setWordIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'success' | 'retry'
  const [hintLevel, setHintLevel] = useState(0); // 0: none, 1: first letter, 2: text hint
  const [showKeyboard, setShowKeyboard] = useState(true);
  const inputRef = useRef(null);

  // Filter words by selected category
  const filteredWords = selectedCategory === 'tous' 
    ? WORDS 
    : WORDS.filter(w => w.category === selectedCategory);

  const currentWordObj = filteredWords[wordIndex] || filteredWords[0];
  const targetWord = currentWordObj ? currentWordObj.word.toLowerCase() : '';

  // Reset state when changing word
  useEffect(() => {
    setUserInput('');
    setStatus('idle');
    setHintLevel(0);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [wordIndex, selectedCategory]);

  // Clean word for comparison (removes accents for kids if needed, though we teach correct spelling)
  const normalize = (str) => {
    return str
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  const handleListen = () => {
    soundManager.playPop();
    soundManager.speak(currentWordObj.word, { rate: 0.8 });
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
    const cleanUser = normalize(userInput);
    const cleanTarget = normalize(targetWord);

    if (!cleanUser) {
      soundManager.speak("Écris quelque chose dans la boîte !");
      return;
    }

    if (cleanUser === cleanTarget) {
      // SUCCESS !
      setStatus('success');
      soundManager.playSuccess();
      onAddStar();

      // Confetti burst
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.65 }
      });

      // TTS Congratulations
      soundManager.speak(`Bravo ! C'est bien : ${currentWordObj.word} !`, {
        rate: 0.85
      });
    } else {
      // RETRY
      setStatus('retry');
      soundManager.playTryAgain();
      soundManager.speak("Presque ! Regarde bien l'image et réessaie !", {
        rate: 0.85
      });
    }
  };

  const handleNextWord = () => {
    soundManager.playPop();
    setWordIndex((prev) => (prev + 1) % filteredWords.length);
  };

  const handleKeyFromVirtual = (char) => {
    setUserInput((prev) => prev + char);
  };

  const handleBackspaceFromVirtual = () => {
    setUserInput((prev) => prev.slice(0, -1));
  };

  const handleSpaceFromVirtual = () => {
    setUserInput((prev) => prev + ' ');
  };

  const formatText = (txt) => {
    return uppercase ? txt.toUpperCase() : txt.toLowerCase();
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      {/* Category selection chips */}
      <div className="flex flex-wrap justify-center gap-2 mb-4 w-full px-2">
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

      {/* Main Game Card */}
      <div className="w-full bg-white rounded-3xl p-5 sm:p-8 shadow-xl border-4 border-sky-200 flex flex-col items-center relative overflow-hidden">
        {/* Level badge */}
        <div className="absolute top-4 left-4 bg-sky-100 text-sky-800 text-xs sm:text-sm font-bold px-3 py-1 rounded-full border border-sky-300">
          Niveau {currentWordObj.level} • {currentWordObj.word.length} lettres
        </div>

        {/* Word index counter */}
        <div className="absolute top-4 right-4 text-slate-500 text-xs sm:text-sm font-semibold">
          Mot {wordIndex + 1} / {filteredWords.length}
        </div>

        {/* Large visual illustration */}
        <div 
          className="mt-6 mb-4 w-36 h-36 sm:w-48 sm:h-48 rounded-3xl flex items-center justify-center text-7xl sm:text-9xl shadow-inner border-4 border-dashed border-sky-300 transform transition-transform hover:scale-105"
          style={{ backgroundColor: currentWordObj.color || '#f0f9ff' }}
        >
          <span className="filter drop-shadow-md select-none">{currentWordObj.emoji}</span>
        </div>

        {/* Listen button (TTS) */}
        <button
          onClick={handleListen}
          className="btn-3d flex items-center gap-2 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white font-extrabold px-5 py-2.5 rounded-2xl text-base sm:text-lg cursor-pointer shadow-md mb-4"
        >
          <Volume2 className="w-6 h-6 animate-pulse" />
          <span>Écoute le mot !</span>
        </button>

        {/* Clue button & clue text */}
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
            <div className="bg-amber-50 border-2 border-amber-300 text-amber-900 rounded-2xl px-4 py-2 text-sm sm:text-base font-semibold flex items-center gap-2 animate-pop">
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
          <div className="relative w-full">
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
              className={`w-full text-center text-2xl sm:text-4xl font-black py-3 sm:py-4 px-4 rounded-2xl border-4 tracking-widest focus:outline-none transition-all shadow-inner ${
                status === 'success'
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                  : status === 'retry'
                  ? 'border-rose-400 bg-rose-50 text-rose-800 animate-wiggle'
                  : 'border-sky-300 bg-sky-50/50 text-sky-950 focus:border-sky-500 focus:bg-white'
              }`}
            />
          </div>

          {/* Validation and Action buttons */}
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

            {/* Clear button */}
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

            {/* Toggle virtual keyboard */}
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

          {/* Feedback message */}
          {status === 'success' && (
            <div className="mt-3 flex items-center gap-2 text-emerald-700 font-extrabold text-lg sm:text-xl animate-pop">
              <Sparkles className="w-6 h-6 text-yellow-500" />
              <span>Champion ! +1 Étoile gagnée !</span>
            </div>
          )}

          {status === 'retry' && (
            <div className="mt-3 text-rose-600 font-bold text-base sm:text-lg animate-pop">
              <span>Ne baisse pas les bras, réessaie ou écoute le mot ! 💡</span>
            </div>
          )}
        </div>
      </div>

      {/* On-screen tactile keyboard */}
      {showKeyboard && (
        <VirtualKeyboard
          onKeyPress={handleKeyFromVirtual}
          onBackspace={handleBackspaceFromVirtual}
          onSpace={handleSpaceFromVirtual}
          uppercase={uppercase}
        />
      )}
    </div>
  );
}
