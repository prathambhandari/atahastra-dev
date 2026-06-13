export default function SectionLabel({ children }) {
  return (
    <div className="mb-6 flex items-center gap-2.5">
      <span className="inline-block h-2.5 w-2.5 shrink-0 bg-foreground" />
      <span className="text-xs font-bold uppercase tracking-widest text-foreground">
        {children}
      </span>
    </div>
  )
}
