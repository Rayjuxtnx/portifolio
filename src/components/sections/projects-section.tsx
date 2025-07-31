import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const projects = [
  {
    title: "Agile Project Management for 'SyncUp' App",
    role: "Product Coordinator",
    description: "Led the project lifecycle for a new productivity app, 'SyncUp', from ideation to launch using Agile methodologies. Managed backlogs, sprints, and stakeholder communication.",
    tools: ["Jira", "Trello", "Notion", "Miro"],
    results: "Successfully launched the MVP on time, resulting in a 20% increase in team productivity.",
    image: "https://placehold.co/600x400.png",
    imageHint: "app interface"
  },
  {
    title: "UX Redesign for 'ConnectNow' Social Platform",
    role: "UX Researcher & Designer",
    description: "Conducted comprehensive user research, including surveys and usability tests, to identify pain points. Redesigned the user flow and interface for better engagement.",
    tools: ["Figma", "Adobe XD", "User Surveys"],
    results: "Improved user satisfaction by 35% and increased session duration by 15%.",
    image: "https://placehold.co/600x400.png",
    imageHint: "user experience"
  },
  {
    title: "Interactive Prototype for 'FinTrack' App",
    role: "UI/UX Designer",
    description: "Created high-fidelity, interactive prototypes and wireframes for a new financial tracking mobile app. Focused on intuitive navigation and a clean user interface.",
    tools: ["Figma", "Canva"],
    results: "Secured stakeholder buy-in and provided a clear blueprint for the development team.",
    image: "https://placehold.co/600x400.png",
    imageHint: "mobile app"
  },
  {
    title: "Marketing Campaign Analysis for 'EcoWear'",
    role: "Data Analyst",
    description: "Analyzed marketing campaign performance using Google Analytics and Meta Ads Manager. Identified key trends and provided data-driven recommendations for optimization.",
    tools: ["Google Analytics", "Meta Ads Manager"],
    results: "Increased campaign ROI by 25% by reallocating budget to top-performing channels.",
    image: "https://placehold.co/600x400.png",
    imageHint: "charts analytics"
  },
  {
    title: "Growth Strategy for 'Artisan Goods' E-commerce",
    role: "Digital Marketing Strategist",
    description: "Developed and executed a multi-channel growth strategy focusing on SEO, email marketing, and social media to increase online visibility and drive sales.",
    tools: ["SEO Tools", "Mailchimp", "Social Media"],
    results: "Achieved a 50% increase in organic traffic and grew the email subscriber list by 30% in 6 months.",
    image: "https://placehold.co/600x400.png",
    imageHint: "marketing strategy"
  },
  {
    title: "Full-Stack Portfolio Website (This Site!)",
    role: "Full-Stack Developer",
    description: "Designed and developed this personal portfolio website from scratch. Built with a modern tech stack to showcase my skills in web development, API integration, and database management.",
    tools: ["Next.js", "React", "Tailwind CSS", "Node.js", "APIs"],
    results: "A fully responsive, high-performance web application to serve as my digital resume.",
    image: "https://placehold.co/600x400.png",
    imageHint: "web design"
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full flex-1 flex items-center justify-center py-12 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative w-full h-48">
                <Image 
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
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
