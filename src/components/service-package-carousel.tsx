"use client";

import { useState, useEffect } from "react";
import { services } from "@/lib/services";
import { AnimatePresence, motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

type ServicePackageInfo = {
  serviceTitle: string;
  packageTitle: string;
  price: string;
};

const allPackages: ServicePackageInfo[] = Object.values(services).flatMap(
  (service) =>
    service.packages?.map((pkg) => ({
      serviceTitle: service.title,
      packageTitle: pkg.title.replace(/🟢|🟡|🔵/g, '').trim(),
      price: pkg.price,
    })) ?? []
);

const ServicePackageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (allPackages.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % allPackages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  if (allPackages.length === 0) {
    return null;
  }

  const currentPackage = allPackages[currentIndex];

  return (
    <div className="h-48 w-full max-w-sm flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full"
        >
          <Card className="w-full shadow-lg bg-secondary/50">
            <CardHeader className="p-4">
               <Badge variant="outline" className="w-fit mb-2">{currentPackage.serviceTitle}</Badge>
              <CardTitle className="text-xl font-headline">{currentPackage.packageTitle}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
                <p className="font-semibold text-primary">{currentPackage.price}</p>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ServicePackageCarousel;
