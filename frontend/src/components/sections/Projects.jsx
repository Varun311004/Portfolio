/* eslint-disable no-useless-assignment */
import { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Text, Stars, Billboard, Float } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ArrowRight } from 'lucide-react';
import { projectsData } from '../../data/projects';

// 1. Independent Rotating Galaxy
const RotatingGalaxy = () => {
  const starsRef = useRef();
  
  useFrame((state, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.y -= delta * 0.03;
      starsRef.current.rotation.x -= delta * 0.01;
    }
  });

  return (
    <group ref={starsRef}>
      <Stars radius={100} depth={50} count={4000} factor={5} saturation={1} fade speed={1.5} />
    </group>
  );
};

// 2. Dynamic Laser Tethers
const DynamicLine = ({ indexA, indexB, color, isActive, nodeRefs }) => {
  const geoRef = useRef();
  
  useFrame(() => {
    const refA = nodeRefs.current[indexA];
    const refB = nodeRefs.current[indexB];
    if (geoRef.current && refA && refB) {
      const pos = new Float32Array([
        refA.position.x, refA.position.y, refA.position.z,
        refB.position.x, refB.position.y, refB.position.z
      ]);
      geoRef.current.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    }
  });

  return (
    <line>
      <bufferGeometry ref={geoRef} />
      <lineBasicMaterial color={color} transparent opacity={isActive ? 0.15 : 0.3} />
    </line>
  );
};

// 3. Quantum Neural Node with Constrained 3-Axis Physics
const NeuralNode = forwardRef(({ project, active, isAnyActive, onClick }, ref) => {
  const groupRef = useRef();
  const haloRef = useRef();
  const [hovered, setHovered] = useState(false);

  useImperativeHandle(ref, () => groupRef.current);

  const [ox, oy, oz] = project.coordinates;
  const radius = Math.sqrt(ox * ox + oz * oz);
  const baseAngle = Math.atan2(oz, ox);

  useFrame((state, delta) => {
    if (haloRef.current) {
      haloRef.current.rotation.x -= delta * 0.3;
      haloRef.current.rotation.y += delta * 0.4;
    }

    const t = state.clock.elapsedTime * 0.25; 
    let targetX = ox;
    let targetY = oy;
    let targetZ = oz;

    if (active) {
      // Anchored position when selected
      targetX = 1.2; 
      targetY = 0;
      targetZ = 1.5; 
    } else {
      // CONSTRAINED PHYSICS: Tighten the radius and dampen the Y-axis bounce
      const boundedRadius = radius * 0.8; 
      targetX = Math.cos(baseAngle + t) * boundedRadius;
      targetZ = Math.sin(baseAngle + t) * boundedRadius;
      
      // Scale down the initial Y (oy * 0.6) and reduce the bobbing amplitude (0.7)
      targetY = (oy * 0.6) + Math.sin(t * 1.5 + baseAngle) * 0.7; 
      
      if (isAnyActive) {
        targetX -= 1.8; 
      }
    }

    groupRef.current.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.04);
  });

  return (
    <group ref={groupRef}>
      <Float speed={active ? 0.5 : 2} rotationIntensity={0} floatIntensity={active ? 0.2 : 1.5}>
        <Sphere ref={haloRef} args={[active ? 0.6 : 0.45, 16, 16]}>
          <meshBasicMaterial color={project.color} wireframe transparent opacity={hovered || active ? 0.6 : 0.15} />
        </Sphere>

        <Sphere
          args={[active ? 0.35 : 0.25, 32, 32]} 
          onClick={(e) => {
            e.stopPropagation(); 
            onClick(project);
          }}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
            document.body.style.cursor = 'pointer';
          }}
          onPointerOut={() => {
            setHovered(false);
            document.body.style.cursor = 'auto';
          }}
        >
          <meshStandardMaterial
            color={project.color}
            emissive={project.color}
            emissiveIntensity={hovered || active ? 2.5 : 0.8}
            toneMapped={false}
          />
        </Sphere>
        
        <Billboard position={[0, -0.9, 0]}>
          <Text
            fontSize={0.25}
            depthTest={false}
            color={hovered || active ? "#FFFFFF" : "#888888"}
            anchorX="center"
            anchorY="middle"
            font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf"
          >
            {project.title}
          </Text>
        </Billboard>
      </Float>
    </group>
  );
});

NeuralNode.displayName = "NeuralNode";

// 4. The Main Section Component
const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const nodeRefs = useRef([]); 

  return (
    <section id="projects" className="relative h-screen w-full bg-vibranium-900 border-t border-white/5 overflow-hidden">
      <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
        
        <div className="absolute top-24 left-8 md:left-16 z-10 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-kinetic-500 font-sans font-bold tracking-widest uppercase text-sm mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> System.Projects
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white tracking-tight">
              Neural <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-kinetic-500 to-hologram-500">Constellation.</span>
            </h3>
          </motion.div>
        </div>

        <Canvas 
          camera={{ position: [0, 0, 10.5], fov: 45 }} // CAMERA PULLED BACK
          onPointerMissed={() => setActiveProject(null)} 
          gl={{ preserveDrawingBuffer: true, antialias: true }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          
          <RotatingGalaxy />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate={false} 
          />
          
          {projectsData.map((project, i) => (
            <NeuralNode
              key={project.id}
              ref={(el) => (nodeRefs.current[i] = el)}
              project={project}
              active={activeProject?.id === project.id}
              isAnyActive={activeProject !== null}
              onClick={(proj) => setActiveProject(proj)}
            />
          ))}

          {projectsData.map((project, i) => {
            const nextI = (i + 1) % projectsData.length;
            const isTetherActive = activeProject && (activeProject.id === project.id || activeProject.id === projectsData[nextI].id);
            return (
              <DynamicLine 
                key={`line-${i}`}
                indexA={i}
                indexB={nextI}
                color={project.color}
                isActive={isTetherActive}
                nodeRefs={nodeRefs}
              />
            )
          })}
        </Canvas>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: "spring", stiffness: 250, damping: 30 }}
            className="absolute top-0 right-0 h-full w-full lg:w-[35%] max-w-[500px] bg-vibranium-800/90 backdrop-blur-2xl border-l border-white/10 z-50 flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.5)]"
          >
            <div 
              className="w-full h-1.5 opacity-90"
              style={{ backgroundColor: activeProject.color, boxShadow: `0 0 20px ${activeProject.color}` }}
            />

            <div className="flex items-center justify-between p-8 pb-4 border-b border-white/5">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-gray-400">
                // Node_Inspected
              </span>
              <button 
                onClick={() => setActiveProject(null)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors z-50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
              <div className="mb-8">
                <h4 className="text-4xl font-sans font-bold text-white mb-2 tracking-tight leading-tight">
                  {activeProject.title}
                </h4>
                <p 
                  className="text-sm font-mono font-bold tracking-wider uppercase"
                  style={{ color: activeProject.color }}
                >
                  {activeProject.tagline}
                </p>
              </div>

              <div className="mb-10">
                <h5 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Architecture & Purpose</h5>
                <p className="text-gray-300 leading-relaxed font-sans text-base">
                  {activeProject.description}
                </p>
              </div>

              <div className="mb-10">
                <h5 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Tech Arsenal</h5>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full text-xs font-semibold text-gray-300 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-8 border-t border-white/5 bg-vibranium-900/50 flex gap-4">
              {activeProject.github && (
                <a 
                  href={activeProject.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center items-center gap-2 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-all hover:-translate-y-1"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  Source Code
                </a>
              )}
              
              {activeProject.live && (
                <a 
                  href={activeProject.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center items-center gap-2 py-3.5 bg-white text-black hover:bg-gray-200 rounded-xl font-semibold transition-all hover:-translate-y-1 shadow-lg group"
                  style={{ boxShadow: `0 0 20px ${activeProject.color}40` }}
                >
                  Live Deploy
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;