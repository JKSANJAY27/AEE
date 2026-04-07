import { useEffect, useRef } from 'react'
import Marquee from '../components/Marquee'
import { Zap } from 'lucide-react'

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = headlineRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(40px)'
    setTimeout(() => {
      el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 200)
  }, [])

  return (
    <section id="home" className="w-full bg-white">


      {/* Main hero grid */}
      <div className="w-full border-b border-[#111111] newsprint-texture">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* LEFT — Headline column (8/12) */}
          <div className="lg:col-span-8 border-b lg:border-b-0 lg:border-r border-[#111111] flex flex-col justify-between">
            <div className="p-8 lg:p-12 mb-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-[#CC0000]" />
                <span className="section-label text-[#737373]">Association of Energy Engineers · VIT Vellore</span>
              </div>
              <h1
                ref={headlineRef}
                className="font-serif font-black text-6xl sm:text-7xl xl:text-[8.5rem] leading-[0.85] tracking-tighter text-[#111111]"
              >
                Powering<br />
                <span className="italic font-normal">Tomorrow's</span><br />
                Energy<br />
                Leaders.
              </h1>
            </div>

            {/* Sub-grid below headline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-[#111111]">
              <div className="p-8 border-b sm:border-b-0 sm:border-r border-[#111111]">
                <p className="drop-cap font-body text-sm leading-relaxed text-[#525252]">
                  The AEE VIT Student Chapter bridges the gap between students and the energy sector — through rigorous technical events, global networking, and hands-on engagement with the world's most pressing energy challenges.
                </p>
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  {[
                    { n: '200+', label: 'Active Members' },
                    { n: '50+', label: 'Events Conducted' },
                    { n: '2×', label: 'AEE Global Awards' },
                  ].map(({ n, label }) => (
                    <div key={label} className="flex justify-between items-end border-b border-[#E5E5E0] pb-2">
                      <span className="font-mono font-bold text-2xl text-[#111111]">{n}</span>
                      <span className="section-label text-[#737373]">{label}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 mt-8">
                  <a href="#about" className="btn-primary w-full sm:w-auto text-center justify-center">
                    Explore Chapter
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Sidebar (4/12) */}
          <div className="lg:col-span-4 flex flex-col">
            {/* Award Box */}
            <div className="border-b border-[#111111] p-8 newsprint-texture bg-[#111111] text-[#F9F9F7]">
              <div className="flex items-center gap-2 mb-4">
                <Zap size={14} strokeWidth={1.5} className="text-[#CC0000]" />
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#A3A3A3]">
                  Featured Award
                </span>
              </div>
              <p className="font-serif font-bold text-2xl leading-tight mb-3">
                Best Overall Chapter Performance
              </p>
              <p className="font-mono text-xs text-[#A3A3A3] mb-6">
                International Category — AEE Global, 2024
              </p>
              <div className="border-t border-[#404040] pt-4">
                <p className="font-mono text-[10px] text-[#737373] tracking-wider uppercase">
                  Also Recognised
                </p>
                <p className="font-body text-xs text-[#A3A3A3] mt-2">
                  Best Chapter Newsletter — AEE 2022
                </p>
              </div>
            </div>

            {/* Featured Image Fill */}
            <div className="flex-1 relative overflow-hidden group min-h-[300px] border-b border-[#111111]">
              <img 
                src="/pic4.jpeg" 
                alt="AEE VIT Members in Action" 
                className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />
              
              {/* Halftone dot overlay for texture */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                  backgroundSize: '4px 4px',
                }}
              />
              
              <div className="absolute bottom-0 left-0 p-8 z-10 w-full">
                <div className="border-l-2 border-[#CC0000] pl-4">
                  <p className="font-mono text-[10px] text-[#A3A3A3] tracking-widest uppercase mb-1">
                    In Action
                  </p>
                  <p className="font-serif text-lg text-[#F9F9F7] leading-tight">
                    Driving energy innovation on campus and beyond
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Marquee />
    </section>
  )
}
