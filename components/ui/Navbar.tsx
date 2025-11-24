"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LayoutGrid } from "lucide-react";
import { useState, useEffect } from "react";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 max-w-[1440px] mx-auto text-white transition-all duration-300 ${
          isScrolled ? "bg-black/50 backdrop-blur-md " : ""
        }`}
      >
        <Link href="/" className="flex items-center gap-2 text-xl font-medium tracking-tight">
          <LayoutGrid className="w-6 h-6" />
          PORTFOLIO
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {["About",  "Projects","Skills","Achievements" ].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
            
          <button
            onClick={() => setIsContactOpen(true)}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
          >
            Contact
          </button>
          
          <Link href={'/services'}>
          
          <button
            
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
          >
            Services
          </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-white">
          <span className="sr-only">Open menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </motion.nav>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
