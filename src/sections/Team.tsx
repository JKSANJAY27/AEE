import { useEffect, useRef } from 'react'
import SectionLabel from '../components/SectionLabel'

const team = [
  { name: 'Advaith Suresh', role: 'President', dept: 'Energy Engineering', fig: '1.1', initials: 'AS' },
  { name: 'Priya Nair', role: 'Vice President', dept: 'Electrical Engineering', fig: '1.2', initials: 'PN' },
  { name: 'Kiran Vasanth', role: 'Secretary General', dept: 'Mechanical Engineering', fig: '1.3', initials: 'KV' },
  { name: 'Meera Rajan', role: 'Technical Head', dept: 'ECE', fig: '1.4', initials: 'MR' },
  { name: 'Arjun Pillai', role: 'Events Coordinator', dept: 'Civil Engineering', fig: '1.5', initials: 'AP' },
  { name: 'Shreya Menon', role: 'Newsletter Editor', dept: 'English & Journalism', fig: '1.6', initials: 'SM' },
  { name: 'Rahul Krishnan', role: 'Design Lead', dept: 'Computer Science', fig: '1.7', initials: 'RK' },
  { name: 'Tanvi Shah', role: 'Sponsorship Head', dept: 'Management', fig: '1.8', initials: 'TS' },
]

export default function Team() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.team-card').forEach((card, i) => {
            setTimeout(() => card.classList.add('visible'), i * 80)
          })
          obs.disconnect()
        }
      },
      { threshold: 0.05 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="team" className="py-0">
      <div className="w-full">
        <div className="border-b border-[#111111]">

          {/* Header */}
          <div className="border-b border-[#111111] p-8">
            <SectionLabel
              tag="§ 03 — Leadership"
              title="The Editorial Board"
              subtitle="Meet the students driving AEE VIT's mission across technical, editorial, and outreach domains."
            />
          </div>

          {/* Grid */}
          <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4">
            {team.map((member, i) => {
              const col = i % 4
              const row = Math.floor(i / 4)
              const isLastCol = col === 3
              const isLastRow = row === Math.floor((team.length - 1) / 4)
              return (
                <div
                  key={member.name}
                  className={`team-card reveal group p-0 flex flex-col cursor-default
                    ${!isLastCol ? 'border-r border-[#111111]' : ''}
                    ${!isLastRow ? 'border-b border-[#111111]' : ''}
                  `}
                >
                  {/* Photo / Initials placeholder */}
                  <div className="relative overflow-hidden bg-[#E5E5E5] aspect-square border-b border-[#111111] flex items-center justify-center">
                    {/* Halftone pattern */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                        backgroundSize: '10px 10px',
                      }}
                    />
                    {/* Initials */}
                    <span className="font-serif font-black text-4xl text-[#A3A3A3] z-10 group-hover:text-[#111111] transition-colors">
                      {member.initials}
                    </span>
                    {/* Hover invert overlay */}
                    <div className="absolute inset-0 bg-[#111111] opacity-0 group-hover:opacity-5 transition-opacity" />
                  </div>

                  {/* Info */}
                  <div className="p-4 flex-1 flex flex-col gap-1">
                    <div className="section-label text-[#CC0000]">{member.role}</div>
                    <h3 className="font-serif font-bold text-base leading-tight">{member.name}</h3>
                    <p className="font-mono text-[10px] text-[#737373] mt-auto">{member.dept}</p>
                    <div className="border-t border-[#E5E5E0] mt-2 pt-1">
                      <span className="font-mono text-[9px] text-[#A3A3A3] tracking-widest">Fig. {member.fig}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
