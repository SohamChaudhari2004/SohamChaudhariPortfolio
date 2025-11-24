"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mouse } from "lucide-react";
import { resume } from "@/data/data";
import Image from "next/image";
export default function Hero() {
  const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section className="relative flex flex-col justify-center min-h-screen px-6 pt-20 md:px-12 w-full overflow-hidden bg-transparent text-white">
      
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Profile Image */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
            <img 
              src="\image1_croped_enhance.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-tr from-black/20 to-transparent" />
          </div>
        </motion.div>

        {/* Right Column: Content */}
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 leading-[1.1]"
          >
            Hi, I'm Soham <br />
            <span className="text-gray-400 text-4xl md:text-5xl lg:text-6xl">AI Developer</span>
          </motion.h1>

          {/* Subheading */}
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
            className="text-lg md:text-xl text-gray-300 max-w-xl mb-8 leading-relaxed"
          >
            Generative AI | LLMs | Agentic AI | Machine Learning | Computer Vision | Data Science | Web Development
          </motion.p> */}

          {/* Buttons */}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
            onClick={() => window.open(resume.path, "_blank")} 
            className="px-8 cursor-pointer py-4 w-96  border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium transition-all duration-300 min-w-[160px]">
              Resume
            </button>

            
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease }}
            className="flex mt-8 flex-row sm:flex-row items-center justify-center gap-4"
          >   
              <Image
                src="/github.svg"
                alt="GitHub"
                onClick={() => window.open("https://github.com/sohamchaudhari2004", "_blank")}
                width={32}
                height={32}
                className="w-8 pointer-cursor h-8"
                />

              <Image
                src="/Linkedin.png"
                alt="LinkedIn"
                onClick={() => window.open("https://www.linkedin.com/in/sohamchaudhari2004/", "_blank")}
                width={32}
                height={32}
                className="w-8 pointer-cursor h-8"
              />

              <Image
                src="/pypi.svg"
                alt="PyPI"
                onClick={() => window.open("https://pypi.org/user/SohamChaudhari2004/", "_blank")}
                width={32}
                height={32}
                className="w-8 pointer-cursor h-8"
              />
                </motion.div>
            
            </div>
        </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="fixed bg-black/80 p-3 w-full bottom-2 left-0  right-0 z-10 flex items-center justify-center gap-4 text-white/55 text-sm"
      >
        {/* <span>Scroll down</span> */}
        <div className="w-16 h-px bg-white" />
        <Mouse className="w-5 h-5 text-white animate-bounce" />
        <div className="w-16 h-px bg-white" />
        {/* <span>to other sections</span> */}
      </motion.div>

      {/* Bottom Logos Fade */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-0 pointer-events-none" /> */}
    </section>
  );
}
