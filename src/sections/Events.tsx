import { useEffect, useRef } from 'react'
import SectionLabel from '../components/SectionLabel'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const events = [
  {
    tag: 'Workshop',
    title: 'Energy Auditing & Certification Bootcamp',
    date: 'March 15, 2025',
    location: 'VIT Vellore — Anna Auditorium',
    desc: 'A two-day intensive bootcamp on energy audit methodologies, BEE certification preparation, and hands-on field measurement techniques.',
    upcoming: true,
  },
  {
    tag: 'Seminar',
    title: 'Renewable Energy Landscape in India 2025',
    date: 'February 10, 2025',
    location: 'VIT Vellore — MB Block Seminar Hall',
    desc: 'Industry leaders from NTPC and MNRE shared insights on India\'s solar, wind, and green hydrogen expansion plans.',
    upcoming: false,
  },
  {
    tag: 'Industrial Visit',
    title: 'NTPC Simhadri Super Thermal Power Station',
    date: 'January 22, 2025',
    location: 'Simhadri, Andhra Pradesh',
    desc: 'A guided tour of one of India\'s largest coal power plants — exploring turbine operation, flue gas management, and efficiency systems.',
    upcoming: false,
  },
  {
    tag: 'Competition',
    title: 'GreenTech Ideathon 2024',
    date: 'November 18, 2024',
    location: 'VIT Vellore — TT Auditorium',
    desc: '72-hour hackathon challenging students to design cost-effective green energy solutions for tier-3 Indian cities.',
    upcoming: false,
  },
  {
    tag: 'Webinar',
    title: 'Carbon Credits & Net-Zero Strategy',
    date: 'October 5, 2024',
    location: 'Online — Zoom',
    desc: 'Expert panel on voluntary carbon markets, corporate net-zero pledges, and the role of energy engineers in ESG reporting.',
    upcoming: false,
  },
  {
    tag: 'Workshop',
    title: 'Solar PV System Design & Simulation',
    date: 'August 20, 2024',
    location: 'VIT Vellore — EEE Lab Block',
    desc: 'Hands-on training using PVsyst and Homer software for residential and commercial solar system design and simulation.',
    upcoming: false,
  },
]

const tagColors: Record<string, string> = {
  Workshop: 'bg-[#111111] text-[#F9F9F7]',
  Seminar: 'border border-[#111111] text-[#111111]',
  'Industrial Visit': 'bg-[#E5E5E0] text-[#111111]',
  Competition: 'bg-[#CC0000] text-[#F9F9F7]',
  Webinar: 'border border-[#E5E5E0] text-[#737373]',
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
                      <span className="flex items-center gap-1.5 font-mono text-[11px] text-[#737373]">
                        <MapPin size={12} strokeWidth={1.5} /> {ev.location}
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
                    <span className="flex items-center gap-1.5 font-mono text-[11px] text-[#737373]">
                      <MapPin size={12} strokeWidth={1.5} /> {ev.location}
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
