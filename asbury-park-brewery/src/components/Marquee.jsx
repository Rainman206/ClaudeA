const items = [
  'FRESH POUR',
  'EST. ’16',
  'ASBURY PARK NJ',
  'BATCH 247',
  '40.2206° N',
  'UNSOLICITED CONCEPT',
  'SALT &amp; STATIC',
  'DRINK LOCAL',
]

export default function Marquee() {
  const row = [...items, ...items]
  return (
    <div
      className="border-y border-bone/10 bg-ink-800 overflow-hidden select-none"
      aria-hidden="true"
    >
      <div className="flex whitespace-nowrap animate-marquee py-5">
        {row.map((t, idx) => (
          <span
            key={idx}
            className="font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-none mx-8 text-bone/90"
            dangerouslySetInnerHTML={{
              __html: `${t}&nbsp;&nbsp;<span style="color:#2BE4C6">&#9830;</span>`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
