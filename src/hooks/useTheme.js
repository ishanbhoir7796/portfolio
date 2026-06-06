import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved === 'light' ? 'light' : 'dark';
  });

  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    document.body.className = `theme-${theme}`;
    document.body.setAttribute('data-theme-mode', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return { theme, isDark: theme === 'dark', toggle };
}
