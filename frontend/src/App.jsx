import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App;