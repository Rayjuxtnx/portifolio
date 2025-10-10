
"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Volume2, Loader } from "lucide-react";
import { convertTextToSpeech } from "@/ai/flows/text-to-speech-flow";
import { cn } from "@/lib/utils";

const professionalSummary = "I am a results-driven digital marketing and creative professional with a strong foundation in SEO, social media strategy, web development, and visual content creation. With hands-on experience in sales, graphic design, and professional in app development, system development, database integration and APIs, I bring a multidisciplinary approach to solving problems and delivering impactful digital experiences.";

// Simple estimation of word duration
const estimateWordDuration = (word: string) => {
    const avgCharsPerSecond = 15;
    const duration = (word.length / avgCharsPerSecond) * 1000;
    return Math.max(duration, 150); // Minimum duration for short words
};

const AboutSection = () => {
    const [isGeneratingSpeech, setIsGeneratingSpeech] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioDataUri, setAudioDataUri] = useState<string | null>(null);
    const [currentWordIndex, setCurrentWordIndex] = useState(-1);
    const audioRef = useRef<HTMLAudioElement>(null);
    const summaryWords = professionalSummary.split(' ');

    const handleListen = async () => {
        setIsGeneratingSpeech(true);
        setAudioDataUri(null);
        setCurrentWordIndex(-1);
        try {
            const { audioDataUri: newAudioDataUri } = await convertTextToSpeech({ text: professionalSummary });
            setAudioDataUri(newAudioDataUri);
            // Audio will autoplay because of the `autoPlay` attribute
        } catch (error) {
            console.error("Failed to generate speech:", error);
        } finally {
            setIsGeneratingSpeech(false);
        }
    };
    
    useEffect(() => {
        let wordTimeout: NodeJS.Timeout;
        
        if (isPlaying && currentWordIndex < summaryWords.length - 1) {
            const word = summaryWords[currentWordIndex + 1];
            const duration = estimateWordDuration(word);

            wordTimeout = setTimeout(() => {
                setCurrentWordIndex(prevIndex => prevIndex + 1);
            }, duration);
        } else if (currentWordIndex >= summaryWords.length - 1) {
            setIsPlaying(false);
            setCurrentWordIndex(-1);
        }

        return () => clearTimeout(wordTimeout);
    }, [isPlaying, currentWordIndex, summaryWords.length]);


    const handleAudioPlay = () => {
        setIsPlaying(true);
        setCurrentWordIndex(0);
    }
    
    const handleAudioEnd = () => {
        setIsPlaying(false);
        setCurrentWordIndex(-1);
        setAudioDataUri(null);
    }

    return (
        <section id="about" className="w-full flex-1 flex items-center justify-center py-12 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <Card className="max-w-3xl mx-auto shadow-lg border-2">
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl text-center">Professional Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-center text-lg text-muted-foreground leading-relaxed">
                            {summaryWords.map((word, index) => (
                                <span key={index} className={cn(
                                    "transition-all duration-300",
                                    isPlaying && index === currentWordIndex
                                        ? "text-primary font-semibold scale-105 inline-block"
                                        : ""
                                )}>
                                    {word}{' '}
                                </span>
                            ))}
                        </p>
                    </CardContent>
                    <CardFooter className="justify-center">
                        <Button onClick={handleListen} disabled={isGeneratingSpeech || isPlaying} variant="outline">
                            {isGeneratingSpeech ? (
                                <Loader className="mr-2 h-5 w-5 animate-spin" />
                            ) : (
                                <Volume2 className="mr-2 h-5 w-5" />
                            )}
                            {isGeneratingSpeech ? 'Generating...' : isPlaying ? 'Playing...' : 'Listen to Summary'}
                        </Button>
                        {audioDataUri && (
                            <audio 
                                ref={audioRef} 
                                src={audioDataUri} 
                                autoPlay 
                                onPlay={handleAudioPlay}
                                onEnded={handleAudioEnd}
                                className="hidden" 
                            />
                        )}
                    </CardFooter>
                </Card>
            </div>
        </section>
    );
};

export default AboutSection;
