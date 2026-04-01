import { useEffect, useRef } from 'react'
import SectionLabel from '../components/SectionLabel'
import { ArrowRight, Users, Target, TrendingUp, Globe, FileText, Star } from 'lucide-react'

const benefits = [
  {
    n: '01',
    icon: Users,
    title: 'Direct Access to 200+ Future Engineers',
    body: 'Your brand reaches a highly engaged pool of 200+ engineering students actively pursuing careers in energy, sustainability, and infrastructure — the exact talent pipeline you need.',
  },
  {
    n: '02',
    icon: Target,
    title: 'Precision Brand Placement',
    body: 'Logo visibility across all chapter events, newsletters, website, LinkedIn posts, and social media — ensuring consistent brand exposure throughout the academic year.',
  },
  {
    n: '03',
    icon: TrendingUp,
    title: 'Talent Acquisition Pipeline',
    body: 'Priority access to internship and placement announcements. Conduct exclusive technical talks, webinars, and campus drives directly through our chapter network.',
  },
  {
    n: '04',
    icon: Globe,
    title: 'AEE Global Association Alignment',
    body: 'Your sponsorship aligns with the globally respected AEE brand — signalling your commitment to energy excellence and sustainability to 18,000+ professionals worldwide.',
  },
  {
    n: '05',
    icon: FileText,
    title: 'Newsletter & Research Co-Branding',
    body: 'Feature in our award-winning chapter newsletter, joint white papers, and energy research reports distributed to the AEE global network and VIT faculty.',
  },
  {
    n: '06',
    icon: Star,
    title: 'Custom Partnership Packages',
    body: 'From event naming rights to scholarship sponsorships — we co-design partnership packages tailored to your CSR goals, recruitment needs, and brand objectives.',
  },
]

const tiers = [
  { name: 'Platinum', price: '₹2,00,000', perks: ['Event Naming Rights', 'Premium Logo Placement', 'Keynote Speaking Slot', 'Dedicated Newsletter Feature', 'Campus Recruitment Drive', 'Research Co-Branding'], highlight: true },
  { name: 'Gold', price: '₹1,00,000', perks: ['Logo on All Materials', 'Speaking Slot', 'Newsletter Feature', 'Internship Announcement'], highlight: false },
  { name: 'Silver', price: '₹50,000', perks: ['Logo on Website & Events', 'Social Media Mention', 'Newsletter Credit'], highlight: false },
]

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

      {/* Benefits grid */}
      <div className="w-full">
        <div className="border-b border-[#111111]">
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => {
              const Icon = b.icon
              const col = i % 3
              const row = Math.floor(i / 3)
              const totalRows = Math.ceil(benefits.length / 3)
              return (
                <div
                  key={b.n}
                  className={`benefit-item reveal p-6 flex flex-col gap-3
                    ${col < 2 ? 'border-r border-[#111111]' : ''}
                    ${row < totalRows - 1 ? 'border-b border-[#111111]' : ''}
                    group hover:bg-[#F5F5F5] transition-colors
                  `}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono font-bold text-2xl text-[#CC0000]">{b.n}</span>
                    <div className="w-10 h-10 border border-[#111111] flex items-center justify-center group-hover:bg-[#111111] group-hover:text-[#F9F9F7] transition-all">
                      <Icon size={16} strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="font-serif font-bold text-lg leading-tight">{b.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-[#525252]">{b.body}</p>
                </div>
              )
            })}
          </div>

          {/* Sponsorship Tiers */}
          <div className="border-t border-[#111111]">
            <div className="border-b border-[#111111] px-8 py-3">
              <span className="section-label text-[#737373]">Sponsorship Tiers — 2025–26</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3">
              {tiers.map((t, i) => (
                <div
                  key={t.name}
                  className={`p-6 flex flex-col gap-4
                    ${i < tiers.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-[#111111]' : ''}
                    ${t.highlight ? 'bg-[#111111] text-[#F9F9F7]' : ''}
                  `}
                >
                  <div>
                    <div className={`section-label mb-1 ${t.highlight ? 'text-[#A3A3A3]' : 'text-[#737373]'}`}>{t.name}</div>
                    <div className={`font-mono font-black text-2xl ${t.highlight ? 'text-[#CC0000]' : 'text-[#111111]'}`}>{t.price}</div>
                    <div className={`font-mono text-[10px] ${t.highlight ? 'text-[#737373]' : 'text-[#A3A3A3]'}`}>per academic year</div>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {t.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2">
                        <span className="text-[#CC0000] font-mono text-xs mt-0.5">◆</span>
                        <span className={`font-body text-xs leading-snug ${t.highlight ? 'text-[#A3A3A3]' : 'text-[#525252]'}`}>{perk}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={t.highlight ? 'btn-outline border-[#A3A3A3] text-[#F9F9F7] hover:bg-[#F9F9F7] hover:text-[#111111]' : 'btn-primary'}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Prospectus <ArrowRight size={14} strokeWidth={1.5} />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
