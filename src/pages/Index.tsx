import Hero from "@/components/Hero";
import ProjectGallery from "@/components/ProjectGallery";
import About from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProjectGallery />
      <About />
    </div>
  );
};

export default Index;
