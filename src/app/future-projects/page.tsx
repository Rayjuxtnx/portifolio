import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FlaskConical, Bot, Lightbulb, Users } from "lucide-react";

const futureProjects = [
    {
        icon: <Bot className="w-6 h-6" />,
        title: "AI-Powered Personal Finance Advisor",
        description: "An intelligent chatbot that provides personalized financial advice, budget tracking, and investment suggestions based on user goals and spending habits."
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Community Skill-Sharing Platform",
        description: "A localized platform where users can offer and find services or lessons, from music tutoring to plumbing, fostering a stronger community connection."
    },
    {
        icon: <Lightbulb className="w-6 h-6" />,
        title: "Interactive Storytelling Game for Kids",
        description: "A mobile game that allows children to create their own adventures by making choices that influence the story's outcome, promoting creativity and reading."
    }
]

export default function FutureProjectsPage() {
  return (
    <section className="w-full flex-1 flex items-center justify-center py-12 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                <FlaskConical className="w-10 h-10" />
            </div>
            <CardTitle className="font-headline text-3xl md:text-4xl">Future Projects</CardTitle>
            <CardDescription>Ideas and concepts I'm excited to explore next.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {futureProjects.map((project, index) => (
                <div key={index} className="flex items-start gap-4">
                    <div className="text-primary bg-primary/10 p-3 rounded-full">
                        {project.icon}
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-foreground">{project.title}</h3>
                        <p className="text-muted-foreground">{project.description}</p>
                    </div>
                </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
