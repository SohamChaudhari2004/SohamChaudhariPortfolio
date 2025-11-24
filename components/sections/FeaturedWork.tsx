"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectModal from "@/components/ui/ProjectModal";

export default function FeaturedWork() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Display only the first 6 projects in the featured section
  const featuredProjects = projects.slice(0, 6);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-[1280px] mx-auto relative">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="ml-96">
          
    <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold mb-6"
        >
          Featured Projects
        </motion.h2>
        <div className="w-24 h-1 bg-white mx-auto mb-6 rounded-full" />
          
        </div>
      </div>

      <div ref={ref} className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mb-16">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="break-inside-avoid"
          >
            <div className="block group relative overflow-hidden rounded-2xl bg-gray-900/50">
              <div className={`relative w-full ${project.aspect}`}>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-gray-800 to-gray-900">
                    <span className="text-4xl font-bold text-white/20">{project.title.charAt(0)}</span>
                  </div>
                )}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Project Info */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.liveLink && (
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl py-2.5 px-4 flex items-center justify-center gap-2 text-white transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]"
                      >
                        <span className="text-sm font-medium">Live</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    )}
                    {project.githubLink && (
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl py-2.5 px-4 flex items-center justify-center gap-2 text-white transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]"
                      >
                        <span className="text-sm font-medium">GitHub</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* See All Projects Button */}
      <div className="flex justify-center">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onClick={() => setIsModalOpen(true)}
          className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden transition-transform hover:scale-105"
        >
          <span className="relative z-10">See All Projects</span>
          <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
        </motion.button>
      </div>

      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}