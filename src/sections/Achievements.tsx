import { useEffect, useRef } from 'react'
import SectionLabel from '../components/SectionLabel'
import { Award, Star, Trophy, Medal } from 'lucide-react'

const achievements = [
  {
    icon: Trophy,
    year: '2024',
    category: 'International Award',
    title: 'Best Overall Student Chapter Performance',
    body: 'Recognised by AEE Global for exemplary chapter operations, event quality, membership growth, and industry engagement across all international student chapters.',
    highlight: true,
  },
  {
    icon: Award,
    year: '2022',
    category: 'Editorial Excellence',
    title: 'Best Chapter Newsletter',
    body: 'AEE awarded our chapter the Best Newsletter for outstanding content quality, design, and regularity of publication covering energy industry trends.',
    highlight: false,
  },
  {
    icon: Star,
    year: '2023',
    category: 'Chapter Growth',
    title: '200+ Active Members',
    body: 'Crossed the 200-member milestone, making AEE VIT one of the largest and most active student chapters in the South Asian region.',
    highlight: false,
  },
  {
    icon: Medal,
    year: '2022',
    category: 'Community Impact',
    title: '50+ Events Conducted',
    body: 'Successfully organised over 50 technical workshops, seminars, industrial visits, and networking sessions over our chapter history.',
    highlight: false,
  },
]

export default function Achievements() {
  const refs = achievements.map(() => useRef<HTMLDivElement>(null))

  useEffect(() => {
    refs.forEach((ref, i) => {
      const el = ref.current
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => { el.classList.add('visible') }, i * 120)
            obs.disconnect()
          }
        },
        { threshold: 0.1 }
      )
      obs.observe(el)
      return () => obs.disconnect()
    })
  }, [])

  return (
    <section id="achievements" className="py-0">
      <div className="w-full">
        <div className="border-b border-[#111111]">

          {/* Header */}
          <div className="border-b border-[#111111] p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="lg:border-r border-[#E5E5E0] lg:pr-8">
                <SectionLabel
                  tag="§ 02 — Achievements"
                  title="Recognised Globally"
                  subtitle="AEE VIT has earned international recognition for outstanding chapter performance, editorial excellence, and community impact."
                />
              </div>
              <div className="lg:pl-8 mt-6 lg:mt-0 flex items-center">
                <div className="border-l-4 border-[#CC0000] pl-4">
                  <p className="font-mono text-xs text-[#737373] uppercase tracking-wider mb-1">Chapter Record</p>
                  <p className="font-serif font-black text-4xl">2× AEE Awards</p>
                  <p className="font-body text-sm text-[#525252] mt-1">Internationally recognised · 2022 & 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((a, i) => {
              const Icon = a.icon
              return (
                <div
                  key={a.title}
                  ref={refs[i]}
                  className={`reveal hard-shadow-hover p-6 flex flex-col gap-4 cursor-default
                    ${i < achievements.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-[#111111]' : ''}
                    ${a.highlight ? 'bg-[#111111] text-[#F9F9F7]' : 'bg-[#F9F9F7] text-[#111111]'}
                  `}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`w-10 h-10 border flex items-center justify-center
                        ${a.highlight ? 'border-[#CC0000]' : 'border-[#111111]'}
                      `}
                    >
                      <Icon
                        size={16}
                        strokeWidth={1.5}
                        className={a.highlight ? 'text-[#CC0000]' : 'text-[#111111]'}
                      />
                    </div>
                    <span
                      className={`font-mono text-[10px] tracking-widest uppercase
                        ${a.highlight ? 'text-[#A3A3A3]' : 'text-[#737373]'}
                      `}
                    >
                      {a.year}
                    </span>
                  </div>
                  <div>
                    <div className={`section-label mb-1 ${a.highlight ? 'text-[#A3A3A3]' : 'text-[#737373]'}`}>
                      {a.category}
                    </div>
                    <h3
                      className={`font-serif font-bold text-xl leading-tight
                        ${a.highlight ? 'text-[#F9F9F7]' : 'text-[#111111]'}
                      `}
                    >
                      {a.title}
                    </h3>
                  </div>
                  <p
                    className={`font-body text-xs leading-relaxed mt-auto
                      ${a.highlight ? 'text-[#A3A3A3]' : 'text-[#525252]'}
                    `}
                  >
                    {a.body}
                  </p>
                  {a.highlight && (
                    <div className="border-t border-[#404040] pt-3">
                      <span className="badge-breaking">International Award</span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Ornamental divider */}
          <div className="border-t border-[#111111] py-5 text-center font-serif text-lg text-[#A3A3A3] tracking-[1em]">
            ✦ ✦ ✦
          </div>
        </div>
      </div>
    </section>
  )
}
