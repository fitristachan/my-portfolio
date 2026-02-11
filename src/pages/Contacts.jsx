import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import DotBackground from "../components/DotBackground";

export default function Contacts() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setStatus("Message sent successfully!");
          form.current.reset();
          setIsSending(false);
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Failed to send message. Please try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="contact"
      className="relative flex flex-col items-center justify-center pt-32 py-16 px-6 md:px-16 overflow-hidden min-h-screen"
    >
      <DotBackground />

      <div className="relative z-10 w-full max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pink-600">Contact Me</h1>
          <p className="text-gray-500 mt-2">I'll get back to you as soon as possible!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* SISI KIRI: Email Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-pink-200 shadow-xl"
          >
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name<span className="text-rose-600">*</span></label>
                <input
                  type="text"
                  name="full_name" 
                  required
                  className="w-full px-4 py-2 rounded-lg border border-pink-100 focus:ring-2 focus:ring-pink-500 outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email<span className="text-rose-600">*</span></label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-pink-100 focus:ring-2 focus:ring-pink-500 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  type="text"
                  name="company_name" 
                  className="w-full px-4 py-2 rounded-lg border border-pink-100 focus:ring-2 focus:ring-pink-500 outline-none transition-all"
                  placeholder="Your Company Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message<span className="text-rose-600">*</span></label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border border-pink-100 focus:ring-2 focus:ring-pink-500 outline-none transition-all"
                  placeholder="Tell me about what you want to say..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSending}
                className={`flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 active:bg-pink-700 text-white font-semibold py-3 rounded-lg transition-all shadow-lg ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSending ? "Sending..." : <><FaPaperPlane size={16} /> Send Message</>}
              </button>

              {status && (
                <p className={`text-center text-sm mt-2 ${status.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
                  {status}
                </p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-8 justify-center h-full"
          >
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Let's Connect</h2>
              <p className="text-gray-600 leading-relaxed">
                Whether you want to offer new opportunity or have a question, my inbox is always open.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <a href="mailto:fitristarius@gmail.com" className="flex items-center gap-4 text-gray-700 hover:text-pink-600 active:text-pink-600 transition-colors group">
                <div className="p-4 bg-pink-50 rounded-full group-hover:bg-pink-600 group-hover:text-white group-active:bg-pink-600 group-active:text-white transition-all">
                  <FaEnvelope size={20} />
                </div>
                <span className="font-medium">fitristarius@gmail.com</span>
              </a>

              <div className="flex gap-4">
                    <a
                        href="https://www.linkedin.com/in/fitri-sagita-4a530a210/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white border border-pink-100 rounded-2xl shadow-sm text-pink-600 hover:bg-pink-600 hover:text-white active:bg-pink-600 active:text-white transition-all transform hover:-translate-y-1 active:-translate-y-1 flex items-center justify-center"
                        >
                        <FaLinkedin size={22} />
                    </a>
                    <a
                        href="https://github.com/fitristachan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white border border-pink-100 rounded-2xl shadow-sm text-pink-600 hover:bg-pink-600 hover:text-white active:text-white transition-all transform hover:-translate-y-1 active:-translate-y-1 flex items-center justify-center"
                        >
                        <FaGithub size={22} />
                    </a>               
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}