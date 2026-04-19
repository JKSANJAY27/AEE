import { Zap } from 'lucide-react'

const columns = [
  {
    heading: 'Chapter',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Achievements', href: '#achievements' },
      { label: 'Team', href: '#team' },
      { label: 'Projects', href: '#projects' },
    ],
  },
  {
    heading: 'Programs',
    links: [
      { label: 'Events', href: '#events' },
      { label: 'Blog', href: '#blog' },
      { label: 'Gallery', href: '#gallery' },
    ],
  },
  {
    heading: 'Partners',
    links: [
      { label: 'Sponsors', href: '#sponsors' },
      { label: 'Why Sponsor Us', href: '#why-sponsor' },
      { label: 'Contact', href: '#contact' },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#111111] newsprint-texture">
      <div className="w-full">
        <div className="border-l border-r border-[#404040]">

          {/* Main footer grid */}
          <div className="grid grid-cols-2 md:grid-cols-12 border-b border-[#404040]">

            {/* Logo / About block */}
            <div className="col-span-2 md:col-span-4 border-b md:border-b-0 md:border-r border-[#404040] p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 border border-[#404040] flex items-center justify-center">
                  <Zap size={16} strokeWidth={1.5} className="text-[#CC0000]" />
                </div>
                <div>
                  <div className="font-serif font-black text-lg text-[#F9F9F7] leading-none">AEE VIT</div>
                  <div className="font-mono text-[9px] text-[#737373] tracking-widest uppercase">Energy Engineers</div>
                </div>
              </div>
              <p className="font-body text-xs text-[#737373] leading-relaxed mb-6 max-w-xs">
                The Association of Energy Engineers Student Chapter at VIT Vellore — empowering students to lead the global energy transition.
              </p>
              <div className="flex gap-2">
                {[
                  { label: 'in', title: 'LinkedIn', href: 'https://linkedin.com/company/aee-vit' },
                  { label: 'ig', title: 'Instagram', href: '#' },
                  { label: 'yt', title: 'YouTube', href: '#' },
                  { label: 'md', title: 'Medium', href: 'https://medium.com/@aee-vit' },
                  { label: '✉', title: 'Email', href: 'mailto:aee@vit.ac.in' },
                ].map(({ label, title, href }) => (
                  <a
                    key={title}
                    href={href}
                    aria-label={title}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 border border-[#404040] flex items-center justify-center text-[#737373] hover:border-[#CC0000] hover:text-[#CC0000] transition-all font-mono text-[10px] font-bold uppercase"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {columns.map((col, i) => (
              <div
                key={col.heading}
                className={`col-span-1 md:col-span-2 p-6 ${i < columns.length - 1 ? 'border-r border-[#404040]' : ''}`}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#737373] mb-4">{col.heading}</p>
                <ul className="space-y-2">
                  {col.links.map(link => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                        className="font-sans text-xs text-[#A3A3A3] hover:text-[#F9F9F7] hover:text-[#CC0000] transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter */}
            <div className="col-span-2 md:col-span-4 border-t md:border-t-0 md:border-l border-[#404040] p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#737373] mb-2">The Chronicle</p>
              <p className="font-serif font-bold text-base text-[#F9F9F7] mb-1">Monthly Newsletter</p>
              <p className="font-body text-xs text-[#737373] leading-relaxed mb-4">
                Energy insights, chapter updates, and industry news — delivered monthly.
              </p>
              <div className="flex gap-0">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent border border-[#404040] px-3 py-2 font-mono text-xs text-[#F9F9F7] placeholder:text-[#525252] outline-none focus:border-[#CC0000] transition-colors"
                />
                <button className="bg-[#CC0000] text-[#F9F9F7] px-4 font-mono text-xs hover:bg-[#AA0000] transition-colors">
                  →
                </button>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 gap-3">
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-mono text-[10px] text-[#525252] uppercase tracking-widest">
                Vol. VII · Est. 2018 · Vellore Edition · {year}
              </span>
              <span className="font-mono text-[9px] text-[#404040]">
                Affiliated: AEE Global — aeecenter.org
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] text-[#525252]">
                © {year} AEE VIT Student Chapter
              </span>
              <div className="w-2 h-2 bg-[#CC0000]" />
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
