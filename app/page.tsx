import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Footer from "@/components/ui/Footer";


export default function Home() {
  return (
    
    <main className="min-h-screen text-foreground selection:bg-primary/20">
    
    <Navbar />
      <Hero />
      <About />
      <Skills />
      <Achievements />
      {/* <Process /> */}
      <FeaturedWork />
      {/* <Services /> */}
      <Footer />
    
    </main>
  );
}
