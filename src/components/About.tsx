import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Box, Printer, Palette, Zap, Cpu, Settings, Award } from "lucide-react";

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

const equipment = [
  {
    category: "3D Printers",
    items: [
      "Prusa i3 MK3S+ (FDM)",
      "Elegoo Mars 3 Pro (Resin)",
      "Bambu Lab A1 mini (FDM)"
    ]
  },
  {
    category: "Software",
    items: [
      "Blender (Modeling & Sculpting)",
      "Fusion 360 (CAD Design)",
      "PrusaSlicer & ChiTuBox (Slicing)"
    ]
  },
  {
    category: "Materials",
    items: [
      "PLA, PETG, ABS, TPU",
      "Standard & Tough Resin",
      "Specialty Filaments"
    ]
  }
];

const achievements = [
  "5+ years of 3D modeling experience",
  "200+ successful print projects",
  "Featured in maker community showcases",
  "Custom commissions worldwide"
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Bio Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About My <span className="bg-gradient-primary bg-clip-text text-transparent">Craft</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              With over 5 years of experience in 3D modeling and printing, I've developed a passion for bringing digital concepts into the physical world. My journey started with curiosity about how things are made and evolved into a deep expertise in creating intricate 3D models and transforming them into tangible objects through precision printing. Every project is an opportunity to push creative boundaries and explore new possibilities in the intersection of art, technology, and craftsmanship.
            </p>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

          {/* Equipment & Experience */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Equipment */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Settings className="w-5 h-5" />
                  Equipment & Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {equipment.map((category, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-primary" />
                      {category.category}
                    </h4>
                    <div className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="text-muted-foreground text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Award className="w-5 h-5" />
                  Experience & Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Badge variant="secondary" className="w-6 h-6 p-0 flex items-center justify-center text-xs">
                      {index + 1}
                    </Badge>
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
                
                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-3">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Miniature Design</Badge>
                    <Badge variant="outline">Architectural Models</Badge>
                    <Badge variant="outline">Prototyping</Badge>
                    <Badge variant="outline">Custom Commissions</Badge>
                    <Badge variant="outline">Multi-Material Printing</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;