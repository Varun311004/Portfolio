import { motion } from 'framer-motion';
import { Terminal, Moon, Sun } from 'lucide-react'; 
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-gray-100/80 dark:bg-vibranium-900/80 backdrop-blur-md border-b border-gray-300 dark:border-white/5 transition-colors duration-300"
    >
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <Terminal className="text-kinetic-500 w-6 h-6" />
        <span className="font-mono font-bold text-xl tracking-tighter text-gray-900 dark:text-white">
          VARUN<span className="text-kinetic-500">.</span>DEV
        </span>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex gap-8 font-mono text-sm text-gray-600 dark:text-gray-400">
        <a href="#about" className="hover:text-kinetic-500 dark:hover:text-kinetic-400 transition-colors">// ABOUT</a>
        <a href="#projects" className="hover:text-kinetic-500 dark:hover:text-kinetic-400 transition-colors">// PROJECTS</a>
        <a href="#experience" className="hover:text-kinetic-500 dark:hover:text-kinetic-400 transition-colors">// EXPERIENCE</a>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleTheme}
          className="p-2 text-gray-600 dark:text-gray-400 hover:text-kinetic-500 dark:hover:text-kinetic-400 transition-colors"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <button className="hidden md:block px-5 py-2 bg-kinetic-500/10 text-kinetic-500 border border-kinetic-500/30 rounded-sm font-mono text-sm hover:bg-kinetic-500/20 hover:border-kinetic-500/60 transition-all">
          INIT_CONTACT
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;