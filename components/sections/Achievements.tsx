"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { achievements } from "@/data/achievements";

export default function Achievements() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="achievements" className="py-24 px-6 md:px-12 max-w-[1280px] mx-auto">
      <div className="flex flex-col items-center justify-center">
    <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl items-center justify-center md:text-4xl font-semibold mb-6"
        >
          Achievements
        </motion.h2>
        <div className="w-24 h-1 bg-white mx-auto mb-6 rounded-full" />
    </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-linear-to-br from-zinc-900/50 to-blue-950/30 rounded-2xl p-8 md:p-12 border border-cyan-500/20 overflow-hidden"
        >
          {/* Circuit Design Borders */}
          <div className="absolute top-0 left-0 w-32 h-32 opacity-30">
            <svg viewBox="0 0 100 100" className="text-cyan-400">
              <path d="M0,20 L20,20 L20,0 M20,20 L20,40 L40,40" stroke="currentColor" strokeWidth="1" fill="none"/>
              <circle cx="20" cy="20" r="2" fill="currentColor"/>
              <circle cx="40" cy="40" r="2" fill="currentColor"/>
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-32 opacity-30 rotate-180">
            <svg viewBox="0 0 100 100" className="text-cyan-400">
              <path d="M0,20 L20,20 L20,0 M20,20 L20,40 L40,40" stroke="currentColor" strokeWidth="1" fill="none"/>
              <circle cx="20" cy="20" r="2" fill="currentColor"/>
              <circle cx="40" cy="40" r="2" fill="currentColor"/>
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 min-h-[280px] md:min-h-[250px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {achievements[currentIndex].title}
                </h3>
                <p className="text-lg md:text-xl text-cyan-400 mb-6">
                  {achievements[currentIndex].subtitle}
                </p>
                <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  {achievements[currentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-full p-3 transition-all duration-300 hover:scale-110 group"
          aria-label="Previous achievement"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-full p-3 transition-all duration-300 hover:scale-110 group"
          aria-label="Next achievement"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {achievements.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-cyan-400 w-8"
                  : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to achievement ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
