"use client";

import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bot, Send, User, Loader } from 'lucide-react';
import { askPortfolioAssistant } from '@/ai/flows/portfolio-assistant-flow';
import { ScrollArea } from './ui/scroll-area';

interface AiAssistantProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function AiAssistant({ open, onOpenChange }: AiAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await askPortfolioAssistant({ question: input });
      const assistantMessage: Message = { role: 'assistant', content: response };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        role: 'assistant',
        content: "I'm sorry, something went wrong. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[80vh] flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 font-headline">
            <Bot /> AI Assistant
          </SheetTitle>
          <SheetDescription>
            Ask me anything about Phillip Otieno and his portfolio.
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="flex-1 my-4 pr-4">
            <div className="space-y-4">
            {messages.map((message, index) => (
                <div key={index} className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}>
                    {message.role === 'assistant' && (
                        <div className="bg-primary/10 text-primary p-2 rounded-full">
                            <Bot className="w-5 h-5" />
                        </div>
                    )}
                    <div className={`rounded-lg p-3 text-sm ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                        {message.content}
                    </div>
                     {message.role === 'user' && (
                        <div className="bg-muted text-muted-foreground p-2 rounded-full">
                            <User className="w-5 h-5" />
                        </div>
                    )}
                </div>
            ))}
             {isLoading && (
                <div className="flex items-start gap-3">
                    <div className="bg-primary/10 text-primary p-2 rounded-full">
                        <Bot className="w-5 h-5" />
                    </div>
                    <div className="rounded-lg p-3 text-sm bg-secondary flex items-center">
                       <Loader className="w-5 h-5 animate-spin" />
                    </div>
                </div>
             )}
            </div>
        </ScrollArea>
        <div className="flex items-center gap-2 mt-auto">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about a project or skill..."
            disabled={isLoading}
          />
          <Button onClick={handleSend} disabled={isLoading}>
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
