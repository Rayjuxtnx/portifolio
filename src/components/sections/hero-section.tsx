
"use client";

import { useState, useEffect } from "react";
import DigitalClock from "@/components/digital-clock";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, FileText } from "lucide-react";
import Link from "next/link";
import { ScrollingPackages } from "../scrolling-packages";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";

const AnimatedName = ({ name }: { name: string }) => {
    return (
      <>
        {name.split('').map((letter, index) => (
          <span
            key={index}
            className="animate-word-glow"
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </>
    );
};

const AnimatedSubtitle = ({ text }: { text: string }) => {
    return (
      <>
        {text.split('').map((letter, index) => (
          <span
            key={index}
            className="animate-letter-pulse"
            style={{ animationDelay: `${15 + index * 0.1}s`, display: 'inline-block' }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </>
    );
};


const HeroSection = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkTheme = mounted && (theme === 'dark' || theme === 'theme-tech-blue' || theme === 'theme-gold-charcoal');

  if (!mounted) {
    return (
        <section id="home" className="w-full flex-1 flex min-h-full items-center justify-center bg-background relative overflow-hidden py-8">
             <div className="z-10 text-center flex flex-col items-center gap-4">
                <DigitalClock />
            </div>
        </section>
    );
  }

  return (
    <section id="home" className="w-full flex-1 flex min-h-full items-center justify-center bg-background relative overflow-hidden p-4 py-4 md:py-8">
       {isDarkTheme && <div className="absolute inset-0 bg-black bg-opacity-50 star-bg opacity-30"></div>}
       
       <div className="absolute inset-0 opacity-[0.07]">
        <ScrollingPackages />
       </div>

       <div className="z-10 container mx-auto px-4">
            <div className="flex flex-col items-center text-center gap-4 md:gap-8 px-4">
                <div className="flex flex-col items-center gap-6">
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
                        <h1 className={cn(
                          "text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest",
                          isDarkTheme ? "font-code" : "font-headline"
                        )}>
                            <AnimatedName name="Phillip Otieno" />
                        </h1>
                        <p className="text-muted-foreground text-base md:text-lg lg:text-xl">
                            <AnimatedSubtitle text="Full-Stack Developer & Digital Strategist" />
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2">
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
                         <Button variant="outline" asChild>
                            <Link href="/resume">
                                <FileText /> CV
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2 md:gap-6 w-full max-w-sm lg:max-w-md mx-auto">
                    <DigitalClock />
                </div>
            </div>
       </div>
    </section>
  );
};

export default HeroSection;
