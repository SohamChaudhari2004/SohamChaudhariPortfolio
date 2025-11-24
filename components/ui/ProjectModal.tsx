"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects, categories } from "@/data/projects";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  // Handle Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-[90vh] max-w-7xl bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/10 bg-black/20">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">All Projects</h2>
                <p className="text-gray-400 text-sm md:text-base">Explore my complete portfolio of work.</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="px-6 md:px-8 py-4 border-b border-white/10 bg-black/10 overflow-x-auto">
              <div className="flex gap-2 min-w-max">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                      activeCategory === category
                        ? "bg-white text-black border-white"
                        : "bg-transparent text-gray-400 border-transparent hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Grid */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project) => (
                    <motion.div
                      layout
                      key={project.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="group relative"
                    >
                      <div className="block overflow-hidden rounded-2xl bg-white/5 border border-white/10">
                        <div className={`relative w-full ${project.aspect}`}>
                          {project.image ? (
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-gray-800 to-gray-900">
                              <span className="text-6xl font-bold text-white/20">{project.title.charAt(0)}</span>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                        </div>
                        
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-medium text-white">{project.title}</h3>
                            <span className="text-xs text-gray-500 border border-white/10 px-2 py-1 rounded-full">{project.category}</span>
                          </div>
                          <p className="text-sm text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                          
                          {/* Action Buttons */}
                          <div className="flex gap-2">
                            {project.liveLink && (
                              <Link
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg py-2 px-3 flex items-center justify-center gap-2 text-white transition-all duration-300 hover:bg-white/20"
                              >
                                <span className="text-xs font-medium">Live</span>
                                <ArrowUpRight className="w-3 h-3" />
                              </Link>
                            )}
                            {project.githubLink && (
                              <Link
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg py-2 px-3 flex items-center justify-center gap-2 text-white transition-all duration-300 hover:bg-white/20"
                              >
                                <span className="text-xs font-medium">GitHub</span>
                                <ArrowUpRight className="w-3 h-3" />
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
              
              {filteredProjects.length === 0 && (
                <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                  <p>No projects found in this category.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
