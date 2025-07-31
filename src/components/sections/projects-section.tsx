import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Shop Za Kenya – E-commerce Brand",
    role: "Brand creator, digital strategist",
    description: "Developed the brand identity, designed the website, and created a digital marketing strategy.",
    tools: ["Canva", "HTML/CSS", "Google Analytics"],
    results: "40% increase in engagement in the first 3 months",
  },
  {
    title: "Clean Sparkle Outlook – Cleaning Business Website",
    role: "Web designer & content strategist",
    description: "Built a four-page website (Home, Services, Gallery, Contact), optimized for SEO and user experience.",
    tools: ["WordPress", "SEO Tools", "Canva"],
    results: "Improved client booking by 25% after launch",
  },
  {
    title: "Mamanina Furniture – Social Media Campaign",
    role: "Digital marketer & designer",
    description: "Designed ad creatives, scheduled posts, and ran Facebook and Instagram Ads.",
    tools: ["Meta Business Suite", "Adobe Photoshop"],
    results: "Reached 50k+ potential customers in 2 months",
  },
  {
    title: "Basic PLC Logic Simulation",
    role: "PLC hobbyist/learner",
    description: "Created a simple ladder logic program to automate a conveyor system using TIA Portal.",
    tools: ["TIA Portal", "Ladder Logic"],
    purpose: "Demonstrating basic automation and tech interest",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full flex-1 flex items-center justify-center py-12 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-headline">{project.title}</CardTitle>
                <CardDescription>{project.role}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Tools Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="outline">{tool}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm">{project.results ? "Results:" : "Purpose:"}</h4>
                  <p className="text-muted-foreground">{project.results || project.purpose}</p>
                </div>
              </CardContent>
              <CardFooter>
                 <Button variant="link" className="p-0 h-auto" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        View Project <ArrowUpRight className="ml-1 h-4 w-4" />
                    </a>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
