import SectionLabel from '../components/SectionLabel'

export default function H2X() {
  return (
    <section id="h2x" className="py-0">
      {/* Inverted header block */}
      <div className="bg-[#111111] newsprint-texture">
        <div className="w-full">
          <div className="border-l border-r border-[#404040] p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7">
                <SectionLabel
                  tag="§ 07 — H2X"
                  title="Invest in Green Energy"
                  inverted
                />
                <p className="font-body text-sm text-[#A3A3A3] leading-relaxed mt-4 max-w-lg">
                  Join us in pioneering the future of clean energy. The H2X initiative explores sustainable 
                  hydrogen ecosystems, zero-emission technologies, and next-generation green tech.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center gap-4">
                {[
                  { n: '100%', label: 'Zero-Emission Goals' },
                  { n: 'H2', label: 'Hydrogen Tech Focus' },
                  { n: '2025', label: 'Launch Year' },
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
    </section>
  )
}
