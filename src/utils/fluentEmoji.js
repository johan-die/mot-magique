import { FLUENT_MAP } from './fluentEmojiMap';

const ANIMATED_BASE_URL = 'https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis@latest/';
const THREED_BASE_URL = 'https://cdn.jsdelivr.net/npm/@lobehub/fluent-emoji-3d@latest/assets/';
const FLAT_BASE_URL = 'https://cdn.jsdelivr.net/npm/@lobehub/fluent-emoji-flat@latest/assets/';

/**
 * Calcule le code hexadécimal d'un émoji Unicode
 */
export function emojiToHex(emoji) {
  if (!emoji) return '';
  return [...emoji].map(c => c.codePointAt(0).toString(16)).join('-');
}

/**
 * Retourne les URLs pour un émoji donné :
 * - animated : APNG animé Microsoft Fluent Emoji
 * - threeD : WebP 3D Microsoft Fluent Emoji
 * - flat : SVG vectoriel plat
 */
export function getFluentEmojiUrls(emoji) {
  if (!emoji) {
    return { animated: null, threeD: null, flat: null };
  }

  const mapped = FLUENT_MAP[emoji];
  if (mapped) {
    const animUrl = mapped.anim ? `${ANIMATED_BASE_URL}${encodeURI(mapped.anim)}` : null;
    const threeDUrl = mapped.hex ? `${THREED_BASE_URL}${mapped.hex}.webp` : null;
    const flatUrl = mapped.hex ? `${FLAT_BASE_URL}${mapped.hex}.svg` : null;
    return {
      animated: animUrl,
      threeD: threeDUrl,
      flat: flatUrl,
      hex: mapped.hex
    };
  }

  // Fallback dynamique pour tout émoji non présent dans la table statique
  const hex = emojiToHex(emoji);
  return {
    animated: null,
    threeD: `${THREED_BASE_URL}${hex}.webp`,
    flat: `${FLAT_BASE_URL}${hex}.svg`,
    hex
  };
}
