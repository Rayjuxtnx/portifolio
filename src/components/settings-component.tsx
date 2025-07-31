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
  DropdownMenuSubContent
} from "@/components/ui/dropdown-menu"
import { Settings, Moon, Sun, Shield, FlaskConical, Baseline } from "lucide-react"
import { Label } from "./ui/label"
import { Switch } from "./ui/switch"
import { useState, useEffect } from "react"

export function SettingsComponent() {
  const { setTheme, theme } = useTheme();
  const [fontSize, setFontSize] = useState(16);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedFontSize = localStorage.getItem('fontSize');
    if (storedFontSize) {
      setFontSize(Number(storedFontSize));
    }
  }, []);

  useEffect(() => {
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
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                <div className="flex items-center justify-between w-full">
                    <Label htmlFor="dark-mode" className="flex items-center gap-2 cursor-pointer">
                        {theme === 'dark' ? <Moon/> : <Sun/>}
                        Dark Mode
                    </Label>
                    <Switch
                        id="dark-mode"
                        checked={theme === 'dark'}
                        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                    />
                </div>
            </DropdownMenuItem>
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

            <DropdownMenuSeparator />
            <DropdownMenuLabel>About</DropdownMenuLabel>
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
