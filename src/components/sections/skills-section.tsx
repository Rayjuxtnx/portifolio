import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Megaphone, Brush, Code, Handshake, Cpu } from "lucide-react";

const skills = {
  "Digital Marketing": {
    icon: <Megaphone className="w-8 h-8 text-primary" />,
    items: ["SEO & SEM", "Google Ads", "Facebook/Meta Ads", "Email Marketing", "Mailchimp", "Constant Contact", "Content Strategy", "Analytics", "Google Analytics", "Meta Insights"],
  },
  "Design Tools": {
    icon: <Brush className="w-8 h-8 text-primary" />,
    items: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Figma"],
  },
  "Web Development": {
    icon: <Code className="w-8 h-8 text-primary" />,
    items: ["HTML", "CSS", "JavaScript", "WordPress", "Webflow", "Basic Python", "FastAPI"],
  },
  "Sales & Communication": {
    icon: <Handshake className="w-8 h-8 text-primary" />,
    items: ["Cold Calling", "Lead Generation", "Customer Support", "Client Relationship Building"],
  },
  "Tech / Other": {
    icon: <Cpu className="w-8 h-8 text-primary" />,
    items: ["PLC Logic Basics", "Ladder Logic", "TIA Portal", "Project Management", "Trello", "Notion"],
  },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
          Skills Summary
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
