'use client';

type ThemeProps = {
  children: React.ReactNode;
};

import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext({ isDarkMode: false, toggleTheme: () => {} });

export const ThemeProvider = ({ children }: ThemeProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('light');
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
