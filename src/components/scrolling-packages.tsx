"use client";

import { services } from "@/lib/services";
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
    <div className="w-[300px] h-[350px] flex-shrink-0 mx-4 p-4 rounded-lg bg-background/5 text-foreground/60 flex flex-col">
        <div className="p-4">
           <Badge variant="outline" className="w-fit mb-2 bg-background/20 border-foreground/20">{aPackage.serviceTitle}</Badge>
          <h3 className="text-lg font-headline font-semibold">{aPackage.packageTitle}</h3>
          <p className="font-semibold text-primary/80 text-sm">{aPackage.price}</p>
          <p className="text-xs italic mt-1">{aPackage.bestFor}</p>
        </div>
        <div className="p-4 pt-0 flex-1 flex flex-col min-h-0">
            <h4 className="text-xs font-semibold mb-2">Includes:</h4>
            <div className="flex-1 overflow-y-auto pr-3 text-xs space-y-2">
                {aPackage.includes.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500/70 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
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
