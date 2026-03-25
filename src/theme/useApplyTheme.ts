import { useEffect, useMemo, useState } from 'react';
import { useThemeStore } from './themeStore';

type ResolvedTheme = 'dark' | 'light';

const getSystemTheme = (): ResolvedTheme => {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const useApplyTheme = () => {
  const preference = useThemeStore((s) => s.preference);
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(() => getSystemTheme());

  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => setSystemTheme(mql.matches ? 'dark' : 'light');

    onChange();

    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', onChange);
      return () => mql.removeEventListener('change', onChange);
    }

    if (typeof mql.addListener === 'function') {
      (mql as unknown as { addListener: (listener: () => void) => void }).addListener(onChange);
      return () => (mql as unknown as { removeListener: (listener: () => void) => void }).removeListener(onChange);
    }

    return;
  }, []);

  const resolvedTheme = useMemo<ResolvedTheme>(() => {
    if (preference === 'system') return systemTheme;
    return preference;
  }, [preference, systemTheme]);

  useEffect(() => {
    const root = document.documentElement;

    if (resolvedTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [resolvedTheme]);

  return { preference, resolvedTheme };
};
