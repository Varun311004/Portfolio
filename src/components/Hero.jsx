import heroPhoto from '../assets/images/hero-photo-placeholder.jpg'
import { useParallax } from '../hooks/useParallax'

const stickers = [
  { label: 'Flutter', className: 'sticker-one', amount: 4 },
  { label: 'RAG', className: 'sticker-two', amount: 5 },
  { label: 'BLE', className: 'sticker-three', amount: 4 },
  { label: 'Python', className: 'sticker-four', amount: 5 },
]

function Sticker({ label, className, amount }) {
  const ref = useParallax(amount)
  return (
    <span ref={ref} className={`sticker ${className}`}>
      {label}
    </span>
  )
}

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="section hero hero-with-art">
      <div className="hero-line-art" aria-hidden="true">
        <svg viewBox="0 0 900 620" role="presentation">
          <g>
            <rect x="60" y="70" width="330" height="110" rx="4" />
            <rect x="470" y="235" width="330" height="110" rx="4" />
            <rect x="130" y="410" width="330" height="110" rx="4" />
            <path d="M390 125 C510 125, 510 235, 520 235" />
            <path d="M635 345 C635 390, 465 390, 455 410" />
          </g>
        </svg>
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow" data-hero-reveal>Computer Engineering Graduate · Mumbai, India</p>
          <h1 className="hero-title">
            <span className="hero-line" data-hero-reveal>I build software</span>
            <span className="hero-line" data-hero-reveal>that ships<span className="hero-accent">,</span> not just demos.</span>
          </h1>
          <p className="hero-sub" data-hero-reveal>
            Flutter apps with Bluetooth and real-time sync, RAG pipelines that actually answer
            questions, and backend APIs that hold up under real users. I like the full stack —
            mobile, web, and increasingly the AI layer in between.
          </p>
          <div className="hero-actions" data-hero-reveal>
            <a href="https://drive.google.com/file/d/1I18iFF0C6GdbzhhciXVkytH5li2--rZQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Download resume
            </a>
            <a href="#contact" className="btn btn-ghost">Get in touch</a>
          </div>
          <p className="hero-status" data-hero-reveal>
            <span className="status-dot" />
            Open to full-stack, mobile, and applied-AI roles
          </p>
        </div>

        <div className="hero-visual" aria-label="Hero portrait placeholder">
          {/* <div className="hero-stack-detail" aria-hidden="true">
            <svg viewBox="0 0 360 420" className="stack-graphic" role="presentation">
              <g className="stack-layer">
                <rect x="24" y="40" width="180" height="64" rx="4" />
                <text x="44" y="78">Mobile · Flutter</text>
              </g>
              <g className="stack-layer">
                <rect x="70" y="150" width="200" height="64" rx="4" />
                <text x="90" y="188">Web · React / Node</text>
              </g>
              <g className="stack-layer">
                <rect x="30" y="260" width="220" height="64" rx="4" />
                <text x="50" y="298">AI · RAG / LangChain</text>
              </g>
              <path className="stack-path" d="M114 104 C114 130, 160 130, 160 150" />
              <path className="stack-path" d="M170 214 C170 236, 140 236, 140 260" />
              <circle className="stack-pulse stack-pulse-a" cx="114" cy="104" r="4" />
              <circle className="stack-pulse stack-pulse-b" cx="170" cy="214" r="4" />
            </svg>
          </div> */}

          <div className="hero-photo-wrap" data-hero-reveal>
            {/*
              Swap this import with your real portrait at:
              src/assets/images/hero-photo-placeholder.jpg
              Recommended: portrait 4:5, at least 1000×1250px.
            */}
            <img className="hero-photo" src={heroPhoto} alt="Hero portrait placeholder" />
          </div>

          <div className="sticker-layer" aria-hidden="true">
            {stickers.map((sticker) => <Sticker key={sticker.label} {...sticker} />)}
          </div>
        </div>
      </div>

      <button className="scroll-cue" type="button" aria-label="Scroll to next section" onClick={scrollToAbout}>
        <span />
      </button>
    </section>
  )
}
