
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Download, FileText, FileCode, FileType, MapPin, Phone, Mail, Linkedin, Laptop } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Badge } from "../ui/badge";

const ResumeSection = () => {
  return (
    <section id="resume" className="w-full flex-1 flex items-center justify-center py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-8 shadow-2xl border-2">
            <header className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                <div>
                    <h1 className="font-headline text-4xl font-bold">PHILLIP OTIENO</h1>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-muted-foreground mt-2 text-sm">
                        <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Nairobi, Kenya</div>
                        <a href="tel:0714955458" className="flex items-center gap-2 hover:text-primary"><Phone className="h-4 w-4" /> +254 714955458</a>
                        <a href="mailto:phillipotieno@email.com" className="flex items-center gap-2 hover:text-primary"><Mail className="h-4 w-4" /> phillipotieno@email.com</a>
                    </div>
                     <div className="flex flex-wrap gap-x-4 gap-y-1 text-muted-foreground mt-1 text-sm">
                        <a href="https://linkedin.com/in/phillipotieno" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary"><Linkedin className="h-4 w-4" /> linkedin.com/in/phillipotieno</a>
                        <a href="https://shopzakenya.co.ke" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary"><Laptop className="h-4 w-4" /> shopzakenya.co.ke</a>
                    </div>
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
            </header>
            
            <Separator className="my-6" />

            <main className="space-y-8">
                <section>
                    <h2 className="font-headline text-2xl font-semibold mb-3">Profile Summary</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Creative and tech-driven Digital Marketer, Web Designer, and Python Developer with strong experience in building websites, digital systems, and marketing strategies that connect brands to customers. Skilled in combining design, coding, and analytics to deliver modern business solutions — from e-commerce platforms to Wi-Fi billing systems. Passionate about leveraging technology to grow African businesses.
                    </p>
                </section>

                <section>
                    <h2 className="font-headline text-2xl font-semibold mb-4">Core Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <h3 className="font-semibold text-primary">💻 Technical & Development</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Python (FastAPI, Django, Flask)", "HTML, CSS, JavaScript", "Database Design (PostgreSQL, MySQL)", "API Integration (MPesa Daraja, Payment APIs)", "System Design (Wi-Fi Billing, Authentication Systems)", "UI/UX Design & Frontend Development", "Version Control (Git, GitHub)"].map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-semibold text-primary">🎨 Creative & Marketing</h3>
                             <div className="flex flex-wrap gap-2">
                                {["Digital Marketing (SEO, SEM, Social Media Strategy)", "Brand Design & Visual Identity", "Graphic Design (Canva, Adobe Photoshop, Illustrator)", "Video Creation & Animation (InVideo, CapCut, Canva Pro)", "Content Creation (YouTube, Reels, Ads)"].map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-semibold text-primary">📈 Business & Strategy</h3>
                             <div className="flex flex-wrap gap-2">
                                {["E-commerce Development (Amazon/Jumia-style sites)", "Campaign Analytics & Reporting", "Marketing Automation Tools (Meta Ads, Google Ads)", "Client Management & Project Planning"].map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="font-headline text-2xl font-semibold mb-4 border-b pb-2">Experience</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold">Digital Marketer – Clean Sparkle Outlook</h3>
                            <p className="text-sm text-muted-foreground">2024 – Present</p>
                            <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                                <li>Designed and launched a modern cleaning services website using HTML, CSS, and JavaScript.</li>
                                <li>Managed SEO and Google Business profile to increase online leads.</li>
                                <li>Created digital marketing content and campaigns to grow client reach.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Digital Marketer & Web Designer – Shop Za Kenya</h3>
                            <p className="text-sm text-muted-foreground">2023 – Present</p>
                            <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                                <li>Designed a full e-commerce brand connecting local Kenyan sellers with buyers.</li>
                                <li>Developed brand guidelines and marketing strategies to expand online visibility.</li>
                                <li>Integrated MPesa payment and built backend API routes using FastAPI.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Freelance Web & Graphic Designer</h3>
                            <p className="text-sm text-muted-foreground">2019 – 2023</p>
                            <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                                <li>Created websites and digital identities for SMEs and startups.</li>
                                <li>Designed business logos, posters, and product campaigns.</li>
                                <li>Delivered responsive web designs optimized for performance and SEO.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="font-headline text-2xl font-semibold mb-4 border-b pb-2">Projects</h2>
                     <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        <li><span className="font-semibold text-foreground">Wi-Fi Billing System:</span> Designed architecture for MPesa-integrated hotspot billing.</li>
                        <li><span className="font-semibold text-foreground">E-commerce Website:</span> Built full shopping platform with cart, checkout, and authentication (FastAPI backend).</li>
                        <li><span className="font-semibold text-foreground">Python Chatbot:</span> AI assistant capable of performing tasks like playlist arrangement, computation, and basic conversation.</li>
                        <li><span className="font-semibold text-foreground">Snake & Football Games:</span> Designed interactive Python games with advanced graphics and physics.</li>
                     </ul>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <section>
                        <h2 className="font-headline text-2xl font-semibold mb-4 border-b pb-2">Education</h2>
                        <div>
                            <h3 className="font-semibold">Diploma in Information Technology</h3>
                            <p className="text-sm text-muted-foreground">Kenya Institute of Software Engineering</p>
                        </div>
                    </section>
                    <section>
                        <h2 className="font-headline text-2xl font-semibold mb-4 border-b pb-2">Tools & Technologies</h2>
                        <div className="flex flex-wrap gap-2">
                            {["Python", "JavaScript", "HTML", "CSS", "SQL", "FastAPI", "Flask", "Django", "Canva", "Figma", "Adobe Photoshop", "Google Ads", "Meta Business Suite", "SEMrush", "Git", "GitHub"].map(tool => (
                                <Badge key={tool} variant="outline">{tool}</Badge>
                            ))}
                        </div>
                    </section>
                </div>
                
                 <section className="text-center text-muted-foreground text-sm pt-4">
                    <p>References available upon request</p>
                 </section>

            </main>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
