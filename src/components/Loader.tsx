import React from 'react'

type LoaderProps = {
  fullscreen?: boolean
}

export function Loader({ fullscreen = false }: LoaderProps) {
  return (
    <div
      className={
        fullscreen
          ? "fixed inset-0 z-50 flex items-center justify-center bg-black"
          : "relative flex h-24 w-full items-center justify-center bg-black"
      }
      role="status"
      aria-label="Loading"
    >
      <div className="relative h-20 w-20 flex items-center justify-center">
        <span className="absolute inset-0 bg-neutral-500/70 mg-loader-ring" style={{ animationDelay: "-0.4s" }} />
        <span className="absolute inset-0 bg-neutral-500/50 mg-loader-ring" style={{ animationDelay: "-0.8s" }} />
        <span className="absolute inset-0 bg-neutral-500/30 mg-loader-ring" style={{ animationDelay: "-1.2s" }} />
        <span className="absolute h-3.5 w-3.5 rounded-full bg-neutral-200" />
      </div>
    </div>
  )
}
