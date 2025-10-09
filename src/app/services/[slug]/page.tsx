import { services, Service } from "@/lib/services";
import { notFound } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = Object.values(services).find((s) => s.slug === params.slug) as Service | undefined;

  if (!service) {
    notFound();
  }
  const Icon = service.icon;

  return (
    <section className="w-full flex-1 flex items-center justify-center py-12 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader>
            <Button variant="ghost" size="sm" asChild className="mb-4 w-fit p-0 h-auto">
                <Link href="/services">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Services
                </Link>
            </Button>
            <div className="flex items-center gap-4">
               <div className="animate-glow">
                    <Icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-3xl md:text-4xl">{service.title}</CardTitle>
            </div>
            <CardDescription className="text-lg pt-2">{service.details}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-4 text-md">What's included:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 text-green-500 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
            <CardFooter className="bg-muted/50 p-6 rounded-b-lg flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="font-semibold text-lg">Interested in this service?</p>
                <Button asChild size="lg">
                    <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" /> Contact for Pricing
                    </Link>
                </Button>
            </CardFooter>
        </Card>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
    return Object.keys(services).map((slug) => ({
      slug,
    }));
  }
