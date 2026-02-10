import { motion } from "framer-motion";
import DotBackground from "../components/DotBackground";

export default function Contacts(){
    return(
        // tambah email form
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            id="contact"
            className="relative flex flex-col items-center justify-center pt-32 py-16 px-16 overflow-hidden"
            >  
                <DotBackground/>
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-pink-600">
                    Contact Me
                    </h1>
                </div>
        {/* pake grid aja bagi 2 email sama socmed */}
        </motion.section>
    );
}