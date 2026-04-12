// CSS-drawn can placeholder — no raster imagery.
export default function BeerCan({ beer, compact = false }) {
  const { canTop, canBottom, accent, name, lot, style, abv } = beer
  return (
    <div
      className="can noise w-full aspect-[3/5] shadow-slab"
      role="img"
      aria-label={`Placeholder can illustration for ${name}, ${style}, ${abv}% ABV`}
      style={{
        background: `linear-gradient(180deg, ${canTop} 0%, ${canBottom} 100%)`,
      }}
    >
      {/* Top rim */}
      <div
        className="absolute inset-x-0 top-0 h-3"
        style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0))' }}
      />
      <div
        className="absolute inset-x-0 top-3 h-px"
        style={{ background: 'rgba(255,255,255,0.35)' }}
      />

      {/* Label band */}
      <div className="relative z-[4] h-full flex flex-col p-4 md:p-5">
        <div
          className="flex items-center justify-between font-mono text-[9px] uppercase tracking-hair"
          style={{ color: accent }}
        >
          <span>{lot}</span>
          <span>NJ &middot; 12 FL OZ</span>
        </div>

        <div
          className="mt-auto pb-1 font-display leading-[0.85] text-balance"
          style={{ color: accent }}
        >
          <div className={compact ? 'text-[1.35rem]' : 'text-[clamp(1.6rem,2.6vw,2.4rem)]'}>
            {name.split(' ').map((w, i) => (
              <span key={i} className="block">
                {w}
              </span>
            ))}
          </div>
        </div>

        <div
          className="mt-3 flex items-end justify-between font-mono text-[10px] uppercase tracking-hair"
          style={{ color: accent }}
        >
          <span>{style}</span>
          <span className="text-[14px] font-display leading-none">{abv.toFixed(1)}%</span>
        </div>

        {/* Barcode-ish tick marks */}
        <div className="mt-3 flex gap-[2px] opacity-70">
          {Array.from({ length: 28 }).map((_, i) => (
            <span
              key={i}
              className="block"
              style={{
                width: i % 3 === 0 ? 2 : 1,
                height: 10,
                background: accent,
                opacity: i % 5 === 0 ? 0.9 : 0.55,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
