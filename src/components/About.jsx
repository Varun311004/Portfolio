import aboutPhoto from '../assets/images/about-photo-placeholder.png'
import Reveal from './Reveal'
import SkillsGrid from './SkillsGrid'
import RecognitionStrip from './RecognitionStrip'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="section-head about-heading">
          <h2 className="section-title">About</h2>
        </div>

        <div className="about-content">
          <div className="about-intro">
            <Reveal as="div" className="about-body">
              <p>
                I'm a <span className="hero-accent">Computer Engineering graduate</span> who spent the last year building production
                software instead of just studying it — an <span className="hero-accent">IoT mobility app with Bluetooth</span> and
                role-based access, a <span className="hero-accent">multi-tenant AI platform</span> for institutes, and a handful of solo
                projects built to <span className="hero-accent">solve problems</span> I actually ran into.
              </p>
              <p>
                I like the full stack: <span className="hero-accent">Flutter and React on the front, Node.js and Flask on the
                back,</span> and increasingly the AI layer in between — <span className="hero-accent">retrieval pipelines, embeddings, </span>
                and the occasional <span className="hero-accent">speech-to-text model.</span> Outside of code, I've competed in a few 
                <span className="hero-accent"> hackathons</span> and hold a silver medal in <span className="hero-accent">Roller Skating.</span>
              </p>
            </Reveal>

            <figure className="about-photo-block">
              {/* Swap this import with your real photo at src/assets/images/about-photo-placeholder.jpg. */}
              <img className="about-photo" src={aboutPhoto} alt="About photo placeholder" />
            </figure>
          </div>

          <Reveal as="div" className="about-skills-wrap">
            <SkillsGrid />
          </Reveal>

          <div className="about-lower">
            <Reveal as="div" className="education-block">
              <div className="about-subhead">
                <h3>Education</h3>
                <span>2020 — 2026</span>
              </div>
              <div className="education">
                <div className="education-item">
                  <span className="education-degree">B.E., Computer Engineering</span>
                  <span className="education-school">New Horizon Institute of Technology and Management, Thane</span>
                  <span className="education-meta">2023 – 2026 · CGPA 7.39/10</span>
                </div>
                <div className="education-item">
                  <span className="education-degree">Diploma, Computer Engineering</span>
                  <span className="education-school">Vidya Prasarak Mandal's Polytechnic, Thane</span>
                  <span className="education-meta">2020 – 2023 · 80.06%</span>
                </div>
              </div>
            </Reveal>

            <Reveal as="div" className="recognition-wrap">
              <RecognitionStrip />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
