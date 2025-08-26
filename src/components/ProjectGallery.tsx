import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import ProjectModal from "./ProjectModal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import { Project } from "@/types/project";
import { useState } from "react";

const projects: Project[] = [
  {
    id: 1,
    title: "Mechanical Guardian",
    description: "A detailed robotic character design featuring intricate mechanical components and futuristic aesthetics.",
    fullDescription: "This mechanical guardian represents the perfect fusion of form and function. Every component was carefully designed with both aesthetic appeal and structural integrity in mind. The intricate details include fully articulated joints, weathered surface textures, and embedded LED housing for dramatic lighting effects. The model showcases advanced modeling techniques including non-destructive workflows and optimal topology for both rendering and 3D printing applications.",
    image: project1,
    gallery: [project1, project2], // Additional images for lightbox
    category: "3D Model",
    difficulty: "Advanced",
    printTime: "48 hours",
    materials: {
      material: "PLA+ / PETG",
      layerHeight: "0.2mm",
      infill: "15%",
      support: "Tree supports"
    },
    process: [
      "Concept sketching and reference gathering",
      "High-poly sculpting in ZBrush for detailed forms",
      "Retopology for clean, printable geometry",
      "UV mapping and texture creation",
      "Print preparation and support optimization",
      "Post-processing and finishing"
    ],
    featured: true
  },
  {
    id: 2,
    title: "Dragon Miniature",
    description: "Hand-crafted dragon figurine brought to life through precision 3D printing.",
    fullDescription: "This majestic dragon miniature showcases the incredible detail possible with modern resin 3D printing technology. Every scale, wing membrane, and facial feature has been meticulously crafted to create a piece that rivals traditional sculpting methods. The model features multiple pose variations and optional flame effects that can be printed separately for customization.",
    image: project2,
    gallery: [project2, project3],
    category: "3D Print",
    difficulty: "Intermediate",
    printTime: "12 hours",
    materials: {
      material: "Resin (Standard Grey)",
      layerHeight: "0.05mm",
      infill: "100% (Solid)",
      support: "Light supports"
    },
    process: [
      "Digital sculpting with fine detail work",
      "Pose iteration and joint planning",
      "Support structure optimization for resin printing",
      "Test prints for detail validation",
      "Final printing with optimal settings",
      "Cleaning, curing, and painting preparation"
    ]
  },
  {
    id: 3,
    title: "Future Architecture",
    description: "Modern architectural visualization showcasing clean lines and innovative design principles.",
    fullDescription: "This architectural concept explores the possibilities of sustainable future living spaces. The design incorporates flowing organic forms with cutting-edge materials and energy systems. Created for both visualization and potential scale model production, every element serves both aesthetic and functional purposes in the overall design narrative.",
    image: project3,
    gallery: [project3, project4],
    category: "3D Model",
    difficulty: "Advanced",
    materials: {
      material: "ABS / Wood PLA",
      layerHeight: "0.3mm",
      infill: "10%",
      support: "Minimal supports"
    },
    process: [
      "Architectural research and concept development",
      "CAD modeling with parametric design",
      "Environmental integration studies",
      "Rendering and presentation preparation",
      "Scale model optimization",
      "Documentation and technical drawings"
    ]
  },
  {
    id: 4,
    title: "Geometric Vessels",
    description: "Collection of decorative vases and objects exploring mathematical forms and organic curves.",
    fullDescription: "This collection represents an exploration of mathematical beauty translated into functional art. Each vessel is generated using algorithmic design principles, creating unique forms that are both aesthetically pleasing and structurally sound. The pieces are optimized for multi-material printing, allowing for stunning color combinations and surface effects.",
    image: project4,
    gallery: [project4, project1],
    category: "3D Print",
    difficulty: "Beginner",
    printTime: "6 hours each",
    materials: {
      material: "Multi-color PLA",
      layerHeight: "0.2mm",
      infill: "12%",
      support: "None required"
    },
    process: [
      "Mathematical form generation using parametric tools",
      "Optimization for printability without supports",
      "Color transition planning for multi-material printing",
      "Test prints for structural verification",
      "Production printing with quality control",
      "Post-processing and surface finishing"
    ]
  }
];

const ProjectGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = Array.from(new Set(projects.map(p => p.category)));
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  };

  const handlePreviousProject = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const previousIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[previousIndex]);
  };

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

        <div className="max-w-7xl mx-auto">
          <ProjectFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            projectCount={filteredProjects.length}
          />
          
          <div className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
              : 'space-y-6'
          }`}>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                viewMode={viewMode}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        </div>

        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onNext={handleNextProject}
          onPrevious={handlePreviousProject}
        />
      </div>
    </section>
  );
};

export default ProjectGallery;