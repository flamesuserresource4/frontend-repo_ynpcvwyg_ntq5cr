import { useState } from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import CTA from './components/CTA'
import Logo from './components/Logo'

function App() {
  const [showBooking, setShowBooking] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Subtle glow background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.15),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.15),transparent_35%)]" />

      {/* Top bar */}
      <header className="relative border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="hover:opacity-90 transition"><Logo withText={true} /></a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-blue-100">
            <a href="#services" className="hover:text-white transition">Tjänster</a>
            <a href="#about" className="hover:text-white transition">Om oss</a>
            <a href="#contact" className="hover:text-white transition">Kontakt</a>
            <button onClick={() => setShowBooking(true)} className="rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2">Få offert</button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <Hero onOpenBooking={() => setShowBooking(true)} />

      {/* Services */}
      <Services />

      {/* About */}
      <section id="about" className="relative">
        <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl border border-white/10 bg-slate-800/50 p-6">
            <div className="aspect-[16/10] rounded-lg bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
          </div>
          <div>
            <h2 className="text-3xl font-bold">Lokal, miljövänlig mobil bilvård</h2>
            <p className="mt-4 text-blue-100">
              Baserade i Helsingborg. Vi är specialister på sköljfria tvättar och noggrann interiörvård. Vi använder premium‑mikrofiber och moderna metoder som sparar vatten och skyddar lacken — perfekt för lägenhetshus, garage och kontorsparkering.
            </p>
            <ul className="mt-6 space-y-2 text-blue-100">
              <li>• Vi kommer till dig i hela Skåne (Helsingborg, Höganäs, Landskrona, Ängelholm)</li>
              <li>• Försäkrat arbete, kort och Swish accepteras</li>
              <li>• Husdjursvänliga och barnvänliga produkter för interiören</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <CTA />

      {/* Contact / Footer */}
      <footer id="contact" className="relative border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Logo withText={true} />
          <div className="text-blue-200 text-sm">
            <div>Helsingborg, Skåne</div>
            <div className="mt-1">Telefon: +46 70 000 00 00 • E‑post: hello@example.com</div>
            <div className="mt-1">Öppet: Mån–Lör 08:00–18:00</div>
          </div>
        </div>
      </footer>

      {/* Booking sheet (simple) */}
      {showBooking && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50" onClick={() => setShowBooking(false)}>
          <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-slate-900 p-6" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-bold">Begär offert</h3>
            <p className="mt-2 text-blue-100 text-sm">Berätta bilmodell, plats i Helsingborg och önskat datum. Vi återkommer via telefon eller e‑post.</p>
            <form className="mt-4 grid grid-cols-1 gap-3">
              <input className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-blue-500" placeholder="Namn" />
              <input className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-blue-500" placeholder="Telefon eller e‑post" />
              <input className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-blue-500" placeholder="Plats (t.ex. Helsingborg)" />
              <textarea rows={4} className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-blue-500" placeholder="Bilmodell + vad du behöver (sköljfri tvätt / interiör / båda)"></textarea>
              <div className="flex items-center justify-end gap-2 pt-2">
                <button type="button" onClick={() => setShowBooking(false)} className="px-4 py-2 rounded-lg border border-white/15 text-white/90 hover:bg-white/10">Stäng</button>
                <button type="button" onClick={() => setShowBooking(false)} className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 font-semibold">Skicka</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
