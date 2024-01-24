'use client';

type ThemeProps = {
  children: React.ReactNode;
};

import { createContext, useContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({ isLightMode: false, toggleTheme: () => {} });

export const ThemeProvider = ({ children }:ThemeProps) => {
  const storedTheme = localStorage.getItem('theme');
  const initialTheme = storedTheme ? JSON.parse(storedTheme) : { isLightMode: false };

  const [isLightMode, setIsLightMode] = useState(initialTheme.isLightMode);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify({ isLightMode }));
    document.documentElement.classList.toggle('light', isLightMode);
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);


