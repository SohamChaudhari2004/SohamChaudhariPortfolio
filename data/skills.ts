
import { LucideIcon, Code, Server, Database, Settings, Brain, BarChart, Globe, Cpu, Heart } from "lucide-react";

export type SkillCategory = 
  | "Programming Languages" 
  | "AI/ML" 
  | "Data Science" 
  | "Web Development" 
  | "Databases" 
  | "DevOps & Collaboration"
  | "Interests";

export interface Skill {
  name: string;
  category: SkillCategory;
  icon: string; // URL to the icon
}

// Helper to get Simple Icons URL
const getIcon = (slug: string) => `https://cdn.simpleicons.org/${slug}/white`;
// Helper for generic icons or when Simple Icons doesn't have it
const getGenericIcon = (name: string) => `https://ui-avatars.com/api/?name=${name}&background=random&color=fff&size=32`;


export const skills: Skill[] = [
  // Programming Languages
  { name: "Python", category: "Programming Languages", icon: getIcon("python") },
  { name: "JavaScript", category: "Programming Languages", icon: getIcon("javascript") },
  { name: "Java", category: "Programming Languages", icon: getIcon("openjdk") },
  { name: "SQL", category: "Programming Languages", icon: getIcon("sqlite") },

  // AI/ML
  { name: "PyTorch", category: "AI/ML", icon: getIcon("pytorch") },
  { name: "TensorFlow", category: "AI/ML", icon: getIcon("tensorflow") },
  { name: "LangChain", category: "AI/ML", icon: getIcon("langchain") },
  { name: "LangGraph", category: "AI/ML", icon: getGenericIcon("LG") },
  { name: "Transformers", category: "AI/ML", icon: getIcon("huggingface") },
  { name: "Neural Networks", category: "AI/ML", icon: getGenericIcon("NN") },
  { name: "Computer Vision", category: "AI/ML", icon: getIcon("opencv") },

  // Data Science
  { name: "NumPy", category: "Data Science", icon: getIcon("numpy") },
  { name: "Pandas", category: "Data Science", icon: getIcon("pandas") },
  { name: "Scikit-learn", category: "Data Science", icon: getIcon("scikitlearn") },
  { name: "Statistical Analysis", category: "Data Science", icon: getGenericIcon("SA") },
  { name: "Data Preprocessing", category: "Data Science", icon: getGenericIcon("DP") },
  { name: "EDA", category: "Data Science", icon: getGenericIcon("EDA") },

  // Web Development
  { name: "ReactJS", category: "Web Development", icon: getIcon("react") },
  { name: "NodeJS", category: "Web Development", icon: getIcon("nodedotjs") },
  { name: "ExpressJS", category: "Web Development", icon: getIcon("express") },
  { name: "Flask", category: "Web Development", icon: getIcon("flask") },
  { name: "HTML5", category: "Web Development", icon: getIcon("html5") },
  { name: "CSS3", category: "Web Development", icon: getIcon("css3") },

  // Databases
  // MongoDB already listed above, but can repeat if needed or just keep unique. 
  // User listed it in both, I'll include it in both for completeness based on request.
  { name: "PostgreSQL", category: "Databases", icon: getIcon("postgresql") },
  { name: "MongoDB", category: "Databases", icon: getIcon("mongodb") },

  { name: "ChromaDB", category: "Databases", icon: getGenericIcon("CDB") },
  
  // DevOps & Collaboration
  { name: "Docker", category: "DevOps & Collaboration", icon: getIcon("docker") },
  { name: "Git", category: "DevOps & Collaboration", icon: getIcon("git") },
  { name: "GitHub", category: "DevOps & Collaboration", icon: getIcon("github") },
  { name: "Postman", category: "DevOps & Collaboration", icon: getIcon("postman") },

  // Interests
  { name: "Generative AI", category: "Interests", icon: getGenericIcon("GenAI") },
  { name: "Deep Learning", category: "Interests", icon: getGenericIcon("DL") },
  { name: "Web Development", category: "Interests", icon: getGenericIcon("Web") },
  { name: "Agentic AI", category: "Interests", icon: getGenericIcon("AI") },
];

export const categoryIcons: Record<SkillCategory, LucideIcon> = {
  "Programming Languages": Code,
  "AI/ML": Brain,
  "Data Science": BarChart,
  "Web Development": Globe,
  "Databases": Database,
  "DevOps & Collaboration": Settings,
  "Interests": Heart,
};
