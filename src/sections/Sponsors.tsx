import { useEffect, useRef } from 'react'
import SectionLabel from '../components/SectionLabel'

const sponsors = [
  { name: 'NTPC Limited', category: 'Platinum', abbr: 'NTPC' },
  { name: 'Tata Power', category: 'Platinum', abbr: 'TATA\nPWR' },
  { name: 'BHEL', category: 'Gold', abbr: 'BHEL' },
  { name: 'Schneider Electric', category: 'Gold', abbr: 'SE' },
  { name: 'Adani Green Energy', category: 'Gold', abbr: 'AGEL' },
  { name: 'L&T Construction', category: 'Silver', abbr: 'L&T' },
  { name: 'Havells India', category: 'Silver', abbr: 'HVLS' },
  { name: 'ABB India', category: 'Silver', abbr: 'ABB' },
]

const tierColors: Record<string, { border: string; label: string; bg: string }> = {
  Platinum: { border: 'border-[#111111]', label: 'text-[#111111]', bg: 'bg-[#F9F9F7]' },
  Gold: { border: 'border-[#525252]', label: 'text-[#525252]', bg: 'bg-[#F9F9F7]' },
  Silver: { border: 'border-[#E5E5E0]', label: 'text-[#A3A3A3]', bg: 'bg-[#FAFAFA]' },
}

export default function Sponsors() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.sponsor-card').forEach((c, i) => {
            setTimeout(() => c.classList.add('visible'), i * 70)
          })
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="sponsors" className="py-0">
      <div className="w-full">
        <div className="border-b border-[#111111]">

          {/* Header */}
          <div className="border-b border-[#111111] p-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <SectionLabel
              tag="§ 07 — Sponsors"
              title="Our Partners"
              subtitle="Organisations that empower AEE VIT's mission through financial and technical support."
            />
            <div className="flex gap-4">
              {['Platinum', 'Gold', 'Silver'].map((tier) => (
                <div key={tier} className="flex items-center gap-1.5">
                  <div className={`w-2 h-2 border ${tierColors[tier].border}`} />
                  <span className={`font-mono text-[10px] uppercase tracking-wider ${tierColors[tier].label}`}>{tier}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Logo Grid */}
          <div ref={ref} className="grid grid-cols-2 sm:grid-cols-4">
            {sponsors.map((s, i) => {
              const col = i % 4
              const row = Math.floor(i / 4)
              const totalRows = Math.ceil(sponsors.length / 4)
              const t = tierColors[s.category]
              return (
                <div
                  key={s.name}
                  className={`sponsor-card reveal relative aspect-square flex items-center justify-center group cursor-pointer
                    transition-all duration-300
                    ${col < 3 ? 'border-r border-[#111111]' : ''}
                    ${row < totalRows - 1 ? 'border-b border-[#111111]' : ''}
                    hover:bg-[#111111]
                  `}
                >
                  {/* Tier label */}
                  <div className="absolute top-3 left-3">
                    <span className={`font-mono text-[8px] uppercase tracking-[0.2em] ${t.label} group-hover:text-[#A3A3A3]`}>
                      {s.category}
                    </span>
                  </div>

                  {/* Logo placeholder */}
                  <span className="font-serif font-black text-2xl text-[#A3A3A3] group-hover:text-[#F9F9F7] transition-colors whitespace-pre-line text-center leading-tight">
                    {s.abbr}
                  </span>

                  {/* Company name on hover */}
                  <div className="absolute inset-x-0 bottom-3 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-mono text-[9px] text-[#F9F9F7] uppercase tracking-widest">{s.name}</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Become a Sponsor */}
          <div className="border-t border-[#111111] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-serif font-bold text-lg">Interested in Sponsoring?</p>
              <p className="font-mono text-[10px] text-[#737373] mt-0.5">Reach 200+ future energy engineers</p>
            </div>
            <a
              href="#why-sponsor"
              onClick={(e) => { e.preventDefault(); document.getElementById('why-sponsor')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-primary shrink-0"
            >
              View Sponsorship Tiers
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
