"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Palette, Code, Smartphone, Globe, Megaphone, PenTool } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Creating memorable visual identities that tell your story and connect with your audience.",
    color: "hover:bg-orange-500/10",
    border: "border-white/10 hover:border-orange-500/50",
    iconColor: "text-orange-400",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building robust, scalable, and high-performance websites using modern technologies.",
    color: "hover:bg-blue-500/10",
    border: "border-white/10 hover:border-blue-500/50",
    iconColor: "text-blue-400",
  },
  {
    icon: Smartphone,
    title: "App Design",
    description: "Designing intuitive mobile experiences that users love to engage with.",
    color: "hover:bg-green-500/10",
    border: "border-white/10 hover:border-green-500/50",
    iconColor: "text-green-400",
  },
  {
    icon: Globe,
    title: "SEO Strategy",
    description: "Optimizing your digital presence to increase visibility and drive organic traffic.",
    color: "hover:bg-purple-500/10",
    border: "border-white/10 hover:border-purple-500/50",
    iconColor: "text-purple-400",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategic campaigns that reach your target audience and convert leads into customers.",
    color: "hover:bg-pink-500/10",
    border: "border-white/10 hover:border-pink-500/50",
    iconColor: "text-pink-400",
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Compelling copy and visuals that communicate your message effectively.",
    color: "hover:bg-yellow-500/10",
    border: "border-white/10 hover:border-yellow-500/50",
    iconColor: "text-yellow-400",
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-24 px-6 md:px-12 max-w-[1280px] mx-auto">
      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold mb-4"
        >
          Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-600 max-w-xl mx-auto"
        >
          Comprehensive solutions tailored to your specific needs.
        </motion.p>
      </div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`group p-8 rounded-xl border ${service.border} bg-white/5 ${service.color} transition-all duration-300`}
          >
            <div className={`w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6 shadow-sm group-hover:rotate-6 transition-transform duration-300`}>
              <service.icon className={`w-6 h-6 ${service.iconColor}`} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
