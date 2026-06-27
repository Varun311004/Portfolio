import { motion } from 'framer-motion';
import { Download, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-8 overflow-hidden bg-transparent">
      
      {/* Background Glows - Fixed for vibrant, actual colors in both modes */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-kinetic-500/30 dark:bg-kinetic-500/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-400/30 dark:bg-hologram-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT COLUMN: Typography & Action */}
        <div className="flex flex-col items-start text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-md mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-kinetic-500 animate-pulse" />
            <span className="text-sm font-sans font-bold text-gray-900 dark:text-gray-300">
              Varun Kiran Joshi
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight"
          >
            Architecting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-kinetic-500 to-hologram-500">
              Intelligent Systems.
            </span>
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl font-sans font-bold text-gray-800 dark:text-gray-400 mb-6"
          >
            Full-Stack AI Engineer
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-700 dark:text-gray-400 max-w-xl mb-10 font-sans leading-relaxed font-medium"
          >
            Bridging cross-platform development with cognitive AI. I specialize in scaling applications from Flutter mobile ecosystems to complex backend pipelines using Retrieval-Augmented Generation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 font-sans font-semibold w-full sm:w-auto"
          >
            {/* Primary Action Button - Forced dark purple bg and white text in light mode */}
            <button className="h-14 w-full sm:w-[220px] flex items-center justify-center gap-2 text-white bg-kinetic-500 dark:text-white hover:bg-kinetic-700 dark:hover:bg-kinetic-600 transition-colors relative overflow-hidden group rounded-full shadow-lg shadow-kinetic-500/30">
              <span className="relative z-10 flex items-center gap-2">
                Explore Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-white opacity-30 group-hover:animate-shine" />
            </button>
            
            {/* Secondary Action Button - Forced dark border/text in light mode */}
            <a 
              href="https://drive.google.com/file/d/1YwQ2rVrPTSiihZEt82FrzGFxwOdtWjBE/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-14 w-full sm:w-[220px] flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 dark:border-white/20 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-black/50 dark:hover:border-white transition-all relative overflow-hidden group rounded-full"
            >
              <span className="relative z-10 flex items-center gap-2">
                Resume <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              </span>
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gray-900 dark:bg-white opacity-20 group-hover:animate-shine" />
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Glassmorphism Tech Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:flex relative w-full h-[500px] items-center justify-center"
        >
          {/* Floating Glass Panel */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="w-full max-w-md p-6 rounded-2xl bg-white/90 dark:bg-vibranium-900/60 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-2xl relative z-20"
          >
            <div className="flex items-center justify-between mb-6 border-b border-gray-200 dark:border-white/10 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <Sparkles className="w-5 h-5 text-kinetic-500" />
            </div>
            
            <div className="space-y-4 font-mono text-sm font-semibold dark:font-normal">
              <div className="flex gap-4 items-center">
                <span className="text-gray-800 dark:text-hologram-500">~</span>
                <span className="text-gray-800 dark:text-gray-300">init cognitive_pipeline</span>
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-gray-400">{`>`}</span>
                <span className="text-kinetic-400">Loading LangChain...</span>
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-gray-400">{`>`}</span>
                <span className="text-green-600 dark:text-green-400">Flutter UI Synced [100%]</span>
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-gray-400">{`>`}</span>
                <span className="text-gray-800 dark:text-gray-300">Connecting MongoDB Atlas...</span>
              </div>
              <div className="mt-4 p-4 rounded-lg bg-gray-100 dark:bg-black/40 border border-gray-200 dark:border-white/5">
                <span className="text-kinetic-500 font-bold">SUCCESS:</span> System ready for deployment.
              </div>
            </div>
          </motion.div>

          {/* Dynamic Floating Abstract Shapes (Non-linear, multi-directional physics) */}
          <motion.div 
            animate={{ 
              x: [0, 120, -80, -150, 90, 150, 0], 
              y: [0, -150, 90, 50, -120, 80, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 0.9, 1.15, 0.95, 1.05, 1],
              // borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 50% 60% 40% 50%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
            }}
            transition={{ duration: 35, ease: "linear", repeat: Infinity }}
            className="absolute -top-[10%] -right-[10%] w-[450px] h-[450px] border-[2px] border-kinetic-500/40 dark:border-kinetic-500/30 z-0 will-change-transform"
            style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" }}
          />
          <motion.div 
            animate={{ 
              x: [0, -150, 100, 150, -90, -120, 0], 
              y: [0, 120, -150, -80, 100, -50, 0],
              rotate: [360, 180, 0],
              scale: [1, 0.9, 1.15, 0.85, 1.1, 0.95, 1],
              // borderRadius: ["60% 40% 30% 70% / 50% 60% 40% 50%", "40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 50% 60% 40% 50%"]
            }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            className="absolute -bottom-[10%] right-[10%] w-[400px] h-[400px] border-[2px] border-cyan-500/40 dark:border-hologram-500/30 z-0 will-change-transform"
            style={{ borderRadius: "60% 40% 30% 70% / 50% 60% 40% 50%" }}
          />
          
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;