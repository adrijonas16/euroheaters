import type { MouseEvent } from 'react'

export function useSmoothScroll() {
  const scrollTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return { scrollTo }
}
