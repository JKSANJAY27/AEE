import { useEffect, useRef } from 'react'
import SectionLabel from '../components/SectionLabel'

const photos = [
  { id: 'G01', caption: 'Energy Audit Workshop, Jan 2025', aspect: 'tall', label: 'Fig. 2.1' },
  { id: 'G02', caption: 'NTPC Industrial Visit, Dec 2024', aspect: 'wide', label: 'Fig. 2.2' },
  { id: 'G03', caption: 'GreenTech Ideathon 2024', aspect: 'square', label: 'Fig. 2.3' },
  { id: 'G04', caption: 'AEE Award Ceremony, Nov 2024', aspect: 'tall', label: 'Fig. 2.4' },
  { id: 'G05', caption: 'Solar System Installation Demo', aspect: 'wide', label: 'Fig. 2.5' },
  { id: 'G06', caption: 'Chapter General Body Meeting', aspect: 'square', label: 'Fig. 2.6' },
  { id: 'G07', caption: 'Industry Expert Seminar Series', aspect: 'square', label: 'Fig. 2.7' },
  { id: 'G08', caption: 'Campus Energy Awareness Drive', aspect: 'wide', label: 'Fig. 2.8' },
]

// Pattern fills to simulate placeholder photos
const patterns = [
  'repeating-linear-gradient(45deg, #E5E5E0 0, #E5E5E0 1px, #F0F0EE 0, #F0F0EE 50%)',
  'repeating-linear-gradient(-45deg, #E5E5E0 0, #E5E5E0 1px, #EBEBEA 0, #EBEBEA 50%)',
  'repeating-linear-gradient(0deg, #E5E5E0 0, #E5E5E0 1px, #F5F5F3 0, #F5F5F3 50%)',
  'repeating-linear-gradient(90deg, #E5E5E0 0, #E5E5E0 1px, #F2F2F0 0, #F2F2F0 50%)',
]

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.gallery-item').forEach((c, i) => {
            setTimeout(() => c.classList.add('visible'), i * 60)
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
    <section id="gallery" className="py-0">
      <div className="w-full">
        <div className="border-b border-[#111111]">

          {/* Header */}
          <div className="border-b border-[#111111] p-8">
            <SectionLabel
              tag="§ 09 — Gallery"
              title="Through the Lens"
              subtitle="A visual record of our workshops, seminars, field visits, and milestones — captured in newsprint monochrome."
            />
          </div>

          {/* Masonry-style grid */}
          <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px]">
            {photos.map((photo, i) => {
              const isSpanTall = photo.aspect === 'tall'
              const isSpanWide = photo.aspect === 'wide'
              return (
                <div
                  key={photo.id}
                  className={`gallery-item reveal relative overflow-hidden group cursor-pointer border-r border-b border-[#111111] last:border-r-0
                    ${isSpanTall ? 'row-span-2' : ''}
                    ${isSpanWide ? 'col-span-2' : ''}
                  `}
                >
                  {/* Pattern fill background */}
                  <div
                    className="absolute inset-0 transition-all duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: patterns[i % patterns.length],
                      backgroundSize: '8px 8px',
                      filter: 'grayscale(100%)',
                    }}
                  />

                  {/* Halftone dot overlay */}
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                      backgroundSize: '8px 8px',
                    }}
                  />

                  {/* Initials placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif font-black text-6xl text-[#C8C8C6] group-hover:text-[#A3A3A3] transition-colors">
                      {photo.id}
                    </span>
                  </div>

                  {/* Caption overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-[#111111]/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-3">
                    <p className="font-mono text-[9px] text-[#A3A3A3] tracking-wider">{photo.label}</p>
                    <p className="font-body text-xs text-[#F9F9F7] leading-tight">{photo.caption}</p>
                  </div>

                  {/* Corner label */}
                  <div className="absolute top-2 right-2">
                    <span className="font-mono text-[8px] text-[#A3A3A3] bg-[#F9F9F7]/80 px-1.5 py-0.5">{photo.label}</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Ornament */}
          <div className="border-t border-[#111111] py-5 text-center font-serif text-lg text-[#A3A3A3] tracking-[1em]">
            ✦ ✦ ✦
          </div>

        </div>
      </div>
    </section>
  )
}
