"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function ProjectDetailModal({ isOpen, onClose, project }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-gray-900/95 backdrop-blur-md border border-white/20 rounded-2xl md:rounded-3xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 p-2 rounded-full bg-white/50 hover:bg-white/20 text-white transition-all duration-300 hover:rotate-90"
              >
                <X className="w-5 h-5 sm:w-6 text-black sm:h-6" />
              </button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
                {/* Project Image */}
                {project.image && (
                  <div className="relative w-full h-48 sm:h-64 md:h-80 bg-gray-800">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-gray-900/95 via-gray-900/50 to-transparent" />
                  </div>
                )}

                {/* Content */}
                <div className="p-6 sm:p-8 md:p-10">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 text-white text-xs sm:text-sm font-medium capitalize">
                      <Tag className="w-3 h-3 sm:w-4 sm:h-4" />
                      {project.category === "ai-ml" ? "AI & ML" : project.category === "web-dev" ? "Web Development" : "Blockchain"}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
                    {project.description}
                  </p>

                  {/* Tech Stack or Additional Info */}
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Project Details</h3>
                    <div className="space-y-2 text-sm sm:text-base text-gray-400">
                      <p><strong className="text-white">Category:</strong> {project.category === "ai-ml" ? "AI & Machine Learning" : project.category === "web-dev" ? "Web Development" : "Blockchain"}</p>
                      {/* Add more details as needed */}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    {project.liveLink && (
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-white text-black rounded-xl py-3 sm:py-4 px-5 sm:px-6 flex items-center justify-center gap-2 font-medium transition-all duration-300 hover:bg-gray-200 hover:scale-[1.02]"
                      >
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-sm sm:text-base">View Live Project</span>
                      </Link>
                    )}
                    {project.githubLink && (
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl py-3 sm:py-4 px-5 sm:px-6 flex items-center justify-center gap-2 font-medium transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]"
                      >
                        <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-sm sm:text-base">View on GitHub</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
