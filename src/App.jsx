import AppShell from './components/AppShell'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Projects from './components/Projects'
import QuoteBand from './components/QuoteBand'

export default function App() {
  return (
    <AppShell>
      <main id="main">
        <Hero />

        <QuoteBand
          text="The projects I'm most proud of usually begin with something I want to figure out, not something I want to showcase. Most of what's on this page started the same way — a specific problem, not a portfolio checklist."
        />

        <About />

        <QuoteBand
          alternate
          text="Two internships taught me the difference between code that works on my machine and code that ships to a team's production app."
        />

        <Experience />

        <QuoteBand
        text="Ideas are easy to imagine. Building them, breaking them, and making them work is where the real learning happens."
        />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </AppShell>
  )
}
