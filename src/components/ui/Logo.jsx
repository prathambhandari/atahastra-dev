export default function Logo({ className = '', showText = true, size = 'md' }) {
  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  }

  const Wrapper = showText ? 'a' : 'div'
  const wrapperProps = showText ? { href: '#' } : {}

  return (
    <Wrapper
      {...wrapperProps}
      className={`flex items-center gap-3 ${className}`}
    >
      <img
        src="/logo.png"
        alt="Atahastra"
        className={`${sizes[size]} shrink-0 object-contain`}
      />
      {showText && (
        <span className="text-sm font-bold tracking-[0.15em] text-foreground">
          ATAHASHTRA
        </span>
      )}
    </Wrapper>
  )
}
