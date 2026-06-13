const variants = {
  primary:
    'bg-foreground text-page hover:opacity-90 border border-foreground',
  secondary:
    'bg-transparent text-foreground hover:bg-foreground/5 border border-border',
  ghost:
    'bg-transparent text-foreground hover:bg-foreground/5 border border-border hover:border-foreground/40',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
