import { useEffect, useRef, useState } from 'react'
import SectionLabel from '../components/SectionLabel'

const photos = [
  { id: 'G01', image: '/pic1.jpeg' },
  { id: 'G02', image: '/pic2.jpeg' },
  { id: 'G03', image: '/pic3.jpeg' },
  { id: 'G04', image: '/pic4.jpeg' },
  { id: 'G05', image: '/pic5.jpeg' },
  { id: 'G06', image: '/pic6.jpeg' },
]

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null)
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)

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

  // Close modal on escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPhoto(null)
    }
    if (selectedPhoto) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [selectedPhoto])

  return (
    <>
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

            {/* Masonry-style grid utilizing CSS columns to prevent cropping and whitespace */}
            <div ref={ref} className="columns-1 sm:columns-2 lg:columns-3 gap-0 bg-[#111111]">
              {photos.map((photo) => {
                return (
                  <div
                    key={photo.id}
                    onClick={() => setSelectedPhoto(photo.image)}
                    className="gallery-item reveal relative overflow-hidden group cursor-pointer inline-block w-full border-[0.5px] border-[#111111] m-0 p-0"
                    style={{ marginBottom: '-6px' }} // Negates inline-block default gap
                  >
                    {/* Native image scale for 0-cropping */}
                    <img 
                      src={photo.image}
                      alt={photo.id}
                      className="w-full h-auto block transition-all duration-500 group-hover:scale-[1.02] grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100"
                    />

                    {/* Halftone dot overlay */}
                    <div
                      className="absolute inset-0 opacity-10 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"
                      style={{
                        backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                        backgroundSize: '8px 8px',
                      }}
                    />
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

      {/* Lightbox / Fullscreen Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-12 animate-fade-in"
          style={{ backgroundColor: 'rgba(17, 17, 17, 0.95)' }}
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {/* Close button */}
            <button 
              className="absolute top-0 right-0 p-4 text-[#A3A3A3] hover:text-[#CC0000] transition-colors z-50 flex flex-col items-center gap-1"
              onClick={() => setSelectedPhoto(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              <span className="font-mono text-[9px] uppercase tracking-widest">Close</span>
            </button>
            <img 
              src={selectedPhoto} 
              className="max-w-full max-h-full object-contain hard-shadow select-none shadow-[20px_20px_0px_0px_rgba(204,0,0,1)]" 
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  )
}
