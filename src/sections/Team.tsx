import { useEffect, useRef } from 'react'
import SectionLabel from '../components/SectionLabel'

const team = [
  { name: 'Dr. Sakthivadivel D', role: 'Faculty Coordinator', linkedin: 'https://www.linkedin.com/in/sakthivadivel-d-03836038/?originalSubdomain=in', fig: '0.1', initials: 'SDK', image: '/Sakthivadivel.jpeg' },
  { name: 'Pranav Raj V R', role: 'Chairperson', linkedin: 'https://www.linkedin.com/in/pranav-raj-vr/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BU93v4MhtQZ2YYwNlh7TDYg%3D%3D', fig: '1.1', initials: 'PR', image: '/Pranav Raj V.jpeg' },
  { name: 'Vipul Kumar Rout', role: 'Secretary', linkedin: 'https://www.linkedin.com/in/vipul-kumar-rout-b4603636a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BU93v4MhtQZ2YYwNlh7TDYg%3D%3D', fig: '1.2', initials: 'VR', image: '/Vipul Kumar Rout.jpeg' },
  { name: 'Shreeshankar S', role: 'Vice Chairperson', linkedin: 'https://www.linkedin.com/in/shreeshankar-s/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BU93v4MhtQZ2YYwNlh7TDYg%3D%3D', fig: '1.3', initials: 'SS', image: '/Shreeshankar S.jpeg' },
  { name: 'Mohnish Ram D', role: 'Co-Secretary', linkedin: 'https://www.linkedin.com/in/mohnish-ram-d-n-142b0b22b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BU93v4MhtQZ2YYwNlh7TDYg%3D%3D', fig: '1.4', initials: 'MD', image: '/Mohnish Ram D.jpeg' },
  { name: 'Hari Tharun N', role: 'Technical Lead', linkedin: 'https://www.linkedin.com/in/hari-tharun-n-0253a1321/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BU93v4MhtQZ2YYwNlh7TDYg%3D%3D', fig: '1.5', initials: 'HN', image: '/Hari Tharun N.jpeg' },
  { name: 'Sanjay J K', role: 'Design Lead', linkedin: 'https://www.linkedin.com/in/sanjay-j-k/', fig: '1.6', initials: 'JK', image: '/Sanjay J K.jpeg' },
  { name: 'Rishab Ramesh', role: 'Events Lead', linkedin: 'https://www.linkedin.com/in/rishabramesh/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BU93v4MhtQZ2YYwNlh7TDYg%3D%3D', fig: '1.7', initials: 'RR', image: '/Rishab Ramesh.jpeg' },
  { name: 'Abhinav Maurya', role: 'Editorial Lead', linkedin: 'https://www.linkedin.com/in/abhinav-maurya-334528321/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BU93v4MhtQZ2YYwNlh7TDYg%3D%3D', fig: '1.8', initials: 'AM', image: '/Abhinav Maurya.jpeg' },
  { name: 'Aarushi Mehrotra', role: 'Creative Lead', linkedin: 'https://www.linkedin.com/in/aarushi-mehrotra-664092212/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BU93v4MhtQZ2YYwNlh7TDYg%3D%3D', fig: '1.9', initials: 'AM', image: '/Aarushi Mehrotra.jpeg' },
  { name: 'Vatsal Chitlangia', role: 'Management Lead', linkedin: 'https://www.linkedin.com/in/vatsal-chitlangia/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BU93v4MhtQZ2YYwNlh7TDYg%3D%3D', fig: '1.10', initials: 'VC', image: '/Vatsal.jpeg' },
]

export default function Team() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.team-card').forEach((card, i) => {
            setTimeout(() => card.classList.add('visible'), i * 80)
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
    <section id="team" className="py-0">
      <div className="w-full">
        <div className="border-b border-[#111111]">

          {/* Header */}
          <div className="border-b border-[#111111] p-8">
            <SectionLabel
              tag="§ 03 — Leadership"
              title="Our Team"
              subtitle="Meet the students driving AEE VIT's mission across technical, editorial, and outreach domains."
            />
          </div>

          {/* Grid */}
          <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5">
            {team.map((member, i) => {
              const col = i % 5
              const row = Math.floor(i / 5)
              const isLastCol = col === 4
              const isLastRow = row === Math.floor((team.length - 1) / 5)
              return (
                <div
                  key={member.name}
                  className={`team-card reveal group p-0 flex flex-col cursor-default
                    ${!isLastCol ? 'border-r border-[#111111]' : ''}
                    ${!isLastRow ? 'border-b border-[#111111]' : ''}
                  `}
                >
                  {/* Photo / Initials placeholder */}
                  <div className="relative overflow-hidden bg-[#E5E5E5] aspect-square border-b border-[#111111] flex items-center justify-center">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500" 
                      />
                    ) : (
                      <>
                        {/* Halftone pattern */}
                        <div
                          className="absolute inset-0 opacity-10"
                          style={{
                            backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                            backgroundSize: '10px 10px',
                          }}
                        />
                        {/* Initials */}
                        <span className="font-serif font-black text-4xl text-[#A3A3A3] z-10 group-hover:text-[#111111] transition-colors relative">
                          {member.initials}
                        </span>
                      </>
                    )}
                    {/* Hover invert overlay */}
                    <div className="absolute inset-0 bg-[#111111] opacity-0 group-hover:opacity-5 transition-opacity" />
                  </div>

                  {/* Info */}
                  <div className="p-4 flex-1 flex flex-col gap-1">
                    <div className="section-label text-[#CC0000]">{member.role}</div>
                    <h3 className="font-serif font-bold text-base leading-tight">{member.name}</h3>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-[#737373] hover:text-[#CC0000] transition-colors mt-auto uppercase w-max">
                      LINKEDIN ↗
                    </a>
                    <div className="border-t border-[#E5E5E0] mt-2 pt-1">
                      <span className="font-mono text-[9px] text-[#A3A3A3] tracking-widest">Fig. {member.fig}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
