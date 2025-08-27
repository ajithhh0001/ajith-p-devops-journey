import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users, Zap } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "GamePlan",
      subtitle: "Sports Management Web Platform",
      date: "March 2025",
      description: "A comprehensive full-stack web application designed for sports event management, turf booking, and consultation services. Features real-time notifications and secure user authentication.",
      features: [
        "Real-time event notifications",
        "Secure user authentication & authorization", 
        "Turf booking system with availability tracking",
        "Consultation scheduling and management",
        "Responsive design for all devices"
      ],
      techStack: ["Node.js", "Express.js", "HTML", "CSS", "JavaScript", "MongoDB"],
      category: "Full-Stack Development",
      status: "Completed",
      links: {
        github: "https://github.com/AKSHAY-PV-8/P1-GAME-PLAN",
        live: "#"
      }
    },
    {
      title: "IIRG",
      subtitle: "Ingredients Inspired Recipe Generator",
      date: "October 2024", 
      description: "An innovative web application that suggests personalized recipes based on available ingredients, helping reduce food waste while discovering new culinary possibilities.",
      features: [
        "Ingredient-based recipe suggestions",
        "Smart algorithm for recipe matching",
        "Nutritional information display",
        "Waste reduction tracking",
        "User-friendly interface design"
      ],
      techStack: ["HTML", "CSS", "JavaScript", "API Integration"],
      category: "Frontend Development",
      status: "Completed",
      links: {
        github: "#",
        live: "#"
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-success/10 text-success border-success/20";
      case "In Progress":
        return "bg-warning/10 text-warning border-warning/20";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <section id="projects" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <Badge variant="outline" className="mb-4">
              Featured Projects
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Building <span className="gradient-text">Real Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore my latest projects showcasing full-stack development skills, 
              problem-solving abilities, and passion for creating user-centered applications.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="glass-card border-border/50 hover:shadow-glow-primary transition-all duration-300 group animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    
                    {/* Project Info */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <div className="flex items-center space-x-4 mb-3">
                          <Badge 
                            variant="outline"
                            className={getStatusColor(project.status)}
                          >
                            {project.status}
                          </Badge>
                          <div className="flex items-center text-muted-foreground text-sm">
                            <Calendar className="h-4 w-4 mr-1" />
                            {project.date}
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-lg text-secondary font-medium mb-4">
                          {project.subtitle}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <Zap className="h-4 w-4 mr-2 text-primary" />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <li 
                              key={featureIndex}
                              className="flex items-start space-x-2 text-muted-foreground"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4">
                        {project.links.github !== "#" && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="group/btn border-border hover:bg-surface-elevated"
                            onClick={() => window.open(project.links.github, '_blank')}
                          >
                            <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                            View Code
                            <ExternalLink className="h-3 w-3 ml-2" />
                          </Button>
                        )}
                        {project.links.live !== "#" && (
                          <Button 
                            variant="default" 
                            size="sm" 
                            className="glow-primary group/btn"
                            onClick={() => window.open(project.links.live, '_blank')}
                          >
                            <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                            Live Demo
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Tech Stack & Category */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">
                          Category
                        </h4>
                        <Badge 
                          variant="secondary"
                          className="bg-secondary/10 text-secondary border-secondary/20"
                        >
                          {project.category}
                        </Badge>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-4">
                          Technology Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex}
                              variant="outline"
                              className="bg-surface-elevated border-border hover:bg-accent transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Project Stats */}
                      <Card className="bg-gradient-card border-border/50">
                        <CardContent className="p-4">
                          <h5 className="font-medium text-foreground mb-3 flex items-center">
                            <Users className="h-4 w-4 mr-2 text-primary" />
                            Project Impact
                          </h5>
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex justify-between">
                              <span>Type:</span>
                              <span className="text-foreground">Personal Project</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Duration:</span>
                              <span className="text-foreground">2-3 months</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Role:</span>
                              <span className="text-foreground">Full-Stack Developer</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-up">
            <Card className="glass-card border-border/50 bg-gradient-card max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  🚀 More Projects Coming Soon
                </h3>
                <p className="text-muted-foreground mb-6">
                  I'm constantly working on new projects, especially focused on DevOps automation, 
                  cloud infrastructure, and CI/CD implementations.
                </p>
                <Button variant="outline" className="border-border">
                  <Github className="h-4 w-4 mr-2" />
                  View All on GitHub
                  <ExternalLink className="h-3 w-3 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;