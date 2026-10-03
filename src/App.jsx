import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import DifficultySelector from './components/DifficultySelector';
import ModeGuess from './components/ModeGuess';
import ModeScrabble from './components/ModeScrabble';
import ModeFreeWriting from './components/ModeFreeWriting';
import ModeSyllables from './components/ModeSyllables';
import ModeMemory from './components/ModeMemory';
import ModeMissingLetter from './components/ModeMissingLetter';
import ModeHangman from './components/ModeHangman';
import ModeSentenceBuilder from './components/ModeSentenceBuilder';
import ModeMaths from './components/ModeMaths';
import StickerAlbum from './components/StickerAlbum';
import { PROFILES } from './data/profiles';
import confetti from 'canvas-confetti';
import { soundManager } from './utils/audio';

export default function App() {
  // Active Profile: 'lilou' or 'tiago'
  const [activeProfileId, setActiveProfileId] = useState(() => {
    return localStorage.getItem('mot_magique_active_profile') || 'lilou';
  });

  // Separate stars for Lilou and Tiago
  const [userStars, setUserStars] = useState(() => {
    const saved = localStorage.getItem('mot_magique_user_stars');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return { lilou: 0, tiago: 0 };
  });

  // Separate sticker collections for Lilou and Tiago
  const [userStickers, setUserStickers] = useState(() => {
    const saved = localStorage.getItem('mot_magique_user_stickers');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return {
      lilou: ['chat', 'pomme', 'etoile'],
      tiago: ['lion', 'velo', 'fusee']
    };
  });

  // Separate difficulty levels for Lilou and Tiago
  const [userLevels, setUserLevels] = useState(() => {
    const saved = localStorage.getItem('mot_magique_user_levels');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return { lilou: 1, tiago: 1 };
  });

  // Current Game Mode
  const [activeMode, setActiveMode] = useState('guess');
  const [uppercase, setUppercase] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [celebrationMilestone, setCelebrationMilestone] = useState(null);

  const activeProfile = PROFILES[activeProfileId] || PROFILES.lilou;
  const currentTheme = activeProfile.theme;
  const currentStars = userStars[activeProfileId] || 0;
  const currentLevel = userLevels[activeProfileId] || 1;
  const currentStickers = userStickers[activeProfileId] || [];

  // Save profile and data to localStorage
  useEffect(() => {
    localStorage.setItem('mot_magique_active_profile', activeProfileId);
  }, [activeProfileId]);

  useEffect(() => {
    localStorage.setItem('mot_magique_user_stars', JSON.stringify(userStars));
  }, [userStars]);

  useEffect(() => {
    localStorage.setItem('mot_magique_user_stickers', JSON.stringify(userStickers));
  }, [userStickers]);

  useEffect(() => {
    localStorage.setItem('mot_magique_user_levels', JSON.stringify(userLevels));
  }, [userLevels]);

  const handleSelectLevel = (lvl) => {
    setUserLevels(prev => ({
      ...prev,
      [activeProfileId]: lvl
    }));
  };

  // Add stars and unlock word sticker
  const handleAddStar = (count = 1, wordId = null) => {
    soundManager.playStar();
    const prevStars = userStars[activeProfileId] || 0;
    const nextStars = prevStars + count;

    setUserStars(prev => ({
      ...prev,
      [activeProfileId]: nextStars
    }));

    if (wordId && !currentStickers.includes(wordId)) {
      setUserStickers(prev => ({
        ...prev,
        [activeProfileId]: [...(prev[activeProfileId] || []), wordId]
      }));
    }

    // Milestones celebrations (every 10 stars)
    if (nextStars > 0 && Math.floor(nextStars / 10) > Math.floor(prevStars / 10)) {
      const milestone = Math.floor(nextStars / 10) * 10;
      setCelebrationMilestone(milestone);
      confetti({
        particleCount: 140,
        spread: 100,
        origin: { y: 0.5 }
      });
      setTimeout(() => {
        soundManager.speak(`Superbe ${activeProfile.name} ! Tu as atteint le cap des ${milestone} étoiles brillantes !`);
      }, 500);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col bg-gradient-to-b ${currentTheme.bgGradient} text-slate-800 transition-colors duration-500`}>
      {/* Top Header */}
      <Header
        activeMode={activeMode}
        setActiveMode={setActiveMode}
        activeProfileId={activeProfileId}
        setActiveProfileId={setActiveProfileId}
        stars={currentStars}
        uppercase={uppercase}
        setUppercase={setUppercase}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        voiceEnabled={voiceEnabled}
        setVoiceEnabled={setVoiceEnabled}
        theme={currentTheme}
      />

      {/* Main Container */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-2 sm:px-4 py-3 flex flex-col items-center">
        {/* Difficulty Selector: now accessible on ALL games except the album */}
        {activeMode !== 'album' && (
          <DifficultySelector
            currentLevel={currentLevel}
            onSelectLevel={handleSelectLevel}
          />
        )}

        {/* 1. Devine & Écris */}
        {activeMode === 'guess' && (
          <ModeGuess
            uppercase={uppercase}
            onAddStar={handleAddStar}
            difficultyLevel={currentLevel}
            theme={currentTheme}
          />
        )}

        {/* 2. Scrabble Junior */}
        {activeMode === 'scrabble' && (
          <ModeScrabble
            uppercase={uppercase}
            onAddStar={handleAddStar}
            difficultyLevel={currentLevel}
            theme={currentTheme}
          />
        )}

        {/* 3. Train des Syllabes */}
        {activeMode === 'syllables' && (
          <ModeSyllables
            uppercase={uppercase}
            onAddStar={handleAddStar}
            difficultyLevel={currentLevel}
            theme={currentTheme}
          />
        )}

        {/* 4. Lettre Mystère */}
        {activeMode === 'missing' && (
          <ModeMissingLetter
            uppercase={uppercase}
            onAddStar={handleAddStar}
            difficultyLevel={currentLevel}
            theme={currentTheme}
          />
        )}

        {/* 5. Mémory Phonétique */}
        {activeMode === 'memory' && (
          <ModeMemory
            uppercase={uppercase}
            onAddStar={handleAddStar}
            difficultyLevel={currentLevel}
            theme={currentTheme}
          />
        )}

        {/* 6. Sauve la Mascotte */}
        {activeMode === 'hangman' && (
          <ModeHangman
            uppercase={uppercase}
            onAddStar={handleAddStar}
            difficultyLevel={currentLevel}
            theme={currentTheme}
          />
        )}

        {/* 7. Fabrique de Phrases */}
        {activeMode === 'sentences' && (
          <ModeSentenceBuilder
            onAddStar={handleAddStar}
            difficultyLevel={currentLevel}
            theme={currentTheme}
          />
        )}

        {/* 8. Ardoise Magique */}
        {activeMode === 'free' && (
          <ModeFreeWriting
            uppercase={uppercase}
            onAddStar={handleAddStar}
            difficultyLevel={currentLevel}
            theme={currentTheme}
          />
        )}

        {/* 9. L'Atelier des Maths (CP & CE1) */}
        {activeMode === 'maths' && (
          <ModeMaths
            onAddStar={handleAddStar}
            difficultyLevel={currentLevel}
            theme={currentTheme}
          />
        )}

        {/* 10. Grand Imagier / Album d'Autocollants */}
        {activeMode === 'album' && (
          <StickerAlbum
            unlockedStickerIds={currentStickers}
            activeProfile={activeProfile}
            theme={currentTheme}
          />
        )}
      </main>

      {/* Milestone Modal */}
      {celebrationMilestone && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full border-4 border-yellow-400 text-center shadow-2xl flex flex-col items-center animate-pop">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center text-4xl mb-3 shadow-inner">
              🏆
            </div>
            <h3 className="text-2xl font-black text-amber-900 mb-1">
              Bravo {activeProfile.name} !
            </h3>
            <p className="text-base font-bold text-amber-700 mb-4">
              Tu as atteint <span className="text-2xl font-black text-yellow-600">{celebrationMilestone}</span> étoiles brillantes !
            </p>
            <div className="flex items-center gap-1 text-3xl mb-6">
              ⭐ ⭐ ⭐ ⭐ ⭐
            </div>
            <button
              onClick={() => {
                soundManager.playPop();
                setCelebrationMilestone(null);
              }}
              className={`btn-3d w-full bg-gradient-to-r ${currentTheme.primaryBtn} text-white font-black py-3 rounded-2xl text-lg cursor-pointer shadow-md`}
            >
              CONTINUER ! ✨
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full text-center py-3 text-xs sm:text-sm font-semibold text-slate-500 border-t border-slate-200/60 mt-auto">
        Mot Magique ✨ Espace de {activeProfile.name} ({activeProfile.avatar}) • 5 Niveaux de CP à CE2
      </footer>
    </div>
  );
}
