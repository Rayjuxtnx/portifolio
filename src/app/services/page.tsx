import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Disc, PartyPopper, ShieldCheck, Network, Code, Server, Layers, Database, Cable, Megaphone, Search } from "lucide-react";

const services = {
  "Frontend Development": {
    icon: <Code className="w-8 h-8 text-primary" />,
    items: ["React", "Next.js", "Tailwind CSS", "Figma", "UX/UI"],
    description: "Creating beautiful, responsive, and user-friendly interfaces that provide a seamless user experience across all devices."
  },
  "Backend Development": {
    icon: <Server className="w-8 h-8 text-primary" />,
    items: ["Node.js", "Python", "Express", "REST APIs", "GraphQL"],
    description: "Building robust and scalable server-side applications, ensuring high performance and data security."
  },
  "Full-Stack Development": {
    icon: <Layers className="w-8 h-8 text-primary" />,
    items: ["MERN Stack", "Next.js", "System Architecture", "CI/CD"],
    description: "Developing complete web applications from the ground up, managing both the client-side and server-side logic."
  },
  "Database Integration": {
    icon: <Database className="w-8 h-8 text-primary" />,
    items: ["MongoDB", "PostgreSQL", "Firebase", "Database Design"],
    description: "Integrating and managing databases to ensure data is stored efficiently, securely, and is easily accessible."
  },
  "APIs": {
    icon: <Cable className="w-8 h-8 text-primary" />,
    items: ["REST API Design", "Third-Party Integration", "Authentication", "Webhooks"],
    description: "Designing and integrating APIs to connect services, automate workflows, and extend application functionality."
  },

  "Digital Marketing": {
    icon: <Megaphone className="w-8 h-8 text-primary" />,
    items: ["Social Media Marketing", "Content Creation", "Email Campaigns", "Meta Ads"],
    description: "Driving brand growth through strategic online marketing campaigns and engaging content tailored to your target audience."
  },
  "SEO": {
    icon: <Search className="w-8 h-8 text-primary" />,
    items: ["Keyword Research", "On-Page SEO", "Link Building", "Technical SEO"],
    description: "Optimizing your website to rank higher in search engine results, increasing organic traffic and online visibility."
  },
  "Event DJ": {
    icon: <Disc className="w-8 h-8 text-primary" />,
    items: ["Weddings", "Corporate Events", "Private Parties", "Virtual DJ"],
    description: "Bringing the right vibe to your special occasions with a professional and versatile music selection tailored to your event's theme and audience."
  },
  "Event Decoration": {
    icon: <PartyPopper className="w-8 h-8 text-primary" />,
    items: ["Weddings", "Themed Parties", "Corporate Functions", "Floral Arrangements"],
    description: "Transforming venues into unforgettable experiences with creative and elegant decoration solutions for any event."
  },
  "Cyber Security Consulting": {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    items: ["Vulnerability Assessment", "Penetration Testing", "Security Audits", "Incident Response"],
    description: "Protecting your digital assets with comprehensive security services, from identifying weaknesses to responding to threats."
  },
  "Networking Solutions": {
    icon: <Network className="w-8 h-8 text-primary" />,
    items: ["Network Design & Setup", "Configuration", "Troubleshooting", "Optimization"],
    description: "Building and maintaining robust and reliable network infrastructures to ensure seamless connectivity and performance."
  }
};

export default function ServicesPage() {
  return (
    <section id="services" className="w-full flex-1 flex items-center justify-center py-12 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
          My Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(services).map(([category, { icon, items, description }]) => (
            <Card key={category} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="animate-glow">
                    {icon}
                </div>
                <CardTitle className="font-headline">{category}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col gap-4">
                <p className="text-muted-foreground">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
