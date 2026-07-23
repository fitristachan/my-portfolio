import { motion } from "framer-motion";
import { useState } from "react";
import DotBackground from "../components/DotBackground";
import projectsData from "../components/ProjectsData";
import proProjectsData from "../components/ProProjectsData";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState(null);
  const [activedProjectIndex, setActivedProjectIndex] = useState(null);
  const [hoveredProProjectIndex, setHoveredProProjectIndex] = useState(null);
  const [activedProProjectIndex, setActivedProProjectIndex] = useState(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="projects"
      className="relative flex flex-col items-center justify-center pt-32 py-16 px-8 overflow-hidden min-h-screen"
    >
      <DotBackground />

      <div className="text-center mb-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-pink-600">
            Professional Work Projects
          </h1>
          <p className="text-gray-500 mt-2">
            Real industry work with real project cases!
          </p>
        </motion.div>
      </div>

      <div className="flex gap-6 items-center overflow-x-auto pb-4 max-w-7xl scrollbar-thin scrollbar-thumb-pink-400/50 scrollbar-track-transparent">
        {proProjectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            hoveredIndex={hoveredProProjectIndex}
            setHoveredIndex={setHoveredProProjectIndex}
            activedIndex={activedProProjectIndex}
            setActivedIndex={setActivedProProjectIndex}
          />
        ))}
      </div>

      <div className="relative flex flex-col items-center py-10">
          {/* gradient handoff line: teal → pink */}
          <div className="w-40 h-[2px] bg-gradient-to-r from-teal-400 via-slate-400 to-pink-500 rounded-full mb-4" />
          
          <p className="text-sm text-slate-500 font-medium tracking-wide flex items-center gap-2">
            That's the corporate side
            <span className="animate-bounce inline-block">👾</span>
            here's the fun stuff
          </p>

          <p className="text-sm text-slate-500 font-medium tracking-wide flex items-center gap-2 mt-2">
            My college and fun projects in Github!
          </p>
        </div>

      <div className="flex gap-6 items-center overflow-x-auto pb-4 max-w-7xl scrollbar-thin scrollbar-thumb-pink-400/50 scrollbar-track-transparent snap-x snap-mandatory">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            hoveredIndex={hoveredProjectIndex}
            setHoveredIndex={setHoveredProjectIndex}
            activedIndex={activedProjectIndex}
            setActivedIndex={setActivedProjectIndex}
          />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center text-gray-500 text-sm mt-16"
      >
        Hover or click over each card to explore more
      </motion.p>
    </motion.section>
  );
}