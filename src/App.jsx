import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ModeGuess from './components/ModeGuess';
import ModeFreeWriting from './components/ModeFreeWriting';
import ModeScrabble from './components/ModeScrabble';
import { Trophy, Star, Sparkles, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from './utils/audio';

export default function App() {
  const [activeMode, setActiveMode] = useState('guess'); // 'guess' | 'free' | 'scrabble'
  const [stars, setStars] = useState(() => {
    const saved = localStorage.getItem('mot_magique_stars');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [uppercase, setUppercase] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [celebrationMilestone, setCelebrationMilestone] = useState(null);

  // Persist stars
  useEffect(() => {
    localStorage.setItem('mot_magique_stars', stars.toString());
  }, [stars]);

  const handleAddStar = (count = 1) => {
    soundManager.playStar();
    const nextStars = stars + count;
    setStars(nextStars);

    // Milestones celebrations (every 5 stars)
    if (nextStars > 0 && nextStars % 5 === 0) {
      setCelebrationMilestone(nextStars);
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.5 }
      });
      setTimeout(() => {
        soundManager.speak(`Super champion ! Tu as accumulé ${nextStars} étoiles brillantes !`);
      }, 500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100 text-slate-800">
      {/* Top Navigation & Settings */}
      <Header
        activeMode={activeMode}
        setActiveMode={setActiveMode}
        stars={stars}
        uppercase={uppercase}
        setUppercase={setUppercase}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        voiceEnabled={voiceEnabled}
        setVoiceEnabled={setVoiceEnabled}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-6 flex flex-col items-center">
        {activeMode === 'guess' && (
          <ModeGuess
            uppercase={uppercase}
            onAddStar={handleAddStar}
          />
        )}

        {activeMode === 'free' && (
          <ModeFreeWriting
            uppercase={uppercase}
            onAddStar={handleAddStar}
          />
        )}

        {activeMode === 'scrabble' && (
          <ModeScrabble
            uppercase={uppercase}
            onAddStar={handleAddStar}
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
              Incroyable !
            </h3>
            <p className="text-base font-bold text-amber-700 mb-4">
              Tu as atteint <span className="text-2xl font-black text-yellow-600">{celebrationMilestone}</span> étoiles !
            </p>
            <div className="flex items-center gap-1 text-3xl mb-6">
              ⭐ ⭐ ⭐ ⭐ ⭐
            </div>
            <button
              onClick={() => {
                soundManager.playPop();
                setCelebrationMilestone(null);
              }}
              className="btn-3d w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-black py-3 rounded-2xl text-lg cursor-pointer shadow-md"
            >
              CONTINUER ! ✨
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full text-center py-4 text-xs sm:text-sm font-semibold text-amber-900/60 border-t border-amber-200/60 mt-auto">
        Mot Magique ✨ Apprends à lire et à écrire pour les 6-7 ans (CP / CE1)
      </footer>
    </div>
  );
}
