import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Moon, Sun, Send } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen for scroll events to change navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-vibranium-900/55 backdrop-blur-sm border-b border-gray-200/20 dark:border-white/10 shadow-lg' 
          : 'bg-transparent border-transparent'
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <Terminal className="text-kinetic-500 w-6 h-6" />
        <span className="font-mono font-bold text-xl tracking-tighter text-gray-900 dark:text-white">
          VARUN<span className="text-kinetic-500">.</span>DEV
        </span>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex gap-2 font-sans font-medium text-sm text-white">
        <a href="#about" className="px-5 py-2 rounded-full bg-kinetic-500 hover:bg-kinetic-700 dark:hover:bg-kinetic-600 transition-all">About</a>
        <a href="#projects" className="px-5 py-2 rounded-full bg-kinetic-500 hover:bg-kinetic-700 dark:hover:bg-kinetic-600 transition-all">Projects</a>
        <a href="#experience" className="px-5 py-2 rounded-full bg-kinetic-500 hover:bg-kinetic-700 dark:hover:bg-kinetic-600 transition-all">Experience</a>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full border border-black/50 dark:border-white/80 text-gray-600 dark:text-gray-400 hover:bg-gray-200/60 dark:hover:bg-white/10 transition-colors"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        
        {/* Contact Button */}
        <button className="hidden md:flex items-center justify-center gap-2 h-10 px-6 bg-kinetic-500 text-white dark:text-white hover:bg-kinetic-700 dark:hover:bg-kinetic-600 transition-colors relative overflow-hidden group rounded-full shadow-lg shadow-kinetic-500/30">
          <span className="relative z-10 flex items-center gap-2">
            Contact <Send className="w-4 h-4" />
          </span>
          <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-white opacity-30 group-hover:animate-shine" />
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;