import React, { useState } from 'react';
import { Volume2, VolumeX, Volume1, CaseUpper, CaseLower, Grid, BookOpen, Calculator, Award } from 'lucide-react';
import { PROFILES } from '../data/profiles';
import { soundManager } from '../utils/audio';

export const WORD_GAMES = [
  { id: 'guess', label: 'Devine & Écris', emoji: '🖼️', shortDesc: 'Image + texte' },
  { id: 'scrabble', label: 'Scrabble Junior', emoji: '🔠', shortDesc: 'Cases & lettres' },
  { id: 'syllables', label: 'Train des Syllabes', emoji: '🚂', shortDesc: 'Wagons à ordonner' },
  { id: 'missing', label: 'Lettre Mystère', emoji: '🧩', shortDesc: 'Trouve le son' },
  { id: 'memory', label: 'Mémory', emoji: '🃏', shortDesc: 'Paires image/mot' },
  { id: 'hangman', label: 'Sauve Mascotte', emoji: '🎈', shortDesc: 'Pendu bienveillant' },
  { id: 'sentences', label: 'Phrases Magiques', emoji: '📜', shortDesc: 'Fabrique de phrases' },
  { id: 'free', label: 'Ardoise Magique', emoji: '📝', shortDesc: 'Écriture libre' }
];

export default function Header({
  activeMode,
  setActiveMode,
  activeProfileId,
  setActiveProfileId,
  stars,
  uppercase,
  setUppercase,
  soundEnabled,
  setSoundEnabled,
  voiceEnabled,
  setVoiceEnabled,
  theme
}) {
  const currentProfile = PROFILES[activeProfileId] || PROFILES.lilou;

  // Determine current active section: 'words' | 'maths' | 'album'
  const isWordGame = WORD_GAMES.some(g => g.id === activeMode);
  const activeSection = activeMode === 'maths' ? 'maths' : activeMode === 'album' ? 'album' : 'words';

  const handleProfileSwitch = (id) => {
    soundManager.playStar();
    setActiveProfileId(id);
    const profile = PROFILES[id];
    soundManager.speak(`Bonjour ${profile.name} ! Bienvenue sur ton ardoise magique !`);
  };

  const handleSelectGame = (gameId) => {
    soundManager.playPop();
    setActiveMode(gameId);
  };

  const handleSectionSwitch = (section) => {
    soundManager.playPop();
    if (section === 'words') {
      if (!isWordGame) setActiveMode('guess');
    } else if (section === 'maths') {
      setActiveMode('maths');
    } else if (section === 'album') {
      setActiveMode('album');
    }
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
    if (next) soundManager.speak("Voix activée !");
  };

  const toggleCase = () => {
    soundManager.playPop();
    setUppercase(!uppercase);
  };

  return (
    <header className={`w-full bg-white/95 backdrop-blur border-b-4 ${theme?.headerBorder || 'border-amber-200'} px-2 sm:px-6 py-2.5 shadow-md sticky top-0 z-30 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto flex flex-col gap-2.5">
        {/* ROW 1: Profiles Switcher, App Logo, Star Counter, Controls */}
        <div className="flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
          {/* Profile Switcher Pills (Lilou vs Tiago) */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-2xl border border-slate-200 shrink-0">
            {Object.values(PROFILES).map((p) => {
              const isActive = p.id === activeProfileId;
              return (
                <button
                  key={p.id}
                  onClick={() => handleProfileSwitch(p.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-black text-xs sm:text-sm cursor-pointer transition-all ${
                    isActive
                      ? p.id === 'lilou'
                        ? 'bg-gradient-to-r from-pink-400 to-rose-500 text-white shadow-md scale-105'
                        : 'bg-gradient-to-r from-sky-400 to-blue-600 text-white shadow-md scale-105'
                      : 'text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <span className="text-base">{p.avatar}</span>
                  <span>{p.name}</span>
                </button>
              );
            })}
          </div>

          {/* Center Brand Title */}
          <div className="flex items-center gap-2">
            <span className="text-2xl animate-bounce-gentle">✏️</span>
            <h1 className="text-lg sm:text-2xl font-black tracking-tight flex items-center gap-1.5">
              <span className={theme?.primaryText || 'text-amber-900'}>Mot Magique</span>
            </h1>
          </div>

          {/* Right Action Icons: Stars + Sound/Voice/Case Toggles */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Stars Counter */}
            <div
              title={`Étoiles de ${currentProfile.name}`}
              className="flex items-center gap-1 bg-gradient-to-r from-amber-300 to-yellow-400 border-2 border-amber-500 text-amber-950 font-black px-2.5 sm:px-3 py-1 rounded-full shadow-md animate-pop text-xs sm:text-sm"
            >
              <span>⭐</span>
              <span>{stars}</span>
            </div>

            {/* Case (MAJ / min) */}
            <button
              onClick={toggleCase}
              title={uppercase ? "Passer en minuscules" : "Passer en MAJUSCULES"}
              className="p-1.5 sm:p-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl border border-slate-300 font-bold flex items-center gap-1 text-xs cursor-pointer"
            >
              {uppercase ? (
                <>
                  <CaseUpper className="w-4 h-4 text-indigo-600" />
                  <span className="hidden sm:inline">MAJ</span>
                </>
              ) : (
                <>
                  <CaseLower className="w-4 h-4 text-indigo-600" />
                  <span className="hidden sm:inline">min</span>
                </>
              )}
            </button>

            {/* Sound FX */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? "Couper les sons" : "Activer les sons"}
              className="p-1.5 sm:p-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl border border-slate-300 cursor-pointer"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-600" /> : <VolumeX className="w-4 h-4 text-rose-500" />}
            </button>

            {/* Voice TTS */}
            <button
              onClick={toggleVoice}
              title={voiceEnabled ? "Couper la voix" : "Activer la voix"}
              className="p-1.5 sm:p-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl border border-slate-300 cursor-pointer"
            >
              {voiceEnabled ? <Volume1 className="w-4 h-4 text-sky-600" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
            </button>
          </div>
        </div>

        {/* ROW 2: Primary Hub Sections (Words, Maths, Album) */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-3 border-t border-slate-100 pt-2">
          <button
            onClick={() => handleSectionSwitch('words')}
            className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-xl font-black text-xs sm:text-sm cursor-pointer transition-all ${
              activeSection === 'words'
                ? `bg-gradient-to-r ${theme?.primaryBtn || 'from-amber-400 to-orange-500'} text-white shadow-md scale-105 ring-2 ring-white`
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Mots & Lecture</span>
            <span className="text-[10px] bg-black/15 px-1.5 py-0.2 rounded-full font-bold">8 jeux</span>
          </button>

          <button
            onClick={() => handleSectionSwitch('maths')}
            className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-xl font-black text-xs sm:text-sm cursor-pointer transition-all ${
              activeSection === 'maths'
                ? `bg-gradient-to-r ${theme?.primaryBtn || 'from-sky-400 to-blue-600'} text-white shadow-md scale-105 ring-2 ring-white`
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Maths CP/CE1</span>
          </button>

          <button
            onClick={() => handleSectionSwitch('album')}
            className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-xl font-black text-xs sm:text-sm cursor-pointer transition-all ${
              activeSection === 'album'
                ? `bg-gradient-to-r from-amber-400 to-yellow-500 text-white shadow-md scale-105 ring-2 ring-white`
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <Award className="w-4 h-4 text-amber-500" />
            <span>Mon Imagier</span>
          </button>
        </div>

        {/* ROW 3: Sub-Game Pills (when in Mots & Lecture) - Wrap cleanly on all screens! */}
        {activeSection === 'words' && (
          <div className="flex flex-wrap items-center justify-center gap-1.5 w-full pt-1">
            {WORD_GAMES.map((game) => {
              const isSelected = activeMode === game.id;
              return (
                <button
                  key={game.id}
                  onClick={() => handleSelectGame(game.id)}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl font-bold text-xs transition-all cursor-pointer select-none ${
                    isSelected
                      ? `${theme?.primaryLight || 'bg-amber-100 text-amber-900 border-amber-300'} border-2 shadow-sm font-black scale-105 ring-1 ring-amber-400`
                      : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
                  }`}
                  title={game.shortDesc}
                >
                  <span className="text-sm">{game.emoji}</span>
                  <span>{game.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
