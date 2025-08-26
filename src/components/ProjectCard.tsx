import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Calendar, Clock } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  viewMode: 'grid' | 'list';
  onClick: () => void;
}

const ProjectCard = ({ project, viewMode, onClick }: ProjectCardProps) => {
  if (viewMode === 'list') {
    return (
      <Card className="group cursor-pointer overflow-hidden bg-gradient-card border-border hover:shadow-card transition-all duration-300">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 aspect-[4/3] md:aspect-auto overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <CardContent className="flex-1 p-6">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{project.category}</Badge>
                {project.difficulty && (
                  <Badge variant="outline">{project.difficulty}</Badge>
                )}
              </div>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
              {project.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                {project.printTime && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {project.printTime}
                  </div>
                )}
                {project.materials && (
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.materials.material}
                  </div>
                )}
              </div>
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={(e) => {
                  e.stopPropagation();
                  onClick();
                }}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Eye className="w-4 h-4 mr-1" />
                View Details
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    );
  }

  return (
    <Card 
      className="group cursor-pointer overflow-hidden bg-gradient-card border-border hover:shadow-card transition-all duration-300 hover:scale-[1.02]"
      onClick={onClick}
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Button 
          variant="secondary" 
          size="sm" 
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
        >
          <Eye className="w-4 h-4 mr-1" />
          View
        </Button>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">{project.category}</Badge>
            {project.difficulty && (
              <Badge variant="outline" className="text-xs">{project.difficulty}</Badge>
            )}
          </div>
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
        {project.printTime && (
          <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            {project.printTime}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;