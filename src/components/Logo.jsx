export default function Logo({ className = "", withText = true, brand = "Öresund Auto Detail" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Droplet + sparkle mark */}
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6"/>
            <stop offset="100%" stopColor="#06b6d4"/>
          </linearGradient>
        </defs>
        <path d="M24 5c0 0-10 12-10 19a10 10 0 0 0 20 0c0-7-10-19-10-19z" fill="url(#g)"/>
        <circle cx="30" cy="18" r="2" fill="#e0f2fe"/>
        <path d="M34 34c3 0 5-2 5-5" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      {withText && (
        <div className="leading-tight">
          <div className="text-white font-bold tracking-tight text-lg">{brand}</div>
          <div className="text-xs text-blue-200/80 -mt-0.5">Sköljfri • Interiör • Mobil</div>
        </div>
      )}
    </div>
  )
}
