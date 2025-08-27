import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Container, 
  GitBranch, 
  Code, 
  Server, 
  Database, 
  Settings,
  Workflow
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "DevOps Tools",
      icon: Settings,
      description: "Automation & CI/CD",
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "GitHub Actions", level: "Intermediate" },
        { name: "Jenkins", level: "Learning" },
        { name: "Ansible", level: "Learning" },
        { name: "Git", level: "Advanced" }
      ]
    },
    {
      title: "Cloud Platforms",
      icon: Cloud,
      description: "AWS Services",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      skills: [
        { name: "AWS EC2", level: "Learning" },
        { name: "AWS S3", level: "Learning" },
        { name: "AWS IAM", level: "Learning" },
        { name: "AWS CLI", level: "Learning" }
      ]
    },
    {
      title: "Infrastructure as Code",
      icon: Workflow,
      description: "Automation Scripts",
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "Terraform", level: "Learning" },
        { name: "CloudFormation", level: "Beginner" },
        { name: "Shell Scripting", level: "Intermediate" }
      ]
    },
    {
      title: "Containerization",
      icon: Container,
      description: "Container Technologies",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      skills: [
        { name: "Docker", level: "Intermediate" },
        { name: "Kubernetes", level: "Learning" },
        { name: "Container Registry", level: "Beginner" }
      ]
    },
    {
      title: "Programming",
      icon: Code,
      description: "Development Skills",
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "Python", level: "Intermediate" },
        { name: "Java", level: "Intermediate" },
        { name: "JavaScript", level: "Advanced" },
        { name: "C", level: "Intermediate" }
      ]
    },
    {
      title: "Web Development",
      icon: Server,
      description: "Full-stack Skills",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "HTML/CSS", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" }
      ]
    },
    {
      title: "Tools & Databases",
      icon: Database,
      description: "Supporting Technologies",
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "Linux (Ubuntu)", level: "Intermediate" },
        { name: "SQL", level: "Intermediate" },
        { name: "Jira", level: "Beginner" },
        { name: "GitHub", level: "Advanced" }
      ]
    },
    {
      title: "Version Control",
      icon: GitBranch,
      description: "Source Control",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "GitHub", level: "Advanced" },
        { name: "GitLab", level: "Learning" },
        { name: "Branching Strategies", level: "Intermediate" }
      ]
    }
  ];

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-success/10 text-success border-success/20";
      case "Intermediate":
        return "bg-primary/10 text-primary border-primary/20";
      case "Learning":
        return "bg-warning/10 text-warning border-warning/20";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <Badge variant="outline" className="mb-4">
              Technical Skills
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Technologies & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical skills across DevOps, cloud platforms, 
              and software development technologies.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className="glass-card border-border/50 hover:shadow-glow-primary hover:shadow-lg transition-all duration-300 group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2 rounded-lg ${category.bgColor} group-hover:scale-110 transition-transform`}>
                      <category.icon className={`h-5 w-5 ${category.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">
                        {category.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill.name}
                        className="flex items-center justify-between p-2 bg-surface-elevated rounded-lg hover:bg-accent transition-colors"
                      >
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <Badge 
                          variant="outline"
                          className={`text-xs ${getLevelBadgeColor(skill.level)}`}
                        >
                          {skill.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Learning Path Section */}
          <div className="mt-16 text-center animate-fade-up">
            <Card className="glass-card border-border/50 bg-gradient-card max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  🚀 Currently Expanding My Skills
                </h3>
                <p className="text-muted-foreground mb-6">
                  I'm actively learning and building projects to deepen my expertise in these areas
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {[
                    "AWS Solutions Architect",
                    "Kubernetes Administration", 
                    "Advanced Terraform",
                    "Monitoring with Prometheus",
                    "Security Best Practices"
                  ].map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="bg-secondary/10 text-secondary border-secondary/20 px-4 py-2"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;