import React, { useState } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Volume1, 
  CaseUpper, 
  CaseLower, 
  Menu, 
  X, 
  Sparkles, 
  BookOpen, 
  Calculator, 
  Award,
  ChevronDown,
  Maximize,
  Minimize
} from 'lucide-react';
import { PROFILES } from '../data/profiles';
import { soundManager } from '../utils/audio';

export const ALL_ACTIVITIES = [
  {
    category: 'lecture',
    categoryName: '📚 Mots & Écriture',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    headerGradient: 'from-amber-400 to-orange-500',
    games: [
      { id: 'guess', label: 'Devine & Écris', emoji: '🖼️', desc: 'Image, audio et saisie au clavier' },
      { id: 'scrabble', label: 'Scrabble Junior', emoji: '🔠', desc: 'Place les lettres dans les cases' },
      { id: 'syllables', label: 'Train des Syllabes', emoji: '🚂', desc: 'Assemble les wagons de syllabes' },
      { id: 'missing', label: 'Lettre Mystère', emoji: '🧩', desc: 'Trouve la lettre ou le son manquant' },
      { id: 'memory', label: 'Mémory Phonétique', emoji: '🃏', desc: 'Associe image et mot écrit' },
      { id: 'hangman', label: 'Sauve la Mascotte', emoji: '🎈', desc: 'Pendu bienveillant sans violence' },
      { id: 'sentences', label: 'Phrases Magiques', emoji: '📜', desc: 'Remets les mots dans le bon ordre' },
      { id: 'free', label: 'Ardoise Magique', emoji: '📝', desc: 'Zone libre & vérificateur orthographique' }
    ]
  },
  {
    category: 'maths',
    categoryName: '🧮 Mathématiques CP & CE1',
    badgeColor: 'bg-sky-100 text-sky-900 border-sky-300',
    headerGradient: 'from-sky-400 to-blue-600',
    games: [
      { id: 'maths', label: 'L\'Atelier des Maths', emoji: '🧮', desc: 'Dénombrement, calculs et problèmes infinis' }
    ]
  },
  {
    category: 'album',
    categoryName: '🏆 Récompenses & Collection',
    badgeColor: 'bg-yellow-100 text-yellow-900 border-yellow-300',
    headerGradient: 'from-yellow-400 to-amber-500',
    games: [
      { id: 'album', label: 'Mon Grand Imagier', emoji: '📖', desc: 'Collection d\'autocollants dorés débloqués' }
    ]
  }
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
  isFullscreen,
  toggleFullscreen,
  theme
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentProfile = PROFILES[activeProfileId] || PROFILES.lilou;

  // Find currently active game info
  const allGames = ALL_ACTIVITIES.flatMap(cat => cat.games);
  const currentGame = allGames.find(g => g.id === activeMode) || allGames[0];

  const handleProfileSwitch = (id) => {
    soundManager.playStar();
    setActiveProfileId(id);
    const profile = PROFILES[id];
    soundManager.speak(`Bonjour ${profile.name} !`);
  };

  const handleSelectGame = (gameId) => {
    soundManager.playPop();
    setActiveMode(gameId);
    setMenuOpen(false); // Close menu automatically so child sees the game
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
    <>
      {/* Compact Sticky Header Bar */}
      <header className={`w-full bg-white/95 backdrop-blur border-b-3 ${theme?.headerBorder || 'border-amber-200'} px-2 sm:px-5 py-2 shadow-sm sticky top-0 z-30 transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
          {/* LEFT: Profile Switcher (Lilou / Tiago) */}
          <div className="flex items-center gap-1 p-0.5 bg-slate-100 rounded-2xl border border-slate-200 shrink-0">
            {Object.values(PROFILES).map((p) => {
              const isActive = p.id === activeProfileId;
              return (
                <button
                  key={p.id}
                  onClick={() => handleProfileSwitch(p.id)}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl font-black text-xs cursor-pointer transition-all ${
                    isActive
                      ? p.id === 'lilou'
                        ? 'bg-gradient-to-r from-pink-400 to-rose-500 text-white shadow-xs scale-102'
                        : 'bg-gradient-to-r from-sky-400 to-blue-600 text-white shadow-xs scale-102'
                      : 'text-slate-600 hover:bg-slate-200'
                  }`}
                  title={`Profil de ${p.name}`}
                >
                  <span className="text-sm sm:text-base">{p.avatar}</span>
                  <span className="hidden min-[420px]:inline">{p.name}</span>
                </button>
              );
            })}
          </div>

          {/* CENTER: Current Active Game + "Changer de jeu" button */}
          <button
            onClick={() => {
              soundManager.playPop();
              setMenuOpen(!menuOpen);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl border-2 transition-all cursor-pointer shadow-xs active:scale-95 ${
              theme?.primaryLight || 'bg-amber-50 text-amber-900 border-amber-300'
            }`}
            title="Ouvrir le menu de toutes les activités"
          >
            <span className="text-lg sm:text-xl">{currentGame.emoji}</span>
            <span className="font-black text-xs sm:text-sm truncate max-w-[120px] sm:max-w-none">
              {currentGame.label}
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* RIGHT: Stars counter & Menu toggle button */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Stars Counter */}
            <div
              title={`Étoiles de ${currentProfile.name}`}
              className="flex items-center gap-1 bg-gradient-to-r from-amber-300 to-yellow-400 border-2 border-amber-500 text-amber-950 font-black px-2.5 py-1 rounded-full shadow-xs text-xs sm:text-sm"
            >
              <span>⭐</span>
              <span>{stars}</span>
            </div>

            {/* Quick Settings: Case Toggle (MAJ/min) */}
            <button
              onClick={toggleCase}
              title={uppercase ? "Passer en minuscules" : "Passer en MAJUSCULES"}
              className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl border border-slate-300 font-bold flex items-center text-xs cursor-pointer"
            >
              {uppercase ? (
                <CaseUpper className="w-4 h-4 text-indigo-600" />
              ) : (
                <CaseLower className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            {/* Mode Plein Écran */}
            <button
              onClick={toggleFullscreen}
              title={isFullscreen ? "Quitter le plein écran" : "Passer en plein écran"}
              className={`p-1.5 rounded-xl border font-bold flex items-center text-xs cursor-pointer transition-all ${
                isFullscreen
                  ? 'bg-amber-100 text-amber-900 border-amber-400 shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
              }`}
            >
              {isFullscreen ? (
                <Minimize className="w-4 h-4 text-amber-700" />
              ) : (
                <Maximize className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Menu Trigger Button */}
            <button
              onClick={() => {
                soundManager.playPop();
                setMenuOpen(!menuOpen);
              }}
              className={`p-1.5 sm:p-2 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-center ${
                menuOpen 
                  ? 'bg-rose-500 text-white border-rose-600' 
                  : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300'
              }`}
              title={menuOpen ? "Fermer le menu" : "Menu des activités"}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN RESPONSIVE ACTIVITY DRAWER / MODAL */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex flex-col justify-end sm:justify-center items-center p-0 sm:p-4 animate-pop">
          <div className="w-full sm:max-w-2xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border-t-4 sm:border-4 border-amber-300 flex flex-col max-h-[90vh] sm:max-h-[85vh] overflow-hidden">
            {/* Modal Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-amber-50/60">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎮</span>
                <div>
                  <h2 className="text-base sm:text-lg font-black text-slate-800">
                    Toutes les Activités
                  </h2>
                  <p className="text-xs text-slate-500 font-semibold">
                    Choisis un jeu pour {currentProfile.name} {currentProfile.avatar}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => {
                  soundManager.playPop();
                  setMenuOpen(false);
                }}
                className="p-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content: Categorized activities list */}
            <div className="p-3 sm:p-5 overflow-y-auto flex flex-col gap-4">
              {ALL_ACTIVITIES.map((section) => (
                <div key={section.category} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-600">
                      {section.categoryName}
                    </span>
                    <div className="h-0.5 flex-1 bg-slate-100 rounded-full"></div>
                  </div>

                  {/* Games Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {section.games.map((game) => {
                      const isSelected = activeMode === game.id;
                      return (
                        <button
                          key={game.id}
                          onClick={() => handleSelectGame(game.id)}
                          className={`flex items-center gap-3 p-3 rounded-2xl border-2 text-left transition-all cursor-pointer select-none active:scale-98 ${
                            isSelected
                              ? `${theme?.primaryLight || 'bg-amber-100 text-amber-950 border-amber-400'} ring-2 ring-amber-400 shadow-sm font-black`
                              : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                          }`}
                        >
                          <span className="text-2xl sm:text-3xl shrink-0 p-1.5 bg-slate-50 rounded-xl shadow-xs">
                            {game.emoji}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="font-extrabold text-sm sm:text-base truncate">
                                {game.label}
                              </span>
                              {isSelected && (
                                <span className="text-[10px] bg-emerald-500 text-white font-black px-1.5 py-0.5 rounded-full ml-1">
                                  En cours
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-slate-500 truncate font-semibold">
                              {game.desc}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* Sound & Screen Settings Section in Drawer */}
              <div className="border-t border-slate-200 pt-3 mt-1 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold text-slate-500">
                  Options & Affichage :
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={toggleSound}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold cursor-pointer ${
                      soundEnabled ? 'bg-emerald-100 text-emerald-800 border-emerald-300' : 'bg-slate-100 text-slate-500 border-slate-300'
                    }`}
                  >
                    {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-600" /> : <VolumeX className="w-4 h-4" />}
                    <span>Bruitages</span>
                  </button>

                  <button
                    onClick={toggleVoice}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold cursor-pointer ${
                      voiceEnabled ? 'bg-sky-100 text-sky-800 border-sky-300' : 'bg-slate-100 text-slate-500 border-slate-300'
                    }`}
                  >
                    {voiceEnabled ? <Volume1 className="w-4 h-4 text-sky-600" /> : <VolumeX className="w-4 h-4" />}
                    <span>Voix TTS</span>
                  </button>

                  <button
                    onClick={toggleFullscreen}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold cursor-pointer ${
                      isFullscreen ? 'bg-amber-100 text-amber-900 border-amber-300 shadow-xs' : 'bg-slate-100 text-slate-600 border-slate-300'
                    }`}
                  >
                    {isFullscreen ? <Minimize className="w-4 h-4 text-amber-700" /> : <Maximize className="w-4 h-4 text-slate-600" />}
                    <span>{isFullscreen ? 'Quitter Plein Écran' : 'Plein Écran'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
