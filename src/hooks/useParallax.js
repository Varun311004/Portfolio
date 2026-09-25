import { useEffect, useRef } from 'react'

export function useParallax(amount = 5) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined

    let frameId = 0

    const update = () => {
      if (frameId) return
      frameId = window.requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect()
        const viewportCenter = window.innerHeight / 2
        const distance = (rect.top + rect.height / 2 - viewportCenter) / Math.max(window.innerHeight, 1)
        const y = Math.max(-amount, Math.min(amount, -distance * amount))
        element.style.setProperty('--parallax-y', `${y.toFixed(2)}px`)
        frameId = 0
      })
    }

    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    update()

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      if (frameId) window.cancelAnimationFrame(frameId)
    }
  }, [amount])

  return ref
}
