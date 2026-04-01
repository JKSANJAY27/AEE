import { useEffect, useRef } from 'react'
import SectionLabel from '../components/SectionLabel'
import { ArrowRight } from 'lucide-react'

const posts = [
  {
    id: 'B01',
    tag: 'Energy Policy',
    title: 'India\'s Green Hydrogen Mission: What It Means for Engineers',
    author: 'Meera Rajan',
    date: 'Mar 18, 2025',
    readtime: '6 min read',
    excerpt: 'With over ₹19,700 crore allocated to the National Green Hydrogen Mission, India is positioning itself as a global green hydrogen hub. We break down what this means for energy engineers in 2025.',
    issue: 'Issue XXIV',
  },
  {
    id: 'B02',
    tag: 'Solar Energy',
    title: 'Rooftop Solar Economics: A Student\'s Calculation Guide',
    author: 'Arjun Pillai',
    date: 'Feb 28, 2025',
    readtime: '8 min read',
    excerpt: 'A step-by-step walkthrough of how to evaluate the financial viability of a rooftop solar installation — IRR, payback period, and the PM Surya Ghar subsidy scheme explained.',
    issue: 'Issue XXIII',
  },
  {
    id: 'B03',
    tag: 'Career',
    title: 'How to Become a Certified Energy Manager (CEM) as a Student',
    author: 'Advaith Suresh',
    date: 'Jan 15, 2025',
    readtime: '5 min read',
    excerpt: 'The AEE\'s CEM certification is one of the most respected credentials in energy management. Here\'s our chapter president\'s step-by-step guide to achieving it while still in college.',
    issue: 'Issue XXII',
  },
  {
    id: 'B04',
    tag: 'Smart Grid',
    title: 'AMI & Smart Meters: The Infrastructure Beneath India\'s DISCOMs',
    author: 'Kiran Vasanth',
    date: 'Dec 9, 2024',
    readtime: '7 min read',
    excerpt: 'Advanced Metering Infrastructure is transforming how Indian utilities manage demand and reduce AT&C losses. An in-depth technical explainer from our infrastructure team.',
    issue: 'Issue XXI',
  },
]

export default function Blog() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.blog-card').forEach((c, i) => {
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

  const [featured, ...rest] = posts

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

          {/* Featured + sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* Featured article */}
            <div className="lg:col-span-8 border-b lg:border-b-0 lg:border-r border-[#111111] p-6 lg:p-10 hard-shadow-hover cursor-pointer group">
              <div className="flex items-center gap-3 mb-4">
                <span className="badge-breaking">Featured</span>
                <span className="font-mono text-[10px] text-[#737373] uppercase tracking-wider">{featured.issue}</span>
              </div>
              <div className="section-label text-[#CC0000] mb-2">{featured.tag}</div>
              <h2 className="font-serif font-black text-3xl lg:text-4xl leading-tight mb-4 group-hover:text-[#CC0000] transition-colors">
                {featured.title}
              </h2>
              <p className="drop-cap font-body text-sm leading-relaxed text-[#525252] mb-6 text-justify">
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between border-t border-[#E5E5E0] pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-[#111111] flex items-center justify-center">
                    <span className="font-mono text-[8px] font-bold text-[#F9F9F7]">
                      {featured.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-sans font-semibold text-xs uppercase tracking-wider">{featured.author}</div>
                    <div className="font-mono text-[10px] text-[#737373]">{featured.date} · {featured.readtime}</div>
                  </div>
                </div>
                <button className="btn-outline py-2 px-4 text-xs flex items-center gap-1">
                  Read <ArrowRight size={12} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Sidebar articles */}
            <div ref={ref} className="lg:col-span-4 flex flex-col">
              {rest.map((post, i) => (
                <div
                  key={post.id}
                  className={`blog-card reveal p-5 flex flex-col gap-2 cursor-pointer group hover:bg-[#F5F5F5] transition-colors
                    ${i < rest.length - 1 ? 'border-b border-[#111111]' : ''}
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span className="section-label text-[#CC0000]">{post.tag}</span>
                    <span className="font-mono text-[9px] text-[#A3A3A3]">{post.issue}</span>
                  </div>
                  <h3 className="font-serif font-bold text-base leading-snug group-hover:text-[#CC0000] transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-body text-xs text-[#525252] leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 mt-auto pt-2 border-t border-[#E5E5E0]">
                    <span className="font-mono text-[10px] text-[#737373]">{post.author}</span>
                    <span className="text-[#A3A3A3]">·</span>
                    <span className="font-mono text-[10px] text-[#737373]">{post.readtime}</span>
                  </div>
                </div>
              ))}

              {/* Newsletter CTA */}
              <div className="border-t border-[#111111] bg-[#111111] p-5 mt-auto">
                <p className="font-serif font-bold text-lg text-[#F9F9F7] mb-1">Subscribe to The Chronicle</p>
                <p className="font-mono text-[10px] text-[#A3A3A3] mb-3">Monthly dispatches from our editorial desk.</p>
                <div className="flex gap-0">
                  <input
                    type="email"
                    className="flex-1 bg-transparent border border-[#404040] px-3 py-2 font-mono text-xs text-[#F9F9F7] placeholder:text-[#737373] outline-none focus:border-[#CC0000] transition-colors"
                    placeholder="your@email.com"
                  />
                  <button className="bg-[#CC0000] text-[#F9F9F7] font-mono text-xs px-3 hover:bg-[#AA0000] transition-colors">
                    →
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
