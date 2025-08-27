import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, ArrowUp, Mail, Phone, Linkedin, Github } from "lucide-react";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const quickLinks = [{
    label: "About",
    href: "about"
  }, {
    label: "Skills",
    href: "skills"
  }, {
    label: "Projects",
    href: "projects"
  }, {
    label: "Contact",
    href: "contact"
  }];
  const socialLinks = [{
    icon: Mail,
    href: "mailto:ajithhh000@gmail.com",
    label: "Email"
  }, {
    icon: Linkedin,
    href: "https://linkedin.com/in/ajith--p",
    label: "LinkedIn"
  }, {
    icon: Github,
    href: "https://github.com/ajithhh000",
    label: "GitHub"
  }, {
    icon: Phone,
    href: "tel:+919562459210",
    label: "Phone"
  }];
  return <footer className="bg-surface border-t border-border/50">
      <div className="container mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <h3 className="text-2xl font-bold gradient-text mb-2">Ajith P</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Aspiring DevOps Engineer passionate about cloud automation, 
                  infrastructure as code, and building scalable solutions.
                </p>
              </div>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center">
                  <span className="mr-2">🎓</span>
                  B.Tech Computer Science, Govt. Engineering College Wayanad
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📍</span>
                  Kozhikode, Kerala, India
                </p>
                <p className="flex items-center">
                  <span className="mr-2">🚀</span>
                  Available for DevOps opportunities
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map(link => <li key={link.href}>
                    <button onClick={() => scrollToSection(link.href)} className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                      {link.label}
                    </button>
                  </li>)}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Let's Connect</h4>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map(social => <Button key={social.label} variant="outline" size="icon" asChild className="hover:bg-primary/10 hover:border-primary transition-colors">
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <social.icon className="h-4 w-4" />
                    </a>
                  </Button>)}
              </div>
              
              <div className="mt-6">
                <p className="text-sm text-muted-foreground mb-2">
                  Ready to discuss opportunities?
                </p>
                <Button variant="outline" size="sm" onClick={() => scrollToSection("contact")} className="hover:bg-primary/10 hover:border-primary">
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-border/50" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <span>© 2025 Ajith P </span>
              
              <span>
            </span>
            </div>
            
            
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;