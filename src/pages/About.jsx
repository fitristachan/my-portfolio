import { motion } from "framer-motion";
import DotBackground from "../components/DotBackground";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="about"
      className="relative flex flex-col items-center justify-center pt-32 py-16 px-16 overflow-hidden"
    >  
    <DotBackground/>
      
      <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pink-600">About Me</h1>
          <p className="text-gray-500 mt-2">Curious learner, creative thinker, and tech enthusiast!</p>
        
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-8 py-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5}}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-pink-200 shadow-xl"
              >
                <div className="text-justify">
                <p>
                    I’m <strong>Fitri Sagita</strong>, an Informatics Engineering graduate with experience in 
                    full stack development, Android development, data processing, and software quality assurance. 
                    I’ve worked with REST APIs, databases, and testing workflows to build reliable, 
                    data-driven applications. I’m passionate about writing clean code, ensuring software quality, 
                    and turning complex problems into practical solutions.
                </p>
                </div>   

              </motion.div>
        

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5}}
              className="flex flex-col gap-8 justify-center h-full"
            >
                <div className="flex flex-wrap gap-3 justify-center">
                  {[
                      { label: "Certified Data Engineer", color: "from-green-400 to-cyan-400", bg: "bg-green-50", text: "text-green-600" },
                      { label: "Certified Mobile Developer", color: "from-purple-400 to-rose-400", bg: "bg-purple-50", text: "text-purple-600" },
                      { label: "2+ Year Work Experience", color: "from-rose-400 to-rose-400", bg: "bg-rose-50", text: "text-rose-600" },
                  ].map((badge, index) => (
                      <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileActive={{ scale: 1.05 }}
                      className="relative group p-[1.5px] rounded-full overflow-hidden" // Container untuk border gradasi
                      >
                      {/* Layer Gradasi (Muncul saat hover) */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${badge.color}`} />
                      
                      {/* Layer Border Default (Biasa) */}
                      <div className="absolute inset-0 bg-neutral-200 group-hover:hidden group-active:hidden" />

                      {/* Konten Badge */}
                      <div className={`relative px-4 py-2 rounded-full ${badge.bg} ${badge.text} text-sm font-semibold transition-all`}>
                          {badge.label}
                      </div>
                      </motion.div>
                  ))}
              </div>
            </motion.div>
            
        </div>
      </div>
  
    </motion.section>
  );
}