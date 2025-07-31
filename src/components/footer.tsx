import { Code } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-secondary/30">
      <div className="container mx-auto py-6 px-4 md:px-6 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Code className="h-5 w-5 text-primary" />
          <span className="text-sm text-muted-foreground">
            &copy; {currentYear} Phillip Otieno. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
