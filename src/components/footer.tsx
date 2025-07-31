import { Code } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-secondary/30">
      <div className="container mx-auto py-6 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Code className="h-5 w-5 text-primary" />
          <span className="text-sm text-muted-foreground">
            &copy; {currentYear} Phillip Otieno. All rights reserved.
          </span>
        </div>
        <div className="text-sm text-muted-foreground">
          Built with <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Next.js</Link> & <Link href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Shadcn/ui</Link>.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
