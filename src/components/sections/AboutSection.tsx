import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Heart, Users, Lightbulb, Target, MapPin } from "lucide-react";

const AboutSection = () => {
  const softSkills = [
    { icon: Heart, label: "Adaptability", color: "text-primary" },
    { icon: Lightbulb, label: "Curiosity", color: "text-secondary" },
    { icon: Target, label: "Problem Solving", color: "text-primary" },
    { icon: Users, label: "Teamwork", color: "text-secondary" },
  ];

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <Badge variant="outline" className="mb-4">
              About Me
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Passionate About <span className="gradient-text">Cloud & Automation</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Recent Computer Science graduate with a deep passion for DevOps practices, 
              cloud technologies, and building efficient automation solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 animate-fade-up">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  As a recent B.Tech Computer Science graduate from Government Engineering College, Wayanad, 
                  I've developed a strong foundation in software development and discovered my passion for 
                  DevOps and cloud technologies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm actively learning and building hands-on projects with AWS, Docker, Terraform, 
                  Ansible, and CI/CD pipelines. My goal is to bridge the gap between development 
                  and operations while creating scalable, automated infrastructure solutions.
                </p>
              </div>

              {/* Career Objective */}
              <Card className="glass-card border-border/50">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary mb-3 flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    Career Objective
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    To contribute to innovative DevOps teams while continuously learning cutting-edge 
                    technologies and best practices in cloud infrastructure, automation, and deployment strategies.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right Content */}
            <div className="space-y-6 animate-fade-up">
              
              {/* Education Card */}
              <Card className="glass-card border-border/50 hover:shadow-glow-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        B.Tech in Computer Science & Engineering
                      </h4>
                      <p className="text-primary font-medium mb-2">
                        Government Engineering College, Wayanad
                      </p>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <span>Graduated 2025</span>
                        <div className="mx-2">•</div>
                        <span className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          Kerala, India
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Soft Skills */}
              <Card className="glass-card border-border/50">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-4">Core Strengths</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {softSkills.map((skill, index) => (
                      <div 
                        key={skill.label}
                        className="flex items-center space-x-3 p-3 bg-surface-elevated rounded-lg hover:bg-accent transition-colors"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <skill.icon className={`h-5 w-5 ${skill.color}`} />
                        <span className="text-sm font-medium">{skill.label}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Current Focus */}
              <Card className="glass-card border-border/50 bg-gradient-card">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Currently Learning</h4>
                  <div className="flex flex-wrap gap-2">
                    {["AWS Solutions Architecture", "Kubernetes", "Infrastructure as Code", "CI/CD Best Practices"].map((item, index) => (
                      <Badge 
                        key={item} 
                        variant="secondary" 
                        className="bg-secondary/10 text-secondary border-secondary/20"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;