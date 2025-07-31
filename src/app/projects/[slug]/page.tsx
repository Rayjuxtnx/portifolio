import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="w-full flex-1 flex items-center justify-center py-12 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader>
            <Button variant="ghost" size="sm" asChild className="mb-4 w-fit p-0 h-auto">
                <Link href="/projects">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Projects
                </Link>
            </Button>
            <div className="relative w-full h-64 mb-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
                data-ai-hint={project.imageHint}
              />
            </div>
            <CardTitle className="font-headline text-3xl md:text-4xl">{project.title}</CardTitle>
            <CardDescription className="text-lg">{project.role}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            <div>
              <h4 className="font-semibold mb-2 text-md">Tools Used:</h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <Badge key={tool} variant="secondary">{tool}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-md">Results:</h4>
              <p className="text-muted-foreground">{project.results}</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button disabled>View Live Project (Coming Soon)</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
    return projects.map((project) => ({
      slug: project.slug,
    }));
  }
