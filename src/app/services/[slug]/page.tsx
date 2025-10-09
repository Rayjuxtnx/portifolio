import { services } from "@/lib/services";
import { notFound } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

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
          <CardContent className="space-y-8">
            {service.items && (
              <div>
                <h4 className="font-semibold mb-4 text-xl">What's included:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.items.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                        <Card key={item.title} className="flex flex-col">
                            <CardHeader className="flex-row items-start gap-4">
                                <ItemIcon className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
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
            )}

            {service.packages && (
                 <div>
                    <h4 className="font-headline text-2xl text-center font-bold mb-6">Service Packages</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {service.packages.map((pkg) => (
                            <Card key={pkg.title} className="flex flex-col shadow-md hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold">{pkg.title}</CardTitle>
                                    <p className="font-semibold text-primary text-lg">{pkg.price}</p>
                                    <CardDescription>{pkg.bestFor}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow space-y-4">
                                    <h5 className="font-semibold">Includes:</h5>
                                    <ul className="space-y-2">
                                        {pkg.includes.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                 </div>
            )}

             {service.addOns && (
                 <div className="pt-8">
                    <h4 className="font-headline text-2xl text-center font-bold mb-6">Optional Add-ons</h4>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                        {service.addOns.map((addOn) => (
                           <div key={addOn.title} className="bg-muted/50 p-4 rounded-lg flex justify-between items-center">
                                <p className="font-semibold">{addOn.title}</p>
                                <Badge variant="secondary">{addOn.price}</Badge>
                           </div>
                        ))}
                    </div>
                 </div>
            )}
          </CardContent>
            <CardFooter className="bg-muted/50 p-6 rounded-b-lg flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
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
