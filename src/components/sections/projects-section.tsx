import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full flex-1 flex items-center justify-center py-12 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.slug} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative w-full h-48">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{objectFit: "cover"}}
                  data-ai-hint={project.imageHint}
                />
              </div>
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
                  <h4 className="font-semibold mb-2 text-sm">Results:</h4>
                  <p className="text-muted-foreground">{project.results}</p>
                </div>
              </CardContent>
              <CardFooter>
                 <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href={`/projects/${project.slug}`}>
                        View Project <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
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
