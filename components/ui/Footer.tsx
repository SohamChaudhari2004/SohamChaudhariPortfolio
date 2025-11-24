"use client";

import Link from "next/link";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";
import Image from "next/image";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent text-white py-16 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <Link href="/" className="text-2xl font-bold tracking-tight mb-2 block">
            SOHAM CHAUDHARI
          </Link>
          <p className="text-gray-400 text-sm">
            Developing applications that matter.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#"
          onClick={() => window.open("https://www.linkedin.com/in/sohamchaudhari2004/", "_blank")}
          className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200">
            
            <Image
              src="/Linkedin.png"
              alt="LinkedIn"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          
          </a>
          <a href="#"
          onClick={() => window.open("https://github.com/sohamchaudhari2004", "_blank")}
          className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200">
            <Image
              src="/github.svg"
              alt="GitHub"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </a>
          <a href="#"
          onClick={() => window.open("https://pypi.org/user/SohamChaudhari2004/", "_blank")}
          className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200">
            <Image
              src="/pypi.svg"
              alt="PyPI"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </a>
        </div>
      </div>
      
      
    </footer>
  );
}
