"use client";

import { Code, Home, User, Briefcase, Star, Mail, Bot } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils";
import { useState } from "react";
import { AiAssistant } from "./ai-assistant";

const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: User },
    { href: "/skills", label: "Skills", icon: Star },
    { href: "/projects", label: "Projects", icon: Briefcase },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);

  return (
    <>
      <footer className="hidden md:block w-full bg-secondary/30">
        <div className="container mx-auto py-6 px-4 md:px-6 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5 text-primary" />
            <span className="text-sm text-muted-foreground">
              &copy; {currentYear} Phillip Otieno. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-t-lg">
          <div className="flex justify-around items-center h-16">
              {navItems.map(({ href, label, icon: Icon }) => (
                  <Link key={href} href={href} className={cn(
                      "flex flex-col items-center justify-center gap-1 w-full h-full text-xs font-medium transition-colors",
                      pathname === href ? "text-primary" : "text-muted-foreground hover:text-primary"
                  )}>
                      <Icon className="w-5 h-5" />
                      <span>{label}</span>
                  </Link>
              ))}
               <button
                  onClick={() => setIsAiAssistantOpen(true)}
                  className="flex flex-col items-center justify-center gap-1 w-full h-full text-xs font-medium transition-colors text-muted-foreground hover:text-primary"
                >
                  <Bot className="w-5 h-5" />
                  <span>SPK AI</span>
                </button>
          </div>
      </nav>
      <AiAssistant open={isAiAssistantOpen} onOpenChange={setIsAiAssistantOpen} />
    </>
  );
};

export default Footer;
