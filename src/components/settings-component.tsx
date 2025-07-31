"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Moon, Sun, Settings, FontSize } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Label } from "./ui/label"
import { Switch } from "./ui/switch"
import { useState, useEffect } from "react"

export function SettingsComponent() {
  const { setTheme, theme } = useTheme();
  const [fontSize, setFontSize] = useState(16);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const root = window.document.documentElement;
      root.style.fontSize = `${fontSize}px`;
    }
  }, [fontSize, mounted]);

  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 2, 24));
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 2, 12));

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon">
        <Settings className="h-[1.2rem] w-[1.2rem]"/>
        <span className="sr-only">Settings</span>
      </Button>
    );
  }
  

  return (
    <Popover>
        <PopoverTrigger asChild>
            <Button variant="ghost" size="icon">
                <Settings className="h-[1.2rem] w-[1.2rem]"/>
                <span className="sr-only">Settings</span>
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-60">
            <div className="grid gap-4">
                <div className="space-y-2">
                    <h4 className="font-medium leading-none">Settings</h4>
                    <p className="text-sm text-muted-foreground">
                        Adjust theme and font size.
                    </p>
                </div>
                <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="dark-mode">Dark Mode</Label>
                        <Switch
                            id="dark-mode"
                            checked={theme === 'dark'}
                            onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                         <Label>Font Size</Label>
                         <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon" className="h-8 w-8" onClick={decreaseFontSize}>
                                <span className="text-xs">A-</span>
                            </Button>
                            <Button variant="outline" size="icon" className="h-8 w-8" onClick={increaseFontSize}>
                                <span className="text-lg">A+</span>
                            </Button>
                         </div>
                    </div>
                </div>
            </div>
        </PopoverContent>
    </Popover>
  )
}
