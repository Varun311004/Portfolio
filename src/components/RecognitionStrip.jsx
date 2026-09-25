const recognition = [
  ['Winner', 'Vibe-a-Thon coding competition'],
  ['5th place', 'Smart India Hackathon, internal round'],
  ['Published', 'IJRPR — "CortexaX: An AI-Powered Educational Platform"'],
  ['Participant', 'UIDAI Hackathon & Google Agentic AI Day'],
]

export default function RecognitionStrip() {
  return (
    <div className="recognition">
      <div className="about-subhead recognition-head">
        <h3>Recognition</h3>
        <span>A few highlights</span>
      </div>
      <ul className="recognition-list">
        {recognition.map(([tag, text]) => (
          <li key={`${tag}-${text}`}>
            <span className="recognition-tag">{tag}</span>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
