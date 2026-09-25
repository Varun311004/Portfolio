import { useEffect, useState } from 'react'
import { useScrollUi } from '../hooks/useScrollUi'
import { useActiveSection } from '../hooks/useActiveSection'
import { MoonIcon, SunIcon } from './Icons'

const links = [
  ['home', 'Home'],
  ['about', 'About'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['contact', 'Contact'],
]

const sectionIds = links.map(([id]) => id)

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // Fall back to the system preference when storage is unavailable.
  }

  return 'dark'
}

export default function Navbar() {
  const { isScrolled, progress } = useScrollUi()
  const activeId = useActiveSection(sectionIds)
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('portfolio-theme', theme)
    } catch {
      // Theme still works for the current session if storage is unavailable.
    }
  }, [theme])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  function toggleTheme() {
    setTheme((current) => current === 'dark' ? 'light' : 'dark')
  }

  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" style={{ width: `${progress}%` }} />

      <header className={`nav${isScrolled ? ' is-scrolled' : ''}`} id="siteNav">
        <div className="nav-inner">
          <a href="#home" className="nav-logo" aria-label="Home" onClick={() => setIsOpen(false)}>
            VJ<span className="nav-logo-dot">.</span>
          </a>

          <nav className={`nav-links${isOpen ? ' is-open' : ''}`} id="navLinks" aria-label="Primary navigation">
            {links.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className={`nav-link${activeId === id ? ' is-active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            className={`theme-toggle theme-toggle-${theme}`}
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${nextTheme} theme`}
            title={`Switch to ${nextTheme} theme`}
          >
            <span className="theme-toggle-icon" aria-hidden="true">
              <span className={`theme-icon theme-icon-sun${theme === 'light' ? ' is-active' : ''}`}>
                <SunIcon />
              </span>
              <span className={`theme-icon theme-icon-moon${theme === 'dark' ? ' is-active' : ''}`}>
                <MoonIcon />
              </span>
            </span>
          </button>

          <button
            className={`nav-toggle${isOpen ? ' is-open' : ''}`}
            type="button"
            aria-expanded={isOpen}
            aria-controls="navLinks"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>
    </>
  )
}
