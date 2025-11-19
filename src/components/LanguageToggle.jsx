import { useLang } from '../locale'

export default function LanguageToggle({ className = '' }) {
  const { lang, toggleLang } = useLang()
  return (
    <button onClick={toggleLang} className={`inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-white/90 px-3 py-2 text-sm ${className}`} aria-label="Toggle language">
      <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: lang === 'sv' ? '#60a5fa' : '#34d399' }} />
      {lang === 'sv' ? 'Svenska' : 'English'}
    </button>
  )
}
