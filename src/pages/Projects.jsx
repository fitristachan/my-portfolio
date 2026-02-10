import { motion } from "framer-motion";
import DotBackground from "../components/DotBackground";

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="projects"
      className="relative flex flex-col items-center justify-center pt-32 py-16 px-16 overflow-hidden"
    >  
        <DotBackground/>
        <div className="text-center">
            <h1 className="text-2xl font-bold text-pink-600">
            My Best Projects
            </h1>
        </div>
  
    </motion.section>
  );
}