"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const skills = [
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Data Science",
  "Agentic AI",
  "Generative AI",
  "Web Development"
];

const experience = [
  {
    role: "AI & SDE Intern",
    company: "SR Counselling",
    period: "Dec 2024 - Oct 2025",
  },
  {
    role: "GenAI Developer",
    company: "BCGX (job Simulation)",
    period: "May 2025",
  },
  {
    role: "AI Developer Intern",
    company: "MikeRoss.Ai",
    period: "Sept 2025 - present",
  },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
    
    <section id="about" className="py-24 px-6 md:px-12 max-w-[1280px] mx-auto bg-transparent text-white">
<div className="flex flex-col items-center justify-center">
    <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl items-center justify-center md:text-4xl font-semibold mb-6"
        >
          About Me
        </motion.h2>
        <div className="w-24 h-1 bg-white mx-auto mb-6 rounded-full" />
    </div>
      
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Left Content */}
        <div>
          {/* Heading and Description with image on right for medium screens */}
          <div className="flex gap-6 mb-12">
            <div className="flex-1">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl font-medium mb-8 tracking-tight"
              >
                Meet Soham
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-400 text-lg leading-relaxed"
              >
                I'm Soham, an AI & Machine Learning Engineer passionate about building intelligent, high-impact systems. I specialize in developing high-accuracy ML models, scalable AI applications, and multimodal solutions that combine computer vision, NLP, and generative AI.
              </motion.p>
            </div>
            
            {/* Vertical rectangle image for medium screens only */}
            <motion.div
              initial={{ opacity: 0, scale: 0.50 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:block lg:hidden relative w-48 h-64 rounded-sm overflow-hidden bg-white/5 shrink-0"
            >
              <Image
                src="/image1.jpeg"
                alt="Portrait of Soham"
                fill
                className="object-cover transition-all duration-700"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-t border-white/10 pt-8 mb-8"
          >
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-t border-white/10 pt-8 space-y-6"
          >
            {experience.map((exp, index) => (
              <div key={index} className="grid grid-cols-3 text-sm md:text-base">
                <span className="text-gray-400">{exp.role}</span>
                <span className="text-gray-300">{exp.company}</span>
                <span className="text-gray-500 text-right">{exp.period}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Image - Large screens only */}
        <motion.div
          initial={{ opacity: 0, scale: 0.50 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block relative aspect-square md:aspect-4/5 w-full rounded-sm overflow-hidden bg-white/5"
        >
          <Image
            src="/image1.jpeg"
            alt="Portrait of Soham"
            fill
            className="object-cover lg:grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      </div>
    </section>
    </>
  );
}
