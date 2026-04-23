const items = [
  { label: 'Best Overall Chapter', value: '2024 — International Award' },
  { label: 'Members', value: '200+' },
  { label: 'Events Conducted', value: '25+' },
  { label: 'Best Newsletter', value: '2022 — AEE Award' },
  { label: 'Years Active', value: 'Est. 2018' },
  { label: 'Workshops Held', value: '30+' },
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className="border-t border-b border-[#111111] bg-[#111111] overflow-hidden py-2.5">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-4 px-6 shrink-0">
            <span className="badge-breaking">{item.label}</span>
            <span className="font-mono text-[11px] text-[#F9F9F7] tracking-wider uppercase whitespace-nowrap">
              {item.value}
            </span>
            <span className="text-[#CC0000] font-mono text-sm">◆</span>
          </div>
        ))}
      </div>
    </div>
  )
}
