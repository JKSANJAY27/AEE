import { useEffect, useRef } from 'react'
import SectionLabel from '../components/SectionLabel'
import { Calendar, ExternalLink } from 'lucide-react'

const events = [
  {
    tag: 'HACKATHON',
    title: 'EnergyThon',
    date: 'Date: TBA',
    desc: 'EnergyThon is an annual ideathon and hackathon by AEE-VIT during Gravitas, focusing on innovative, practical solutions to contemporary energy challenges.',
    upcoming: true,
  },
  {
    tag: 'WORKSHOP',
    title: 'Two Day Industry Academia Workshop on Sustainable Cooling',
    date: 'March 5-6, 2025',
    desc: 'A detailed account of a two-day workshop at VIT Vellore exploring sustainable cooling, featuring industry experts, technical discussions, student engagement, and insights into innovation, policy, and engineering practices addressing rising global cooling demands.',
    upcoming: false,
  },
  {
    tag: 'GUEST LECTURE',
    title: 'Guest lecture on IP rights',
    date: '26 July 2025',
    desc: 'A guest lecture by an expert intellectual property lawyer covering fundamentals of IP rights, legal protection mechanisms, patents, copyrights, and their relevance for innovation and engineering professionals.',
    upcoming: false,
  },
]

const tagColors: Record<string, string> = {
  HACKATHON: 'bg-[#CC0000] text-[#F9F9F7]',
  WORKSHOP: 'bg-[#111111] text-[#F9F9F7]',
  'GUEST LECTURE': 'border border-[#111111] text-[#111111]',
}

export default function Events() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.event-row').forEach((row, i) => {
            setTimeout(() => (row as HTMLElement).classList.add('visible'), i * 100)
          })
          obs.disconnect()
        }
      },
      { threshold: 0.05 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const upcoming = events.filter(e => e.upcoming)
  const past = events.filter(e => !e.upcoming)

  return (
    <section id="events" className="py-0">
      <div className="w-full">
        <div className="border-b border-[#111111]">

          {/* Header */}
          <div className="border-b border-[#111111] p-8 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <SectionLabel
              tag="§ 04 — Events"
              title="The Programmes"
              subtitle="Technical workshops, industry seminars, and networking events that define our calendar."
            />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#CC0000] animate-pulse" />
              <span className="font-mono text-xs text-[#CC0000] tracking-wider uppercase">
                {upcoming.length} Upcoming Event{upcoming.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>

          {/* Upcoming Events */}
          {upcoming.length > 0 && (
            <div className="border-b border-[#111111]">
              <div className="bg-[#111111] px-8 py-2 flex items-center gap-3">
                <div className="w-2 h-2 bg-[#CC0000] animate-pulse" />
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#A3A3A3]">Upcoming</span>
              </div>
              {upcoming.map((ev) => (
                <div
                  key={ev.title}
                  className="border-b border-[#111111] last:border-b-0 p-6 flex flex-col lg:flex-row gap-4 lg:items-start hover:bg-[#F5F5F5] transition-colors group cursor-pointer"
                >
                  <div className="lg:w-32 shrink-0">
                    <span className={`font-mono text-[10px] px-2 py-1 ${tagColors[ev.tag] || 'border border-[#111111] text-[#111111]'}`}>
                      {ev.tag}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif font-bold text-xl group-hover:text-[#CC0000] transition-colors leading-tight mb-2">
                      {ev.title}
                    </h3>
                    <p className="font-body text-sm text-[#525252] leading-relaxed mb-3">{ev.desc}</p>
                    <div className="flex flex-wrap gap-4">
                      <span className="flex items-center gap-1.5 font-mono text-[11px] text-[#737373]">
                        <Calendar size={12} strokeWidth={1.5} /> {ev.date}
                      </span>
                    </div>
                  </div>
                  <ExternalLink size={16} strokeWidth={1.5} className="text-[#A3A3A3] group-hover:text-[#111111] shrink-0 transition-colors mt-1" />
                </div>
              ))}
            </div>
          )}

          {/* Past Events */}
          <div ref={ref}>
            <div className="px-8 py-2 border-b border-[#111111]">
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#737373]">Past Events</span>
            </div>
            {past.map((ev) => (
              <div
                key={ev.title}
                className={`event-row reveal border-b border-[#E5E5E0] last:border-b-0 p-6 flex flex-col lg:flex-row gap-4 lg:items-start hover:bg-[#F5F5F5] transition-colors group cursor-pointer`}
              >
                <div className="lg:w-32 shrink-0">
                  <span className={`font-mono text-[10px] px-2 py-1 ${tagColors[ev.tag] || 'border border-[#E5E5E0] text-[#737373]'}`}>
                    {ev.tag}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-lg group-hover:text-[#CC0000] transition-colors leading-tight mb-1">
                    {ev.title}
                  </h3>
                  <p className="font-body text-sm text-[#525252] leading-relaxed mb-2">{ev.desc}</p>
                  <div className="flex flex-wrap gap-4">
                    <span className="flex items-center gap-1.5 font-mono text-[11px] text-[#737373]">
                      <Calendar size={12} strokeWidth={1.5} /> {ev.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
