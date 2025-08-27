import { Button } from "@/components/ui/button";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import profileImage from "@/assets/ajith-profile.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-section min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-up">
            <div className="inline-block px-6 py-3 glass-card mb-8 animate-scale-in rounded-full border border-primary/20">
              <span className="text-sm font-semibold text-primary flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                Available for DevOps Opportunities
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 leading-none tracking-tight">
              <span className="block text-foreground font-extrabold bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent drop-shadow-lg">
                Ajith P
              </span>
              <span className="gradient-text font-bold text-3xl md:text-5xl lg:text-6xl block mt-2 tracking-wide">
                DevOps Engineer
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Aspiring DevOps Engineer & Cloud Enthusiast. Recent B.Tech graduate passionate about 
              <span className="text-primary font-medium"> automation, infrastructure as code</span>, and 
              building scalable cloud solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("projects")}
                className="glow-primary hover:shadow-glow-primary transition-all duration-300 group bg-gradient-primary text-white font-semibold px-8 py-4 rounded-xl"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="border-border hover:bg-surface-elevated font-semibold px-8 py-4 rounded-xl backdrop-blur-sm"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">2025</div>
                <div className="text-sm text-muted-foreground">Graduate</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-secondary">5+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">2</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 max-w-md lg:max-w-lg animate-fade-up">
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-3xl animate-glow-pulse"></div>
              
              {/* Profile image container */}
              <div className="relative glass-card p-8 rounded-full">
                <img
                  src={profileImage}
                  alt="Ajith P - DevOps Engineer"
                  className="w-full h-full object-cover rounded-full shadow-elevated"
                />
              </div>
              
              {/* Floating tech badges */}
              <div className="absolute -top-4 -right-4 glass-card px-3 py-2 rounded-full animate-bounce-gentle">
                <span className="text-xs font-medium text-primary">AWS</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass-card px-3 py-2 rounded-full animate-bounce-gentle" style={{ animationDelay: "1s" }}>
                <span className="text-xs font-medium text-secondary">Docker</span>
              </div>
              
              <div className="absolute top-1/2 -left-8 glass-card px-3 py-2 rounded-full animate-bounce-gentle" style={{ animationDelay: "2s" }}>
                <span className="text-xs font-medium text-primary">DevOps</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="p-2 glass-card rounded-full hover:bg-surface-elevated transition-colors"
          >
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;