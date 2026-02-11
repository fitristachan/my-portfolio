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
      className="relative flex flex-col md:grid md:grid-cols-3 items-center gap-12 md:gap-8 pt-32 pb-20 md:pt-40 md:pb-40 px-6 max-w-6xl mx-4"
    >
      <DotBackground />

      <div className="flex flex-row md:flex-col items-center justify-center gap-6 md:gap-4 order-2 md:order-1 md:ms-32">
        <a href="https://www.linkedin.com/in/fitri-sagita-4a530a210/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl md:text-2xl text-darkflow hover:text-pink-600 active:text-pink-600 transition-colors">
          <FaLinkedin />
        </a>
        <a href="https://www.github.com/fitristachan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl md:text-2xl text-darkflow hover:text-pink-600 active:text-pink-600 transition-colors">
          <FaGithub />
        </a>
      </div>

      <div className="text-center order-1 md:order-2">
        <h1 className="text-4xl md:text-3xl font-bold text-pink-600 leading-tight">
          Hello, I'm <br className="md:hidden" /> Fitri Sagita!
        </h1>
        <p className="mt-4 font-semibold text-darkflow text-sm md:text-base">
          • Full Stack Developer • Mobile Developer
          <br /> • Data Analyst • QA Engineer
        </p>
        <div className="mt-8">
          <a href="https://www.drive.google.com/drive/folders/1Zoir2L53ovrUN7O6WqKS2vf81P8rKZbx?usp=sharing"
            className="flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-full hover:shadow-lg hover:bg-rose-700 active:shadow-lg active:bg-rose-700  transition-all inline-flex"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV <FaDownload />
          </a>
        </div>
      </div>

      {/* Foto Profil dengan Efek Stack */}
      <div className="flex justify-center order-3">
        <div className="relative w-40 h-40 md:w-48 md:h-48 group">
          {/* layer belakang 1 */}
          <img
            src={gita}
            alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-2xl blur-sm opacity-50 transition-all duration-300 group-hover:-translate-x-4 group-hover:-translate-y-4 group-active:-translate-x-4 group-active:-translate-y-4"
          />

          {/* layer belakang 2 */}
          <img
            src={gita}
            alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-2xl blur-md opacity-30 transition-all duration-300 group-hover:translate-x-4 group-hover:translate-y-4 group-active:-translate-x-4 group-active:-translate-y-4"
          />

          {/* gambar utama */}
          <img
            src={gita}
            alt="Fitri Sagita"
            className="relative w-full h-full object-cover rounded-2xl shadow-2xl border-2 border-white"
          />
        </div>
      </div>

    </motion.section>
  );
}