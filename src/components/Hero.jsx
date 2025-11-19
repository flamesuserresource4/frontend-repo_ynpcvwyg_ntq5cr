import { useState } from 'react'
import { motion } from 'framer-motion'
import Logo from './Logo'

export default function Hero({ onOpenBooking }) {
  const [zip, setZip] = useState("")

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.25),transparent_35%)]" />
      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <Logo className="mb-6" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1]">
              Mobil bilvård i Helsingborg, Skåne
            </h1>
            <p className="mt-5 text-lg text-blue-100 max-w-2xl">
              Specialist på sköljfria tvättar och interiördetailing. Vi kommer till dig — hemma eller på jobbet — med miljövänliga produkter och proffsigt resultat.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button onClick={onOpenBooking} className="inline-flex items-center justify-center rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 shadow-lg shadow-blue-500/20 transition">
                Få offert
              </button>
              <a href="#services" className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold px-6 py-3 border border-white/20 backdrop-blur transition">
                Visa tjänster
              </a>
            </div>
            <div className="mt-6 text-sm text-blue-200/90">Vi kör i Helsingborg, Höganäs, Landskrona, Ängelholm</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 w-full"
          >
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-4 sm:p-6 shadow-2xl">
              <div className="aspect-[16/10] rounded-xl bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="absolute -inset-4 -z-10 blur-2xl opacity-40 bg-[radial-gradient(circle_at_50%_50%,#60a5fa,transparent_40%)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
