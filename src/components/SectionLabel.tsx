interface SectionLabelProps {
  tag?: string
  title: string
  subtitle?: string
  center?: boolean
  inverted?: boolean
}

export default function SectionLabel({ tag, title, subtitle, center = false, inverted = false }: SectionLabelProps) {
  const textMuted = inverted ? 'text-[#A3A3A3]' : 'text-[#737373]'
  const textMain = inverted ? 'text-[#F9F9F7]' : 'text-[#111111]'
  return (
    <div className={center ? 'text-center' : ''}>
      {tag && (
        <div className={`flex items-center gap-3 mb-4`}>
          <div className={`flex-1 h-[2px] ${inverted ? 'bg-[#CC0000]' : 'bg-[#111111]'}`} />
          <div className={`section-label uppercase tracking-widest font-mono text-[10px] sm:text-xs ${textMuted}`}>{tag}</div>
        </div>
      )}
      <h2 className={`font-serif font-black text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-tighter ${textMain}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`font-body text-base mt-3 max-w-xl ${center ? 'mx-auto' : ''} leading-relaxed ${textMuted}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
