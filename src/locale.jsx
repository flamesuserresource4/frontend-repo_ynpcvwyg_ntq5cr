import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const LangContext = createContext({ lang: 'sv', setLang: () => {}, toggleLang: () => {} })

export function LangProvider({ children }) {
  const [lang, setLang] = useState('sv')

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('lang') : null
    if (saved === 'sv' || saved === 'en') setLang(saved)
  }, [])

  useEffect(() => {
    try { window.localStorage.setItem('lang', lang) } catch {}
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
    }
  }, [lang])

  const value = useMemo(() => ({
    lang,
    setLang,
    toggleLang: () => setLang(prev => (prev === 'sv' ? 'en' : 'sv')),
  }), [lang])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
