import Reveal from './Reveal'

export default function QuoteBand({ text, alternate = false }) {
  return (
    <Reveal as="section" className={`quote-band${alternate ? ' quote-band-alt' : ''}`} aria-label="Quote">
      <p className="quote-text">“ {text} ”</p>
    </Reveal>
  )
}
