import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Megaphone, Brush, Code, Handshake, Cpu, Target, Users, Bot, BarChart, Presentation, Lightbulb } from "lucide-react";

const skills = {
  "Product Management Tools": {
    icon: <Target className="w-8 h-8 text-primary" />,
    items: ["Trello", "Notion", "Jira", "Miro"],
  },
  "User Research & UX": {
    icon: <Users className="w-8 h-8 text-primary" />,
    items: ["Figma", "Adobe XD", "surveys", "usability testing"],
  },
  "Prototyping & Wireframing": {
    icon: <Bot className="w-8 h-8 text-primary" />,
    items: ["Figma", "Canva"],
  },
  "Data-Driven Decision Making": {
    icon: <BarChart className="w-8 h-8 text-primary" />,
    items: ["Google Analytics", "Meta Ads Manager"],
  },
  "Marketing & Growth": {
    icon: <Megaphone className="w-8 h-8 text-primary" />,
    items: ["SEO", "email campaigns", "social media strategy"],
  },
  "Communication": {
    icon: <Presentation className="w-8 h-8 text-primary" />,
    items: ["Client management", "team collaboration", "stakeholder reporting"],
  },
  "Basic Tech": {
    icon: <Code className="w-8 h-8 text-primary" />,
    items: ["HTML", "CSS", "JavaScript", "Python", "React", "Tailwind", "Node.js", "Next.js", "APIs", "Databases"],
  },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
          Skills Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, { icon, items }]) => (
            <Card key={category} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4">
                {icon}
                <CardTitle className="font-headline">{category}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
