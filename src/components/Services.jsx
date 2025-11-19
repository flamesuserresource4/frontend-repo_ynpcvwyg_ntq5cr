export default function Services() {
  const tiers = [
    {
      name: "Rinseless Wash",
      price: "from 499 SEK",
      time: "~60 min",
      desc: "Safe, eco‑friendly wash with minimal water. Perfect for regular upkeep.",
      points: ["Pre‑spray & gentle wash method", "Wheels & door jambs", "Dry & quick sealant"],
    },
    {
      name: "Interior Refresh",
      price: "from 899 SEK",
      time: "~120 min",
      desc: "Deep vacuum, surfaces cleaned and dressed. Streak‑free glass.",
      points: ["Vacuum & brush work", "Plastics cleaned & dressed", "Glass inside & out"],
    },
    {
      name: "Complete Inside+Out",
      price: "from 1399 SEK",
      time: "~180 min",
      desc: "Rinseless exterior + thorough interior for a like‑new feel.",
      points: ["Exterior rinseless wash", "Interior refresh", "Tyre shine & final wipe"],
      featured: true,
    },
  ]

  return (
    <section id="services" className="relative">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Popular Services</h2>
        <p className="mt-3 text-blue-100 text-center">Transparent pricing. Final quote depends on size and condition.</p>

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
