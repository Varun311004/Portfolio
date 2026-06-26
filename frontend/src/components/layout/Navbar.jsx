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
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/70 dark:bg-vibranium-900/70 backdrop-blur-lg border-b border-gray-200/50 dark:border-white/5 shadow-sm' 
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
      <div className="hidden md:flex gap-2 font-sans font-medium text-sm text-gray-600 dark:text-gray-400">
        <a href="#about" className="px-5 py-2 rounded-full hover:bg-gray-200/60 hover:text-kinetic-500 dark:hover:bg-white/10 active:bg-kinetic-500/20 active:text-kinetic-600 dark:active:text-kinetic-400 transition-all">About</a>
        <a href="#projects" className="px-5 py-2 rounded-full hover:bg-gray-200/60 hover:text-kinetic-500 dark:hover:bg-white/10 active:bg-kinetic-500/20 active:text-kinetic-600 dark:active:text-kinetic-400 transition-all">Projects</a>
        <a href="#experience" className="px-5 py-2 rounded-full hover:bg-gray-200/60 hover:text-kinetic-500 dark:hover:bg-white/10 active:bg-kinetic-500/20 active:text-kinetic-600 dark:active:text-kinetic-400 transition-all">Experience</a>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200/60 dark:hover:bg-white/10 transition-colors"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        
        {/* Contact Button */}
        <button className="hidden md:flex items-center justify-center gap-2 h-10 px-6 bg-kinetic-500/10 text-kinetic-600 dark:text-kinetic-400 border border-kinetic-500/30 rounded-full font-sans font-medium text-sm hover:bg-kinetic-500/20 hover:border-kinetic-500/60 transition-all relative overflow-hidden group">
          <span className="relative z-10 flex items-center gap-2">
            Contact <Send className="w-4 h-4" />
          </span>
          <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-kinetic-500 opacity-20 group-hover:animate-shine" />
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;