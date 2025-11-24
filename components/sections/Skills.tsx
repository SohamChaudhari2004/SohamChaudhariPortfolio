"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { skills, categoryIcons, SkillCategory } from "@/data/skills";
import SkillCard from "@/components/ui/SkillCard";
import SkillsModal from "@/components/ui/SkillsModal";

export default function Skills() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<SkillCategory, typeof skills>);

  // Get all categories but only show the first 2
  const allCategories = Object.keys(skillsByCategory) as SkillCategory[];
  const displayedCategories = allCategories.slice(0, 2);

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-[1280px] mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold mb-6"
        >
          Technical Skills
        </motion.h2>
        <div className="w-24 h-1 bg-white mx-auto mb-6 rounded-full" />
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {displayedCategories.map((category, index) => (
          <SkillCard
            key={category}
            title={category}
            icon={categoryIcons[category]}
            skills={skillsByCategory[category] || []}
            index={index}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={() => setIsModalOpen(true)}
          className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden transition-transform hover:scale-105"
        >
          <span className="relative z-10">See All Skills</span>
          <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
        </motion.button>
      </div>

      <SkillsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
