"use client";

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { services } from "@/lib/services";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useInteractiveMode } from "@/components/interactive-provider";

export default function ServicesPage() {
    const { isInteractive } = useInteractiveMode();

    const MotionCard = ({ children, service }: { children: React.ReactNode, service: (typeof services)[keyof typeof services] }) => {
        if (!isInteractive) {
            return (
                <div key={service.slug} className="flex">
                    {children}
                </div>
            )
        }
        return (
             <motion.div
                key={service.slug}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="flex"
              >
                {children}
            </motion.div>
        )
    }

  return (
    <section id="services" className="w-full flex-1 flex items-center justify-center py-12 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
          My Services
        </h2>
        <motion.div layout={isInteractive} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
                {Object.values(services).map((service) => {
                  const Icon = service.icon;
                  return (
                    <MotionCard service={service} key={service.slug}>
                        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col w-full">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <div className="animate-glow">
                                <Icon className="w-8 h-8 text-primary" />
                            </div>
                            <CardTitle className="font-headline">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">{service.description}</p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="link" className="p-0 h-auto text-sm" asChild>
                                <Link href={`/services/${service.slug}`}>
                                    View Details <ArrowUpRight className="ml-1 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                        </Card>
                    </MotionCard>
                )})}
            </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
