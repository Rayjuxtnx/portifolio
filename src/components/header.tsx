"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu, Code } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));
      let currentSection = "";
      for (const section of sections) {
        if (section && window.scrollY >= section.offsetTop - 100) {
          currentSection = section.id;
        }
      }
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(href.substring(1));
    setIsMenuOpen(false);
  };
  
  const NavItems = () => (
    <>
      {navLinks.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          onClick={(e) => handleLinkClick(e, href)}
          className={`text-sm font-medium transition-colors hover:text-primary ${
            activeSection === href.substring(1) ? "text-primary" : "text-muted-foreground"
          }`}
        >
          {label}
        </a>
      ))}
    </>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-sm transition-all ${
        isScrolled ? "bg-background/80 border-border" : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-semibold">PortfolioPro</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <NavItems />
        </nav>
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-4">
              <nav className="grid gap-4">
                <NavItems />
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
