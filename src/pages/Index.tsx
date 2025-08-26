import Hero from "@/components/Hero";
import ProjectGallery from "@/components/ProjectGallery";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProjectGallery />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
