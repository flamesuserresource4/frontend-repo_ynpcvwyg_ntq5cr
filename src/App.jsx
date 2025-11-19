import { useState } from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import CTA from './components/CTA'
import Logo from './components/Logo'
import LanguageToggle from './components/LanguageToggle'
import { useLang } from './locale'
import { copy } from './i18n.jsx'

function App() {
  const [showBooking, setShowBooking] = useState(false)
  const { lang } = useLang()
  const t = copy[lang]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Subtle glow background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.15),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.15),transparent_35%)]" />

      {/* Top bar */}
      <header className="relative border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="hover:opacity-90 transition"><Logo withText={true} lang={lang} /></a>
          <nav className="hidden sm:flex items-center gap-4 text-sm text-blue-100">
            <a href="#services" className="hover:text-white transition">{t.nav.services}</a>
            <a href="#about" className="hover:text-white transition">{t.nav.about}</a>
            <a href="#contact" className="hover:text-white transition">{t.nav.contact}</a>
            <button onClick={() => setShowBooking(true)} className="rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2">{t.nav.quote}</button>
            <LanguageToggle className="ml-2" />
          </nav>
        </div>
      </header>

      {/* Hero */}
      <Hero onOpenBooking={() => setShowBooking(true)} lang={lang} />

      {/* Services */}
      <Services lang={lang} />

      {/* About */}
      <section id="about" className="relative">
        <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl border border-white/10 bg-slate-800/50 p-6">
            <div className="aspect-[16/10] rounded-lg bg-[url('https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center" />
          </div>
          <div>
            <h2 className="text-3xl font-bold">{t.about.title}</h2>
            <p className="mt-4 text-blue-100">
              {lang === 'sv'
                ? 'Baserade i Helsingborg. Vi är specialister på sköljfria tvättar och noggrann interiörvård. Vi använder premium‑mikrofiber och moderna metoder som sparar vatten och skyddar lacken — perfekt för lägenhetshus, garage och kontorsparkering.'
                : 'Based in Helsingborg. We specialize in rinseless washes and thorough interior care. We use premium microfiber and modern techniques that save water and protect the paint — perfect for apartment buildings, garages and office parking.'}
            </p>
            <ul className="mt-6 space-y-2 text-blue-100">
              {t.about.bullets.map((b) => (<li key={b}>• {b}</li>))}
            </ul>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <CTA lang={lang} />

      {/* Contact / Footer */}
      <footer id="contact" className="relative border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Logo withText={true} lang={lang} />
          <div className="text-blue-200 text-sm">
            <div>{t.about.location}</div>
            <div className="mt-1">{t.about.contactLine}</div>
            <div className="mt-1">{t.about.hours}</div>
          </div>
        </div>
      </footer>

      {/* Booking sheet (simple) */}
      {showBooking && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50" onClick={() => setShowBooking(false)}>
          <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-slate-900 p-6" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-bold">{t.booking.title}</h3>
            <p className="mt-2 text-blue-100 text-sm">{t.booking.sub}</p>
            <form className="mt-4 grid grid-cols-1 gap-3">
              <input className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-blue-500" placeholder={t.booking.name} />
              <input className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-blue-500" placeholder={t.booking.contact} />
              <input className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-blue-500" placeholder={t.booking.location} />
              <input className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-blue-500" placeholder={t.booking.carModel} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <select className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-blue-500">
                  <option value="">{t.booking.needOptions.selectPrompt}</option>
                  <option value="rinsefree">{t.booking.needOptions.rinsefree}</option>
                  <option value="interior">{t.booking.needOptions.interior}</option>
                  <option value="both">{t.booking.needOptions.both}</option>
                </select>
                <input className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-blue-500" placeholder={t.booking.need} />
              </div>
              <textarea rows={4} className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-blue-500" placeholder={t.booking.notes}></textarea>
              <div className="flex items-center justify-end gap-2 pt-2">
                <button type="button" onClick={() => setShowBooking(false)} className="px-4 py-2 rounded-lg border border-white/15 text-white/90 hover:bg-white/10">{t.booking.close}</button>
                <button type="button" onClick={() => setShowBooking(false)} className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 font-semibold">{t.booking.send}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
