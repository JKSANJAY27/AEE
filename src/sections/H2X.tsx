import SectionLabel from '../components/SectionLabel'

export default function H2X() {
  return (
    <section id="h2x" className="py-0">
      {/* Inverted header block */}
      <div className="bg-[#111111] newsprint-texture">
        <div className="w-full">
          <div className="border-l border-r border-[#404040] p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-12">
                <SectionLabel
                  tag="§ 07 — H2X"
                  title="Team H2X"
                  inverted
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
