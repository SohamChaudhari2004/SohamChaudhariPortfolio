"use client";

import Navbar from "@/components/ui/Navbar";
import { motion } from "framer-motion";
import { Code, Palette, Smartphone, Zap, Globe, Database } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ContactModal from "@/components/ui/ContactModal";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Full-stack web applications using modern technologies like React, Next.js, Node.js, and MongoDB. Custom solutions tailored to your needs.",
    features: ["Responsive Design", "API Integration", "Database Design", "Performance Optimization"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "AI/ML Solutions",
    description: "Intelligent applications powered by machine learning and AI. From chatbots to predictive models using cutting-edge frameworks.",
    features: ["Langchain Integration", "Custom Models", "Data Analysis", "AI Chatbots"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "API Development",
    description: "RESTful and GraphQL APIs with secure authentication, documentation, and scalable architecture.",
    features: ["REST APIs", "GraphQL", "Authentication", "Documentation"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Robust server-side solutions with efficient database design, caching strategies, and cloud deployment.",
    features: ["Database Design", "Cloud Deployment", "Server Architecture", "Data Migration"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Smartphone,
    title: "UI/UX Implementation",
    description: "Beautiful, intuitive interfaces that provide exceptional user experiences across all devices.",
    features: ["Modern UI", "Animations", "Cross-browser", "Accessibility"],
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Palette,
    title: "Custom Solutions",
    description: "Unique projects tailored to your specific requirements. Let's discuss your vision and bring it to life.",
    features: ["Consulting", "Prototyping", "Integration", "Maintenance"],
    color: "from-pink-500 to-rose-500",
  },
];

export default function ServicesPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
    <Navbar/>
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12 max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Freelance <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional development services to bring your ideas to life. From AI-powered applications to full-stack web solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-linear-to-br ${service.color} p-0.5 mb-6`}>
                    <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <div className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${service.color} mr-3`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-linear-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's collaborate to turn your vision into reality. Whether it's a complex AI solution or a modern web application, I'm here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsContactOpen(true)}
              className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              Get In Touch
            </button>
            <Link
              href="/#projects"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-medium hover:bg-white/20 transition-colors"
            >
              View My Work
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
    <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>

  );
}
