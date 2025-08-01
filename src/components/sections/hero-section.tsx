"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Dribbble, Globe, MoreHorizontal, MessageCircle, ThumbsUp, Share2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { projects } from "@/lib/projects";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();

  const handleShare = async (project: (typeof projects)[0]) => {
    const projectUrl = `${window.location.origin}/projects/${project.slug}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: project.title,
          text: project.description,
          url: projectUrl,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(projectUrl);
        toast({
          title: 'Link Copied!',
          description: 'The project link has been copied to your clipboard.',
        });
      } catch (err) {
        console.error('Failed to copy text: ', err);
        toast({
            variant: "destructive",
            title: 'Error',
            description: 'Failed to copy project link.',
          });
      }
    }
  };

  return (
    <section id="home" className="w-full flex-1 bg-secondary/30 py-8">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <Card className="mb-8 shadow-md">
            <CardHeader className="flex flex-row items-center gap-4">
                 <Avatar className="w-16 h-16 border-2 border-primary">
                    <AvatarImage src="https://placehold.co/200x200.png" alt="Phillip Otieno" data-ai-hint="man portrait" />
                    <AvatarFallback>PO</AvatarFallback>
                </Avatar>
                <div>
                    <CardTitle className="font-headline text-2xl">Phillip Otieno</CardTitle>
                    <CardDescription>Digital Marketer | Web & Graphic Designer | Sales & Tech Enthusiast</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap items-center gap-2">
                    <Button variant="outline" size="sm" asChild>
                    <Link href="/contact">
                        <Mail className="mr-2 h-4 w-4" /> Email
                    </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                    <a href="tel:0714955458">
                        <Phone className="mr-2 h-4 w-4" /> Phone
                    </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
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
            </CardContent>
        </Card>

        <div className="space-y-8">
            {projects.slice(0, 3).map((project) => (
                <Card key={project.slug} className="shadow-md">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Avatar className="w-10 h-10 border">
                                    <AvatarImage src="https://placehold.co/200x200.png" alt="Phillip Otieno" data-ai-hint="man portrait" />
                                    <AvatarFallback>PO</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold">Phillip Otieno</p>
                                    <p className="text-xs text-muted-foreground">Posted a new project</p>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-5 w-5" />
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <h3 className="font-headline text-lg mb-2">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                         <Link href={`/projects/${project.slug}`}>
                            <div className="relative w-full h-64 rounded-lg overflow-hidden border">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    className="hover:scale-105 transition-transform duration-300"
                                    data-ai-hint={project.imageHint}
                                />
                            </div>
                        </Link>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center border-t pt-4">
                       <div className="flex gap-1 sm:gap-2 text-muted-foreground flex-wrap">
                            <Button variant="ghost" size="sm">
                                <ThumbsUp className="mr-2" />
                                20k Likes
                            </Button>
                            <Button variant="ghost" size="sm" disabled>
                                <MessageCircle className="mr-2" />
                                Comment
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => handleShare(project)}>
                                <Share2 className="mr-2" />
                                Share
                            </Button>
                       </div>
                        <Button variant="link" size="sm" asChild>
                            <Link href={`/projects/${project.slug}`}>
                                View Project
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
             <div className="text-center">
                <Button asChild>
                    <Link href="/projects">View All Projects</Link>
                </Button>
             </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
