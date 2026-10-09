import React, { useState, useEffect } from 'react';
import { getFluentEmojiUrls } from '../utils/fluentEmoji';

/**
 * Composant d'affichage des émojis Microsoft Fluent :
 * 1. Priorité : APNG Animé (Animated Fluent Emoji)
 * 2. Repli 1 : WebP 3D haute qualité (@lobehub/fluent-emoji-3d)
 * 3. Repli 2 : Émoji système natif (Unicode)
 *
 * @param {string} emoji - L'émoji Unicode (ex: '🐓', '🐶')
 * @param {string} alt - Texte alternatif pour l'accessibilité
 * @param {string} className - Classes Tailwind pour la taille et le style
 * @param {'animated'|'3d'|'native'} mode - Mode de rendu prioritaire
 */
export function FluentEmoji({
  emoji,
  alt = '',
  className = 'w-16 h-16',
  mode = 'animated',
  ...props
}) {
  // Stage 0: Animated, Stage 1: 3D, Stage 2: Native
  const initialStage = mode === '3d' ? 1 : mode === 'native' ? 2 : 0;
  const [stage, setStage] = useState(initialStage);

  useEffect(() => {
    setStage(mode === '3d' ? 1 : mode === 'native' ? 2 : 0);
  }, [emoji, mode]);

  if (!emoji) return null;

  const urls = getFluentEmojiUrls(emoji);
  // Si le mode animé est demandé mais qu'aucun visuel animé n'est disponible, on passe en 3D
  const effectiveStage = (stage === 0 && !urls.animated) ? 1 : stage;

  // 1. Rendu Animé (APNG)
  if (effectiveStage === 0 && urls.animated) {
    return (
      <img
        src={urls.animated}
        alt={alt || emoji}
        loading="lazy"
        decoding="async"
        onError={() => setStage(1)}
        className={`object-contain select-none inline-block pointer-events-none ${className}`}
        {...props}
      />
    );
  }

  // 2. Repli 3D (WebP)
  if (effectiveStage === 1 && urls.threeD) {
    return (
      <img
        src={urls.threeD}
        alt={alt || emoji}
        loading="lazy"
        decoding="async"
        onError={() => setStage(2)}
        className={`object-contain select-none inline-block pointer-events-none ${className}`}
        {...props}
      />
    );
  }

  // 3. Repli Émoji Système
  return (
    <span
      role="img"
      aria-label={alt || emoji}
      className={`select-none inline-flex items-center justify-center ${className}`}
      {...props}
    >
      {emoji}
    </span>
  );
}

export default FluentEmoji;
