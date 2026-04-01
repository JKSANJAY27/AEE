import { useEffect, useRef } from 'react'
import SectionLabel from '../components/SectionLabel'
import { Leaf, Zap, Users, Globe } from 'lucide-react'

const pillars = [
  {
    icon: Zap,
    tag: 'Pillar I',
    title: 'Energy Efficiency',
    body: 'We champion smart energy use through audits, workshops, and applied research — training the next generation of certified energy managers.',
  },
  {
    icon: Leaf,
    tag: 'Pillar II',
    title: 'Sustainability',
    body: 'From solar to smart grids, our projects tackle real-world sustainability challenges on campus and beyond.',
  },
  {
    icon: Users,
    tag: 'Pillar III',
    title: 'Industry Networking',
    body: 'We connect students directly with industry veterans, offering mentorship, internships, and career pathways in the energy sector.',
  },
  {
    icon: Globe,
    tag: 'Pillar IV',
    title: 'Global Reach',
    body: 'As part of the AEE global network, our members gain access to international certifications, conferences, and a worldwide community.',
  },
]

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

export default function About() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal()

  return (
    <section id="about" className="py-0">
      {/* Mission block */}
      <div className="w-full">
        <div className="border-b border-[#111111]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Label col */}
            <div className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-[#111111] p-8 flex flex-col justify-between">
              <div ref={r1} className="reveal">
                <SectionLabel
                  tag="§ 01 — About"
                  title="Who We Are"
                />
              </div>
              <div className="mt-8 space-y-2">
                <div className="section-label text-[#737373]">Established</div>
                <div className="font-mono font-bold text-3xl">2018</div>
                <div className="section-label text-[#737373] mt-4">Affiliation</div>
                <div className="font-mono text-sm">AEE Global Network</div>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-9 p-8 lg:p-12" ref={r2}>
              <div className="reveal">
                <blockquote className="font-serif font-bold text-2xl lg:text-3xl leading-tight border-l-4 border-[#CC0000] pl-6 mb-8 text-[#111111]">
                  "Bridging the gap between students and the global energy sector — one innovation at a time."
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="border-r-0 md:border-r border-[#E5E5E0] pr-0 md:pr-8">
                    <p className="font-body text-sm leading-relaxed text-[#525252]">
                      The AEE VIT Student Chapter is a student-run organisation at the Vellore Institute of Technology dedicated to promoting sustainable energy solutions, energy efficiency, and renewable technologies.
                    </p>
                    <p className="font-body text-sm leading-relaxed text-[#525252] mt-4">
                      Founded in 2018 and affiliated with the global Association of Energy Engineers, we have grown into one of the most recognised student chapters in the AEE network — earning the <strong>Best Overall Chapter Performance (International)</strong> award in 2024.
                    </p>
                  </div>
                  <div className="pl-0 md:pl-8 mt-6 md:mt-0">
                    <p className="font-body text-sm leading-relaxed text-[#525252]">
                      Located on the main VIT Vellore campus, Tiruvalam Road, Katpadi, we organise technical workshops, industry seminars, energy audits, and networking events that provide real-world exposure to the energy sector.
                    </p>
                    <p className="font-body text-sm leading-relaxed text-[#525252] mt-4">
                      Our members gain access to AEE's global library, webinars, certifications, and a network of energy professionals spanning over 100 countries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pillars — Inverted black section */}
      <div className="bg-[#111111] newsprint-texture border-b border-[#111111]">
        <div className="w-full">
          <div ref={r3} className="reveal">
            <div className="py-10 px-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-4 h-[2px] bg-[#CC0000]" />
                <span className="section-label text-[#A3A3A3]">Our Four Pillars</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
                {pillars.map((p, i) => {
                  const Icon = p.icon
                  return (
                    <div
                      key={p.title}
                      className={`p-6 ${i < pillars.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-[#404040] lg:border-r' : ''} group`}
                      style={{ transitionDelay: `${i * 80}ms` }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 border border-[#404040] flex items-center justify-center group-hover:border-[#CC0000] transition-colors">
                          <Icon size={16} strokeWidth={1.5} className="text-[#CC0000]" />
                        </div>
                        <span className="font-mono text-[10px] text-[#737373] tracking-widest uppercase">{p.tag}</span>
                      </div>
                      <h3 className="font-serif font-bold text-xl text-[#F9F9F7] mb-3">{p.title}</h3>
                      <p className="font-body text-xs leading-relaxed text-[#A3A3A3]">{p.body}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
