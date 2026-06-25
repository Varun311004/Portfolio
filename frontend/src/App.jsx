import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      
      {/* Temporary Main Content to test our fonts and colors */}
      <main className="pt-32 flex flex-col items-center justify-center h-[80vh]">
        <h1 className="text-5xl font-mono font-bold text-gray-900 dark:text-white mb-4">
          SYSTEM <span className="text-kinetic-500">INITIALIZED</span>
        </h1>
        <p className="text-gray-400 font-sans max-w-lg text-center">
          Vibranium UI active. Tailwind CSS is now successfully compiling utility classes.
        </p>
      </main>
    </div>
  )
}

export default App;