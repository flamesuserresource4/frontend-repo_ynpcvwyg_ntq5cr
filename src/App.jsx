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
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <button onClick={() => setShowBooking(true)} className="rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2">Get a Quote</button>
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
            <h2 className="text-3xl font-bold">Local, eco‑friendly mobile detailing</h2>
            <p className="mt-4 text-blue-100">
              Based in Helsingborg, we specialise in safe rinseless washes and meticulous interior work. We use premium microfibres and modern techniques that save water and protect your finish — perfect for apartments, garages, and office parking.
            </p>
            <ul className="mt-6 space-y-2 text-blue-100">
              <li>• We come to you across Skåne (Helsingborg, Höganäs, Landskrona, Ängelholm)</li>
              <li>• Insured service, card and Swish accepted</li>
              <li>• Pet‑friendly and child‑safe interior products</li>
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
            <div className="mt-1">Phone: +46 70 000 00 00 • Email: hello@example.com</div>
            <div className="mt-1">Open: Mon–Sat 08:00–18:00</div>
          </div>
        </div>
      </footer>

      {/* Booking sheet (simple) */}
      {showBooking && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50" onClick={() => setShowBooking(false)}>
          <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-slate-900 p-6" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-bold">Request a Quote</h3>
            <p className="mt-2 text-blue-100 text-sm">Tell us your car model, location in Helsingborg, and preferred date. We’ll confirm by phone or email.</p>
            <form className="mt-4 grid grid-cols-1 gap-3">
              <input className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-blue-500" placeholder="Name" />
              <input className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-blue-500" placeholder="Phone or Email" />
              <input className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-blue-500" placeholder="Location (e.g. Helsingborg)" />
              <textarea rows={4} className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-blue-500" placeholder="Car model + what you need (rinseless wash / interior / both)"></textarea>
              <div className="flex items-center justify-end gap-2 pt-2">
                <button type="button" onClick={() => setShowBooking(false)} className="px-4 py-2 rounded-lg border border-white/15 text-white/90 hover:bg-white/10">Close</button>
                <button type="button" onClick={() => setShowBooking(false)} className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 font-semibold">Send Request</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
