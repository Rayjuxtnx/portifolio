import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Disc, PartyPopper, ShieldCheck, Network } from "lucide-react";

const services = {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
