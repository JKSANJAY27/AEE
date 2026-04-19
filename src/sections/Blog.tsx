import { useEffect, useRef } from 'react'
import SectionLabel from '../components/SectionLabel'
import { ArrowRight, Mail, Rss, Mic } from 'lucide-react'

export default function Blog() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.dispatch-card').forEach((c, i) => {
            setTimeout(() => c.classList.add('visible'), i * 150)
          })
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="blog" className="py-0">
      <div className="w-full">
        <div className="border-b border-[#111111]">

          {/* Header */}
          <div className="border-b border-[#111111] p-8">
            <SectionLabel
              tag="§ 06 — The Chronicle"
              title="Chapter Dispatch"
              subtitle="Opinions, explainers, and deep-dives from our editorial team — covering the energy sector's most important stories."
            />
          </div>

          {/* Three Subsections */}
          <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3">
            
            {/* Newsletter */}
            <div className="dispatch-card reveal p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-[#111111] flex flex-col group hover:bg-[#F5F5F5] transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 border border-[#111111] flex items-center justify-center group-hover:bg-[#111111] group-hover:text-white transition-colors">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#737373]">Newsletter</span>
              </div>
              <h3 className="font-serif font-black text-2xl lg:text-3xl mb-4 group-hover:text-[#CC0000] transition-colors">
                The Chronicle
              </h3>
              <p className="font-body text-sm text-[#525252] leading-relaxed mb-8 flex-1">
                Subscribe to our monthly newsletter featuring energy sector news, campus updates, and exclusive interviews with industry leaders.
              </p>
              <div className="border-t border-[#E5E5E0] pt-6 flex flex-col gap-3">
                <input
                  type="email"
                  className="input-news"
                  placeholder="your@email.com"
                />
                <button className="btn-primary w-full justify-center gap-2">
                  Subscribe <ArrowRight size={14} strokeWidth={1.5} />
                </button>
                <a 
                  href="https://drive.google.com/drive/folders/125FAcF1kRYBkaazHyKShKLgAW5njZ9O6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full justify-center gap-2 text-center"
                >
                  Repository <ArrowRight size={14} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            {/* Blog */}
            <div className="dispatch-card reveal p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-[#111111] flex flex-col group hover:bg-[#F5F5F5] transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 border border-[#111111] flex items-center justify-center group-hover:bg-[#111111] group-hover:text-white transition-colors">
                  <Rss size={20} strokeWidth={1.5} />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#737373]">Articles</span>
              </div>
              <h3 className="font-serif font-black text-2xl lg:text-3xl mb-4 group-hover:text-[#CC0000] transition-colors">
                Read our Blog
              </h3>
              <p className="font-body text-sm text-[#525252] leading-relaxed mb-8 flex-1">
                Deep-dives into policy, technology, and sustainability by our members. Hosted on Medium.
              </p>
              <div className="border-t border-[#E5E5E0] pt-6 flex flex-col gap-3">
                <a 
                  href="https://medium.com/@aee-vit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline w-full justify-center gap-2 text-center"
                >
                  Visit Medium <ArrowRight size={14} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            {/* Podcast */}
            <div className="dispatch-card reveal p-8 lg:p-10 flex flex-col group hover:bg-[#F5F5F5] transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 border border-[#111111] flex items-center justify-center group-hover:bg-[#111111] group-hover:text-white transition-colors">
                  <Mic size={20} strokeWidth={1.5} />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#737373]">Audio</span>
              </div>
              <h3 className="font-serif font-black text-2xl lg:text-3xl mb-4 group-hover:text-[#CC0000] transition-colors">
                Podcast
              </h3>
              <p className="font-body text-sm text-[#525252] leading-relaxed mb-8 flex-1">
                Listen to our latest episodes featuring conversations with innovators in energy efficiency and clean tech.
              </p>
              <div className="border-t border-[#E5E5E0] pt-6 flex flex-col gap-3">
                <button className="btn-outline w-full justify-center gap-2 text-[#737373] border-[#E5E5E0] cursor-not-allowed">
                  Coming Soon
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
