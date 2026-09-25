const skillGroups = [
  {
    label: 'Languages',
    skills: [
      ['Dart', '#54C5F8', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg'],
      ['Java', '#E76F00', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg'],
      ['Python', '#FFD43B', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'],
      ['JavaScript', '#F7DF1E', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'],
      ['PHP', '#777BB4', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg'],
      ['SQL', '#4EA1D3', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'],
      ['HTML5', '#E34F26', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'],
      ['CSS3', '#1572B6', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'],
    ],
  },
  {
    label: 'Frontend',
    skills: [
      ['Flutter', '#54C5F8', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg'],
      ['React', '#61DAFB', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'],
      ['Bootstrap', '#7952B3', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg'],
      ['Responsive Web Design', '#A7B0C0', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'],
    ],
  },
  {
    label: 'Backend',
    skills: [
      ['Node.js', '#83CD29', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'],
      ['Flask', '#DCE3E8', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg'],
      ['REST APIs', '#8EC5FF', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg'],
      ['JWT Authentication', '#FFB703', null],
    ],
  },
  {
    label: 'AI / ML',
    skills: [
      ['LangChain', '#66C2A5', 'https://cdn.simpleicons.org/langchain'],
      ['RAG', '#6FD8C5', 'https://cdn.simpleicons.org/huggingface'],
      ['Whisper Tiny', '#F4A261', 'https://cdn.simpleicons.org/huggingface'],
      ['TinyLlama', '#C77DFF', 'https://cdn.simpleicons.org/huggingface'],
      ['Sentence Transformers', '#8AB4F8', 'https://cdn.simpleicons.org/huggingface'],
      ['TensorFlow.js', '#FF9F1C', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg'],
    ],
  },
  {
    label: 'Data',
    skills: [
      ['MongoDB', '#47A248', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg'],
      ['PostgreSQL', '#4169E1', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'],
      ['Firebase', '#FFCA28', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg'],
      ['SQLite', '#0F80CC', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg'],
      ['Cloudflare R2', '#F38020', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg'],
    ],
  },
  {
    label: 'Tools',
    skills: [
      ['Git', '#F05032', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'],
      ['GitHub', '#ECEAE3', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'],
      ['VS Code', '#007ACC', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg'],
      ['Android Studio', '#3DDC84', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg'],
      ['Postman', '#FF6C37', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg'],
      ['Vercel', '#ECEAE3', 'https://cdn.simpleicons.org/vercel'],
      ['Render', '#46E3B7', 'https://cdn.simpleicons.org/render'],
    ],
  },
]

function SkillLogo({ name, src }) {
  if (!src) return null

  return (
    <span className="skill-logo-wrap" aria-hidden="true">
      <img
        className={`skill-logo${name === 'GitHub' ? ' skill-logo-github' : ''}`}
        src={src}
        alt=""
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.display = 'none'
        }}
      />
      <span className="skill-logo-fallback">&lt;/&gt;</span>
    </span>
  )
}

export default function SkillsGrid() {
  return (
    <div className="skills-block">
      <div className="about-subhead">
        <h3>Skills</h3>
        <span>Tools I use to build, ship and iterate.</span>
      </div>

      <div className="skills-list">
        {skillGroups.map((group) => (
          <div className="skills-row" key={group.label}>
            <dt>{group.label}</dt>
            <dd className="skill-tags">
              {group.skills.map(([name, color, logo]) => (
                <span
                  className="skill-tag"
                  key={name}
                  style={{ '--skill-color': color, '--skill-index': group.skills.findIndex(([skill]) => skill === name) }}
                  title={name}
                >
                  <SkillLogo name={name} src={logo} />
                  <span>{name}</span>
                </span>
              ))}
            </dd>
          </div>
        ))}
      </div>
    </div>
  )
}
