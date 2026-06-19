function HeroArcs() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 360 420"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 340 C100 220, 180 160, 340 100"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeDasharray="4 8"
        strokeOpacity="0.45"
      />
      <path
        d="M60 400 C140 280, 220 220, 360 160"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeDasharray="4 8"
        strokeOpacity="0.3"
      />
    </svg>
  )
}

function MiniChart() {
  return (
    <svg className="h-10 w-full" viewBox="0 0 80 32" fill="none" aria-hidden="true">
      <path
        d="M2 24 L18 18 L32 22 L48 10 L62 14 L78 4"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="4" y="28" width="72" height="2" rx="1" fill="#2e2e2e" />
    </svg>
  )
}

export default function HeroVisual() {
  return (
    <div className="relative mx-auto h-[22rem] w-[19rem] sm:h-[24rem] sm:w-[21rem] lg:h-[26rem] lg:w-[22rem]">
      <HeroArcs />

      <div className="hero-float absolute left-2 top-8 z-20 w-48 rotate-[-8deg] sm:w-52">
        <div className="rounded-2xl border border-white/10 bg-elevated p-4 shadow-[0_20px_50px_rgba(0,0,0,0.45)] sm:p-5">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-muted">
            UI/UX Design
          </p>
          <p className="mt-2 text-sm font-bold leading-snug text-foreground sm:text-base">
            Headline Goes Here
          </p>
          <span className="mt-3 inline-block rounded-full bg-accent px-3 py-1 text-[10px] font-semibold text-black">
            Get Started
          </span>
          <svg className="mt-3 h-8 w-full" viewBox="0 0 120 24" fill="none" aria-hidden="true">
            <path
              d="M4 18 C30 6, 50 20, 116 8"
              stroke="var(--accent)"
              strokeWidth="1.5"
              strokeDasharray="3 5"
              strokeOpacity="0.7"
            />
          </svg>
        </div>
      </div>

      <div className="hero-float hero-float-delay-1 absolute right-2 top-2 z-30 w-40 rotate-[6deg] sm:w-44">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-elevated shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
          <div className="h-24 bg-gradient-to-br from-orange-700/70 via-rose-900/50 to-slate-900 sm:h-28" />
          <p className="px-3 py-2.5 text-[11px] font-medium leading-snug text-foreground">
            Enhancing digital experiences.
          </p>
        </div>
      </div>

      <div className="hero-float hero-float-delay-2 absolute bottom-28 left-6 z-10 w-20 rotate-[-12deg]">
        <div className="flex aspect-square flex-col items-center justify-center rounded-xl border border-white/10 bg-elevated shadow-lg">
          <span className="text-lg font-bold text-foreground">Aa</span>
          <span className="mt-1 text-[10px] text-gray-muted">Type</span>
        </div>
      </div>

      <div className="hero-float hero-float-delay-3 absolute bottom-12 right-6 z-10 w-28 rotate-[4deg]">
        <div className="rounded-xl border border-white/10 bg-elevated p-3 shadow-lg">
          <MiniChart />
          <div className="mt-2 space-y-1.5">
            <div className="h-1.5 w-full rounded-full bg-border">
              <div className="h-full w-3/4 rounded-full bg-accent/80" />
            </div>
            <div className="h-1.5 w-full rounded-full bg-border">
              <div className="h-full w-1/2 rounded-full bg-accent/50" />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-float hero-float-delay-1 absolute right-10 top-40 z-20 hidden sm:block">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-elevated px-3 py-2 shadow-lg">
          <span className="text-[10px] text-gray-muted">On</span>
          <span className="relative inline-flex h-5 w-9 items-center rounded-full bg-accent">
            <span className="absolute right-0.5 h-4 w-4 rounded-full bg-black" />
          </span>
        </div>
      </div>
    </div>
  )
}
