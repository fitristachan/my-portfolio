import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index, hoveredIndex, setHoveredIndex, activedIndex, setActivedIndex }) => {

  const isExpanded = hoveredIndex === index || activedIndex === index;
  const isOtherExpanded = (hoveredIndex !== null && hoveredIndex !== index) || (activedIndex !== null && activedIndex !== index);
  const currentSelectedIndex = hoveredIndex !== null ? hoveredIndex : activedIndex;

  return (
    <motion.div
      onHoverStart={() => setHoveredIndex(index)}
      onHoverEnd={() => setHoveredIndex(null)}
      
      onTap={() => {
        setActivedIndex(activedIndex === index ? null : index);
      }}

      animate={{
        width: isExpanded ? "400px" : "120px",
        x: isOtherExpanded && index > currentSelectedIndex ? "280px" : "0px"
      }}
      transition={{
        duration: 0.4,
        ease: [0.34, 1.56, 0.64, 1]
      }}
      className="relative h-[500px] rounded-2xl overflow-hidden cursor-pointer shadow-xl flex-shrink-0"
    >
      
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`} />
      

      <motion.div
        animate={{
          opacity: isExpanded ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="transform -rotate-90 whitespace-nowrap">
          <p className="text-xs font-medium text-white/70 mb-2 uppercase tracking-wider">
            {project.category}
          </p>
          <h3 className="text-xl font-bold text-white">
            {project.title}
          </h3>
        </div>
      </motion.div>

 
      <motion.div
        initial={false}
        animate={{
          opacity: isExpanded ? 1 : 0,
          scale: isExpanded ? 1 : 0.8,
          pointerEvents: isExpanded ? "auto" : "none" 
        }}
        transition={{ duration: 0.3, delay: isExpanded ? 0.1 : 0 }}
        className="absolute inset-0 p-6 flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center gap-2 mb-3">
            <FaCode className="w-5 h-5 text-white" />
            <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
            {project.title}
          </h3>
          <p className="text-sm text-white/90 leading-relaxed line-clamp-6">
            {project.description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/30"
              >
                {tech}
              </span>
            ))}
          </div>

          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold text-sm hover:bg-white/90 transition-colors group"
          >
            View on GitHub
            <FaExternalLinkAlt className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </motion.div>

      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
    </motion.div>
  );
};

export default ProjectCard;