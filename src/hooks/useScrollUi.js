import { useEffect, useState } from 'react'

export function useScrollUi() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frameId = 0

    const onScroll = () => {
      if (frameId) return
      frameId = window.requestAnimationFrame(() => {
        const scrollY = window.scrollY || window.pageYOffset
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0
        setIsScrolled(scrollY > 8)
        setProgress(pct)
        frameId = 0
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frameId) window.cancelAnimationFrame(frameId)
    }
  }, [])

  return { isScrolled, progress }
}
