import { motion } from "framer-motion";

export default function Navbar(){
    return(
        <nav className="bg-neutral-100 fixed top-0 left-0 w-full z-50">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-center text-pink-600 bg-neutral-100">
                {/* <span className="font-bold text-lg">Fitri Sagita Portfolio</span> */}

                <ul className="flex gap-6 text-sm">
                <li><a href="#home" className="hover:text-rose-800 p-2">Home</a></li>
                <li><a href="#about" className="hover:text-rose-800 p-2">About</a></li>
                <li><a href="#skills" className="hover:text-rose-800">Skills</a></li>
                <li><a href="#projects" className="hover:text-rose-800 p-2">Projects</a></li>
                <li>
                    <a href="#contact" className="bg-neutral-100 border border-pink-600 p-2 rounded text-pink-600 hover:bg-pink-600 hover:text-white">Contact Me</a>
                </li>
                </ul>
            </div>
        </nav>

    );
}