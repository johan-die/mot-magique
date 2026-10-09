// Sound effects using Web Audio API and Native Web Speech API
// Zero external assets needed, fast, resilient & child-friendly

/**
 * Nettoie et améliore le texte français pour la synthèse vocale :
 * - Supprime les émojis visuels (qui sont parfois lus littéralement par certains moteurs TTS)
 * - Corrige les tournures de gains d'étoiles ("+1 étoiles", "+1 étoile", "+2 étoiles", etc.)
 * - Assure les bons accords grammaticaux féminins ("une étoile gagnée", "étoiles gagnées")
 */
export function sanitizeFrenchSpeech(text) {
  if (!text) return '';
  let cleaned = text;

  // 1. Supprime les émojis graphiques (Unicode Extended Pictographic)
  cleaned = cleaned.replace(/\p{Extended_Pictographic}/gu, '');

  // 2. Corrige les formules de récompense d'étoiles
  cleaned = cleaned.replace(/\+\s*1\s*étoiles?(\s+gagnées?)?/giu, 'Une étoile gagnée');
  cleaned = cleaned.replace(/\+\s*2\s*étoiles?(\s+gagnées?)?/giu, 'Deux étoiles gagnées');
  cleaned = cleaned.replace(/\+\s*3\s*étoiles?(\s+gagnées?)?/giu, 'Trois étoiles gagnées');
  cleaned = cleaned.replace(/\+\s*4\s*étoiles?(\s+gagnées?)?/giu, 'Quatre étoiles gagnées');
  cleaned = cleaned.replace(/\+\s*5\s*étoiles?(\s+gagnées?)?/giu, 'Cinq étoiles gagnées');
  cleaned = cleaned.replace(/\+\s*(\d+)\s*étoiles?(\s+gagnées?)?/giu, '$1 étoiles gagnées');

  // 3. Accords grammaticaux pour "étoile" (féminin)
  cleaned = cleaned.replace(/(?<!\p{L})un\s+étoile\s+gagné(e)?(?!\p{L})/giu, 'une étoile gagnée');
  cleaned = cleaned.replace(/(?<!\p{L})un\s+étoile(?!\p{L})/giu, 'une étoile');
  cleaned = cleaned.replace(/(?<!\p{L})1\s+étoiles?(?!\p{L})/giu, 'une étoile');
  cleaned = cleaned.replace(/(?<!\p{L})étoile\s+gagné(?!\p{L})/giu, 'étoile gagnée');
  cleaned = cleaned.replace(/(?<!\p{L})étoiles\s+gagné(?!\p{L})/giu, 'étoiles gagnées');
  cleaned = cleaned.replace(/(?<!\p{L})étoiles\s+gagnée(?!\p{L})/giu, 'étoiles gagnées');

  // 4. Supprime le symbole + devant les chiffres isolés s'il en reste
  cleaned = cleaned.replace(/\+(\d+)/g, '$1');

  // 5. Nettoie les espaces multiples et la ponctuation
  cleaned = cleaned.replace(/\s+/g, ' ').replace(/\s+([!?:;,])/g, ' $1').trim();

  return cleaned;
}

/**
 * Retourne la phrase parlée pour la récompense d'étoiles (ex: "Une étoile gagnée !", "Deux étoiles gagnées !")
 */
export function getStarRewardSpeech(count) {
  if (count === 1) {
    return 'Une étoile gagnée !';
  }
  const frenchNumbers = {
    2: 'Deux',
    3: 'Trois',
    4: 'Quatre',
    5: 'Cinq',
    6: 'Six',
    7: 'Sept'
  };
  const numWord = frenchNumbers[count] || `${count}`;
  return `${numWord} étoiles gagnées !`;
}

/**
 * Format d'affichage pour les badges UI de récompense (ex: "+1 étoile gagnée", "+2 étoiles gagnées")
 */
export function formatStarsRewardBadge(count) {
  if (count === 1) {
    return '+1 étoile gagnée';
  }
  return `+${count} étoiles gagnées`;
}

/**
 * Prépare les lettres pour un épelage clair et bien articulé en français
 */
export function formatLettersForSpelling(word) {
  if (!word) return '';
  return word
    .toUpperCase()
    .split('')
    .filter(char => char.trim() !== '' && char !== '-' && char !== "'")
    .join(', ');
}

class SoundManager {
  constructor() {
    this.audioCtx = null;
    this.soundEnabled = true;
    this.voiceEnabled = true;
    this.currentUtterance = null;
    this.fallbackTimer = null;
    this.isCancelled = false;
    this.voices = [];

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => {
        this.voices = window.speechSynthesis.getVoices() || [];
      };
      this.voices = window.speechSynthesis.getVoices() || [];
    }
  }

  init() {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  // Play a cheerful celebration arpeggio (C5 - E5 - G5 - C6)
  playSuccess() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime + idx * 0.09);

      gain.gain.setValueAtTime(0, this.audioCtx.currentTime + idx * 0.09);
      gain.gain.linearRampToValueAtTime(0.25, this.audioCtx.currentTime + idx * 0.09 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + idx * 0.09 + 0.35);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(this.audioCtx.currentTime + idx * 0.09);
      osc.stop(this.audioCtx.currentTime + idx * 0.09 + 0.4);
    });
  }

  // Gentle pop / tap sound for buttons and letters
  playPop() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, this.audioCtx.currentTime + 0.07);

    gain.gain.setValueAtTime(0.2, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.09);
  }

  // Cute wooden tile placement sound
  playTile() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(600, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, this.audioCtx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.2, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.06);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.07);
  }

  // Gentle retry sound (never punitive, soft marimba chord)
  playTryAgain() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const notes = [440, 392]; // A4, G4
    notes.forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime + idx * 0.12);

      gain.gain.setValueAtTime(0.15, this.audioCtx.currentTime + idx * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + idx * 0.12 + 0.25);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(this.audioCtx.currentTime + idx * 0.12);
      osc.stop(this.audioCtx.currentTime + idx * 0.12 + 0.28);
    });
  }

  // Star sparkle sound
  playStar() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    const notes = [659.25, 987.77, 1318.51];
    notes.forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime + idx * 0.06);

      gain.gain.setValueAtTime(0.2, this.audioCtx.currentTime + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + idx * 0.06 + 0.2);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(this.audioCtx.currentTime + idx * 0.06);
      osc.stop(this.audioCtx.currentTime + idx * 0.06 + 0.22);
    });
  }

  // Annule la synthèse vocale en cours et les minuteurs associés
  cancel() {
    this.isCancelled = true;
    if (this.fallbackTimer) {
      clearTimeout(this.fallbackTimer);
      this.fallbackTimer = null;
    }
    this.currentUtterance = null;
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  // Text-To-Speech using native Web Speech API
  speak(text, options = {}) {
    if (!this.voiceEnabled) {
      if (options.onEnd) options.onEnd();
      return;
    }
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      if (options.onEnd) options.onEnd();
      return;
    }

    // Cancel any previous speech
    this.cancel();
    this.isCancelled = false;

    const cleanedText = sanitizeFrenchSpeech(text);
    if (!cleanedText) {
      if (options.onEnd) options.onEnd();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(cleanedText);
    // Conserver la référence pour éviter le bug de garbage collection de Chrome
    this.currentUtterance = utterance;

    utterance.lang = options.lang || 'fr-FR';
    // Slightly slowed down (0.85) for 6-7yo clarity, slightly higher pitch for friendly tone
    utterance.rate = options.rate !== undefined ? options.rate : 0.85;
    utterance.pitch = options.pitch !== undefined ? options.pitch : 1.1;

    // Pick a natural French voice if available
    const availableVoices = this.voices.length > 0 ? this.voices : (window.speechSynthesis.getVoices() || []);
    const frVoices = availableVoices.filter(v => v.lang && v.lang.startsWith('fr'));
    if (frVoices.length > 0) {
      // Prefer Google français, Thomas, Amelie, Hortense or default French
      const preferred = frVoices.find(v => 
        v.name.includes('Google') || 
        v.name.includes('Thomas') || 
        v.name.includes('Amélie') || 
        v.name.includes('Hortense') ||
        v.name.includes('Natural')
      );
      utterance.voice = preferred || frVoices[0];
    }

    let ended = false;
    const handleEnd = () => {
      if (ended || this.isCancelled) return;
      ended = true;
      if (this.fallbackTimer) {
        clearTimeout(this.fallbackTimer);
        this.fallbackTimer = null;
      }
      this.currentUtterance = null;
      if (options.onEnd) {
        options.onEnd();
      }
    };

    utterance.onend = handleEnd;
    utterance.onerror = (e) => {
      if (e.error === 'canceled' || e.error === 'interrupted' || this.isCancelled) {
        ended = true;
        this.currentUtterance = null;
        return;
      }
      handleEnd();
    };

    // Minuteur de sécurité si le navigateur n'émet pas onend (ex: ancien WebKit / Android)
    if (options.onEnd) {
      const estimatedDurationMs = Math.max(2500, (cleanedText.length / 5) * 1000 + 1200);
      this.fallbackTimer = setTimeout(() => {
        handleEnd();
      }, estimatedDurationMs);
    }

    window.speechSynthesis.speak(utterance);
  }

  // Épelle le mot lettre par lettre pour le Scrabble et les indices pédagogiques
  spellWord(word, options = {}) {
    if (!this.voiceEnabled) {
      if (options.onEnd) options.onEnd();
      return;
    }
    const letters = formatLettersForSpelling(word);
    if (!letters) {
      if (options.onEnd) options.onEnd();
      return;
    }
    this.speak(letters, { rate: 0.75, pitch: 1.05, ...options });
  }
}

export const soundManager = new SoundManager();
