"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { Code, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import { SettingsComponent } from "./settings-component";
import { Button } from "./ui/button";
import { AiAssistant } from "./ai-assistant";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);

  const NavItems = () => (
    <>
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === href ? "text-primary" : "text-muted-foreground"
          )}
        >
          {label}
        </Link>
      ))}
    </>
  );

  return (
    <>
      <header className="fixed md:sticky top-0 z-40 w-full border-b backdrop-blur-sm bg-background/80 border-border">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg font-semibold">PO FOLIO</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <NavItems />
          </nav>
          <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="hidden md:inline-flex" onClick={() => setIsAiAssistantOpen(true)}>
                <Bot />
                Phillip Virtual Assistant
              </Button>
              <SettingsComponent />
          </div>
        </div>
      </header>
      <AiAssistant open={isAiAssistantOpen} onOpenChange={setIsAiAssistantOpen} />
    </>
  );
};

export default Header;
