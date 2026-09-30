import { useState } from 'react'
import Reveal from './Reveal'
import { ExternalLinkIcon, GithubIcon } from './Icons'
import ElevateImage from '../assets/images/Elevate.png'
import CortexaImage from '../assets/images/Cortexa.png'
import FindEasyImage from '../assets/images/FindEasy.png'
import DigiResultImage from '../assets/images/DigiResult.png'

// Project screenshots live in src/assets/images. Add an image import + image property for each project when its real preview is ready.
const projects = [
  {
    title: 'Elevate',
    when: 'Nov 2025 – Apr 2026 · Solo',
    desc: 'An adaptive STEM learning platform that personalizes content using emotion recognition, learning analytics, and AI-assisted tutoring. Independently built the Flask/PostgreSQL backend and the adaptive-learning logic for a three-person team.',
    tags: ['Python', 'Flask', 'PostgreSQL', 'FAISS / ChromaDB', 'MediaPipe', 'TensorFlow.js'],
    github: 'https://github.com/Varun311004/Elevate',
    demo: 'https://elevate-frontend-9dhh.onrender.com/',
    image: ElevateImage,
    art: 'elevate',
  },
  {
    title: 'Cortexa',
    when: 'Aug 2025 – Apr 2026 · 3-person team',
    desc: 'A multi-tenant AI platform that lets institutes manage learning resources while students get a RAG-powered assistant for Q&A, MCQ generation, and speech-to-text transcription. Led the Flutter app — 20+ screens on BLoC — and the retrieval pipeline.',
    tags: ['Flutter', 'React', 'Node.js', 'LangChain', 'MongoDB', 'Cloudflare R2'],
    github: 'https://github.com/vednav9/cortexa',
    demo: 'https://cortexa-ai-project.vercel.app/',
    image: CortexaImage,
    art: 'cortexa',
  },
  {
    title: 'FindEasy (App)',
    when: 'Feb 2025 – Apr 2025 · Solo',
    desc: 'A mobile app connecting customers with verified local service providers — location-based discovery, booking management, and real-time notifications, built end to end on Firebase.',
    tags: ['Flutter', 'Firebase', 'Google Maps API', 'BLoC'],
    github: 'https://github.com/Varun311004/FindEasy',
    demo: 'https://github.com/Varun311004/FindEasy/releases/latest/download/FindEasy-v1.0.0.apk',
    demoLabel: 'Download Apk',
    image: FindEasyImage,
    art: 'findeasy',
  },
  {
    title: 'DigiResult',
    when: 'Aug 2024 – Oct 2024 · Solo',
    desc: 'A student result management system with OTP-verified email authentication, replacing manual result distribution with a centralized portal.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'SMTP'],
    github: 'https://github.com/Varun311004/DigiResult',
    demo: 'https://digiresult.byethost16.com/',
    image: DigiResultImage,
    art: 'digresult',
  },
  {
    title: 'GeoLogr (App)',
    when: 'Dec 2022 – Apr 2023 · 4-person team',
    desc: 'A geofence-based staff attendance system for Android — location validation plus OpenCV facial recognition, built to cut down on attendance fraud.',
    tags: ['Java', 'Android Studio', 'Geofencing API', 'OpenCV', 'Firebase'],
    github: '',
    demo: '',
    art: 'geologr',
  },
]

function ProjectPreview({ project }) {
  const artMap = {
    elevate: (
      <svg viewBox="0 0 760 430" role="presentation">
        <rect x="54" y="58" width="652" height="314" rx="14" />
        <rect x="84" y="88" width="164" height="254" rx="9" />
        <rect x="274" y="88" width="402" height="68" rx="9" />
        <rect x="274" y="176" width="190" height="166" rx="9" />
        <rect x="486" y="176" width="190" height="166" rx="9" />
        <circle cx="164" cy="130" r="35" />
        <path d="M130 244h68M130 272h86M130 300h54" />
        <path d="M302 126h186M302 204h118M302 234h92M302 264h138" />
        <path d="M514 296c26-38 43-12 64-44 18-28 31-14 53-40" />
      </svg>
    ),
    cortexa: (
      <svg viewBox="0 0 760 430" role="presentation">
        <rect x="70" y="52" width="620" height="326" rx="14" />
        <rect x="104" y="92" width="150" height="250" rx="8" />
        <rect x="282" y="92" width="374" height="78" rx="8" />
        <rect x="282" y="190" width="178" height="152" rx="8" />
        <rect x="478" y="190" width="178" height="152" rx="8" />
        <path d="M135 136h82M135 164h64M135 192h74M135 220h51" />
        <path d="M312 130h126M312 224h88M312 252h112M312 280h98" />
        <circle cx="574" cy="252" r="44" />
        <path d="M550 252h48M574 228v48" />
      </svg>
    ),
    findeasy: (
      <svg viewBox="0 0 760 430" role="presentation">
        <rect x="206" y="38" width="348" height="354" rx="28" />
        <rect x="236" y="78" width="288" height="272" rx="14" />
        <circle cx="380" cy="190" r="66" />
        <circle cx="380" cy="190" r="11" />
        <path d="M380 124c-37 0-66 29-66 66 0 52 66 106 66 106s66-54 66-106c0-37-29-66-66-66Z" />
        <rect x="266" y="280" width="120" height="18" rx="9" />
        <rect x="398" y="280" width="86" height="18" rx="9" />
      </svg>
    ),
    digresult: (
      <svg viewBox="0 0 760 430" role="presentation">
        <rect x="76" y="62" width="608" height="306" rx="14" />
        <rect x="108" y="104" width="544" height="54" rx="8" />
        <rect x="108" y="182" width="172" height="148" rx="8" />
        <rect x="296" y="182" width="172" height="148" rx="8" />
        <rect x="484" y="182" width="168" height="148" rx="8" />
        <path d="M132 132h214" />
        <path d="M132 218h118M132 248h84M320 218h112M320 248h78M506 218h108M506 248h74" />
        <circle cx="148" cy="286" r="15" />
        <circle cx="336" cy="286" r="15" />
        <circle cx="520" cy="286" r="15" />
      </svg>
    ),
    geologr: (
      <svg viewBox="0 0 760 430" role="presentation">
        <rect x="90" y="70" width="580" height="290" rx="14" />
        <path d="M150 292c58-84 122-124 192-118 86 8 105-72 196-38 42 16 68 42 92 82" />
        <circle cx="342" cy="172" r="10" />
        <circle cx="566" cy="174" r="10" />
        <circle cx="176" cy="302" r="10" />
        <path d="M150 126h136M150 156h94M150 186h112" />
        <rect x="426" y="250" width="164" height="54" rx="8" />
        <path d="M452 277h112" />
      </svg>
    ),
  }

  return (
    <div className={`project-preview project-preview-${project.art}`}>
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          className="project-preview-image"
        />
      ) : (
        artMap[project.art]
      )}
    </div>
  )
}

function ProjectAction({ href, label, icon }) {
  return (
    <a
      className="project-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => event.stopPropagation()}
    >
      {icon}
      <span>{label}</span>
    </a>
  )
}

export function ProjectRow({ project }) {
  const [isOpen, setIsOpen] = useState(false)

  function toggleDetails() {
    setIsOpen((open) => !open)
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggleDetails()
    }
  }

  return (
    <li
      className={`project-card${isOpen ? ' is-open' : ''}`}
      tabIndex="0"
      aria-expanded={isOpen}
      onClick={toggleDetails}
      onKeyDown={handleKeyDown}
    >
      <ProjectPreview project={project} />
      <div className="project-card-titlebar">
        <div>
          <h3 className="project-title">{project.title}</h3>
          <span className="project-when">{project.when}</span>
        </div>
      </div>

      <div className="project-details">
        <div className="project-details-inner">
          <div className="project-details-heading">
            <h3>{project.title}</h3>
            <span>{project.when}</span>
          </div>
          <p className="project-desc">{project.desc}</p>
          <div className="tag-row">
            {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
          </div>
          <div className="project-actions" aria-label={`${project.title} links`}>
            {project.demo && (
              <ProjectAction
                href={project.demo}
                label={project.demoLabel || "Demo"}
                icon={<ExternalLinkIcon />}
              />
            )}
          
            {project.github && (
              <ProjectAction
                href={project.github}
                label="GitHub"
                icon={<GithubIcon />}
              />
            )}
          </div>
        </div>
      </div>
    </li>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section projects projects-with-art">
      <div className="projects-line-art" aria-hidden="true">
        <svg viewBox="0 0 720 720" role="presentation">
          <path d="M30 120H410V40H690" />
          <path d="M120 300H620V220" />
          <path d="M40 520H330V660H700" />
          <rect x="410" y="120" width="210" height="80" rx="4" />
          <rect x="90" y="360" width="190" height="80" rx="4" />
          <rect x="460" y="500" width="150" height="80" rx="4" />
        </svg>
      </div>

      <div className="container">
        <div className="section-head projects-head">
          <div>
            <h2 className="section-title">Projects</h2>
          </div>
          <p className="section-lede">Five builds, from a solo weekend project to a three-person AI platform.</p>
        </div>

        <Reveal as="ul" className="project-list project-card-grid">
          {projects.map((project) => <ProjectRow key={project.title} project={project} />)}
        </Reveal>
      </div>
    </section>
  )
}
