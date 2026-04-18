import { useEffect, useRef } from 'react'
import SectionLabel from '../components/SectionLabel'





export default function WhySponsorUs() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.benefit-item').forEach((c, i) => {
            setTimeout(() => c.classList.add('visible'), i * 80)
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
    <section id="why-sponsor" className="py-0">
      {/* Inverted header block */}
      <div className="bg-[#111111] newsprint-texture">
        <div className="w-full">
          <div className="border-l border-r border-[#404040] p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7">
                <SectionLabel
                  tag="§ 08 — Why Sponsor"
                  title="Invest in the Energy Generation"
                  inverted
                />
                <p className="font-body text-sm text-[#A3A3A3] leading-relaxed mt-4 max-w-lg">
                  AEE VIT is the leading student energy organisation at VIT Vellore — one of India's top-ranked private universities with 30,000+ students. Sponsoring us puts your brand at the forefront of India's next generation of energy engineers.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center gap-4">
                {[
                  { n: '200+', label: 'Engineering Students Reached' },
                  { n: '#1', label: 'AEE Chapter Globally (2024)' },
                  { n: '50+', label: 'Industry Events Per Year' },
                ].map(({ n, label }) => (
                  <div key={label} className="flex items-baseline gap-3 border-b border-[#404040] pb-3">
                    <span className="font-mono font-black text-3xl text-[#CC0000]">{n}</span>
                    <span className="font-mono text-xs text-[#A3A3A3] uppercase tracking-wider">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}
