

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Download, Briefcase, GraduationCap, MapPin, Phone, Mail, Laptop, Star, BrainCircuit, ExternalLink, Code, Tv, Users, Target } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/projects";

const ResumeSection = () => {
  return (
    <section id="resume" className="w-full flex-1 py-12 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-4xl mx-auto shadow-lg p-6 sm:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex-1">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">PHILLIP OTIENO</h1>
                <p className="text-primary font-semibold text-lg">Full-Stack Developer & Digital Strategist</p>
            </div>
            <Button asChild className="w-full md:w-auto">
                <a href="/placeholder-resume.pdf" download>
                    <Download className="mr-2 h-4 w-4"/>
                    Download CV
                </a>
            </Button>
          </div>
          
          {/* Contact Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-8 text-muted-foreground">
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> <span>Nairobi, Kenya</span></div>
            <a href="tel:0714955458" className="flex items-center gap-2 hover:text-primary"><Phone className="h-4 w-4 text-primary" /> <span>+254 714955458</span></a>
            <a href="mailto:onyangophilip244@gmail.com" className="flex items-center gap-2 hover:text-primary col-span-2 md:col-span-1"><Mail className="h-4 w-4 text-primary" /> <span className="truncate">onyangophilip244@gmail.com</span></a>
            <a href="https://shopzakenya.co.ke" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary"><Laptop className="h-4 w-4 text-primary" /> <span>shopzakenya.co.ke</span></a>
          </div>

          <Separator className="my-8" />

          {/* Profile Summary */}
          <div>
            <h2 className="font-headline text-2xl font-bold mb-4 flex items-center gap-3"><Star className="text-primary"/> Profile Summary</h2>
            <p className="text-muted-foreground leading-relaxed">
              Creative and tech-driven Digital Marketer, Web Designer, and Python Developer with strong experience in building websites, digital systems, and marketing strategies that connect brands to customers. Skilled in combining design, coding, and analytics to deliver modern business solutions — from e-commerce platforms to Wi-Fi billing systems. Passionate about leveraging technology to grow African businesses.
            </p>
          </div>

          <Separator className="my-8" />

          {/* Core Skills */}
          <div>
              <h2 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3"><BrainCircuit className="text-primary"/> Core Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                      <h3 className="font-semibold text-lg flex items-center gap-2"><Code className="text-accent" /> Technical & Development</h3>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>Python (FastAPI, Django, Flask)</li>
                          <li>HTML, CSS, JavaScript</li>
                          <li>Database Design (PostgreSQL, MySQL)</li>
                          <li>API Integration (MPesa Daraja)</li>
                          <li>System Design (Wi-Fi Billing, Auth)</li>
                          <li>UI/UX Design & Frontend Dev</li>
                          <li>Version Control (Git, GitHub)</li>
                      </ul>
                  </div>
                   <div className="space-y-4">
                      <h3 className="font-semibold text-lg flex items-center gap-2"><Tv className="text-accent" /> Creative & Marketing</h3>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>Digital Marketing (SEO, SEM, Social)</li>
                          <li>Brand Design & Visual Identity</li>
                          <li>Graphic Design (Canva, Adobe Suite)</li>
                          <li>Video Creation & Animation</li>
                          <li>Content Creation (YouTube, Reels)</li>
                      </ul>
                  </div>
                   <div className="space-y-4">
                      <h3 className="font-semibold text-lg flex items-center gap-2"><Target className="text-accent" /> Business & Strategy</h3>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>E-commerce Development</li>
                          <li>Campaign Analytics & Reporting</li>
                          <li>Marketing Automation (Meta, Google)</li>
                          <li>Client Management & Project Planning</li>
                      </ul>
                  </div>
              </div>
          </div>
          
          <Separator className="my-8" />

          {/* Experience */}
          <div>
            <h2 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3"><Briefcase className="text-primary"/> Experience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold">Digital Marketer – Clean Sparkle Outlook</h3>
                <p className="text-sm text-muted-foreground">2024 – Present</p>
                <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1 text-sm">
                  <li>Designed and launched a modern cleaning services website.</li>
                  <li>Managed SEO and Google Business profile to increase online leads.</li>
                  <li>Created digital marketing content and campaigns.</li>
                </ul>
              </div>
              <Separator />
              <div>
                <h3 className="text-lg font-semibold">Digital Marketer & Web Designer – Shop Za Kenya</h3>
                <p className="text-sm text-muted-foreground">2023 – Present</p>
                <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1 text-sm">
                  <li>Designed a full e-commerce brand.</li>
                  <li>Developed brand guidelines and marketing strategies.</li>
                  <li>Integrated MPesa payment and built backend API routes.</li>
                </ul>
              </div>
              <Separator />
              <div>
                <h3 className="text-lg font-semibold">Freelance Web & Graphic Designer</h3>
                <p className="text-sm text-muted-foreground">2019 – 2023</p>
                <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1 text-sm">
                  <li>Created websites and digital identities for SMEs.</li>
                  <li>Designed business logos, posters, and product campaigns.</li>
                  <li>Delivered responsive web designs optimized for SEO.</li>
                </ul>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Projects */}
           <div>
              <h2 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3"><Users className="text-primary"/> Key Projects</h2>
              <div className="space-y-4">
                  {projects.slice(0, 4).map((project) => (
                      <div key={project.slug}>
                          <Link href={`/projects/${project.slug}`} className="group">
                              <h4 className="font-semibold text-foreground group-hover:text-primary group-hover:underline flex items-center gap-2">
                                  {project.title}
                                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                              </h4>
                          </Link>
                          <p className="text-sm text-muted-foreground">{project.description}</p>
                      </div>
                  ))}
              </div>
          </div>

          <Separator className="my-8" />
          
          {/* Education & References */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3"><GraduationCap className="text-primary"/> Education</h2>
                <div>
                  <h3 className="font-semibold">Diploma in Information Technology</h3>
                  <p className="text-sm text-muted-foreground">East Africa Institute of certified Studies</p>
                </div>
              </div>
               <div>
                <h2 className="font-headline text-2xl font-bold mb-6">References</h2>
                <p className="text-muted-foreground">Available upon request.</p>
              </div>
          </div>

        </Card>
      </div>
    </section>
  );
};

export default ResumeSection;
