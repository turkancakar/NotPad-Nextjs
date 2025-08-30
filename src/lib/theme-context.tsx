"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTheme as useNextTheme } from 'next-themes';
import { Theme, themes, getTheme } from './themes';

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeId: string) => void;
  availableThemes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme: nextTheme } = useNextTheme();
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem('selected-theme');
    if (savedTheme) {
      const theme = getTheme(savedTheme);
      setCurrentTheme(theme);
    }
  }, []);

  // Sync with next-themes
  useEffect(() => {
    if (nextTheme === 'dark') {
      const darkTheme = themes.find(theme => theme.id === 'dark');
      if (darkTheme) {
        setCurrentTheme(darkTheme);
      }
    } else if (nextTheme === 'light') {
      const lightTheme = themes.find(theme => theme.id === 'dashboard' || theme.id === 'homepage');
      if (lightTheme) {
        setCurrentTheme(lightTheme);
      }
    }
  }, [nextTheme]);

  const setTheme = (themeId: string) => {
    const theme = getTheme(themeId);
    setCurrentTheme(theme);
    localStorage.setItem('selected-theme', themeId);
  };

  return (
    <ThemeContext.Provider value={{
      currentTheme,
      setTheme,
      availableThemes: themes
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 