import { useEffect } from 'react'

export function useNavbarScroll() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar')
      navbar?.classList.toggle('scrolled', window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}
