import ProjectCard from "./ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    id: 1,
    title: "Mechanical Guardian",
    description: "A detailed robotic character design featuring intricate mechanical components and futuristic aesthetics. Modeled with precision for animation and 3D printing.",
    image: project1,
    category: "3D Model"
  },
  {
    id: 2,
    title: "Dragon Miniature",
    description: "Hand-crafted dragon figurine brought to life through precision 3D printing. Perfect layer adhesion and fine detail reproduction showcase printing expertise.",
    image: project2,
    category: "3D Print"
  },
  {
    id: 3,
    title: "Future Architecture",
    description: "Modern architectural visualization showcasing clean lines and innovative design principles. Created for conceptual presentation and client visualization.",
    image: project3,
    category: "3D Model"
  },
  {
    id: 4,
    title: "Geometric Vessels",
    description: "Collection of decorative vases and objects exploring mathematical forms and organic curves. Each piece optimized for multi-color 3D printing.",
    image: project4,
    category: "3D Print"
  }
];

const ProjectGallery = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest 3D modeling work and printed creations, 
            each piece crafted with attention to detail and creative vision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;