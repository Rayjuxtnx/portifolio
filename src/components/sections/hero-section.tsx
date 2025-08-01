"use client";

import { useState, useEffect } from "react";
import DigitalClock from "@/components/digital-clock";
import { useTheme } from "next-themes";

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
             <div className="z-10">
                <DigitalClock />
            </div>
        </section>
    );
  }

  return (
    <section id="home" className="w-full h-full flex-1 flex items-center justify-center bg-background relative overflow-hidden">
       {isDarkTheme && <div className="absolute inset-0 bg-black bg-opacity-50 star-bg"></div>}
      <div className="z-10">
        <DigitalClock />
      </div>
    </section>
  );
};

export default HeroSection;
