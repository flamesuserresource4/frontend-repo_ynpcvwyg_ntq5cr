export default function Services() {
  const tiers = [
    {
      name: "Sköljfri tvätt",
      price: "från 499 kr",
      time: "~60 min",
      desc: "Skonsam, miljövänlig tvätt med minimal vattenåtgång. Perfekt för regelbundet underhåll.",
      points: ["Förspray & skonsam tvättmetod", "Fälgar & dörrgångar", "Tork & snabbförsegling"],
    },
    {
      name: "Interiörfräsch",
      price: "från 899 kr",
      time: "~120 min",
      desc: "Noggrann dammsugning, ytor rengörs och dressas. Rena rutor utan ränder.",
      points: ["Dammsugning & borstning", "Plast/vinyl rengörs & dressas", "Glas inne & ute"],
    },
    {
      name: "Komplett Inne + Ute",
      price: "från 1399 kr",
      time: "~180 min",
      desc: "Sköljfri utsida + grundlig insida för en nästan nykänsla.",
      points: ["Sköljfri exteriör", "Interiörfräsch", "Däckglans & slutfinish"],
      featured: true,
    },
  ]

  return (
    <section id="services" className="relative">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Populära tjänster</h2>
        <p className="mt-3 text-blue-100 text-center">Tydliga startpriser. Slutligt pris beror på storlek och skick.</p>

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
