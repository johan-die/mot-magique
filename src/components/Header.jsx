import React from 'react';
import { Sparkles, Volume2, VolumeX, Volume1, CaseUpper, CaseLower } from 'lucide-react';
import { soundManager } from '../utils/audio';

export default function Header({
  activeMode,
  setActiveMode,
  stars,
  uppercase,
  setUppercase,
  soundEnabled,
  setSoundEnabled,
  voiceEnabled,
  setVoiceEnabled
}) {
  const modes = [
    { id: 'guess', label: '1. Devine & Écris', emoji: '🖼️', color: 'from-sky-400 to-blue-500' },
    { id: 'free', label: '2. Ardoise Magique', emoji: '📝', color: 'from-emerald-400 to-teal-500' },
    { id: 'scrabble', label: '3. Scrabble Junior', emoji: '🔠', color: 'from-amber-400 to-orange-500' },
  ];

  const handleModeChange = (id) => {
    soundManager.playPop();
    setActiveMode(id);
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundManager.soundEnabled = next;
    if (next) soundManager.playPop();
  };

  const toggleVoice = () => {
    const next = !voiceEnabled;
    setVoiceEnabled(next);
    soundManager.voiceEnabled = next;
    if (next) {
      soundManager.speak("Voix activée !");
    }
  };

  const toggleCase = () => {
    soundManager.playPop();
    setUppercase(!uppercase);
  };

  return (
    <header className="w-full bg-white/95 backdrop-blur border-b-4 border-amber-200 px-3 sm:px-6 py-3 shadow-md sticky top-0 z-30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-tr from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center text-3xl shadow-md transform -rotate-3 animate-bounce-gentle">
            ✏️
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-amber-900 tracking-tight flex items-center gap-2">
              Mot Magique
              <Sparkles className="w-6 h-6 text-amber-500 animate-spin" style={{ animationDuration: '8s' }} />
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-amber-700">Apprends à écrire en t'amusant !</p>
          </div>
        </div>

        {/* Mode Navigation Buttons */}
        <nav className="flex flex-wrap justify-center items-center gap-2">
          {modes.map((mode) => {
            const isActive = activeMode === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => handleModeChange(mode.id)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-2xl font-bold text-sm sm:text-base transition-all cursor-pointer ${
                  isActive
                    ? `bg-gradient-to-r ${mode.color} text-white shadow-md scale-105 ring-2 ring-white ring-offset-2 ring-offset-amber-200`
                    : 'bg-amber-100/70 text-amber-900 hover:bg-amber-200/80 active:scale-95'
                }`}
              >
                <span className="text-lg">{mode.emoji}</span>
                <span>{mode.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Stars counter & controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Star Counter */}
          <div 
            title="Tes étoiles gagnées !"
            className="flex items-center gap-2 bg-gradient-to-r from-amber-300 to-yellow-400 border-2 border-amber-500 text-amber-950 font-black px-3.5 py-1.5 rounded-full shadow-md animate-pop"
          >
            <span className="text-xl">⭐</span>
            <span className="text-lg sm:text-xl">{stars}</span>
          </div>

          {/* Majuscules / Minuscules Toggle */}
          <button
            onClick={toggleCase}
            title={uppercase ? "Passer en lettres minuscules" : "Passer en MAJUSCULES"}
            className="p-2 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded-xl border border-amber-300 transition-all font-bold flex items-center gap-1 text-xs cursor-pointer shadow-sm"
          >
            {uppercase ? (
              <>
                <CaseUpper className="w-5 h-5 text-indigo-600" />
                <span className="hidden sm:inline">MAJ</span>
              </>
            ) : (
              <>
                <CaseLower className="w-5 h-5 text-indigo-600" />
                <span className="hidden sm:inline">min</span>
              </>
            )}
          </button>

          {/* Sound FX Toggle */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? "Couper les effets sonores" : "Activer les sons"}
            className="p-2 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded-xl border border-amber-300 transition-all cursor-pointer shadow-sm"
          >
            {soundEnabled ? <Volume2 className="w-5 h-5 text-emerald-600" /> : <VolumeX className="w-5 h-5 text-rose-500" />}
          </button>

          {/* Voice / TTS Toggle */}
          <button
            onClick={toggleVoice}
            title={voiceEnabled ? "Désactiver la voix" : "Activer la voix"}
            className="p-2 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded-xl border border-amber-300 transition-all cursor-pointer shadow-sm"
          >
            {voiceEnabled ? <Volume1 className="w-5 h-5 text-sky-600" /> : <VolumeX className="w-5 h-5 text-slate-400" />}
          </button>
        </div>
      </div>
    </header>
  );
}
