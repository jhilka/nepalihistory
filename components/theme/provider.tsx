'use client';

import { useLayoutEffect, useEffect } from 'react';

// Server-side uses useEffect, client-side uses useLayoutEffect
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const setTheme = () => {
  try {
    const DARK_MODE_CLASS = 'dark';
    // Prevents flash of unstyled content
    if (
      localStorage.darkMode === 'true' ||
      (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add(DARK_MODE_CLASS);
    } else {
      document.documentElement.classList.remove(DARK_MODE_CLASS);
    }

    // Sync theme changes across browser tabs (see toggle.tsx)
    window.addEventListener('storage', e => {
      if (e.key !== 'darkMode') return;

      if (localStorage.darkMode === 'true') {
        document.documentElement.classList.add(DARK_MODE_CLASS);
      } else {
        document.documentElement.classList.remove(DARK_MODE_CLASS);
      }
    });
  } catch (_) {
    console.error('Failed to set theme');
  }
};

/**
 * Blocking script that applies theme before page renders to prevent FOUC.
 */
export const ThemeScript = () => (
  <script
    id="dark-mode-script"
    dangerouslySetInnerHTML={{ __html: `(${setTheme.toString()})();` }}
  />
);

/**
 * Applies theme after React hydration to handle mismatches.
 * Syncs theme across tabs and cleans up event listeners on unmount.
 */
export const AfterHydration = () => {
  useIsomorphicLayoutEffect(() => {
    setTheme();

    // Cleanup event listener
    return () => {
      window.removeEventListener('storage', () => {});
    };
  }, []);

  return null;
};
