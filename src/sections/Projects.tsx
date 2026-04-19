import { useEffect, useRef } from 'react'
import SectionLabel from '../components/SectionLabel'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 'P01',
    tag: 'Research',
    title: 'LCA of Solar PV',
    desc: 'Life Cycle Assessment of solar photovoltaic systems evaluating environmental impacts across all stages, including raw material extraction, manufacturing, operation, and end-of-life, with focus on energy payback, carbon footprint, and overall sustainability performance.',
    status: 'Completed',
    year: '2025',
  },
]

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.proj-card').forEach((c, i) => {
            setTimeout(() => c.classList.add('visible'), i * 100)
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
    <section id="projects" className="py-0">
      <div className="w-full">
        <div className="border-b border-[#111111]">

          {/* Header */}
          <div className="border-b border-[#111111] p-8">
            <SectionLabel
              tag="§ 05 — Projects"
              title="Technical Initiatives"
              subtitle="Research, prototypes, and applied studies tackling real energy challenges on campus and beyond."
            />
          </div>

          {/* Cards */}
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => {
              const col = i % 3
              const row = Math.floor(i / 3)
              const totalRows = Math.ceil(projects.length / 3)
              return (
                <div
                  key={p.id}
                  className={`proj-card reveal hard-shadow-hover p-6 flex flex-col gap-3 cursor-pointer group
                    ${col < 2 ? 'border-r border-[#111111]' : ''}
                    ${row < totalRows - 1 ? 'border-b border-[#111111]' : ''}
                  `}
                >
                  {/* Top meta */}
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-[#737373] border border-[#E5E5E0] px-2 py-0.5">
                      {p.tag}
                    </span>
                    <span className="font-mono text-[10px] text-[#A3A3A3]">{p.id}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-bold text-xl leading-tight group-hover:text-[#CC0000] transition-colors">
                    {p.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-8 h-[2px] bg-[#111111] group-hover:w-full group-hover:bg-[#CC0000] transition-all duration-300" />

                  {/* Description */}
                  <p className="font-body text-sm leading-relaxed text-[#525252] flex-1">{p.desc}</p>

                  {/* Footer */}
                  <div className="flex items-center justify-between border-t border-[#E5E5E0] pt-3 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 ${p.status === 'Ongoing' ? 'bg-[#CC0000] animate-pulse' : 'bg-[#111111]'}`} />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#737373]">{p.status}</span>
                    </div>
                    <span className="font-mono text-[10px] text-[#A3A3A3]">{p.year}</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="border-t border-[#111111] p-6 flex justify-center">
            <a href="#contact" className="btn-outline flex items-center gap-2" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Collaborate with Us <ArrowRight size={14} strokeWidth={1.5} />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
