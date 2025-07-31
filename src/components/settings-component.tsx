"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
} from "@/components/ui/dropdown-menu"
import { Settings, Moon, Sun, Shield, FlaskConical, Baseline, FileText, Star, Palette, Sparkles, Accessibility } from "lucide-react"
import { Label } from "./ui/label"
import { useInteractiveMode } from "./interactive-provider"
import { Switch } from "./ui/switch"

export function SettingsComponent() {
  const { setTheme, theme } = useTheme();
  const { isInteractive, toggleInteractive } = useInteractiveMode();
  const [fontSize, setFontSize] = React.useState(16);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const storedFontSize = localStorage.getItem('fontSize');
    if (storedFontSize) {
      const parsedSize = Number(storedFontSize);
      if(!isNaN(parsedSize)) {
        setFontSize(parsedSize);
      }
    }
  }, []);

  React.useEffect(() => {
    if (mounted) {
      const root = window.document.documentElement;
      root.style.fontSize = `${fontSize}px`;
      localStorage.setItem('fontSize', fontSize.toString());
    }
  }, [fontSize, mounted]);

  const increaseFontSize = (e: React.MouseEvent) => {
    e.preventDefault();
    setFontSize(prev => Math.min(prev + 2, 24))
  };
  const decreaseFontSize = (e: React.MouseEvent) => {
    e.preventDefault();
    setFontSize(prev => Math.max(prev - 2, 12))
  };
  
  const handleInteractiveToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleInteractive();
  };

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon">
        <Settings className="h-[1.2rem] w-[1.2rem]"/>
        <span className="sr-only">Settings</span>
      </Button>
    );
  }

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
                <Settings className="h-[1.2rem] w-[1.2rem]"/>
                <span className="sr-only">Settings</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                  <Palette />
                  <span>Color Theme</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
                  <DropdownMenuRadioItem value="light">Default Light</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="dark">Default Dark</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="theme-tech-blue">Tech Blue</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="theme-pastel">Pastel</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="theme-gold-charcoal">Gold & Charcoal</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuLabel>Accessibility</DropdownMenuLabel>
             <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                    <Baseline />
                    <span>Font Size</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                    <DropdownMenuItem onSelect={decreaseFontSize}>
                        Decrease
                    </DropdownMenuItem>
                     <DropdownMenuItem onSelect={increaseFontSize}>
                        Increase
                    </DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuSub>
             <DropdownMenuItem onSelect={handleInteractiveToggle}>
                <Sparkles />
                <span>Interactive Mode</span>
                <Switch checked={isInteractive} className="ml-auto pointer-events-none" />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>About</DropdownMenuLabel>
             <DropdownMenuItem asChild>
                <Link href="/resume">
                    <FileText />
                    <span>Resume</span>
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
                <Link href="/testimonials">
                    <Star />
                    <span>Testimonials</span>
                </Link>
            </DropdownMenuItem>
             <DropdownMenuItem asChild>
                <Link href="/privacy-policy">
                    <Shield />
                    <span>Privacy Policy</span>
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
                <Link href="/future-projects">
                    <FlaskConical />
                    <span>Future Projects</span>
                </Link>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
