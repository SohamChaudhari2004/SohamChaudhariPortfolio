"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Calendar, Tag } from "lucide-react";
import { featuredItems, FeaturedItem } from "@/data/featured";

export default function Featured() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Hide component if there are no featured items
  if (featuredItems.length === 0) {
    return null;
  }

  const categories = [
    { id: "all", label: "All" },
    { id: "project", label: "Projects" },
    { id: "achievement", label: "Achievements" },
    { id: "certification", label: "Certifications" },
    { id: "publication", label: "Publications" },
  ];

  const filteredItems = selectedCategory === "all" 
    ? featuredItems 
    : featuredItems.filter(item => item.category === selectedCategory);

  return (
    <section id="featured" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 max-w-[1280px] mx-auto relative">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-6 text-center"
        >
          Featured Highlights
        </motion.h2>
        <div className="w-20 md:w-24 h-1 bg-white rounded-full" />
      </div>

      {/* Category Filter */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 md:mb-16"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
              selectedCategory === category.id
                ? "bg-white text-black"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {category.label}
          </button>
        ))}
      </motion.div> */}

      {/* Featured Items Grid */}
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <FeaturedCard item={item} />
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 text-gray-400"
        >
          <p>No items found in this category.</p>
        </motion.div>
      )}
    </section>
  );
}

function FeaturedCard({ item }: { item: FeaturedItem }) {
  return (
    <div className="group relative h-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
      {/* Icon & Category Badge */}
      <div className="flex items-start justify-between mb-4">
        <div className="text-3xl sm:text-4xl">{item.icon || "✨"}</div>
        <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium capitalize">
          {item.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 group-hover:text-white/90 transition-colors">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4">
        {item.description}
      </p>

      {/* Date */}
      {item.date && (
        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-4">
          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>{item.date}</span>
        </div>
      )}

      {/* Tags */}
      {item.tags && item.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 sm:px-3 py-1 rounded-md bg-white/5 text-gray-400 text-xs flex items-center gap-1"
            >
              <Tag className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Link */}
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/80 hover:text-white transition-colors group"
        >
          <span>View More</span>
          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      )}

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-linear-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-transparent pointer-events-none transition-all duration-300" />
    </div>
  );
}
