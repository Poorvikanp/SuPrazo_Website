import React, { createContext, useState, useContext, useCallback } from 'react';
import { translations } from '@/lib/translations';

const LanguageContext = createContext();

const STORAGE_KEY = 'suprazo_lang';

const getInitialLang = () => {
  if (typeof window === 'undefined') return 'en';
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'hi') {
      if (typeof document !== 'undefined') document.documentElement.lang = saved;
      return saved;
    }
  } catch (e) {
    // localStorage may be blocked (private mode / sandbox) — fall back to default
  }
  return 'en';
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(getInitialLang);

  const setLang = useCallback((newLang) => {
    setLangState(newLang);
    try {
      window.localStorage.setItem(STORAGE_KEY, newLang);
    } catch (e) {
      // ignore write failure
    }
    if (typeof document !== 'undefined') document.documentElement.lang = newLang;
  }, []);

  const t = useCallback((key) => {
    return translations[lang]?.[key] || translations.en?.[key] || key;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLang must be used within a LanguageProvider');
  }
  return context;
};