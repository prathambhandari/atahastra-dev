export default function PageFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-1 w-24 overflow-hidden rounded-full bg-border">
        <div className="page-load-bar h-full w-full rounded-full bg-foreground" />
      </div>
    </div>
  )
}
