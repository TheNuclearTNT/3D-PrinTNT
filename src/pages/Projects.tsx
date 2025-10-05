import NavBar from "@/components/NavBar";
import ProjectGallery from "@/components/ProjectGallery";

const Projects = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen pt-16">
        <ProjectGallery />
      </div>
    </>
  );
};

export default Projects;
