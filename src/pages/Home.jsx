import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import gita from '../assets/gita_porto.jpg'
import DotBackground from "../components/DotBackground";

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="home"
      className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 pt-40 pb-40 py-16"
    >
      <DotBackground/>
      <div className="flex flex-col px-32 items-center gap-2 ">
            <a href="https://www.linkedin.com/in/fitri-sagita-4a530a210/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-darkflow hover:text-pink-600">
              <FaLinkedin />
            </a>
            <a href="https://github.com/fitristachan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-darkflow hover:text-pink-600">
              <FaGithub />
            </a>
      </div>

      <div className="text-center">
        <h1 className="text-4xl font-bold text-pink-600">
          Hello, I'm Fitri Sagita!
        </h1>
        <p className="mt-4 font-semibold text-darkflow">
          • Full Stack Developer • Mobile Developer
          <br/> • Data Analyst • QA Engineer
        </p>
        <br/>
        {/* arahin ke drive aja isinya cv */}
        <button className="bg-pink-600 text-white p-2 rounded hover:shadow hover:bg-pinkflow ">
          <a href="https://drive.google.com/drive/folders/1Zoir2L53ovrUN7O6WqKS2vf81P8rKZbx?usp=sharing"  className="flex items-center gap-2" target="_blank" rel="noopener noreferrer"> Download CV <FaDownload/> </a> 
        </button>
      </div>

      <div className="flex justify-center relative w-36 h-36 mx-32 group">
          
          {/* layer belakang 1 */}
          <img
            src={gita}
            alt=""
            className="
              absolute inset-0
              w-full h-full object-cover rounded-xl
              blur-sm opacity-50
              transition-all duration-300
              group-hover:-translate-x-6 group-hover:-translate-y-6
            "
          />

          {/* layer belakang 2 */}
          <img
            src={gita}
            alt=""
            className="
              absolute inset-0
              w-full h-full object-cover rounded-xl
              blur-md opacity-40
              transition-all duration-300
              group-hover:translate-x-6 group-hover:translate-y-6
            "
          />

          {/* gambar utama */}
          <img
            src={gita}
            alt="Fitri Sagita"
            className="
              relative
              w-full h-full object-cover rounded-xl
              shadow-xl
            "
          />
        </div>
  
    </motion.section>
  );
}