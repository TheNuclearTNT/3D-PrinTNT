import { Card, CardContent } from "@/components/ui/card";
import { Box, Printer, Palette, Zap } from "lucide-react";

const skills = [
  {
    icon: Box,
    title: "3D Modeling",
    description: "Expert in creating detailed 3D models using industry-standard software for various applications."
  },
  {
    icon: Printer,
    title: "3D Printing",
    description: "Precision printing with optimal settings for quality results across different materials and technologies."
  },
  {
    icon: Palette,
    title: "Design",
    description: "Strong aesthetic sense with focus on form, function, and visual appeal in every creation."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Constantly exploring new techniques and pushing the boundaries of what's possible in 3D creation."
  }
];

const About = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About My <span className="bg-gradient-primary bg-clip-text text-transparent">Craft</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            With a passion for bringing digital concepts into the physical world, I specialize in creating 
            intricate 3D models and transforming them into tangible objects through precision printing. 
            Every project is an opportunity to push creative boundaries and explore new possibilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <skill.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;