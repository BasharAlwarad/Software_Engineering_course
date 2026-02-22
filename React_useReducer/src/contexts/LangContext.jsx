import { useState, createContext } from 'react';

const LangContext = createContext();

const LangProvider = ({ children }) => {
  const translations = {
    en: { h1: 'Our Products' },
    ge: { h1: 'Unsere Produkte' },
  };

  const [lang, setLang] = useState('en');

  return (
    <LangContext value={{ lang, setLang, translations: translations[lang] }}>
      {children}
    </LangContext>
  );
};

export { LangContext, LangProvider };
