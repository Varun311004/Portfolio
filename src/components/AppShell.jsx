import Navbar from './Navbar'

export default function AppShell({ children }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      {children}
    </>
  )
}
