"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AnimatePresence, motion } from "framer-motion";

const roles = ["All Roles", "Web Developer", "Digital Marketer", "Product Manager"];

export default function ProjectsPage() {
  const [selectedRole, setSelectedRole] = useState("All Roles");

  const filteredProjects = selectedRole === "All Roles"
    ? projects
    : projects.filter(p => p.tags?.includes(selectedRole));

  return (
    <section id="projects" className="w-full flex-1 py-12 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Featured Projects
            </h2>
            <Select onValueChange={setSelectedRole} defaultValue={selectedRole}>
              <SelectTrigger className="w-full md:w-[220px] bg-background shadow">
                <SelectValue placeholder="Filter by role..." />
              </SelectTrigger>
              <SelectContent>
                {roles.map(role => (
                  <SelectItem key={role} value={role}>{role}</SelectItem>
                ))}
              </SelectContent>
            </Select>
        </div>
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="flex"
              >
                <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full">
                  <div className="relative w-full h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover" }}
                      data-ai-hint={project.imageHint}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline">{project.title}</CardTitle>
                    <CardDescription>{project.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Tools Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <Badge key={tool} variant="outline">{tool}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="p-0 h-auto text-sm" asChild>
                      <Link href={`/projects/${project.slug}`}>
                        View Project <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}