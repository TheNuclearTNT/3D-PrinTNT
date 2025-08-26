import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
}

const ProjectCard = ({ title, description, image, category }: ProjectCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden bg-gradient-card border-border hover:shadow-card transition-all duration-300 hover:scale-[1.02]">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-accent">{category}</span>
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;