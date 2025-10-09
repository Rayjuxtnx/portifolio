import { services } from "@/lib/services";
import { notFound } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";


export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug];

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
              <h4 className="font-semibold mb-4 text-xl">What's included:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.items.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                        <Card key={item.title} className="flex flex-col">
                            <CardHeader className="flex-row items-start gap-4">
                                <ItemIcon className="w-6 h-6 text-accent mt-1" />
                                <div>
                                    <h5 className="font-semibold">{item.title}</h5>
                                    <p className="text-sm text-primary font-semibold">{item.price}</p>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </CardContent>
                        </Card>
                    )
                  })}
                </div>
            </div>
          </CardContent>
            <CardFooter className="bg-muted/50 p-6 rounded-b-lg flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="font-semibold text-lg text-center sm:text-left">Ready to get started or have questions?</p>
                <Button asChild size="lg">
                    <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" /> Contact Me
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
