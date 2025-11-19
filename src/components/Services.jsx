export default function Services({ lang = 'sv' }) {
  const isSv = lang === 'sv'
  const tiers = [
    {
      name: isSv ? "Sköljfri tvätt" : "Rinse-free wash",
      price: isSv ? "från 499 kr" : "from 49 €",
      time: isSv ? "~60 min" : "~60 min",
      desc: isSv ? "Skonsam, miljövänlig tvätt med minimal vattenåtgång. Perfekt för regelbundet underhåll." : "Gentle, eco-friendly wash with minimal water use. Perfect for regular maintenance.",
      points: isSv ? ["Förspray & skonsam tvättmetod", "Fälgar & dörrgångar", "Tork & snabbförsegling"] : ["Pre-spray & gentle method", "Wheels & door jambs", "Dry & quick seal"],
    },
    {
      name: isSv ? "Interiörfräsch" : "Interior refresh",
      price: isSv ? "från 899 kr" : "from 89 €",
      time: isSv ? "~120 min" : "~120 min",
      desc: isSv ? "Noggrann dammsugning, ytor rengörs och dressas. Rena rutor utan ränder." : "Thorough vacuuming, surfaces cleaned and dressed. Streak-free glass.",
      points: isSv ? ["Dammsugning & borstning", "Plast/vinyl rengörs & dressas", "Glas inne & ute"] : ["Vacuum & brushing", "Plastic/vinyl cleaned & dressed", "Glass inside & out"],
    },
    {
      name: isSv ? "Komplett Inne + Ute" : "Complete inside + out",
      price: isSv ? "från 1399 kr" : "from 139 €",
      time: isSv ? "~180 min" : "~180 min",
      desc: isSv ? "Sköljfri utsida + grundlig insida för en nästan nykänsla." : "Rinse-free exterior + thorough interior for a near-new feel.",
      points: isSv ? ["Sköljfri exteriör", "Interiörfräsch", "Däckglans & slutfinish"] : ["Rinse-free exterior", "Interior refresh", "Tire shine & final finish"],
      featured: true,
    },
  ]

  return (
    <section id="services" className="relative">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">{isSv ? 'Populära tjänster' : 'Popular services'}</h2>
        <p className="mt-3 text-blue-100 text-center">{isSv ? 'Tydliga startpriser. Slutligt pris beror på storlek och skick.' : 'Transparent starting prices. Final price depends on size and condition.'}</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border ${t.featured ? 'border-blue-400/40 bg-slate-800/70' : 'border-white/10 bg-slate-800/50'} p-6 backdrop-blur shadow-xl`}> 
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-white">{t.name}</h3>
                <span className="text-sm text-blue-200">{t.time}</span>
              </div>
              <div className="mt-2 text-2xl font-bold text-white">{t.price}</div>
              <p className="mt-3 text-blue-100 text-sm">{t.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-blue-100">
                {t.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-blue-300">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
