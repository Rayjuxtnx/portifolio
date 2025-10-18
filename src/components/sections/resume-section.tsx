
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { projects } from "@/lib/projects";
import { Briefcase, Download, ExternalLink, GraduationCap, Laptop, Mail, MapPin, Phone, Star, Users, Code, Tv, Target, BrainCircuit } from "lucide-react";
import Link from "next/link";
import { Bar, BarChart, CartesianGrid, LabelList, PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const chartConfigSkills = {
  technical: { label: "Technical", color: "hsl(var(--chart-1))" },
  creative: { label: "Creative", color: "hsl(var(--chart-2))" },
  business: { label: "Business", color: "hsl(var(--chart-3))" },
};

const skillsData = [
  { skill: "Technical", value: 90, fill: "hsl(var(--chart-1))" },
  { skill: "Creative", value: 80, fill: "hsl(var(--chart-2))" },
  { skill: "Business", value: 75, fill: "hsl(var(--chart-3))" },
];

const toolsData = [
    { name: "Python/FastAPI", value: 90, fill: "var(--color-python)" },
    { name: "JS/React/Next", value: 85, fill: "var(--color-react)" },
    { name: "Databases", value: 80, fill: "var(--color-db)" },
    { name: "Design Tools", value: 88, fill: "var(--color-design)" },
    { name: "Marketing Tools", value: 82, fill: "var(--color-marketing)" },
];

const chartConfigTools = {
    value: { label: "Proficiency" },
    python: { label: "Python/FastAPI", color: "hsl(var(--chart-1))" },
    react: { label: "JS/React/Next", color: "hsl(var(--chart-2))" },
    db: { label: "Databases", color: "hsl(var(--chart-3))" },
    design: { label: "Design Tools", color: "hsl(var(--chart-4))" },
    marketing: { label: "Marketing Tools", color: "hsl(var(--chart-5))" },
};

const ResumeSection = () => {
  return (
    <section id="resume" className="w-full flex-1 py-12 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-6xl mx-auto shadow-lg p-6 sm:p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div className="flex-1">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold">PHILLIP OTIENO</h1>
                    <p className="text-primary font-semibold text-lg">Full-Stack Developer & Digital Strategist</p>
                </div>
                <Button asChild className="w-full md:w-auto">
                    <a href="/placeholder-resume.pdf" target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-4 w-4"/>
                        Download CV
                    </a>
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-1 space-y-8">
                     {/* Contact */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Contact</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm space-y-2 text-muted-foreground">
                            <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary flex-shrink-0" /> <span>Nairobi, Kenya</span></div>
                            <a href="tel:0714955458" className="flex items-center gap-3 hover:text-primary"><Phone className="h-4 w-4 text-primary flex-shrink-0" /> <span>+254 714955458</span></a>
                            <a href="mailto:onyangophilip244@gmail.com" className="flex items-center gap-3 hover:text-primary"><Mail className="h-4 w-4 text-primary flex-shrink-0" /> <span className="truncate">onyangophilip244@gmail.com</span></a>
                            <a href="https://shopzakenya.co.ke" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary"><Laptop className="h-4 w-4 text-primary flex-shrink-0" /> <span>shopzakenya.co.ke</span></a>
                        </CardContent>
                    </Card>

                    {/* Skills Breakdown Chart */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Skills Breakdown</CardTitle>
                            <CardDescription>A visual representation of my core competencies.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer config={chartConfigSkills} className="mx-auto aspect-square h-full max-h-[250px]">
                                <RadarChart data={skillsData}>
                                    <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                                    <PolarAngleAxis dataKey="skill" />
                                    <PolarGrid />
                                    <Radar dataKey="value" fill="var(--color-technical)" fillOpacity={0.6} dot={{ r: 4 }} />
                                </RadarChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                     {/* Tools and Technologies Chart */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Tools & Technologies</CardTitle>
                             <CardDescription>Proficiency across various modern tools.</CardDescription>
                        </CardHeader>
                        <CardContent>
                             <ChartContainer config={chartConfigTools} className="w-full h-[250px]">
                                <BarChart data={toolsData} layout="vertical" margin={{ left: 10, right: 40 }}>
                                    <CartesianGrid horizontal={false} />
                                    <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} tickMargin={10} style={{ fontSize: '12px' }} width={100} />
                                    <XAxis type="number" hide />
                                    <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                                    <Bar dataKey="value" radius={5}>
                                        <LabelList position="right" offset={10} dataKey="value" formatter={(value: number) => `${value}%`} style={{ fill: "hsl(var(--foreground))" }} />
                                    </Bar>
                                </BarChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-2 space-y-8">
                     {/* Profile Summary */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3"><Star className="text-primary"/> Profile Summary</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                                Creative and tech-driven Digital Marketer, Web Designer, and Python Developer with strong experience in building websites, digital systems, and marketing strategies that connect brands to customers. Skilled in combining design, coding, and analytics to deliver modern business solutions — from e-commerce platforms to Wi-Fi billing systems. Passionate about leveraging technology to grow African businesses.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Core Skills */}
                    <Card>
                        <CardHeader>
                             <CardTitle className="font-headline text-2xl font-bold flex items-center gap-3"><BrainCircuit className="text-primary"/> Core Skills</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <h3 className="font-semibold flex items-center gap-2"><Code className="text-accent" /> Technical & Development</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Python (FastAPI, Django, Flask)", "HTML, CSS, JavaScript", "Database Design (PostgreSQL, MySQL)", "API Integration (MPesa Daraja)", "System Design (Wi-Fi Billing, Auth)", "UI/UX Design & Frontend Dev", "Version Control (Git, GitHub)"].map(skill => <Badge variant="secondary" key={skill}>{skill}</Badge>)}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-semibold flex items-center gap-2"><Tv className="text-accent" /> Creative & Marketing</h3>
                                <div className="flex flex-wrap gap-2">
                                   {["Digital Marketing (SEO, SEM, Social)", "Brand Design & Visual Identity", "Graphic Design (Canva, Adobe Suite)", "Video Creation & Animation", "Content Creation (YouTube, Reels)"].map(skill => <Badge variant="secondary" key={skill}>{skill}</Badge>)}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-semibold flex items-center gap-2"><Target className="text-accent" /> Business & Strategy</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["E-commerce Development", "Campaign Analytics & Reporting", "Marketing Automation (Meta, Google)", "Client Management & Project Planning"].map(skill => <Badge variant="secondary" key={skill}>{skill}</Badge>)}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    
                    {/* Experience */}
                    <Card>
                        <CardHeader>
                             <CardTitle className="flex items-center gap-3"><Briefcase className="text-primary"/> Experience</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
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
                        </CardContent>
                    </Card>

                    {/* Projects */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3"><Users className="text-primary"/> Key Projects</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
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
                        </CardContent>
                    </Card>

                    {/* Education & References */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3"><GraduationCap className="text-primary"/> Education</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <h3 className="font-semibold">Diploma in Information Technology</h3>
                                <p className="text-sm text-muted-foreground">East Africa Institute of certified Studies</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>References</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">Available upon request.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </Card>
      </div>
    </section>
  );
};

export default ResumeSection;
