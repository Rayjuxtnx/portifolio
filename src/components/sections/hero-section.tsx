"use client";

import { useState, useEffect } from "react";
import DigitalClock from "@/components/digital-clock";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Phone, Mail, MessageSquare, Calendar } from "lucide-react";
import Link from "next/link";
import ServicePackageCarousel from "../service-package-carousel";

const HeroSection = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkTheme = mounted && (theme === 'dark' || theme === 'theme-tech-blue' || theme === 'theme-gold-charcoal');

  if (!mounted) {
    return (
        <section id="home" className="w-full h-full flex-1 flex items-center justify-center bg-background relative overflow-hidden">
             <div className="z-10 text-center flex flex-col items-center gap-4">
                <DigitalClock />
            </div>
        </section>
    );
  }

  return (
    <section id="home" className="w-full h-full flex-1 flex items-center justify-center bg-background relative overflow-hidden p-4">
       {isDarkTheme && <div className="absolute inset-0 bg-black bg-opacity-50 star-bg"></div>}
       <div className="z-10 container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 order-2 lg:order-1">
                    <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                        <Image
                            src="https://picsum.photos/seed/hacker/200/200"
                            alt="Phillip Otieno"
                            fill
                            style={{ objectFit: 'cover' }}
                            data-ai-hint="hacker man"
                        />
                    </div>
                    <div className="space-y-2">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold">Phillip Otieno</h1>
                        <p className="text-muted-foreground text-lg md:text-xl">Full-Stack Developer & Digital Strategist</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                        <Button asChild>
                            <Link href="/contact">
                                <Calendar /> Book Now
                            </Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href="https://github.com/Rayjuxtnx" target="_blank" rel="noopener noreferrer">
                                <Github /> GitHub
                            </Link>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                            <Link href="tel:0714955458">
                                <Phone />
                            </Link>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                            <Link href="mailto:onyangophilip244@gmail.com">
                                <Mail />
                            </Link>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                            <Link href="https://wa.me/254714955458" target="_blank" rel="noopener noreferrer">
                                <MessageSquare />
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-6 order-1 lg:order-2">
                    <ServicePackageCarousel />
                    <DigitalClock />
                </div>
            </div>
       </div>
    </section>
  );
};

export default HeroSection;
