"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your goals, audience, and unique value proposition to build a solid foundation.",
  },
  {
    number: "02",
    title: "Design",
    description: "I craft intuitive and visually stunning designs that align with your brand and resonate with your users.",
  },
  {
    number: "03",
    title: "Development",
    description: "Using modern technologies, I bring the designs to life with clean code, smooth animations, and high performance.",
  },
];

export default function Process() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="process" className="py-24 px-6 md:px-12 max-w-[1280px] mx-auto">
      <div className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold mb-4"
        >
          Process
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-600 max-w-xl"
        >
          A simple, transparent approach to delivering high-quality results.
        </motion.p>
      </div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group bg-white/5 p-8 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
          >
            <span className="block text-4xl font-bold text-white/20 mb-6 group-hover:text-white/40 transition-colors">
              {step.number}
            </span>
            <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
            <p className="text-gray-400 leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
