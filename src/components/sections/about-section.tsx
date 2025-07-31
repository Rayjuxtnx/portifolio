import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="w-full flex-1 flex items-center justify-center py-12 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-3xl mx-auto shadow-lg border-2">
          <CardHeader>
            <CardTitle className="font-headline text-3xl text-center">Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-lg text-muted-foreground leading-relaxed">
              I am a results-driven digital marketing and creative professional with a strong foundation in SEO, social media strategy, web design, and visual content creation. With hands-on experience in sales, graphic design, and a growing interest in app development, system development, database integration and APIs, I bring a multidisciplinary approach to solving problems and delivering impactful digital experiences.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
