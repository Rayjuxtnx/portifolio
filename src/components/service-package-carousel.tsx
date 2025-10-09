
"use client";

import { useState, useEffect } from "react";
import { services } from "@/lib/services";
import { AnimatePresence, motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle2 } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

type ServicePackageInfo = {
  serviceTitle: string;
  packageTitle: string;
  price: string;
  bestFor: string;
  includes: string[];
};

const allPackages: ServicePackageInfo[] = Object.values(services).flatMap(
  (service) =>
    service.packages?.map((pkg) => ({
      serviceTitle: service.title,
      packageTitle: pkg.title.replace(/🟢|🟡|🔵|🟣/g, '').trim(),
      price: pkg.price,
      bestFor: pkg.bestFor,
      includes: pkg.includes,
    })) ?? []
).filter(p => p.packageTitle); // Filter out any undefined packages

const ServicePackageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (allPackages.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % allPackages.length);
    }, 7000); // Increased interval to 7 seconds

    return () => clearInterval(interval);
  }, []);

  if (allPackages.length === 0) {
    return null;
  }

  const currentPackage = allPackages[currentIndex];

  return (
    <div className="h-96 w-full max-w-sm flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full h-full"
        >
          <Card className="w-full h-full shadow-lg bg-secondary/50 flex flex-col">
            <CardHeader className="p-4">
               <Badge variant="outline" className="w-fit mb-2">{currentPackage.serviceTitle}</Badge>
              <CardTitle className="text-xl font-headline">{currentPackage.packageTitle}</CardTitle>
              <p className="font-semibold text-primary">{currentPackage.price}</p>
              <CardDescription className="text-xs italic">{currentPackage.bestFor}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0 flex-1 flex flex-col min-h-0">
                <h4 className="text-sm font-semibold mb-2">Includes:</h4>
                <ScrollArea className="flex-1 pr-3">
                    <ul className="space-y-2">
                        {currentPackage.includes.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                                <CheckCircle2 className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </ScrollArea>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ServicePackageCarousel;
