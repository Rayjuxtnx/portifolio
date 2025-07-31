"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface InteractiveModeContextType {
  isInteractive: boolean;
  toggleInteractive: () => void;
}

const InteractiveModeContext = createContext<InteractiveModeContextType | undefined>(undefined);

export const InteractiveModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isInteractive, setIsInteractive] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedValue = localStorage.getItem('interactiveMode');
    if (storedValue !== null) {
      setIsInteractive(JSON.parse(storedValue));
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('interactiveMode', JSON.stringify(isInteractive));
      if (isInteractive) {
        document.documentElement.classList.remove('static-mode');
      } else {
        document.documentElement.classList.add('static-mode');
      }
    }
  }, [isInteractive, mounted]);
  
  const toggleInteractive = () => {
    setIsInteractive(prev => !prev);
  };

  const value = { isInteractive, toggleInteractive };
  
  return (
    <InteractiveModeContext.Provider value={value}>
      {children}
    </InteractiveModeContext.Provider>
  );
};

export const useInteractiveMode = () => {
  const context = useContext(InteractiveModeContext);
  if (context === undefined) {
    throw new Error('useInteractiveMode must be used within an InteractiveModeProvider');
  }
  return context;
};
