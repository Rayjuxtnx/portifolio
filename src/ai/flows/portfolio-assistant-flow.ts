'use server';
/**
 * @fileOverview An AI assistant for the portfolio website.
 *
 * - askPortfolioAssistant - A function that answers questions about Phillip Otieno.
 * - PortfolioAssistantInput - The input type for the askPortfolioAssistant function.
 * - PortfolioAssistantOutput - The return type for the askPortfolioAssistant function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { projects } from '@/lib/projects';

const portfolioContext = `
Phillip Otieno is a results-driven digital marketing and creative professional with a strong foundation in SEO, social media strategy, web design, and visual content creation. With hands-on experience in sales, graphic design, and a growing interest in app development, system development, database integration and APIs, he brings a multidisciplinary approach to solving problems and delivering impactful digital experiences.

Skills:
- Product Management Tools: Trello, Notion, Jira, Miro
- User Research & UX: Figma, Adobe XD, surveys, usability testing
- Prototyping & Wireframing: Figma, Canva
- Data-Driven Decision Making: Google Analytics, Meta Ads Manager
- Marketing & Growth: SEO, email campaigns, social media strategy
- Basic Tech: HTML, CSS, JavaScript, Python, React, Tailwind, Node.js, Next.js, APIs, Databases

Projects:
Each project is listed with its title, a description of the project, the role Phillip played, the tools used, and the results achieved.
${projects.map(p => `- Title: ${p.title}\n  Description: ${p.description}\n  Role: ${p.role}\n  Tools: ${p.tools.join(', ')}\n  Results: ${p.results}`).join('\n\n')}

Contact Information:
- Email: onyangophilip244@gmail.com
- Phone: 0714955458
- WhatsApp: +254714955458
- GitHub: https://github.com/Rayjuxtnx
`;

const PortfolioAssistantInputSchema = z.object({
  question: z.string().describe("The user's question about Phillip Otieno."),
});
export type PortfolioAssistantInput = z.infer<typeof PortfolioAssistantInputSchema>;

const PortfolioAssistantOutputSchema = z.string();
export type PortfolioAssistantOutput = z.infer<typeof PortfolioAssistantOutputSchema>;

export async function askPortfolioAssistant(
  input: PortfolioAssistantInput,
): Promise<PortfolioAssistantOutput> {
  return portfolioAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'portfolioAssistantPrompt',
  input: { schema: PortfolioAssistantInputSchema },
  output: { schema: PortfolioAssistantOutputSchema },
  prompt: `You are a helpful AI assistant for Phillip Otieno's portfolio website. Your name is Phillip Virtual Assistant.
  You ONLY answer questions based on the context provided below.
  If the user asks a question that cannot be answered with the context, you MUST respond with: "I'm sorry, I am only designed to answer questions based on my creator."
  Be friendly and concise in your answers.

  Context:
  ${portfolioContext}

  User Question:
  {{{question}}}
  `,
});

const portfolioAssistantFlow = ai.defineFlow(
  {
    name: 'portfolioAssistantFlow',
    inputSchema: PortfolioAssistantInputSchema,
    outputSchema: PortfolioAssistantOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
