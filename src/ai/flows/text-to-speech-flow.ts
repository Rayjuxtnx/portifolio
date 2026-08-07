'use server';
/**
 * @fileOverview A local fallback for text-to-speech.
 *
 * This avoids importing Genkit packages during the Next.js build.
 */

import { z } from 'zod';

const TextToSpeechInputSchema = z.object({
  text: z.string().describe('The text to be converted to speech.'),
});
export type TextToSpeechInput = z.infer<typeof TextToSpeechInputSchema>;

const TextToSpeechOutputSchema = z.object({
  audioDataUri: z
    .string()
    .describe('The generated audio as a data URI in WAV format.'),
});
export type TextToSpeechOutput = z.infer<typeof TextToSpeechOutputSchema>;

export async function convertTextToSpeech(
  input: TextToSpeechInput,
): Promise<TextToSpeechOutput> {
  return {
    audioDataUri: '',
  };
}
