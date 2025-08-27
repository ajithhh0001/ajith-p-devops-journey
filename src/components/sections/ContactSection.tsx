import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  MessageCircle,
  ExternalLink
} from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    // For traditional form submission, we don't prevent default
    // FormSubmit.co requires normal form submission to avoid CORS issues
    setIsSubmitting(true);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ajithhh000@gmail.com",
      href: "mailto:ajithhh000@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9562459210",
      href: "tel:+919562459210",
      color: "text-secondary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kozhikode, Kerala",
      href: "https://maps.google.com/?q=Kozhikode,Kerala",
      color: "text-primary"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ajith--p",
      href: "https://linkedin.com/in/ajith--p",
      color: "text-primary"
    },
    {
      icon: Github,
      label: "GitHub", 
      value: "github.com/ajithhh000",
      href: "https://github.com/ajithhh000",
      color: "text-secondary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <Badge variant="outline" className="mb-4">
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm always excited to discuss DevOps opportunities, cloud projects, 
              or simply connect with fellow tech enthusiasts. Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-up">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center">
                  <MessageCircle className="h-6 w-6 mr-3 text-primary" />
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <Card key={item.label} className="glass-card border-border/50 hover:shadow-glow-primary transition-all duration-300">
                      <CardContent className="p-4">
                        <a 
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-4 group"
                        >
                          <div className={`p-3 rounded-lg bg-surface-elevated group-hover:scale-110 transition-transform`}>
                            <item.icon className={`h-5 w-5 ${item.color}`} />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-foreground">{item.label}</p>
                            <p className="text-muted-foreground group-hover:text-primary transition-colors">
                              {item.value}
                            </p>
                          </div>
                          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Connect on Social</h4>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <Card key={social.label} className="glass-card border-border/50 hover:shadow-glow-secondary transition-all duration-300">
                      <CardContent className="p-4">
                        <a 
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-4 group"
                        >
                          <div className={`p-2 rounded-lg bg-surface-elevated group-hover:scale-110 transition-transform`}>
                            <social.icon className={`h-4 w-4 ${social.color}`} />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-foreground">{social.label}</p>
                            <p className="text-sm text-muted-foreground group-hover:text-secondary transition-colors">
                              {social.value}
                            </p>
                          </div>
                          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-secondary transition-colors" />
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-up">
              <Card className="glass-card border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 text-foreground">
                    Send me a message
                  </h3>
                  
                  <form 
                    onSubmit={handleSubmit} 
                    action="https://formsubmit.co/ajithhh000@gmail.com" 
                    method="POST"
                    className="space-y-6"
                  >
                    {/* Hidden fields for FormSubmit.co configuration */}
                    <input type="hidden" name="_next" value={`${window.location.origin}/thank-you`} />
                    <input type="hidden" name="_subject" value="New message from portfolio contact form" />
                    <input type="hidden" name="_captcha" value="false" />
                    
                    <div>
                      <Label htmlFor="name" className="text-foreground">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="mt-2 bg-surface-elevated border-border focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-foreground">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="mt-2 bg-surface-elevated border-border focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-foreground">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or opportunity..."
                        rows={5}
                        required
                        className="mt-2 bg-surface-elevated border-border focus:border-primary resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full glow-primary hover:shadow-glow-primary transition-all duration-300 group"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Quick Response Note */}
              <Card className="glass-card border-border/50 bg-gradient-card mt-6">
                <CardContent className="p-6 text-center">
                  <h4 className="font-medium text-foreground mb-2">Quick Response</h4>
                  <p className="text-sm text-muted-foreground">
                    I typically respond to messages within 24 hours. 
                    For urgent matters, feel free to reach out via phone or LinkedIn.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;