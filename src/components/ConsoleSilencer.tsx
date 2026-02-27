"use client"

import { useEffect } from "react"

const noop = () => {}
type ConsoleMethod = "log" | "debug" | "info" | "warn" | "error" | "trace" | "table" | "group" | "groupCollapsed" | "groupEnd"

export function ConsoleSilencer() {
  useEffect(() => {
    const methods: ConsoleMethod[] = [
      "log",
      "debug",
      "info",
      "warn",
      "error",
      "trace",
      "table",
      "group",
      "groupCollapsed",
      "groupEnd",
    ]

    for (const method of methods) {
      ;(console as Record<ConsoleMethod, (...args: unknown[]) => void>)[method] = noop
    }
  }, [])

  return null
}
