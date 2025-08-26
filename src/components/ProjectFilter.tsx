import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Grid, List } from "lucide-react";

interface ProjectFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  projectCount: number;
}

const ProjectFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
  viewMode,
  onViewModeChange,
  projectCount
}: ProjectFilterProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === "All" ? "default" : "outline"}
          onClick={() => onCategoryChange("All")}
          size="sm"
        >
          All Projects
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => onCategoryChange(category)}
            size="sm"
          >
            {category}
          </Button>
        ))}
      </div>
      
      <div className="flex items-center gap-4">
        <Badge variant="secondary" className="text-sm">
          {projectCount} {projectCount === 1 ? 'project' : 'projects'}
        </Badge>
        
        <div className="flex gap-1 p-1 bg-muted rounded-lg">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewModeChange('grid')}
            className="h-8 w-8 p-0"
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewModeChange('list')}
            className="h-8 w-8 p-0"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;