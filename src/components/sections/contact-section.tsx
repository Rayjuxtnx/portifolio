
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MessageSquare, Facebook, Instagram, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="w-full flex-1 flex items-center justify-center py-12">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl md:text-4xl">Get in Touch</CardTitle>
            <CardDescription>Choose your preferred way to connect with me.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Button variant="outline" asChild>
                    <a href="mailto:phillipotieno577@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Mail className="mr-2"/> Gmail
                    </a>
                </Button>
                <Button variant="outline" asChild>
                    <a href="tel:0714955458">
                        <Phone className="mr-2"/> Phone Call
                    </a>
                </Button>
                <Button variant="outline" asChild>
                    <a href="https://wa.me/254714955458" target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="mr-2"/> WhatsApp
                    </a>
                </Button>
                 <Button variant="outline" asChild>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <Facebook className="mr-2"/> Facebook
                    </a>
                </Button>
                 <Button variant="outline" asChild>
                    <a href="https://t.me/your-telegram-username" target="_blank" rel="noopener noreferrer">
                        <Send className="mr-2"/> Telegram
                    </a>
                </Button>
                 <Button variant="outline" disabled>
                    <Instagram className="mr-2"/> Instagram
                </Button>
            </div>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or send a message</span>
                </div>
            </div>
             <form action="https://formspree.io/f/manovezj" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Enter your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="Enter your email" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Your message" required rows={5} />
              </div>
               <CardFooter className="flex justify-center p-0">
                <Button type="submit" size="lg">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                </Button>
                </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
