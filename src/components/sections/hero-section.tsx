
"use client";

import { useState, useEffect } from "react";
import DigitalClock from "@/components/digital-clock";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkTheme = theme === 'dark' || theme === 'theme-tech-blue' || theme === 'theme-gold-charcoal';

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
       <div className="z-10 text-center flex flex-col items-center gap-6">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                <Image
                    src="https://placehold.co/200x200.png"
                    alt="Phillip Otieno"
                    fill
                    style={{ objectFit: 'cover' }}
                    data-ai-hint="professional headshot"
                />
            </div>
            <div className="space-y-2">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">Phillip Otieno</h1>
                <p className="text-muted-foreground text-lg md:text-xl">Digital Marketer | Web & Graphic Designer | Sales & Tech Enthusiast</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="outline" asChild>
                    <Link href="https://github.com/Rayjuxtnx" target="_blank" rel="noopener noreferrer">
                        <Github /> GitHub
                    </Link>
                </Button>
                 <Button variant="outline" asChild>
                    <Link href="https://www.linkedin.com/in/phillip-otieno-a241ba255/" target="_blank" rel="noopener noreferrer">
                        <Linkedin /> LinkedIn
                    </Link>
                </Button>
                <Button variant="outline" asChild>
                    <Link href="mailto:onyangophilip244@gmail.com">
                        <Mail /> Email
                    </Link>
                </Button>
                 <Button variant="outline" asChild>
                    <Link href="https://wa.me/254714955458" target="_blank" rel="noopener noreferrer">
                        <MessageSquare /> WhatsApp
                    </Link>
                </Button>
            </div>
            <DigitalClock />
        </div>
    </section>
  );
};

export default HeroSection;
