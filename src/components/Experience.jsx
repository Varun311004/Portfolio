import Reveal from './Reveal'

const experience = [
  {
    when: 'Apr 2025 – Sep 2025',
    role: 'Flutter Developer Intern',
    org: 'Manous Innovation Pvt. Ltd. | Pune, Maharashtra',
    points: [
      'Built and maintained 10–12 production screens for an IoT smart-mobility app — onboarding, auth, role-based access, and Bluetooth Low Energy connectivity.',
      'Integrated REST APIs with BLoC and Provider for secure, real-time communication with a Spring Boot and PostgreSQL backend.',
      'Built the authentication module for a technical hiring assessment — it was later shipped into the production app.',
    ],
    tags: ['Flutter', 'BLoC', 'REST APIs', 'BLE', 'Postman'],
  },
  {
    when: 'Jul 2022 – Aug 2022',
    role: 'Web Developer Intern',
    org: 'LazyTech InfoTech Solutions | Dombivli, Maharashtra',
    points: [
      'Built responsive interfaces for e-commerce sites with HTML, CSS, JavaScript, and Bootstrap.',
      'Helped integrate MySQL for dynamic content on a live client project.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'MySQL'],
  },
]

export function TimelineItem({ item }) {
  return (
    <li className="timeline-item">
      <div className="timeline-when">{item.when}</div>
      <div className="timeline-body">
        <h3 className="timeline-role">{item.role}</h3>
        <p className="timeline-org">{item.org}</p>
        <ul className="timeline-points">
          {item.points.map((point) => <li key={point}>{point}</li>)}
        </ul>
        <div className="tag-row">
          {item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
        </div>
      </div>
    </li>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-head experience-head">
          <div>
            <h2 className="section-title">Experience</h2>
          </div>
          <p className="section-lede">Production work across mobile development, APIs, Bluetooth connectivity and web interfaces.</p>
        </div>

        <Reveal as="ol" className="timeline">
          {experience.map((item) => (
            <TimelineItem key={`${item.when}-${item.role}`} item={item} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
