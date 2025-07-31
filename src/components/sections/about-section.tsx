"use client";

import { useState, useRef } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Volume2, Loader } from "lucide-react";
import { convertTextToSpeech } from "@/ai/flows/text-to-speech-flow";

const professionalSummary = "I am a results-driven digital marketing and creative professional with a strong foundation in SEO, social media strategy, web design, and visual content creation. With hands-on experience in sales, graphic design, and a growing interest in app development, system development, database integration and APIs, I bring a multidisciplinary approach to solving problems and delivering impactful digital experiences.";

const AboutSection = () => {
    const [isGeneratingSpeech, setIsGeneratingSpeech] = useState(false);
    const [audioDataUri, setAudioDataUri] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleListen = async () => {
        setIsGeneratingSpeech(true);
        setAudioDataUri(null);
        try {
            const { audioDataUri: newAudioDataUri } = await convertTextToSpeech({ text: professionalSummary });
            setAudioDataUri(newAudioDataUri);
            // The audio element will auto-play due to the `autoPlay` attribute
        } catch (error) {
            console.error("Failed to generate speech:", error);
            // Optionally, show an error to the user
        } finally {
            setIsGeneratingSpeech(false);
        }
    };
  
  return (
    <section id="about" className="w-full flex-1 flex items-center justify-center py-12 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-3xl mx-auto shadow-lg border-2">
          <CardHeader>
            <CardTitle className="font-headline text-3xl text-center">Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-lg text-muted-foreground leading-relaxed">
             {professionalSummary}
            </p>
          </CardContent>
          <CardFooter className="justify-center">
            <Button onClick={handleListen} disabled={isGeneratingSpeech} variant="outline">
                {isGeneratingSpeech ? (
                    <Loader className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                    <Volume2 className="mr-2 h-5 w-5" />
                )}
                {isGeneratingSpeech ? 'Generating...' : 'Listen to Summary'}
            </Button>
            {audioDataUri && (
                <audio ref={audioRef} src={audioDataUri} autoPlay onEnded={() => setAudioDataUri(null)} className="hidden" />
            )}
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
