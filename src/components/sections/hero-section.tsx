import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Dribbble, Globe } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section id="home" className="w-full min-h-screen flex items-center justify-center bg-background py-24 animate-fade-in-up">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="flex flex-col items-center space-y-6">
          <Avatar className="w-32 h-32 border-4 border-primary shadow-lg animate-fade-in-up" style={{animationDelay: "0.2s"}}>
            <AvatarImage src="https://placehold.co/200x200.png" alt="Phillip Otieno" data-ai-hint="man portrait" />
            <AvatarFallback>PO</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter animate-hacker-glitch" style={{animationDelay: "0.4s"}}>Phillip Otieno</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: "0.6s"}}>
              Digital Marketer | Web & Graphic Designer | Sales & Tech Enthusiast
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 animate-fade-in-up" style={{animationDelay: "0.8s"}}>
            <Button variant="outline" asChild>
              <a href="mailto:phillip.otieno@example.com">
                <Mail className="mr-2 h-4 w-4" /> Email
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="tel:+1234567890">
                <Phone className="mr-2 h-4 w-4" /> Phone
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
               <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Personal Website">
                <Globe className="h-5 w-5" />
              </a>
            </Button>
             <Button variant="ghost" size="icon" asChild>
               <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
             <Button variant="ghost" size="icon" asChild>
               <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
                <Dribbble className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
