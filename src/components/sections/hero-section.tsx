import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Dribbble, Globe } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      <path d="M14.05 14.95A8.91 8.91 0 0 1 12.03 16.8c-1.3.6-2.6.9-3.8.9h-.03c-1.3-.1-2.6-.4-3.8-1-1.2-.6-2.2-1.4-3.1-2.3-1-1-1.7-2-2.3-3.1-.6-1.2-.9-2.5-1-3.8v-.03c.1-1.3.4-2.6 1-3.8.6-1.2 1.4-2.2 2.3-3.1 1-1 2-1.7 3.1-2.3 1.2-.6 2.5-.9 3.8-1h.03c1.3.1 2.6.4 3.8 1 .6.3 1.2.7 1.7 1.1" />
    </svg>
  );

const HeroSection = () => {
  return (
    <section id="home" className="w-full flex-1 flex items-center justify-center bg-background py-12 animate-fade-in-up">
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
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" /> Email
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="tel:0714955458">
                <Phone className="mr-2 h-4 w-4" /> Phone
              </a>
            </Button>
            <Button variant="outline" asChild>
               <a href="https://wa.me/254714955458" target="_blank" rel="noopener noreferrer">
                <WhatsappIcon className="mr-2 h-4 w-4" /> WhatsApp
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
               <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Personal Website">
                <Globe className="h-5 w-5" />
              </a>
            </Button>
             <Button variant="ghost" size="icon" asChild>
               <a href="https://github.com/Rayjuxtnx" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
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
