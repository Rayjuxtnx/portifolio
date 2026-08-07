'use server';
/**
 * @fileOverview A local portfolio assistant for the website.
 *
 * This keeps the experience available without pulling Genkit or other
 * server-side AI packages into the build.
 */

import { z } from 'zod';
import { projects } from '@/lib/projects';

const PortfolioAssistantInputSchema = z.object({
  question: z.string().describe("The user's question about Phillip Otieno."),
});
export type PortfolioAssistantInput = z.infer<typeof PortfolioAssistantInputSchema>;

const PortfolioAssistantOutputSchema = z.string();
export type PortfolioAssistantOutput = z.infer<typeof PortfolioAssistantOutputSchema>;

function buildPortfolioAnswer(question: string): string {
  const normalized = question.toLowerCase();

  if (normalized.includes('project')) {
    const featured = projects.slice(0, 3).map((project) => project.title).join(', ');
    return `Phillip has worked on projects such as ${featured}. He combines strategy, design, and development to deliver practical digital solutions.`;
  }

  if (normalized.includes('skill') || normalized.includes('expertise') || normalized.includes('experience')) {
    return 'Phillip brings experience across SEO, content strategy, web development, UI/UX thinking, and digital marketing. He is comfortable working across both creative and technical parts of a product.';
  }

  if (normalized.includes('service') || normalized.includes('offer')) {
    return 'Phillip helps businesses with web development, digital strategy, SEO, and product-focused creative work. He can support both the build and the messaging behind it.';
  }

  if (normalized.includes('contact') || normalized.includes('email') || normalized.includes('phone') || normalized.includes('whatsapp')) {
    return 'You can reach Phillip via email at onyangophilip244@gmail.com or WhatsApp at +254714955458.';
  }

  if (normalized.includes('seo')) {
    return 'Phillip has a strong SEO background and enjoys turning search insights into clear growth strategies for brands and websites.';
  }

  return 'I can help with Phillip’s background, projects, skills, services, and contact details.';
}

export async function askPortfolioAssistant(
  input: PortfolioAssistantInput,
): Promise<PortfolioAssistantOutput> {
  return buildPortfolioAnswer(input.question);
}
