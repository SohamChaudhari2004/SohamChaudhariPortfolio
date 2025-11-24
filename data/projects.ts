export interface Project {
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
  image: string;
  aspect: string;
  category: string;
}

export const projects: Project[] = [
  {
    title: "Gemini Clone",
    description: "A clone of Google's Gemini, powered by the Gemini-1.5-flash API, replicating core functionalities for advanced AI-driven conversations and tasks.",
    githubLink: "https://github.com/SohamChaudhari2004/Gemini_Clone",
    liveLink: "https://gemini-clone-three-bay.vercel.app/",
    image: "/assets/Gemini.png",
    aspect: "aspect-[4/3]",
    category: "ai-ml",
  },
  {
    title: "Cold email generator",
    description: "A generative AI project utilizing Langchain and Llama 3.1 to develop advanced language models that generate context-aware responses and automate various tasks efficiently.",
    githubLink: "https://github.com/SohamChaudhari2004/Cold_Email_Generator",
    liveLink: "https://cold-email-generator-vj9l.onrender.com/",
    image: "/assets/ColdEmailGenerator.png",
    aspect: "aspect-[3/4]",
    category: "ai-ml",
  },
  {
    title: "Sociolair",
    description: "A web application built with the MERN stack, designed as a social media platform tailored for sociopaths, offering unique features and interactions suited to this specific user base.",
    githubLink: "https://github.com/SohamChaudhari2004/SocioLair",
    liveLink: "",
    image: "/assets/Sociopedia.png",
    aspect: "aspect-square",
    category: "web-dev",
  },
  {
    title: "FilmWare",
    description: "A movie flashcard website built with ReactJS and CSS frameworks, allowing users to browse and interact with movie details through a dynamic and visually appealing interface.",
    githubLink: "https://github.com/SohamChaudhari2004/FilmWare",
    liveLink: "",
    image: "/assets/FilmWare.png",
    aspect: "aspect-[3/4]",
    category: "web-dev",
  },
  {
    title: "ChatBase",
    description: "A real-time chat application built with React and Firebase, allowing users to engage in instant messaging with seamless communication and data synchronization.",
    githubLink: "https://github.com/SohamChaudhari2004/ChatBase",
    liveLink: "",
    image: "",
    aspect: "aspect-[4/3]",
    category: "web-dev",
  },
  {
    title: "E-Commerce Website",
    description: "An e-commerce application built with the MERN stack, integrated with Stripe for payments and Cloudinary for efficient image storage and management, offering a seamless shopping experience.",
    githubLink: "https://github.com/SohamChaudhari2004/E-Commerce",
    liveLink: "",
    image: "",
    aspect: "aspect-[3/4]",
    category: "web-dev",
  },
  {
    title: "Food Saver",
    description: "A dynamic web application designed to efficiently distribute surplus food, connecting donors and recipients to reduce food waste and support communities in need.",
    githubLink: "https://github.com/SohamChaudhari2004/MiniProjSE_2k24",
    liveLink: "https://adorable-starlight-3a663d.netlify.app/",
    image: "/assets/FoodSaver.png",
    aspect: "aspect-[4/3]",
    category: "web-dev",
  },
  {
    title: "Chat With PDF",
    description: "An AI-powered tool that allows users to interact with PDF files through chat-based queries, enabling easy and efficient information retrieval.",
    githubLink: "https://github.com/SohamChaudhari2004/ChatWithPDF",
    liveLink: "https://chatwithpdf-sohamchaudhari2004.streamlit.app/",
    image: "/assets/ChatWithPdf.png",
    aspect: "aspect-square",
    category: "ai-ml",
  },
  {
    title: "VISION AI",
    description: "An AI-powered solution for efficient video and image analysis, leveraging advanced machine learning models to enhance visual data processing and superscaling solutions.",
    githubLink: "https://github.com/SohamChaudhari2004/hack_frontend",
    liveLink: "https://hack-frontend-eta.vercel.app/",
    image: "/assets/VisionAi.png",
    aspect: "aspect-[3/4]",
    category: "ai-ml",
  },
  {
    title: "Language-Detector",
    description: "A language detection application built using Python, FastAPI, and Streamlit, containerized with Docker, to detect and display the language of input text in real-time.",
    githubLink: "https://github.com/SohamChaudhari2004/Language-detection-Model",
    liveLink: "https://langdetection.streamlit.app/",
    image: "/assets/langDetectionBG.png",
    aspect: "aspect-[4/3]",
    category: "ai-ml",
  },
  {
    title: "Web scrapper",
    description: "A universal web scraper that extracts and formats structured data from web pages using AI models, with support for multiple output formats (JSON, CSV) and query-based responses.",
    githubLink: "https://github.com/SohamChaudhari2004/WebScraper",
    liveLink: "",
    image: "/assets/webScrapper.png",
    aspect: "aspect-square",
    category: "ai-ml",
  },
];

export const categories = ["All", "ai-ml", "web-dev"];
