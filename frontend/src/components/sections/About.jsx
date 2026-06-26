import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, GraduationCap, Code2, Sparkles, Terminal } from 'lucide-react';
import profileImg from '../../assets/profile.png'; 

const About = () => {
  const sectionRef = useRef(null);
  
  // SCROLL-TRIGGERED REVEAL & SCALING 
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Flattened Tech Stack with Brand Hex Colors & Original Logos
  const skillsList = [
    { name: "Dart", color: "#0175C2", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },
    { name: "Python", color: "#3776AB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "JavaScript", color: "#F7DF1E", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "Java", color: "#007396", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "Node.js", color: "#339933", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Flutter", color: "#02569B", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
    { name: "React", color: "#61DAFB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "LangChain", color: "#1C3C3C", img: "https://cdn.simpleicons.org/langchain/1C3C3C" },
    { name: "TensorFlow", color: "#FF6F00", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
    { name: "MongoDB", color: "#47A248", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", color: "#336791", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "Firebase", color: "#FFCA28", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
    { name: "GCP", color: "#4285F4", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
    { name: "Supabase", color: "#3ECF8E", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" }
  ];

  // Duplicate the array to create a seamless infinite loop
  const marqueeSkills = [...skillsList, ...skillsList];

  return (
    <section id="about" ref={sectionRef} className="py-32 px-8 relative overflow-hidden">
      
      {/* ENDLESS ROAMING BACKGROUND BLOB */}
      <motion.div 
        animate={{ 
          x: [0, 400, 100, -300, -100, 0], 
          y: [0, 300, 600, 400, 100, 0],
          scale: [1, 1.2, 0.9, 1.3, 0.8, 1],
        }}
        transition={{ duration: 45, ease: "linear", repeat: Infinity }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-br from-kinetic-500/20 to-cyan-500/20 dark:from-kinetic-500/15 dark:to-hologram-500/15 blur-[120px] rounded-full pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          style={{ scale, opacity }}
          className="mb-16 text-center md:text-left origin-left"
        >
          <h2 className="text-kinetic-600 dark:text-kinetic-500 font-sans font-bold tracking-widest uppercase text-sm mb-2 flex items-center justify-center md:justify-start gap-2">
            <Sparkles className="w-4 h-4" /> System.About
          </h2>
          <h3 className="text-4xl md:text-5xl font-sans font-bold text-gray-900 dark:text-white tracking-tight">
            Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-kinetic-600 to-gray-900 dark:from-kinetic-400 dark:to-hologram-400">Future.</span>
          </h3>
        </motion.div>

        {/* Main Grid: Image (Left) & Info (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* LEFT: Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center lg:justify-start"
          >
            <div className="relative p-2 rounded-3xl bg-white/50 dark:bg-vibranium-800/50 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-2xl z-10">
              <img 
                src={profileImg} 
                alt="Varun Kiran Joshi" 
                className="w-full max-w-[400px] h-auto rounded-2xl object-cover transition-all duration-500"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 md:-right-10 bg-white dark:bg-vibranium-900 border border-gray-200 dark:border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-kinetic-500/20 flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-kinetic-700 dark:text-kinetic-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Status</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Open to Work
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Bio & Mini-Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center relative z-10"
          >
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">The Architecture of Innovation</h4>
            <p className="text-gray-700 dark:text-gray-400 font-sans leading-relaxed text-lg mb-8 font-medium dark:font-normal">
              I bridge the gap between intuitive frontend experiences and complex backend systems. Through hands-on enterprise projects, I've developed expertise in architecting scalable Flutter applications alongside connecting LLMs to real-world environments via RAG pipelines. 
              <br/><br/>
              I care deeply about writing clean, maintainable code—mostly because I've had to debug the alternative.
            </p>

            {/* Info Mini-Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-5 flex items-start gap-4 backdrop-blur-sm">
                <MapPin className="w-6 h-6 text-cyan-600 dark:text-hologram-400 mt-1" />
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Location</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Mumbai, Maharashtra, India</p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-5 flex items-start gap-4 backdrop-blur-sm">
                <GraduationCap className="w-6 h-6 text-kinetic-600 dark:text-kinetic-400 mt-1" />
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Education</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">B.E. Computer Engineering (2026)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM: Infinite Scrolling Tech Marquee */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full relative z-10 pt-10"
        >
          <div className="flex items-center gap-3 mb-10 px-4 justify-center text-center">
            <Code2 className="w-7 h-7 text-kinetic-600 dark:text-kinetic-400" />
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Technical Arsenal</h4>
          </div>
          
          {/* <hr style={{ border: "none",width: "20%", height: "1.5px", backgroundColor:"#7B2CBF" }} /> */}
          
          {/* Edge Fade Mask container */}
          <div 
            className="relative w-full overflow-hidden flex py-4"
            style={{ 
              maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
            }}
          >
            {/* The Scrolling Track */}
            <motion.div 
              className="flex gap-20 whitespace-nowrap min-w-max items-center pr-20"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                duration: 40, // Slow, elegant speed
                ease: "linear", 
                repeat: Infinity 
              }}
            >
              {marqueeSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  // Dynamic Hover Physics - Name lights up in brand color
                  whileHover={{ scale: 1.15, color: skill.color }}
                  className="flex flex-col items-center justify-center gap-4 text-gray-500 dark:text-gray-400 cursor-pointer transition-colors group"
                >
                  <img 
                    src={skill.img} 
                    alt={skill.name}
                    className="w-16 h-16 object-contain drop-shadow-md group-hover:drop-shadow-xl transition-all"
                    onError={(e) => e.target.style.display = 'none'} 
                  />
                  <span className="text-lg font-sans font-bold tracking-wide">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;