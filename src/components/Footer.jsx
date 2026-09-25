import { useEffect, useState } from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {year} Varun Joshi.</span>
        <span className="footer-separator" aria-hidden="true">|</span>
        <span className="footer-built">Designed &amp; built with React, Vite and CSS.</span>
      </div>

      <a
        href="#home"
        className={`back-to-top${showBackToTop ? ' is-visible' : ''}`}
        aria-label="Back to top"
        title="Back to top"
        tabIndex={showBackToTop ? 0 : -1}
      >
        <span aria-hidden="true">↑</span>
      </a>
    </footer>
  )
}
