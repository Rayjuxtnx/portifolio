
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Download, Briefcase, GraduationCap, MapPin, Phone, Mail, Laptop, Star, BrainCircuit } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart as RechartsBarChart, XAxis, YAxis, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from "recharts";
import Link from "next/link";
import { FileText, FileType, FileCode } from "lucide-react";


const skillsData = [
  { subject: 'Technical', A: 90, fullMark: 100 },
  { subject: 'Creative', A: 85, fullMark: 100 },
  { subject: 'Business', A: 80, fullMark: 100 },
  { subject: 'Marketing', A: 88, fullMark: 100 },
  { subject: 'Development', A: 95, fullMark: 100 },
];

const toolsData = [
  { name: 'Python/FastAPI', level: 95, fill: "hsl(var(--chart-1))" },
  { name: 'JS/React/Next.js', level: 90, fill: "hsl(var(--chart-2))" },
  { name: 'Databases (SQL)', level: 85, fill: "hsl(var(--chart-3))" },
  { name: 'Design (Figma/Canva)', level: 88, fill: "hsl(var(--chart-4))" },
  { name: 'Marketing Tools', level: 82, fill: "hsl(var(--chart-5))" },
];

const chartConfig = {
  level: {
    label: "Proficiency",
  },
} satisfies import("@/components/ui/chart").ChartConfig;


const ResumeSection = () => {
  return (
    <section id="resume" className="w-full flex-1 py-12 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
              <div>
                  <h1 className="font-headline text-4xl font-bold">PHILLIP OTIENO</h1>
                  <p className="text-primary font-semibold text-lg">Full-Stack Developer & Digital Strategist</p>
              </div>
               <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="default" className="w-full md:w-auto mt-2 md:mt-0">
                            <Download className="mr-2 h-4 w-4"/>
                            Download CV
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Select Format</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                             <a href="/placeholder-resume.pdf" download>
                                <FileText className="mr-2"/> PDF
                            </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                             <a href="/placeholder-resume.docx" download>
                                <FileType className="mr-2"/> DOCX
                            </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                             <a href="/placeholder-resume.md" download>
                                <FileCode className="mr-2"/> Markdown
                            </a>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-1 space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Contact Info</CardTitle>
                    </CardHeader>
                     <CardContent className="space-y-3 text-sm">
                        <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /> <span>Nairobi, Kenya</span></div>
                        <a href="tel:0714955458" className="flex items-center gap-3 hover:text-primary"><Phone className="h-4 w-4 text-primary" /> <span>+254 714955458</span></a>
                        <a href="mailto:onyangophilip244@gmail.com" className="flex items-center gap-3 hover:text-primary"><Mail className="h-4 w-4 text-primary" /> <span>onyangophilip244@gmail.com</span></a>
                        <a href="https://shopzakenya.co.ke" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary"><Laptop className="h-4 w-4 text-primary" /> <span>shopzakenya.co.ke</span></a>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Skills Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <ChartContainer config={{}} className="w-full h-[250px]">
                         <RadarChart data={skillsData} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                            <Radar name="Phillip" dataKey="A" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.6} />
                            <Tooltip content={<ChartTooltipContent />} />
                        </RadarChart>
                       </ChartContainer>
                    </CardContent>
                </Card>

                 <Card>
                    <CardHeader>
                        <CardTitle>Tools & Technologies</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig} className="w-full h-[250px]">
                            <RechartsBarChart layout="vertical" data={toolsData} margin={{ left: 20 }}>
                               <XAxis type="number" hide />
                               <YAxis dataKey="name" type="category" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} width={110} />
                                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                               <Bar dataKey="level" radius={5} background={{ fill: 'hsl(var(--muted))', radius: 5 }} />
                            </RechartsBarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2 space-y-8">
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Star className="text-primary"/> Profile Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <p className="text-muted-foreground leading-relaxed">
                            Creative and tech-driven Digital Marketer, Web Designer, and Python Developer with strong experience in building websites, digital systems, and marketing strategies that connect brands to customers. Skilled in combining design, coding, and analytics to deliver modern business solutions — from e-commerce platforms to Wi-Fi billing systems. Passionate about leveraging technology to grow African businesses.
                        </p>
                    </CardContent>
                 </Card>

                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Briefcase className="text-primary"/> Experience</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold">Digital Marketer – Clean Sparkle Outlook</h3>
                            <p className="text-sm text-muted-foreground">2024 – Present</p>
                            <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1 text-sm">
                                <li>Designed and launched a modern cleaning services website using HTML, CSS, and JavaScript.</li>
                                <li>Managed SEO and Google Business profile to increase online leads.</li>
                                <li>Created digital marketing content and campaigns to grow client reach.</li>
                            </ul>
                        </div>
                         <Separator />
                        <div>
                            <h3 className="text-lg font-semibold">Digital Marketer & Web Designer – Shop Za Kenya</h3>
                            <p className="text-sm text-muted-foreground">2023 – Present</p>
                            <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1 text-sm">
                                <li>Designed a full e-commerce brand connecting local Kenyan sellers with buyers.</li>
                                <li>Developed brand guidelines and marketing strategies to expand online visibility.</li>
                                <li>Integrated MPesa payment and built backend API routes using FastAPI.</li>
                            </ul>
                        </div>
                         <Separator />
                        <div>
                            <h3 className="text-lg font-semibold">Freelance Web & Graphic Designer</h3>
                            <p className="text-sm text-muted-foreground">2019 – 2023</p>
                            <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1 text-sm">
                                <li>Created websites and digital identities for SMEs and startups.</li>
                                <li>Designed business logos, posters, and product campaigns.</li>
                                <li>Delivered responsive web designs optimized for performance and SEO.</li>
                            </ul>
                        </div>
                    </CardContent>
                 </Card>

                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><BrainCircuit className="text-primary"/> Key Projects</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><span className="font-semibold text-foreground">Wi-Fi Billing System:</span> Designed architecture for MPesa-integrated hotspot billing.</li>
                            <li><span className="font-semibold text-foreground">E-commerce Website:</span> Built full shopping platform with cart, checkout, and authentication (FastAPI backend).</li>
                            <li><span className="font-semibold text-foreground">Python Chatbot:</span> AI assistant capable of performing tasks like playlist arrangement, computation, and basic conversation.</li>
                            <li><span className="font-semibold text-foreground">Snake & Football Games:</span> Designed interactive Python games with advanced graphics and physics.</li>
                        </ul>
                    </CardContent>
                </Card>

                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><GraduationCap className="text-primary"/> Education</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <h3 className="font-semibold">Diploma in Information Technology</h3>
                            <p className="text-sm text-muted-foreground">East Africa Institute of certified Studies</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
