"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, MoveUpRight } from "lucide-react";
import { projects, Project } from "@/data/projects";
import ProjectModal from "@/components/ui/ProjectModal";
import ProjectDetailModal from "@/components/ui/ProjectDetailModal";

export default function FeaturedWork() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Display only the first 6 projects in the featured section
  const featuredProjects = projects.slice(0, 6);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsDetailModalOpen(true);
  };

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 max-w-[1280px] mx-auto relative">
      <div className="flex flex-col items-center justify-center mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-6 text-center"
        >
          Featured Projects
        </motion.h2>
        <div className="w-20 md:w-24 h-1 bg-white rounded-full" />
      </div>

      <div ref={ref} className="columns-1 md:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6 mb-12 md:mb-16">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={index}
            onClick={() => handleProjectClick(project)}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="break-inside-avoid"
          >
            <div className="block group relative overflow-hidden rounded-xl md:rounded-2xl bg-gray-900/50">
              <div className={`relative w-full ${project.aspect}`}>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover lg:grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-gray-800 to-gray-900">
                    <span className="text-4xl font-bold text-white/20">{project.title.charAt(0)}</span>
                  </div>
                )}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Detail Arrow Button - Top Right */}
                <button
                  onClick={() => handleProjectClick(project)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 sm:p-2.5 rounded-full bg-white/50 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 z-10"
                  aria-label="View project details"
                >
                  <MoveUpRight className="w-4 h-4 sm:w-5 text-black sm:h-5" />
                </button>

                {/* Project Info */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 line-clamp-2">{project.description}</p>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2 sm:gap-3">
                    {project.liveLink && (
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 bg-black/50 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl py-2 sm:py-2.5 px-3 sm:px-4 flex items-center justify-center gap-1.5 sm:gap-2 text-white transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]"
                      >
                        <span className="text-xs sm:text-sm font-medium">Live</span>
                        <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Link>
                    )}
                    {project.githubLink && (
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 bg-black/50 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl py-2 sm:py-2.5 px-3 sm:px-4 flex items-center justify-center gap-1.5 sm:gap-2 text-white transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]"
                      >
                        <span className="text-xs sm:text-sm font-medium">GitHub</span>
                        <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
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
          className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-medium overflow-hidden transition-transform hover:scale-105 text-sm sm:text-base"
        >
          <span className="relative z-10">See All Projects</span>
          <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
        </motion.button>
      </div>

      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ProjectDetailModal 
        isOpen={isDetailModalOpen} 
        onClose={() => setIsDetailModalOpen(false)} 
        project={selectedProject}
      />
    </section>
  );
}