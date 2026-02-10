import { motion } from "framer-motion";
import TechOrbit from '../components/TechOrbit';

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="skills"
      className="items-center justify-center pt-32 py-16"
    >  
      <TechOrbit />
    </motion.section>
  );
}