import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <nav className="bg-neutral-100 fixed top-0 left-0 w-full z-50 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between md:justify-center text-pink-600">

        <span className="md:hidden font-bold text-lg">Fitri Sagita</span>

        <ul className="hidden md:flex items-center gap-6 text-sm">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="hover:text-rose-800 p-2 transition-colors">
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="border border-pink-600 px-4 py-2 rounded text-pink-600 hover:bg-pink-600 hover:text-white transition-all">
              Contact Me
            </a>
          </li>
        </ul>

        <button 
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-100 border-b border-neutral-200 overflow-hidden"
          >
            <ul className="flex flex-col gap-4 p-6 text-sm">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    onClick={() => setIsOpen(false)}
                    className="block hover:text-rose-800"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className="block text-center border border-pink-600 p-2 rounded text-pink-600"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}