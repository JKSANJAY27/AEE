import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Events', href: '#events' },
  { label: 'Projects', href: '#projects' },
  { label: 'H2X', href: '#h2x' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'Dispatch', href: '#blog' },
  { label: 'Team', href: '#team' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Join Us', href: '#contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-200 border-b-[3px] border-[#111111] bg-white`}
      >
        {/* Edition Strip / Nav row combination style */}
        <div className="w-full flex flex-col">
          <div className="flex items-center justify-between py-2 px-6 border-b border-[#111111] bg-white">
            <span className="font-mono text-[9px] tracking-widest uppercase text-[#525252]">
              Vol. VII &nbsp;|&nbsp; Est. 2018 &nbsp;|&nbsp; Vellore Edition
            </span>
            <span className="font-mono text-[9px] tracking-widest uppercase text-[#525252]">
              AEE Global Chapter &nbsp;·&nbsp; VIT Vellore
            </span>
          </div>

        {/* Main Nav */}
        <div className="w-full px-6">
          <div className="flex items-center justify-between py-5 bg-white">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
              className="flex items-center gap-2 group"
              aria-label="AEE VIT Home"
            >
              <div className="font-serif font-black text-3xl md:text-4xl leading-none tracking-tighter uppercase whitespace-nowrap">
                AEE.VIT
              </div>
            </a>

            {/* Publication Date / Vol */}
            <div className="hidden lg:flex items-center border border-[#111111] divide-x divide-[#111111] ml-6 mr-auto">
              <span className="px-3 py-1 font-mono text-[9px] font-bold tracking-widest uppercase text-[#111111]">VOL. VII</span>
              <span className="px-3 py-1 font-mono text-[9px] font-bold tracking-widest uppercase text-[#111111]">{new Date().toLocaleDateString('en-US')}</span>
              <span className="px-3 py-1 font-mono text-[9px] font-bold tracking-widest uppercase text-[#111111]">VELLORE EDITION</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link"
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Hamburger */}
            <div className="flex items-center gap-3">
              <button
                className="lg:hidden icon-box w-10 h-10"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className={`mobile-menu fixed inset-0 z-50 bg-[#F9F9F7] pt-20 px-6 flex flex-col gap-0 lg:hidden ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-between border-b border-[#111111] pb-4 mb-4">
          <span className="font-serif font-black text-xl">Navigation</span>
          <button
            className="icon-box w-10 h-10"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="border-b border-[#E5E5E0] py-4 font-sans font-semibold text-sm tracking-widest uppercase hover:text-[#CC0000] transition-colors"
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
          >
            {link.label}
          </a>
        ))}
        <div className="mt-6">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
            className="btn-primary w-full justify-center"
          >
            Become a Member
          </a>
        </div>
        <div className="mt-auto pb-8 pt-8 border-t border-[#E5E5E0]">
          <p className="font-mono text-xs text-[#737373] tracking-widest uppercase">
            AEE VIT Student Chapter<br />
            VIT Vellore, Tamil Nadu
          </p>
        </div>
      </div>
    </>
  )
}
