"use client"

import { useEffect, useState } from "react"
import { Loader } from "./Loader"
import { SmoothScroll } from "./SmoothScroll"

type Props = {
  children: React.ReactNode
}

export function ClientLoaderShell({ children }: Props) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])

  return (
    <SmoothScroll>
      {children}
      {!ready && (
        <div className="fixed inset-y-0 left-0 w-full z-[60] flex items-center justify-center bg-black overflow-hidden">
          <Loader />
        </div>
      )}
    </SmoothScroll>
  )
}
