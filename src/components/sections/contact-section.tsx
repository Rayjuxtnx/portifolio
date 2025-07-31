import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Dribbble, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="w-full flex-1 flex items-center justify-center py-12 border-t">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
            Let’s work together!
          </h2>
          <p className="text-muted-foreground mb-8">
            I’m available for full-time roles, internships, or freelance projects. Feel free to reach out.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" asChild>
              <a href="mailto:phillip.otieno@example.com">
                <Mail className="mr-2 h-4 w-4" /> Get in Touch
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> Connect on LinkedIn
              </a>
            </Button>
          </div>
          <div className="flex justify-center items-center gap-6 mt-12">
             <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-6 w-6" />
                <span className="sr-only">Phone</span>
             </a>
             <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Globe className="h-6 w-6" />
                <span className="sr-only">Website</span>
             </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
                 <span className="sr-only">GitHub</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Dribbble className="h-6 w-6" />
                <span className="sr-only">Dribbble</span>
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
