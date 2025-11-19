import { createContext, useContext, useState, useMemo } from 'react'

const LangContext = createContext({ lang: 'sv', setLang: () => {} })

export function LangProvider({ children }) {
  const [lang, setLang] = useState('sv')
  const value = useMemo(() => ({ lang, setLang }), [lang])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
