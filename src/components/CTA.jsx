export default function CTA() {
  return (
    <section className="relative">
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-10 shadow-2xl">
          <h3 className="text-3xl font-bold text-white">Redo för en ren bil utan krångel?</h3>
          <p className="mt-3 text-blue-100">Hör av dig för att kolla tillgänglighet i Helsingborg med omnejd.</p>
          <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
            <a href="tel:+46700000000" className="rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 transition">Ring</a>
            <a href="mailto:hello@example.com" className="rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold px-6 py-3 border border-white/20">E‑post</a>
            <a href="https://wa.me/46700000000" target="_blank" rel="noreferrer" className="rounded-lg bg-emerald-500/90 hover:bg-emerald-600 text-white font-semibold px-6 py-3">WhatsApp</a>
          </div>
          <p className="mt-4 text-xs text-blue-300/80">Miljövänliga sköljfria metoder • Fullt försäkrade • Vi kommer till dig</p>
        </div>
      </div>
    </section>
  )
}
