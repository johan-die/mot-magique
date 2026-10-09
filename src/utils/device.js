import { useState, useEffect } from 'react';

/**
 * Hook to detect whether the user is on a mobile device or tablet.
 * Takes into account:
 * - Screen width (< 1024px: phones and portrait/standard tablets)
 * - Mobile & tablet user-agents (iPhone, iPad, Android tablets/phones)
 * - iPadOS reporting as Macintosh with multi-touch
 * - Touch-only devices in landscape orientation
 */
export function useIsMobileOrTablet() {
  const checkIsMobileOrTablet = () => {
    if (typeof window === 'undefined') return false;

    // 1. Screen width check (phones & standard tablets < 1024px)
    if (window.innerWidth < 1024) return true;

    // 2. User-agent check for mobile & tablets (including iPadOS which identifies as Macintosh)
    const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isIPadOS = Boolean(navigator.maxTouchPoints && navigator.maxTouchPoints > 1 && /Macintosh/.test(navigator.userAgent));
    if (isMobileUA || isIPadOS) return true;

    // 3. Touch pointer check for large tablets in landscape (e.g. iPad Pro 12.9" at 1366px)
    const hasCoarsePointer = window.matchMedia?.('(pointer: coarse)').matches;
    const hasNoFinePointer = !window.matchMedia?.('(pointer: fine)').matches;
    if (hasCoarsePointer && hasNoFinePointer) return true;

    return false;
  };

  const [isMobileOrTablet, setIsMobileOrTablet] = useState(checkIsMobileOrTablet);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(checkIsMobileOrTablet());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobileOrTablet;
}
