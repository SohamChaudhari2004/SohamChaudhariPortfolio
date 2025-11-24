"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  index: number;
}

export default function SkillBadge({ name, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm md:text-base text-gray-300 cursor-default transition-colors duration-300 hover:border-white/20 hover:text-white"
    >
      {name}
    </motion.div>
  );
}
