import { useState, useRef, useEffect } from 'react'
import SectionLabel from '../components/SectionLabel'
import { Mail, MapPin, ArrowRight, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', dept: '', year: '', message: '', type: 'member' })
  const [submitted, setSubmitted] = useState(false)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-0">
      <div className="w-full">
        <div className="border-b border-[#111111]">

          {/* Header */}
          <div className="border-b border-[#111111] p-8">
            <SectionLabel
              tag="§ 10 — Contact & Join"
              title="Get Involved"
              subtitle="Become a member, collaborate on a project, or partner with us as a sponsor. We'd love to hear from you."
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">

            <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-[#111111] p-6 lg:p-10">
              {submitted ? (
                <div ref={ref} className="reveal flex flex-col items-center justify-center h-full gap-4 py-16">
                  <div className="w-16 h-16 border-2 border-[#111111] flex items-center justify-center">
                    <span className="font-serif text-3xl">✓</span>
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-center">Submission Received</h3>
                  <p className="font-body text-sm text-[#525252] text-center max-w-xs leading-relaxed">
                    Thank you for reaching out. We have saved your details for future reference.
                  </p>
                  <span className="font-mono text-[10px] text-[#A3A3A3] uppercase tracking-widest">— The AEE VIT Team</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="section-label text-[#737373] block mb-1">Full Name *</label>
                      <input
                        required
                        className="input-news"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="section-label text-[#737373] block mb-1">WhatsApp Number *</label>
                      <input
                        required
                        type="tel"
                        className="input-news"
                        placeholder="+91"
                      />
                    </div>
                    <div>
                      <label className="section-label text-[#737373] block mb-1">Email *</label>
                      <input
                        required
                        type="email"
                        className="input-news"
                        placeholder="you@gmail.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="section-label text-[#737373] block mb-1">University Email</label>
                      <input
                        type="email"
                        className="input-news"
                        placeholder="you@vitstudent.ac.in"
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn-primary self-start flex items-center gap-2 mt-4">
                    Submit Details <Send size={14} strokeWidth={1.5} />
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar info */}
            <div ref={ref} className="lg:col-span-5 reveal flex flex-col">

              {/* Address */}
              <div className="border-b border-[#111111] p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={14} strokeWidth={1.5} className="text-[#CC0000]" />
                  <span className="section-label text-[#737373]">Find Us</span>
                </div>
                <p className="font-serif font-bold text-lg mb-1">AEE VIT Student Chapter</p>
                <p className="font-body text-sm text-[#525252] leading-relaxed">
                  Student Activity Centre,<br />
                  Vellore Institute of Technology,<br />
                  Tiruvalam Road, Katpadi,<br />
                  Vellore — 632 014, Tamil Nadu, India
                </p>
              </div>

              {/* Email */}
              <div className="border-b border-[#111111] p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Mail size={14} strokeWidth={1.5} className="text-[#CC0000]" />
                  <span className="section-label text-[#737373]">Write to Us</span>
                </div>
                <a href="mailto:aee@vit.ac.in" className="font-mono text-sm hover:text-[#CC0000] transition-colors link-accent">
                  aee@vit.ac.in
                </a>
              </div>

              {/* Social */}
              <div className="border-b border-[#111111] p-6">
                <div className="section-label text-[#737373] mb-3">Follow Us</div>
                <div className="flex gap-2">
                  {[
                    { label: 'in', title: 'LinkedIn', href: 'https://linkedin.com/company/aee-vit' },
                    { label: 'ig', title: 'Instagram', href: '#' },
                    { label: 'yt', title: 'YouTube', href: 'https://www.youtube.com/@AEE-VIT' },
                    { label: 'md', title: 'Medium', href: 'https://medium.com/@aee-vit' },
                  ].map(({ label, title, href }) => (
                    <a
                      key={title}
                      href={href}
                      aria-label={title}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-box w-10 h-10 font-mono font-bold text-xs uppercase tracking-wider"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Membership CTA */}
              <div className="p-6 flex-1 bg-[#111111] flex flex-col justify-between">
                <div>
                  <span className="section-label text-[#A3A3A3] block mb-2">Membership</span>
                  <h3 className="font-serif font-bold text-2xl text-[#F9F9F7] leading-tight mb-3">
                    Join India's #1 Ranked AEE Student Chapter
                  </h3>
                  <p className="font-body text-xs text-[#A3A3A3] leading-relaxed">
                    Open to all VIT students across departments. No prior energy knowledge required — just curiosity and drive.
                  </p>
                </div>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-outline border-[#A3A3A3] text-[#F9F9F7] hover:bg-[#F9F9F7] hover:text-[#111111] mt-4 self-start flex items-center gap-2"
                >
                  Apply Now <ArrowRight size={14} strokeWidth={1.5} />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
