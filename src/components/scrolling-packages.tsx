"use client";

import { services } from "@/lib/services";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle2 } from "lucide-react";

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
).filter(p => p.packageTitle);

const PackageCard = ({ aPackage }: { aPackage: ServicePackageInfo }) => (
    <Card className="w-[300px] h-[350px] shadow-lg bg-secondary/30 flex flex-col flex-shrink-0 mx-4 animate-glow">
        <CardHeader className="p-4">
           <Badge variant="outline" className="w-fit mb-2">{aPackage.serviceTitle}</Badge>
          <CardTitle className="text-lg font-headline">{aPackage.packageTitle}</CardTitle>
          <p className="font-semibold text-primary text-sm">{aPackage.price}</p>
          <CardDescription className="text-xs italic">{aPackage.bestFor}</CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0 flex-1 flex flex-col min-h-0">
            <h4 className="text-xs font-semibold mb-2">Includes:</h4>
            <div className="flex-1 overflow-y-auto pr-3 text-xs text-muted-foreground space-y-2">
                {aPackage.includes.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                    </div>
                ))}
            </div>
        </CardContent>
    </Card>
);

export function ScrollingPackages() {
  if (allPackages.length === 0) {
    return null;
  }

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-marquee">
        {allPackages.map((pkg, index) => (
          <PackageCard key={`${pkg.packageTitle}-${index}`} aPackage={pkg} />
        ))}
      </div>
       <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-marquee" aria-hidden="true">
        {allPackages.map((pkg, index) => (
          <PackageCard key={`${pkg.packageTitle}-${index}-clone`} aPackage={pkg} />
        ))}
      </div>
    </div>
  );
}
