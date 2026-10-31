import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function normalizeInternalHref(href?: string) {
  if (!href?.startsWith("/") || href.startsWith("//")) {
    return href
  }

  return href.replace(/^[^?#]*/, (path) => path.toLowerCase())
}
