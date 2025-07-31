import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Download } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4">
            Resume Snapshot
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            A brief overview of my professional journey.
          </p>
          <Card className="p-6 md:p-8 shadow-2xl border-2">
            <header className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                <div>
                    <h1 className="font-headline text-3xl font-bold">Phillip Otieno</h1>
                    <p className="text-muted-foreground">Digital Marketer | Web & Graphic Designer | Sales & Tech Enthusiast</p>
                </div>
                <Button variant="default" asChild className="w-full md:w-auto">
                    <a href="/placeholder-resume.pdf" download>
                        <Download className="mr-2 h-4 w-4"/>
                        Download
                    </a>
                </Button>
            </header>
            <Separator className="my-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-8">
                <section>
                  <h3 className="font-headline text-xl font-semibold mb-4 border-b pb-2">Work Experience</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold">Freelance Digital Specialist</h4>
                      <p className="text-sm text-muted-foreground">Self-Employed | 2021 - Present</p>
                      <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                        <li>Managed SEO, SMM, and web design projects for various clients.</li>
                        <li>Achieved an average of 30% increase in client engagement.</li>
                      </ul>
                    </div>
                     <div>
                      <h4 className="font-semibold">Sales Associate</h4>
                      <p className="text-sm text-muted-foreground">Tech Solutions Inc. | 2019 - 2021</p>
                      <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                        <li>Generated leads through cold calling and networking.</li>
                        <li>Exceeded sales targets by 15% for three consecutive quarters.</li>
                      </ul>
                    </div>
                  </div>
                </section>
                <section>
                  <h3 className="font-headline text-xl font-semibold mb-4 border-b pb-2">Education</h3>
                   <div>
                      <h4 className="font-semibold">Bachelor of Science in Marketing</h4>
                      <p className="text-sm text-muted-foreground">University of Example | 2015 - 2019</p>
                    </div>
                </section>
              </div>
              <div className="space-y-8">
                 <section>
                  <h3 className="font-headline text-xl font-semibold mb-4 border-b pb-2">Certifications</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Google Ads Certified</li>
                    <li>HubSpot Content Marketing</li>
                    <li>Meta Certified Digital Marketing Associate</li>
                  </ul>
                </section>
                <section>
                  <h3 className="font-headline text-xl font-semibold mb-4 border-b pb-2">Languages</h3>
                   <ul className="space-y-2 text-muted-foreground">
                    <li>English (Fluent)</li>
                    <li>Swahili (Native)</li>
                  </ul>
                </section>
                 <section>
                  <h3 className="font-headline text-xl font-semibold mb-4 border-b pb-2">Interests</h3>
                   <ul className="space-y-2 text-muted-foreground">
                    <li>Automation & Robotics</li>
                    <li>Landscape Photography</li>
                    <li>Creative Writing</li>
                  </ul>
                </section>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
