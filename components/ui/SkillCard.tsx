"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Image from "next/image";
import { Skill } from "@/data/skills";

interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
  index: number;
}

export default function SkillCard({ title, icon: Icon, skills, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors duration-300 h-full"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-white/5 rounded-lg">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            className="flex flex-col items-center justify-center gap-2 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300 group min-h-[100px]"
          >
            <div className="relative w-10 h-10 opacity-70 group-hover:opacity-100 transition-opacity shrink-0">
              <Image
                src={skill.icon}
                alt={skill.name}
                fill
                className="object-contain filter brightness-0 invert"
                unoptimized // Simple Icons CDN might not work well with Next.js optimization without config
              />
            </div>
            <span className="text-xs font-medium text-gray-400 group-hover:text-white text-center leading-tight">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
