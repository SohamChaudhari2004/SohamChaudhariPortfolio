export interface Achievement {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  date?: string;
}

export const achievements: Achievement[] = [
  {
    title: "2nd Position IIT Ropar",
    subtitle: "@Medino'sXAdvitiya'25",
    description: "Secured Runner Up(2nd) position at Medino'sXAdvitiya'25 2025, Hosted at IIT Ropar. The event was a online hackathon that challenged my AI/ML skills and I was able to create a symptom analyzer chatbot and a OCR based prescription reader.",
    date: "Feb 2025"
  },
  {
    title: "Top 10 IIIT Dharwad",
    subtitle: "@Hack2Future 2024",
    description: "Secured a top 10 position in the Hack2Future 2024 hackathon at IIIT Dharwad, competing among 1,700+ participants. Developed Vision AI, an advanced AI-powered solution for efficient video and image analysis, leveraging machine learning to enhance visual data processing. The project showcased innovation in real-time object detection, scene recognition, and automated insights.",
    date: "October 2024"
  },
  
];
