import { motion } from "framer-motion";
import { useState } from "react";
import DotBackground from "../components/DotBackground";
import projectsData from "../components/ProjectsData";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activedIndex, setActivedIndex] = useState(null);

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
            My Best Projects
          </h1>
          <p className="text-gray-500 mt-2">
            Let's learn about all of my best and favorite projects!
          </p>
        </motion.div>
      </div>

      <div className="flex gap-6 items-center justify-center flex-wrap max-w-7xl">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            activedIndex={activedIndex}
            setActivedIndex={setActivedIndex}
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